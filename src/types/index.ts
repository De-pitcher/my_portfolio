export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory[];
  tags: string[];
  thumbnail: string;
  images: string[];
  videos?: string[];
  techStack: TechStack[];
  features: string[];
  outcomes?: string[];
  architectureDiagram?: string;
  githubUrl?: string;
  liveUrl?: string;
  isFeatured: boolean;
  isNDAProtected: boolean;
  order: number;
}

export type ProjectCategory = "web" | "mobile" | "backend" | "iot" | "ai-ml" | "fullstack";

export interface TechStack {
  name: string;
  icon?: string;
  category: "frontend" | "backend" | "mobile" | "database" | "devops" | "other";
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  icon?: string;
  category: "frontend" | "backend" | "mobile" | "database" | "tools" | "other";
  proficiency?: number;
}
