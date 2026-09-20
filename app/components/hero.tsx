import { profile } from "@/app/data/profile";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-backdrop pointer-events-none absolute inset-0 -z-10" />
      <div className="py-20 sm:py-28">
        <Reveal>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Available for backend & full-stack work
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-base text-accent sm:text-lg">
            {profile.role}
          </p>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Get in touch
            </a>
            <a
              href="#experience"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              View experience
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="bg-surface px-5 py-4">
                <dt className="text-xs tracking-wide text-muted uppercase">
                  {stat.label}
                </dt>
                <dd className="mt-1 font-mono text-xl font-medium text-foreground">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
