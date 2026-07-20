import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";

export const metadata = createMetadata({
  title: "Cookie Policy",
  description: `How ${siteConfig.name} uses cookies and similar technologies on this website.`,
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <h1 className="font-display text-4xl font-semibold text-ink">Cookie Policy</h1>
      <p className="mt-2 text-sm text-stone">Last updated: 19 July 2026</p>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-ink/90">
        <p>
          This site aims to use minimal cookies. Essential cookies or local storage may be required
          for security, rate limiting at the edge, or hosting platform operation.
        </p>
        <h2 className="font-display pt-4 text-xl font-semibold">Analytics</h2>
        <p>
          We do not currently load third-party marketing analytics cookies on this rebuild. If that
          changes, this page will be updated and a consent mechanism will be added where required.
        </p>
        <h2 className="font-display pt-4 text-xl font-semibold">Managing cookies</h2>
        <p>
          You can control cookies through your browser settings. Blocking essential cookies may
          affect form submission or site reliability.
        </p>
        <h2 className="font-display pt-4 text-xl font-semibold">More information</h2>
        <p>
          See our{" "}
          <Link href="/privacy" className="text-cta underline">
            Privacy Policy
          </Link>{" "}
          or contact {siteConfig.email}.
        </p>
      </div>
    </article>
  );
}
