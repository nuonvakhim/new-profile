import { projects } from "@/app/data/profile";
import { Reveal } from "./reveal";
import { Section, Tag } from "./ui";

export function Projects() {
  return (
    <Section
      id="projects"
      index="04"
      title="Projects"
      lead="Selected work, from payment platforms to permissioned blockchain."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 70}>
            <article className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/50">
              <p className="font-mono text-xs tracking-wide text-muted">
                {project.context}
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
