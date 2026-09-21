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

const pageTitle = `${profile.name} — ${profile.role}`;

export const metadata: Metadata = {
  // Relative URLs below — the canonical, and the generated OG image — resolve
  // against this, so it has to stay absolute.
  metadataBase: new URL(profile.website),
  title: {
    default: pageTitle,
    // Used if this ever grows past a single page.
    template: `%s — ${profile.name}`,
  },
  description: profile.tagline,
  applicationName: `${profile.name} — Portfolio`,
  keywords: [
    "Nuon Vakhim",
    "Software Developer",
    "Software Engineer",
    "Backend Engineer",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "Microservices",
    "REST API",
    "Next.js",
    "Cambodia",
    "Phnom Penh",
  ],
  authors: [{ name: profile.name, url: profile.website }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // Let Google use the full-size OG image and an untruncated snippet.
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "profile",
    firstName: "Vakhim",
    lastName: "Nuon",
    username: profile.telegram,
    title: pageTitle,
    description: profile.tagline,
    url: profile.website,
    siteName: profile.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
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
