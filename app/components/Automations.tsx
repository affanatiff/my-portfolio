import { AUTOMATIONS } from "@/app/data/content";

export default function Automations() {
  return (
    <section id="automations" className="border-b border-border-color">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Automation
          </p>

          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
            Workflows that
            <br />
            keep moving.
          </h2>

          <p className="mt-6 text-lg leading-8 opacity-55">
            Instead of manually moving information from one application to
            another, let the workflow handle the repetitive steps.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {AUTOMATIONS.map((automation) => (
            <div
              key={automation.number}
              className="group grid gap-6 rounded-3xl border border-border-color bg-card-bg p-6 transition hover:border-accent/40 lg:grid-cols-[80px_1fr_1fr_auto] lg:items-center"
            >
              <div className="text-sm font-semibold text-accent">
                {automation.number}
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold">
                  {automation.title}
                </h3>
              </div>

              <div>
                <p className="font-mono text-sm opacity-55">
                  {automation.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {automation.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-bg-primary px-3 py-1 text-xs border border-border-color"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
