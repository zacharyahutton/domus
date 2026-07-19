import Link from "next/link";
import { services } from "@/content/services";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Products & Services",
  description: "Domus windows, doors, fencing, and handrails — plus consultation for Jamaica projects.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-orange">Services</p>
      <h1 className="font-display mt-2 text-4xl font-semibold md:text-5xl">Products for every opening</h1>
      <p className="mt-3 max-w-2xl text-stone">
        Four product lines engineered for Caribbean climate — plus consultative quoting for new builds and replacements.
      </p>
      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {services.map((s) => (
          <li key={s.slug} className="rounded-lg border border-line p-6">
            <h2 className="font-display text-2xl font-semibold">{s.title}</h2>
            <p className="mt-2 text-sm text-stone">{s.summary}</p>
            <Link href={`/services/${s.slug}`} className="mt-4 inline-block text-sm font-semibold text-orange hover:underline">
              View {s.title} details
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-12 rounded-lg border border-orange/30 bg-orange/5 p-6">
        <h2 className="font-display text-xl font-semibold">Consultation</h2>
        <p className="mt-2 text-sm text-stone">
          Not sure which glass or frame package fits your elevation? Start a quote and we will help you specify.
        </p>
        <Link href="/contact" className="mt-4 inline-block rounded-md bg-orange px-4 py-2 text-sm font-semibold text-white">
          Begin Your Project
        </Link>
      </div>
    </div>
  );
}
