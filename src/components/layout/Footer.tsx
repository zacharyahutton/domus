import Link from "next/link";
import { navLinks, siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-ink text-white">
      <div className="brand-stripe" aria-hidden />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <p className="font-display text-2xl font-bold tracking-wide">DOMUS</p>
          <p className="mt-1 text-sm text-white/70">Windows &amp; Doors Ltd.</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
            {siteConfig.tagline}. Serving Jamaica and the Caribbean with hurricane-minded
            uPVC systems.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
            {siteConfig.years} Years of trust
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white/60">Explore</p>
          <ul className="mt-3 space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-white/85 hover:text-orange">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white/60">
            Jamaica contact
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/85">
            <li>
              Office{" "}
              <a className="hover:text-orange" href={`tel:${siteConfig.jamaica.officeTel}`}>
                {siteConfig.jamaica.office}
              </a>
            </li>
            <li>
              WhatsApp{" "}
              <a
                className="hover:text-orange"
                href={siteConfig.jamaica.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.jamaica.whatsapp}
              </a>
            </li>
            <li>
              <a className="hover:text-orange" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </li>
            <li>Showrooms: {siteConfig.jamaica.showrooms.join(" · ")}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/50 md:px-6">
        © {new Date().getFullYear()} {siteConfig.name}. Flight-test rebuild for DevOS —
        content placeholders inspired by public Domus materials.
      </div>
    </footer>
  );
}
