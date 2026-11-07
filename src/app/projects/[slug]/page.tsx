import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/sections/project-detail";
import { archivePosts } from "@/data/archive";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return archivePosts
    .filter((project) =>
      ["portfolio-website", "macbook-landing", "mobbin-remake", "dj-digger-web-ui"].includes(
        project.slug,
      ),
    )
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = archivePosts.find((item) => item.slug === slug);

  return {
    title: project
      ? `${project.title} — Maks Solomon`
      : "Project — Maks Solomon",
    description: project?.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = archivePosts.find((item) => item.slug === slug);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
