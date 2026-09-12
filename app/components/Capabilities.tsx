"use client";

import { CAPABILITIES } from "@/app/data/content";
import { useInView } from "@/app/hooks/useInView";

const STATS: [string, string][] = [
  ["n8n", "Workflow automation"],
  ["AI", "Intelligent processes"],
  ["API", "Connected systems"],
  ["24/7", "Automated execution"],
];

export default function Capabilities() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="capabilities" className="border-b border-border-color">
      <div
        ref={ref}
        className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"
      >
        <div className={`reveal max-w-3xl ${inView ? "in-view" : ""}`}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Capabilities
          </p>

          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
            The tools and systems
            <br />
            we build with.
          </h2>

          <p className="mt-6 text-lg leading-8 opacity-55">
            A focused stack for connecting the platforms your business
            already runs on.
          </p>
        </div>

        <div
          className={`reveal fade-delay-1 mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 ${
            inView ? "in-view" : ""
          }`}
        >
          {STATS.map(([value, label]) => (
            <div key={label} className="glass-card rounded-2xl px-5 py-6">
              <div className="font-[family-name:var(--font-display)] text-3xl font-bold">
                {value}
              </div>
              <div className="mt-1 text-sm opacity-50">{label}</div>
            </div>
          ))}
        </div>

        <div
          className={`reveal fade-delay-2 mt-10 flex flex-wrap gap-3 ${
            inView ? "in-view" : ""
          }`}
        >
          {CAPABILITIES.map((capability) => (
            <span
              key={capability}
              className="glass rounded-full px-4 py-2 text-sm font-medium text-text-primary/80 transition hover:-translate-y-0.5 hover:border-accent/40 hover:text-text-primary"
            >
              {capability}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
