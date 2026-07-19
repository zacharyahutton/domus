import Link from "next/link";
import Image from "next/image";
import { services } from "@/content/services";
import { processSteps, testimonials, faqs } from "@/content/trust";
import { journalPosts } from "@/content/journal";
import { siteConfig } from "@/content/site";
import { LeadForm } from "@/components/forms/LeadForm";

export function PhilosophySection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-orange">Why Domus</p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-ink md:text-4xl">
            Built for Caribbean climate — not imported afterthoughts
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone">
            Domus designs uPVC windows, doors, and outdoor products for sun, salt, humidity, and
            hurricane season. Jamaica homeowners get security laminate options, sound reduction,
            UV-minded glass, and frames that will not rust-stain the walls.
          </p>
        </div>
        <div className="rounded-lg border border-line bg-fog p-6">
          <p className="font-display text-5xl font-bold text-gold">{siteConfig.years}</p>
          <p className="mt-1 text-lg font-semibold text-ink">Years serving Caribbean homes</p>
          <p className="mt-3 text-sm text-stone">
            Showroom guidance in Kingston and Montego Bay · WhatsApp-first quoting · Educational
            before-and-after storytelling from Mr. Domus.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="bg-fog py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange">Products</p>
        <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">
          Windows · Doors · Fencing · Handrails
        </h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <li key={s.slug} className="overflow-hidden rounded-lg border border-line bg-white">
              <div className="relative aspect-[16/9]">
                <Image src={s.image.src} alt={s.image.alt} fill className="object-cover" sizes="50vw" />
                <span
                  className="absolute left-0 top-0 h-1 w-full"
                  style={{
                    background: ["var(--domus-magenta)", "var(--domus-green)", "var(--domus-blue)", "var(--domus-orange)"][i],
                  }}
                  aria-hidden
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-stone">{s.eyebrow}</p>
                <h3 className="font-display mt-1 text-2xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{s.summary}</p>
                <Link href={`/services/${s.slug}`} className="mt-4 inline-block text-sm font-semibold text-orange hover:underline">
                  Explore {s.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-orange">Process</p>
      <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">From consult to install</h2>
      <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((p) => (
          <li key={p.step} className="border-t-2 border-orange pt-4">
            <p className="font-display text-sm font-bold text-orange">{p.step}</p>
            <h3 className="mt-2 font-display text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-stone">{p.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-ink py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange">Testimonials</p>
        <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">Homes that stay quieter and cooler</h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.id} className="rounded-lg border border-white/15 bg-white/5 p-6">
              <blockquote className="text-sm leading-relaxed text-white/90">&ldquo;{t.quote}&rdquo;</blockquote>
              <p className="mt-4 text-sm font-semibold">{t.name}</p>
              <p className="text-xs text-white/60">
                {t.role} · {t.location}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function JournalCtaSection() {
  const featured = journalPosts.filter((p) => p.featured).slice(0, 2);
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-orange">Insights</p>
          <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">Learn with Mr. Domus</h2>
          <p className="mt-2 max-w-xl text-stone">
            uPVC basics, hurricane glass, and security — educational content ready for a future CMS.
          </p>
        </div>
        <Link href="/journal" className="text-sm font-semibold text-orange hover:underline">
          All insights
        </Link>
      </div>
      <ul className="mt-10 grid gap-6 md:grid-cols-2">
        {featured.map((post) => (
          <li key={post.slug} className="overflow-hidden rounded-lg border border-line">
            <Link href={`/journal/${post.slug}`} className="grid md:grid-cols-2">
              <div className="relative min-h-[160px]">
                <Image src={post.image.src} alt={post.image.alt} fill className="object-cover" sizes="50vw" />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-stone">{post.category}</p>
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
        <h2 className="font-display text-3xl font-semibold md:text-4xl">FAQ</h2>
        <dl className="mt-8 space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="border-b border-line pb-6">
              <dt className="font-display text-lg font-semibold text-ink">{f.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-stone">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function HomeLeadSection() {
  return (
    <section id="quote" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-orange">Begin your project</p>
          <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">Request a Jamaica quote</h2>
          <p className="mt-3 text-stone">
            Tell us your product mix, parish or city, budget band, and timeline. Prefer chat? WhatsApp{" "}
            <a className="font-semibold text-green hover:underline" href={siteConfig.jamaica.whatsappUrl}>
              {siteConfig.jamaica.whatsapp}
            </a>
            .
          </p>
        </div>
        <LeadForm source="home" />
      </div>
    </section>
  );
}
