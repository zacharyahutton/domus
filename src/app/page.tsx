import { DomusHero } from "@/components/sections/DomusHero";
import {
  PhilosophySection,
  ServicesSection,
  ProcessSection,
  TestimonialsSection,
  JournalCtaSection,
  FaqSection,
  HomeLeadSection,
} from "@/components/sections/HomeSections";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { projects, projectCategories } from "@/content/projects";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Domus | Caribbean uPVC Windows & Doors",
  description:
    "Hurricane-rated uPVC windows, doors, fencing, and handrails for Jamaica and the Caribbean. Begin your project with Domus Windows & Doors Ltd.",
  path: "/",
});

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);
  return (
    <>
      <DomusHero />
      <PhilosophySection />
      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <ProjectGallery items={featured} categories={projectCategories} heading="Featured projects" />
      </section>
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <JournalCtaSection />
      <FaqSection />
      <HomeLeadSection />
    </>
  );
}
