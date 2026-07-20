import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { z } from "zod";
import { rateLimit } from "@/lib/rate-limit";
import { getSiteUrl, isProductionRuntime } from "@/lib/site-url";

const schema = z.object({
  email: z.string().trim().email().max(200),
  source: z.string().trim().max(80).default("website"),
  honeypot: z.string().max(200).optional().default(""),
});

function clientIp(req: NextRequest) {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function originAllowed(req: NextRequest): boolean {
  const site = getSiteUrl();
  let allowedHost: string;
  try {
    allowedHost = new URL(site).host;
  } catch {
    return false;
  }
  const origin = req.headers.get("origin");
  const referer = req.headers.get("referer");
  if (origin) {
    try {
      return new URL(origin).host === allowedHost;
    } catch {
      return false;
    }
  }
  if (referer) {
    try {
      return new URL(referer).host === allowedHost;
    } catch {
      return false;
    }
  }
  return !isProductionRuntime();
}

/** Newsletter stub: honeypot 204, rate limit 429, accepts in non-prod without webhook. */
export async function POST(req: NextRequest) {
  if (!originAllowed(req)) {
    return NextResponse.json({ ok: false, error: "Forbidden origin" }, { status: 403 });
  }

  const ip = clientIp(req);
  const limited = await rateLimit(`newsletter:${ip}`, 8, 60_000);
  if (!limited.ok) {
    return NextResponse.json(
      { ok: false, error: "Too many requests" },
      { status: 429, headers: { "Retry-After": String(limited.retryAfterSec) } }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Validation failed" }, { status: 422 });
  }

  if (parsed.data.honeypot && parsed.data.honeypot.length > 0) {
    return new NextResponse(null, { status: 204 });
  }

  const id = randomUUID();
  console.info("[newsletter]", { id, source: parsed.data.source });

  const webhook = process.env.NEWSLETTER_WEBHOOK_URL?.trim() || process.env.LEAD_WEBHOOK_URL?.trim();
  if (!webhook) {
    if (isProductionRuntime()) {
      return NextResponse.json(
        { ok: false, error: "Newsletter delivery is not configured yet." },
        { status: 503 }
      );
    }
    return NextResponse.json({ ok: true, id, persisted: false });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, type: "newsletter", ...parsed.data, honeypot: undefined }),
      signal: AbortSignal.timeout(8_000),
    });
    if (!res.ok) {
      return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, id, persisted: true });
}
