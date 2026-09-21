import { heroPayload, heroRoles, profile } from "@/app/data/profile";
import { Reveal } from "./reveal";
import { RotatingText } from "./rotating-text";
import { Spotlight } from "./spotlight";

export function Hero() {
  return (
    <section id="top" className="relative">
      {/* Full-bleed: clipped at the viewport, not at the content column, so
          the glow has no visible edge. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 bottom-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden"
      >
        <div className="grid-backdrop absolute inset-0" />
        <div className="orb orb-a absolute -top-24 left-[4%] h-[32rem] w-[32rem]" />
        <div className="orb orb-b absolute -top-16 right-[2%] h-[28rem] w-[28rem]" />
      </div>

      <div className="grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-28">
        <div>
          <Reveal>
            <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 font-mono text-xs text-muted backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Available for backend &amp; full-stack work
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-gradient text-5xl font-semibold tracking-[-0.035em] text-balance sm:text-6xl lg:text-[4.25rem] lg:leading-[1.02]">
              {profile.name}
            </h1>
            <p className="mt-4 flex min-h-[3.5rem] items-start font-mono text-base text-accent sm:min-h-[2rem] sm:text-lg">
              <RotatingText phrases={heroRoles} />
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
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-all hover:shadow-lg hover:shadow-accent/30"
              >
                Get in touch
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a
                href="#projects"
                className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                See the work
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={320}>
          <Spotlight>
            <ResponseCard />
          </Spotlight>
        </Reveal>
      </div>

      <Reveal delay={400}>
        <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {profile.stats.map((stat) => (
            <div key={stat.label} className="group bg-surface px-5 py-5 transition-colors hover:bg-surface-2">
              <dt className="font-mono text-[0.68rem] tracking-widest text-muted uppercase">
                {stat.label}
              </dt>
              <dd className="mt-1.5 text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}

/**
 * The hero's visual anchor: the profile rendered as the kind of API response
 * this portfolio's owner writes for a living.
 */
function ResponseCard() {
  return (
    <div className="card-fx rounded-2xl border border-border bg-surface/80 shadow-2xl shadow-black/[0.06] backdrop-blur-sm dark:shadow-black/40">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span aria-hidden className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
        </span>
        <p className="ml-2 font-mono text-[0.7rem] tracking-wide text-muted">
          developer.http
        </p>
      </div>

      <div className="space-y-3 p-4 font-mono text-[0.75rem] leading-relaxed sm:p-5 sm:text-[0.8rem]">
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="rounded bg-accent-soft px-1.5 py-0.5 font-medium text-accent">
            {heroPayload.method}
          </span>
          <span className="text-foreground">{heroPayload.path}</span>
        </p>

        <p className="flex items-center gap-2 text-muted">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
          {heroPayload.status}
          <span aria-hidden className="text-border">|</span>
          {heroPayload.time}
        </p>

        <div className="rounded-lg bg-background/60 p-3 ring-1 ring-border ring-inset">
          <p className="text-muted">{"{"}</p>
          {heroPayload.body.map((field, i) => (
            <p key={field.key} className="pl-4 break-words">
              <span className="text-accent-2">&quot;{field.key}&quot;</span>
              <span className="text-muted">: </span>
              <span className="text-foreground">{field.value}</span>
              {i < heroPayload.body.length - 1 && (
                <span className="text-muted">,</span>
              )}
            </p>
          ))}
          <p className="text-muted">
            {"}"}
            <span className="caret ml-1 inline-block h-[0.95em] w-[0.5ch] translate-y-[0.1em] bg-accent" />
          </p>
        </div>
      </div>
    </div>
  );
}
