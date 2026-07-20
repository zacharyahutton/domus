export type ProjectCategory =
  | "Windows"
  | "Doors"
  | "Fencing"
  | "Handrails"
  | "Before/After"
  | "Gallery";

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
  beforeSrc?: string;
  afterSrc?: string;
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
      src: "/media/gallery/performance/multi-unit/gallery-9-.jpg",
      alt: "Contemporary Kingston home with white Domus-style window frames",
    },
    gallery: [
      { src: "/media/gallery/performance/multi-unit/gallery-9-.jpg", alt: "Exterior window elevation" },
      { src: "/media/products/casement.jpg", alt: "Casement detail" },
      { src: "/media/gallery/kitchen-openings.jpg", alt: "Interior daylight" },
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
      src: "/media/gallery/security/double-swing-doors/_dsc4002.jpg",
      alt: "Villa patio with Domus sliding glass doors",
    },
    gallery: [
      { src: "/media/gallery/security/double-swing-doors/_dsc4002.jpg", alt: "Patio sliding doors" },
      { src: "/media/products/sliding-door.jpg", alt: "Sliding door product" },
      { src: "/media/gallery/interior-doors.jpg", alt: "Interior door light" },
    ],
  },
  {
    slug: "spanish-town-before-after",
    title: "Spanish Town Elevation Refresh",
    location: "Spanish Town, Jamaica",
    category: "Before/After",
    beforeAfter: true,
    featured: true,
    summary:
      "Ageing openings out — white Domus uPVC in. A classic transformation for a familiar Jamaica streetscape.",
    body: [
      "Before: tired frames and hot rooms. After: white Domus windows with a clean silhouette that photographs as sharply as it performs.",
      "We document transformations like this so homeowners can see what climate-ready openings look like on familiar Jamaica elevations.",
    ],
    year: 2023,
    beforeSrc: "/media/ba/before-1.jpg",
    afterSrc: "/media/ba/after-1.jpg",
    image: {
      src: "/media/ba/after-1.jpg",
      alt: "Renovated home facade with fresh white Domus frames",
    },
    gallery: [
      { src: "/media/ba/before-1.jpg", alt: "Before — ageing exterior" },
      { src: "/media/ba/after-1.jpg", alt: "After — Domus openings" },
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
    featured: true,
    image: {
      src: "/media/products/fence-cover.jpg",
      alt: "Domus privacy fencing on a Caribbean elevation",
    },
    gallery: [{ src: "/media/products/fence-cover.jpg", alt: "Fence and boundary detail" }],
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
    featured: true,
    image: {
      src: "/media/products/handrails-hero.jpg",
      alt: "Balcony handrails on a coastal residence",
    },
    gallery: [{ src: "/media/products/handrails-hero.jpg", alt: "Handrail elevation" }],
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
      src: "/media/gallery/city-windows.jpg",
      alt: "Daylit institutional windows",
    },
    gallery: [{ src: "/media/gallery/city-windows.jpg", alt: "Classroom daylight" }],
  },
  {
    slug: "harbour-view-before-after",
    title: "Harbour View Living Room Openings",
    location: "Harbour View, Jamaica",
    category: "Before/After",
    beforeAfter: true,
    featured: true,
    summary: "Dim, leaking aluminium out — bright Domus patio doors and flanking windows in.",
    body: [
      "The family wanted a brighter living room that still sealed against rainy-season wind-driven rain.",
      "Domus sliding doors and casements delivered daylight without the salt fatigue of the old aluminium set.",
    ],
    year: 2024,
    beforeSrc: "/media/ba/before-2.jpg",
    afterSrc: "/media/ba/after-2.jpg",
    image: { src: "/media/ba/after-2.jpg", alt: "Bright living space after Domus install" },
    gallery: [
      { src: "/media/ba/before-2.jpg", alt: "Before living room" },
      { src: "/media/ba/after-2.jpg", alt: "After Domus openings" },
    ],
  },
  {
    slug: "st-ann-villa-before-after",
    title: "St Ann Villa Facade Pair",
    location: "St Ann, Jamaica",
    category: "Before/After",
    beforeAfter: true,
    summary: "Empty rough openings versus finished Domus frames on a hillside villa.",
    body: [
      "New-build elevations often look unfinished until frames land. Domus white uPVC completes the silhouette.",
    ],
    year: 2025,
    beforeSrc: "/media/ba/before-3.jpg",
    afterSrc: "/media/ba/after-3.jpg",
    image: { src: "/media/ba/after-3.jpg", alt: "Villa facade with Domus frames" },
    gallery: [
      { src: "/media/ba/before-3.jpg", alt: "Before — incomplete openings" },
      { src: "/media/ba/after-3.jpg", alt: "After — Domus finished" },
    ],
  },
  {
    slug: "showroom-casement-gallery",
    title: "Casement Detail Study",
    location: "Domus Showroom",
    category: "Gallery",
    summary: "Close look at Domus casement operation, hardware, and white frame finish.",
    body: ["Product photography from the Domus line — casement windows ready for Caribbean installs."],
    year: 2025,
    image: { src: "/media/products/casement.jpg", alt: "Domus casement window detail" },
    gallery: [
      { src: "/media/products/casement.jpg", alt: "Casement" },
      { src: "/media/products/awning.jpg", alt: "Awning" },
    ],
  },
  {
    slug: "multiunit-elevation-gallery",
    title: "Multi-Unit Elevation",
    location: "Caribbean Residence",
    category: "Gallery",
    summary: "Combined window types in one elevation — Performance and Supreme configurations.",
    body: ["Multi-unit assemblies let homeowners mix picture and operating sashes without aluminium seams."],
    year: 2024,
    image: { src: "/media/products/multiunit.jpg", alt: "Domus multi-unit window elevation" },
    gallery: [{ src: "/media/products/multiunit.jpg", alt: "Multi-unit" }],
  },
  {
    slug: "kitchen-daylight-gallery",
    title: "Kitchen Daylight Openings",
    location: "Jamaica",
    category: "Gallery",
    summary: "Bright kitchen glazing that stays wipe-clean through cooking humidity and sun.",
    body: ["White Domus frames keep kitchens cooler and easier to maintain than painted steel."],
    year: 2025,
    image: { src: "/media/gallery/kitchen-openings.jpg", alt: "Kitchen with large glazed openings" },
    gallery: [{ src: "/media/gallery/kitchen-openings.jpg", alt: "Kitchen openings" }],
  },
];

export const projectCategories: ProjectCategory[] = [
  "Windows",
  "Doors",
  "Fencing",
  "Handrails",
  "Before/After",
  "Gallery",
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
