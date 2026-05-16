import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { TechStack } from "@/components/sections/TechStack";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { CallToAction } from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <TechStack />
      <ServicesOverview />
      <CallToAction />
    </>
  );
}
