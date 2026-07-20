"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Project, ProjectCategory } from "@/content/projects";

/** Adapted from Patterns/Active/Portfolio-Gallery — Domus installs + focus-trapped lightbox. */
export function ProjectGallery({
  items,
  categories,
  heading = "Selected installs",
  hideFilters = false,
}: {
  items: Project[];
  categories?: ProjectCategory[];
  heading?: string;
  hideFilters?: boolean;
}) {
  const labelId = useId();
  const panelId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();

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
    lastFocus.current = document.activeElement as HTMLElement | null;
    const t = window.setTimeout(() => closeRef.current?.focus(), 0);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key !== "Tab" || !closeRef.current) return;
      const dialog = closeRef.current.closest("[data-gallery-dialog]");
      if (!dialog) return;
      const focusable = dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      lastFocus.current?.focus();
    };
  }, [open]);

  return (
    <section aria-labelledby={labelId}>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 id={labelId} className="font-display text-3xl font-semibold text-ink md:text-4xl">
          {heading}
        </h2>
        {!hideFilters ? (
          <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Filter by category">
            {cats.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={active === c}
                className={
                  active === c
                    ? "rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-white transition"
                    : "rounded-full border border-line px-4 py-1.5 text-sm font-medium text-stone transition hover:border-cta hover:text-ink"
                }
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {visible.map((item) => (
          <li
            key={item.slug}
            className="group overflow-hidden rounded-lg border border-line bg-white transition hover:border-cta/40"
          >
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
              <Link
                href={`/gallery/${item.slug}`}
                className="text-sm font-semibold text-cta hover:underline"
              >
                View project
              </Link>
            </div>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby={panelId}
            data-gallery-dialog
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-lg bg-white shadow-xl"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: 8 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video bg-fog">
                <Image
                  src={open.image.src}
                  alt={open.image.alt}
                  fill
                  className="object-cover"
                  sizes="800px"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 p-4">
                <div>
                  <p id={panelId} className="font-display text-xl font-semibold">
                    {open.title}
                  </p>
                  <p className="text-sm text-stone">{open.summary}</p>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/gallery/${open.slug}`}
                    className="rounded-md bg-cta px-4 py-2 text-sm font-semibold text-white"
                  >
                    Open case study
                  </Link>
                  <button
                    ref={closeRef}
                    type="button"
                    className="rounded-md border border-line px-4 py-2 text-sm font-medium"
                    onClick={() => setOpen(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
