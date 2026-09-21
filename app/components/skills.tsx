import { skillGroups, techTicker } from "@/app/data/profile";
import { Marquee } from "./marquee";
import { Reveal } from "./reveal";
import { Spotlight } from "./spotlight";
import { Section } from "./ui";

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      title="Skills"
      lead="The stack I reach for."
    >
      <Spotlight className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 70} className="h-full">
            <div className="card-fx h-full rounded-xl border border-border bg-surface p-5">
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
      </Spotlight>

      <Reveal className="mt-10">
        <Marquee items={techTicker} />
      </Reveal>
    </Section>
  );
}
