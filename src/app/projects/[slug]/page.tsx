import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { projects } from "@/data/projects";
import {
  ProjectDetailHero,
  ProjectDetailContent,
  ProjectNavigation,
} from "@/components/project/ProjectDetailClient";

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Find next and previous projects for navigation
  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-transparent to-foreground/5">
        <ProjectDetailHero project={project} />
      </Section>

      {/* Main Content */}
      <Section>
        <ProjectDetailContent project={project} />
      </Section>

      {/* Project Navigation */}
      {(prevProject || nextProject) && (
        <ProjectNavigation prevProject={prevProject} nextProject={nextProject} />
      )}
    </div>
  );
}

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

