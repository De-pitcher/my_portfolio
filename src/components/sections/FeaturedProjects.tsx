"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

const featuredProjects = [
  {
    title: "Peregrine POS",
    description:
      "Enterprise Point of Sale system for food service industry with offline-first architecture and real-time sync.",
    category: "web",
    tags: ["React", "Node.js", "MongoDB", "TypeScript"],
    isNDA: true,
  },
  {
    title: "Flutter Mobile POS",
    description:
      "Cross-platform mobile POS application with clean architecture, Riverpod state management, and offline support.",
    category: "mobile",
    tags: ["Flutter", "Riverpod", "SQLite", "Clean Architecture"],
    isNDA: true,
  },
  {
    title: "Match-Dey",
    description:
      "Sports pitch booking platform connecting players with venues for seamless reservations and match organization.",
    category: "mobile",
    tags: ["Flutter", "Firebase", "Google Maps"],
    isNDA: false,
  },
  {
    title: "IoT Scale Integration",
    description:
      "Real-time weighing system integration with hardware peripherals and data visualization for inventory management.",
    category: "iot",
    tags: ["Node.js", "Python", "MQTT", "WebSockets"],
    isNDA: true,
  },
];

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
          {featuredProjects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                    {project.isNDA && (
                      <Badge variant="outline" className="text-xs">
                        NDA
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
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
