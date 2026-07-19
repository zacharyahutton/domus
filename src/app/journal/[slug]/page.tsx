import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, journalPosts } from "@/content/journal";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/journal/${post.slug}`,
    image: post.image.src,
  });
}

export default async function JournalPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <p className="text-sm font-semibold text-orange">
        {post.category} · {post.date}
      </p>
      <h1 className="font-display mt-2 text-4xl font-semibold md:text-5xl">{post.title}</h1>
      <p className="mt-4 text-lg text-stone">{post.excerpt}</p>
      <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg border border-line">
        <Image src={post.image.src} alt={post.image.alt} fill priority className="object-cover" sizes="800px" />
      </div>
      <div className="mt-8 space-y-4">
        {post.body.map((para) => (
          <p key={para.slice(0, 32)} className="leading-relaxed text-ink/90">
            {para}
          </p>
        ))}
      </div>
      <p className="mt-10">
        <Link href="/journal" className="text-sm font-semibold text-orange hover:underline">
          ← All insights
        </Link>
      </p>
    </article>
  );
}
