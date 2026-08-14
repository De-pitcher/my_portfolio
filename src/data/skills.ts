import { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend", level: "expert", icon: "react" },
  { name: "Next.js", category: "Frontend", level: "advanced", icon: "nextjs" },
  { name: "TypeScript", category: "Frontend", level: "expert", icon: "typescript" },
  { name: "Tailwind CSS", category: "Frontend", level: "advanced", icon: "tailwind" },
  { name: "Ant Design", category: "Frontend", level: "advanced" },
  
  // Mobile
  { name: "Flutter", category: "Mobile", level: "expert", icon: "flutter" },
  { name: "Riverpod", category: "Mobile", level: "advanced" },
  
  // Backend
  { name: "Node.js", category: "Backend", level: "expert", icon: "nodejs" },
  { name: "Express", category: "Backend", level: "expert" },
  { name: "Python", category: "Backend", level: "advanced", icon: "python" },
  { name: "FastAPI", category: "Backend", level: "advanced" },
  { name: "NestJS", category: "Backend", level: "advanced" },
  { name: "REST APIs", category: "Backend", level: "expert" },
  
  // Database
  { name: "MySQL", category: "Database", level: "advanced" },
  { name: "Redis", category: "Database", level: "advanced" },
  { name: "MongoDB", category: "Database", level: "expert", icon: "mongodb" },
  { name: "PostgreSQL", category: "Database", level: "advanced", icon: "postgresql" },
  
  // DevOps & Tools
  { name: "Git", category: "Tools", level: "expert", icon: "git" },
  { name: "Docker", category: "DevOps", level: "advanced" },
  { name: "Jenkins & CI/CD", category: "DevOps", level: "advanced" },
  { name: "AWS", category: "DevOps", level: "intermediate" },
  { name: "Google Cloud", category: "DevOps", level: "intermediate" },
];
