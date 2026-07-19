export type JournalCategory =
  | "uPVC Basics"
  | "Hurricane Glass"
  | "Security"
  | "Care & Warranty";

export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: JournalCategory;
  date: string;
  featured?: boolean;
  image: { src: string; alt: string };
  body: string[];
};

export const journalPosts: JournalPost[] = [
  {
    slug: "what-is-upvc",
    title: "What is uPVC — and why Caribbean homes prefer it",
    excerpt:
      "Unplasticised PVC stays rigid, skips the paint cycle, and outperforms steel and aluminium in salt air when specified correctly.",
    category: "uPVC Basics",
    date: "2025-11-12",
    featured: true,
    image: {
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",
      alt: "Close view of modern window frame detail",
    },
    body: [
      "uPVC means Unplasticised Poly-Vinyl Chloride — PVC without the resins that make other plastics flexible. That rigidity is why Domus frames hold their shape and seals through Caribbean heat and humidity.",
      "Unlike steel, it will not rust-stain your walls. Unlike many aluminium systems, it does not transfer heat the same way and avoids the classic gasket shrink that lets water and salt into the joint.",
      "Domus frames ship white: reflective, warranty-friendly, and easy to keep looking new with a damp cloth — no abrasives required.",
    ],
  },
  {
    slug: "hurricane-glass-jamaica",
    title: "Hurricane glass for Jamaica: laminate, Solar E, and peace of mind",
    excerpt:
      "Storm season is not the time to discover weak openings. Here is how Domus glass options protect comfort and safety.",
    category: "Hurricane Glass",
    date: "2026-03-02",
    featured: true,
    image: {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
      alt: "Storm clouds over a tropical coastline",
    },
    body: [
      "Hurricane-rated window and door packages combine strong frames with glass that stays in the opening under stress. Laminate options keep shards bonded if impact occurs.",
      "Solar E glass can cut heat gain dramatically — helpful when air conditioning already fights midday sun. Less UV also means curtains and furniture fade more slowly.",
      "Ask a Domus specialist which glass build matches your elevation: windward coast, Kingston corridor, or hillside exposure each have different priorities.",
    ],
  },
  {
    slug: "security-laminate-sound",
    title: "Security laminate that also quiets the street",
    excerpt:
      "Cars, dogs, and dancehall bass — laminate glass is a security upgrade that doubles as acoustic comfort.",
    category: "Security",
    date: "2025-08-20",
    image: {
      src: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1400&q=80",
      alt: "Secure modern entry with glass sidelights",
    },
    body: [
      "Security laminate is harder to defeat than ordinary single glazing and stays together under impact. For many Jamaica homes, that alone justifies the upgrade on ground-floor openings.",
      "The same interlayer that improves security dampens outdoor noise — a practical win for homes near main roads.",
      "Pair laminate with solid locking hardware and you get a system story, not just a glass SKU.",
    ],
  },
  {
    slug: "care-warranty-basics",
    title: "Care & warranty: keeping Domus looking day-one sharp",
    excerpt:
      "Wipe with a damp cloth, skip paint, and know what the frame vs glass warranties cover.",
    category: "Care & Warranty",
    date: "2026-01-15",
    image: {
      src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80",
      alt: "Person cleaning a glass door with a soft cloth",
    },
    body: [
      "uPVC is often called maintenance-free, but a gentle wipe keeps chalky salt film from building up near the coast. Avoid abrasives and never paint the frames — painting can void warranty.",
      "Per Domus documentation shared on the live site, uPVC frames carry a long structural warranty window; hardware and laminated glass carry shorter coverage. Always confirm the current warranty PDF for your order.",
      "Hardware is high-grade stainless (300 series). A light maintenance habit after sea blast keeps operators smooth through rainy season.",
    ],
  },
];

export function getPost(slug: string) {
  return journalPosts.find((p) => p.slug === slug);
}
