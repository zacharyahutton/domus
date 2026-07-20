import Image from "next/image";
import Link from "next/link";
import { productCategories, productSeries, seriesGroups } from "@/content/products";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Products",
  description:
    "Explore Domus Basic, Security, and Hurricane series plus windows, doors, fencing, and handrails for Caribbean homes.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink px-4 pb-16 pt-28 text-white md:px-6">
        <Image
          src="/media/hero/slide-1.jpg"
          alt=""
          fill
          className="object-cover opacity-35"
          sizes="100vw"
          priority
        />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange">Products</p>
          <h1 className="font-display mt-2 max-w-3xl text-4xl font-semibold md:text-5xl">
            Windows, doors, fencing &amp; handrails for Caribbean homes
          </h1>
          <p className="mt-4 max-w-2xl text-white/85">
            Choose Basic, Security, or Hurricane series — then pick the opening type your project
            needs. Every line is built for sun, salt, and storm season.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="mb-12 overflow-x-auto pb-2" style={{ scrollbarWidth: "thin" }}>
          <div className="flex min-w-max gap-4">
            {seriesGroups.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="w-[260px] shrink-0 rounded-xl border border-line bg-fog p-5 transition hover:border-cta/50"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wider text-cta">Series</p>
                <h2 className="font-display mt-2 text-xl font-semibold">{group.title}</h2>
                <p className="mt-2 text-sm text-stone">{group.intro}</p>
              </a>
            ))}
            {productSeries.map((s) => (
              <Link
                key={s.id}
                href={`#${s.group}`}
                className="w-[260px] shrink-0 overflow-hidden rounded-xl border border-line bg-white"
              >
                <div className="relative aspect-[16/10] bg-fog">
                  <Image src={s.image.src} alt={s.image.alt} fill className="object-cover" sizes="260px" />
                </div>
                <div className="p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-stone">
                    {s.eyebrow}
                  </p>
                  <h3 className="font-display mt-1 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-stone">{s.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {seriesGroups.map((group) => (
          <section key={group.id} id={group.id} className="mb-16 scroll-mt-28">
            <h2 className="font-display text-3xl font-semibold">{group.title}</h2>
            <p className="mt-2 max-w-2xl text-stone">{group.intro}</p>
            <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {productSeries
                .filter((s) => s.group === group.id)
                .map((s) => (
                  <li key={s.id} className="overflow-hidden rounded-xl border border-line bg-white">
                    <div className="relative aspect-[16/10] bg-fog">
                      <Image
                        src={s.image.src}
                        alt={s.image.alt}
                        fill
                        className="object-cover"
                        sizes="33vw"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-stone">
                        {s.eyebrow}
                      </p>
                      <h3 className="font-display mt-1 text-xl font-semibold">{s.title}</h3>
                      <p className="mt-2 text-sm text-stone">{s.summary}</p>
                      <p className="mt-3 text-xs text-stone">
                        Available for: {s.appliesTo.join(", ")}
                      </p>
                    </div>
                  </li>
                ))}
            </ul>
          </section>
        ))}

        <section>
          <h2 className="font-display text-3xl font-semibold">Shop by category</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {productCategories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/products/${c.slug}`}
                  className="grid overflow-hidden rounded-xl border border-line bg-white transition hover:border-cta/40 md:grid-cols-2"
                >
                  <div className="relative min-h-[180px] bg-fog">
                    <Image src={c.image.src} alt={c.image.alt} fill className="object-cover" sizes="40vw" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-stone">
                      {c.eyebrow}
                    </p>
                    <h3 className="font-display mt-1 text-2xl font-semibold">{c.title}</h3>
                    <p className="mt-2 text-sm text-stone">{c.summary}</p>
                    <span className="mt-4 inline-block text-sm font-semibold text-cta">
                      Explore {c.title}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
