"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const variant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  return (
    <motion.section
      className="mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      variants={variant}
    >
      <h2 className="text-xl font-semibold tracking-tight">About Me</h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {/* LEFT – INTRO */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base">Who I am</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              I’m a software developer with a strong focus on software
              engineering and real backend integration.
            </p>
            <p>
              I enjoy building clean, user-friendly interfaces backed by
              structured data, APIs, and databases.
            </p>
            <p>
              My projects are not mock-only demos — they are connected to real
              backends and designed with production practices in mind.
            </p>
          </CardContent>
        </Card>

        {/* RIGHT – SKILLS / FOCUS */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base">What I do</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <ul className="list-disc space-y-2 pl-4">
              <li>
                Build modern web apps with{" "}
                <span className="font-medium text-foreground">
                  Next.js, TypeScript, Tailwind, shadcn/ui
                </span>
              </li>
              <li>
                Integrate real backends using{" "}
                <span className="font-medium text-foreground">
                  Supabase (PostgreSQL + RLS)
                </span>{" "}
                and APIs
              </li>
              <li>
                Design reusable components with attention to UX and performance
              </li>
              <li>
                Comfortable working across frontend, backend logic, and data
                models
              </li>
            </ul>

            <div className="pt-2">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Currently focusing on
              </p>
              <p className="mt-1">
                Full-stack projects with real data, clean architecture, and
                maintainable codebases.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
