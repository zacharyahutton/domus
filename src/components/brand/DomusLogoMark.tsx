"use client";

import Image from "next/image";
import { useRef, useState } from "react";

/** Domus mark with pointer tilt — no GLB / no developer notes on the page. */
export function DomusLogoMark({ className = "" }: { className?: string }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={`relative mx-auto aspect-square w-full max-w-sm ${className}`}
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        setTilt({ x: py * -10, y: px * 12 });
      }}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <div
        className="relative h-full w-full rounded-full bg-gradient-to-br from-fog to-white p-8 shadow-xl transition-transform duration-200 will-change-transform"
        style={{ transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <Image
          src="/brand/logo.png"
          alt="Domus circular brand mark"
          fill
          className="object-contain p-6"
          sizes="320px"
        />
      </div>
    </div>
  );
}
