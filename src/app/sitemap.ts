import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { journalPosts, categoryToSlug, journalCategories } from "@/content/journal";
import { productCategories } from "@/content/products";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const staticRoutes = [
    "",
    "/gallery",
    "/insights",
    "/about",
    "/products",
    "/distributors",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
    "/accessibility",
  ].map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const galleryRoutes = projects.map((p) => ({
    url: `${base}/gallery/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const journalRoutes = journalPosts.map((p) => ({
    url: `${base}/insights/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const categoryRoutes = journalCategories.map((c) => ({
    url: `${base}/insights/category/${categoryToSlug(c)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const productRoutes = productCategories.map((s) => ({
    url: `${base}/products/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...galleryRoutes, ...journalRoutes, ...categoryRoutes, ...productRoutes];
}
