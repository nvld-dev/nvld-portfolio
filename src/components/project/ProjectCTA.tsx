"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useRef } from "react";

import useProjectCTAAnimation from "@/hooks/useProjectCTAAnimation";
import { ProjectContent } from "@/types/project";

interface ProjectCTAProps {
  project: ProjectContent;
}

export default function ProjectCTA({ project }: ProjectCTAProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useProjectCTAAnimation(sectionRef);

  return (
    <section ref={sectionRef} className="project-cta py-14 lg:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-20">
        <div className="cta-card rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-xl">
          <span className="cta-badge inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.22em] text-cyan-400">
            <span className="h-px w-8 bg-cyan-400" />
            PROJECT LINKS
            <span className="h-px w-8 bg-cyan-400" />
          </span>

          <h2 className="cta-title mt-4 text-3xl font-bold text-white lg:text-4xl">
            Interested in This Project?
          </h2>

          <p className="cta-description mx-auto mt-5 max-w-2xl text-[15px] leading-8 text-slate-400">
            Feel free to explore the live demo, browse the source code, or
            contact me if you'd like to discuss this project further.
          </p>

          <div className="cta-buttons mt-10 flex flex-wrap justify-center gap-4">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-400"
              >
                <ExternalLink size={18} />
                Live Demo
              </Link>
            )}

            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
              >
                <FaGithub className="h-[18px] w-[18px]" />
                Source Code
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
