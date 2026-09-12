"use client";

import { PROCESS } from "@/app/data/content";
import { useInView } from "@/app/hooks/useInView";

export default function Process() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="border-b border-border-color">
      <div ref={ref} className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className={`reveal max-w-3xl ${inView ? "in-view" : ""}`}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            How we work
          </p>

          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
            A simple,
            <br />
            no-surprises process.
          </h2>
        </div>

        <div className="relative mt-20">
          <div
            className="pointer-events-none absolute left-6 right-6 top-6 hidden h-px bg-border-color lg:block"
            aria-hidden
          />

          <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {PROCESS.map((step, index) => (
              <div
                key={step.number}
                className={`reveal fade-delay-${index + 1} ${
                  inView ? "in-view" : ""
                }`}
              >
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-sm font-semibold text-accent shadow-[0_0_24px_-6px_rgba(59,130,246,0.6)] backdrop-blur-sm">
                  {step.number}
                </div>

                <h3 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 opacity-55">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
