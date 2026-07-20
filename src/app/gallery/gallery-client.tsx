"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { projects, projectCategories } from "@/content/projects";
import { galleryFolders } from "@/content/gallery-media";

export default function GalleryPage() {
  const params = useSearchParams();
  const view = params.get("view");
  const featuredOnly = view === "featured" || params.get("featured") === "1";
  const [folderSlug, setFolderSlug] = useState<string | "all">("all");

  const featured = useMemo(() => projects.filter((p) => p.featured), []);
  const beforeAfter = useMemo(
    () => projects.filter((p) => p.beforeAfter || p.category === "Before/After"),
    []
  );
  const catalogue = featuredOnly ? featured : projects;
  const activeFolder = galleryFolders.find((f) => f.slug === folderSlug);
  const productImages =
    folderSlug === "all"
      ? galleryFolders.flatMap((f) => f.images.map((img) => ({ ...img, folderTitle: f.title })))
      : (activeFolder?.images.map((img) => ({ ...img, folderTitle: activeFolder.title })) ?? []);

  return (
    <div>
      <section className="relative overflow-hidden bg-ink px-4 pb-16 pt-28 text-white md:px-6">
        <Image
          src="/media/hero/slide-4.jpg"
          alt=""
          fill
          className="object-cover opacity-40"
          sizes="100vw"
          priority
        />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange">Gallery</p>
          <h1 className="font-display mt-2 text-4xl font-semibold md:text-5xl">
            {featuredOnly ? "Featured installs" : "Projects & gallery"}
          </h1>
          <p className="mt-4 max-w-2xl text-white/85">
            {featuredOnly
              ? "Highlighted Domus installs — windows, doors, fencing, and handrails chosen for first-glance clarity."
              : "Browse featured installs, before-and-after transformations, and manufacturer product galleries by series."}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/gallery?view=featured"
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                featuredOnly ? "bg-cta text-white" : "border border-white/40 bg-white/10 text-white"
              }`}
            >
              Featured
            </Link>
            <Link
              href="/gallery"
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                !featuredOnly ? "bg-cta text-white" : "border border-white/40 bg-white/10 text-white"
              }`}
            >
              All gallery
            </Link>
            <a
              href="#product-galleries"
              className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold text-white"
            >
              Product lines
            </a>
            <a
              href="#before-after"
              className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold text-white"
            >
              Before &amp; after
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <ProjectGallery
          items={catalogue}
          categories={featuredOnly ? undefined : projectCategories}
          heading={featuredOnly ? "Featured only" : "Browse by category"}
        />

        {!featuredOnly ? (
          <>
            <section id="product-galleries" className="mt-20 scroll-mt-28">
              <h2 className="font-display text-3xl font-semibold">Product line galleries</h2>
              <p className="mt-2 max-w-2xl text-stone">
                Performance windows and Economical Security doors from Domus manufacturer photography.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setFolderSlug("all")}
                  className={`rounded-full px-3 py-1.5 text-sm font-semibold ${
                    folderSlug === "all" ? "bg-cta text-white" : "border border-line text-ink"
                  }`}
                >
                  All lines
                </button>
                {galleryFolders.map((f) => (
                  <button
                    key={f.slug}
                    type="button"
                    onClick={() => setFolderSlug(f.slug)}
                    className={`rounded-full px-3 py-1.5 text-sm font-semibold ${
                      folderSlug === f.slug ? "bg-cta text-white" : "border border-line text-ink"
                    }`}
                  >
                    {f.title}
                  </button>
                ))}
              </div>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {productImages.slice(0, 18).map((img) => (
                  <li
                    key={img.src}
                    className="overflow-hidden rounded-xl border border-line bg-white shadow-sm"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width:768px) 100vw, 33vw"
                      />
                    </div>
                    <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-stone">
                      {img.folderTitle}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section id="before-after" className="mt-20 scroll-mt-28">
              <h2 className="font-display text-3xl font-semibold">Before &amp; after</h2>
              <p className="mt-2 max-w-2xl text-stone">
                Drag each slider to the ends to see the full Domus transformation.
              </p>
              <div className="mt-10 space-y-16">
                {beforeAfter.map((p) => (
                  <BeforeAfterSlider
                    key={p.slug}
                    beforeSrc={p.beforeSrc || p.gallery[0]?.src || p.image.src}
                    afterSrc={p.afterSrc || p.image.src}
                    beforeAlt={`${p.title} before`}
                    afterAlt={`${p.title} after`}
                    heading={p.title}
                    subheading={`${p.location} · ${p.year} — ${p.summary}`}
                    className="!max-w-none !px-0 !py-0"
                  />
                ))}
              </div>
            </section>
          </>
        ) : null}
      </div>
    </div>
  );
}
