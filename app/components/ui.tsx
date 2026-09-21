import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  lead?: string;
  children: ReactNode;
};

export function Section({ id, index, title, lead, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-24">
      {/* Divider that starts at the accent and dissolves across the page. */}
      <div
        aria-hidden
        className="h-px w-full bg-gradient-to-r from-accent/50 via-border to-transparent"
      />

      <Reveal>
        <div className="mt-10 mb-10 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-xs font-medium tracking-[0.2em] text-accent">
              {index}
            </span>
            <span aria-hidden className="rule-gradient h-px w-8" />
            <span className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
              {title}
            </span>
          </div>
          {lead && (
            <h2 className="text-2xl font-semibold tracking-tight text-balance sm:text-[2rem] sm:leading-tight">
              {lead}
            </h2>
          )}
        </div>
      </Reveal>

      {children}
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-border bg-surface-2 px-2 py-1 font-mono text-[0.7rem] text-muted transition-colors hover:border-accent/40 hover:text-accent">
      {children}
    </span>
  );
}
