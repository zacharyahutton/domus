"use client";

import { ReactNode, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  children: ReactNode;
  imageSrc: string;
  imageAlt: string;
  className?: string;
  id?: string;
};

/**
 * Background imagery reveals as you scroll — veil lifts so architecture shows through.
 */
export function SectionReveal({ children, imageSrc, imageAlt, className = "", id }: Props) {
  const rootRef = useRef<HTMLElement>(null);
  const veilRef = useRef<HTMLDivElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const veil = veilRef.current;
    const imgWrap = imgWrapRef.current;
    if (!root || !veil || !imgWrap) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    if (reduce) {
      veil.style.opacity = "0.28";
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        veil,
        { opacity: 0.78 },
        {
          opacity: mobile ? 0.28 : 0.12,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top 80%",
            end: "center 35%",
            scrub: mobile ? 0.5 : 0.8,
          },
        }
      );
      gsap.fromTo(
        imgWrap,
        { scale: 1.12 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: mobile ? 0.6 : true,
          },
        }
      );
    }, root);

    return () => ctx.revert();
  }, [imageSrc]);

  return (
    <section ref={rootRef} id={id} className={`relative isolate overflow-hidden ${className}`}>
      <div ref={imgWrapRef} className="absolute inset-0 -z-20">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="100vw" priority={false} />
      </div>
      <div
        ref={veilRef}
        className="absolute inset-0 -z-10 bg-gradient-to-b from-fog/75 via-fog/55 to-fog/70"
        aria-hidden
      />
      <div className="relative">{children}</div>
    </section>
  );
}
