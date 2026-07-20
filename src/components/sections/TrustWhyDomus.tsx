"use client";

import Link from "next/link";
import Image from "next/image";
import { memberships, trustSignals } from "@/content/trust";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { CountUp } from "@/components/motion/CountUp";

export function TrustWhyDomus() {
  return (
    <SectionReveal
      imageSrc="/media/bg/modern-openings.jpg"
      imageAlt="Caribbean home openings and architecture"
      className="py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cta">Why Domus</p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-ink md:text-4xl">
              Built for Caribbean homes — proven where it matters
            </h2>
            <p className="mt-3 max-w-xl text-stone">
              Meet the Domus voice behind education content, check memberships, and follow real
              installs on social. Warranty, showrooms, and Google presence you can verify.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {trustSignals.map((t) => (
                <div
                  key={t.id}
                  className="rounded-xl border border-line bg-white/90 p-5 backdrop-blur"
                >
                  {t.value ? (
                    <p className="font-display text-3xl font-bold text-gold">
                      <CountUp to={Number(t.value)} suffix={t.suffix ?? ""} />
                    </p>
                  ) : null}
                  <h3 className="mt-1 font-display text-lg font-semibold">{t.title}</h3>
                  <p className="mt-2 text-sm text-stone">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-lg">
            <div className="relative aspect-[4/5]">
              <Image
                src="/brand/mr-domus.png"
                alt="Mr Domus portrait in Domus branded shirt"
                fill
                className="object-cover object-top"
                sizes="40vw"
              />
            </div>
            <div className="p-5">
              <p className="font-display text-xl font-semibold">Mr Domus</p>
              <p className="mt-1 text-sm text-stone">
                Education, before-and-after storytelling, and Caribbean homeowner guidance across
                Domus channels.
              </p>
              <Link
                href="/about"
                className="mt-3 inline-block text-sm font-semibold text-cta hover:underline"
              >
                Read the Domus story
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-line bg-white/95 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-cta">Memberships</p>
          <h3 className="font-display mt-2 text-2xl font-semibold">Industry affiliations</h3>
          <p className="mt-2 text-sm text-stone">
            Domus is recognised by leading Caribbean trade and hospitality organisations.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
            {memberships.map((m) => (
              <li key={m.id}>
                <a
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-28 flex-col items-center justify-center rounded-xl border border-line bg-fog px-4 transition hover:border-cta/50 hover:bg-white"
                  title={m.full}
                >
                  <Image
                    src={m.src}
                    alt={m.full}
                    width={140}
                    height={72}
                    className="max-h-14 w-auto object-contain"
                  />
                  <span className="mt-2 text-center text-xs font-semibold text-ink">{m.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionReveal>
  );
}
