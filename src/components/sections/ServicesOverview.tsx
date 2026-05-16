"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

const services = [
  {
    icon: "🖥️",
    title: "Custom POS Systems",
    description: "Enterprise-grade Point of Sale solutions with offline-first architecture.",
  },
  {
    icon: "📱",
    title: "Cross-Platform Mobile",
    description: "Beautiful Flutter apps for iOS and Android with clean architecture.",
  },
  {
    icon: "🏢",
    title: "Enterprise SaaS",
    description: "Scalable multi-tenant platforms with role-based access control.",
  },
  {
    icon: "⚙️",
    title: "Backend Development",
    description: "Robust APIs and microservices with Node.js and Python.",
  },
  {
    icon: "🤖",
    title: "AI/ML Integration",
    description: "Integrate AI capabilities with local-first or cloud solutions.",
  },
  {
    icon: "🔌",
    title: "IoT Integration",
    description: "Connect hardware devices with real-time data processing.",
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

export function ServicesOverview() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Specialized services for building modern, scalable solutions.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
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
          <Link href="/services">
            <Button variant="outline" size="lg">
              Learn More About Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
