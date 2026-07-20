import Link from "next/link";
import Image from "next/image";
import { journalPosts } from "@/content/journal";
import { faqs } from "@/content/trust";
import { siteConfig } from "@/content/site";
import { LeadForm } from "@/components/forms/LeadForm";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ProductDiscovery } from "@/components/sections/ProductDiscovery";
import { ProcessScrollStory } from "@/components/sections/ProcessScrollStory";
import { TrustWhyDomus } from "@/components/sections/TrustWhyDomus";
import { SectionReveal } from "@/components/motion/SectionReveal";

export { ProductDiscovery, ProcessScrollStory, TrustWhyDomus };

export function PhilosophySection() {
  const stats = [
    { to: siteConfig.clientsServed, suffix: "+", label: "Clients served" },
    { to: siteConfig.countriesServed, suffix: "+", label: "Countries & islands" },
    { to: siteConfig.years, suffix: "+", label: "Years of trust" },
    { to: 2, suffix: "", label: "Jamaica showrooms" },
  ];

  return (
    <SectionReveal
      imageSrc="/media/bg/who-we-are.jpg"
      imageAlt="Caribbean contemporary home with premium glazed openings"
      className="py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <div className="grid gap-10 rounded-2xl border border-white/40 bg-white/85 p-8 shadow-xl backdrop-blur-md md:grid-cols-2 md:items-center md:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-cta">Who we are</p>
              <h2 className="font-display mt-2 text-3xl font-semibold text-ink md:text-4xl">
                Domus builds openings for the Caribbean climate
              </h2>
              <p className="mt-4 text-base leading-relaxed text-stone">
                From Trinidad manufacturing roots to Jamaica showrooms and island distributors, Domus
                designs uPVC windows, doors, fencing, and handrails for sun, salt, humidity, and
                hurricane season. Homeowners get quieter rooms and wipe-clean frames. Builders get
                reliable specs. Distributors get a brand their markets already recognise.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex text-sm font-semibold text-cta hover:underline"
              >
                Our story →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-line bg-fog/90 p-5 text-center shadow-sm"
                >
                  <p className="font-display text-3xl font-bold text-gold md:text-4xl">
                    <CountUp to={s.to} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionReveal>
  );
}

export function JournalCtaSection() {
  const featured = journalPosts.filter((p) => p.featured).slice(0, 4);
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <Reveal>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cta">Insights</p>
            <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">
              Learn with Mr Domus
            </h2>
            <p className="mt-2 max-w-xl text-stone">
              Guides with read time, sections, and buying clarity for homeowners and builders.
            </p>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 rounded-md bg-cta px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
          >
            All insights
            <span aria-hidden>→</span>
          </Link>
        </div>
      </Reveal>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((post) => (
          <li
            key={post.slug}
            className="overflow-hidden rounded-xl border border-line bg-white transition hover:border-cta/40"
          >
            <Link href={`/insights/${post.slug}`} className="block">
              <div className="relative aspect-[16/10]">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-stone">
                  {post.category} · {post.readMinutes} min read
                </p>
                <h3 className="font-display mt-1 text-xl font-semibold text-ink">{post.title}</h3>
                <p className="mt-2 text-sm text-stone">{post.excerpt}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="bg-fog py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <FaqAccordion items={faqs} title="Questions homeowners ask first" />
        <p className="mt-6 text-center text-sm text-stone">
          Prefer the full list?{" "}
          <Link href="/faq" className="font-semibold text-cta hover:underline">
            Open the FAQ page
          </Link>
        </p>
      </div>
    </section>
  );
}

export function HomeLeadSection() {
  return (
    <section id="quote" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/media/bg/modern-openings.jpg"
          alt=""
          fill
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-cta">
                Begin your project
              </p>
              <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">
                Request a Caribbean quote
              </h2>
              <p className="mt-3 text-stone">
                Tell us your product mix, island or parish, budget band, and timeline. Prefer chat?
                WhatsApp{" "}
                <a
                  className="font-semibold text-green hover:underline"
                  href={siteConfig.jamaica.whatsappUrl}
                >
                  {siteConfig.jamaica.whatsapp}
                </a>
                .
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <LeadForm source="home" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return <ProductDiscovery />;
}

export function ProcessSection() {
  return <ProcessScrollStory />;
}

export function TrustSection() {
  return <TrustWhyDomus />;
}
