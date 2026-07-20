import Link from "next/link";
import Image from "next/image";
import { distributorRegions, distributors } from "@/content/distributors";
import { memberships } from "@/content/trust";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";

export const metadata = createMetadata({
  title: "Where to Buy / Distributors",
  description:
    "Find authorised Domus distributors and agents across Trinidad, Tobago, Jamaica, Anguilla, Carriacou, Dominica, Grenada, Guyana, St Lucia, St Vincent, and regional offices.",
  path: "/distributors",
});

export default function DistributorsPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink px-4 pb-16 pt-28 text-white md:px-6">
        <Image
          src="/media/footer/caribbean-map.jpg"
          alt=""
          fill
          className="object-cover opacity-40"
          sizes="100vw"
          priority
        />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange">Where to Buy</p>
          <h1 className="font-display mt-2 text-4xl font-semibold md:text-5xl">
            Authorised distributors and agents
          </h1>
          <p className="mt-4 max-w-2xl text-white/85">
            Domus serves the Caribbean through offices and authorised partners — from Trinidad
            manufacturing to Jamaica showrooms and Eastern Caribbean agents.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
          <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr] md:items-stretch">
            <div className="p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-cta">Find us</p>
              <h2 className="font-display mt-2 text-2xl font-semibold md:text-3xl">
                Kingston showroom map
              </h2>
              <p className="mt-2 text-sm text-stone">
                Summit, Chelsea Avenue — Domus Windows &amp; Doors. Google listing{" "}
                {siteConfig.jamaica.googleBusiness.rating}. Prefer WhatsApp?{" "}
                <a
                  className="font-semibold text-green hover:underline"
                  href={siteConfig.jamaica.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteConfig.jamaica.whatsapp}
                </a>
              </p>
              <a
                href={siteConfig.jamaica.googleBusiness.searchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-cta hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
            <div className="relative min-h-[220px] md:min-h-[260px]">
              <iframe
                title="Domus Kingston showroom map"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Domus+Windows+and+Doors+Chelsea+Avenue+Kingston&z=15&output=embed"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-6 md:px-6">
        <ul className="flex flex-wrap gap-4">
          {memberships.map((m) => (
            <li key={m.id}>
              <a
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 items-center rounded-lg border border-line bg-white px-4"
              >
                <Image src={m.src} alt={m.name} width={100} height={40} className="h-10 w-auto object-contain" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        {distributorRegions.map((region) => {
          const items = distributors.filter((d) => d.region === region.id);
          return (
            <section key={region.id} id={region.id} className="mb-14 scroll-mt-28">
              <h2 className="font-display text-3xl font-semibold">
                <Image
                  src={region.flagSrc}
                  alt={region.flagAlt}
                  width={36}
                  height={22}
                  className="mr-2 inline-block h-5 w-auto rounded-sm object-cover align-middle shadow-sm"
                />
                {region.title}
              </h2>
              <p className="mt-2 text-stone">{region.blurb}</p>
              <ul className="mt-6 grid gap-4 md:grid-cols-2">
                {items.map((d) => (
                  <li
                    key={`${d.island}-${d.name}`}
                    className="rounded-xl border border-line bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-cta">
                          {d.island} · {d.role}
                        </p>
                        <h3 className="font-display mt-1 text-xl font-semibold">{d.name}</h3>
                      </div>
                      {d.logo ? (
                        <Image
                          src={d.logo}
                          alt=""
                          width={72}
                          height={40}
                          className="h-10 w-auto object-contain"
                        />
                      ) : null}
                    </div>
                    {d.phone ? (
                      <p className="mt-2 text-sm">
                        Phone:{" "}
                        <a className="text-cta hover:underline" href={`tel:${d.phoneTel}`}>
                          {d.phone}
                        </a>
                      </p>
                    ) : null}
                    {d.whatsapp ? (
                      <p className="mt-1 text-sm">
                        WhatsApp:{" "}
                        <a
                          className="text-green hover:underline"
                          href={d.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {d.whatsapp}
                        </a>
                      </p>
                    ) : null}
                    {d.notes ? <p className="mt-2 text-sm text-stone">{d.notes}</p> : null}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}

        <div className="rounded-xl border border-line bg-fog p-6">
          <h2 className="font-display text-xl font-semibold">Become a distributor</h2>
          <p className="mt-2 text-sm text-stone">
            Email{" "}
            <a className="font-semibold text-cta" href={`mailto:${siteConfig.salesEmail}`}>
              {siteConfig.salesEmail}
            </a>{" "}
            or{" "}
            <Link href="/contact" className="font-semibold text-cta hover:underline">
              request a quote
            </Link>{" "}
            with your island market and trade references.
          </p>
        </div>
      </div>
    </div>
  );
}
