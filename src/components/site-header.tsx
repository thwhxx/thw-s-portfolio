"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/70 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6">
        {/* Brand */}
        <Link href="/" className="font-semibold tracking-tight">
          <span className="text-pink-500">Anh Thu</span>{" "}
          <span className="text-muted-foreground">/ Frontend Developer</span>
        </Link>

        {/* Action */}
        <Button asChild size="sm" className="bg-pink-500 hover:bg-pink-600">
          <a
            href="frontend-Developer-Anh-Thu-Huynh.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </Button>
      </div>
    </header>
  );
}
