"use client";

import { useEffect, useState } from "react";

type Props = {
  phrases: string[];
  typingMs?: number;
  holdMs?: number;
};

/**
 * Typewriter effect (React Bits GAP: no official @reactbits package for Next 15).
 * Uses Framer-free CSS + timers; respects prefers-reduced-motion.
 */
export function Typewriter({ phrases, typingMs = 42, holdMs = 2200 }: Props) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduce) {
      setText(phrases[0] || "");
      return;
    }
    const phrase = phrases[phraseIndex] || "";
    let i = 0;
    let cancelled = false;
    setText("");

    const typeTimer = window.setInterval(() => {
      if (cancelled) return;
      i += 1;
      setText(phrase.slice(0, i));
      if (i >= phrase.length) {
        window.clearInterval(typeTimer);
        window.setTimeout(() => {
          if (!cancelled) setPhraseIndex((p) => (p + 1) % phrases.length);
        }, holdMs);
      }
    }, typingMs);

    return () => {
      cancelled = true;
      window.clearInterval(typeTimer);
    };
  }, [phraseIndex, phrases, typingMs, holdMs, reduce]);

  return (
    <span aria-live="polite">
      {text}
      {!reduce ? <span className="ml-0.5 inline-block animate-pulse">|</span> : null}
    </span>
  );
}
