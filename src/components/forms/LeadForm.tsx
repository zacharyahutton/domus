"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/content/site";

/**
 * Adapted from Patterns/Active/Lead-Funnel + Form-System.
 * variant=full adds openings count, audience, preferred contact for converting quotes.
 */
export function LeadForm({
  source = "contact",
  variant = "standard",
}: {
  source?: string;
  variant?: "standard" | "full";
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const full = variant === "full";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim() || undefined,
      message: String(fd.get("message") || "").trim(),
      source,
      honeypot: String(fd.get("company_website") || ""),
      projectType: String(fd.get("projectType") || "") || undefined,
      location: String(fd.get("location") || "").trim() || undefined,
      budget: String(fd.get("budget") || "") || undefined,
      timeline: String(fd.get("timeline") || "") || undefined,
      openingsCount: String(fd.get("openingsCount") || "").trim() || undefined,
      audience: String(fd.get("audience") || "") || undefined,
      preferredContact: String(fd.get("preferredContact") || "") || undefined,
    };

    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.status === 429) throw new Error("Too many requests. Try again in a minute.");
      if (res.status === 204) {
        setStatus("done");
        return;
      }
      if (res.status === 422) {
        const data = (await res.json().catch(() => null)) as {
          issues?: { fieldErrors?: Record<string, string[]> };
        } | null;
        const fieldErrors = data?.issues?.fieldErrors;
        const first =
          fieldErrors &&
          Object.values(fieldErrors)
            .flat()
            .find(Boolean);
        throw new Error(first || "Please check the form fields and try again.");
      }
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(
          data?.error || "Could not submit. Please try again or WhatsApp us."
        );
      }
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submit failed");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-lg border border-green/30 bg-green/5 p-6" role="status">
        <p className="font-display text-xl font-semibold text-ink">Thank you</p>
        <p className="mt-2 text-stone">
          We received your project details. A Domus specialist will follow up soon, or message us
          now on WhatsApp.
        </p>
        <a
          href={siteConfig.jamaica.whatsappUrl}
          className="mt-4 inline-flex rounded-md bg-green px-4 py-2 text-sm font-semibold text-white transition hover:brightness-95"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp {siteConfig.jamaica.whatsapp}
        </a>
      </div>
    );
  }

  const field =
    "mt-1 w-full rounded-md border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none transition focus:border-cta";

  return (
    <form className="relative space-y-4" onSubmit={onSubmit} noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Name
          </label>
          <input id="name" name="name" required maxLength={120} className={field} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            className={field}
            autoComplete="email"
          />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-ink">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" maxLength={40} className={field} autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="location" className="text-sm font-medium text-ink">
            Island or parish
          </label>
          <input
            id="location"
            name="location"
            placeholder="e.g. Kingston, Trinidad, St Lucia"
            maxLength={120}
            className={field}
          />
        </div>
      </div>
      {full ? (
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="audience" className="text-sm font-medium text-ink">
              I am a
            </label>
            <select id="audience" name="audience" className={field} defaultValue="Homeowner">
              <option>Homeowner</option>
              <option>Builder</option>
              <option>Distributor</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="preferredContact" className="text-sm font-medium text-ink">
              Preferred contact
            </label>
            <select id="preferredContact" name="preferredContact" className={field} defaultValue="WhatsApp">
              <option>WhatsApp</option>
              <option>Phone</option>
              <option>Email</option>
            </select>
          </div>
        </div>
      ) : null}
      <div className={`grid gap-4 ${full ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
        <div>
          <label htmlFor="projectType" className="text-sm font-medium text-ink">
            Project type
          </label>
          <select id="projectType" name="projectType" className={field} defaultValue="Windows">
            <option>Windows</option>
            <option>Doors</option>
            <option>Fencing</option>
            <option>Handrails</option>
            <option>Multiple</option>
            <option>Not sure</option>
          </select>
        </div>
        {full ? (
          <div>
            <label htmlFor="openingsCount" className="text-sm font-medium text-ink">
              Approx. openings
            </label>
            <input id="openingsCount" name="openingsCount" placeholder="e.g. 8" maxLength={40} className={field} />
          </div>
        ) : null}
        <div>
          <label htmlFor="budget" className="text-sm font-medium text-ink">
            Budget
          </label>
          <select id="budget" name="budget" className={field} defaultValue="">
            <option value="">Select</option>
            <option>Under J$500k</option>
            <option>J$500k to 1.5M</option>
            <option>J$1.5M to 3M</option>
            <option>J$3M+</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className="text-sm font-medium text-ink">
            Timeline
          </label>
          <select id="timeline" name="timeline" className={field} defaultValue="">
            <option value="">Select</option>
            <option>ASAP</option>
            <option>1 to 3 months</option>
            <option>3 to 6 months</option>
            <option>Planning only</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={full ? 6 : 4}
          maxLength={4000}
          className={field}
          placeholder={
            full
              ? "Describe openings, photos available, storm vs security priority, and any contractor already on site."
              : undefined
          }
        />
      </div>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>
      {error ? (
        <p className="text-sm text-magenta" role="alert">
          {error}
        </p>
      ) : null}
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-md bg-cta px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95 disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Request a quote"}
        </button>
        <a
          href={siteConfig.jamaica.whatsappUrl}
          className="text-sm font-semibold text-green underline-offset-4 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Or WhatsApp us
        </a>
      </div>
      <p className="text-xs text-stone">
        We will never sell your information to third parties. See our{" "}
        <a href="/privacy" className="underline underline-offset-2 hover:text-ink">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
