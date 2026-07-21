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
      <section className="relative overflow-hidden py-8">
        {/* Background */}
        <div className="absolute inset-0 -z-20 bg-[#030712]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,.08),transparent_70%)]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-20">
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

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
            {/* LEFT */}
            <div className="project-text">
              {/* Badge */}
              <span className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.22em] text-cyan-400">
                <span className="h-px w-8 bg-cyan-400" />
                PROJECT
                <span className="h-px w-8 bg-cyan-400" />
              </span>

              {/* Title */}
              <h1 className="mt-4 text-4xl font-bold leading-tight text-white lg:text-[3.3rem] xl:text-6xl">
                {project.title}
              </h1>

              {/* Subtitle */}
              <p className="mt-3 text-lg text-slate-300 lg:text-xl">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="mt-6 max-w-xl text-[15px] leading-7 text-slate-400">
                {project.description}
              </p>

              {/* Tech */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Status */}
              <div className="mt-6 flex items-center gap-5">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    project.statusColor === "green"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-yellow-500/10 text-yellow-400"
                  }`}
                >
                  {project.status}
                </span>

                <span className="text-sm text-slate-500">{project.year}</span>
              </div>

              {/* CTA */}
              {project.liveUrl && (
                <div className="mt-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,.25)]"
                  >
                    Visit Live Website
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </div>
              )}
            </div>

            {/* RIGHT */}
            <div className="project-banner">
              <div className="mx-auto max-w-[560px] lg:max-w-[600px] xl:max-w-[680px]">
                <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl backdrop-blur-xl">
                  <Image
                    src={project.banner}
                    alt={project.title}
                    width={1200}
                    height={800}
                    priority
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="pointer-events-none absolute inset-0 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-[150%]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[120px]" />
      </section>
    );
}
