"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { googleReviews } from "@/content/trust";
import { siteConfig } from "@/content/site";

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-[15px] leading-none ${i < count ? "text-[#f6bb06]" : "text-[#e5e5e5]"}`}
          aria-hidden
        >
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({
  r,
  expanded,
  onToggle,
}: {
  r: (typeof googleReviews)[number];
  expanded: boolean;
  onToggle: () => void;
}) {
  const long = r.text.length > 160;
  const shown = !long || expanded ? r.text : `${r.text.slice(0, 150).trimEnd()}…`;

  return (
    <article
      data-review-card
      className="group relative flex min-h-[280px] min-w-[85%] shrink-0 flex-col rounded-2xl border border-[#ece7de] bg-white p-5 shadow-[0_8px_28px_rgba(28,25,23,0.06)] sm:min-w-[300px] md:min-w-[320px]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <Image
            src={r.avatar}
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover ring-1 ring-[#ece7de]"
          />
          <div>
            <p className="text-[15px] font-semibold text-ink">{r.name}</p>
            <p className="text-xs text-stone">{r.when}</p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          {r.verified ? (
            <span
              className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#4285F4] text-[10px] font-bold text-white"
              title="Verified on Google"
              aria-label="Verified"
            >
              ✓
            </span>
          ) : null}
          <Image src="/media/brand/google.svg" alt="" width={20} height={20} className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-3">
        <StarRow count={r.stars} />
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4b5563]">{shown}</p>
      {long ? (
        <button
          type="button"
          onClick={onToggle}
          className="mt-2 self-start text-sm font-semibold text-cta hover:underline"
        >
          {expanded ? "Hide" : "Read more"}
        </button>
      ) : null}

      <span
        className="pointer-events-none absolute bottom-2 right-4 font-display text-7xl leading-none text-[#f0ebe3] transition-transform duration-500 group-hover:scale-105"
        aria-hidden
      >
        ”
      </span>
    </article>
  );
}

/** Endless Vacation / Trustindex-style Google reviews carousel with loop. */
export function ReviewsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const scrollByCard = useCallback((dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-review-card]");
    const amount = card ? card.offsetWidth + 16 : 320;
    const max = el.scrollWidth - el.clientWidth;
    const next = el.scrollLeft + dir * amount;

    if (dir === 1 && next >= max - 8) {
      el.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    if (dir === -1 && el.scrollLeft <= 8) {
      el.scrollTo({ left: max, behavior: "smooth" });
      return;
    }
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (paused || googleReviews.length < 2) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => scrollByCard(1), 6000);
    return () => window.clearInterval(id);
  }, [paused, scrollByCard]);

  return (
    <section className="bg-white py-16 md:py-20" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-cta">
            <span className="inline-block h-px w-8 bg-cta" aria-hidden />
            Our testimonials
          </p>
          <h2
            id="reviews-heading"
            className="font-display mt-3 text-3xl font-semibold text-ink md:text-4xl"
          >
            Trusted by Caribbean homeowners
          </h2>
          <p className="mt-3 text-stone">
            Clear guidance in Kingston and Montego Bay, climate-ready frames, and a quote process
            built around your openings — not a catalogue dump.
          </p>
          <div className="mt-7 flex flex-col items-center gap-2">
            <p className="font-display text-2xl font-bold tracking-wide text-ink">EXCELLENT</p>
            <StarRow count={5} />
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-stone">
              <span>
                Based on Google {siteConfig.jamaica.googleBusiness.rating} ·{" "}
                {siteConfig.jamaica.googleBusiness.address}
              </span>
              <Image
                src="/media/brand/google.svg"
                alt="Google"
                width={72}
                height={24}
                className="h-5 w-auto"
              />
            </div>
          </div>
        </div>

        <div
          className="relative mt-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <button
            type="button"
            aria-label="Previous reviews"
            onClick={() => scrollByCard(-1)}
            className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink shadow-md transition hover:border-cta md:flex"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next reviews"
            onClick={() => scrollByCard(1)}
            className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink shadow-md transition hover:border-cta md:flex"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto scroll-smooth px-1 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] md:px-12 [&::-webkit-scrollbar]:hidden"
          >
            {googleReviews.map((r) => (
              <ReviewCard
                key={r.id}
                r={r}
                expanded={!!expanded[r.id]}
                onToggle={() =>
                  setExpanded((prev) => ({ ...prev, [r.id]: !prev[r.id] }))
                }
              />
            ))}
          </div>

          <div className="mt-4 flex justify-center gap-3 md:hidden">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scrollByCard(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-lg"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => scrollByCard(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-lg"
            >
              ›
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={siteConfig.jamaica.googleBusiness.searchUrl}
            className="rounded-md bg-cta px-5 py-2.5 text-sm font-semibold text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google
          </a>
          <a
            href={siteConfig.social.instagram}
            className="rounded-md border border-ink/20 bg-white px-5 py-2.5 text-sm font-semibold text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram installs
          </a>
        </div>
      </div>
    </section>
  );
}
