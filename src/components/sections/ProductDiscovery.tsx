"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { productCategories, productSeries, seriesGroups } from "@/content/products";

export function ProductDiscovery() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollBy(dir: number) {
    scrollerRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  }

  return (
    <section className="bg-fog py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cta">Products</p>
            <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">
              What you can buy from Domus
            </h2>
            <p className="mt-3 max-w-2xl text-stone">
              Scroll the series rail — Basic, Security, and Hurricane — then explore Windows, Doors,
              Fencing, and Handrails built for Caribbean climate.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="rounded-md border border-line bg-white px-3 py-2 text-sm"
              onClick={() => scrollBy(-1)}
              aria-label="Previous products"
            >
              Prev
            </button>
            <button
              type="button"
              className="rounded-md border border-line bg-white px-3 py-2 text-sm"
              onClick={() => scrollBy(1)}
              aria-label="Next products"
            >
              Next
            </button>
            <Link
              href="/products"
              className="rounded-md bg-cta px-4 py-2 text-sm font-semibold text-white"
            >
              All products
            </Link>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-8 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "thin" }}
        >
          {seriesGroups.map((group) => (
            <div
              key={`group-${group.id}`}
              className="w-[220px] shrink-0 snap-start rounded-xl border border-dashed border-cta/40 bg-white/70 p-5"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wider text-cta">Series</p>
              <h3 className="font-display mt-2 text-lg font-semibold text-ink">{group.title}</h3>
              <p className="mt-2 text-sm text-stone">{group.intro}</p>
              <Link
                href={`/products#${group.id}`}
                className="mt-4 inline-block text-sm font-semibold text-cta hover:underline"
              >
                Browse {group.id}
              </Link>
            </div>
          ))}
          {productSeries.map((s) => (
            <Link
              key={s.id}
              href={`/products#${s.group}`}
              className="group relative w-[280px] shrink-0 snap-start overflow-hidden rounded-xl border border-line bg-white transition hover:border-cta/50"
            >
              <div className="relative aspect-[4/3] bg-fog">
                <Image
                  src={s.image.src}
                  alt={s.image.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="280px"
                />
              </div>
              <div className="p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-stone">
                  {s.eyebrow}
                </p>
                <h3 className="font-display mt-1 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-stone">{s.summary}</p>
              </div>
            </Link>
          ))}
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((c, i) => (
            <li key={c.slug}>
              <Link
                href={`/products/${c.slug}`}
                className="block overflow-hidden rounded-xl border border-line bg-white transition hover:border-cta/40"
              >
                <div className="relative aspect-[16/10] bg-fog">
                  <Image
                    src={c.image.src}
                    alt={c.image.alt}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                  <span
                    className="absolute left-0 top-0 h-1 w-full"
                    style={{
                      background: [
                        "var(--domus-magenta)",
                        "var(--domus-green)",
                        "var(--domus-blue)",
                        "var(--domus-orange)",
                      ][i],
                    }}
                    aria-hidden
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-stone">
                    {c.eyebrow}
                  </p>
                  <h3 className="font-display mt-1 text-xl font-semibold">{c.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-stone">{c.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
