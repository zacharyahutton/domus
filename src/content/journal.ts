export type JournalCategory =
  | "uPVC Basics"
  | "Hurricane Glass"
  | "Security"
  | "Care & Warranty"
  | "Buying Guide"
  | "Energy & Climate";

export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: JournalCategory;
  date: string;
  readMinutes: number;
  featured?: boolean;
  sections: { heading: string; paragraphs: string[] }[];
  image: { src: string; alt: string };
};

export const journalPosts: JournalPost[] = [
  {
    slug: "what-is-upvc",
    title: "What is uPVC, and why Caribbean homes prefer it",
    excerpt:
      "Unplasticised PVC stays rigid, skips the paint cycle, and outperforms steel and aluminium in salt air when specified correctly.",
    category: "uPVC Basics",
    date: "2025-11-12",
    readMinutes: 7,
    featured: true,
    image: {
      src: "/media/products/picture.jpg",
      alt: "Close view of Domus picture window frame",
    },
    sections: [
      {
        heading: "Rigid by design",
        paragraphs: [
          "uPVC means Unplasticised Poly-Vinyl Chloride: PVC without the resins that make other plastics flexible. That rigidity is why Domus frames hold their shape and seals through Caribbean heat and humidity.",
          "Unlike steel, it will not rust-stain your walls. Unlike many aluminium systems, it does not transfer heat the same way and avoids the classic gasket shrink that lets water and salt into the joint.",
        ],
      },
      {
        heading: "White, reflective, warranty-friendly",
        paragraphs: [
          "Domus frames ship white: reflective, warranty-friendly, and easy to keep looking new with a damp cloth. No abrasives required.",
          "For homeowners comparing total cost of ownership, fewer paint cycles and less corrosion repair often outweigh a lower first invoice on metal systems that age poorly near the coast.",
        ],
      },
    ],
  },
  {
    slug: "hurricane-glass-jamaica",
    title: "Hurricane glass for Jamaica: laminate, Solar E, and peace of mind",
    excerpt:
      "Storm season is not the time to discover weak openings. Here is how Domus glass options protect comfort and safety.",
    category: "Hurricane Glass",
    date: "2026-03-02",
    readMinutes: 8,
    featured: true,
    image: {
      src: "/media/products/casement.jpg",
      alt: "Domus casement window for storm-season homes",
    },
    sections: [
      {
        heading: "Frames and glass as a system",
        paragraphs: [
          "Hurricane-rated window and door packages combine strong frames with glass that stays in the opening under stress. Laminate options keep shards bonded if impact occurs.",
          "Ask a Domus specialist which glass build matches your elevation: windward coast, Kingston corridor, or hillside exposure each have different priorities.",
        ],
      },
      {
        heading: "Comfort between storm seasons",
        paragraphs: [
          "Solar E glass can cut heat gain dramatically, which helps when air conditioning already fights midday sun. Less UV also means curtains and furniture fade more slowly.",
          "Economical and high-impact hurricane series lines let you match budget to risk without guessing from a catalogue alone.",
        ],
      },
    ],
  },
  {
    slug: "security-laminate-sound",
    title: "Security laminate that also quiets the street",
    excerpt:
      "Cars, dogs, and dancehall bass: laminate glass is a security upgrade that doubles as acoustic comfort.",
    category: "Security",
    date: "2025-08-20",
    readMinutes: 6,
    featured: true,
    image: {
      src: "/media/products/swing-door.png",
      alt: "Domus security swing-view door",
    },
    sections: [
      {
        heading: "Security and acoustics together",
        paragraphs: [
          "Security laminate is harder to defeat than ordinary single glazing and stays together under impact. For many Jamaica homes, that alone justifies the upgrade on ground-floor openings.",
          "The same interlayer that improves security dampens outdoor noise, a practical win for homes near main roads.",
        ],
      },
      {
        heading: "Choosing a security tier",
        paragraphs: [
          "Low-cost security covers windows only. Economical and high security tiers extend laminate packages across windows and doors.",
          "Pair laminate with solid locking hardware and you get a system story, not just a glass SKU.",
        ],
      },
    ],
  },
  {
    slug: "care-warranty-basics",
    title: "Care and warranty: keeping Domus looking day-one sharp",
    excerpt:
      "Wipe with a damp cloth, skip paint, and know what the frame vs glass warranties cover.",
    category: "Care & Warranty",
    date: "2026-01-15",
    readMinutes: 5,
    image: {
      src: "/media/insights/upvc-care.jpg",
      alt: "Clean Domus glazed openings on a Caribbean home",
    },
    sections: [
      {
        heading: "Simple care habits",
        paragraphs: [
          "uPVC is often called maintenance-free, but a gentle wipe keeps chalky salt film from building up near the coast. Avoid abrasives and never paint the frames. Painting can void warranty.",
          "Hardware is high-grade stainless (300 series). A light maintenance habit after sea blast keeps operators smooth through rainy season.",
        ],
      },
      {
        heading: "What warranty usually covers",
        paragraphs: [
          "Per Domus documentation shared on the live site, uPVC frames carry a long structural warranty window. Hardware and laminated glass carry shorter coverage.",
          "Always confirm the current warranty PDF for your order before you sign.",
        ],
      },
    ],
  },
  {
    slug: "homeowner-vs-builder-buying",
    title: "Homeowners, builders, and distributors: how buying differs",
    excerpt:
      "Same products, different paths. Here is how Domus serves each audience across Jamaica and the Caribbean.",
    category: "Buying Guide",
    date: "2026-05-10",
    readMinutes: 9,
    featured: true,
    image: {
      src: "/media/insights/distributor-partners.jpg",
      alt: "Commercial Domus multi-unit window elevation",
    },
    sections: [
      {
        heading: "Homeowners",
        paragraphs: [
          "Start with showroom or WhatsApp consult, photos of openings, and a clear priority: security, storms, noise, or aesthetics.",
          "Before and after education from Mr Domus content helps you visualise the finish on familiar Caribbean streetscapes.",
        ],
      },
      {
        heading: "Builders and contractors",
        paragraphs: [
          "Share schedules, elevation notes, and quantity takeoffs early. Domus can align fabrication timing with your programme.",
          "Request a Quote captures project type, location, budget band, and timeline so specialists reply with the right series, not a generic brochure.",
        ],
      },
      {
        heading: "Distributors and agents",
        paragraphs: [
          "Authorised partners stock and advise locally. See Where to Buy for island coverage, then contact the regional office if your market needs a new agent introduction.",
        ],
      },
    ],
  },
  {
    slug: "glossary-openings",
    title: "Glossary: frames, laminate, Solar E, and impact ratings",
    excerpt:
      "A plain-language glossary for homeowners comparing Domus Basic, Security, and Hurricane series options.",
    category: "uPVC Basics",
    date: "2026-04-01",
    readMinutes: 10,
    image: {
      src: "/media/products/multiunit.jpg",
      alt: "Daylit multi-unit Domus glazed openings",
    },
    sections: [
      {
        heading: "Core terms",
        paragraphs: [
          "uPVC: rigid vinyl frames that do not rust. Laminate: interlayer glass that holds together under impact and helps with sound. Solar E: coated glass that reduces heat gain and UV.",
          "Impact and hurricane packages combine frame strength with glass that is designed to stay in the opening under storm stress. Exact ratings depend on the series and size you specify.",
        ],
      },
      {
        heading: "How to use this on a quote call",
        paragraphs: [
          "Name your priority first (security, storms, budget, noise). Then ask which series maps to that priority for your island and elevation.",
          "Bring rough opening sizes or photos. Domus specialists translate that into Performance, Supreme, or the security and hurricane tiers.",
        ],
      },
    ],
  },
  {
    slug: "upvc-care-salt-film",
    title: "uPVC care near the coast: salt film, hardware, and rainy season",
    excerpt:
      "A practical care rhythm for Domus frames within a few kilometres of the sea — without turning maintenance into a second job.",
    category: "Care & Warranty",
    date: "2026-06-18",
    readMinutes: 6,
    featured: true,
    image: {
      src: "/media/insights/upvc-care.jpg",
      alt: "Domus openings ready for coastal care",
    },
    sections: [
      {
        heading: "Salt film is normal",
        paragraphs: [
          "Caribbean sea blast leaves a light chalky film on every elevation facing the wind. On Domus uPVC it is cosmetic, not corrosion. A soft cloth and fresh water remove it; skip scouring pads and harsh chemicals.",
          "After tropical storms, rinse operators and tracks once the weather clears so stainless hardware stays smooth through the next season.",
        ],
      },
      {
        heading: "What not to do",
        paragraphs: [
          "Do not paint Domus frames. Paint can trap moisture and may void frame warranty. Do not force stuck operators — call Domus or your installer for a service visit.",
        ],
      },
    ],
  },
  {
    slug: "noise-reduction-laminate",
    title: "Quieter Kingston rooms: how laminate glass cuts street noise",
    excerpt:
      "Security laminate is not only about forced entry. The interlayer also softens road noise for bedrooms and home offices.",
    category: "Security",
    date: "2026-06-22",
    readMinutes: 5,
    featured: true,
    image: {
      src: "/media/insights/noise-reduction.jpg",
      alt: "Casement openings that help quiet a room",
    },
    sections: [
      {
        heading: "Why laminate helps acoustics",
        paragraphs: [
          "The plastic interlayer that holds glass together under impact also dampens vibration from traffic and bass. Many Kingston and Spanish Town homeowners notice the difference most on street-facing bedrooms.",
          "Pair laminate with well-sealed Domus frames and you get a system, not a single pane upgrade that still leaks sound at the corners.",
        ],
      },
      {
        heading: "Where to prioritise",
        paragraphs: [
          "Start with ground-floor and corridor elevations. A Domus specialist can map Low-Cost, Economical, or High Security tiers to the rooms that matter most for sleep and focus.",
        ],
      },
    ],
  },
  {
    slug: "salt-air-vs-aluminium",
    title: "Salt air vs aluminium: why coastal Jamaica chooses uPVC",
    excerpt:
      "Oxidation, gasket shrink, and corner leaks are common aluminium failures near the sea. Domus uPVC is built for that climate.",
    category: "Energy & Climate",
    date: "2026-07-01",
    readMinutes: 7,
    featured: true,
    image: {
      src: "/media/insights/salt-air.jpg",
      alt: "Coastal Domus window elevation",
    },
    sections: [
      {
        heading: "What salt does to metal systems",
        paragraphs: [
          "Aluminium near the coast often shows white oxidation, stiff operators, and gaskets that shrink away from the frame. Steel stains walls with rust streaks that paint cannot hide for long.",
          "Domus uPVC does not rust. Stainless hardware and UV-stable frames keep openings serviceable when maintained with simple wipe-downs.",
        ],
      },
      {
        heading: "Total cost over a decade",
        paragraphs: [
          "First invoice is only part of the story. Paint cycles, gasket replacements, and early frame failure add up. Warranty-backed Domus frames shift that cost curve toward longevity.",
        ],
      },
    ],
  },
  {
    slug: "energy-solar-e-caribbean",
    title: "Solar E glass and cooler Caribbean interiors",
    excerpt:
      "How coated glass reduces heat gain so air conditioning works less hard between storm seasons.",
    category: "Energy & Climate",
    date: "2026-07-08",
    readMinutes: 6,
    featured: true,
    image: {
      src: "/media/insights/energy-solar-e.jpg",
      alt: "Bright Domus openings with Solar E comfort in mind",
    },
    sections: [
      {
        heading: "Heat gain is the quiet bill",
        paragraphs: [
          "West-facing rooms in Jamaica and Trinidad often fight afternoon sun. Solar E coatings reflect a portion of solar energy before it becomes indoor heat, which can ease air-conditioning load.",
          "Less UV also slows fading on floors, curtains, and furniture — a comfort and cost win beyond the electricity meter.",
        ],
      },
      {
        heading: "Pairing glass with the right series",
        paragraphs: [
          "Ask whether Solar E sits inside a Basic, Security, or Hurricane package for your elevation. Domus specialists match glass builds to budget and risk, not a one-size catalogue pick.",
        ],
      },
    ],
  },
  {
    slug: "distributor-partner-network",
    title: "Working with Domus distributor partners across the Caribbean",
    excerpt:
      "How authorised agents and distributors help island markets stock, advise, and support Domus openings locally.",
    category: "Buying Guide",
    date: "2026-07-12",
    readMinutes: 5,
    featured: true,
    image: {
      src: "/media/insights/distributor-partners.jpg",
      alt: "Domus multi-unit install for partners and projects",
    },
    sections: [
      {
        heading: "Local advice, regional manufacturing",
        paragraphs: [
          "Domus manufactures with Caribbean climate in mind and reaches island markets through authorised partners. Where to Buy lists offices and agents from Trinidad and Jamaica to the Eastern Caribbean and Guyana.",
          "Partners help with local stock, installation coordination, and the first conversation when a homeowner or builder is ready to specify.",
        ],
      },
      {
        heading: "Becoming a partner",
        paragraphs: [
          "Trade buyers can email sales or request a quote with island market details and references. Domus evaluates coverage gaps carefully so homeowners meet genuine authorised partners.",
        ],
      },
    ],
  },
];

export const journalCategories: JournalCategory[] = [
  "uPVC Basics",
  "Hurricane Glass",
  "Security",
  "Care & Warranty",
  "Buying Guide",
  "Energy & Climate",
];

export function getPost(slug: string) {
  return journalPosts.find((p) => p.slug === slug);
}

export function postsByCategory(category: JournalCategory) {
  return journalPosts.filter((p) => p.category === category);
}

export function categoryToSlug(category: JournalCategory) {
  return category
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function slugToCategory(slug: string): JournalCategory | undefined {
  return journalCategories.find((c) => categoryToSlug(c) === slug);
}
