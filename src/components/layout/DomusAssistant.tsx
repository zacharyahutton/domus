"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/content/site";
import { assistantFaqs } from "@/content/trust";

type Msg = { role: "bot" | "user"; text: string };

/** Icon-only FAB. Panel copy stays client-facing product guidance. */
export function DomusAssistant() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "bot",
      text: "Welcome to Domus. Ask about windows, doors, hurricane glass, distributors, or how to request a quote.",
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, open]);

  function ask(q: string, a: string) {
    setMsgs((m) => [...m, { role: "user", text: q }, { role: "bot", text: a }]);
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      {open ? (
        <div
          className="flex h-[min(520px,70vh)] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-2xl"
          role="dialog"
          aria-label="Domus assistant"
        >
          <div className="bg-ink px-4 py-3 text-white">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-display text-sm font-semibold">Domus Guide</p>
                <p className="text-[11px] text-white/70">Products · Gallery · Quotes</p>
              </div>
              <button
                type="button"
                className="rounded-md px-2 py-1 text-xs text-white/80 hover:bg-white/10"
                onClick={() => setOpen(false)}
                aria-label="Close assistant"
              >
                ✕
              </button>
            </div>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto bg-fog px-3 py-3">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`max-w-[90%] rounded-2xl px-3 py-2 text-sm ${
                  m.role === "bot" ? "bg-white text-ink shadow-sm" : "ml-auto bg-cta text-white"
                }`}
              >
                {m.text}
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <div className="border-t border-line bg-white p-3">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-stone">
              Quick guides
            </p>
            <div className="flex flex-wrap gap-2">
              {assistantFaqs.map((f) => (
                <button
                  key={f.q}
                  type="button"
                  className="rounded-full border border-line px-3 py-1 text-left text-xs text-ink hover:border-cta"
                  onClick={() => ask(f.q, f.a)}
                >
                  {f.q}
                </button>
              ))}
            </div>
            <a
              href={siteConfig.jamaica.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex w-full items-center justify-center rounded-md bg-green px-3 py-2 text-sm font-semibold text-white"
            >
              WhatsApp {siteConfig.jamaica.whatsapp}
            </a>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white shadow-lg ring-2 ring-gold/40 transition hover:brightness-110"
        aria-expanded={open}
        aria-label={open ? "Close Domus assistant" : "Open Domus assistant"}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M12 3a7 7 0 00-4.9 11.9L6 21l6.1-1.1A7 7 0 1012 3z"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinejoin="round"
            />
            <circle cx="9" cy="11" r="1" fill="currentColor" />
            <circle cx="12" cy="11" r="1" fill="currentColor" />
            <circle cx="15" cy="11" r="1" fill="currentColor" />
          </svg>
        )}
      </button>
    </div>
  );
}
