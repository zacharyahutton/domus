"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/content/trust";

export function ProcessScrollStory() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-process-step]");
      const nums = gsap.utils.toArray<HTMLElement>("[data-process-num]");

      gsap.set(cards, { y: 48, opacity: 0, rotateX: 8 });
      gsap.set(nums, { scale: 0.7, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 70%",
          end: "bottom 55%",
          scrub: 0.65,
        },
      });

      tl.to("[data-process-line]", {
        scaleX: 1,
        transformOrigin: "left center",
        ease: "none",
        duration: 1,
      });

      cards.forEach((card, i) => {
        tl.to(
          card,
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.35,
            ease: "power2.out",
          },
          i * 0.18
        );
        tl.to(
          nums[i],
          {
            scale: 1,
            opacity: 1,
            duration: 0.25,
            ease: "back.out(1.6)",
          },
          i * 0.18
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-cta">Process</p>
      <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">
        From consult to install
      </h2>
      <p className="mt-3 max-w-2xl text-stone">
        Scroll to walk each step — a clear path that builds trust before fabrication begins.
      </p>
      <div
        data-process-line
        className="mt-8 hidden h-1 origin-left scale-x-0 rounded-full bg-gradient-to-r from-magenta via-green to-orange lg:block"
        aria-hidden
      />
      <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" style={{ perspective: 900 }}>
        {processSteps.map((p) => (
          <li
            key={p.step}
            data-process-step
            className="rounded-xl border border-line bg-white p-5 shadow-sm will-change-transform"
          >
            <p
              data-process-num
              className="font-display inline-flex h-10 w-10 items-center justify-center rounded-full bg-cta/10 text-sm font-bold text-cta"
            >
              {p.step}
            </p>
            <h3 className="mt-3 font-display text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-stone">{p.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
