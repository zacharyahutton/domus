import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { projects, projectCategories } from "@/content/projects";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Our Work",
  description:
    "Domus install projects across Jamaica — windows, doors, fencing, handrails, and before-and-after transformations.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-orange">Portfolio</p>
      <h1 className="font-display mt-2 text-4xl font-semibold md:text-5xl">Installs &amp; transformations</h1>
      <p className="mt-3 max-w-2xl text-stone">
        Real openings for Caribbean homes — filter by product line or explore before-and-after stories.
      </p>
      <div className="mt-12">
        <ProjectGallery items={projects} categories={projectCategories} heading="All projects" />
      </div>
    </div>
  );
}
