"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Extra GSAP life on the first fold after hero — parallax lift + fade-in for BA / who-we-are.
 */
export function FirstFoldMotion({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const bits = gsap.utils.toArray<HTMLElement>("[data-fold]");
      bits.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0.35, scale: 0.985 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              end: "top 55%",
              scrub: window.matchMedia("(max-width: 768px)").matches ? 0.45 : 0.7,
            },
            delay: i * 0.02,
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="relative">
      {children}
    </div>
  );
}
