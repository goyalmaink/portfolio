import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, getProject } from "@/lib/data/projects";
import { SITE } from "@/lib/data/site";
import { Footer } from "@/components/layout/Footer";
import { CaseStudyIntro } from "@/components/sections/CaseStudyIntro";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Not found" };

  const title = `${project.title} — Case Study · ${SITE.name}`;
  const description = project.summary;
  return {
    title,
    description,
    alternates: { canonical: `${SITE.url}/work/${project.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE.url}/work/${project.slug}`,
      type: "article",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <>
      <CaseStudyIntro project={project} />

      <main className="bg-offwhite text-charcoal">
        {/* Overview */}
        <section className="container-x grid gap-12 border-b border-charcoal/10 py-16 md:grid-cols-[1fr_1.6fr] md:py-24">
          <div>
            <h2 className="font-display text-2xl font-bold">The problem</h2>
          </div>
          <div className="space-y-8">
            <p className="font-inter text-xl leading-relaxed text-charcoal/80 md:text-2xl">
              {project.problem}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-charcoal/20 px-3 py-1 font-inter text-xs text-charcoal/70"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics band */}
        <section className="bg-charcoal py-16 text-offwhite">
          <div className="container-x grid grid-cols-1 gap-10 sm:grid-cols-3">
            {project.metrics.map((m) => (
              <div key={m.label} className="border-l-2 border-orange pl-5">
                <div className="font-display text-5xl font-bold md:text-6xl">{m.value}</div>
                <div className="mt-2 font-inter text-sm uppercase tracking-widest text-offwhite/60">
                  {m.label}
                  
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Responsibilities */}
        <TwoCol heading="What I did" >
          <ul className="space-y-4">
            {project.responsibilities.map((r) => (
              <li key={r} className="flex gap-4 font-inter text-lg text-charcoal/80">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                {r}
              </li>
            ))}
          </ul>
        </TwoCol>

        {/* Architecture */}
        <TwoCol heading="Architecture" tone="beige">
          <p className="font-inter text-lg leading-relaxed text-charcoal/80">
            {project.architecture}
          </p>
        </TwoCol>

        {/* Code */}
        {project.code && (
          <section className="container-x py-16 md:py-24">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-inter text-xs font-semibold uppercase tracking-[0.3em] text-charcoal/50">
                {project.code.language}
              </span>
              <span className="h-px flex-1 bg-charcoal/15" />
              <span className="font-inter text-sm text-charcoal/60">{project.code.label}</span>
            </div>
            <pre className="overflow-x-auto rounded-2xl border-2 border-charcoal bg-charcoal p-6 md:p-8">
              <code className="font-mono text-sm leading-relaxed text-offwhite">
                {project.code.snippet}
              </code>
            </pre>
          </section>
        )}

        {/* Challenges */}
        <TwoCol heading="Hard parts" tone="beige">
          <ul className="space-y-4">
            {project.challenges.map((c) => (
              <li key={c} className="flex gap-4 font-inter text-lg text-charcoal/80">
                <span className="mt-1 font-display text-orange">→</span>
                {c}
              </li>
            ))}
          </ul>
        </TwoCol>

        {/* Impact + Learnings */}
        <section className="container-x grid gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h2 className="font-display text-2xl font-bold">Impact</h2>
            <ul className="mt-6 space-y-4">
              {project.impact.map((r) => (
                <li key={r} className="flex gap-4 font-inter text-lg text-charcoal/80">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold">What I learned</h2>
            <ul className="mt-6 space-y-4">
              {project.learnings.map((r) => (
                <li key={r} className="flex gap-4 font-inter text-lg text-charcoal/80">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Next project */}
        <Link
          href={`/work/${next.slug}`}
          data-cursor="OPEN"
          className="group block border-t-2 border-charcoal bg-beige py-16 transition-colors hover:bg-charcoal"
        >
          <div className="container-x flex flex-col gap-2">
            <span className="font-inter text-xs font-semibold uppercase tracking-[0.3em] text-charcoal/50 group-hover:text-offwhite/60">
              Next project
            </span>
            <span className="font-display text-5xl font-bold tracking-tightest text-charcoal group-hover:text-offwhite md:text-8xl">
              {next.title}
            </span>
          </div>
        </Link>
      </main>

      <Footer />
    </>
  );
}

function TwoCol({
  heading,
  children,
  tone,
}: {
  heading: string;
  children: React.ReactNode;
  tone?: "beige";
}) {
  return (
    <section className={tone === "beige" ? "bg-beige" : ""}>
      <div className="container-x grid gap-8 border-b border-charcoal/10 py-16 md:grid-cols-[1fr_1.6fr] md:py-24">
        <h2 className="font-display text-2xl font-bold">{heading}</h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
