import { Code2, Globe, Smartphone, Rocket, Sparkles } from "lucide-react";

export const timelineItems = [
  {
    title: "Started Programming",
    descriptionLines: [
      "Began learning programming fundamentals and problem solving while studying computer science.",
    ],
    side: "left",
    icon: Code2,
    isCurrent: false,
  },
  {
    title: "Web Development",
    descriptionLines: [
      "Built responsive websites using HTML, CSS, JavaScript, PHP and MySQL while learning full-stack development.",
    ],
    side: "right",
    icon: Globe,
    isCurrent: false,
  },
  {
    title: "Android Development",
    descriptionLines: [
      "Developed Android applications using Java, Firebase and REST API with clean architecture principles.",
    ],
    side: "left",
    icon: Smartphone,
    isCurrent: false,
  },
  {
    title: "Building Tanjak Absensi",
    descriptionLines: [
      "Designed and developed a complete employee attendance system from Android application to backend dashboard.",
    ],
    side: "right",
    icon: Rocket,
    isCurrent: false,
  },
  {
    title: "AI & Modern Web",
    descriptionLines: [
      "Currently building AI-powered applications using Next.js, Spring Boot, Firebase and modern frontend technologies.",
    ],
    side: "left",
    icon: Sparkles,
    isCurrent: true,
  },
];
