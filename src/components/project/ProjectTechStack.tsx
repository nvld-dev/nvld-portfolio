"use client";

import {
  Code2,
  Smartphone,
  Database,
  Server,
  Globe,
  Braces,
  FileCode2,
  Palette,
  Cloud,
  QrCode,
  LayoutDashboard,
  Workflow,
  LucideIcon,
} from "lucide-react";
import { useRef } from "react";

import useProjectTechStackAnimation from "@/hooks/useProjectTechStackAnimation";
import { ProjectContent, ProjectTechIcon } from "@/types/project";

interface ProjectTechStackProps {
  project: ProjectContent;
}

const iconMap: Record<ProjectTechIcon, LucideIcon> = {
  java: Code2,
  android: Smartphone,
  php: FileCode2,
  mysql: Database,
  bootstrap: Palette,
  tailwind: Palette,
  typescript: Braces,
  javascript: Braces,
  nextjs: Globe,
  react: Workflow,
  vercel: Cloud,
  firebase: Database,
  google: Globe,
  adminlte: LayoutDashboard,
  qrcode: QrCode,
  api: Server,
};

export default function ProjectTechStack({ project }: ProjectTechStackProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useProjectTechStackAnimation(sectionRef);

  return (
    <section ref={sectionRef} className="project-tech-stack py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        {/* Heading */}

        <div className="max-w-2xl">
          <span className="tech-badge inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.22em] text-cyan-400 opacity-0">
            <span className="h-px w-8 bg-cyan-400" />
            TECH STACK
            <span className="h-px w-8 bg-cyan-400" />
          </span>

          <h2 className="tech-title mt-3 text-3xl font-bold text-white opacity-0 lg:text-4xl">
            Technologies Used
          </h2>

          <p className="tech-description mt-6 max-w-3xl text-[15px] leading-8 text-slate-400 opacity-0">
            A collection of technologies, frameworks, and tools used to build
            this project.
          </p>
        </div>

        {/* Badges */}

        <div className="mt-10 flex flex-wrap gap-4">
          {project.techStack.map((tech) => {
            const Icon = iconMap[tech.icon];

            return (
              <div
                key={tech.name}
                className="
                  tech-card
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-5
                  py-3
                  opacity-0
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400/30
                  hover:bg-cyan-400/[0.08]
                "
              >
                <Icon size={18} className="text-cyan-400" />

                <span className="text-sm font-medium text-white">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
