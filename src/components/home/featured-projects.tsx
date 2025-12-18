import { supabase } from "@/lib/supabase";
import ProjectsGridClient from "./featured-projects.client";
import type { ProjectCardModel } from "@/app/projects/project-card";

export default async function FeaturedProjectsSection() {
  const { data, error } = await supabase
    .from("projects")
    .select("slug,title,summary,stack,tags,github_url,live_url")
    .eq("published", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  const projects = (
    !error && data ? (data as ProjectCardModel[]) : []
  ) as ProjectCardModel[];

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        All projects are loaded from Supabase (PostgreSQL + RLS).
      </p>

      <ProjectsGridClient projects={projects} />
    </section>
  );
}
