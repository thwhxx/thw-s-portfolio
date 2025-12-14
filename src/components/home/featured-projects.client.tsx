"use client";

import { motion } from "framer-motion";
import ProjectCard, { ProjectCardModel } from "@/app/projects/project-card";

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function FeaturedProjectsClient({
  projects,
}: {
  projects: ProjectCardModel[];
}) {
  return (
    <motion.div
      className="mt-6 grid gap-4 md:grid-cols-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      variants={sectionVariant}
    >
      {projects.map((p) => (
        <ProjectCard key={p.slug} project={p} />
      ))}
    </motion.div>
  );
}
