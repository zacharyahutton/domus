import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/site";

/** Adapted from Patterns/Active/Premium-Hero — Domus brand + CTAs. */
export function DomusHero() {
  return (
    <section
      className="relative isolate min-h-[88vh] overflow-hidden bg-ink text-white"
      aria-labelledby="domus-hero-brand"
    >
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
        alt="Caribbean home with modern white window frames"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/35"
        aria-hidden
      />
      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 md:px-6 md:pb-20">
        <div className="max-w-2xl">
          <p id="domus-hero-brand" className="font-display text-3xl font-bold tracking-[0.12em] md:text-4xl">
            DOMUS
          </p>
          <p className="mt-1 text-sm font-medium text-white/75">Windows &amp; Doors Ltd.</p>
          <h1 className="font-display mt-6 text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            Hurricane-ready openings for Caribbean homes
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            Premium uPVC windows, doors, fencing, and handrails — built for Jamaica&apos;s sun,
            salt, and storm season.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-md bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95"
            >
              Begin Your Project
            </Link>
            <Link
              href="/projects"
              className="rounded-md border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              View Our Work
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/70">
            WhatsApp{" "}
            <a
              className="underline decoration-orange underline-offset-4 hover:text-orange"
              href={siteConfig.jamaica.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteConfig.jamaica.whatsapp}
            </a>{" "}
            · Office {siteConfig.jamaica.office}
          </p>
        </div>
      </div>
    </section>
  );
}
