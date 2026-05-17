import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import {
  ProjectDetailHero,
  ProjectDetailContent,
  ProjectNavigation,
} from "@/components/project/ProjectDetailClient";
import { Section } from "@/components/ui/Section";
import { ProjectSchema } from "@/components/seo/StructuredData";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find next and previous projects for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="pt-20">
      <ProjectSchema project={project} />
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

