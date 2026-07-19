export type ServiceSlug = "windows" | "doors" | "fencing" | "handrails";

export type Service = {
  slug: ServiceSlug;
  title: string;
  eyebrow: string;
  summary: string;
  body: string[];
  benefits: string[];
  image: { src: string; alt: string };
};

export const services: Service[] = [
  {
    slug: "windows",
    title: "Windows",
    eyebrow: "Hurricane-ready glazing",
    summary:
      "uPVC window systems engineered for Caribbean storms, salt air, and year-round sun — clear views without the corrosion of steel or aluminium.",
    body: [
      "Domus windows are built from unplasticised PVC with stainless hardware that stands up to sea blast when maintained. Choose security laminate or Solar E glass for quieter rooms and cooler interiors.",
      "White frames reflect heat and keep your colour palette flexible. Custom sizes, grills, and bug screens are available for new builds and replacements across Jamaica.",
    ],
    benefits: [
      "Hurricane-rated options",
      "Low maintenance — wipe clean",
      "20-year frame warranty (per Domus warranty docs)",
      "Sound-reducing laminate glass options",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      alt: "Bright Caribbean home with modern white-framed windows",
    },
  },
  {
    slug: "doors",
    title: "Doors",
    eyebrow: "Secure entries & patio glass",
    summary:
      "Entrance and sliding door systems that seal tightly, resist corrosion, and keep humidity and noise where they belong — outside.",
    body: [
      "From front entries to wide patio openings, Domus doors pair rigid uPVC frames with high-grade hardware. Laminate glass options add security and acoustic comfort for Kingston traffic and coastal winds alike.",
      "Installation can be arranged through Domus; glass replacements stay available for prior orders in the company database.",
    ],
    benefits: [
      "Security laminate options",
      "No rust staining like steel",
      "Seals that outperform ageing aluminium gaskets",
      "Custom configurations",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      alt: "Modern glass door opening onto a bright patio",
    },
  },
  {
    slug: "fencing",
    title: "Fencing",
    eyebrow: "Outdoor living & privacy",
    summary:
      "uPVC fencing and outdoor systems that hold colour, shrug off humidity, and keep Caribbean yards looking finished without constant painting.",
    body: [
      "Privacy fencing and outdoor living products extend Domus quality beyond the openings of the home. Aluminium reinforcements and uPVC skins are designed for tropical weather.",
      "Ideal for residential boundaries, pool enclosures, and commercial sites that need a clean white finish that will not peel like painted steel.",
    ],
    benefits: [
      "Weather-stable finishes",
      "Privacy and boundary options",
      "Lower maintenance than timber",
      "Complements Domus windows & doors",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
      alt: "Clean white residential fencing along a landscaped yard",
    },
  },
  {
    slug: "handrails",
    title: "Handrails",
    eyebrow: "Stairs, balconies & decks",
    summary:
      "Handrail systems for stairs, balconies, and outdoor living — durable profiles that stay safe and sharp in salt air.",
    body: [
      "Domus outdoor handrails (styles such as Whitman, Conrad, and Majestic on the product line) bring the same climate-minded engineering as our windows and doors.",
      "Specify with confidence for coastal Jamaica homes, townhouses, and hospitality projects that need code-minded protection without rusty ironwork.",
    ],
    benefits: [
      "Coastal-ready materials",
      "Multiple style families",
      "Pairs with fencing & decking lines",
      "Professional install available",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1600047509807-ba8f99d367e3?auto=format&fit=crop&w=1600&q=80",
      alt: "Modern balcony handrail on a contemporary home",
    },
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
