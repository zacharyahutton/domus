import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductCategory, productCategories } from "@/content/products";
import { createMetadata } from "@/lib/seo";
import { LeadForm } from "@/components/forms/LeadForm";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return productCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductCategory(slug);
  if (!product) return {};
  return createMetadata({
    title: product.title,
    description: product.summary,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductCategory(slug);
  if (!product) notFound();

  return (
    <div>
      <section className="relative min-h-[42vh] overflow-hidden bg-ink text-white">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          className="object-cover opacity-50"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30" />
        <div className="relative mx-auto flex min-h-[42vh] max-w-6xl flex-col justify-end px-4 pb-12 pt-28 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange">{product.eyebrow}</p>
          <h1 className="font-display mt-2 text-4xl font-semibold md:text-5xl">{product.title}</h1>
          <p className="mt-3 max-w-2xl text-white/85">{product.summary}</p>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-[1.2fr_0.8fr] md:px-6">
        <div>
          {product.body.map((p) => (
            <p key={p.slice(0, 24)} className="mt-4 text-base leading-relaxed text-stone first:mt-0">
              {p}
            </p>
          ))}
          <h2 className="font-display mt-10 text-2xl font-semibold">Benefits</h2>
          <ul className="mt-4 space-y-2">
            {product.benefits.map((b) => (
              <li key={b} className="flex gap-2 text-sm text-ink">
                <span className="text-cta">✓</span>
                {b}
              </li>
            ))}
          </ul>

          {product.gallery && product.gallery.length > 0 ? (
            <>
              <h2 className="font-display mt-10 text-2xl font-semibold">Gallery</h2>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                {product.gallery.map((g) => (
                  <li key={g.src} className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line bg-fog">
                    <Image src={g.src} alt={g.alt} fill className="object-cover" sizes="40vw" />
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          <p className="mt-8 text-sm text-stone">
            <Link href="/products" className="font-semibold text-cta hover:underline">
              ← All products
            </Link>
          </p>
        </div>
        <div className="rounded-xl border border-line bg-fog p-6">
          <h2 className="font-display text-xl font-semibold">Request this product</h2>
          <p className="mt-2 text-sm text-stone">Tell us sizes, island, and timeline.</p>
          <div className="mt-4">
            <LeadForm source={`product-${product.slug}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
