"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { skills } from "@/data/skills";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

// Group skills by category
const groupedSkills = skills.reduce((acc, skill) => {
  const existing = acc.find((group) => group.category === skill.category);
  if (existing) {
    existing.items.push(skill);
  } else {
    acc.push({ category: skill.category, items: [skill] });
  }
  return acc;
}, [] as Array<{ category: string; items: typeof skills }>);

export function TechStack() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable applications.
          </p>
        </motion.div>

        <div className="space-y-12">
          {groupedSkills.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-xl font-semibold mb-6 text-center md:text-left">
                {category.category}
              </h3>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
              >
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    className="relative group"
                  >
                    <div className="flex flex-col items-center justify-center p-6 rounded-lg border border-foreground/10 bg-background hover:border-foreground/30 hover:shadow-md transition-all duration-300">
                      <p className="text-sm font-medium text-center">{skill.name}</p>
                      <div className="mt-2 flex gap-1">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${
                              i <
                              (skill.level === "expert"
                                ? 4
                                : skill.level === "advanced"
                                ? 3
                                : skill.level === "intermediate"
                                ? 2
                                : 1)
                                ? "bg-foreground"
                                : "bg-foreground/20"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
