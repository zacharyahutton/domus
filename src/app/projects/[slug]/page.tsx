import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, relatedProjects, projects } from "@/content/projects";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return createMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
    image: project.image.src,
  });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const related = relatedProjects(slug);

  return (
    <article>
      <div className="relative h-[50vh] min-h-[320px] w-full bg-ink">
        <Image src={project.image.src} alt={project.image.alt} fill priority className="object-cover opacity-90" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-6xl px-4 pb-10 md:px-6">
          <p className="text-sm font-semibold text-orange">
            {project.category} · {project.location} · {project.year}
          </p>
          <h1 className="font-display mt-2 text-4xl font-semibold text-white md:text-5xl">{project.title}</h1>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <p className="text-lg text-stone">{project.summary}</p>
        {project.body.map((para) => (
          <p key={para.slice(0, 24)} className="mt-4 leading-relaxed text-ink/90">
            {para}
          </p>
        ))}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {project.gallery.map((g) => (
            <div key={g.src} className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line">
              <Image src={g.src} alt={g.alt} fill className="object-cover" sizes="50vw" />
            </div>
          ))}
        </div>
      </div>
      <aside className="border-t border-line bg-fog py-14">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-display text-2xl font-semibold">Related projects</h2>
          <ul className="mt-6 grid gap-6 sm:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/projects/${r.slug}`} className="group block overflow-hidden rounded-lg border border-line bg-white">
                  <div className="relative aspect-[4/3]">
                    <Image src={r.image.src} alt={r.image.alt} fill className="object-cover" sizes="33vw" />
                  </div>
                  <div className="p-3">
                    <p className="font-semibold group-hover:text-orange">{r.title}</p>
                    <p className="text-xs text-stone">{r.category}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </article>
  );
}
