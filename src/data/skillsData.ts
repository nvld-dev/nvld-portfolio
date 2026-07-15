import {
  Code2,
  Globe,
  Smartphone,
  Database,
  Brain,
  Wrench,
} from "lucide-react";

export const skillCategories = [
  {
    title: "Frontend",
    description: "Modern user interface development.",
    icon: Globe,
    skills: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
  },

  {
    title: "Backend",
    description: "API & server-side development.",
    icon: Code2,
    skills: ["PHP", "REST API", "Firebase", "Laravel"],
  },

  {
    title: "Mobile",
    description: "Native Android development.",
    icon: Smartphone,
    skills: ["Java", "Android Studio", "Retrofit", "Volley", "FCM", "XML"],
  },

  {
    title: "Database",
    description: "Data storage & management.",
    icon: Database,
    skills: ["MySQL", "MariaDB", "Firebase Firestore"],
  },

  {
    title: "AI & Machine Learning",
    description: "Artificial Intelligence integration.",
    icon: Brain,
    skills: ["Gemini API","Prompt Engineering"],
  },

  {
    title: "Tools",
    description: "Development ecosystem.",
    icon: Wrench,
    skills: ["Git", "GitHub", "Figma", "Vercel", "VS Code", "Android Studio"],
  },
];
