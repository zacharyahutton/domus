import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

export function absoluteUrl(path = "/") {
  return new URL(path, getSiteUrl()).toString();
}

export function createMetadata({
  title,
  description,
  path = "/",
  image,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image ?? absoluteUrl("/brand/logo.png");
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
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

/** LocalBusiness JSON-LD — SEO Knowledge first principles (no invented street address). */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: getSiteUrl(),
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

export function faqPageJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  date,
  image,
}: {
  title: string;
  description: string;
  path: string;
  date: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: absoluteUrl("/brand/logo.png") },
    },
    mainEntityOfPage: absoluteUrl(path),
    image: image ? [image] : [absoluteUrl("/brand/logo.png")],
  };
}
