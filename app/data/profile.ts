export const profile = {
  name: "Nuon Vakhim",
  role: "Software Developer",
  tagline:
    "Backend engineer building scalable services, microservices, and web portals for fintech and enterprise platforms.",
  summary:
    "Software Developer with 3+ years of software engineering experience specializing in scalable backend systems, microservices, and web portals. Proficient in Java, Spring Boot, PostgreSQL, REST APIs, and Next.js. Experienced across the full SDLC — Swagger API documentation, unit and integration testing, Dockerized services, and Agile collaboration with cross-functional and international teams.",
  location: "Krong Takhmau, Kandal Province, Cambodia",
  email: "vakhimnuon@gmail.com",
  phone: "+855 96 553 1965",
  telegram: "vakhimnuon",
  website: "https://vakhim-dev.site",
  stats: [
    { value: "3+", label: "Years building software" },
    { value: "Java", label: "Primary stack" },
    { value: "B2B", label: "Fintech platforms shipped" },
  ],
} as const;

export const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "PHP", "Golang", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks",
    items: ["Spring Boot", "Spring MVC", "React.js", "Next.js", "Vue.js"],
  },
  {
    title: "Tech & Architecture",
    items: [
      "Microservices",
      "REST APIs",
      "Swagger",
      "Docker",
      "Jenkins",
      "Unit & Integration Testing",
    ],
  },
  { title: "Databases", items: ["PostgreSQL", "MySQL"] },
  {
    title: "Tools & Workflows",
    items: ["Git", "Subversion (SVN)", "CI/CD", "Figma", "Agile"],
  },
] as const;

export const experience = [
  {
    role: "Software Engineer",
    company: "KOSIGN (Cambodia) Investment Co., Ltd.",
    period: "Jan 2024 — Present",
    current: true,
    highlights: [
      "Developed and maintained secure, scalable backend services in Java, Spring Boot, and PostgreSQL for financial and enterprise platforms, ensuring high availability and data integrity.",
      "Implemented authentication and role-based access control with Spring Security and JWT.",
      "Designed and optimized database schemas and SQL queries, improving transaction processing performance and ensuring data consistency.",
      "Built reporting systems using JasperReports for PDF generation and automated delivery.",
      "Delivered backend API services for billing, reporting, and enterprise payment workflows across web and mobile clients.",
      "Deployed and maintained services with Docker on Linux servers, supporting CI/CD workflows.",
      "Worked closely with Korean counterparts and international teams.",
      "Developed and maintained a B2B fintech platform on an internal framework.",
      "Accelerated development workflows and automated testing using Claude Code and Claude Harness.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "JasperReports",
      "Docker",
      "JWT",
    ],
  },
  {
    role: "Freelance Software Developer",
    company: "Machinery Maintenance Bot System",
    period: "Independent project",
    current: false,
    highlights: [
      "Developed and deployed a Telegram bot system that monitors maintenance schedules for heavy machinery, letting users record service data and receive automated alerts for oil changes and part replacements.",
      "Designed bot-based input workflows and maintenance tracking features to improve servicing efficiency and reduce equipment downtime.",
    ],
    stack: ["Telegram Bot API", "Backend Services", "Scheduling"],
  },
  {
    role: "Trainee",
    company: "Korea Software HRD Center",
    period: "Jan 2023 — Dec 2023",
    current: false,
    highlights: [
      "Developed RESTful APIs and a social project with Spring Boot and React.js, delivering dynamic, high-performance user experiences.",
      "Researched and implemented a private blockchain network using Hyperledger Fabric, Golang, and chaincode.",
      "Collaborated on team-based projects following Agile development practices.",
      "Designed UI/UX mockups and workflows in Figma.",
    ],
    stack: [
      "Spring Boot",
      "React.js",
      "Hyperledger Fabric",
      "Golang",
      "Figma",
    ],
  },
] as const;

export const projects = [
  {
    title: "B2B Fintech Platform",
    context: "KOSIGN Investment",
    description:
      "Backend services for a business-to-business fintech platform built on an internal framework — billing, reporting, and enterprise payment workflows serving both web and mobile clients.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
  },
  {
    title: "Machinery Maintenance Bot",
    context: "Freelance",
    description:
      "A Telegram bot that tracks maintenance schedules for heavy machinery. Operators log service data through guided chat workflows and receive automated alerts for oil changes and part replacements.",
    stack: ["Telegram Bot API", "REST APIs", "Automated Alerts"],
  },
  {
    title: "Private Blockchain Network",
    context: "Korea Software HRD Center",
    description:
      "Research and implementation of a permissioned blockchain network on Hyperledger Fabric, with chaincode written in Golang to model and validate on-chain transactions.",
    stack: ["Hyperledger Fabric", "Golang", "Chaincode"],
  },
  
] as const;

export const education = [
  {
    credential: "Bachelor's Degree of Computer Science",
    institution: "Royal University of Phnom Penh",
    period: "2021 — 2024",
  },
  {
    credential: "High School Graduate",
    institution: "Hun Sen Sereypheab High School",
    period: "2019 — 2020",
  },
] as const;

export const languages = [
  { name: "Khmer", level: "Native" },
  { name: "English", level: "Good" },
] as const;

export const interests = [
  "Researching emerging technologies",
  "Learning and skill development",
  "Building applications",
] as const;

export const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

/** Phrases the hero cycles through under the name. */
export const heroRoles = [
  "Software Developer",
  "Backend Engineer",
  "Microservices & REST APIs",
  "Java · Spring Boot · PostgreSQL",
] as const;

/** The hero's request/response card — a self-description in the shape of work. */
export const heroPayload = {
  method: "GET",
  path: "/api/developers/nuon-vakhim",
  status: "200 OK",
  time: "38ms",
  body: [
    { key: "role", value: '"Software Developer"' },
    { key: "focus", value: '["backend", "frondend", "microservices"]' },
    { key: "stack", value: '["Java", "Spring Boot", "PostgreSQL", "Next.JS]' },
    { key: "experience_years", value: "3" },
    { key: "location", value: '"Phnom Penh, KH"' },
    { key: "available", value: "true" },
  ],
} as const;

/** Flat technology list for the scrolling ticker under the skills grid. */
export const techTicker = [
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "Docker",
  "Microservices",
  "REST APIs",
  "Spring Security",
  "JWT",
  "Next.js",
  "React.js",
  "TypeScript",
  "Golang",
  "Jenkins",
  "Swagger",
  "MySQL",
  "Vue.js",
  "PHP",
  "Git",
  "CI/CD",
  "JasperReports",
] as const;
