import { experience } from "@/app/data/profile";
import { Reveal } from "./reveal";
import { Section, Tag } from "./ui";

export function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      title="Experience"
      lead="Three years shipping backend services for fintech and enterprise."
    >
      <ol>
        {experience.map((job, i) => (
          <li
            key={`${job.company}-${job.role}`}
            className="grid grid-cols-[10px_1fr] gap-x-5 pb-12 last:pb-0 sm:gap-x-7"
          >
            {/* Timeline rail: a hairline with a node at this entry's start. */}
            <div aria-hidden className="relative flex justify-center">
              <span className="absolute inset-y-0 w-px bg-border" />
              <span
                className={`relative mt-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-background ${
                  job.current ? "bg-accent" : "bg-border"
                }`}
              />
            </div>

            <Reveal delay={i * 80}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold tracking-tight">
                  {job.role}
                </h3>
                <span className="font-mono text-xs text-muted">
                  {job.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-accent">{job.company}</p>

              <ul className="mt-4 space-y-2.5">
                {job.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
