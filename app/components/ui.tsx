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
    <section id={id} className="scroll-mt-24 border-t border-border py-20 sm:py-24">
      <Reveal>
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 font-mono text-xs tracking-widest text-accent uppercase">
            {index} — {title}
          </p>
          {lead && (
            <h2 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
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
    <span className="rounded-md border border-border bg-surface px-2 py-1 font-mono text-[0.7rem] text-muted">
      {children}
    </span>
  );
}
