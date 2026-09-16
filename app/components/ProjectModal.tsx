"use client";

import { useEffect, useState } from "react";
import type { ProjectModalState } from "@/app/hooks/useProjectModal";
import { DownloadIcon, XIcon } from "./icons";
import PipelineSteps from "./PipelineSteps";

const TITLES = {
  demo: "Demo Preview",
  payload: "Sample Payload",
  workflow: "Workflow JSON",
};

export default function ProjectModal({
  modal,
  onClose,
}: {
  modal: ProjectModalState;
  onClose: () => void;
}) {
  const [workflowResult, setWorkflowResult] = useState<{
    jsonFile: string;
    json: string | null;
    error: boolean;
  } | null>(null);

  const jsonFile = modal?.type === "workflow" ? modal.project.jsonFile : null;

  useEffect(() => {
    if (!jsonFile) return;

    let cancelled = false;

    fetch(jsonFile)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) {
          setWorkflowResult({
            jsonFile,
            json: JSON.stringify(data, null, 2),
            error: false,
          });
        }
      })
      .catch(() => {
        if (!cancelled) {
          setWorkflowResult({ jsonFile, json: null, error: true });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [jsonFile]);

  if (!modal) return null;
  const { project, type } = modal;
  const showingCurrentWorkflow = workflowResult?.jsonFile === jsonFile;

  return (
    <div
      className="modal-overlay fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="glass-card modal-panel max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl p-6 sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">
              {TITLES[type]}
            </p>
            <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold">
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-full border border-border-color p-2 transition hover:border-accent hover:text-accent"
          >
            <XIcon />
          </button>
        </div>

        {type === "demo" && (
          <div className="mt-6">
            <p className="mb-6 text-sm opacity-55">
              {project.trigger} · {project.stat}
            </p>

            <PipelineSteps steps={project.pipeline} />

            <p className="mt-2 text-xs opacity-40">
              This is an illustrative pipeline diagram of how the automation
              runs, not a live product demo.
            </p>
          </div>
        )}

        {type === "payload" && (
          <div className="mt-6">
            <pre className="max-h-96 overflow-auto rounded-2xl bg-bg-primary p-4 text-xs leading-6 opacity-80">
              {JSON.stringify(project.payload, null, 2)}
            </pre>
            <p className="mt-3 text-xs opacity-40">
              Sample data shown for illustration only — not real customer
              information.
            </p>

            <a
              href={project.jsonFile}
              download
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-text-primary px-4 py-2 text-xs font-semibold text-bg-primary transition hover:bg-accent hover:text-white"
            >
              <DownloadIcon />
              Download full workflow JSON
            </a>
          </div>
        )}

        {type === "workflow" && (
          <div className="mt-6">
            <pre className="max-h-96 overflow-auto rounded-2xl bg-bg-primary p-4 text-xs leading-6 opacity-80">
              {!showingCurrentWorkflow
                ? "Loading…"
                : workflowResult?.error
                  ? "Couldn't load the workflow file."
                  : workflowResult?.json}
            </pre>
            <p className="mt-3 text-xs opacity-40">
              Sample n8n workflow export for demonstration — credentials and
              endpoints are placeholders.
            </p>

            <a
              href={project.jsonFile}
              download
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-text-primary px-4 py-2 text-xs font-semibold text-bg-primary transition hover:bg-accent hover:text-white"
            >
              <DownloadIcon />
              Download workflow JSON
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
