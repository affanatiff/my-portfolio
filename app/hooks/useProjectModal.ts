"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/app/data/content";

export type ProjectModalState = {
  type: "demo" | "payload" | "workflow";
  project: Project;
} | null;

export function useProjectModal() {
  const [modal, setModal] = useState<ProjectModalState>(null);

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setModal(null);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return {
    modal,
    openModal: (type: "demo" | "payload" | "workflow", project: Project) =>
      setModal({ type, project }),
    closeModal: () => setModal(null),
  };
}
