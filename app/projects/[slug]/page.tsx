import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/app/data/content";
import Header from "@/app/components/Header";
import Contact from "@/app/components/Contact";
import PipelineSteps from "@/app/components/PipelineSteps";
import { ArrowUpRight, Check } from "@/app/components/icons";
import CaseStudyActions from "./CaseStudyActions";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: `${project.title} — CodeBlue Case Study`,
    description: project.description,
  };
}

export default async function ProjectCaseStudy({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <main className="relative z-10 min-h-screen text-text-primary">
      <Header />

      <section className="border-b border-border-color">
        <div className="mx-auto max-w-4xl px-5 py-20 lg:px-8 lg:py-28">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium opacity-55 transition hover:opacity-100"
          >
            ← All Projects
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {project.category}
          </p>

          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 opacity-60">
            {project.description}
          </p>

          <p className="mt-4 text-sm opacity-45">
            {project.trigger} · {project.stat}
          </p>

          <div className="mt-9">
            <CaseStudyActions project={project} />
          </div>
        </div>
      </section>

      {project.problem && (
        <section className="border-b border-border-color">
          <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Problem
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 opacity-60">
              {project.problem}
            </p>
          </div>
        </section>
      )}

      <section className="border-b border-border-color">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Solution
          </p>

          <p className="mt-4 max-w-2xl text-lg leading-8 opacity-60">
            {project.description}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-sm">
                <span className="text-accent">
                  <Check />
                </span>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border-color">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Pipeline / Workflow
          </p>

          <div className="glass-card mt-6 rounded-3xl p-6 sm:p-8">
            <PipelineSteps steps={project.pipeline} />
          </div>
        </div>
      </section>

      <section className="border-b border-border-color">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Stack
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="glass rounded-full px-4 py-2 text-sm font-medium text-text-primary/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Result
          </p>

          <div className="glass-card mt-6 inline-block rounded-2xl px-6 py-5">
            <div className="font-[family-name:var(--font-display)] text-2xl font-bold">
              {project.stat}
            </div>
          </div>

          <div className="mt-10">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium transition hover:text-accent"
            >
              View the repository on GitHub
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
