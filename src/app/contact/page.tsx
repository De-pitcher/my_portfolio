import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/constants";
import {
  ContactHero,
  ContactForm,
  ContactInfo,
  ContactAvailability,
} from "@/components/contact/ContactClient";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Noel for freelance projects, full-time opportunities, or general inquiries. Available for web development, mobile apps, backend systems, and AI integration.",
  openGraph: {
    title: "Contact Noel - Hire a Full-Stack Developer",
    description: "Available for freelance projects and full-time opportunities. Specializing in React, Next.js, Flutter, Node.js, and AI integration.",
    url: `${siteConfig.url}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-transparent to-foreground/5">
        <ContactHero />
      </Section>

      {/* Contact Form */}
      <Section>
        <ContactForm />
      </Section>

      {/* Availability Status */}
      <Section className="bg-foreground/5">
        <ContactAvailability />
      </Section>

      {/* Contact Info */}
      <Section>
        <ContactInfo />
      </Section>
    </div>
  );
}
