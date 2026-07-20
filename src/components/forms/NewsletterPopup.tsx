"use client";

import { FormEvent, useEffect, useState } from "react";

const STORAGE_KEY = "domus-newsletter-popup-seen-v1";

export function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      return;
    }
    const t = window.setTimeout(() => setVisible(true), 3500);
    return () => window.clearTimeout(t);
  }, []);

  function dismiss() {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: String(fd.get("email") || "").trim(),
          source: "popup",
          honeypot: String(fd.get("company_website") || ""),
        }),
      });
      if (!res.ok && res.status !== 204) throw new Error("Could not subscribe.");
      setStatus("done");
      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
      window.setTimeout(() => setVisible(false), 1400);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed");
      setStatus("error");
    }
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-ink/50 p-4 sm:items-center">
      <div
        role="dialog"
        aria-labelledby="nl-popup-title"
        className="w-full max-w-md rounded-2xl border border-line bg-white p-6 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-cta">Newsletter</p>
            <h2 id="nl-popup-title" className="font-display mt-1 text-2xl font-semibold text-ink">
              Stay storm-season ready
            </h2>
            <p className="mt-2 text-sm text-stone">
              Product updates, installation tips, and exclusive promotions — straight to your inbox.
            </p>
          </div>
          <button
            type="button"
            aria-label="Dismiss newsletter"
            className="mt-0.5 shrink-0 text-sm text-stone hover:text-ink"
            onClick={dismiss}
          >
            ✕
          </button>
        </div>
        {status === "done" ? (
          <p className="mt-4 text-sm font-medium text-green" role="status">
            Thank you. You are subscribed.
          </p>
        ) : (
          <form className="relative mt-4 space-y-3" onSubmit={onSubmit}>
            <input
              name="email"
              type="email"
              required
              maxLength={200}
              placeholder="Your email"
              className="w-full rounded-md border border-line px-3 py-2.5 text-sm"
              autoComplete="email"
            />
            <div className="absolute -left-[9999px]" aria-hidden>
              <input name="company_website" tabIndex={-1} autoComplete="off" />
            </div>
            {error ? (
              <p className="text-sm text-magenta" role="alert">
                {error}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-md bg-cta px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
            >
              {status === "loading" ? "Subscribing…" : "Subscribe now"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
