"use client";

import { CAL_LINK, EMAILS } from "@/app/data/content";
import { ArrowUpRight } from "./icons";

export default function Contact() {
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

  return (
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
  );
}
