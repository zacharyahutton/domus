"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/content/site";

/**
 * Adapted from Patterns/Active/Lead-Funnel + Form-System.
 * Extended fields: project type, Jamaica location, budget, timeline + WhatsApp CTA.
 */
export function LeadForm({ source = "contact" }: { source?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

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
      if (!res.ok) throw new Error("Could not submit. Please try again or WhatsApp us.");
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
          We received your project details. A Domus specialist will follow up soon — or message
          us now on WhatsApp.
        </p>
        <a
          href={siteConfig.jamaica.whatsappUrl}
          className="mt-4 inline-flex rounded-md bg-green px-4 py-2 text-sm font-semibold text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp {siteConfig.jamaica.whatsapp}
        </a>
      </div>
    );
  }

  const field =
    "mt-1 w-full rounded-md border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-orange";

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
            Location (Jamaica)
          </label>
          <input
            id="location"
            name="location"
            placeholder="e.g. Kingston, Montego Bay"
            maxLength={120}
            className={field}
          />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
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
        <div>
          <label htmlFor="budget" className="text-sm font-medium text-ink">
            Budget
          </label>
          <select id="budget" name="budget" className={field} defaultValue="">
            <option value="">Select</option>
            <option>Under J$500k</option>
            <option>J$500k–1.5M</option>
            <option>J$1.5M–3M</option>
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
            <option>1–3 months</option>
            <option>3–6 months</option>
            <option>Planning only</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Project details
        </label>
        <textarea id="message" name="message" required rows={4} maxLength={4000} className={field} />
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
          className="rounded-md bg-orange px-6 py-3 text-sm font-semibold text-white disabled:opacity-60"
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
      <p className="text-xs text-stone">We will never sell your information to third parties.</p>
    </form>
  );
}
