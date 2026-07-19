/** CMS-ready site constants — Domus Windows & Doors Ltd. */
export const siteConfig = {
  name: "Domus Windows & Doors Ltd.",
  shortName: "Domus",
  tagline: "Hurricane-rated uPVC for Caribbean homes",
  description:
    "Domus manufactures and supplies quality hurricane-rated uPVC windows, doors, fencing, and handrails designed for the Caribbean climate — security, UV protection, and sound reduction.",
  url: "https://domuswindows.com",
  email: "sales@domuswindows.com",
  jamaica: {
    office: "876-618-3474",
    officeTel: "+18766183474",
    whatsapp: "876-619-1223",
    whatsappE164: "18766191223",
    whatsappUrl: "https://api.whatsapp.com/send?phone=18766191223",
    showrooms: ["Kingston", "Montego Bay"],
  },
  social: {
    facebook: "https://www.facebook.com/DomusWindowsAndDoors",
    instagram: "https://www.instagram.com/domus.window.door/",
    youtube: "https://www.youtube.com/channel/UC20oJeICmtliiz5oLABcJSg/videos",
    blog: "https://blog.domuswindows.com/",
  },
  years: 25,
} as const;

export const navLinks = [
  { href: "/projects", label: "Our Work" },
  { href: "/services", label: "Products" },
  { href: "/journal", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
