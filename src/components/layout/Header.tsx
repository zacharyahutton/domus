"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navLinks, siteConfig } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="brand-stripe" aria-hidden />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/brand/logo.png"
            alt={`${siteConfig.shortName} logo`}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-contain"
            priority
          />
          <span className="font-display text-left leading-tight">
            <span className="block text-lg font-bold tracking-wide text-ink md:text-xl">
              DOMUS
            </span>
            <span className="block text-[11px] font-medium text-stone md:text-xs">
              Windows &amp; Doors Ltd.
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/80 transition hover:text-orange"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={siteConfig.jamaica.whatsappUrl}
            className="rounded-md bg-orange px-4 py-2 text-sm font-semibold text-white transition hover:brightness-95"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center rounded-md border border-line px-3 py-2 text-sm font-medium md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-white px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block py-1 text-base font-medium"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={siteConfig.jamaica.whatsappUrl}
                className="block rounded-md bg-orange px-4 py-2 text-center font-semibold text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp {siteConfig.jamaica.whatsapp}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
