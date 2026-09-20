import { About } from "@/app/components/about";
import { Contact } from "@/app/components/contact";
import { Education } from "@/app/components/education";
import { Experience } from "@/app/components/experience";
import { Hero } from "@/app/components/hero";
import { Projects } from "@/app/components/projects";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteNav } from "@/app/components/site-nav";
import { Skills } from "@/app/components/skills";
import { profile } from "@/app/data/profile";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description: profile.tagline,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  url: profile.website,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Krong Takhmau",
    addressRegion: "Kandal Province",
    addressCountry: "KH",
  },
  worksFor: {
    "@type": "Organization",
    name: "KOSIGN (Cambodia) Investment Co., Ltd.",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Royal University of Phnom Penh",
  },
  knowsLanguage: ["Khmer", "English"],
};

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="mx-auto w-full max-w-5xl flex-1 px-6">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <SiteFooter />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  );
}
