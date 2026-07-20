export type Distributor = {
  island: string;
  region: "trinidad" | "jamaica" | "eastern" | "south";
  role: "office" | "distributor" | "agent";
  name: string;
  contact?: string;
  phone?: string;
  phoneTel?: string;
  whatsapp?: string;
  whatsappUrl?: string;
  notes?: string;
  logo?: string;
};

/** Authorised network by island — names from Domus public distributor roster. */
export const distributors: Distributor[] = [
  {
    island: "Trinidad",
    region: "trinidad",
    role: "office",
    name: "Domus Head Office",
    phone: "868.235.3700",
    phoneTel: "+18682353700",
    whatsapp: "868.282.1100",
    whatsappUrl: "https://api.whatsapp.com/send?phone=18682821100",
  },
  {
    island: "Trinidad",
    region: "trinidad",
    role: "office",
    name: "Port of Spain Office",
    whatsapp: "868.332.2522",
    whatsappUrl: "https://api.whatsapp.com/send?phone=18683322522",
  },
  {
    island: "Trinidad",
    region: "trinidad",
    role: "distributor",
    name: "Allied",
    logo: "/media/brand/dis-allied.svg",
  },
  {
    island: "Trinidad",
    region: "trinidad",
    role: "distributor",
    name: "Damus",
    logo: "/media/brand/dis-damus.svg",
  },
  {
    island: "Trinidad",
    region: "trinidad",
    role: "distributor",
    name: "Dream Builders",
    logo: "/media/brand/dis-dreambuild.svg",
  },
  {
    island: "Trinidad",
    region: "trinidad",
    role: "distributor",
    name: "Homefront",
    logo: "/media/brand/dis-homefront.svg",
  },
  {
    island: "Tobago",
    region: "trinidad",
    role: "distributor",
    name: "Authorised Tobago distributor",
    notes: "Contact Domus Head Office for current Tobago partner details.",
  },
  {
    island: "Jamaica",
    region: "jamaica",
    role: "office",
    name: "Domus Jamaica (Kingston & Montego Bay)",
    phone: "876.618.3474",
    phoneTel: "+18766183474",
    whatsapp: "876.619.1223",
    whatsappUrl: "https://api.whatsapp.com/send?phone=18766191223",
    notes: "Showrooms: Summit, Chelsea Avenue · Montego Bay (Sagicor Freeport)",
  },
  {
    island: "Anguilla",
    region: "eastern",
    role: "agent",
    name: "Synergy",
  },
  {
    island: "Carriacou",
    region: "eastern",
    role: "agent",
    name: "Paddy",
  },
  {
    island: "Dominica",
    region: "eastern",
    role: "distributor",
    name: "Do It",
  },
  {
    island: "Grenada",
    region: "eastern",
    role: "distributor",
    name: "Caribbean",
  },
  {
    island: "St. Lucia",
    region: "eastern",
    role: "distributor",
    name: "Car Metals / IB",
  },
  {
    island: "St. Vincent",
    region: "eastern",
    role: "distributor",
    name: "Peppa",
  },
  {
    island: "Antigua",
    region: "eastern",
    role: "office",
    name: "Antigua WhatsApp line",
    whatsapp: "268.736.7677",
    whatsappUrl: "https://api.whatsapp.com/send?phone=12687367677",
  },
  {
    island: "St. Kitts",
    region: "eastern",
    role: "office",
    name: "St. Kitts Office",
    phone: "869.465.7700",
    phoneTel: "+18694657700",
  },
  {
    island: "Guyana",
    region: "south",
    role: "distributor",
    name: "HSD",
  },
];

export const distributorRegions = [
  {
    id: "trinidad" as const,
    title: "Trinidad & Tobago",
    blurb: "Manufacturing roots and authorised Trinidad partners, plus Tobago coverage.",
    flagSrc: "/media/flags/tt.svg",
    flagAlt: "Trinidad and Tobago flag",
  },
  {
    id: "jamaica" as const,
    title: "Jamaica",
    blurb: "Kingston and Montego Bay showrooms with WhatsApp-first quoting.",
    flagSrc: "/media/flags/jm.svg",
    flagAlt: "Jamaica flag",
  },
  {
    id: "eastern" as const,
    title: "Eastern Caribbean",
    blurb: "Authorised agents and distributors across the Eastern Caribbean islands.",
    flagSrc: "/media/flags/eastern.svg",
    flagAlt: "Eastern Caribbean",
  },
  {
    id: "south" as const,
    title: "Guyana & South",
    blurb: "Regional partners serving Guyana and neighbouring markets.",
    flagSrc: "/media/flags/gy.svg",
    flagAlt: "Guyana flag",
  },
];
