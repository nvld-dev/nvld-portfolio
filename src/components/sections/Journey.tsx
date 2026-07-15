"use client";

import { useRef } from "react";
import { timelineItems } from "@/data/journeyData";
import useJourneyAnimation from "@/hooks/useJourneyAnimation";

export default function Journey() {
  const journeyRef = useRef<HTMLElement>(null);

  useJourneyAnimation(journeyRef);

  return (
    <section
      ref={journeyRef}
      id="journey"
      className="relative py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-[#030712]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(77,142,255,.08),transparent_70%)]" />

      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="journey-header mb-16 text-center">
          <span className="inline-flex items-center gap-3 text-[12px] font-medium tracking-[0.2em] text-cyan-400">
            <span className="h-px w-8 bg-cyan-400" />
            JOURNEY
            <span className="h-px w-8 bg-cyan-400" />
          </span>

          <h2 className="mt-5 text-[34px] font-semibold text-white">
            My Journey
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-7 text-slate-400">
            A visual timeline of my growth, projects and technical milestones
            that shaped me into a software developer.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline-track relative">
          {/* Center Line */}
          <div className="timeline-line absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500 shadow-[0_0_18px_rgba(59,130,246,.45)] lg:block" />

          {/* Mobile Line */}
          <div className="timeline-line absolute left-4 top-0 h-full w-[2px] rounded-full bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500 lg:hidden" />

          <div className="space-y-8">
            {timelineItems.map((item) => {
              const isLeft = item.side === "left";
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  data-side={item.side}
                  className="timeline-item relative flex items-center"
                >
                  {/* Desktop Left */}
                  <div
                    className={`hidden w-1/2 lg:flex ${isLeft ? "justify-end pr-10" : ""}`}
                  >
                    {isLeft && (
                      <div
                        className={`timeline-card w-full max-w-[360px] rounded-2xl border p-5 backdrop-blur-xl transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(93,230,255,.15)] ${item.isCurrent ? "border-cyan-400 bg-cyan-400/10" : "border-white/10 bg-white/[0.03]"}`}
                      >
                        {item.isCurrent && (
                          <span className="mb-4 inline-flex rounded-md bg-cyan-400 px-2 py-1 text-[10px] font-semibold tracking-[0.15em] text-slate-900">
                            CURRENT
                          </span>
                        )}

                        <h3 className="text-[20px] font-semibold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-[14px] leading-7 text-slate-400">
                          {item.descriptionLines.join(" ")}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Timeline Node */}
                  <div
                    className={`timeline-node absolute left-1/2 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 shadow-[0_0_18px_rgba(59,130,246,.35)] lg:flex ${
                      item.isCurrent
                        ? "border-cyan-400 bg-cyan-400"
                        : "border-blue-400 bg-slate-800"
                    }`}
                  >
                    <Icon size={18} className="text-white" />
                  </div>

                  {/* Desktop Right */}
                  <div
                    className={`hidden w-1/2 lg:flex ${!isLeft ? "justify-start pl-10" : ""}`}
                  >
                    {!isLeft && (
                      <div
                        className={`timeline-card w-full max-w-[360px] rounded-2xl border p-5 backdrop-blur-xl transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(93,230,255,.15)] ${item.isCurrent ? "border-cyan-400 bg-cyan-400/10" : "border-white/10 bg-white/[0.03]"}`}
                      >
                        {item.isCurrent && (
                          <span className="mb-4 inline-flex rounded-md bg-cyan-400 px-2 py-1 text-[10px] font-semibold tracking-[0.15em] text-slate-900">
                            CURRENT
                          </span>
                        )}

                        <h3 className="text-[20px] font-semibold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-[14px] leading-7 text-slate-400">
                          {item.descriptionLines.join(" ")}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Mobile */}
                  <div className="relative w-full pl-14 lg:hidden">
                    <div className="timeline-node absolute left-[2px] top-5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-cyan-400 bg-slate-900">
                      <Icon size={16} className="text-white" />
                    </div>

                    <div className="timeline-card rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                      {item.isCurrent && (
                        <span className="mb-3 inline-flex rounded-md bg-cyan-400 px-2 py-1 text-[10px] font-semibold tracking-[0.15em] text-slate-900">
                          CURRENT
                        </span>
                      )}

                      <h3 className="text-[19px] font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-[14px] leading-7 text-slate-400">
                        {item.descriptionLines.join(" ")}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[140px]" />

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#030712] to-transparent" />
    </section>
  );
}
