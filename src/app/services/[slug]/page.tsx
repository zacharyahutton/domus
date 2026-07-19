import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/content/services";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return createMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
    image: service.image.src,
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <article>
      <div className="relative h-[42vh] min-h-[280px] bg-ink">
        <Image src={service.image.src} alt={service.image.alt} fill className="object-cover opacity-85" priority sizes="100vw" />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="absolute bottom-0 mx-auto w-full max-w-6xl px-4 pb-10 md:px-6">
          <p className="text-sm font-semibold text-orange">{service.eyebrow}</p>
          <h1 className="font-display mt-2 text-4xl font-semibold text-white md:text-5xl">{service.title}</h1>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.4fr_1fr] md:px-6">
        <div>
          <p className="text-lg text-stone">{service.summary}</p>
          {service.body.map((p) => (
            <p key={p.slice(0, 28)} className="mt-4 leading-relaxed text-ink/90">
              {p}
            </p>
          ))}
          <Link href="/contact" className="mt-8 inline-flex rounded-md bg-orange px-5 py-3 text-sm font-semibold text-white">
            Begin Your Project
          </Link>
        </div>
        <aside className="h-fit rounded-lg border border-line bg-fog p-6">
          <h2 className="font-display text-xl font-semibold">Benefits</h2>
          <ul className="mt-4 space-y-2">
            {service.benefits.map((b) => (
              <li key={b} className="flex gap-2 text-sm text-ink/90">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange" aria-hidden />
                {b}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </article>
  );
}
