"use client";

import { useState } from "react";
import { Space_Grotesk, Inter } from "next/font/google";

/**
 * ────────────────────────────────────────────────────────────────
 *  AI / SaaS HOMEPAGE — single-file page.tsx
 *  Stack: Next.js (App Router) + TypeScript + Tailwind CSS
 *
 *  Original design — not a copy of any purchased/licensed template.
 *  General anatomy (hero → features → how it works → integrations →
 *  pricing → FAQ → CTA → footer) is standard across AI/SaaS sites.
 *
 *  Everywhere you see  // TODO:  is a spot to swap in your real
 *  product name, copy, pricing, and links.
 * ────────────────────────────────────────────────────────────────
 */

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

// ── Data ──────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
];

const FEATURES = [
  {
    title: "Automated workflows",
    description:
      "Connect your tools once, then let the platform handle the repetitive steps in between.",
  },
  {
    title: "Real-time insights",
    description:
      "See what's happening across every connected system from a single live dashboard.",
  },
  {
    title: "Custom AI agents",
    description:
      "Configure agents for specific tasks — support, lead routing, data entry — without writing code.",
  },
  {
    title: "Team collaboration",
    description:
      "Shared workspaces, roles, and audit history so everyone stays aligned on what changed.",
  },
  {
    title: "Enterprise-grade security",
    description:
      "SSO, granular permissions, and encryption at rest and in transit, by default.",
  },
  {
    title: "Open API",
    description:
      "Build on top of the platform with a documented REST API and webhooks.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Connect your tools",
    description: "Link your CRM, inbox, and existing apps in a few clicks.",
  },
  {
    number: "02",
    title: "Configure your agent",
    description: "Set the rules and triggers — no code required.",
  },
  {
    number: "03",
    title: "Go live",
    description: "Turn it on and watch the work happen in the background.",
  },
];

const INTEGRATIONS = [
  "Slack",
  "Gmail",
  "HubSpot",
  "Notion",
  "Zapier",
  "Salesforce",
  "Stripe",
  "Airtable",
]; // TODO: your real integrations

type Plan = {
  name: string;
  monthly: number;
  yearly: number;
  description: string;
  features: string[];
  highlighted?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Starter",
    monthly: 29,
    yearly: 24,
    description: "For individuals getting started.",
    features: ["1 workspace", "3 active agents", "Email support", "1,000 tasks / mo"],
  },
  {
    name: "Growth",
    monthly: 79,
    yearly: 65,
    description: "For small teams scaling up.",
    features: [
      "5 workspaces",
      "Unlimited agents",
      "Priority support",
      "20,000 tasks / mo",
      "API access",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthly: 199,
    yearly: 165,
    description: "For orgs with custom needs.",
    features: [
      "Unlimited workspaces",
      "SSO & audit logs",
      "Dedicated support",
      "Custom limits",
      "SLA",
    ],
  },
];

const FAQ = [
  {
    question: "Do I need to know how to code?",
    answer:
      "No. Agents and workflows are configured visually. An API is available if you want to go deeper.",
  },
  {
    question: "Can I change plans later?",
    answer: "Yes, upgrade or downgrade anytime — billing is prorated automatically.",
  },
  {
    question: "Is there a free trial?",
    answer: "TODO: your answer.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "TODO: your answer.",
  },
];

// ── Small components ─────────────────────────────────────────

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

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Page ─────────────────────────────────────────────────────

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [yearly, setYearly] = useState(true);

  return (
    <main
      className={`${display.variable} ${body.variable} font-[family-name:var(--font-body)] bg-[#FAFAF8] text-[#12131A] antialiased`}
    >
      {/* ── Header ───────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#FAFAF8]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-[family-name:var(--font-display)] text-lg font-bold">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#2D5BFF]" />
            {/* TODO: your product name */}
            Product Name
          </a>

          <nav className="hidden gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#5B5F6B] transition-colors hover:text-[#12131A]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="#" className="text-sm text-[#5B5F6B] hover:text-[#12131A]">
              Log in
            </a>
            <a
              href="#pricing"
              className="rounded-full bg-[#12131A] px-5 py-2 text-sm text-white transition-colors hover:bg-[#2D5BFF]"
            >
              Get started
            </a>
          </div>

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
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="py-2 text-sm text-[#5B5F6B]">
                {link.label}
              </a>
            ))}
            <a href="#pricing" onClick={() => setMenuOpen(false)} className="mt-2 rounded-full bg-[#12131A] px-5 py-2.5 text-center text-sm text-white">
              Get started
            </a>
          </div>
        )}
      </header>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 text-sm text-[#5B5F6B]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2D5BFF]" />
              {/* TODO */}
              New: custom agent builder
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Run your busywork on autopilot.
            </h1>
            <p className="mt-6 max-w-md text-lg text-[#5B5F6B]">
              {/* TODO: your one-line pitch */}
              Connect your tools, configure an agent, and let it handle the
              repetitive work while you focus on what matters.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="rounded-full bg-[#2D5BFF] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1E45D6]"
              >
                Start free trial
              </a>
              <a
                href="#how-it-works"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium transition-colors hover:border-black/30"
              >
                See how it works
              </a>
            </div>

            <p className="mt-4 text-sm text-[#8A8E99]">No credit card required</p>
          </div>

          {/* Product visual — mock chat/agent panel */}
          <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-2 border-b border-black/5 pb-4">
              <span className="h-2 w-2 rounded-full bg-[#FF6B6B]" />
              <span className="h-2 w-2 rounded-full bg-[#FFC24B]" />
              <span className="h-2 w-2 rounded-full bg-[#4CD97B]" />
              <span className="ml-3 text-xs text-[#8A8E99]">agent — lead-router</span>
            </div>
            <div className="space-y-3 py-4 text-sm">
              <div className="rounded-lg bg-[#F1F2F4] px-3 py-2 text-[#5B5F6B]">
                New lead from contact form: Jordan M.
              </div>
              <div className="rounded-lg bg-[#EAF0FF] px-3 py-2 text-[#12131A]">
                Matched to "Enterprise" segment → routed to sales queue
              </div>
              <div className="rounded-lg bg-[#F1F2F4] px-3 py-2 text-[#5B5F6B]">
                Slack notification sent to #sales-leads
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-[#EAFBF1] px-3 py-2 text-[#1E8A4C]">
                <CheckIcon /> Task completed in 1.2s
              </div>
            </div>
          </div>
        </div>

        {/* Logo strip */}
        <div className="mt-16 border-t border-black/10 pt-8">
          <p className="mb-6 text-sm text-[#8A8E99]">Trusted by teams at</p>
          <div className="flex flex-wrap gap-x-10 gap-y-3 text-[#B9BCC4]">
            {["Acme", "Northwind", "Globex", "Initech", "Umbrella"].map((n) => (
              <span key={n} className="font-[family-name:var(--font-display)] text-lg font-bold">
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────── */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-xl">
          <p className="mb-3 text-sm text-[#2D5BFF]">Features</p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-tight">
            Everything you need to automate the busywork
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="bg-[#FAFAF8] p-8">
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-[#5B5F6B]">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────── */}
      <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-xl">
          <p className="mb-3 text-sm text-[#2D5BFF]">How it works</p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-tight">
            Live in three steps
          </h2>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.number}>
              <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-[#2D5BFF]">
                {step.number}
              </p>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-[#5B5F6B]">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Integrations ─────────────────────────────────── */}
      <section id="integrations" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-xl">
          <p className="mb-3 text-sm text-[#2D5BFF]">Integrations</p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-tight">
            Works with the tools you already use
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {INTEGRATIONS.map((name) => (
            <div
              key={name}
              className="rounded-xl border border-black/10 bg-white px-4 py-6 text-center text-sm font-medium"
            >
              {name}
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────── */}
      <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-xl">
          <p className="mb-3 text-sm text-[#2D5BFF]">Pricing</p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-tight">
            Simple pricing that scales with you
          </h2>
        </div>

        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white p-1">
          <button
            onClick={() => setYearly(false)}
            className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
              !yearly ? "bg-[#12131A] text-white" : "text-[#5B5F6B]"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
              yearly ? "bg-[#12131A] text-white" : "text-[#5B5F6B]"
            }`}
          >
            Yearly — save ~20%
          </button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-[#2D5BFF] bg-white shadow-[0_8px_30px_rgba(45,91,255,0.12)]"
                  : "border-black/10 bg-white"
              }`}
            >
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-1 text-sm text-[#5B5F6B]">{plan.description}</p>
              <p className="mt-6 font-[family-name:var(--font-display)] text-4xl font-bold">
                ${yearly ? plan.yearly : plan.monthly}
                <span className="text-base font-normal text-[#8A8E99]">/mo</span>
              </p>

              <a
                href="#"
                className={`mt-6 block rounded-full px-5 py-2.5 text-center text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-[#2D5BFF] text-white hover:bg-[#1E45D6]"
                    : "border border-black/10 hover:border-black/30"
                }`}
              >
                Choose {plan.name}
              </a>

              <ul className="mt-6 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#5B5F6B]">
                    <span className="mt-0.5 text-[#2D5BFF]">
                      <CheckIcon />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section id="faq" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-xl">
          <p className="mb-3 text-sm text-[#2D5BFF]">FAQ</p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-tight">
            Questions, answered
          </h2>
        </div>

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
                  <span className="text-base font-medium">{item.question}</span>
                  <ChevronIcon open={open} />
                </button>
                {open && <p className="pb-5 text-sm text-[#5B5F6B]">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA banner ───────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl bg-[#12131A] px-8 py-16 text-center text-white md:px-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl">
            Ready to put the busywork on autopilot?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[#B9BCC4]">
            Start your free trial today — no credit card required.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-full bg-[#2D5BFF] px-7 py-3 text-sm font-medium transition-colors hover:bg-[#1E45D6]"
          >
            Get started free
          </a>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="border-t border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <a href="#top" className="flex items-center gap-2 font-[family-name:var(--font-display)] text-lg font-bold">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#2D5BFF]" />
                Product Name {/* TODO */}
              </a>
              <p className="mt-3 max-w-xs text-sm text-[#5B5F6B]">
                {/* TODO: your one-line description */}
                Automation and AI agents for teams that want their time back.
              </p>
            </div>

            <div>
              <p className="text-sm font-medium">Product</p>
              <ul className="mt-3 space-y-2 text-sm text-[#5B5F6B]">
                <li><a href="#features" className="hover:text-[#12131A]">Features</a></li>
                <li><a href="#pricing" className="hover:text-[#12131A]">Pricing</a></li>
                <li><a href="#integrations" className="hover:text-[#12131A]">Integrations</a></li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-medium">Company</p>
              <ul className="mt-3 space-y-2 text-sm text-[#5B5F6B]">
                <li><a href="#" className="hover:text-[#12131A]">About</a></li>
                <li><a href="#" className="hover:text-[#12131A]">Careers</a></li>
                <li><a href="#" className="hover:text-[#12131A]">Blog</a></li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-medium">Support</p>
              <ul className="mt-3 space-y-2 text-sm text-[#5B5F6B]">
                <li><a href="#" className="hover:text-[#12131A]">Help center</a></li>
                <li><a href="#" className="hover:text-[#12131A]">Contact</a></li>
                <li><a href="#" className="hover:text-[#12131A]">Status</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-black/10 pt-6 text-sm text-[#8A8E99] md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Product Name. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#12131A]">Privacy</a>
              <a href="#" className="hover:text-[#12131A]">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}