"use client";

import { useRef } from "react";
import {
  Wifi,
  Smartphone,
  LayoutDashboard,
  Users,
  FileText,
  Server,
  QrCode,
  ShieldCheck,
  Database,
  Globe,
  Search,
  MapPinned,
  Rocket,
  LucideIcon,
} from "lucide-react";

import { ProjectContent, ProjectFeatureIcon } from "@/types/project";
import useProjectFeaturesAnimation from "@/hooks/useProjectFeaturesAnimation";

interface ProjectFeaturesProps {
  project: ProjectContent;
}

const iconMap: Record<ProjectFeatureIcon, LucideIcon> = {
  wifi: Wifi,
  smartphone: Smartphone,
  "layout-dashboard": LayoutDashboard,
  users: Users,
  "file-text": FileText,
  server: Server,
  "qr-code": QrCode,
  "shield-check": ShieldCheck,
  database: Database,
  globe: Globe,
  search: Search,
  "map-pinned": MapPinned,
  rocket: Rocket,
};

export default function ProjectFeatures({ project }: ProjectFeaturesProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useProjectFeaturesAnimation(sectionRef);

  return (
    <section ref={sectionRef} className="project-features relative py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        {/* Heading */}

        <div className="max-w-3xl">
          <span className="features-badge inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.22em] text-cyan-400">
            <span className="h-px w-8 bg-cyan-400" />
            FEATURES
            <span className="h-px w-8 bg-cyan-400" />
          </span>

          <h2 className="features-title mt-3 text-3xl font-bold text-white lg:text-4xl">
            Key Features
          </h2>

          <p className="features-description mt-6 max-w-3xl text-[15px] leading-8 text-slate-400">
            Explore the core features that make this project efficient,
            reliable, and easy to use.
          </p>
        </div>

        {/* Grid */}

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {project.features.map((feature) => {
            const Icon = iconMap[feature.icon];

            return (
              <div
                key={feature.title}
                className="feature-card group rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-cyan-400/[0.03]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 transition-colors group-hover:bg-cyan-500/20">
                  <Icon className="h-6 w-6 text-cyan-400" />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
