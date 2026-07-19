import { LeadForm } from "@/components/forms/LeadForm";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact / Request a Quote",
  description:
    "Request a Domus quote for Jamaica — project type, location, budget, timeline. Or WhatsApp 876-619-1223.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-orange">Contact</p>
          <h1 className="font-display mt-2 text-4xl font-semibold md:text-5xl">Begin Your Project</h1>
          <p className="mt-4 text-stone">
            Share your openings, parish or city, budget band, and timeline. Prefer messaging? Reach the
            Jamaica WhatsApp line anytime.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            <li>
              <span className="font-semibold text-ink">WhatsApp:</span>{" "}
              <a className="text-green hover:underline" href={siteConfig.jamaica.whatsappUrl}>
                {siteConfig.jamaica.whatsapp}
              </a>
            </li>
            <li>
              <span className="font-semibold text-ink">Office:</span>{" "}
              <a className="hover:underline" href={`tel:${siteConfig.jamaica.officeTel}`}>
                {siteConfig.jamaica.office}
              </a>
            </li>
            <li>
              <span className="font-semibold text-ink">Email:</span>{" "}
              <a className="hover:underline" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </li>
            <li>
              <span className="font-semibold text-ink">Showrooms:</span>{" "}
              {siteConfig.jamaica.showrooms.join(" · ")}
            </li>
          </ul>
        </div>
        <LeadForm source="contact-page" />
      </div>
    </div>
  );
}
