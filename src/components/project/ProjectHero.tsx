"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { ProjectContent } from "@/types/project";
import { useProjectHeroAnimation } from "@/hooks/useProjectHeroAnimation";

interface ProjectHeroProps {
  project: ProjectContent;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  useProjectHeroAnimation();

  return (
    <section className="relative overflow-hidden py-8 lg:py-10">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-[#030712]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,.08),transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Back */}
          <Link
            href="/"
            className="project-back group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-400"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Home
          </Link>

          {/* Title */}
          <div className="project-header text-left lg:text-right">
            <span className="project-badge inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.25em] text-cyan-400">
              <span className="h-px w-8 shrink-0 bg-cyan-400" />
              PROJECT
              <span className="h-px w-8 shrink-0 bg-cyan-400" />
            </span>

            <h1 className="project-title mt-4 text-3xl font-bold leading-[1.1] text-white sm:text-4xl lg:text-4xl xl:text-5xl">
              {project.title}
            </h1>
          </div>
        </div>

        {/* Banner */}
        <div className="project-banner mt-8">
          <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] shadow-2xl backdrop-blur-xl">
            <Image
              src={project.banner}
              alt={project.title}
              width={1600}
              height={900}
              priority
              className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="pointer-events-none absolute inset-0 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-[150%]" />
          </div>
        </div>
      </div>

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[140px]" />
    </section>
  );
}
