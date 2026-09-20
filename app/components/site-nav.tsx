"use client";

import { useEffect, useState } from "react";
import { profile, sections } from "@/app/data/profile";

export function SiteNav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently nearest the top of the viewport.
  useEffect(() => {
    const targets = sections
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // The theme lives on <html> rather than in React state: the pre-paint script
  // owns the initial value, so mirroring it here would only risk a mismatch.
  const toggleTheme = () => {
    const dark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      // Private mode or blocked storage — the theme just won't persist.
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-foreground"
        >
          <span className="text-accent">/</span> {profile.name.toLowerCase().replace(" ", "-")}
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 md:flex">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                    active === id
                      ? "bg-accent-soft text-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="ml-1 rounded-full border border-border p-2 text-muted transition-colors hover:border-accent hover:text-accent"
          >
            {/* Which icon shows is decided by CSS, so it tracks <html> directly. */}
            <span className="hidden dark:block">
              <SunIcon />
            </span>
            <span className="dark:hidden">
              <MoonIcon />
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="rounded-full border border-border p-2 text-muted transition-colors hover:border-accent hover:text-accent md:hidden"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul className="border-t border-border bg-background px-6 py-2 md:hidden">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 text-sm text-muted transition-colors hover:text-accent"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function SunIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg {...iconProps}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg {...iconProps}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
