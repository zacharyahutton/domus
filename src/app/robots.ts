import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  const noIndex = process.env.NEXT_PUBLIC_NOINDEX === "1";
  return {
    rules: noIndex
      ? { userAgent: "*", disallow: "/" }
      : { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
