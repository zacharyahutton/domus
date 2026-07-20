import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, journalPosts } from "@/content/journal";
import { createMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/insights/${post.slug}`,
  });
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 pt-28 md:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-cta">
        {post.category} · {post.readMinutes} min read
      </p>
      <h1 className="font-display mt-2 text-4xl font-semibold md:text-5xl">{post.title}</h1>
      <p className="mt-3 text-stone">{post.date}</p>
      <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-xl border border-line">
        <Image src={post.image.src} alt={post.image.alt} fill className="object-cover" sizes="100vw" priority />
      </div>
      <p className="mt-8 text-lg leading-relaxed text-ink/90">{post.excerpt}</p>
      {post.sections.map((section) => (
        <section key={section.heading} className="mt-10">
          <h2 className="font-display text-2xl font-semibold">{section.heading}</h2>
          {section.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="mt-3 leading-relaxed text-stone">
              {p}
            </p>
          ))}
        </section>
      ))}
      <p className="mt-12">
        <Link href="/insights" className="text-sm font-semibold text-cta hover:underline">
          ← All insights
        </Link>
      </p>
    </article>
  );
}
