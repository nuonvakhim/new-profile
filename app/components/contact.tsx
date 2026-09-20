import { profile } from "@/app/data/profile";
import { Reveal } from "./reveal";
import { Section } from "./ui";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    label: "Website",
    value: profile.website.replace(/^https?:\/\//, ""),
    href: profile.website,
  },
  { label: "Location", value: profile.location, href: null },
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
        <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {channels.map((channel) => (
            <div key={channel.label} className="bg-surface px-5 py-4">
              <dt className="font-mono text-xs tracking-widest text-muted uppercase">
                {channel.label}
              </dt>
              <dd className="mt-1.5 text-sm break-words">
                {channel.href ? (
                  <a
                    href={channel.href}
                    className="text-foreground transition-colors hover:text-accent"
                    {...(channel.label === "Website"
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    {channel.value}
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
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
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
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </Reveal>
    </Section>
  );
}
