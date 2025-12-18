"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export type ProjectCardModel = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  tags: string[];
  github_url?: string | null;
  live_url?: string | null;
};

const MotionCard = motion.create(Card);

export default function ProjectCard({
  project,
}: {
  project: ProjectCardModel;
}) {
  return (
    <MotionCard
      whileHover={{ y: -8, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="h-full overflow-hidden rounded-2xl border bg-card shadow-sm"
    >
      <CardHeader className="space-y-2">
        <CardTitle className="text-base">{project.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{project.summary}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {(project.stack ?? []).slice(0, 8).map((s) => (
            <span
              key={s}
              className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Tags */}
        {(project.tags?.length ?? 0) > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((t) => (
              <span
                key={t}
                className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
              >
                #{t}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.live_url && (
            <Button asChild className="rounded-full gap-1.5">
              <a href={project.live_url} target="_blank" rel="noreferrer">
                <ExternalLink className="h-4 w-4" />
                Live
              </a>
            </Button>
          )}

          {project.github_url && (
            <Button asChild variant="outline" className="rounded-full gap-1.5">
              <a href={project.github_url} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </MotionCard>
  );
}
