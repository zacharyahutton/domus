"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { siteConfig } from "@/content/site";

/**
 * Thin contact strip — home / hero only.
 * Scrolls away at top; never sticky with the main header.
 */
export function TopUtilityBar({ light = false }: { light?: boolean }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY < 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const text = light ? "text-ink/80" : "text-white/90";
  const muted = light ? "text-stone" : "text-white/70";
  const sep = light ? "text-line" : "text-white/35";
  const hover = light ? "hover:text-cta" : "hover:text-orange";
  const bar = light
    ? "border-b border-line/80 bg-white/90 backdrop-blur-md"
    : "border-b border-white/15 bg-ink/35 backdrop-blur-md";

  return (
    <div
      className={`absolute inset-x-0 top-0 z-[45] transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <div className={`${bar} text-[11px] md:text-xs ${text}`}>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-1.5 px-4 py-1.5 md:px-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className={`font-medium ${muted}`}>Jamaica</span>
            <a className={hover} href={`tel:${siteConfig.jamaica.officeTel}`}>
              {siteConfig.jamaica.office}
            </a>
            <span className={sep} aria-hidden>
              ·
            </span>
            <a
              className={`inline-flex items-center gap-1 ${hover}`}
              href={siteConfig.jamaica.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/media/brand/whatsapp.png" alt="" width={14} height={14} className="h-3.5 w-3.5" />
              WhatsApp {siteConfig.jamaica.whatsapp}
            </a>
            <span className={`hidden sm:inline ${sep}`} aria-hidden>
              ·
            </span>
            <a
              className={`hidden items-center gap-1 sm:inline-flex ${hover}`}
              href={siteConfig.regionalWhatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Regional {siteConfig.regionalWhatsapp.display}
            </a>
            <span className={`hidden md:inline ${sep}`} aria-hidden>
              ·
            </span>
            <a className={`hidden md:inline ${hover}`} href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Domus on Facebook"
              className="opacity-90 hover:opacity-100"
            >
              <Image src="/media/brand/facebook.png" alt="" width={16} height={16} className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Domus on Instagram"
              className="opacity-90 hover:opacity-100"
            >
              <Image src="/media/brand/instagram.png" alt="" width={16} height={16} className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Domus on YouTube"
              className="opacity-90 hover:opacity-100"
            >
              <Image src="/media/brand/youtube.png" alt="" width={16} height={16} className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
