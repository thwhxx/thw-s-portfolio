"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sectionVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground transition hover:-translate-y-0.5 hover:border-pink-300 hover:text-foreground">
      {children}
    </span>
  );
}

export default function SkillsSection() {
  return (
    <motion.section
      className="mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
      variants={sectionVariant}
    >
      <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        A quick overview of the tools I use to build clean, production-ready
        apps.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {/* Frontend */}
        <Card className="rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Frontend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Pill>Angular</Pill>
              <Pill>React</Pill>
              <Pill>Next.js</Pill>
              <Pill>TypeScript</Pill>
              <Pill>JavaScript</Pill>
              <Pill>HTML</Pill>
              <Pill>CSS</Pill>
              <Pill>Tailwind</Pill>
              <Pill>shadcn/ui</Pill>
            </div>
          </CardContent>
        </Card>

        {/* Backend & Data */}
        <Card className="rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Backend & Data</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Pill>Supabase</Pill>
              <Pill>PostgreSQL</Pill>
              <Pill>MySQL</Pill>
              <Pill>REST APIs</Pill>
              <Pill>Auth</Pill>
              <Pill>Java</Pill>
              <Pill>Spring Boot</Pill>
            </div>
          </CardContent>
        </Card>

        {/* Tools & Workflow */}
        <Card className="rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Tools & Workflow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Pill>Git</Pill>
              <Pill>GitHub</Pill>
              <Pill>GitLab</Pill>
              <Pill>CI/CD</Pill>
              <Pill>Figma</Pill>
              <Pill>VS Code</Pill>
              <Pill>Agile</Pill>
              <Pill>Code review</Pill>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
