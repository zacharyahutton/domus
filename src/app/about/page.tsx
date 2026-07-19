import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Domus",
  description:
    "Domus Windows & Doors Ltd. — Caribbean uPVC manufacturer with Jamaica showrooms in Kingston and Montego Bay.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-orange">About</p>
      <h1 className="font-display mt-2 text-4xl font-semibold md:text-5xl">Domus Windows &amp; Doors Ltd.</h1>
      <p className="mt-4 text-lg leading-relaxed text-stone">
        Domus is a leader in manufacturing and supplying hurricane-rated uPVC windows, doors, fencing,
        and handrails designed for the Caribbean climate — UV, salt air, humidity, and storm season.
      </p>
      <p className="mt-4 leading-relaxed text-ink/90">
        Across Jamaica, homeowners and builders meet Domus through Kingston and Montego Bay showroom
        conversations, WhatsApp quoting, and the educational “Mr. Domus” voice on Instagram —
        before-and-after stories that make product choices tangible.
      </p>
      <p className="mt-4 leading-relaxed text-ink/90">
        With {siteConfig.years}+ years of trust signals in market, Domus stands for openings that stay
        white, sealed, and serviceable — without the rust cycle of steel or the salt fatigue common to
        ageing aluminium.
      </p>
      <div className="mt-10 rounded-lg border border-line bg-fog p-6">
        <h2 className="font-display text-xl font-semibold">Jamaica contact</h2>
        <ul className="mt-3 space-y-2 text-sm text-stone">
          <li>Office: {siteConfig.jamaica.office}</li>
          <li>WhatsApp: {siteConfig.jamaica.whatsapp}</li>
          <li>Email: {siteConfig.email}</li>
          <li>Showrooms: {siteConfig.jamaica.showrooms.join(" · ")}</li>
        </ul>
      </div>
    </div>
  );
}
