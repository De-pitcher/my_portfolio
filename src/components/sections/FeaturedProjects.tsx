"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { projects } from "@/data/projects";

// Get featured projects (isFeatured: true)
const featuredProjects = projects.filter((p) => p.isFeatured).slice(0, 4);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function FeaturedProjects() {
  return (
    <Section className="bg-foreground/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A selection of recent work showcasing enterprise solutions, mobile applications, and IoT
            integrations.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {featuredProjects.length > 0 ? (
            featuredProjects.map((project) => (
              <motion.div key={project.id} variants={item}>
                <Card className="h-full flex flex-col justify-between hover:shadow-lg transition-all duration-300 border border-foreground/10 hover:border-foreground/20">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <div className="flex gap-1.5 flex-wrap items-center">
                        {project.status && (
                          <span
                            className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium border ${
                              project.status === "Production"
                                ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                                : project.status === "Open Source"
                                ? "bg-sky-500/10 text-sky-400 border-sky-500/20"
                                : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                project.status === "Production"
                                  ? "bg-emerald-500 animate-pulse"
                                  : project.status === "Open Source"
                                  ? "bg-sky-400"
                                  : "bg-amber-400"
                              }`}
                            />
                            {project.status}
                          </span>
                        )}
                        {project.category.map((cat) => (
                          <Badge key={cat} variant="secondary" className="text-xs capitalize">
                            {cat === "ai-ml"
                              ? "AI / ML"
                              : cat === "open-source"
                              ? "Open Source"
                              : cat}
                          </Badge>
                        ))}
                      </div>
                      {project.isNDAProtected && (
                        <Badge variant="outline" className="text-xs text-muted-foreground">
                          NDA
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl leading-snug">{project.title}</CardTitle>
                    <CardDescription className="text-sm font-medium text-foreground/80 mt-1">
                      {project.tagline}
                    </CardDescription>
                    <p className="text-sm text-foreground/60 mt-2 line-clamp-2">
                      {project.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-0">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tags.length - 4}
                        </Badge>
                      )}
                    </div>
                    <div className="pt-2">
                      <Link href={`/projects/${project.slug}`} className="w-full block">
                        <Button className="w-full" variant="outline" size="sm">
                          Explore Case Study →
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-2 text-center py-12">
              <p className="text-foreground/60">No featured projects yet. Check back soon!</p>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <Link href="/projects">
            <Button size="lg">View All Projects</Button>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
