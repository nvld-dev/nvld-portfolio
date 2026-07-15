"use client";

import Image from "next/image";
import { useRef } from "react";
import useAboutAnimation from "@/hooks/useAboutAnimation";
import { Rocket, Code2, GraduationCap, Sparkles } from "lucide-react";

const techFocus = [
  "Android Native",
  "PHP",
  "Laravel",
  "Firebase",
  "AI Integration",
];

const stats = [
  {
    icon: Rocket,
    value: "3",
    label: "Projects",
  },
  {
    icon: Code2,
    value: "8+",
    label: "Technologies",
  },
  {
    icon: GraduationCap,
    value: "2+",
    label: "Years Learning",
  },
  {
    icon: Sparkles,
    value: "Open Source",
    label: "Mindset",
  },
];

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);

  useAboutAnimation(aboutRef);

  return (
    <section ref={aboutRef} id="about" className="about-section relative py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div className="about-photo group relative mx-auto w-full max-w-[300px]">
            <div className="absolute -inset-2 rounded-[24px] bg-cyan-400/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[18px] border border-cyan-400/25 bg-white/[0.02] shadow-[0_0_20px_rgba(93,230,255,.10)]">
              <Image
                src="/images/profile.jpg"
                alt="Vijjay Novaldi"
                width={600}
                height={760}
                priority
                className="aspect-[4/5] w-full object-cover transition-all duration-500 group-hover:scale-105"
              />
            </div>

            <div className="absolute -left-4 -top-4 h-16 w-16 rounded-tl-2xl border-l-2 border-t-2 border-cyan-400/40" />
            <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-br-2xl border-b-2 border-r-2 border-cyan-400/40" />
          </div>

          {/* RIGHT */}
          <div>
            <div className="about-heading mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-400" />
              <span className="text-[12px] font-medium tracking-[0.2em] text-cyan-400">
                ABOUT ME
              </span>
            </div>

            <h2 className="about-heading text-[30px] font-semibold leading-tight text-slate-100">
              Building Software
              <br />
              That Solves Real Problems
            </h2>

            <p className="about-description mt-5 text-[15px] leading-[28px] text-slate-400">
              I'm Vijjay Novaldi, a software engineer passionate about building
              Android apps, scalable web platforms, and intelligent software
              solutions. I enjoy creating clean, reliable, and long-lasting
              software.
            </p>

            {/* Tech Focus */}
            <div className="about-tech mt-6">
              <h3 className="mb-3 text-[14px] font-medium text-cyan-300">
                Tech Focus
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {techFocus.map((item) => (
                  <span
                    key={item}
                    className="tech-item rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] font-medium text-cyan-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_18px_rgba(93,230,255,.18)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="about-quote mt-6 rounded-r-lg border-l-[3px] border-cyan-400 bg-cyan-400/5 px-5 py-4 transition-all duration-500 hover:bg-cyan-400/10">
              <p className="text-[14px] italic leading-7 text-slate-300">
                "I believe great software is built through simplicity,
                consistency and continuous learning."
              </p>

              <span className="mt-3 block text-[13px] text-cyan-300">
                — Vijjay Novaldi
              </span>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="stats mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="stat-card group rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-white/[0.05] hover:shadow-[0_0_25px_rgba(93,230,255,.15)]"
              >
                <Icon
                  size={24}
                  className="mb-4 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                />

                <h3 className="text-[24px] font-semibold leading-none text-white">
                  {item.value}
                </h3>

                <p className="mt-2 text-[13px] text-slate-400">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[140px]" />

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#030712] to-transparent" />
    </section>
  );
}
