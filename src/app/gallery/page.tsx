import { Suspense } from "react";
import GalleryClient from "./gallery-client";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Gallery & Projects",
  description:
    "Featured Domus installs across Jamaica and the Caribbean. Before and after stories, windows, doors, fencing, and handrails.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-6xl px-4 py-28 text-stone md:px-6">Loading gallery…</div>
      }
    >
      <GalleryClient />
    </Suspense>
  );
}
