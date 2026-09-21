import { projects } from "@/app/data/profile";
import { Reveal } from "./reveal";
import { Spotlight } from "./spotlight";
import { Section, Tag } from "./ui";

export function Projects() {
  return (
    <Section
      id="projects"
      index="04"
      title="Projects"
      lead="Selected work, from payment platforms to permissioned blockchain."
    >
      <Spotlight className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => {
          // The first entry is the headline project, so it takes the full row.
          const featured = i === 0;

          return (
            <Reveal
              key={project.title}
              delay={i * 70}
              className={`h-full ${featured ? "sm:col-span-2" : ""}`}
            >
              <article className="card-fx group flex h-full flex-col rounded-xl border border-border bg-surface p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs tracking-wide text-muted">
                      {project.context}
                    </p>
                    <h3
                      className={`mt-2 font-semibold tracking-tight transition-colors group-hover:text-accent ${
                        featured ? "text-xl sm:text-2xl" : "text-lg"
                      }`}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <span
                    aria-hidden
                    className="font-mono text-2xl font-semibold text-border transition-colors group-hover:text-accent/50"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <p
                  className={`mt-3 flex-1 text-sm leading-relaxed text-muted ${
                    featured ? "max-w-2xl" : ""
                  }`}
                >
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </Spotlight>
    </Section>
  );
}
