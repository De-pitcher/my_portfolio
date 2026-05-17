import { Section } from "@/components/ui/Section";
import { skills } from "@/data/skills";
import { siteConfig } from "@/lib/constants";
import {
  AboutHero,
  AboutExperience,
  AboutSkills,
  AboutStats,
  AboutResume,
} from "@/components/about/AboutClient";

export const metadata = {
  title: "About",
  description: "Learn about Noel, a full-stack software engineer with 5+ years of experience specializing in enterprise SaaS, cross-platform mobile apps, and IoT integration.",
  openGraph: {
    title: "About Noel - Full-Stack Software Engineer",
    description: "5+ years of experience building enterprise-grade applications. Specializing in React, Next.js, Flutter, Node.js, and AI integration.",
    url: `${siteConfig.url}/about`,
    type: "profile",
  },
};

const experience = [
  {
    period: "2023 - Present",
    role: "Full-Stack Software Engineer",
    company: "Peregrine-Tech",
    description: "Building enterprise-grade POS systems, mobile applications, and AI-powered tools for various industries.",
    highlights: ["React & Next.js", "Flutter & Riverpod", "Node.js & Express", "MongoDB & PostgreSQL", "AI/ML Integration"],
  },
  {
    period: "2021 - 2023",
    role: "Mobile App Developer",
    company: "Independent Contractor",
    description: "Developed cross-platform mobile applications and contributed to multiple open-source projects.",
    highlights: ["Flutter Development", "Clean Architecture", "Firebase Integration", "Cross-platform Apps"],
  },
  {
    period: "2020 - 2021",
    role: "Junior Full-Stack Developer",
    company: "Early Career",
    description: "Started journey in web development with focus on React and Node.js fundamentals.",
    highlights: ["React Fundamentals", "API Development", "Database Design", "Problem Solving"],
  },
];

const skillsByCategory = skills.reduce((acc, skill) => {
  const category = skill.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(skill);
  return acc;
}, {} as Record<string, typeof skills>);

const categoryOrder = ["Frontend", "Mobile", "Backend", "Database", "DevOps", "Tools"];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-transparent to-foreground/5">
        <AboutHero />
      </Section>

      {/* Work Experience */}
      <Section>
        <AboutExperience experience={experience} />
      </Section>

      {/* Skills Breakdown */}
      <Section className="bg-foreground/5">
        <AboutSkills skillsByCategory={skillsByCategory} categoryOrder={categoryOrder} />
      </Section>

      {/* Stats */}
      <Section>
        <AboutStats />
      </Section>

      {/* Resume Download */}
      <Section className="bg-gradient-to-b from-transparent to-foreground/5">
        <AboutResume />
      </Section>
    </div>
  );
}
