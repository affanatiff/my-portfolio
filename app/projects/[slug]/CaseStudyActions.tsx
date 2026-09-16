"use client";

import type { Project } from "@/app/data/content";
import { useProjectModal } from "@/app/hooks/useProjectModal";
import {
  BracesIcon,
  CodeIcon,
  DownloadIcon,
  GithubIcon,
  PlayIcon,
} from "@/app/components/icons";
import ProjectModal from "@/app/components/ProjectModal";

export default function CaseStudyActions({ project }: { project: Project }) {
  const { modal, openModal, closeModal } = useProjectModal();

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-border-color px-5 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent"
        >
          <GithubIcon />
          View GitHub
        </a>

        <a
          href={project.jsonFile}
          download
          className="flex items-center gap-2 rounded-full border border-border-color px-5 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent"
        >
          <DownloadIcon />
          Download Workflow
        </a>

        <button
          type="button"
          onClick={() => openModal("workflow", project)}
          className="flex items-center gap-2 rounded-full border border-border-color px-5 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent"
        >
          <CodeIcon />
          View Workflow JSON
        </button>

        <button
          type="button"
          onClick={() => openModal("payload", project)}
          className="flex items-center gap-2 rounded-full border border-border-color px-5 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent"
        >
          <BracesIcon />
          Inspect Sample Payload
        </button>

        <button
          type="button"
          onClick={() => openModal("demo", project)}
          className="cta-glow flex items-center gap-2 rounded-full bg-text-primary px-5 py-3 text-sm font-semibold text-bg-primary transition hover:bg-accent hover:text-white"
        >
          <PlayIcon />
          View Demo
        </button>
      </div>

      <ProjectModal modal={modal} onClose={closeModal} />
    </>
  );
}
