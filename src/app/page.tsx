import { DomusHero } from "@/components/sections/DomusHero";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import {
  PhilosophySection,
  ProductDiscovery,
  ProcessScrollStory,
  TrustWhyDomus,
  JournalCtaSection,
  FaqSection,
  HomeLeadSection,
} from "@/components/sections/HomeSections";
import { ReviewsCarousel } from "@/components/sections/ReviewsCarousel";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { FirstFoldMotion } from "@/components/motion/FirstFoldMotion";
import { projects, projectCategories } from "@/content/projects";
import { faqs } from "@/content/trust";
import { createMetadata, faqPageJsonLd } from "@/lib/seo";
import { Reveal } from "@/components/motion/Reveal";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Domus | Caribbean uPVC Windows & Doors",
  description:
    "Domus manufactures hurricane-rated uPVC windows, doors, fencing, and handrails for homeowners, builders, and distributors across Jamaica and the Caribbean.",
  path: "/",
});

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);
  const faqLd = faqPageJsonLd(faqs);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <DomusHero />
      <FirstFoldMotion>
        <div data-fold>
          <BeforeAfterSlider
            beforeSrc="/media/ba/before-1.jpg"
            afterSrc="/media/ba/after-1.jpg"
            beforeAlt="Ageing Caribbean openings before Domus install"
            afterAlt="Finished Domus white uPVC openings"
            caption="Drag fully left or right to see the complete before and after."
          />
        </div>
        <div data-fold>
          <PhilosophySection />
        </div>
      </FirstFoldMotion>
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <Reveal>
          <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-cta">Featured</p>
              <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">
                Highlighted installs
              </h2>
              <p className="mt-2 max-w-xl text-sm text-stone">
                A curated look at Domus windows, doors, fencing, and handrails across Jamaica.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/gallery?view=featured"
                className="text-sm font-semibold text-cta hover:underline"
              >
                Featured only
              </Link>
              <Link href="/gallery" className="text-sm font-semibold text-ink hover:underline">
                All gallery →
              </Link>
            </div>
          </div>
        </Reveal>
        <ProjectGallery
          items={featured}
          categories={projectCategories}
          heading="Featured projects"
          hideFilters
        />
      </section>
      <ProductDiscovery />
      <ProcessScrollStory />
      <TrustWhyDomus />
      <ReviewsCarousel />
      <JournalCtaSection />
      <FaqSection />
      <HomeLeadSection />
    </>
  );
}
