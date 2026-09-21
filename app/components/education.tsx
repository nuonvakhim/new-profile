import { education } from "@/app/data/profile";
import { Reveal } from "./reveal";
import { Spotlight } from "./spotlight";
import { Section } from "./ui";

export function Education() {
  return (
    <Section id="education" index="05" title="Education" lead="Where I trained.">
      <Spotlight className="grid gap-4 sm:grid-cols-2">
        {education.map((entry, i) => (
          <Reveal key={entry.credential} delay={i * 70} className="h-full">
            <div className="card-fx h-full rounded-xl border border-border bg-surface p-6">
              <p className="font-mono text-xs tracking-wide text-accent">
                {entry.period}
              </p>
              <h3 className="mt-2 text-base font-semibold tracking-tight">
                {entry.credential}
              </h3>
              <p className="mt-1 text-sm text-muted">{entry.institution}</p>
            </div>
          </Reveal>
        ))}
      </Spotlight>
    </Section>
  );
}
