"use client";

import { useRef } from "react";
import {
  Smartphone,
  Globe,
  Server,
  Database,
  Cloud,
  Sheet,
} from "lucide-react";

import useProjectArchitectureAnimation from "@/hooks/useProjectArchitectureAnimation";
import { ProjectArchitectureIcon, ProjectContent } from "@/types/project";

interface ProjectArchitectureProps {
  project: ProjectContent;
}

const iconMap: Record<ProjectArchitectureIcon, React.ElementType> = {
  smartphone: Smartphone,
  android: Smartphone,
  globe: Globe,
  server: Server,
  database: Database,
  cloud: Cloud,
  sheet: Sheet,
};

export default function ProjectArchitecture({
  project,
}: ProjectArchitectureProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useProjectArchitectureAnimation(sectionRef);

  return (
    <section ref={sectionRef} className="project-architecture py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        {/* Heading */}

        <div className="max-w-3xl">
          <span className="architecture-badge inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.22em] text-cyan-400">
            <span className="h-px w-8 bg-cyan-400" />
            ARCHITECTURE
            <span className="h-px w-8 bg-cyan-400" />
          </span>

          <h2 className="architecture-title mt-3 text-3xl font-bold text-white lg:text-4xl">
            System Architecture
          </h2>

          <p className="architecture-description mt-6 max-w-4xl text-[15px] leading-8 text-slate-400">
            A high-level overview of how the main components communicate and
            work together.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {project.architecture.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <div
                key={item.title}
                className="architecture-card flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-cyan-400/[0.02]"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10">
                  <Icon className="h-5 w-5 text-cyan-400" />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
