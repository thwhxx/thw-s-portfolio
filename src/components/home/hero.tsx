"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <motion.section
      className="mb-16 flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6 }}
      variants={sectionVariant}
    >
      <div className="max-w-xl">
        <p className="text-sm uppercase tracking-[0.25em] text-pink-500">
          Frontend Developer
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          Hi, I’m <span className="text-pink-500">Anh Thu</span>.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          I build modern, responsive, and user-focused web applications using{" "}
          <span className="font-medium text-foreground">
            Angular, React, and Next.js
          </span>
          . I love turning Figma designs into smooth, production-ready UIs.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button className="bg-pink-500 hover:bg-pink-600" asChild>
            <a href="/projects">View Projects</a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="/Anh-Thu-Huynh-Frontend-Developer-CV.pdf"
              target="_blank"
            >
              Download Resume
            </a>
          </Button>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-6 shadow-sm">
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Currently
        </p>
        <p className="text-sm">
          🎓 Studying{" "}
          <span className="font-medium">
            Computer Programming & Analysis
          </span>{" "}
          at Conestoga College.
        </p>
        <p className="mt-2 text-sm">
          💼 Previously Web Developer Intern at{" "}
          <span className="font-medium">BStarSolutions</span> (Angular, Next.js,
          Spring Boot, PostgreSQL).
        </p>
      </div>
    </motion.section>
  );
}
