import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProject, projects, relatedProjects } from "@/content/projects";
import { createMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return createMetadata({
    title: project.title,
    description: project.summary,
    path: `/gallery/${project.slug}`,
  });
}

export default async function GalleryDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const related = relatedProjects(slug);

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 pt-28 md:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-cta">{project.category}</p>
      <h1 className="font-display mt-2 text-4xl font-semibold md:text-5xl">{project.title}</h1>
      <p className="mt-2 text-stone">
        {project.location} · {project.year}
      </p>
      <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-xl border border-line">
        <Image src={project.image.src} alt={project.image.alt} fill className="object-cover" sizes="100vw" priority />
      </div>
      <div className="mt-8 space-y-4 text-base leading-relaxed text-stone">
        {project.body.map((p) => (
          <p key={p.slice(0, 32)}>{p}</p>
        ))}
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {project.gallery.map((g) => (
          <div key={g.src} className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line">
            <Image src={g.src} alt={g.alt} fill className="object-cover" sizes="50vw" />
          </div>
        ))}
      </div>
      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold">Related</h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-3">
          {related.map((r) => (
            <li key={r.slug}>
              <Link href={`/gallery/${r.slug}`} className="text-sm font-semibold text-cta hover:underline">
                {r.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <p className="mt-10">
        <Link href="/gallery" className="text-sm font-semibold text-cta hover:underline">
          ← Back to gallery
        </Link>
      </p>
    </article>
  );
}
