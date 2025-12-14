import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anh Thu Huynh – Frontend Developer",
  description:
    "Portfolio of Anh Thu – Frontend Developer (Angular, React, Next.js).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.className} bg-background text-foreground min-h-screen`}
      >
        <div className="fancy-bg">
          <div
            className="fancy-bubble"
            style={{
              width: 220,
              height: 220,
              top: "20%",
              left: "5%",
              background: "rgba(244,114,182,0.6)",
            }}
          />
          <div
            className="fancy-bubble"
            style={{
              width: 260,
              height: 260,
              bottom: "10%",
              right: "8%",
              background: "rgba(129,140,248,0.6)",
            }}
          />
        </div>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <footer className="border-t py-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Anh Thu Huynh. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
