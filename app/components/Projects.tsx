"use client";

import { useEffect, useState } from "react";
import { GITHUB_LINK, PROJECTS } from "@/app/data/content";
import { useInView } from "@/app/hooks/useInView";
import {
  BracesIcon,
  Check,
  DownloadIcon,
  GithubIcon,
  PlayIcon,
  XIcon,
} from "./icons";

export default function Projects() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [modal, setModal] = useState<{
    type: "demo" | "payload";
    index: number;
  } | null>(null);

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setModal(null);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const activeProject = modal ? PROJECTS[modal.index] : null;

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
            Sample automation and AI workflow builds. Demos, Payloads, and
            Workflow exports below are illustrative. Built to show how we at
            CodeBlue structure a pipeline end to end.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <article
              key={project.number}
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
                  <button
                    type="button"
                    onClick={() => setModal({ type: "demo", index })}
                    className="flex items-center gap-2 rounded-full border border-border-color px-4 py-2 text-xs font-semibold transition hover:border-accent hover:text-accent"
                  >
                    <PlayIcon />
                    View Demo
                  </button>

                  <button
                    type="button"
                    onClick={() => setModal({ type: "payload", index })}
                    className="flex items-center gap-2 rounded-full border border-border-color px-4 py-2 text-xs font-semibold transition hover:border-accent hover:text-accent"
                  >
                    <BracesIcon />
                    Inspect Sample Payload
                  </button>

                  <a
                    href={GITHUB_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-border-color px-4 py-2 text-xs font-semibold transition hover:border-accent hover:text-accent"
                  >
                    <GithubIcon />
                    View on GitHub
                  </a>

                  <a
                    href={project.jsonFile}
                    download
                    className="flex items-center gap-2 rounded-full bg-text-primary px-4 py-2 text-xs font-semibold text-bg-primary transition hover:bg-accent hover:text-white"
                  >
                    <DownloadIcon />
                    Download JSON
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeProject && modal && (
        <div
          className="modal-overlay fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          onClick={() => setModal(null)}
        >
          <div
            className="glass-card modal-panel max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl p-6 sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent">
                  {modal.type === "demo" ? "Demo Preview" : "Sample Payload"}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold">
                  {activeProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setModal(null)}
                aria-label="Close"
                className="rounded-full border border-border-color p-2 transition hover:border-accent hover:text-accent"
              >
                <XIcon />
              </button>
            </div>

            {modal.type === "demo" ? (
              <div className="mt-6">
                <p className="mb-6 text-sm opacity-55">
                  {activeProject.trigger} · {activeProject.stat}
                </p>

                <div className="space-y-0">
                  {activeProject.pipeline.map((step, stepIndex) => (
                    <div key={step} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <span className="flow-dot flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-white">
                          {stepIndex + 1}
                        </span>
                        {stepIndex < activeProject.pipeline.length - 1 && (
                          <span className="my-1 h-8 w-px flex-1 bg-border-color" />
                        )}
                      </div>
                      <div className="pb-6 pt-1 text-sm font-medium">
                        {step}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-2 text-xs opacity-40">
                  This is an illustrative pipeline diagram of how the
                  automation runs, not a live product demo.
                </p>
              </div>
            ) : (
              <div className="mt-6">
                <pre className="max-h-96 overflow-auto rounded-2xl bg-bg-primary p-4 text-xs leading-6 opacity-80">
                  {JSON.stringify(activeProject.payload, null, 2)}
                </pre>
                <p className="mt-3 text-xs opacity-40">
                  Sample data shown for illustration only — not real customer
                  information.
                </p>

                <a
                  href={activeProject.jsonFile}
                  download
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-text-primary px-4 py-2 text-xs font-semibold text-bg-primary transition hover:bg-accent hover:text-white"
                >
                  <DownloadIcon />
                  Download full workflow JSON
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
