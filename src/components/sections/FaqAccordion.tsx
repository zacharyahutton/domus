"use client";

import { useState } from "react";

type Item = { q: string; a: string };

export function FaqAccordion({ items, title = "FAQ" }: { items: Item[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      <h2 className="font-display text-3xl font-semibold md:text-4xl">{title}</h2>
      <div className="mt-8 space-y-3">
        {items.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="overflow-hidden rounded-xl border border-line bg-white shadow-sm">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="font-display text-base font-semibold text-ink md:text-lg">{f.q}</span>
                <span className="text-cta" aria-hidden>
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen ? (
                <div className="border-t border-line px-5 py-4 text-sm leading-relaxed text-stone">
                  {f.a}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
