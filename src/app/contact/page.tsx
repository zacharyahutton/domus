import Image from "next/image";
import { LeadForm } from "@/components/forms/LeadForm";
import { regionalOffices, siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact / Request a Quote",
  description:
    "Request a Domus quote for Jamaica and the Caribbean. Project type, location, budget, timeline, openings count, and preferred contact.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink px-4 pb-14 pt-28 text-white md:px-6">
        <Image
          src="/media/bg/modern-openings.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          priority
        />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange">Contact</p>
          <h1 className="font-display mt-2 text-4xl font-semibold md:text-5xl">
            Request a quote
          </h1>
          <p className="mt-4 max-w-2xl text-white/85">
            Share openings, island or parish, budget band, timeline, and how you prefer to be reached
            — or call and WhatsApp the regional lines below.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold">Reach Domus directly</h2>
            <p className="mt-3 text-stone">
              Prefer a conversation? Use Call or WhatsApp for the line that covers your island.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${siteConfig.jamaica.officeTel}`}
                className="rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-white"
              >
                Call Jamaica {siteConfig.jamaica.office}
              </a>
              <a
                href={siteConfig.jamaica.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-green px-5 py-2.5 text-sm font-semibold text-white"
              >
                WhatsApp {siteConfig.jamaica.whatsapp}
              </a>
              <a
                href={siteConfig.regionalWhatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink"
              >
                Regional WhatsApp {siteConfig.regionalWhatsapp.display}
              </a>
            </div>
            <ul className="mt-8 space-y-3 text-sm">
              <li>
                <span className="font-semibold text-ink">Email:</span>{" "}
                <a className="text-cta hover:underline" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="font-semibold text-ink">Showrooms:</span>{" "}
                {siteConfig.jamaica.showrooms.join(" · ")}
              </li>
            </ul>
            <div className="mt-10 space-y-4">
              <h3 className="font-display text-lg font-semibold">Regional lines</h3>
              {regionalOffices.map((o) => (
                <div key={o.region} className="rounded-lg border border-line p-4 text-sm">
                  <p className="font-semibold">{o.region}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {"phone" in o && o.phone && "phoneTel" in o && o.phoneTel ? (
                      <a
                        href={`tel:${o.phoneTel}`}
                        className="rounded-md bg-ink px-3 py-1.5 text-xs font-semibold text-white"
                      >
                        Call {o.phone}
                      </a>
                    ) : null}
                    {"whatsapp" in o && o.whatsapp && o.whatsappUrl ? (
                      <a
                        href={o.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md bg-green px-3 py-1.5 text-xs font-semibold text-white"
                      >
                        WhatsApp {o.whatsapp}
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-white p-6 shadow-sm md:p-8">
            <LeadForm source="contact-page" variant="full" />
          </div>
        </div>
      </div>
    </div>
  );
}
