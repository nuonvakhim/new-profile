import { interests, languages, profile } from "@/app/data/profile";
import { Reveal } from "./reveal";
import { Spotlight } from "./spotlight";
import { Section } from "./ui";

export function About() {
  return (
    <Section
      id="about"
      index="01"
      title="About"
      lead="Backend systems that hold up under real financial load."
    >
      <Spotlight className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
        <Reveal>
          {/* Accent bar marks the lead paragraph as the thesis of the section. */}
          <p className="border-l-2 border-accent pl-5 text-base leading-relaxed text-foreground">
            {profile.summary}
          </p>
          <p className="mt-5 pl-5 text-base leading-relaxed text-muted">
            Day to day that means designing schemas and queries that stay fast
            as data grows, wiring up authentication and role-based access,
            documenting APIs so other teams can move without asking, and
            shipping it all through Docker and CI/CD.
          </p>
        </Reveal>

        <Reveal delay={100} className="h-full">
          <div className="card-fx h-full space-y-6 rounded-xl border border-border bg-surface p-6">
            <div>
              <h3 className="mb-3 font-mono text-xs tracking-widest text-accent uppercase">
                Languages
              </h3>
              <ul className="space-y-2">
                {languages.map((language) => (
                  <li
                    key={language.name}
                    className="flex items-baseline justify-between gap-4 border-b border-border pb-2 text-sm last:border-0 last:pb-0"
                  >
                    <span className="text-foreground">{language.name}</span>
                    <span className="font-mono text-xs text-muted">
                      {language.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-mono text-xs tracking-widest text-accent uppercase">
                Interests
              </h3>
              <ul className="space-y-2 text-sm text-muted">
                {interests.map((interest) => (
                  <li key={interest} className="flex gap-2">
                    <span aria-hidden className="text-accent">
                      —
                    </span>
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Spotlight>
    </Section>
  );
}
