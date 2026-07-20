import Image from "next/image";
import Link from "next/link";
import {
  categoryToSlug,
  journalCategories,
  journalPosts,
} from "@/content/journal";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Insights",
  description:
    "Longer Domus guides on uPVC, hurricane glass, security laminate, warranty care, and buying paths for Caribbean homes.",
  path: "/insights",
});

function InsightCard({
  post,
}: {
  post: (typeof journalPosts)[number];
}) {
  return (
    <li className="overflow-hidden rounded-xl border border-line bg-white transition hover:border-cta/40">
      <Link href={`/insights/${post.slug}`} className="block h-full">
        <div className="relative aspect-[16/10] bg-fog">
          <Image src={post.image.src} alt={post.image.alt} fill className="object-cover" sizes="33vw" />
        </div>
        <div className="p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-stone">
            {post.category} · {post.readMinutes} min read
          </p>
          <h3 className="font-display mt-2 text-xl font-semibold text-ink">{post.title}</h3>
          <p className="mt-2 text-sm text-stone">{post.excerpt}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cta">
            Read article <span aria-hidden>→</span>
          </span>
        </div>
      </Link>
    </li>
  );
}

export default function InsightsPage() {
  const featured = journalPosts.filter((p) => p.featured);
  const all = journalPosts;

  return (
    <div>
      <section className="relative overflow-hidden bg-ink px-4 pb-16 pt-28 text-white md:px-6">
        <Image
          src="/media/hero/slide-3.jpg"
          alt=""
          fill
          className="object-cover opacity-35"
          sizes="100vw"
          priority
        />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange">Insights</p>
          <h1 className="font-display mt-2 text-4xl font-semibold md:text-5xl">
            Learn with Mr Domus
          </h1>
          <p className="mt-4 max-w-2xl text-white/85">
            Guides with read time and clear sections for homeowners, builders, and distributors.
          </p>
          <Link
            href="#all-insights"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-cta px-5 py-2.5 text-sm font-semibold text-white"
          >
            All insights
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="mb-10 flex flex-wrap gap-2">
          {journalCategories.map((c) => (
            <Link
              key={c}
              href={`/insights/category/${categoryToSlug(c)}`}
              className="rounded-full border border-line px-4 py-1.5 text-sm text-ink hover:border-cta"
            >
              {c}
            </Link>
          ))}
        </div>

        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold">Featured</h2>
          <Link
            href="#all-insights"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cta hover:underline"
          >
            All insights →
          </Link>
        </div>
        <ul className="grid gap-6 lg:grid-cols-3">
          {featured.map((post) => (
            <InsightCard key={post.slug} post={post} />
          ))}
        </ul>

        <div id="all-insights" className="mt-16 scroll-mt-28">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-display text-2xl font-semibold">All insights</h2>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 rounded-md border border-cta px-4 py-2 text-sm font-semibold text-cta"
            >
              All insights
              <span aria-hidden>→</span>
            </Link>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {all.map((post) => (
              <InsightCard key={post.slug} post={post} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
