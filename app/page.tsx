"use client";

import { useState } from "react";
import { Fraunces, Inter } from "next/font/google";

/**
 * ────────────────────────────────────────────────────────────────
 *  PORTFOLIO — single-file page.tsx
 *  Stack: Next.js (App Router) + TypeScript + Tailwind CSS
 *
 *  Everywhere you see  // TODO:  is a spot to replace with your
 *  real content (name, links, projects, testimonials, email, etc).
 *  The structure mirrors a typical dev/automation portfolio:
 *  Header → Hero → Stats → Services → Process → Projects →
 *  Testimonials → FAQ → Contact → Footer
 * ────────────────────────────────────────────────────────────────
 */

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

// ── Data ──────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { value: "5+", label: "Projects shipped" }, // TODO
  { value: "5+", label: "Automations live" }, // TODO
  { value: "100%", label: "Job success" }, // TODO
  { value: "24h", label: "Avg. response time" }, // TODO
];

const SERVICES = [
  {
    title: "Web Development",
    kicker: "Sites & storefronts that sell",
    description:
      "Fast, responsive, on-brand websites and e-commerce storefronts built to convert visitors into customers.",
    bullets: [
      "Custom responsive design",
      "E-commerce & checkout",
      "Micro-interactions & animation",
      "SEO + analytics setup",
    ],
  },
  {
    title: "Automation", // TODO: rename if not automation-focused
    kicker: "Workflows that run themselves",
    description:
      "AI chatbots, CRM sync, onboarding flows, and integrations that eliminate manual, repetitive work.",
    bullets: [
      "AI chatbots & agents",
      "CRM & sheet sync",
      "Lead-to-appointment funnels",
      "Email / Slack alerts",
    ],
  },
  {
    title: "Full Stack / Retainer",
    kicker: "Ongoing build & support",
    description:
      "Continuous builds, maintenance, and iteration for teams that want a reliable technical partner.",
    bullets: [
      "Ongoing feature builds",
      "Site & workflow maintenance",
      "Priority support",
      "Monthly strategy call",
    ],
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discover",
    description:
      "A free call to understand your goals, the problem, and what success looks like — before any commitment.",
  },
  {
    step: "02",
    title: "Design & Build",
    description:
      "I draft the plan, show you the direction, then build with regular updates so nothing surprises you.",
  },
  {
    step: "03",
    title: "Launch",
    description:
      "Deployed, tested, and live. Everything is wired up, documented, and handed over clean.",
  },
  {
    step: "04",
    title: "Support",
    description:
      "Revisions, tweaks, and maintenance after launch. You're not left on your own.",
  },
];

type Project = {
  name: string;
  category: string;
  description: string;
  stack: string[];
  highlights: string[];
  liveUrl: string;
  sourceUrl: string;
};

const PROJECTS: Project[] = [
  // TODO: replace with your real projects
  {
    name: "Project One",
    category: "E-Commerce",
    description:
      "One or two sentences describing the problem this project solved and who it was for.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    highlights: [
      "Key feature or outcome one",
      "Key feature or outcome two",
      "Key feature or outcome three",
    ],
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/your-username/project-one",
  },
  {
    name: "Project Two",
    category: "Automation",
    description:
      "One or two sentences describing the problem this project solved and who it was for.",
    stack: ["n8n", "Webhooks", "Postgres"],
    highlights: [
      "Key feature or outcome one",
      "Key feature or outcome two",
      "Key feature or outcome three",
    ],
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/your-username/project-two",
  },
  {
    name: "Project Three",
    category: "Web App",
    description:
      "One or two sentences describing the problem this project solved and who it was for.",
    stack: ["React", "Node.js", "TypeScript"],
    highlights: [
      "Key feature or outcome one",
      "Key feature or outcome two",
      "Key feature or outcome three",
    ],
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/your-username/project-three",
  },
];

const TESTIMONIALS = [
  // TODO: replace with real client quotes (only use quotes you have permission to publish)
  {
    quote:
      "Placeholder testimonial describing the outcome the client got and how the collaboration felt.",
    name: "Client Name",
    role: "Role, Company",
  },
  {
    quote:
      "Placeholder testimonial describing the outcome the client got and how the collaboration felt.",
    name: "Client Name",
    role: "Role, Company",
  },
];

const FAQ = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most sites and automations ship in 1–3 weeks depending on scope. You'll get a clear timeline after the discovery call, and I keep you updated as we go.",
  },
  {
    question: "What do I need to get started?",
    answer:
      "TODO: your answer — e.g. brand assets, a rough idea of the pages/flows you need, and access to any existing tools.",
  },
  {
    question: "Are revisions included?",
    answer: "TODO: your answer.",
  },
  {
    question: "What happens after launch?",
    answer: "TODO: your answer.",
  },
  {
    question: "Do you work with my existing tools?",
    answer: "TODO: your answer.",
  },
  {
    question: "How do pricing and payment work?",
    answer: "TODO: your answer.",
  },
];

// ── Small components ─────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm text-[#5B6168] mb-3">{children}</p>
  );
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H9M17 7V15" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Page ─────────────────────────────────────────────────────

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    type: "Web App",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire this up — e.g. POST to an n8n webhook, an API route, or a form service.
    console.log(formState);
    setSubmitted(true);
  }

  return (
    <main
      className={`${fraunces.variable} ${inter.variable} font-[family-name:var(--font-body)] bg-[#F3F4F1] text-[#14171A] antialiased`}
    >
      {/* ── Header ───────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F3F4F1]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="font-[family-name:var(--font-display)] text-lg italic text-[#14171A]"
          >
            {/* TODO: your name / brand */}
            Your Name
          </a>

          <nav className="hidden gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#5B6168] transition-colors hover:text-[#14171A]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-[#2F6F4F] px-5 py-2 text-sm text-white transition-colors hover:bg-[#255A40] md:inline-block"
          >
            Book a call
          </a>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="flex flex-col gap-1 border-t border-black/5 px-6 py-4 md:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2 text-sm text-[#5B6168]"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <p className="mb-6 text-sm text-[#2F6F4F]">
              {/* TODO: availability status */}
              Available for new builds
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-[13vw] leading-[0.95] tracking-tight md:text-[64px]">
              Full-stack apps and{" "}
              <span className="italic">automations</span> that ship.
            </h1>
            <p className="mt-6 max-w-md text-lg text-[#5B6168]">
              {/* TODO: your one-line pitch */}
              I build production web applications and the automation
              pipelines that run behind them.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-[#14171A] px-6 py-3 text-sm text-white transition-colors hover:bg-[#2F6F4F]"
              >
                Book a discovery call
              </a>
              <a
                href="#work"
                className="rounded-full border border-black/10 px-6 py-3 text-sm transition-colors hover:border-black/30"
              >
                View work
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-black/10 pt-6 md:border-t-0 md:border-l md:pl-8 md:pt-0">
            {/* TODO: your links */}
            <a href="https://github.com/your-username" className="flex items-center justify-between text-sm text-[#5B6168] hover:text-[#14171A]">
              GitHub <ExternalIcon />
            </a>
            <a href="https://linkedin.com/in/your-profile" className="flex items-center justify-between text-sm text-[#5B6168] hover:text-[#14171A]">
              LinkedIn <ExternalIcon />
            </a>
            <a href="/CV.pdf" className="flex items-center justify-between text-sm text-[#5B6168] hover:text-[#14171A]">
              Download CV <ExternalIcon />
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-black/10 pt-10 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-[family-name:var(--font-display)] text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-[#5B6168]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────── */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>Services</SectionLabel>
        <h2 className="font-[family-name:var(--font-display)] max-w-xl text-4xl leading-tight">
          What I can build for you
        </h2>
        <p className="mt-4 max-w-md text-[#5B6168]">
          Every offer is scoped around your goals. Let&apos;s talk about what
          you need on a free discovery call.
        </p>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-black/10 md:grid-cols-3">
          {SERVICES.map((service) => (
            <div key={service.title} className="bg-[#F3F4F1] p-8">
              <p className="text-sm text-[#2F6F4F]">{service.kicker}</p>
              <h3 className="font-[family-name:var(--font-display)] mt-2 text-2xl">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-[#5B6168]">{service.description}</p>
              <ul className="mt-5 space-y-2">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2 text-sm text-[#14171A]">
                    <span className="text-[#2F6F4F]">—</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────── */}
      <section id="process" className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>How I work</SectionLabel>
        <h2 className="font-[family-name:var(--font-display)] max-w-xl text-4xl leading-tight">
          A simple, no-surprises process
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-4">
          {PROCESS.map((item) => (
            <div key={item.step}>
              <p className="font-[family-name:var(--font-display)] text-[#2F6F4F]">
                {item.step}
              </p>
              <h3 className="mt-3 text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-[#5B6168]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────────── */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>Selected work</SectionLabel>
        <h2 className="font-[family-name:var(--font-display)] max-w-xl text-4xl leading-tight">
          Projects
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <div
              key={project.name}
              className="flex flex-col rounded-2xl border border-black/10 bg-white/40 p-6"
            >
              <p className="text-sm text-[#2F6F4F]">{project.category}</p>
              <h3 className="font-[family-name:var(--font-display)] mt-1 text-2xl">
                {project.name}
              </h3>
              <p className="mt-3 text-sm text-[#5B6168]">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-black/10 px-3 py-1 text-xs text-[#5B6168]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-4 space-y-1.5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm">
                    <span className="text-[#2F6F4F]">—</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-4 border-t border-black/10 pt-4 text-sm">
                <a
                  href={project.liveUrl}
                  className="flex items-center gap-1.5 text-[#14171A] hover:text-[#2F6F4F]"
                >
                  Live site <ExternalIcon />
                </a>
                <a
                  href={project.sourceUrl}
                  className="flex items-center gap-1.5 text-[#5B6168] hover:text-[#14171A]"
                >
                  Source <ExternalIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section id="testimonials" className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>Testimonials</SectionLabel>
        <h2 className="font-[family-name:var(--font-display)] max-w-xl text-4xl leading-tight">
          What clients say
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-2xl border border-black/10 bg-white/40 p-8"
            >
              <p className="font-[family-name:var(--font-display)] text-xl italic leading-snug">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 text-sm text-[#5B6168]">
                {t.name} — {t.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section id="faq" className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="font-[family-name:var(--font-display)] max-w-xl text-4xl leading-tight">
          Questions, answered
        </h2>

        <div className="mt-10 max-w-2xl divide-y divide-black/10 border-t border-b border-black/10">
          {FAQ.map((item, i) => {
            const open = openFaq === i;
            return (
              <div key={item.question}>
                <button
                  onClick={() => setOpenFaq(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={open}
                >
                  <span className="text-base">{item.question}</span>
                  <ChevronIcon open={open} />
                </button>
                {open && (
                  <p className="pb-5 text-sm text-[#5B6168]">{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────── */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionLabel>Let&apos;s build something</SectionLabel>
            <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight">
              Tell me about your project
            </h2>
            <p className="mt-4 max-w-sm text-[#5B6168]">
              Tell me about the product, the workflow, or the problem
              you&apos;re trying to solve. I&apos;ll reply within one
              business day.
            </p>

            <ul className="mt-8 space-y-2 text-sm text-[#5B6168]">
              <li>— Free discovery call</li>
              <li>— Revisions included</li>
              <li>— Support after launch</li>
            </ul>

            <div className="mt-8 space-y-1 text-sm">
              {/* TODO: your contact details */}
              <p>your@email.com</p>
              <p className="text-[#5B6168]">Remote · Worldwide</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm text-[#5B6168]" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full rounded-lg border border-black/10 bg-white/60 px-4 py-2.5 text-sm outline-none focus:border-[#2F6F4F]"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm text-[#5B6168]" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full rounded-lg border border-black/10 bg-white/60 px-4 py-2.5 text-sm outline-none focus:border-[#2F6F4F]"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm text-[#5B6168]" htmlFor="type">
                Project type
              </label>
              <select
                id="type"
                value={formState.type}
                onChange={(e) => setFormState({ ...formState, type: e.target.value })}
                className="w-full rounded-lg border border-black/10 bg-white/60 px-4 py-2.5 text-sm outline-none focus:border-[#2F6F4F]"
              >
                <option>Web App</option>
                <option>Automation</option>
                <option>Full Stack / Retainer</option>
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-sm text-[#5B6168]" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full rounded-lg border border-black/10 bg-white/60 px-4 py-2.5 text-sm outline-none focus:border-[#2F6F4F]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#14171A] px-6 py-3 text-sm text-white transition-colors hover:bg-[#2F6F4F]"
            >
              Send message
            </button>

            {submitted && (
              <p className="text-sm text-[#2F6F4F]">
                Thanks — got your message. I&apos;ll be in touch soon.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="border-t border-black/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-[family-name:var(--font-display)] italic">
              Your Name {/* TODO */}
            </p>
            <p className="text-sm text-[#5B6168]">
              Full-Stack Developer & Automation Engineer {/* TODO */}
            </p>
          </div>

          <p className="text-sm text-[#5B6168]">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}