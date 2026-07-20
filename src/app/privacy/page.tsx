import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects and uses contact information from quote requests.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <h1 className="font-display text-4xl font-semibold text-ink">Privacy Policy</h1>
      <p className="mt-2 text-sm text-stone">Last updated: 19 July 2026</p>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-ink/90">
        <p>
          {siteConfig.name} (&ldquo;Domus,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) respects your
          privacy. This policy explains what we collect when you request a quote or contact us
          through this website.
        </p>
        <h2 className="font-display pt-4 text-xl font-semibold">Information we collect</h2>
        <p>
          When you submit the quote form we may collect your name, email address, phone number,
          project details (type, location, budget band, timeline), and message content. We also
          receive technical metadata such as approximate IP address for abuse prevention.
        </p>
        <h2 className="font-display pt-4 text-xl font-semibold">How we use information</h2>
        <p>
          We use your information to respond to project inquiries, provide quotes, improve our
          services, and protect against spam or abuse. We do not sell your personal information.
        </p>
        <h2 className="font-display pt-4 text-xl font-semibold">Sharing</h2>
        <p>
          We may share inquiry details with Domus staff and trusted processors that help deliver
          messages (for example a configured webhook or email/CRM tool). Those processors may only
          use data to perform services for us.
        </p>
        <h2 className="font-display pt-4 text-xl font-semibold">Retention</h2>
        <p>
          We retain inquiry records as long as needed to complete your request and for ordinary
          business records, unless a longer period is required by law.
        </p>
        <h2 className="font-display pt-4 text-xl font-semibold">Your choices</h2>
        <p>
          Contact us at{" "}
          <a className="text-cta underline" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>{" "}
          or WhatsApp{" "}
          <a className="text-cta underline" href={siteConfig.jamaica.whatsappUrl}>
            {siteConfig.jamaica.whatsapp}
          </a>{" "}
          to ask about access, correction, or deletion of your inquiry data.
        </p>
        <h2 className="font-display pt-4 text-xl font-semibold">Contact</h2>
        <p>
          Jamaica office: {siteConfig.jamaica.office}. Email: {siteConfig.email}. Showrooms:{" "}
          {siteConfig.jamaica.showrooms.join(" and ")}.
        </p>
      </div>
      <p className="mt-10">
        <Link href="/contact" className="text-sm font-semibold text-cta hover:underline">
          Contact Domus →
        </Link>
      </p>
    </article>
  );
}
