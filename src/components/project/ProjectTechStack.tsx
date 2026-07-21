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
          <span className="tech-badge inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400 opacity-0">
            <span className="h-px w-6 bg-cyan-400" />
            Tech Stack
            <span className="h-px w-6 bg-cyan-400" />
          </span>

          <h2 className="tech-title mt-3 text-2xl font-bold text-white opacity-0 lg:text-3xl">
            Technologies Used
          </h2>

          <p className="tech-description mt-4 leading-7 text-slate-400 opacity-0">
            A collection of technologies, frameworks, and tools used to build
            this project.
          </p>
        </div>

        {/* Grid */}

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {project.techStack.map((tech) => {
            const Icon = iconMap[tech.icon];

            return (
              <div
                key={tech.name}
                className="tech-card rounded-2xl border border-white/10 bg-white/5 p-6 opacity-0 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-white">
                  {tech.name}
                </h3>

                <p className="mt-2 text-sm text-slate-400">{tech.category}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
