import Image from "next/image";
import Link from "next/link";
import { DomusLogoMark } from "@/components/brand/DomusLogoMark";
import { memberships } from "@/content/trust";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Domus",
  description:
    "Meet Domus Windows & Doors Ltd. Caribbean uPVC manufacturer with Jamaica showrooms, Mr Domus education, and regional memberships.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink px-4 pb-16 pt-28 text-white md:px-6">
        <Image
          src="/media/bg/who-we-are.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          priority
        />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange">About</p>
          <h1 className="font-display mt-2 text-4xl font-semibold md:text-5xl">
            Domus Windows &amp; Doors Ltd.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            A Caribbean manufacturer of hurricane-minded uPVC windows, doors, fencing, and handrails,
            serving homeowners, builders, and distributors from Trinidad roots to Jamaica showrooms
            and island partners.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2 md:px-6 md:items-center">
        <div className="overflow-hidden rounded-2xl border border-line shadow-lg">
          <div className="relative aspect-[4/5]">
            <Image
              src="/brand/mr-domus.png"
              alt="Mr Domus wearing a Domus branded shirt"
              fill
              className="object-cover object-top"
              sizes="50vw"
              priority
            />
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-cta">Mr Domus</p>
          <h2 className="font-display mt-2 text-3xl font-semibold">The education voice of Domus</h2>
          <p className="mt-4 leading-relaxed text-stone">
            Across Jamaica, homeowners and builders meet Domus through Kingston and Montego Bay
            showroom conversations, WhatsApp quoting, and the educational Mr Domus voice on Instagram:
            before-and-after stories that make product choices tangible.
          </p>
          <p className="mt-4 leading-relaxed text-stone">
            With {siteConfig.years}+ years of trust in market, Domus stands for openings that stay
            white, sealed, and serviceable — without the rust cycle of steel or the salt fatigue
            common to ageing aluminium.
          </p>
          <div className="mt-8 rounded-lg border border-line bg-fog p-6">
            <h3 className="font-display text-xl font-semibold">Jamaica contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-stone">
              <li>
                Office:{" "}
                <a className="font-semibold text-cta" href={`tel:${siteConfig.jamaica.officeTel}`}>
                  {siteConfig.jamaica.office}
                </a>
              </li>
              <li>
                WhatsApp:{" "}
                <a
                  className="font-semibold text-green"
                  href={siteConfig.jamaica.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteConfig.jamaica.whatsapp}
                </a>
              </li>
              <li>
                Email:{" "}
                <a className="font-semibold text-cta" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </li>
              <li>Showrooms: {siteConfig.jamaica.showrooms.join(" · ")}</li>
            </ul>
          </div>
        </div>
      </div>

      <section id="memberships" className="bg-fog py-16 scroll-mt-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-display text-3xl font-semibold">Memberships</h2>
          <p className="mt-2 max-w-2xl text-stone">
            Domus is affiliated with leading Caribbean manufacturing, hospitality, and private-sector
            organisations.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
            {memberships.map((m) => (
              <li key={m.id}>
                <a
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-36 flex-col items-center justify-center rounded-xl border border-line bg-white px-4 transition hover:border-cta/50"
                >
                  <Image
                    src={m.src}
                    alt={m.full}
                    width={160}
                    height={80}
                    className="max-h-16 w-auto object-contain"
                  />
                  <span className="mt-3 text-center text-sm font-semibold text-ink">{m.name}</span>
                  <span className="mt-1 text-center text-[11px] text-stone">{m.full}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold">The Domus mark</h2>
            <p className="mt-3 text-stone">
              A Caribbean brand built for openings that face real climate — not imported afterthoughts.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-md bg-cta px-5 py-2.5 text-sm font-semibold text-white"
            >
              Talk to Domus
            </Link>
          </div>
          <DomusLogoMark />
        </div>
      </section>
    </div>
  );
}
