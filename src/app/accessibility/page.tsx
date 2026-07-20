import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";

export const metadata = createMetadata({
  title: "Accessibility",
  description: `Accessibility commitment for the ${siteConfig.name} website.`,
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <h1 className="font-display text-4xl font-semibold text-ink">Accessibility</h1>
      <p className="mt-2 text-sm text-stone">Last updated: 19 July 2026</p>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-ink/90">
        <p>
          Domus aims to make this website usable for as many people as possible. We use semantic
          headings, keyboard-focusable controls, skip links, and respect{" "}
          <code className="rounded bg-fog px-1">prefers-reduced-motion</code> where animations are
          present.
        </p>
        <p>
          If you encounter a barrier — for example a form error that is unclear, or media without an
          adequate text alternative — please tell us so we can fix it.
        </p>
        <p>
          Contact:{" "}
          <a className="text-cta underline" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>{" "}
          · WhatsApp{" "}
          <a className="text-cta underline" href={siteConfig.jamaica.whatsappUrl}>
            {siteConfig.jamaica.whatsapp}
          </a>
          .
        </p>
      </div>
      <p className="mt-10">
        <Link href="/contact" className="text-sm font-semibold text-cta hover:underline">
          Contact →
        </Link>
      </p>
    </article>
  );
}
