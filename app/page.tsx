"use client";

import { useEffect, useState } from "react";
import { Inter, Space_Grotesk } from "next/font/google";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const CAL_LINK = "https://cal.com/code-blue";
const GITHUB_LINK = "https://github.com/affanatiff";
const EMAILS = ["affan@codeblue.sbs", "shaheer@codeblue.sbs"];

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
      "We build practical AI-powered systems that remove repetitive work and connect the tools your business already uses.",
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
      "We map the workflow, configure the integrations, build the automation, and test each part before connecting everything together.",
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

type Project = {
  number: string;
  category: string;
  title: string;
  trigger: string;
  stat: string;
  description: string;
  stack: string[];
  features: string[];
  pipeline: string[];
  payload: Record<string, unknown>;
  jsonFile: string;
};

const PROJECTS: Project[] = [
  {
    number: "01",
    category: "AI Lead Generation",
    title: "Lead Sourcing & Enrichment",
    trigger: "Webhook / New Lead",
    stat: "⚡ Qualifies in seconds",
    description:
      "An automated pipeline designed to collect leads, enrich company information, qualify prospects, and organize the results for outreach.",
    stack: ["n8n", "APIs", "Google Sheets", "AI"],
    features: [
      "Automated lead intake",
      "Company enrichment",
      "Lead qualification",
      "Structured output",
    ],
    pipeline: [
      "Webhook — New Lead",
      "Normalize Lead Fields",
      "Enrich Company Data",
      "AI Qualification Score",
      "Route: Qualified / Unqualified",
      "Slack Alert to Sales",
    ],
    payload: {
      event: "lead.captured",
      receivedAt: "2026-09-12T09:14:00Z",
      lead: {
        fullName: "Jordan Reyes",
        email: "jordan@northfieldlogistics.com",
        company: "Northfield Logistics",
        source: "Webform",
      },
      enrichment: {
        industry: "Freight & Logistics",
        employees: 85,
        website: "northfieldlogistics.com",
      },
      qualification: { score: 82, status: "Qualified" },
    },
    jsonFile: "/n8n/lead-sourcing-enrichment.json",
  },
  {
    number: "02",
    category: "AI Chatbot",
    title: "Telegram AI Ordering Assistant",
    trigger: "Telegram / New Message",
    stat: "💬 Books orders in chat",
    description:
      "A conversational ordering workflow designed to manage customer messages, collect order information, and maintain pending order states.",
    stack: ["n8n", "Telegram", "AI", "Database"],
    features: [
      "Conversational ordering",
      "Customer identification",
      "Pending order management",
      "Automated responses",
    ],
    pipeline: [
      "Telegram Trigger",
      "Identify Customer",
      "AI Agent — Order Intake",
      "Upsert Pending Order",
      "Confirm or Ask Follow-up",
    ],
    payload: {
      event: "telegram.message",
      chatId: 5839201,
      customer: {
        name: "Maria Santos",
        phone: "+63 917 555 0132",
        returning: true,
      },
      order: {
        items: [
          { name: "Iced Latte", qty: 2 },
          { name: "Blueberry Muffin", qty: 1 },
        ],
        status: "pending_confirmation",
      },
    },
    jsonFile: "/n8n/telegram-ai-ordering-assistant.json",
  },
  {
    number: "03",
    category: "E-Commerce Automation",
    title: "Shopify Customer Workflow",
    trigger: "Shopify / Order Created",
    stat: "🛒 Zero-touch fulfillment ops",
    description:
      "An automation concept connecting store activity with customer communication and internal business processes.",
    stack: ["Shopify", "n8n", "Webhooks", "Email"],
    features: [
      "Webhook-based triggers",
      "Customer data processing",
      "Automated notifications",
      "Workflow logging",
    ],
    pipeline: [
      "Shopify Trigger — Order Created",
      "Extract Customer & Order Data",
      "Update Internal CRM",
      "Send Confirmation Email",
      "Notify VIP Team if High-Value",
    ],
    payload: {
      event: "orders/create",
      orderId: "#SHP-10432",
      customerEmail: "hello@brightleafstudio.com",
      orderTotal: 264.5,
      currency: "USD",
      lineItems: [{ title: "Studio Lighting Kit", quantity: 1 }],
    },
    jsonFile: "/n8n/shopify-customer-workflow.json",
  },
  {
    number: "04",
    category: "Lead Qualification",
    title: "Lead Qualification Pipeline",
    trigger: "Form / New Submission",
    stat: "📊 Scores & routes instantly",
    description:
      "A structured workflow that receives lead information, evaluates qualification criteria, assigns relevant data, and routes the result.",
    stack: ["n8n", "Forms", "Google Sheets", "AI"],
    features: [
      "Lead intake",
      "Qualification logic",
      "Lead scoring",
      "Automated routing",
    ],
    pipeline: [
      "Form Submission Trigger",
      "Assign Criteria Weights",
      "Calculate Total Score",
      "Route by Tier (Hot / Warm / Cold)",
      "Notify Sales or Archive",
    ],
    payload: {
      event: "form.submitted",
      fullName: "Devon Clarke",
      budgetScore: 30,
      urgencyScore: 25,
      fitScore: 28,
      totalScore: 83,
      tier: "Hot",
    },
    jsonFile: "/n8n/lead-qualification-pipeline.json",
  },
];

const AUTOMATIONS = [
  {
    number: "01",
    title: "Lead Generation",
    description: "Capture → enrich → qualify → score → store → notify",
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
    description: "Order → process → update → notify → record",
    tools: ["Shopify", "Webhooks", "n8n", "Email"],
  },
];

const EXPERIENCE = [
  {
    period: "CURRENT",
    title: "AI Automation & n8n",
    company: "CodeBlue",
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

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function BracesIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M8 3a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2" />
      <path d="M16 3a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.53-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [modal, setModal] = useState<{
    type: "demo" | "payload";
    index: number;
  } | null>(null);

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setModal(null);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  function handleContactSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const details = String(data.get("details") || "").trim();

    const subject = encodeURIComponent(
      `New project inquiry${name ? ` from ${name}` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${name || "-"}\nEmail: ${email || "-"}\n\n${details || "-"}`
    );

    window.location.href = `mailto:${EMAILS.join(
      ","
    )}?subject=${subject}&body=${body}`;
  }

  const activeProject = modal ? PROJECTS[modal.index] : null;

  return (
    <main
      className={`${display.variable} ${body.variable} min-h-screen bg-bg-primary text-text-primary`}
    >
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-border-color bg-bg-primary/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a
            href="#top"
            className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight"
          >
            Code<span className="text-accent">Blue</span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium opacity-65 transition hover:opacity-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#projects"
              className="rounded-full border border-border-color px-4 py-2 text-sm font-medium transition hover:border-text-primary hover:bg-text-primary hover:text-bg-primary"
            >
              View Work
            </a>

            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-glow flex items-center gap-2 rounded-full bg-text-primary px-4 py-2 text-sm font-medium text-bg-primary transition hover:bg-accent hover:text-white"
            >
              Book a Free Call
              <ArrowUpRight />
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-border-color p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-border-color px-5 py-5 md:hidden">
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
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-text-primary px-5 py-3 text-center text-sm font-medium text-bg-primary"
              >
                Book a Free Call
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
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
            <div className="mb-7 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-sm font-medium uppercase tracking-[0.18em] opacity-50">
                We build systems that work for you.
              </span>
            </div>

            <h1 className="max-w-5xl font-[family-name:var(--font-display)] text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              AI Automation
              <br />& <span className="text-accent">n8n Specialists</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 opacity-60 sm:text-xl">
              We build AI-powered workflows, n8n automations, chatbots, and
              business systems that eliminate repetitive work and connect the
              tools your business already uses.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
                className="flex items-center justify-center gap-2 rounded-full border border-border-color px-6 py-3.5 text-sm font-semibold transition hover:border-text-primary"
              >
                View My Projects
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm opacity-50">
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

          <div className="flex items-end lg:justify-end">
            <div className="w-full max-w-md rounded-3xl border border-border-color bg-card-bg p-6 shadow-lg">
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

      {/* STATS */}
      <section className="border-b border-border-color">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 lg:grid-cols-4 lg:px-8">
          {[
            ["n8n", "Workflow automation"],
            ["AI", "Intelligent processes"],
            ["API", "Connected systems"],
            ["24/7", "Automated execution"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border-r border-border-color px-5 py-8 first:pl-0 last:border-r-0 lg:px-8"
            >
              <div className="font-[family-name:var(--font-display)] text-3xl font-bold">
                {value}
              </div>
              <div className="mt-1 text-sm opacity-50">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-b border-border-color">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Services
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
              What we can build
              <br />
              for you.
            </h2>

            <p className="mt-6 text-lg leading-8 opacity-55">
              Practical automation systems designed around the way your
              business actually works.
            </p>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service.number}
                className="group rounded-3xl border border-border-color bg-card-bg p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-accent">
                    {service.number}
                  </span>
                  <ArrowUpRight />
                </div>

                <p className="mt-12 text-sm opacity-45">{service.eyebrow}</p>

                <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 opacity-55">
                  {service.description}
                </p>

                <div className="mt-7 space-y-3 border-t border-border-color pt-6">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                    >
                      <span className="text-accent">
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
      <section className="border-b border-border-color">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              How we work
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
              A simple,
              <br />
              no-surprises process.
            </h2>
          </div>

          <div className="mt-16 grid gap-0 border-t border-border-color lg:grid-cols-4">
            {PROCESS.map((step) => (
              <div
                key={step.number}
                className="border-b border-border-color py-8 lg:border-b-0 lg:border-r lg:px-7 lg:first:pl-0 lg:last:border-r-0"
              >
                <div className="text-sm font-semibold text-accent">
                  {step.number}
                </div>

                <h3 className="mt-8 font-[family-name:var(--font-display)] text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 opacity-55">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-b border-border-color">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Selected Work
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
                Projects
              </h2>
            </div>

            <p className="max-w-md opacity-55">
              Sample automation and AI workflow builds. Demos, payloads, and
              workflow exports below are illustrative — built to show how
              CodeBlue structures a pipeline end to end.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {PROJECTS.map((project, index) => (
              <article key={project.number} className="group">
                <div className="aspect-[16/10] overflow-hidden rounded-3xl border border-border-color bg-card-bg p-5">
                  <div className="flex h-full flex-col rounded-2xl bg-bg-primary/50 p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs opacity-40">
                        {project.trigger}
                      </span>
                      <span className="text-xs text-accent">
                        {project.number}
                      </span>
                    </div>

                    <div className="my-auto space-y-3">
                      <div className="text-sm font-medium opacity-70">
                        {project.stat}
                      </div>

                      <div className="grid grid-cols-3 gap-2 pt-2">
                        <div className="h-14 rounded-lg bg-accent/80" />
                        <div className="h-14 rounded-lg bg-text-primary/10" />
                        <div className="h-14 rounded-lg bg-text-primary/10" />
                      </div>
                    </div>

                    <div className="text-xs opacity-30">n8n · AI · APIs</div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-sm text-accent">
                    {project.category}
                  </div>

                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-3 leading-7 opacity-55">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border-color px-3 py-1 text-xs opacity-65"
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
                        <span className="text-accent">
                          <Check />
                        </span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-border-color pt-6">
                    <button
                      type="button"
                      onClick={() => setModal({ type: "demo", index })}
                      className="flex items-center gap-2 rounded-full border border-border-color px-4 py-2 text-xs font-semibold transition hover:border-accent hover:text-accent"
                    >
                      <PlayIcon />
                      View Demo
                    </button>

                    <button
                      type="button"
                      onClick={() => setModal({ type: "payload", index })}
                      className="flex items-center gap-2 rounded-full border border-border-color px-4 py-2 text-xs font-semibold transition hover:border-accent hover:text-accent"
                    >
                      <BracesIcon />
                      Inspect Sample Payload
                    </button>

                    <a
                      href={GITHUB_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-border-color px-4 py-2 text-xs font-semibold transition hover:border-accent hover:text-accent"
                    >
                      <GithubIcon />
                      View on GitHub
                    </a>

                    <a
                      href={project.jsonFile}
                      download
                      className="flex items-center gap-2 rounded-full bg-text-primary px-4 py-2 text-xs font-semibold text-bg-primary transition hover:bg-accent hover:text-white"
                    >
                      <DownloadIcon />
                      Download JSON
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AUTOMATIONS */}
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

      {/* EXPERIENCE */}
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

      {/* TESTIMONIALS */}
      <section className="border-b border-border-color">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Testimonials
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
              Client feedback
              <br />
              goes here.
            </h2>

            <p className="mt-6 text-lg leading-8 opacity-55">
              Once we have real client testimonials, we&apos;ll place them
              here exactly like the reference portfolio. No fake
              testimonials.
            </p>
          </div>

          <div className="mt-12 rounded-3xl border border-dashed border-border-color bg-card-bg p-8 text-center lg:p-16">
            <div className="mx-auto max-w-xl">
              <div className="text-4xl">&ldquo;</div>
              <p className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold">
                Your first client testimonial will appear here.
              </p>
              <p className="mt-3 text-sm opacity-45">
                Replace this section when you have verified client feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border-color">
        <div className="mx-auto max-w-4xl px-5 py-24 lg:py-32">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              FAQ
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
              Questions,
              <br />
              answered.
            </h2>
          </div>

          <div className="mt-14 border-t border-border-color">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-border-color"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-medium">{faq.question}</span>

                    <ChevronDown open={isOpen} />
                  </button>

                  {isOpen && (
                    <div className="pb-6 pr-10 text-sm leading-7 opacity-55">
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Contact
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold leading-none tracking-[-0.05em] sm:text-7xl">
                Let&apos;s build
                <br />
                something.
              </h2>

              <p className="mt-7 max-w-md text-lg leading-8 opacity-55">
                Tell us about the workflow, business problem, or automation
                you have in mind. We can figure out the best approach
                together.
              </p>

              <div className="mt-10 space-y-3 text-sm">
                {EMAILS.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="block transition hover:text-accent"
                  >
                    {email}
                  </a>
                ))}

                <p className="pt-1 opacity-50">Remote · Worldwide</p>

                <a
                  href={CAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 pt-1 font-medium"
                >
                  Prefer to talk it through? Book a free call
                  <ArrowUpRight />
                </a>
              </div>
            </div>

            <form
              onSubmit={handleContactSubmit}
              className="rounded-3xl border border-border-color bg-card-bg p-6 sm:p-8"
            >
              <div className="grid gap-6">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-border-color bg-bg-primary px-4 py-3.5 outline-none transition placeholder:opacity-30 focus:border-accent"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    className="w-full rounded-xl border border-border-color bg-bg-primary px-4 py-3.5 outline-none transition placeholder:opacity-30 focus:border-accent"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Project Details
                  </label>
                  <textarea
                    name="details"
                    rows={4}
                    placeholder="Describe the workflow, business process, or tools you want to automate..."
                    className="w-full rounded-xl border border-border-color bg-bg-primary px-4 py-3.5 outline-none transition placeholder:opacity-30 focus:border-accent"
                  />
                </div>

                <button
                  type="submit"
                  className="cta-glow flex w-full items-center justify-center gap-2 rounded-full bg-text-primary py-4 text-sm font-semibold text-bg-primary transition hover:bg-accent hover:text-white"
                >
                  Send Message
                  <ArrowUpRight />
                </button>
              </div>
            </form>
          </div>

          <div className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-border-color pt-8 text-xs opacity-50 sm:flex-row">
            <p>© {new Date().getFullYear()} CodeBlue. All rights reserved.</p>
            <p>Designed for AI Automation & n8n Systems</p>
          </div>
        </div>
      </section>

      {/* PROJECT MODAL */}
      {activeProject && modal && (
        <div
          className="modal-overlay fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          onClick={() => setModal(null)}
        >
          <div
            className="modal-panel max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-border-color bg-card-bg p-6 sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent">
                  {modal.type === "demo" ? "Demo Preview" : "Sample Payload"}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold">
                  {activeProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setModal(null)}
                aria-label="Close"
                className="rounded-full border border-border-color p-2 transition hover:border-accent hover:text-accent"
              >
                <XIcon />
              </button>
            </div>

            {modal.type === "demo" ? (
              <div className="mt-6">
                <p className="mb-6 text-sm opacity-55">
                  {activeProject.trigger} · {activeProject.stat}
                </p>

                <div className="space-y-0">
                  {activeProject.pipeline.map((step, stepIndex) => (
                    <div key={step} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <span className="flow-dot flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-white">
                          {stepIndex + 1}
                        </span>
                        {stepIndex < activeProject.pipeline.length - 1 && (
                          <span className="my-1 h-8 w-px flex-1 bg-border-color" />
                        )}
                      </div>
                      <div className="pb-6 pt-1 text-sm font-medium">
                        {step}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-2 text-xs opacity-40">
                  This is an illustrative pipeline diagram of how the
                  automation runs, not a live product demo.
                </p>
              </div>
            ) : (
              <div className="mt-6">
                <pre className="max-h-96 overflow-auto rounded-2xl bg-bg-primary p-4 text-xs leading-6 opacity-80">
                  {JSON.stringify(activeProject.payload, null, 2)}
                </pre>
                <p className="mt-3 text-xs opacity-40">
                  Sample data shown for illustration only — not real customer
                  information.
                </p>

                <a
                  href={activeProject.jsonFile}
                  download
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-text-primary px-4 py-2 text-xs font-semibold text-bg-primary transition hover:bg-accent hover:text-white"
                >
                  <DownloadIcon />
                  Download full workflow JSON
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
