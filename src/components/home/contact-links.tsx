"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, FileText, ExternalLink } from "lucide-react";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/thwhxx",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thwhxx",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:thuhuynhh2611@gmail.com",
    icon: Mail,
  },
  {
    label: "Resume",
    href: "frontend-Developer-Anh-Thu-Huynh.pdf",
    icon: FileText,
  },
];

export default function ContactLinksSection() {
  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <Card className="rounded-2xl transition hover:-translate-y-1 hover:border-pink-300 hover:shadow-md">
                <CardContent className="flex items-center gap-3 p-5">
                  <Icon className="h-5 w-5 text-pink-500" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{link.label}</p>
                    <p className="text-xs text-muted-foreground">Open link</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition group-hover:opacity-100" />
                </CardContent>
              </Card>
            </a>
          );
        })}
      </div>
    </motion.section>
  );
}
