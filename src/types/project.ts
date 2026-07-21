export interface ProjectTimeline {
  title: string;
  description: string;
}

export interface ProjectContent {
  slug: string;

  // Hero
  title: string;
  subtitle: string;
  description: string;
  banner: string;

  // Hero Info
  tech: string[];
  status: string;
  statusColor: "green" | "yellow" | "red";
  year: string;

  // Links
  liveUrl?: string;
  githubUrl?: string;

  // Overview
  overview: ProjectOverview;

  // Features
  features: ProjectFeature[];

  // Tech Stack
  techStack: ProjectTech[];

  // Gallery
  gallery: ProjectGalleryItem[];


  // Architecture
  architecture: string[];

  // Timeline
  timeline: ProjectTimeline[];
}

export interface ProjectOverview {
  description: string;
  problem: string;
  solution: string;
  impact: string;
}

export type ProjectFeatureIcon =
  | "wifi"
  | "smartphone"
  | "layout-dashboard"
  | "users"
  | "file-text"
  | "server"
  | "qr-code"
  | "shield-check"
  | "database"
  | "globe"
  | "search"
  | "map-pinned"
  | "rocket";

export interface ProjectFeature {
  title: string;
  description: string;
  icon: ProjectFeatureIcon;
}

export interface ProjectGalleryItem {
  image: string;
  title: string;
  description: string;
}

export type ProjectTechIcon =
  | "java"
  | "android"
  | "php"
  | "mysql"
  | "bootstrap"
  | "tailwind"
  | "typescript"
  | "javascript"
  | "nextjs"
  | "react"
  | "vercel"
  | "firebase"
  | "google"
  | "adminlte"
  | "qrcode"
  | "api";

export interface ProjectTech {
  name: string;
  category: string;
  icon: ProjectTechIcon;
}