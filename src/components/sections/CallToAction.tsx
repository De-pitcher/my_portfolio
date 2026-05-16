"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "17+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
];

export function CallToAction() {
  return (
    <Section className="bg-gradient-to-b from-transparent to-foreground/5">
      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Let&apos;s Build Something Amazing Together
        </h2>
        <p className="text-xl text-foreground/60 mb-8">
          Available for freelance projects and consulting. Let&apos;s discuss how I can help bring your
          ideas to life.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link href="/contact">
            <Button size="lg">Get In Touch</Button>
          </Link>
          <Link href="/projects">
            <Button size="lg" variant="outline">
              View My Work
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-foreground/10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-foreground/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
