"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

type SpotlightProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Tracks the cursor across a group of `.card-fx` cards and writes its position
 * into the hovered card's CSS vars, which drive the highlight and gradient edge
 * in globals.css.
 *
 * One listener on the container rather than one per card: the cards stay server
 * components, and only a single element is ever mutated at a time.
 */
export function Spotlight({ children, className = "" }: SpotlightProps) {
  const active = useRef<HTMLElement | null>(null);

  const release = () => {
    if (active.current) {
      active.current.dataset.active = "false";
      active.current = null;
    }
  };

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    // Touch and pen have no hover state to leave, so the highlight would stick.
    if (event.pointerType !== "mouse") return;

    const card = (event.target as HTMLElement).closest<HTMLElement>(".card-fx");
    if (card !== active.current) {
      release();
      if (card) {
        card.dataset.active = "true";
        active.current = card;
      }
    }
    if (!card) return;

    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    card.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <div className={className} onPointerMove={handleMove} onPointerLeave={release}>
      {children}
    </div>
  );
}
