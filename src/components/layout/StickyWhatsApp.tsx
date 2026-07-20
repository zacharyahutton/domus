"use client";

import { siteConfig } from "@/content/site";

/** Sticky mobile WhatsApp CTA — conversion Quick Win vs live site. */
export function StickyWhatsApp() {
  return (
    <a
      href={siteConfig.jamaica.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-green px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green md:bottom-6 md:right-6"
      aria-label={`WhatsApp Domus at ${siteConfig.jamaica.whatsapp}`}
    >
      <span aria-hidden className="text-base">
        ✆
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
      <span className="sm:hidden">Chat</span>
    </a>
  );
}
