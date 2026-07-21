"use client";

import { CircleAlert, CircleCheckBig, Lightbulb } from "lucide-react";
import { useRef } from "react";
import  useProjectOverviewAnimation from "@/hooks/useProjectOverviewAnimation";
import { ProjectContent } from "@/types/project";

interface ProjectOverviewProps {
  project: ProjectContent;
}

export default function ProjectOverview({ project }: ProjectOverviewProps) {
const sectionRef = useRef<HTMLDivElement>(null);

useProjectOverviewAnimation(sectionRef);

  return (
    <section ref={sectionRef} className="project-overview py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        {/* Heading */}

        <div className="max-w-3xl">
          <span className="overview-badge inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.22em] text-cyan-400">
            <span className="h-px w-8 bg-cyan-400" />
            OVERVIEW
            <span className="h-px w-8 bg-cyan-400" />
          </span>

          <h2 className="overview-title mt-3 text-3xl font-bold text-white lg:text-4xl">
            About This Project
          </h2>

          <p className="overview-description mt-6 max-w-4xl text-[15px] leading-8 text-slate-400">
            {project.overview.description}
          </p>
        </div>

        {/* Cards */}

        <div className="mt-4 grid gap-5 lg:grid-cols-3">
          {/* Problem */}

          <div className="overview-card overview-problem flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-red-400/20 hover:bg-red-400/[0.02]">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-red-500/10">
              <CircleAlert className="h-5 w-5 text-red-400" />
            </div>

            <h3 className="text-lg font-semibold text-white">The Problem</h3>

            <p className="mt-2 text-sm text-slate-500">
              Why this project was needed
            </p>

            <div className="mt-5 flex-1">
              <p className="text-[15px] leading-7 text-slate-400">
                {project.overview.problem}
              </p>
            </div>
          </div>

          {/* Solution */}

          <div className="overview-card overview-solution flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-cyan-400/[0.02]">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10">
              <Lightbulb className="h-5 w-5 text-cyan-400" />
            </div>

            <h3 className="text-lg font-semibold text-white">The Solution</h3>

            <p className="mt-2 text-sm text-slate-500">
              How the system solves it
            </p>

            <div className="mt-5 flex-1">
              <p className="text-[15px] leading-7 text-slate-400">
                {project.overview.solution}
              </p>
            </div>
          </div>

          {/* Impact */}

          <div className="overview-card overview-impact flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-emerald-400/[0.02]">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/10">
              <CircleCheckBig className="h-5 w-5 text-emerald-400" />
            </div>

            <h3 className="text-lg font-semibold text-white">The Impact</h3>

            <p className="mt-2 text-sm text-slate-500">
              Results after implementation
            </p>

            <div className="mt-5 flex-1">
              <p className="text-[15px] leading-7 text-slate-400">
                {project.overview.impact}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
