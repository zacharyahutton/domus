export type ProductSeriesId =
  | "performance-windows"
  | "supreme-windows"
  | "low-cost-security"
  | "economical-security"
  | "high-security"
  | "economical-hurricane"
  | "high-impact-hurricane";

export type ProductCategorySlug = "windows" | "doors" | "fencing" | "handrails";

export type ProductSeries = {
  id: ProductSeriesId;
  group: "basic" | "security" | "hurricane";
  title: string;
  eyebrow: string;
  summary: string;
  appliesTo: ("windows" | "doors")[];
  image: { src: string; alt: string };
};

export type ProductCategory = {
  slug: ProductCategorySlug;
  title: string;
  eyebrow: string;
  summary: string;
  body: string[];
  benefits: string[];
  image: { src: string; alt: string };
  gallery?: { src: string; alt: string }[];
};

export const productSeries: ProductSeries[] = [
  {
    id: "performance-windows",
    group: "basic",
    title: "Performance Windows",
    eyebrow: "Basic Series",
    summary:
      "Our most economical window line — everyday Caribbean openings with the same UV-stable frames and stainless hardware as our premium range.",
    appliesTo: ["windows"],
    image: {
      src: "/media/products/singlehung.jpg",
      alt: "Domus Performance single-hung window",
    },
  },
  {
    id: "supreme-windows",
    group: "basic",
    title: "Supreme Windows",
    eyebrow: "Basic Series",
    summary:
      "The widest range of luxurious, full-featured windows — custom sizes, grill options, and showroom-ready finishes.",
    appliesTo: ["windows"],
    image: {
      src: "/media/products/supreme-cover.jpg",
      alt: "Domus Supreme multi-unit window elevation",
    },
  },
  {
    id: "low-cost-security",
    group: "security",
    title: "Low-Cost Security",
    eyebrow: "Security Series",
    summary:
      "Security laminate glass windows at an entry price — quieter rooms and stronger resistance without burglar bars.",
    appliesTo: ["windows"],
    image: {
      src: "/media/products/picture.jpg",
      alt: "Domus Low-Cost Security picture window",
    },
  },
  {
    id: "economical-security",
    group: "security",
    title: "Economical Security",
    eyebrow: "Security Series",
    summary:
      "Security laminate for windows and doors — protect entries and street-facing rooms without darkening the home.",
    appliesTo: ["windows", "doors"],
    image: {
      src: "/media/products/sliding-door.jpg",
      alt: "Domus Economical Security sliding patio door",
    },
  },
  {
    id: "high-security",
    group: "security",
    title: "High Security",
    eyebrow: "Security Series",
    summary:
      "High-impact laminate glass for elevated security demand on windows and doors — built for peace of mind.",
    appliesTo: ["windows", "doors"],
    image: {
      src: "/media/products/swing-door.png",
      alt: "Domus High Security swing-view door",
    },
  },
  {
    id: "economical-hurricane",
    group: "hurricane",
    title: "Economical Hurricane Resistant",
    eyebrow: "Hurricane Series",
    summary:
      "Storm-season openings at Domus’ most accessible hurricane-resistant price for windows and doors.",
    appliesTo: ["windows", "doors"],
    image: {
      src: "/media/products/multiunit.jpg",
      alt: "Domus Economical Hurricane multi-unit windows",
    },
  },
  {
    id: "high-impact-hurricane",
    group: "hurricane",
    title: "High-Impact Hurricane Resistant",
    eyebrow: "Hurricane Series",
    summary:
      "High-impact hurricane-resistant systems for coastal and high-exposure elevations — tested by Caribbean storms.",
    appliesTo: ["windows", "doors"],
    image: {
      src: "/media/products/curtainwall.jpg",
      alt: "Domus High-Impact Hurricane curtain wall glazing",
    },
  },
];

export const productCategories: ProductCategory[] = [
  {
    slug: "windows",
    title: "Windows",
    eyebrow: "Hurricane-ready glazing",
    summary:
      "uPVC window systems engineered for Caribbean storms, salt air, and year-round sun — clear views without the corrosion of steel or aluminium.",
    body: [
      "Choose single-hung, horizontal slider, awning, casement, picture, shaped, or multi-unit configurations. Domus frames use UV-stable uPVC with stainless hardware that stands up to sea blast when maintained.",
      "Add security laminate or Solar E glass for quieter rooms and cooler interiors. White frames reflect heat and keep your colour palette flexible across Jamaica and the wider Caribbean.",
    ],
    benefits: [
      "Hurricane-rated options",
      "Low-maintenance wipe-clean care",
      "20-year frame warranty",
      "Sound-reducing laminate glass options",
    ],
    image: {
      src: "/media/products/awning.jpg",
      alt: "Domus awning window for Caribbean homes",
    },
    gallery: [
      { src: "/media/products/singlehung.jpg", alt: "Single-hung window" },
      { src: "/media/products/horizontal-slider.jpg", alt: "Horizontal slider" },
      { src: "/media/products/casement.jpg", alt: "Casement window" },
      { src: "/media/products/picture.jpg", alt: "Picture window" },
      { src: "/media/products/shaped.jpg", alt: "Shaped window" },
      { src: "/media/products/multiunit.jpg", alt: "Multi-unit window" },
    ],
  },
  {
    slug: "doors",
    title: "Doors",
    eyebrow: "Secure entries & patio glass",
    summary:
      "Entrance and sliding door systems that seal tightly, resist corrosion, and keep humidity and noise outside.",
    body: [
      "From front entries to wide patio openings, Domus doors pair rigid uPVC frames with high-grade hardware. Swing-view and sliding patio options keep living spaces bright while sealing against salt air.",
      "Laminate glass options add security and acoustic comfort for Kingston traffic and coastal winds alike. Installation can be arranged through Domus.",
    ],
    benefits: [
      "Security laminate options",
      "No rust staining like steel",
      "Seals that outperform ageing aluminium gaskets",
      "Custom configurations",
    ],
    image: {
      src: "/media/products/doors-cover.jpg",
      alt: "Domus security swing doors in a Caribbean install",
    },
    gallery: [
      { src: "/media/products/doors-cover.jpg", alt: "Security swing doors" },
      { src: "/media/products/sliding-door.jpg", alt: "Sliding patio door" },
      { src: "/media/products/swing-door.png", alt: "Single swing-view door" },
      { src: "/media/products/double-swing.png", alt: "Double swing-view door" },
      { src: "/media/products/storefront.jpg", alt: "Storefront door system" },
    ],
  },
  {
    slug: "fencing",
    title: "Fencing",
    eyebrow: "Outdoor living & privacy",
    summary:
      "uPVC privacy fencing that holds colour, shrugs off humidity, and keeps Caribbean yards looking finished without constant painting.",
    body: [
      "Privacy fencing extends Domus quality beyond the openings of the home. Aluminium reinforcements and uPVC skins are designed for tropical weather.",
      "Ideal for residential boundaries, pool enclosures, and commercial sites that need a clean white finish that will not peel like painted steel.",
    ],
    benefits: [
      "Weather-stable finishes",
      "Privacy and boundary options",
      "Lower maintenance than timber",
      "Complements Domus windows and doors",
    ],
    image: {
      src: "/media/products/fence-cover.jpg",
      alt: "Domus outdoor privacy fencing on a Caribbean elevation",
    },
    gallery: [
      { src: "/media/products/fence-cover.jpg", alt: "Privacy fencing elevation" },
      { src: "/media/products/fence.jpg", alt: "uPVC outdoor boundary" },
      { src: "/media/products/louver.jpg", alt: "uPVC louvers" },
    ],
  },
  {
    slug: "handrails",
    title: "Handrails",
    eyebrow: "Stairs, balconies & decks",
    summary:
      "Whitman, Conrad, and Majestic handrail systems for stairs, balconies, and outdoor living — durable profiles that stay sharp in salt air.",
    body: [
      "Domus outdoor handrails bring the same climate-minded engineering as our windows and doors. Specify Whitman for simple spans, Conrad Tee-Rail for classic lines, or Majestic for longer ground-level runs.",
      "Built for coastal Jamaica homes, townhouses, and hospitality projects that need code-minded protection without rusty ironwork.",
    ],
    benefits: [
      "Coastal-ready materials",
      "Whitman, Conrad & Majestic styles",
      "Pairs with fencing and decking lines",
      "Professional install available",
    ],
    image: {
      src: "/media/products/handrails-hero.jpg",
      alt: "Modern balcony handrail overlooking outdoor living",
    },
    gallery: [
      { src: "/media/products/handrails-hero.jpg", alt: "Balcony handrail" },
      { src: "/media/products/icon-handrail.png", alt: "Handrail product line" },
    ],
  },
];

export const seriesGroups = [
  {
    id: "basic" as const,
    title: "Basic Series Windows",
    intro: "Everyday Performance through luxurious Supreme — the windows most Caribbean homes start with.",
  },
  {
    id: "security" as const,
    title: "Security Series Windows and Doors",
    intro: "From economical laminate to high-impact security glass for quieter, safer rooms.",
  },
  {
    id: "hurricane" as const,
    title: "Hurricane Series Windows and Doors",
    intro: "Storm-season solutions from economical resistance to high-impact builds.",
  },
];

export function getProductCategory(slug: string) {
  return productCategories.find((p) => p.slug === slug);
}

export function getProductSeries(id: string) {
  return productSeries.find((p) => p.id === id);
}

export const services = productCategories.map((c) => ({
  slug: c.slug,
  title: c.title,
  eyebrow: c.eyebrow,
  summary: c.summary,
  body: c.body,
  benefits: c.benefits,
  image: c.image,
}));

export function getService(slug: string) {
  return getProductCategory(slug);
}
