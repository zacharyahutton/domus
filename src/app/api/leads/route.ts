import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { validateLead } from "@/lib/lead";
import { rateLimit } from "@/lib/rate-limit";

/**
 * Next Route Handler adapter for Patterns/Active/Lead-Funnel + Secure-API ideas.
 * Contract: 200 { ok, id } · honeypot 204 · validation 422 · rate limit 429
 */
export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  const limited = rateLimit(`leads:${ip}`, 10, 60_000);
  if (!limited.ok) {
    return NextResponse.json(
      { ok: false, error: "Too many requests" },
      {
        status: 429,
        headers: { "Retry-After": String(limited.retryAfterSec) },
      }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = validateLead(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const data = parsed.data;
  if (data.honeypot && data.honeypot.length > 0) {
    return new NextResponse(null, { status: 204 });
  }

  const id = randomUUID();
  // Intentionally avoid logging full PII — structured event only
  console.info("[leads]", {
    id,
    source: data.source,
    projectType: data.projectType,
    location: data.location,
    hasPhone: Boolean(data.phone),
  });

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...data, honeypot: undefined }),
      });
    } catch {
      console.error("[leads] webhook failed", id);
    }
  }

  return NextResponse.json({ ok: true, id });
}
