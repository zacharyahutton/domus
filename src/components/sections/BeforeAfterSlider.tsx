"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  caption?: string;
  heading?: string;
  subheading?: string;
  className?: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  caption,
  heading = "See the Domus difference on a Caribbean elevation",
  subheading = "Drag the slider to compare an ageing opening with a Domus-style finish — from empty rough openings to climate-ready frames.",
  className = "",
}: Props) {
  const [pos, setPos] = useState(50);
  const [width, setWidth] = useState(0);
  const dragging = useRef(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setWidth(el.clientWidth));
    ro.observe(el);
    setWidth(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = boxRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  return (
    <section
      className={`mx-auto max-w-6xl px-4 py-16 md:px-6 ${className}`}
      aria-labelledby="ba-heading"
    >
      <div className="mb-6 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-cta">Before &amp; after</p>
        <h2 id="ba-heading" className="font-display mt-2 text-3xl font-semibold md:text-4xl">
          {heading}
        </h2>
        {subheading ? <p className="mt-3 text-stone">{subheading}</p> : null}
      </div>

      <div
        ref={boxRef}
        className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-fog select-none touch-none"
        onPointerMove={(e) => {
          if (!dragging.current) return;
          updateFromClientX(e.clientX);
        }}
        onPointerUp={() => {
          dragging.current = false;
        }}
        onPointerLeave={() => {
          dragging.current = false;
        }}
        onPointerDown={(e) => {
          dragging.current = true;
          (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
          updateFromClientX(e.clientX);
        }}
      >
        <Image src={afterSrc} alt={afterAlt} fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <div className="relative h-full" style={{ width: width ? `${width}px` : "100%" }}>
            <Image src={beforeSrc} alt={beforeAlt} fill className="object-cover" sizes="100vw" />
          </div>
        </div>
        <div
          className="absolute inset-y-0 z-10 w-1 bg-white shadow"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        >
          <button
            type="button"
            aria-label="Drag to compare before and after"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            role="slider"
            className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink shadow-md"
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
              if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
              if (e.key === "Home") setPos(0);
              if (e.key === "End") setPos(100);
            }}
          >
            ⟷
          </button>
        </div>
        <span className="absolute left-3 top-3 rounded bg-ink/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
          Before
        </span>
        <span className="absolute right-3 top-3 rounded bg-ink/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
          After
        </span>
      </div>
      {caption ? <p className="mt-3 text-sm text-stone">{caption}</p> : null}
    </section>
  );
}
