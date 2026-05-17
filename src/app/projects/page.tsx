"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/project/ProjectCard";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/types";

const categories: ProjectCategory[] = ["web", "mobile", "backend", "iot", "ai-ml", "fullstack"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "all">("all");
  const [showNDAOnly, setShowNDAOnly] = useState(false);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch =
        selectedCategory === "all" || project.category.includes(selectedCategory);
      const ndaMatch = !showNDAOnly || project.isNDAProtected;
      return categoryMatch && ndaMatch;
    });
  }, [selectedCategory, showNDAOnly]);

  return (
    <Section className="pt-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A collection of {projects.length}+ projects showcasing enterprise solutions, mobile applications,
            and innovative tools.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge
              variant={selectedCategory === "all" ? "default" : "outline"}
              className="cursor-pointer px-4 py-2 text-sm font-medium transition-all"
              onClick={() => setSelectedCategory("all")}
            >
              All Projects ({projects.length})
            </Badge>
            {categories.map((category) => {
              const count = projects.filter((p) => p.category.includes(category)).length;
              return (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2 text-sm font-medium transition-all capitalize"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === "ai-ml" ? "AI/ML" : category} ({count})
                </Badge>
              );
            })}
          </div>

          {/* NDA Filter Toggle */}
          <div className="flex justify-center mt-4">
            <Badge
              variant={showNDAOnly ? "default" : "outline"}
              className="cursor-pointer px-4 py-2 text-sm font-medium transition-all"
              onClick={() => setShowNDAOnly(!showNDAOnly)}
            >
              {showNDAOnly ? "Showing NDA Projects" : "Show All"}
            </Badge>
          </div>
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-foreground/60 text-lg">
              No projects found with selected filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setShowNDAOnly(false);
              }}
              className="text-primary mt-4 hover:underline"
            >
              Reset filters
            </button>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-12 border-t border-foreground/10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-2">{projects.length}+</div>
            <div className="text-foreground/60">Projects Delivered</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-2">
              {projects.filter((p) => p.isNDAProtected).length}
            </div>
            <div className="text-foreground/60">Enterprise Solutions</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-2">
              {categories.length}
            </div>
            <div className="text-foreground/60">Project Categories</div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
