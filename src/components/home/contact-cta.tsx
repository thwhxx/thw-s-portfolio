"use client";

import { motion } from "framer-motion";
import ContactLinksSection from "@/components/home/contact-links";

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactCtaSection() {
  return (
    <motion.section
      className="rounded-2xl border bg-card px-6 py-8 text-center shadow-sm"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      variants={sectionVariant}
    >
      <h2 className="text-xl font-semibold tracking-tight">
        Let&apos;s work together
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        I&apos;m open to internships, junior software roles, and freelance
        projects. Feel free to reach out.
      </p>
      <ContactLinksSection />
    </motion.section>
  );
}
