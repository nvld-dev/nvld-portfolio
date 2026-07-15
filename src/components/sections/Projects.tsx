"use client";

import { useRef } from "react";
import { projects } from "@/data/projectData";
import Image from "next/image";
import useProjectsAnimation from "@/hooks/useProjectsAnimation";



export default function Projects() {
  const projectsRef = useRef<HTMLElement>(null);

  useProjectsAnimation(projectsRef);

  return (
    <section
      ref={projectsRef}
      id="projects"
      className="relative overflow-hidden py-20"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-[#030712]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(77,142,255,.08),transparent_70%)]" />

      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="projects-header mb-14 text-center">
          <span className="inline-flex items-center gap-3 text-[12px] font-medium tracking-[0.2em] text-cyan-400">
            <span className="h-px w-8 bg-cyan-400" />
            PROJECTS
            <span className="h-px w-8 bg-cyan-400" />
          </span>

          <h2 className="mt-5 text-[34px] font-semibold text-white">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-7 text-slate-400">
            A collection of projects showcasing my experience in building
            scalable web applications, Android apps and modern software systems.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(93,230,255,.15)]"
            >
              {/* Thumbnail */}
              <div className="relative h-[140px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Shine sweep on hover */}
                <div className="pointer-events-none absolute inset-0 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[150%]" />

                <div className="absolute left-3 top-3 rounded-full border border-cyan-400/30 bg-slate-900/70 px-2.5 py-0.5 text-[10px] font-medium text-cyan-300 backdrop-blur-md">
                  Project
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-[17px] font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-2 line-clamp-3 text-[12.5px] leading-6 text-slate-400">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[12px] text-slate-500">
                    {project.year}
                  </span>

                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${
                      project.statusColor === "green"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-yellow-500/10 text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Actions */}
                <div className="mt-4 flex gap-2.5">
                  <a
                    href={project.demo}
                    className="flex-1 rounded-xl bg-cyan-400 px-3.5 py-2 text-center text-[13px] font-medium text-slate-900 transition hover:bg-cyan-300"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    className="rounded-xl border border-white/10 px-3.5 py-2 text-[13px] text-slate-300 transition hover:border-cyan-400 hover:text-white"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="projects-cta mt-14 flex justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-[14px] font-medium text-slate-300 backdrop-blur-xl transition-[transform,background-color,border-color] duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-white"
          >
            View All Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14m-6-6 6 6-6 6"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[140px]" />

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#030712] to-transparent" />
    </section>
  );
}
