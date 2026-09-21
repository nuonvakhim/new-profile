import { profile } from "@/app/data/profile";

export function SiteFooter() {
  return (
    <footer className="py-10">
      <div
        aria-hidden
        className="mb-6 h-px w-full bg-gradient-to-r from-accent/50 via-border to-transparent"
      />
      <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-muted">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`https://t.me/${profile.telegram}`}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent"
          >
            Telegram
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-accent"
          >
            Email
          </a>
          <a href="#top" className="transition-colors hover:text-accent">
            Back to top ↑
          </a>
        </div>
      </div>
      <p className="mt-4 font-mono text-[0.7rem] text-muted/70">
        Built with Next.js &amp; Tailwind CSS
      </p>
    </footer>
  );
}
