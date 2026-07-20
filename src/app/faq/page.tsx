import Link from "next/link";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { LeadForm } from "@/components/forms/LeadForm";
import { faqs } from "@/content/trust";
import { createMetadata, faqPageJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "FAQ",
  description:
    "Answers about Domus uPVC, colours, warranty, Jamaica install, product series, and where to buy across the Caribbean.",
  path: "/faq",
});

export default function FaqPage() {
  const faqLd = faqPageJsonLd(faqs);
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 pt-28 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-cta">Any questions</p>
          <FaqAccordion items={faqs} title="Have questions?" />
        </div>
        <div className="h-fit rounded-2xl bg-ink p-6 text-white md:p-8">
          <h2 className="font-display text-2xl font-semibold">Still have questions?</h2>
          <p className="mt-2 text-sm text-white/75">
            Send project details and a Domus specialist will follow up. Or browse{" "}
            <Link href="/insights" className="text-gold underline">
              Insights
            </Link>
            .
          </p>
          <div className="mt-6 [&_label]:text-white [&_p]:text-white/70 [&_a]:text-gold [&_input]:text-ink [&_textarea]:text-ink [&_select]:text-ink">
            <LeadForm source="faq-page" />
          </div>
        </div>
      </div>
    </div>
  );
}
