"use client";

import { useRef } from "react";
import { skillCategories } from "@/data/skillsData";
import useSkillsAnimation from "@/hooks/useSkillsAnimation";

export default function Skills() {
  const skillsRef = useRef<HTMLElement>(null);

  useSkillsAnimation(skillsRef);

  return (
    <section
      ref={skillsRef}
      id="skills"
      className="relative py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-[#030712]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(77,142,255,.08),transparent_70%)]" />

      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="skills-header mb-14 text-center">
          <span className="inline-flex items-center gap-3 text-[12px] font-medium tracking-[0.2em] text-cyan-400">
            <span className="h-px w-8 bg-cyan-400" />
            SKILLS
            <span className="h-px w-8 bg-cyan-400" />
          </span>

          <h2 className="mt-5 text-[34px] font-semibold text-white">
            Skills & Tech Stack
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-7 text-slate-400">
            Technologies, frameworks, and tools I use to design, build, and
            maintain modern software applications.
          </p>
        </div>

        <div className="skills-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="skill-card group rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-white/[0.05] hover:shadow-[0_0_25px_rgba(93,230,255,.15)]"
            >
              <div className="mb-4 flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                  <category.icon size={18} />
                </div>

                <div>
                  <h3 className="text-[16px] font-semibold text-white">
                    {category.title}
                  </h3>

                  <p className="mt-0.5 text-[12px] text-slate-400">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#030712] to-transparent" />
    </section>
  );
}
