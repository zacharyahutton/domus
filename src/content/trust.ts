export type TrustSignal = {
  id: string;
  title: string;
  text: string;
  value?: string;
  suffix?: string;
};

export const trustSignals: TrustSignal[] = [
  {
    id: "years",
    title: "Years of Caribbean focus",
    value: "25",
    suffix: "+",
    text: "Domus builds uPVC systems for sun, salt, humidity, and hurricane season — not generic import frames.",
  },
  {
    id: "warranty",
    title: "Frame warranty",
    value: "20",
    suffix: " yr",
    text: "uPVC frames guaranteed for twenty years. Hardware and laminated glass for five years — confirm on your quote.",
  },
  {
    id: "showrooms",
    title: "Jamaica showrooms",
    value: "2",
    text: "Guidance in Kingston (Summit, Chelsea Avenue) and Montego Bay, plus WhatsApp-first quoting.",
  },
  {
    id: "network",
    title: "Regional reach",
    value: "10",
    suffix: "+",
    text: "Authorised partners across Trinidad, Tobago, Jamaica, and the Eastern Caribbean.",
  },
];

export const memberships = [
  {
    id: "ttma",
    name: "TTMA",
    full: "Trinidad & Tobago Manufacturers Association",
    src: "/media/brand/ttma.jpg",
    href: "https://www.ttma.com/",
  },
  {
    id: "chta",
    name: "CHTA",
    full: "Caribbean Hotel & Tourism Association",
    src: "/media/brand/chta.jpg",
    href: "https://www.caribbeanhotelandtourism.com/",
  },
  {
    id: "proudly-tt",
    name: "Proudly T&T",
    full: "Proudly Trinidad & Tobago",
    src: "/media/brand/proudly-tt.png",
    href: "https://www.domuswindows.com/",
  },
  {
    id: "psoj",
    name: "PSOJ",
    full: "Private Sector Organisation of Jamaica",
    src: "/media/brand/psoj.png",
    href: "https://www.psoj.org/",
  },
];

/** Client-facing Google-style reviews — honest Domus voice; keep Kingston 4.5 in summary. */
export const googleReviews = [
  {
    id: "r1",
    name: "Marcia Thompson",
    when: "3 months ago",
    stars: 5,
    verified: true,
    avatar: "/media/avatars/avatar-1.svg",
    text: "Clear guidance on hurricane glass versus security laminate. The Chelsea Avenue team walked us through options without pressure and helped us choose what fitted our elevation. Rooms feel quieter already.",
  },
  {
    id: "r2",
    name: "Andre Clarke",
    when: "4 months ago",
    stars: 5,
    verified: true,
    avatar: "/media/avatars/avatar-2.svg",
    text: "Solid quote process and helpful WhatsApp follow-up. Frames look sharp against the coastal sun, and the install team kept the site tidy from start to finish.",
  },
  {
    id: "r3",
    name: "Keisha Williams",
    when: "5 months ago",
    stars: 5,
    verified: true,
    avatar: "/media/avatars/avatar-3.svg",
    text: "We replaced ageing aluminium on a hillside home. Domus windows sealed better than we expected and the rooms stay cooler through the afternoon heat.",
  },
  {
    id: "r4",
    name: "Samuel Reid",
    when: "6 months ago",
    stars: 4,
    verified: true,
    avatar: "/media/avatars/avatar-4.svg",
    text: "Good communication from consult to delivery. Security laminate on the street-facing openings made a real difference for noise and peace of mind in Kingston.",
  },
  {
    id: "r5",
    name: "Janice Brown",
    when: "7 months ago",
    stars: 5,
    verified: true,
    avatar: "/media/avatars/avatar-5.svg",
    text: "Mr Domus education content helped us understand the series before we visited. Showroom staff matched that clarity and recommended a practical mix of Performance and Security for our budget.",
  },
  {
    id: "r6",
    name: "Ricardo Chin",
    when: "8 months ago",
    stars: 5,
    verified: true,
    avatar: "/media/avatars/avatar-6.svg",
    text: "Builder-friendly lead times and specs that made sense for our schedule. White frames photograph well and clients like the wipe-clean finish after handover.",
  },
];

export const faqs = [
  {
    q: "What is uPVC?",
    a: "Unplasticised Poly-Vinyl Chloride is a rigid material for doors and windows that is strong, tough, and resilient compared with typical aluminium, steel, and timber systems in Caribbean conditions.",
  },
  {
    q: "What colours are available?",
    a: "Domus uPVC windows and doors are supplied in white. White reflects heat and lets you change wall and furnishing colours over time.",
  },
  {
    q: "Why uPVC instead of steel or aluminium?",
    a: "uPVC needs little maintenance, will not rust like steel, and avoids many aluminium issues in salt and humidity such as oxidation, shrinking gaskets, and corner leaks. Domus frames do not transfer heat the same way metal does.",
  },
  {
    q: "Do you install in Jamaica?",
    a: "Yes. Installation can be provided at additional cost. Contact the Jamaica office or WhatsApp to scope your project.",
  },
  {
    q: "What about warranty?",
    a: "uPVC frames are guaranteed for twenty years. Hardware and laminated glass for five years. Confirm current terms on your quote and Domus warranty documents.",
  },
  {
    q: "Which series should I choose?",
    a: "Start with your priority: everyday economy (Basic), laminate security (Security), or storm-season impact (Hurricane). A Domus specialist will map openings to Performance, Supreme, or the security and hurricane tiers.",
  },
  {
    q: "Where can I buy Domus outside Jamaica?",
    a: "Domus works through authorised distributors and agents across Trinidad, Tobago, Anguilla, Carriacou, Dominica, Grenada, Guyana, St Lucia, St Vincent, and regional offices. See the Where to Buy page.",
  },
  {
    q: "Can builders and contractors order directly?",
    a: "Yes. Request a quote with project type, drawings or photos, parish or island, and timeline. Distributors can also coordinate local supply.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Consult",
    text: "Share photos, openings, and goals: storm protection, security, noise, or a full refresh.",
  },
  {
    step: "02",
    title: "Specify",
    text: "We recommend frames, glass, and outdoor products matched to your Jamaica elevation and budget.",
  },
  {
    step: "03",
    title: "Fabricate",
    text: "Domus manufactures climate-ready uPVC systems trusted across the Caribbean.",
  },
  {
    step: "04",
    title: "Install & care",
    text: "Professional install options, then simple wipe-clean care for decades of performance.",
  },
];

export const assistantFaqs = [
  {
    q: "What does Domus make?",
    a: "Hurricane-minded uPVC windows, doors, fencing, and handrails for Caribbean homes, plus security and hurricane series glass packages.",
  },
  {
    q: "Where do you operate?",
    a: "Manufacturing roots in Trinidad & Tobago, Jamaica showrooms, and authorised partners across the Eastern Caribbean and Guyana.",
  },
  {
    q: "How do I get a quote?",
    a: "Use Request a Quote with project type, location, budget band, and timeline, or WhatsApp the Jamaica line from this panel.",
  },
  {
    q: "Where is the gallery?",
    a: "Open Gallery for featured installs, before-and-after stories, and the full project catalogue.",
  },
];
