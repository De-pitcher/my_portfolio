import { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend", level: "expert", icon: "react" },
  { name: "Next.js", category: "Frontend", level: "advanced", icon: "nextjs" },
  { name: "TypeScript", category: "Frontend", level: "expert", icon: "typescript" },
  { name: "Tailwind CSS", category: "Frontend", level: "advanced", icon: "tailwind" },
  { name: "Ant Design / shadcn", category: "Frontend", level: "advanced" },
  
  // Mobile
  { name: "Flutter", category: "Mobile", level: "expert", icon: "flutter" },
  { name: "Riverpod & BLoC", category: "Mobile", level: "advanced" },
  { name: "React Native / Expo", category: "Mobile", level: "advanced" },
  
  // Backend & Systems
  { name: "Node.js", category: "Backend", level: "expert", icon: "nodejs" },
  { name: "NestJS", category: "Backend", level: "expert" },
  { name: "Python", category: "Backend", level: "advanced", icon: "python" },
  { name: "FastAPI", category: "Backend", level: "advanced" },
  { name: "Rust", category: "Systems", level: "intermediate", icon: "rust" },
  { name: "Express", category: "Backend", level: "expert" },
  { name: "REST & WebSockets", category: "Backend", level: "expert" },
  
  // AI & Agentic Systems
  { name: "AI Agents & Autonomous Loops", category: "AI/ML", level: "expert" },
  { name: "Model Context Protocol (MCP)", category: "AI/ML", level: "expert" },
  { name: "Ollama / Local LLMs", category: "AI/ML", level: "advanced" },
  { name: "RAG & Vector Search", category: "AI/ML", level: "advanced" },
  
  // Database & Cache
  { name: "MongoDB", category: "Database", level: "expert", icon: "mongodb" },
  { name: "PostgreSQL", category: "Database", level: "expert", icon: "postgresql" },
  { name: "Prisma ORM", category: "Database", level: "expert" },
  { name: "Redis & BullMQ", category: "Database", level: "advanced" },
  { name: "MySQL", category: "Database", level: "advanced" },
  { name: "SQLite", category: "Database", level: "expert" },
  
  // DevOps & Tools
  { name: "Git & GitHub Actions", category: "DevOps", level: "expert", icon: "git" },
  { name: "Docker & Containerization", category: "DevOps", level: "advanced" },
  { name: "Jenkins & CI/CD Pipelines", category: "DevOps", level: "advanced" },
  { name: "AWS / Render / Vercel", category: "DevOps", level: "advanced" },
  { name: "Google Cloud", category: "DevOps", level: "intermediate" },
];
