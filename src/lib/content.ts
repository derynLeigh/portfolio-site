import type { CSSProperties } from "react";

export const email = "derynleigh.cullen@icloud.com";

export const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#music", label: "Music" },
  { href: "#contact", label: "Contact" },
];

// The last role must repeat the first so the ticker loops seamlessly.
export const roles = ["Software developer", "Technical writer", "Product owner", "Software developer"];

export const skills = ["Code", "Docs", "Product", "Cloud", "Identity", "Agile", "Cello", "Audio"];

type Experience = {
  badge: string;
  badgeStyle: CSSProperties;
  title: string;
  meta: string[];
  // Segments alternate plain text and bold text, starting with plain.
  body: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    badge: "DC",
    badgeStyle: { background: "var(--accent-soft)", color: "var(--accent)" },
    title: "Contractor",
    meta: ["📍 Bradford, UK", "🗓 Now"],
    body: [
      "Contract work in ", "software development", ", ", "technical writing", " and ", "product ownership",
      ", with fluency in professional music software for anything that touches music or creators.",
    ],
    tags: ["Development", "Docs", "Product"],
  },
  {
    badge: "LBG",
    badgeStyle: { background: "var(--sky)", color: "#3b6fd8" },
    title: "Lloyds Banking Group",
    meta: ["☁️ Private cloud", "🗓 Most recent"],
    body: ["Owned a ", "private cloud platform", ", setting direction and keeping engineering and stakeholders aligned."],
    tags: ["Platform ownership", "Cloud", "Banking"],
  },
  {
    badge: "Sky",
    badgeStyle: { background: "var(--mint)", color: "#2f8a5b" },
    title: "Sky, Digital Identity",
    meta: ["👥 9–10M customers", "🗓 From 2023"],
    body: ["Built features for an identity platform used by ", "9–10 million customers", ", progressing from engineer to ", "Technical Product Owner", "."],
    tags: ["Software engineering", "Identity", "Product"],
  },
  {
    badge: "♪",
    badgeStyle: { background: "var(--sun)", color: "#a57a00" },
    title: "Composer, producer & session cellist",
    meta: ["🌍 Europe & North America", "🗓 16+ years"],
    body: [
      "Wrote for ", "broadcast and online media", ", recorded cello for composers on two continents, and ",
      "engineered and produced", " all my own work.",
    ],
    tags: ["Composition", "Production", "Cello"],
  },
];

type Project = {
  title: string;
  subtitle: string;
  href: string;
  external?: boolean;
  size: "w-a" | "w-b" | "w-c";
  thumb: string;
  shapes: CSSProperties[];
};

export const work: Project[] = [
  {
    title: "Digital Identity at Sky",
    subtitle: "Engineering → product ownership",
    href: "#",
    size: "w-a",
    thumb: "var(--mint)",
    shapes: [
      { width: "60%", aspectRatio: 1, left: "-8%", top: "20%", background: "#3fb37a" },
      { width: "30%", aspectRatio: 1, right: "10%", top: "-10%", background: "var(--sun)" },
    ],
  },
  {
    title: "Private cloud",
    subtitle: "Lloyds Banking Group",
    href: "#",
    size: "w-b",
    thumb: "var(--sky)",
    shapes: [{ width: "70%", aspectRatio: 1, left: "15%", top: "35%", background: "#5b8cff" }],
  },
  {
    title: "Technical writing",
    subtitle: "Docs teams actually read",
    href: "#",
    size: "w-c",
    thumb: "var(--accent-soft)",
    shapes: [
      { width: "45%", aspectRatio: 1, left: "10%", top: "10%", background: "var(--accent)", borderRadius: "24%" },
      { width: "35%", aspectRatio: 1, right: "8%", bottom: "-12%", background: "var(--surface)" },
    ],
  },
  {
    title: "Music for broadcast",
    subtitle: "Composition & production",
    href: "https://soundcloud.com/deryncullencellist",
    external: true,
    size: "w-c",
    thumb: "var(--sun)",
    shapes: [
      { width: "55%", aspectRatio: 1, left: "30%", top: "30%", background: "var(--ink)", borderRadius: "30% 70% 60% 40%" },
    ],
  },
];

export const music = [
  { emoji: "🎻", title: "Session cello", text: "Recorded for composers across Europe and North America.", bg: "var(--accent-soft)" },
  { emoji: "📺", title: "Broadcast & online", text: "Music written to brief, on deadline, for picture.", bg: "var(--sky)" },
  { emoji: "🎛️", title: "Engineer & producer", text: "Ran every session myself, from mic choice to final mix.", bg: "var(--mint)" },
  { emoji: "🎹", title: "Music software", text: "Fluent in the pro tools creators use every day.", bg: "var(--sun)" },
  { emoji: "🤝", title: "Creative + technical", text: "Used to balancing what the art needs with what the tech allows.", bg: "var(--surface)" },
];

export const socials = [
  { href: "https://www.linkedin.com/in/deryncullen/", label: "LinkedIn" },
  { href: "https://github.com/derynLeigh", label: "GitHub" },
  { href: "https://soundcloud.com/deryncullencellist", label: "SoundCloud" },
];
