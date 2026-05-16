import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "pos-systems",
    title: "Custom POS/Inventory Systems",
    description: "Build tailored point-of-sale and inventory management solutions for businesses",
    icon: "store",
    technologies: ["React", "Node.js", "MongoDB", "Flutter"],
  },
  {
    id: "mobile-apps",
    title: "Cross-Platform Mobile Apps",
    description: "Develop high-performance mobile applications using Flutter for iOS and Android",
    icon: "smartphone",
    technologies: ["Flutter", "Riverpod", "Firebase"],
  },
  {
    id: "saas-platforms",
    title: "Enterprise SaaS Platforms",
    description: "Create scalable, multi-tenant business management systems",
    icon: "cloud",
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
  },
  {
    id: "backend-development",
    title: "Backend Development",
    description: "Design and implement robust REST APIs and microservices",
    icon: "server",
    technologies: ["Node.js", "Python", "FastAPI", "Express"],
  },
  {
    id: "ai-integration",
    title: "AI/ML Integration",
    description: "Integrate AI capabilities and build intelligent applications",
    icon: "brain",
    technologies: ["Python", "Ollama", "LangChain", "TensorFlow"],
  },
  {
    id: "iot-hardware",
    title: "IoT/Hardware Integration",
    description: "Connect hardware devices with software solutions",
    icon: "cpu",
    technologies: ["Node.js", "Python", "MQTT", "WebSockets"],
  },
];
