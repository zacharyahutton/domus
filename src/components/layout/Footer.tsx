"use client";

import Link from "next/link";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { navLinks, regionalOffices, siteConfig } from "@/content/site";
import { memberships } from "@/content/trust";

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
  { href: "/accessibility", label: "Accessibility" },
] as const;

function NewsletterInline({ source }: { source: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: String(fd.get("email") || "").trim(),
          source,
          honeypot: String(fd.get("company_website") || ""),
        }),
      });
      if (res.status === 204) {
        setStatus("done");
        return;
      }
      if (!res.ok) throw new Error("Could not subscribe. Try again shortly.");
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Subscribe failed");
      setStatus("error");
    }
  }

  if (status === "done") {
    return <p className="text-sm text-green">Thank you. You are on the Domus updates list.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3" noValidate>
      <label htmlFor={`nl-${source}`} className="sr-only">
        Email
      </label>
      <input
        id={`nl-${source}`}
        name="email"
        type="email"
        required
        maxLength={200}
        placeholder="Your email"
        className="w-full rounded-md border border-white/20 bg-white px-3 py-2.5 text-sm text-ink"
        autoComplete="email"
      />
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <input name="company_website" tabIndex={-1} autoComplete="off" />
      </div>
      {error ? (
        <p className="text-xs text-magenta" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-md bg-cta px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
      >
        {status === "loading" ? "Subscribing…" : "Subscribe now"}
      </button>
    </form>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-ink text-white">
      <div className="brand-stripe" aria-hidden />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4 md:px-6">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/brand/logo.png"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-contain"
            />
            <div>
              <p className="font-display text-2xl font-bold tracking-wide">DOMUS</p>
              <p className="text-sm text-white/70">Windows &amp; Doors Ltd.</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
            {siteConfig.tagline}. Serving homeowners, builders, and distributors across Jamaica and
            the Caribbean.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
            {siteConfig.years} Years of trust
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Image src="/media/brand/facebook.png" alt="" width={22} height={22} />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Image src="/media/brand/instagram.png" alt="" width={22} height={22} />
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Image src="/media/brand/youtube.png" alt="" width={22} height={22} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white/60">Explore</p>
          <ul className="mt-3 space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-white/85 transition hover:text-cta">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="text-sm text-white/85 transition hover:text-cta">
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white/60">Contact us</p>
          <p className="mt-3 text-sm text-white/85">
            <a className="hover:text-cta" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            {regionalOffices.map((o) => (
              <li key={o.region}>
                <p className="font-semibold text-white">{o.region}</p>
                {"phone" in o && o.phone ? (
                  <p>
                    P:{" "}
                    <a className="hover:text-cta" href={`tel:${o.phoneTel}`}>
                      {o.phone}
                    </a>
                  </p>
                ) : null}
                {"whatsapp" in o && o.whatsapp ? (
                  <p>
                    WhatsApp:{" "}
                    <a
                      className="hover:text-cta"
                      href={o.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {o.whatsapp}
                    </a>
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white/60">Subscribe</p>
          <p className="mt-2 text-sm text-white/75">
            Product updates, storm-season tips, and showroom news.
          </p>
          <div className="relative mt-4">
            <NewsletterInline source="footer" />
          </div>
          <div className="mt-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/60">Find us</p>
            <a
              href="https://www.google.com/maps/d/viewer?mid=1AVMMnrOmdZICLTc30w7beu9bVDnq0oKf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block overflow-hidden rounded-md border border-white/15 bg-white/5"
            >
              <Image
                src="/media/footer/caribbean-map.jpg"
                alt="Domus Caribbean locations map"
                width={640}
                height={360}
                className="h-auto w-full object-cover"
              />
            </a>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {memberships.map((m) => (
                <Image
                  key={m.id}
                  src={m.src}
                  alt={m.name}
                  width={56}
                  height={32}
                  className="h-8 w-auto object-contain opacity-90"
                />
              ))}
            </div>
            <div className="mt-4">
              <Image
                src="/media/footer/payment-cards.png"
                alt="We accept Visa and Mastercard"
                width={180}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-xs text-white/55 md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 text-center md:flex-row md:justify-between md:gap-4 md:text-left">
          <p className="shrink-0 whitespace-nowrap">© {siteConfig.copyrightYear} Domus Ltd</p>
          <nav
            aria-label="Legal"
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 md:gap-x-4"
          >
            {legalLinks.map((l, i) => (
              <span key={l.href} className="inline-flex items-center gap-x-3 md:gap-x-4">
                {i > 0 ? <span className="text-white/30" aria-hidden>·</span> : null}
                <Link
                  href={l.href}
                  className="text-sm text-white/80 transition hover:text-cta"
                >
                  {l.label}
                </Link>
              </span>
            ))}
          </nav>
          <p className="shrink-0 whitespace-nowrap">
            Made by{" "}
            <a
              href={siteConfig.designerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold hover:underline"
            >
              {siteConfig.designerCredit}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
