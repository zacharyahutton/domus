import Link from "next/link";
import { notFound } from "next/navigation";
import {
  categoryToSlug,
  journalCategories,
  postsByCategory,
  slugToCategory,
} from "@/content/journal";
import { createMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return journalCategories.map((c) => ({ slug: categoryToSlug(c) }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const category = slugToCategory(slug);
  if (!category) return {};
  return createMetadata({
    title: `${category} Insights`,
    description: `Domus articles in ${category}.`,
    path: `/insights/category/${slug}`,
  });
}

export default async function InsightCategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = slugToCategory(slug);
  if (!category) notFound();
  const posts = postsByCategory(category);

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 pt-28 md:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-cta">Insights</p>
      <h1 className="font-display mt-2 text-4xl font-semibold">{category}</h1>
      <ul className="mt-10 space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="rounded-xl border border-line p-5">
            <Link href={`/insights/${post.slug}`}>
              <p className="text-xs text-stone">{post.readMinutes} min read · {post.date}</p>
              <h2 className="font-display mt-1 text-xl font-semibold">{post.title}</h2>
              <p className="mt-2 text-sm text-stone">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-10">
        <Link href="/insights" className="text-sm font-semibold text-cta hover:underline">
          ← All insights
        </Link>
      </p>
    </div>
  );
}
