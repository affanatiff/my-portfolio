"use client";

import { useState } from "react";
import { Inter, Space_Grotesk } from "next/font/google";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Automations", href: "#automations" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    number: "01",
    eyebrow: "Workflows that run themselves",
    title: "AI Automation",
    description:
      "I build practical AI-powered systems that remove repetitive work and connect the tools your business already uses.",
    features: [
      "AI-powered workflows",
      "Business process automation",
      "API integrations",
      "Human-in-the-loop systems",
    ],
  },
  {
    number: "02",
    eyebrow: "Built with n8n",
    title: "n8n Automation",
    description:
      "Custom n8n workflows for lead generation, customer support, data processing, notifications, and internal operations.",
    features: [
      "Webhook & API workflows",
      "CRM & Google Sheets sync",
      "Lead qualification",
      "Email & Telegram automation",
    ],
  },
  {
    number: "03",
    eyebrow: "AI-powered experiences",
    title: "AI Chatbots & Agents",
    description:
      "Useful AI assistants connected to real business data, APIs, databases, and communication channels.",
    features: [
      "Telegram chatbots",
      "AI customer support",
      "Order & booking flows",
      "Knowledge-based assistants",
    ],
  },
];

const PROCESS = [
  {
    number: "01",
    title: "Discover",
    description:
      "We identify the repetitive process, understand your existing tools, and define what the automation needs to accomplish.",
  },
  {
    number: "02",
    title: "Design & Build",
    description:
      "I map the workflow, configure the integrations, build the automation, and test each part before connecting everything together.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "The finished workflow is deployed, tested with real scenarios, and documented so you understand exactly how it works.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "After launch, workflows can be improved, expanded, monitored, and connected to additional tools as your business grows.",
  },
];

const PROJECTS = [
  {
    number: "01",
    category: "AI Lead Generation",
    title: "Lead Sourcing & Enrichment",
    description:
      "An automated pipeline designed to collect leads, enrich company information, qualify prospects, and organize the results for outreach.",
    stack: ["n8n", "APIs", "Google Sheets", "AI"],
    features: [
      "Automated lead intake",
      "Company enrichment",
      "Lead qualification",
      "Structured output",
    ],
  },
  {
    number: "02",
    category: "AI Chatbot",
    title: "Telegram AI Ordering Assistant",
    description:
      "A conversational ordering workflow designed to manage customer messages, collect order information, and maintain pending order states.",
    stack: ["n8n", "Telegram", "AI", "Database"],
    features: [
      "Conversational ordering",
      "Customer identification",
      "Pending order management",
      "Automated responses",
    ],
  },
  {
    number: "03",
    category: "E-Commerce Automation",
    title: "Shopify Customer Workflow",
    description:
      "An automation concept connecting store activity with customer communication and internal business processes.",
    stack: ["Shopify", "n8n", "Webhooks", "Email"],
    features: [
      "Webhook-based triggers",
      "Customer data processing",
      "Automated notifications",
      "Workflow logging",
    ],
  },
  {
    number: "04",
    category: "Lead Qualification",
    title: "Lead Qualification Pipeline",
    description:
      "A structured workflow that receives lead information, evaluates qualification criteria, assigns relevant data, and routes the result.",
    stack: ["n8n", "Forms", "Google Sheets", "AI"],
    features: [
      "Lead intake",
      "Qualification logic",
      "Lead scoring",
      "Automated routing",
    ],
  },
];

const AUTOMATIONS = [
  {
    number: "01",
    title: "Lead Generation",
    description:
      "Capture → enrich → qualify → score → store → notify",
    tools: ["Forms", "n8n", "APIs", "Google Sheets"],
  },
  {
    number: "02",
    title: "Customer Support",
    description:
      "Message → classify → generate response → human review → reply",
    tools: ["Email", "AI", "n8n", "Sheets"],
  },
  {
    number: "03",
    title: "E-Commerce",
    description:
      "Order → process → update → notify → record",
    tools: ["Shopify", "Webhooks", "n8n", "Email"],
  },
];

const EXPERIENCE = [
  {
    period: "CURRENT",
    title: "AI Automation & n8n",
    company: "Independent Projects",
    description:
      "Building workflow automations, AI-powered processes, API integrations, chatbots, and business systems using n8n.",
  },
  {
    period: "FOCUS",
    title: "Business Automation",
    company: "AI + No-Code / Low-Code",
    description:
      "Focused on turning repetitive manual processes into reliable workflows that businesses can operate with less manual effort.",
  },
  {
    period: "BACKGROUND",
    title: "Business & Entrepreneurship",
    company: "Business Administration",
    description:
      "Business background combined with practical automation work, allowing technical solutions to be approached from a business-process perspective.",
  },
];

const FAQS = [
  {
    question: "What can you automate?",
    answer:
      "Almost any repetitive process involving structured data and digital tools can potentially be automated. Examples include lead generation, customer support, notifications, data entry, reporting, CRM updates, order processing, and internal workflows.",
  },
  {
    question: "Do I need to change my existing tools?",
    answer:
      "Usually not. The goal is to connect the tools you already use. n8n can work with APIs, webhooks, Google Sheets, databases, email platforms, CRMs, Telegram, Shopify, and many other services.",
  },
  {
    question: "Can AI be included in the automation?",
    answer:
      "Yes. AI can be used for classification, extraction, summarization, lead qualification, response generation, document processing, and other tasks where normal fixed rules are not enough.",
  },
  {
    question: "Can you build an automation without an AI Agent?",
    answer:
      "Yes. Many reliable automations are actually better built using normal n8n nodes, APIs, conditions, code, databases, and structured logic instead of an AI Agent.",
  },
  {
    question: "Will I be able to understand and manage the workflow?",
    answer:
      "Yes. The workflow should be structured clearly so you can understand what triggers it, what happens at each stage, where data is stored, and where errors are handled.",
  },
  {
    question: "Can an existing workflow be improved?",
    answer:
      "Yes. Existing n8n workflows can be reviewed, debugged, simplified, expanded, and connected to additional services.",
  },
];

function ArrowUpRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function Check() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 12l4 4L19 6" />
    </svg>
  );
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main
      className={`${display.variable} ${body.variable} min-h-screen bg-[#f7f7f4] text-[#111111]`}
    >
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f7f4]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a
            href="#top"
            className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight"
          >
            AA<span className="text-blue-600">.</span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-black/65 transition hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#contact"
              className="rounded-full border border-black/15 px-4 py-2 text-sm font-medium transition hover:border-black hover:bg-black hover:text-white"
            >
              Check My CV
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
            >
              Book a Free Call
              <ArrowUpRight />
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-black/10 p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-black/10 px-5 py-5 md:hidden">
            <nav className="flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-black px-5 py-3 text-center text-sm font-medium text-white"
              >
                Book a Free Call
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="border-b border-black/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.35fr_.65fr] lg:px-8 lg:py-32">
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              <span className="text-sm font-medium uppercase tracking-[0.18em] text-black/50">
                AI Automation & n8n Specialist
              </span>
            </div>

            <h1 className="max-w-5xl font-[family-name:var(--font-display)] text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              I build systems
              <br />
              that <span className="text-blue-600">work for you.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60 sm:text-xl">
              I build AI-powered workflows, n8n automations, chatbots, and
              business systems that eliminate repetitive work and connect the
              tools your business already uses.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                Book a Free Discovery Call
                <ArrowUpRight />
              </a>

              <a
                href="#projects"
                className="flex items-center justify-center gap-2 rounded-full border border-black/15 px-6 py-3.5 text-sm font-semibold transition hover:border-black"
              >
                View My Projects
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-black/50">
              <a href="#" className="transition hover:text-black">
                GitHub ↗
              </a>
              <a href="#" className="transition hover:text-black">
                LinkedIn ↗
              </a>
              <a href="#" className="transition hover:text-black">
                Upwork ↗
              </a>
            </div>
          </div>

          <div className="flex items-end lg:justify-end">
            <div className="w-full max-w-md rounded-3xl border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-medium">Automation System</span>
                <span className="flex items-center gap-2 text-xs text-green-600">
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
                    className="flex items-center gap-3 rounded-xl border border-black/10 bg-[#f7f7f4] p-3"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-black text-xs text-white">
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl bg-blue-600 p-4 text-white">
                <div className="text-xs uppercase tracking-wider text-white/60">
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

      {/* STATS */}
      <section className="border-b border-black/10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 lg:grid-cols-4 lg:px-8">
          {[
            ["n8n", "Workflow automation"],
            ["AI", "Intelligent processes"],
            ["API", "Connected systems"],
            ["24/7", "Automated execution"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border-r border-black/10 px-5 py-8 first:pl-0 last:border-r-0 lg:px-8"
            >
              <div className="font-[family-name:var(--font-display)] text-3xl font-bold">
                {value}
              </div>
              <div className="mt-1 text-sm text-black/50">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Services
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
              What I can build
              <br />
              for you.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Practical automation systems designed around the way your
              business actually works.
            </p>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service.number}
                className="group rounded-3xl border border-black/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600">
                    {service.number}
                  </span>
                  <ArrowUpRight />
                </div>

                <p className="mt-12 text-sm text-black/45">
                  {service.eyebrow}
                </p>

                <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-black/55">
                  {service.description}
                </p>

                <div className="mt-7 space-y-3 border-t border-black/10 pt-6">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                    >
                      <span className="text-blue-600">
                        <Check />
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              How I work
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
              A simple,
              <br />
              no-surprises process.
            </h2>
          </div>

          <div className="mt-16 grid gap-0 border-t border-black/10 lg:grid-cols-4">
            {PROCESS.map((step) => (
              <div
                key={step.number}
                className="border-b border-black/10 py-8 lg:border-b-0 lg:border-r lg:px-7 lg:first:pl-0 lg:last:border-r-0"
              >
                <div className="text-sm font-semibold text-blue-600">
                  {step.number}
                </div>

                <h3 className="mt-8 font-[family-name:var(--font-display)] text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-black/55">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Selected Work
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
                Projects
              </h2>
            </div>

            <p className="max-w-md text-black/55">
              A selection of automation and AI workflow concepts. Replace
              these descriptions with your final project case studies.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <article key={project.number} className="group">
                <div className="aspect-[16/10] overflow-hidden rounded-3xl border border-black/10 bg-[#111] p-5">
                  <div className="flex h-full flex-col rounded-2xl bg-[#202020] p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/40">
                        {project.category}
                      </span>
                      <span className="text-xs text-blue-400">
                        {project.number}
                      </span>
                    </div>

                    <div className="my-auto space-y-3">
                      <div className="h-3 w-3/4 rounded bg-white/15" />
                      <div className="h-3 w-1/2 rounded bg-white/10" />

                      <div className="grid grid-cols-3 gap-2 pt-4">
                        <div className="h-14 rounded-lg bg-blue-600/80" />
                        <div className="h-14 rounded-lg bg-white/10" />
                        <div className="h-14 rounded-lg bg-white/10" />
                      </div>
                    </div>

                    <div className="text-xs text-white/30">
                      n8n · AI · APIs
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-sm text-blue-600">
                    {project.category}
                  </div>

                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-3 leading-7 text-black/55">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-black/10 px-3 py-1 text-xs text-black/55"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 grid gap-2 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm"
                      >
                        <span className="text-blue-600">
                          <Check />
                        </span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AUTOMATIONS */}
      <section id="automations" className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Automation
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
              Workflows that
              <br />
              keep moving.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Instead of manually moving information from one application to
              another, let the workflow handle the repetitive steps.
            </p>
          </div>

          <div className="mt-16 space-y-4">
            {AUTOMATIONS.map((automation) => (
              <div
                key={automation.number}
                className="group grid gap-6 rounded-3xl border border-black/10 bg-white p-6 transition hover:border-blue-600/40 lg:grid-cols-[80px_1fr_1fr_auto] lg:items-center"
              >
                <div className="text-sm font-semibold text-blue-600">
                  {automation.number}
                </div>

                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold">
                    {automation.title}
                  </h3>
                </div>

                <div>
                  <p className="font-mono text-sm text-black/55">
                    {automation.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {automation.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-[#f1f1ed] px-3 py-1 text-xs"
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

      {/* EXPERIENCE */}
      <section id="experience" className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Experience
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
              Business background.
              <br />
              Automation focus.
            </h2>
          </div>

          <div className="mt-16 border-t border-black/10">
            {EXPERIENCE.map((item) => (
              <div
                key={item.title}
                className="grid gap-5 border-b border-black/10 py-8 lg:grid-cols-[180px_1fr_1.3fr] lg:gap-10"
              >
                <div className="text-sm font-semibold text-blue-600">
                  {item.period}
                </div>

                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-black/45">
                    {item.company}
                  </p>
                </div>

                <p className="leading-7 text-black/55">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Testimonials
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
              Client feedback
              <br />
              goes here.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Once you have real client testimonials, we can place them here
              exactly like the reference portfolio. No fake testimonials.
            </p>
          </div>

          <div className="mt-12 rounded-3xl border border-dashed border-black/20 bg-white p-8 text-center lg:p-16">
            <div className="mx-auto max-w-xl">
              <div className="text-4xl">“</div>
              <p className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold">
                Your first client testimonial will appear here.
              </p>
              <p className="mt-3 text-sm text-black/45">
                Replace this section when you have verified client feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-4xl px-5 py-24 lg:py-32">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              FAQ
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
              Questions,
              <br />
              answered.
            </h2>
          </div>

          <div className="mt-14 border-t border-black/10">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div key={faq.question} className="border-b border-black/10">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-medium">{faq.question}</span>

                    <ChevronDown open={isOpen} />
                  </button>

                  {isOpen && (
                    <div className="pb-6 pr-10 text-sm leading-7 text-black/55">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Contact
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold leading-none tracking-[-0.05em] sm:text-7xl">
                Let&apos;s build
                <br />
                something.
              </h2>

              <p className="mt-7 max-w-md text-lg leading-8 text-black/55">
                Tell me about the workflow, business problem, or automation
                you have in mind. We can figure out the best approach
                together.
              </p>

              <div className="mt-10 space-y-4 text-sm">
                <a
                  href="mailto:YOUR_EMAIL@example.com"
                  className="block transition hover:text-blue-600"
                >
                  YOUR_EMAIL@example.com
                </a>

                <p className="text-black/50">Remote · Worldwide</p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-medium"
                >
                  Prefer Upwork? Hire me directly
                  <ArrowUpRight />
                </a>
              </div>
            </div>

            <form
              onSubmit={(event) => event.preventDefault()}
              className="rounded-3xl border border-black/10 bg-white p-6 sm:p-8"
            >
              <div className="grid gap-6">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-black/10 bg-[#f7f7f4] px-4 py-3.5 outline-none transition placeholder:text-black/30 focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-black/10 bg-[#f7f7f4] px-4 py-3.5 outline-none transition placeholder:text-black/30 focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Project Type
                  </label>

                  <select className="w-full rounded-xl border border-black/10 bg-[#f7f7f4] px-4 py-3.5 outline-none focus:border-blue-600">
                    <option>AI Automation</option>
                    <option>n8n Workflow</option>
                    <option>AI Chatbot</option>
                    <option>API Integration</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell me what you're trying to automate..."
                    className="w-full resize-none rounded-xl border border-black/10 bg-[#f7f7f4] px-4 py-3.5 outline-none transition placeholder:text-black/30 focus:border-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-full bg-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-600"
                >
                  Send Message
                  <ArrowUpRight />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <div className="font-[family-name:var(--font-display)] text-3xl font-bold">
                AA<span className="text-blue-600">.</span>
              </div>

              <p className="mt-2 text-sm text-black/50">
                AI Automation & n8n Specialist
              </p>
            </div>

            <div className="flex flex-wrap gap-5 text-sm text-black/50">
              <a href="#" className="hover:text-black">
                GitHub
              </a>
              <a href="#" className="hover:text-black">
                LinkedIn
              </a>
              <a href="#" className="hover:text-black">
                Upwork
              </a>
              <a href="#contact" className="hover:text-black">
                Contact
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-black/10 pt-6 text-xs text-black/40">
            © 2026 Affan Atif. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}