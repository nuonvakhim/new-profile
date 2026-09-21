import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/app/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.website),
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
  keywords: [
    "Nuon Vakhim",
    "Software Developer",
    "Software Engineer",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "Next.js",
    "Cambodia",
  ],
  authors: [{ name: profile.name, url: profile.website }],
  openGraph: {
    type: "profile",
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    url: profile.website,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
  },
};

// Runs before first paint: applies the saved (or system) theme so the page
// never flashes the wrong palette, and flags that JS is available.
const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var dark = stored ? stored === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {}
  document.documentElement.classList.add('js');
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="grain min-h-full flex flex-col">{children}</body>
    </html>
  );
}
