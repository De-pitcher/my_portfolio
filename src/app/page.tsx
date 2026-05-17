import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { TechStack } from "@/components/sections/TechStack";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { CallToAction } from "@/components/sections/CallToAction";
import { PersonSchema, WebsiteSchema } from "@/components/seo/StructuredData";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <PersonSchema />
      <WebsiteSchema />
      <Hero />
      <FeaturedProjects />
      <TechStack />
      <ServicesOverview />
      <CallToAction />
    </>
  );
}
