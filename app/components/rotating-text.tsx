"use client";

import { useEffect, useState } from "react";

type RotatingTextProps = {
  phrases: readonly string[];
  className?: string;
};

const HOLD_MS = 2200;
const TYPE_MS = 62;
const ERASE_MS = 28;
const SWAP_MS = 240;

/**
 * Types each phrase out, holds it, erases it, moves on. Renders the first
 * phrase in full on the server so there is no hydration gap and no layout jump
 * before the effect takes over.
 */
export function RotatingText({ phrases, className = "" }: RotatingTextProps) {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(phrases[0].length);
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const full = phrases[index];
    const settled = !erasing && length === full.length;
    const emptied = erasing && length === 0;
    const delay = settled ? HOLD_MS : emptied ? SWAP_MS : erasing ? ERASE_MS : TYPE_MS;

    const timer = setTimeout(() => {
      if (settled) {
        setErasing(true);
      } else if (emptied) {
        setErasing(false);
        setIndex((current) => (current + 1) % phrases.length);
      } else {
        setLength((current) => current + (erasing ? -1 : 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [phrases, index, length, erasing]);

  return (
    <span className={className}>
      {/* The animated text is decorative churn for a screen reader; give it the
          stable job title instead. */}
      <span className="sr-only">{phrases[0]}</span>
      <span aria-hidden="true">
        {phrases[index].slice(0, length)}
        <span className="caret ml-1 inline-block h-[1em] w-[0.5ch] translate-y-[0.12em] bg-accent" />
      </span>
    </span>
  );
}
