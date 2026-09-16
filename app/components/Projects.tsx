"use client";

import Link from "next/link";
import { PROJECTS } from "@/app/data/content";
import { useInView } from "@/app/hooks/useInView";
import { useProjectModal } from "@/app/hooks/useProjectModal";
import {
  BracesIcon,
  Check,
  DownloadIcon,
  FileTextIcon,
  GithubIcon,
  PlayIcon,
} from "./icons";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const { modal, openModal, closeModal } = useProjectModal();

  return (
    <section id="projects" className="border-b border-border-color">
      <div ref={ref} className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div
          className={`reveal flex flex-col justify-between gap-6 md:flex-row md:items-end ${
            inView ? "in-view" : ""
          }`}
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Selected Work
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
              Projects
            </h2>
          </div>

          <p className="max-w-md opacity-55">
            Sample automation and AI workflow builds. Demos, payloads, and
            workflow exports below are illustrative — built to show how
            CodeBlue structures a pipeline end to end.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <article
              key={project.slug}
              className={`glass-card reveal fade-delay-${
                (index % 4) + 1
              } group rounded-3xl p-6 transition duration-300 hover:-translate-y-1 ${
                inView ? "in-view" : ""
              }`}
            >
              <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-bg-primary/50 p-5">
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="text-xs opacity-40">
                      {project.trigger}
                    </span>
                    <span className="text-xs text-accent">
                      {project.number}
                    </span>
                  </div>

                  <div className="my-auto space-y-3">
                    <div className="text-sm font-medium opacity-70">
                      {project.stat}
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-2">
                      <div className="h-14 rounded-lg bg-accent/80" />
                      <div className="h-14 rounded-lg bg-text-primary/10" />
                      <div className="h-14 rounded-lg bg-text-primary/10" />
                    </div>
                  </div>

                  <div className="text-xs opacity-30">n8n · AI · APIs</div>
                </div>
              </div>

              <div className="mt-6">
                <div className="text-sm text-accent">{project.category}</div>

                <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 opacity-55">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border-color px-3 py-1 text-xs opacity-65"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <span className="text-accent">
                        <Check />
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-border-color pt-6">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-2 rounded-full bg-text-primary px-4 py-2 text-xs font-semibold text-bg-primary transition hover:bg-accent hover:text-white"
                  >
                    <FileTextIcon />
                    Read Case Study
                  </Link>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-border-color px-4 py-2 text-xs font-semibold transition hover:border-accent hover:text-accent"
                  >
                    <GithubIcon />
                    View GitHub
                  </a>

                  <a
                    href={project.jsonFile}
                    download
                    className="flex items-center gap-2 rounded-full border border-border-color px-4 py-2 text-xs font-semibold transition hover:border-accent hover:text-accent"
                  >
                    <DownloadIcon />
                    Download Workflow
                  </a>

                  <button
                    type="button"
                    onClick={() => openModal("payload", project)}
                    className="flex items-center gap-2 rounded-full border border-border-color px-4 py-2 text-xs font-semibold transition hover:border-accent hover:text-accent"
                  >
                    <BracesIcon />
                    Inspect Sample Payload
                  </button>

                  <button
                    type="button"
                    onClick={() => openModal("demo", project)}
                    className="flex items-center gap-2 rounded-full border border-border-color px-4 py-2 text-xs font-semibold transition hover:border-accent hover:text-accent"
                  >
                    <PlayIcon />
                    View Demo
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal modal={modal} onClose={closeModal} />
    </section>
  );
}
