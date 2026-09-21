import { profile } from "@/app/data/profile";
import { Reveal } from "./reveal";
import { Section } from "./ui";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    label: "Telegram",
    value: `@${profile.telegram}`,
    href: `https://t.me/${profile.telegram}`,
    external: true,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    external: false,
  },
  {
    label: "Website",
    value: profile.website.replace(/^https?:\/\//, ""),
    href: profile.website,
    external: true,
  },
  {
    label: "Location",
    value: profile.location,
    href: null,
    external: false,
  },
] as const;

export function Contact() {
  return (
    <Section
      id="contact"
      index="06"
      title="Contact"
      lead="Open to backend and full-stack roles — let's talk."
    >
      <Reveal>
        <dl className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {channels.map((channel, i) => (
            <div
              key={channel.label}
              // An odd channel count would leave a bare gap in the two-column
              // grid, so the last one stretches across it.
              className={`group bg-surface px-5 py-4 transition-colors hover:bg-surface-2 ${
                i === channels.length - 1 && channels.length % 2 === 1
                  ? "sm:col-span-2"
                  : ""
              }`}
            >
              <dt className="font-mono text-xs tracking-widest text-muted uppercase">
                {channel.label}
              </dt>
              <dd className="mt-1.5 text-sm wrap-break-word">
                {channel.href ? (
                  <a
                    href={channel.href}
                    className="inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-accent"
                    {...(channel.external
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    {channel.value}
                    <span
                      aria-hidden
                      className="text-accent opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                    >
                      →
                    </span>
                  </a>
                ) : (
                  <span className="text-foreground">{channel.value}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal delay={100}>
        <a
          href={`mailto:${profile.email}`}
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-all hover:shadow-lg hover:shadow-accent/30"
        >
          Send me an email
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
      </Reveal>
    </Section>
  );
}
