"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { siteConfig } from "@/content/site";
import { Typewriter } from "@/components/motion/Typewriter";

const slides = [
  {
    src: "/media/hero/slide-1.jpg",
    alt: "Modern Caribbean residence with expansive glazed openings at dusk",
  },
  {
    src: "/media/hero/slide-2.jpg",
    alt: "Contemporary home elevation with white Domus-style window frames",
  },
  {
    src: "/media/hero/slide-3.jpg",
    alt: "Bright living space opening to a patio through Domus sliding doors",
  },
  {
    src: "/media/hero/slide-4.jpg",
    alt: "Villa patio with wide sliding glass doors for coastal living",
  },
];

export function DomusHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-white"
      aria-labelledby="domus-hero-heading"
    >
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          sizes="100vw"
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/55 to-ink/80" aria-hidden />

      <div className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-4 pb-20 pt-32 text-center md:px-6">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-orange">
          Domus Windows &amp; Doors Ltd.
        </p>
        <h1
          id="domus-hero-heading"
          className="font-display mt-4 text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl"
        >
          Caribbean uPVC openings for homes that face sun, salt, and storms
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
          Domus manufactures hurricane-minded windows, doors, fencing, and handrails for Jamaica and
          the wider Caribbean. Homeowners, builders, and authorised distributors trust openings built
          for security, UV comfort, and storm-season confidence.
        </p>
        <div className="mt-4 min-h-[1.75rem] text-sm font-medium text-gold md:text-base">
          <Typewriter
            phrases={[
              "Built for Jamaica showrooms and Caribbean installs",
              "Basic, Security, and Hurricane series ready to specify",
              "Trusted by homeowners, builders, and distributors",
            ]}
          />
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-md bg-cta px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95"
          >
            Request a Quote
          </Link>
          <Link
            href="/gallery"
            className="rounded-md border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Explore the Gallery
          </Link>
          <Link
            href="/products"
            className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white/95 transition hover:bg-white/10"
          >
            Browse Products
          </Link>
        </div>
        <p className="mt-6 text-xs text-white/70">
          WhatsApp{" "}
          <a
            className="underline decoration-orange underline-offset-4 hover:text-orange"
            href={siteConfig.jamaica.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {siteConfig.jamaica.whatsapp}
          </a>
        </p>
        <div className="mt-8 flex gap-2" aria-label="Hero slide indicators">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              className={`h-1.5 w-6 rounded-full transition ${
                i === index ? "bg-cta" : "bg-white/35"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
