"use client";

import { useEffect, useId, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project, ProjectCategory } from "@/content/projects";

/** Adapted from Patterns/Active/Portfolio-Gallery — Domus installs + before/after. */
export function ProjectGallery({
  items,
  categories,
  heading = "Selected installs",
}: {
  items: Project[];
  categories?: ProjectCategory[];
  heading?: string;
}) {
  const labelId = useId();
  const cats = useMemo(() => {
    if (categories?.length) return ["All", ...categories];
    return ["All", ...Array.from(new Set(items.map((i) => i.category)))];
  }, [categories, items]);

  const [active, setActive] = useState("All");
  const [open, setOpen] = useState<Project | null>(null);

  const visible = useMemo(
    () => (active === "All" ? items : items.filter((i) => i.category === active)),
    [active, items]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section aria-labelledby={labelId}>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 id={labelId} className="font-display text-3xl font-semibold text-ink md:text-4xl">
          {heading}
        </h2>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
          {cats.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={active === c}
              className={
                active === c
                  ? "rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-white"
                  : "rounded-full border border-line px-4 py-1.5 text-sm font-medium text-stone hover:border-orange hover:text-ink"
              }
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <li key={item.slug} className="group overflow-hidden rounded-lg border border-line bg-white">
            <button
              type="button"
              className="relative block w-full text-left"
              onClick={() => setOpen(item)}
              aria-label={`Preview ${item.title}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-fog">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              </div>
              <div className="border-t border-line bg-white px-4 py-3">
                <p className="font-display text-lg font-semibold text-ink">{item.title}</p>
                <p className="text-sm text-stone">
                  {item.category} · {item.location}
                </p>
              </div>
            </button>
            <div className="border-t border-line px-4 py-2">
              <Link href={`/projects/${item.slug}`} className="text-sm font-semibold text-orange hover:underline">
                View project
              </Link>
            </div>
          </li>
        ))}
      </ul>

      {open ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={() => setOpen(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-lg bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video bg-fog">
              <Image src={open.image.src} alt={open.image.alt} fill className="object-cover" sizes="800px" />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 p-4">
              <div>
                <p className="font-display text-xl font-semibold">{open.title}</p>
                <p className="text-sm text-stone">{open.summary}</p>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/projects/${open.slug}`}
                  className="rounded-md bg-orange px-4 py-2 text-sm font-semibold text-white"
                >
                  Open case study
                </Link>
                <button
                  type="button"
                  className="rounded-md border border-line px-4 py-2 text-sm font-medium"
                  onClick={() => setOpen(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
