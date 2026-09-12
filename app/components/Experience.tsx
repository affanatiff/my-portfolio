import { EXPERIENCE } from "@/app/data/content";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-border-color">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Experience
          </p>

          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
            Business background.
            <br />
            Automation focus.
          </h2>
        </div>

        <div className="mt-16 border-t border-border-color">
          {EXPERIENCE.map((item) => (
            <div
              key={item.title}
              className="grid gap-5 border-b border-border-color py-8 lg:grid-cols-[180px_1fr_1.3fr] lg:gap-10"
            >
              <div className="text-sm font-semibold text-accent">
                {item.period}
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm opacity-45">{item.company}</p>
              </div>

              <p className="leading-7 opacity-55">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
