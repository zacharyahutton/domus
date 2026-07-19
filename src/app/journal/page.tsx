import Image from "next/image";
import Link from "next/link";
import { journalPosts } from "@/content/journal";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Insights",
  description: "Educational articles on uPVC, hurricane glass, security laminate, and Domus care tips.",
  path: "/journal",
});

export default function JournalPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-orange">Journal</p>
      <h1 className="font-display mt-2 text-4xl font-semibold md:text-5xl">Insights for Caribbean homes</h1>
      <p className="mt-3 max-w-2xl text-stone">
        CMS-ready education modules — uPVC basics, storm glass, security, and warranty care.
      </p>
      <ul className="mt-12 grid gap-8 md:grid-cols-2">
        {journalPosts.map((post) => (
          <li key={post.slug} className="overflow-hidden rounded-lg border border-line bg-white">
            <Link href={`/journal/${post.slug}`}>
              <div className="relative aspect-[16/9]">
                <Image src={post.image.src} alt={post.image.alt} fill className="object-cover" sizes="50vw" />
              </div>
              <div className="border-t border-line p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-stone">
                  {post.category} · {post.date}
                </p>
                <h2 className="font-display mt-2 text-2xl font-semibold text-ink">{post.title}</h2>
                <p className="mt-2 text-sm text-stone">{post.excerpt}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
