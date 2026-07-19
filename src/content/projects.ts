export type ProjectCategory =
  | "Windows"
  | "Doors"
  | "Fencing"
  | "Handrails"
  | "Before/After";

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  summary: string;
  body: string[];
  year: number;
  featured?: boolean;
  beforeAfter?: boolean;
  image: { src: string; alt: string };
  gallery: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "kingston-hills-hurricane-glazing",
    title: "Kingston Hills Residence",
    location: "Kingston, Jamaica",
    category: "Windows",
    summary:
      "Full-home window replacement with hurricane-minded uPVC and laminate glass for quieter bedrooms along a busy corridor.",
    body: [
      "The homeowners needed to retire corroding aluminium that leaked at the corners every rainy season. Domus specified white uPVC frames with security laminate on street-facing elevations.",
      "Result: cooler rooms, less street noise, and openings ready for storm season — with a wipe-clean finish that ends the annual paint ritual.",
    ],
    year: 2024,
    featured: true,
    image: {
      src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
      alt: "Contemporary home exterior with large white-framed windows",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
        alt: "Exterior window elevation",
      },
      {
        src: "https://images.unsplash.com/photo-1600573472591-ee6981cf4b68?auto=format&fit=crop&w=1200&q=80",
        alt: "Interior daylight through new glazing",
      },
    ],
  },
  {
    slug: "montego-bay-villa-doors",
    title: "Montego Bay Villa Doors",
    location: "Montego Bay, Jamaica",
    category: "Doors",
    summary:
      "Sliding patio and entry doors for a coastal villa — stainless hardware and tight seals against salt air.",
    body: [
      "Coastal aluminium had oxidized within a few seasons. Domus doors with stainless operating gear replaced the failing units while keeping wide openings for sea breezes.",
      "Showroom guidance in Montego Bay helped the owners choose laminate where security mattered most without darkening the living room.",
    ],
    year: 2025,
    featured: true,
    image: {
      src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1600&q=80",
      alt: "Villa patio with sliding glass doors",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80",
        alt: "Patio sliding doors",
      },
    ],
  },
  {
    slug: "spanish-town-before-after",
    title: "Spanish Town Before & After",
    location: "Spanish Town, Jamaica",
    category: "Before/After",
    beforeAfter: true,
    featured: true,
    summary:
      "Steel rust stains and loose putty glass out — white Domus uPVC in. A classic Mr. Domus education story.",
    body: [
      "Before: rusting steel frames, failing putty, and hot rooms. After: white Domus windows with a clean silhouette that photographs as sharply as it performs.",
      "We document transformations like this so homeowners can see what climate-ready openings look like on familiar Jamaica streetscapes.",
    ],
    year: 2023,
    image: {
      src: "https://images.unsplash.com/photo-1600047509358-9dc7556c6266?auto=format&fit=crop&w=1600&q=80",
      alt: "Renovated home facade with fresh white frames",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
        alt: "Before-style ageing exterior reference",
      },
      {
        src: "https://images.unsplash.com/photo-1600047509358-9dc7556c6266?auto=format&fit=crop&w=1200&q=80",
        alt: "After — clean white Domus-style openings",
      },
    ],
  },
  {
    slug: "portmore-privacy-fencing",
    title: "Portmore Privacy Fence",
    location: "Portmore, Jamaica",
    category: "Fencing",
    summary: "uPVC privacy fencing for a family yard — no peeling paint, no timber rot.",
    body: [
      "The family wanted a bright, durable boundary that would survive humidity. Domus fencing delivered a consistent white line that pairs with their new windows.",
    ],
    year: 2024,
    image: {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
      alt: "White privacy fencing in a residential yard",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
        alt: "Fence line detail",
      },
    ],
  },
  {
    slug: "ochi-balcony-handrails",
    title: "Ocho Rios Balcony Rails",
    location: "Ocho Rios, Jamaica",
    category: "Handrails",
    summary: "Balcony handrails for a hillside townhouse cluster with coastal exposure.",
    body: [
      "Ironwork was staining façades. Domus handrail profiles replaced rust-prone metal with climate-minded outdoor systems.",
    ],
    year: 2025,
    image: {
      src: "https://images.unsplash.com/photo-1600047509807-ba8f99d367e3?auto=format&fit=crop&w=1600&q=80",
      alt: "Balcony handrail on hillside homes",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1600047509807-ba8f99d367e3?auto=format&fit=crop&w=1200&q=80",
        alt: "Handrail detail",
      },
    ],
  },
  {
    slug: "mandeville-school-wing",
    title: "Mandeville School Wing",
    location: "Mandeville, Jamaica",
    category: "Windows",
    summary: "Classroom wing re-glazed for durability, daylight, and easier cleaning between terms.",
    body: [
      "Institutional openings need toughness and simple maintenance. Domus stock and custom windows delivered consistent performance across the wing.",
    ],
    year: 2022,
    image: {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
      alt: "Daylit institutional corridor with large windows",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
        alt: "Classroom daylight",
      },
    ],
  },
];

export const projectCategories: ProjectCategory[] = [
  "Windows",
  "Doors",
  "Fencing",
  "Handrails",
  "Before/After",
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function relatedProjects(slug: string, limit = 3) {
  const current = getProject(slug);
  if (!current) return projects.slice(0, limit);
  return projects
    .filter((p) => p.slug !== slug && p.category === current.category)
    .concat(projects.filter((p) => p.slug !== slug && p.category !== current.category))
    .slice(0, limit);
}
