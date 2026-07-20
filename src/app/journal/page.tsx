import { redirect } from "next/navigation";

/** Legacy journal route → Insights. */
export default function JournalRedirect() {
  redirect("/insights");
}
