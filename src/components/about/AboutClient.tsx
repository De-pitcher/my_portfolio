"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Skill } from "@/types";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";

interface AboutClientProps {
  experience: Array<{
    period: string;
    role: string;
    company: string;
    description: string;
    highlights: string[];
  }>;
  skillsByCategory: Record<string, Skill[]>;
  categoryOrder: string[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function AboutHero() {
  return (
    <motion.div
      className="max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Badge className="mb-4" variant="secondary">
        About Me
      </Badge>
      <h1 className="text-5xl md:text-6xl font-bold mb-6">Full-Stack Engineer</h1>
      <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
        I&apos;m {siteConfig.name}, a software engineer with{" "}
        <span className="text-foreground font-semibold">5+ years of experience</span> building enterprise-grade
        applications. Specializing in full-stack development, cross-platform mobile apps, and AI integration.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/projects">
          <Button size="lg">View My Work</Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline" size="lg">
            Get In Touch
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

export function AboutExperience({ experience }: Pick<AboutClientProps, "experience">) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
      <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
      <div className="max-w-2xl mx-auto space-y-6">
        {experience.map((exp, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="border-l-4 border-l-foreground/20 hover:border-l-foreground/60 transition-colors">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
                  <div>
                    <CardTitle className="text-2xl">{exp.role}</CardTitle>
                    <CardDescription className="text-base">{exp.company}</CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight) => (
                    <Badge key={highlight} variant="secondary">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function AboutSkills({ skillsByCategory, categoryOrder }: Pick<AboutClientProps, "skillsByCategory" | "categoryOrder">) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
      <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
      <div className="max-w-5xl mx-auto space-y-8">
        {categoryOrder.map((category) => {
          const categorySkills = skillsByCategory[category];
          if (!categorySkills) return null;

          return (
            <motion.div key={category} variants={itemVariants}>
              <div className="mb-4">
                <h3 className="text-2xl font-semibold mb-4">{category}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {categorySkills.map((skill) => {
                    const proficiencyDots = {
                      expert: 4,
                      advanced: 3,
                      intermediate: 2,
                      beginner: 1,
                    }[skill.level] || 0;

                    return (
                      <motion.div
                        key={skill.name}
                        className="group"
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Card className="h-full hover:shadow-lg transition-all">
                          <CardContent className="pt-6">
                            <p className="font-semibold text-sm mb-2">{skill.name}</p>
                            <div className="flex gap-1">
                              {Array.from({ length: 4 }).map((_, i) => (
                                <div
                                  key={i}
                                  className={`h-2 w-2 rounded-full transition-colors ${
                                    i < proficiencyDots
                                      ? "bg-foreground"
                                      : "bg-foreground/20"
                                  }`}
                                />
                              ))}
                            </div>
                            <p className="text-xs text-foreground/60 mt-2 capitalize">{skill.level}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export function AboutStats() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {[
        { label: "Years of Experience", value: "5+" },
        { label: "Projects Delivered", value: "17+" },
        { label: "Technologies Used", value: "20+" },
      ].map((stat, index) => (
        <motion.div key={index} variants={itemVariants}>
          <div className="p-6 rounded-lg bg-foreground/5 border border-foreground/10">
            <p className="text-4xl font-bold mb-2">{stat.value}</p>
            <p className="text-foreground/60">{stat.label}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export function AboutResume() {
  return (
    <motion.div
      className="max-w-2xl mx-auto text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4">Want to Work Together?</h2>
      <p className="text-lg text-foreground/70 mb-8">
        Download my resume or get in touch to discuss your next project.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/resume.pdf" download>
          <Button size="lg">📄 Download Resume</Button>
        </a>
        <Link href="/contact">
          <Button variant="outline" size="lg">
            Contact Me
          </Button>
        </Link>
      </div>
      <p className="text-sm text-foreground/50 mt-8">
        Available for freelance projects and full-time opportunities
      </p>
    </motion.div>
  );
}
