import { CAL_LINK, EMAILS, GITHUB_LINK } from "@/app/data/content";
import { ArrowUpRight } from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border-color"
    >
      <div
        className="glow-blob left-[-10%] top-[-10%] h-[420px] w-[420px]"
        aria-hidden
      />
      <div
        className="glow-blob right-[-15%] top-[20%] h-[360px] w-[360px]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.35fr_.65fr] lg:px-8 lg:py-32">
        <div>
          <div className="animate-fade-up mb-7 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-sm font-medium uppercase tracking-[0.18em] opacity-50">
              We build systems that work for you.
            </span>
          </div>

          <h1 className="animate-fade-up fade-delay-1 max-w-5xl font-[family-name:var(--font-display)] text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            AI Automation
            <br />& <span className="text-accent">n8n Specialists</span>
          </h1>

          <p className="animate-fade-up fade-delay-2 mt-8 max-w-2xl text-lg leading-8 opacity-60 sm:text-xl">
            We build AI-powered workflows, n8n automations, chatbots, and
            business systems that eliminate repetitive work and connect the
            tools your business already uses.
          </p>

          <div className="animate-fade-up fade-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-glow flex items-center justify-center gap-2 rounded-full bg-text-primary px-6 py-3.5 text-sm font-semibold text-bg-primary transition hover:bg-accent hover:text-white"
            >
              Book a Free Discovery Call
              <ArrowUpRight />
            </a>

            <a
              href="#projects"
              className="flex items-center justify-center gap-2 rounded-full border border-border-color px-6 py-3.5 text-sm font-semibold transition hover:border-text-primary hover:bg-white/5"
            >
              View My Projects
            </a>
          </div>

          <div className="animate-fade-up fade-delay-4 mt-8 flex flex-wrap gap-5 text-sm opacity-50">
            <a
              href={GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:opacity-100"
            >
              GitHub ↗
            </a>
            <a
              href={`mailto:${EMAILS[0]}`}
              className="transition hover:opacity-100"
            >
              Email ↗
            </a>
          </div>
        </div>

        <div className="animate-fade-up fade-delay-2 flex items-end lg:justify-end">
          <div className="glass-card w-full max-w-md rounded-3xl p-6">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-sm font-medium">Automation System</span>
              <span className="flex items-center gap-2 text-xs text-green-500">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Active
              </span>
            </div>

            <div className="space-y-3">
              {[
                "Incoming lead",
                "AI analysis",
                "Data enrichment",
                "Qualification",
                "CRM / Sheets",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-border-color bg-bg-primary p-3"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-text-primary text-xs text-bg-primary">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl bg-accent p-4 text-white">
              <div className="text-xs uppercase tracking-wider opacity-60">
                Result
              </div>
              <div className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold">
                Less manual work. More time.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
