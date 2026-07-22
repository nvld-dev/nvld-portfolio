import { notFound } from "next/navigation";

import ProjectHero from "@/components/project/ProjectHero";
import ProjectOverview from "@/components/project/ProjectOverview";
import ProjectFeatures from "@/components/project/ProjectFeatures";
import ProjectGallery from "@/components/project/ProjectGallery";
import ProjectTechStack from "../../../components/project/ProjectTechStack";
import ProjectArchitecture from "@/components/project/ProjectArchitecture";
import ProjectCTA from "@/components/project/ProjectCTA";

import { getProjectContent } from "@/data/projectContent";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = getProjectContent(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ProjectFeatures project={project} />
      <ProjectGallery project={project} />
      <ProjectTechStack project={project} />
      <ProjectArchitecture project={project} />
      <ProjectCTA project={project} />
    </main>
  );
}
