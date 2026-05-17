"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Service } from "@/types";
import Link from "next/link";

interface ServicesClientProps {
  services: Service[];
  processSteps: Array<{
    step: number;
    title: string;
    description: string;
  }>;
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

export function ServicesHero() {
  return (
    <motion.div
      className="max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Badge className="mb-4" variant="secondary">
        Services
      </Badge>
      <h1 className="text-5xl md:text-6xl font-bold mb-6">What I Offer</h1>
      <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
        Comprehensive software development services tailored to your business needs. From concept to deployment, I
        deliver scalable, maintainable solutions.
      </p>
    </motion.div>
  );
}

export function ServicesGrid({ services }: Pick<ServicesClientProps, "services">) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
      <h2 className="text-4xl font-bold mb-12 text-center">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service) => (
          <motion.div key={service.id} variants={itemVariants}>
            <Card className="h-full hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon === "store" && "🏪"}
                  {service.icon === "smartphone" && "📱"}
                  {service.icon === "cloud" && "☁️"}
                  {service.icon === "server" && "🖥️"}
                  {service.icon === "brain" && "🧠"}
                  {service.icon === "cpu" && "⚙️"}
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">{service.description}</CardDescription>
                <div>
                  <p className="text-xs font-semibold text-foreground/70 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function ServicesProcess({ processSteps }: Pick<ServicesClientProps, "processSteps">) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
      <h2 className="text-4xl font-bold mb-12 text-center">My Process</h2>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {processSteps.map((process, index) => (
            <motion.div key={process.step} variants={itemVariants}>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-xl">
                    {process.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-1 h-12 bg-foreground/20 my-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-2xl font-semibold mb-2">{process.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{process.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesExpertise() {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
      <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[
          {
            title: "Full-Stack Expertise",
            description:
              "End-to-end development from frontend to backend, database design, and DevOps. No need for multiple contractors.",
          },
          {
            title: "Clean Code & Best Practices",
            description:
              "Maintainable, scalable code following industry standards. Easy to extend and debug in the future.",
          },
          {
            title: "Cross-Platform Solutions",
            description:
              "Web, mobile (iOS/Android), and desktop applications. One codebase, multiple platforms with Flutter.",
          },
          {
            title: "Proven Track Record",
            description:
              "5+ years of experience building enterprise systems handling 10k+ users with 99% uptime.",
          },
          {
            title: "Modern Technology Stack",
            description:
              "React, Next.js, Flutter, Node.js, Python, and more. Always learning and adopting best tools.",
          },
          {
            title: "Responsive & Mobile-First",
            description:
              "All solutions designed with mobile-first approach. Perfect experience on all devices and screen sizes.",
          },
        ].map((item) => (
          <motion.div
            key={item.title}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="h-full hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function ServicesCTA() {
  return (
    <motion.div
      className="max-w-2xl mx-auto text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
      <p className="text-lg text-foreground/70 mb-8">
        Let&apos;s discuss your requirements and create something amazing together. Get in touch for a free consultation.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/contact">
          <Button size="lg">Get In Touch</Button>
        </Link>
        <Link href="/projects">
          <Button variant="outline" size="lg">
            View My Work
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
