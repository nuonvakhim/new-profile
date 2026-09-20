import { skillGroups } from "@/app/data/profile";
import { Reveal } from "./reveal";
import { Section } from "./ui";

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      title="Skills"
      lead="The stack I reach for."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 70}>
            <div className="h-full rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/50">
              <h3 className="mb-4 font-mono text-xs tracking-widest text-accent uppercase">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-background px-2.5 py-1 text-sm text-foreground ring-1 ring-border ring-inset"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
