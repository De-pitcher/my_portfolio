import { siteConfig } from "@/lib/constants";

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    url: siteConfig.url,
    sameAs: [
      siteConfig.author.github,
      siteConfig.author.linkedin,
    ],
    jobTitle: "Full-Stack Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Peregrine-Tech",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Flutter",
      "Node.js",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "AI/ML Integration",
      "IoT Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.author.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProfessionalServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteConfig.author.name} - Software Development`,
    url: siteConfig.url,
    description: siteConfig.description,
    provider: {
      "@type": "Person",
      name: siteConfig.author.name,
      email: siteConfig.author.email,
    },
    areaServed: "Worldwide",
    serviceType: [
      "Custom POS Systems",
      "Cross-Platform Mobile Apps",
      "Enterprise SaaS Platforms",
      "Backend Development",
      "AI/ML Integration",
      "IoT Solutions",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ProjectSchemaProps {
  project: {
    title: string;
    description: string;
    slug: string;
    techStack: Array<{ name: string; category: string }>;
  };
}

export function ProjectSchema({ project }: ProjectSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.description,
    url: `${siteConfig.url}/projects/${project.slug}`,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
    programmingLanguage: project.techStack.map((tech) => tech.name),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
