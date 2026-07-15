"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";

import useHeroAnimation from "@/hooks/useHeroAnimation";

const actions = [
  {
    label: "View Projects",
    variant: "primary" as const,
  },
  {
    label: "Get in Touch",
    variant: "secondary" as const,
  },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const glowLeft = useRef<HTMLDivElement>(null);
  const glowRight = useRef<HTMLDivElement>(null);

  useHeroAnimation(heroRef);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;

      gsap.to(glowLeft.current, {
        x,
        y,
        duration: 1,
        ease: "power3.out",
      });

      gsap.to(glowRight.current, {
        x: -x,
        y: -y,
        duration: 1,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-30 bg-[#030712]" />

      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,#2563eb30,transparent_35%),radial-gradient(circle_at_bottom_right,#06b6d430,transparent_40%)]" />

      <div className="absolute inset-0 -z-10 bg-grid opacity-40" />

      {/* Aurora */}
      {/* Wrapper luar: digerakkan GSAP (parallax mouse). Wrapper dalam: digerakkan CSS (floating). */}
      <div
        ref={glowLeft}
        className="aurora-left absolute -left-40 -top-20 h-[520px] w-[520px]"
      >
        <div className="floating aurora h-full w-full rounded-full bg-[#4D8EFF]/20 blur-[90px]" />
      </div>

      <div
        ref={glowRight}
        className="aurora-right absolute -right-40 bottom-0 h-[520px] w-[520px]"
      >
        <div className="floating aurora h-full w-full rounded-full bg-cyan-400/15 blur-[90px] [animation-delay:-2s]" />
      </div>

      {/* Content */}
      <div
        ref={heroRef}
        className="relative z-10 flex w-full max-w-[760px] flex-col items-center px-6 text-center"
      >
        <div className="hero-item hero-badge mb-6">
          <div className="floating inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2  backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            <span className="text-[15px] text-slate-200">
              Open to Collaboration
            </span>
          </div>
        </div>

        <h1 className="hero-item hero-title text-[64px] font-semibold leading-none tracking-[-2px] lg:text-[72px]">
          <span className="text-[#E2E8F0]">Vijjay </span>
          <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
            Novaldi
          </span>
        </h1>

        <h2 className="hero-item hero-subtitle mt-5 text-[22px] font-medium text-cyan-300">
          Software Engineer • Android & Web
        </h2>

        <p className="hero-item hero-description mt-8 max-w-[640px] text-[17px] leading-8 text-slate-400">
          Building scalable web and Android applications with a focus on clean
          architecture, performance, and meaningful user experiences.
        </p>

        <div className="hero-item hero-actions mt-10 flex flex-wrap justify-center gap-4">
          {actions.map((action) => (
            <button
              key={action.label}
              className={clsx( ` group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-medium transition-all duration-300 `,
                action.variant === "primary"? ` bg-[#ADC6FF] text-[#002E6A] hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(93,230,255,.25)] `
                  : ` border border-white/10 bg-white/5 text-white backdrop-blur-md hover:bg-white/10 hover:border-cyan-400 `,
              )}
            >
              {action.label}

              {action.variant === "primary" && (
                <ArrowRight
                  size={18}
                  className=" transition-transform duration-300 group-hover:translate-x-1 "
                />
              )}
            </button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="hero-item absolute -bottom-28 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
          <span className="text-[11px] tracking-[0.35em] text-slate-500">
            SCROLL
          </span>

          <div className="flex h-14 w-8 justify-center rounded-full border border-white/15">
            <span className="mt-2 h-2 w-2 animate-bounce rounded-full bg-cyan-400" />
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-[#030712] to-transparent" />
    </section>
  );
}
