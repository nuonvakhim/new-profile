import { experience } from "@/app/data/profile";
import { Reveal } from "./reveal";
import { Spotlight } from "./spotlight";
import { Section, Tag } from "./ui";

/**
 * Each entry draws its own slice of the timeline rail. The first fades in from
 * the accent and the last fades out; the ones between stay solid, or the line
 * would break at every gap.
 */
function railClass(index: number, total: number) {
  if (index === 0) return "bg-gradient-to-b from-accent/50 via-border to-border";
  if (index === total - 1) return "bg-gradient-to-b from-border via-border to-transparent";
  return "bg-border";
}

export function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      title="Experience"
      lead="Three years shipping backend services for fintech and enterprise."
    >
      <Spotlight>
        <ol>
          {experience.map((job, i) => (
            <li
              key={`${job.company}-${job.role}`}
              className="grid grid-cols-[12px_1fr] gap-x-5 pb-6 last:pb-0 sm:gap-x-7"
            >
              <div aria-hidden className="relative flex justify-center">
                <span
                  className={`absolute inset-y-0 w-px ${railClass(i, experience.length)}`}
                />
                <span className="relative mt-7 flex h-3 w-3 items-center justify-center">
                  {job.current && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                  )}
                  <span
                    className={`relative h-2.5 w-2.5 rounded-full ring-4 ring-background ${
                      job.current ? "bg-accent" : "bg-border"
                    }`}
                  />
                </span>
              </div>

              <Reveal delay={i * 80}>
                <div
                  className={`card-fx rounded-xl border border-border bg-surface p-5 sm:p-6 ${
                    job.current ? "ring-1 ring-accent/20" : ""
                  }`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {job.role}
                    </h3>
                    <span className="font-mono text-xs text-muted">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-accent">
                    {job.company}
                    {job.current && (
                      <span className="rounded-full bg-accent-soft px-2 py-0.5 font-mono text-[0.65rem] tracking-wide text-accent uppercase">
                        Current
                      </span>
                    )}
                  </p>

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

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Spotlight>
    </Section>
  );
}
