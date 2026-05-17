"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import type { Project } from "@/types";

interface ProjectDetailHeroProps {
  project: Project;
}

export function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  return (
    <div className="min-h-[60vh] flex items-center py-16 md:py-24">
      <div className="max-w-4xl mx-auto w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm text-foreground/60">
            <Link href="/projects" className="hover:text-foreground transition-colors">
              Projects
            </Link>
            <span>/</span>
            <span className="text-foreground">{project.title}</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.category.map((cat) => (
                <Badge key={cat} variant="secondary">
                  {cat === "ai-ml" ? "AI/ML" : cat}
                </Badge>
              ))}
              {project.isNDAProtected && <Badge variant="outline">NDA Protected</Badge>}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-6">{project.tagline}</p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg">Visit Project</Button>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg">
                    View Code
                  </Button>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

interface ProjectDetailContentProps {
  project: Project;
}

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2 space-y-8"
        >
          {/* Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-foreground/70 leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-foreground/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Outcomes */}
          {project.outcomes && project.outcomes.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Outcomes & Impact</h2>
              <ul className="space-y-2">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-1">→</span>
                    <span className="text-foreground/70">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-6"
        >
          {/* Tech Stack */}
          {project.techStack && project.techStack.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {project.techStack.map((tech, index) => (
                    <div key={index}>
                      <p className="text-sm font-semibold text-foreground">{tech.name}</p>
                      <p className="text-xs text-foreground/60">{tech.category}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Quick Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Project Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-xs text-foreground/60 uppercase tracking-wider">Categories</p>
                <p className="text-sm font-medium">
                  {project.category.map((c) => (c === "ai-ml" ? "AI/ML" : c)).join(", ")}
                </p>
              </div>
              <div>
                <p className="text-xs text-foreground/60 uppercase tracking-wider">Status</p>
                <p className="text-sm font-medium">
                  {project.isNDAProtected ? "Confidential" : "Public"}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

interface ProjectNavigationProps {
  prevProject: Project | null;
  nextProject: Project | null;
}

export function ProjectNavigation({ prevProject, nextProject }: ProjectNavigationProps) {
  if (!prevProject && !nextProject) return null;

  return (
    <div className="bg-foreground/5 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">More Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {prevProject ? (
            <Link href={`/projects/${prevProject.slug}`}>
              <motion.div
                whileHover={{ x: -4 }}
                className="p-6 rounded-lg border border-foreground/10 hover:border-foreground/30 transition-colors cursor-pointer"
              >
                <p className="text-sm text-foreground/60 mb-2">← Previous Project</p>
                <h3 className="text-lg font-bold">{prevProject.title}</h3>
              </motion.div>
            </Link>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Link href={`/projects/${nextProject.slug}`}>
              <motion.div
                whileHover={{ x: 4 }}
                className="p-6 rounded-lg border border-foreground/10 hover:border-foreground/30 transition-colors cursor-pointer text-right"
              >
                <p className="text-sm text-foreground/60 mb-2">Next Project →</p>
                <h3 className="text-lg font-bold">{nextProject.title}</h3>
              </motion.div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
