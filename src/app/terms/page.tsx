import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";

export const metadata = createMetadata({
  title: "Terms of Use",
  description: `Terms for using the ${siteConfig.name} website and requesting quotes.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <h1 className="font-display text-4xl font-semibold text-ink">Terms of Use</h1>
      <p className="mt-2 text-sm text-stone">Last updated: 19 July 2026</p>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-ink/90">
        <p>
          By using this website you agree to these terms. If you do not agree, please do not use the
          site.
        </p>
        <h2 className="font-display pt-4 text-xl font-semibold">Informational content</h2>
        <p>
          Product descriptions, warranty summaries, and educational articles are for general
          information. Final specifications, pricing, and warranty coverage are confirmed only in
          writing on an official Domus quote or contract.
        </p>
        <h2 className="font-display pt-4 text-xl font-semibold">Quotes and leads</h2>
        <p>
          Submitting a form is a request for contact — not an order. Domus may decline projects
          outside service areas or capacity.
        </p>
        <h2 className="font-display pt-4 text-xl font-semibold">Intellectual property</h2>
        <p>
          Domus branding, logo, and original site content are owned by {siteConfig.name} or its
          licensors. Do not copy or reuse without permission.
        </p>
        <h2 className="font-display pt-4 text-xl font-semibold">Limitation</h2>
        <p>
          To the fullest extent permitted by law, Domus is not liable for indirect or consequential
          damages arising from use of this website. Nothing here limits rights that cannot be
          excluded under applicable Jamaica law.
        </p>
        <h2 className="font-display pt-4 text-xl font-semibold">Contact</h2>
        <p>
          Questions:{" "}
          <a className="text-cta underline" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
      <p className="mt-10">
        <Link href="/privacy" className="text-sm font-semibold text-cta hover:underline">
          Privacy Policy →
        </Link>
      </p>
    </article>
  );
}
