export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  location: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "After the storm season we were done with rusting steel. Domus windows transformed the house — cooler, quieter, and we finally stopped repainting frames.",
    name: "A. Reid",
    role: "Homeowner",
    location: "Kingston",
  },
  {
    id: "2",
    quote:
      "The Montego Bay team walked us through laminate vs Solar E like teachers, not salespeople. Mr. Domus energy is real — clear before-and-after expectations.",
    name: "S. Campbell",
    role: "Villa owner",
    location: "Montego Bay",
  },
  {
    id: "3",
    quote:
      "We replaced failing aluminium on a coastal rental. Seals hold, hardware still looks new, and guests comment on how quiet the rooms feel.",
    name: "J. Bennett",
    role: "Property manager",
    location: "Ocho Rios",
  },
];

export const faqs = [
  {
    q: "What is uPVC?",
    a: "Unplasticised Poly-Vinyl Chloride — a rigid material for doors and windows that is strong, tough, and resilient compared with typical aluminium, steel, and timber systems in Caribbean conditions.",
  },
  {
    q: "What colours are available?",
    a: "Domus uPVC windows and doors are supplied in white. White reflects heat and lets you change wall and furnishing colours over time.",
  },
  {
    q: "Why uPVC instead of steel or aluminium?",
    a: "uPVC needs little maintenance, will not rust like steel, and avoids many aluminium issues in salt and humidity (oxidation, shrinking gaskets, corner leaks). Domus frames do not transfer heat the same way metal does.",
  },
  {
    q: "Do you install in Jamaica?",
    a: "Yes — installation can be provided at additional cost. Contact the Jamaica office or WhatsApp to scope your project.",
  },
  {
    q: "What about warranty?",
    a: "uPVC frames are guaranteed for twenty years; hardware and laminated glass for five years — confirm current terms on your quote and Domus warranty documents.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Consult",
    text: "Share photos, openings, and goals — storm protection, security, noise, or a full refresh.",
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
