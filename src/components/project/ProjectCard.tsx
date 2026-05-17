"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
        {/* Thumbnail */}
        {project.thumbnail && (
          <div className="w-full h-48 bg-foreground/5 overflow-hidden relative group">
            {/* Placeholder for image - will be replaced by Next.js Image in Phase 6 */}
            <div className="w-full h-full flex items-center justify-center text-foreground/30">
              <div className="text-center">
                <p className="text-sm">📷 {project.title}</p>
              </div>
            </div>
          </div>
        )}

        <CardHeader className="flex-1">
          <div className="flex items-start justify-between gap-2 mb-2 flex-wrap">
            <div className="flex gap-2 flex-wrap">
              {project.category.map((cat) => (
                <Badge key={cat} variant="secondary" className="text-xs">
                  {cat}
                </Badge>
              ))}
            </div>
            {project.isNDAProtected && (
              <Badge variant="outline" className="text-xs">
                NDA
              </Badge>
            )}
          </div>
          <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
          <CardDescription className="text-sm">{project.tagline}</CardDescription>
          <p className="text-sm text-foreground/60 mt-2 line-clamp-2">{project.description}</p>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Tech Stack */}
          {project.techStack && project.techStack.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-foreground/70 mb-2">Tech Stack</p>
              <div className="flex flex-wrap gap-1">
                {project.techStack.slice(0, 3).map((tech, i) => (
                  <Badge key={i} variant="outline" className="text-xs">
                    {tech.name}
                  </Badge>
                ))}
                {project.techStack.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{project.techStack.length - 3} more
                  </Badge>
                )}
              </div>
            </div>
          )}

          {/* CTA Button */}
          <Link href={`/projects/${project.slug}`} className="w-full block">
            <Button className="w-full" variant="outline" size="sm">
              View Details
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
