import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { validateLead } from "@/lib/lead";
import { rateLimit } from "@/lib/rate-limit";
import { getSiteUrl, isProductionRuntime } from "@/lib/site-url";

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

  // Same-origin browser posts send Origin; allow missing Origin for non-browser tools in non-prod only
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

function webhookUrlOk(raw: string): boolean {
  try {
    const u = new URL(raw);
    return u.protocol === "https:";
  } catch {
    return false;
  }
}

/**
 * Next Route Handler adapter for Lead-Funnel + Secure-API ideas.
 * Contract: 200 { ok, id } · honeypot 204 · validation 422 · rate limit 429 · delivery fail 503/502
 */
export async function POST(req: NextRequest) {
  if (!originAllowed(req)) {
    return NextResponse.json({ ok: false, error: "Forbidden origin" }, { status: 403 });
  }

  const ip = clientIp(req);
  const limited = await rateLimit(`leads:${ip}`, 10, 60_000);
  if (!limited.ok) {
    return NextResponse.json(
      { ok: false, error: "Too many requests" },
      {
        status: 429,
        headers: {
          "Retry-After": String(limited.retryAfterSec),
          "X-RateLimit-Backend": limited.backend,
        },
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
  console.info("[leads]", {
    id,
    source: data.source,
    projectType: data.projectType,
    location: data.location,
    hasPhone: Boolean(data.phone),
    rateLimitBackend: limited.backend,
  });

  const webhook = process.env.LEAD_WEBHOOK_URL?.trim();

  if (!webhook) {
    if (isProductionRuntime()) {
      console.error("[leads] LEAD_WEBHOOK_URL unset in production", id);
      return NextResponse.json(
        {
          ok: false,
          error: "Lead delivery is not configured. Please WhatsApp us or try again later.",
          id,
        },
        { status: 503 }
      );
    }
    // Local/dev: accept without persistence so flight tests can exercise the form
    console.warn("[leads] no LEAD_WEBHOOK_URL — accepted in non-production only", id);
    return NextResponse.json(
      { ok: true, id, persisted: false },
      { headers: { "X-RateLimit-Backend": limited.backend } }
    );
  }

  if (!webhookUrlOk(webhook)) {
    console.error("[leads] webhook URL must be https", id);
    return NextResponse.json(
      { ok: false, error: "Lead delivery misconfigured", id },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...data, honeypot: undefined }),
      signal: AbortSignal.timeout(8_000),
    });
    if (!res.ok) {
      console.error("[leads] webhook non-OK", id, res.status);
      return NextResponse.json(
        {
          ok: false,
          error: "Could not deliver your request. Please WhatsApp us or try again.",
          id,
        },
        { status: 502 }
      );
    }
  } catch {
    console.error("[leads] webhook failed", id);
    return NextResponse.json(
      {
        ok: false,
        error: "Could not deliver your request. Please WhatsApp us or try again.",
        id,
      },
      { status: 502 }
    );
  }

  return NextResponse.json(
    { ok: true, id, persisted: true },
    { headers: { "X-RateLimit-Backend": limited.backend } }
  );
}
