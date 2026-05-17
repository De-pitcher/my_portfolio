import { Section } from "@/components/ui/Section";
import { services } from "@/data/services";
import {
  ServicesHero,
  ServicesGrid,
  ServicesProcess,
  ServicesExpertise,
  ServicesCTA,
} from "@/components/services/ServicesClient";

export const metadata = {
  title: "Services - Noel",
  description: "Custom software development services including POS systems, mobile apps, SaaS platforms, backend development, AI/ML integration, and IoT solutions.",
};

const processSteps = [
  {
    step: 1,
    title: "Discovery & Planning",
    description: "Understand your requirements, goals, and technical constraints. Create detailed specifications and project roadmap.",
  },
  {
    step: 2,
    title: "Design & Architecture",
    description: "Design scalable, maintainable architecture. Create wireframes, prototypes, and technical documentation.",
  },
  {
    step: 3,
    title: "Development & Implementation",
    description: "Build robust, clean code following best practices. Implement features iteratively with regular updates.",
  },
  {
    step: 4,
    title: "Testing & Deployment",
    description: "Comprehensive testing, bug fixes, and optimization. Deploy to production and monitor performance.",
  },
  {
    step: 5,
    title: "Support & Maintenance",
    description: "Provide ongoing support, updates, and improvements. Monitor system health and user feedback.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-transparent to-foreground/5">
        <ServicesHero />
      </Section>

      {/* Services Grid */}
      <Section>
        <ServicesGrid services={services} />
      </Section>

      {/* Process Section */}
      <Section className="bg-foreground/5">
        <ServicesProcess processSteps={processSteps} />
      </Section>

      {/* Expertise Areas */}
      <Section>
        <ServicesExpertise />
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-b from-transparent to-foreground/5">
        <ServicesCTA />
      </Section>
    </div>
  );
}
