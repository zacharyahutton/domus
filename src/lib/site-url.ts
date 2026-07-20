import { siteConfig } from "@/content/site";

let warnedMissingUrl = false;

/**
 * Canonical public site URL.
 * Development may fall back to localhost; production prefers NEXT_PUBLIC_SITE_URL
 * and falls back to siteConfig.url with a one-time warn (never localhost in prod).
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  const isProd =
    process.env.NODE_ENV === "production" || process.env.VERCEL_ENV === "production";

  if (isProd) {
    if (!warnedMissingUrl) {
      warnedMissingUrl = true;
      console.warn(
        "[seo] NEXT_PUBLIC_SITE_URL unset in production — using siteConfig.url. Set the env var."
      );
    }
    return siteConfig.url.replace(/\/$/, "");
  }

  return "http://localhost:3000";
}

export function isProductionRuntime() {
  return (
    process.env.NODE_ENV === "production" || process.env.VERCEL_ENV === "production"
  );
}
