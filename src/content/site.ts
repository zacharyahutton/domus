/** Domus Windows & Doors Ltd. — public site constants */
export const siteConfig = {
  name: "Domus Windows & Doors Ltd.",
  shortName: "Domus",
  tagline: "Hurricane-rated uPVC for Caribbean homes",
  description:
    "Domus manufactures and supplies quality hurricane-rated uPVC windows, doors, fencing, and handrails for homeowners, builders, and distributors across Jamaica and the Caribbean.",
  url: "https://domuswindows.com",
  email: "info@domuswindows.com",
  salesEmail: "sales@domuswindows.com",
  designerCredit: "Zachary Hutton",
  designerUrl: "https://zachary-hutton-portfolio.vercel.app/",
  copyrightYear: 2026,
  years: 25,
  clientsServed: 300,
  countriesServed: 4,
  jamaica: {
    office: "876.618.3474",
    officeTel: "+18766183474",
    whatsapp: "876.619.1223",
    whatsappE164: "18766191223",
    whatsappUrl: "https://api.whatsapp.com/send?phone=18766191223",
    showrooms: ["Kingston (Summit, Chelsea Avenue)", "Montego Bay (Sagicor Freeport)"],
    googleBusiness: {
      rating: 4.5,
      phone: "(876) 619-1223",
      address: "Summit, Chelsea Avenue, Kingston",
      searchUrl:
        "https://www.google.com/maps/search/?api=1&query=Domus+Windows+and+Doors+Chelsea+Avenue+Kingston",
    },
  },
  regionalWhatsapp: {
    display: "868.280.3161",
    url: "https://api.whatsapp.com/send?phone=18682803161",
  },
  social: {
    facebook: "https://www.facebook.com/DomusWindowsAndDoors",
    instagram: "https://www.instagram.com/domus.window.door/",
    youtube: "https://www.youtube.com/channel/UC20oJeICmtliiz5oLABcJSg/videos",
    blog: "https://blog.domuswindows.com/",
  },
} as const;

export type NavChild = { href: string; label: string; description?: string };
export type NavItem = {
  href: string;
  label: string;
  children?: NavChild[];
};

/** Deep IA — Quote lives only as sticky CTA button, not a nav tab. */
export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/products",
    label: "Products",
    children: [
      { href: "/products#basic", label: "Basic Series", description: "Performance & Supreme windows" },
      { href: "/products#security", label: "Security Series", description: "Low-cost to high-impact laminate" },
      { href: "/products#hurricane", label: "Hurricane Series", description: "Economical & high-impact storm lines" },
      { href: "/products/windows", label: "Windows" },
      { href: "/products/doors", label: "Doors" },
      { href: "/products/fencing", label: "Fencing" },
      { href: "/products/handrails", label: "Handrails" },
    ],
  },
  {
    href: "/gallery",
    label: "Gallery",
    children: [
      { href: "/gallery?view=featured", label: "Featured", description: "Highlighted installs only" },
      { href: "/gallery", label: "All gallery", description: "Every project and gallery piece" },
      { href: "/gallery#before-after", label: "Before & after" },
    ],
  },
  {
    href: "/insights",
    label: "Insights",
    children: [
      { href: "/insights", label: "All articles" },
      { href: "/insights/category/upvc-basics", label: "uPVC basics" },
      { href: "/insights/category/hurricane-glass", label: "Hurricane glass" },
      { href: "/insights/category/security", label: "Security" },
      { href: "/insights/category/care-warranty", label: "Care & warranty" },
    ],
  },
  { href: "/about", label: "About" },
  {
    href: "/distributors",
    label: "Where to Buy",
    children: [
      { href: "/distributors#trinidad", label: "Trinidad & Tobago" },
      { href: "/distributors#jamaica", label: "Jamaica" },
      { href: "/distributors#eastern", label: "Eastern Caribbean" },
      { href: "/distributors#south", label: "Guyana & South" },
    ],
  },
  { href: "/faq", label: "FAQ" },
];

/** Flat links for footers / sitemap helpers (excludes Quote CTA). */
export const navLinks = navItems.map((n) => ({ href: n.href, label: n.label }));

export const regionalOffices = [
  {
    region: "Trinidad Head Office",
    phone: "868.235.3700",
    phoneTel: "+18682353700",
    whatsapp: "868.282.1100",
    whatsappUrl: "https://api.whatsapp.com/send?phone=18682821100",
  },
  {
    region: "Trinidad Port of Spain",
    whatsapp: "868.332.2522",
    whatsappUrl: "https://api.whatsapp.com/send?phone=18683322522",
  },
  {
    region: "Regional WhatsApp",
    whatsapp: "868.280.3161",
    whatsappUrl: "https://api.whatsapp.com/send?phone=18682803161",
  },
  {
    region: "Jamaica",
    phone: "876.618.3474",
    phoneTel: "+18766183474",
    whatsapp: "876.619.1223",
    whatsappUrl: "https://api.whatsapp.com/send?phone=18766191223",
  },
  {
    region: "St Kitts",
    phone: "869.465.7700",
    phoneTel: "+18694657700",
  },
  {
    region: "Antigua",
    whatsapp: "268.736.7677",
    whatsappUrl: "https://api.whatsapp.com/send?phone=12687367677",
  },
] as const;
