import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function absoluteUrl(path = "/") {
  return new URL(path, base).toString();
}

export function createMetadata({
  title,
  description,
  path = "/",
  image,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image ?? absoluteUrl("/brand/logo.png");
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_JM",
      type: "website",
      images: [{ url: ogImage, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

/** LocalBusiness JSON-LD — first principles from SEO/JSON-LD guide (G2). */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.jamaica.officeTel,
    areaServed: [
      { "@type": "Country", name: "Jamaica" },
      { "@type": "Place", name: "Caribbean" },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "JM",
      addressLocality: "Kingston",
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.youtube,
    ],
  };
}
