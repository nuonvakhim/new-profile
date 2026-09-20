import { profile } from "@/app/data/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8">
      <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-muted">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
