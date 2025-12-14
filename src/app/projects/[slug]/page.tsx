import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { notFound } from "next/navigation";

type Project = {
  title: string;
  summary: string;
  role: string | null;
  stack: string[];
  tags: string[];
  github_url: string | null;
  live_url: string | null;
  cover_url: string | null;
  highlights: string[];
  body_md: string | null;
};

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { data, error } = await supabase
    .from("projects")
    .select(
      "title,summary,role,stack,tags,github_url,live_url,cover_url,highlights,body_md"
    )
    .eq("slug", params.slug)
    .eq("published", true)
    .single();

  if (error || !data) return notFound();

  const p = data as Project;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:px-6">
      <Link href="/projects" className="text-sm text-pink-500 hover:underline">
        ← Back to Projects
      </Link>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight">{p.title}</h1>
      <p className="mt-3 text-muted-foreground">{p.summary}</p>

      <div className="mt-5 flex flex-wrap gap-3 text-sm">
        {p.live_url && (
          <a
            className="text-pink-500 hover:underline"
            href={p.live_url}
            target="_blank"
          >
            Live
          </a>
        )}
        {p.github_url && (
          <a
            className="text-pink-500 hover:underline"
            href={p.github_url}
            target="_blank"
          >
            GitHub
          </a>
        )}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border bg-card p-5">
          <h2 className="font-semibold">Role</h2>
          <p className="mt-2 text-sm text-muted-foreground">{p.role ?? "—"}</p>
        </div>
        <div className="rounded-2xl border bg-card p-5">
          <h2 className="font-semibold">Tech Stack</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {(p.stack ?? []).map((s) => (
              <span key={s} className="rounded-full border px-2 py-0.5 text-xs">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {(p.highlights?.length ?? 0) > 0 && (
        <section className="mt-10">
          <h2 className="text-lg font-semibold">Highlights</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {p.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Case study markdown (simple render) */}
      {p.body_md && (
        <section className="mt-10">
          <h2 className="text-lg font-semibold">Case Study</h2>
          <pre className="mt-4 whitespace-pre-wrap rounded-2xl border bg-card p-5 text-sm leading-6">
            {p.body_md}
          </pre>
        </section>
      )}
    </div>
  );
}
