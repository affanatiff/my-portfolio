"use client";

import { useState } from "react";
import { CAL_LINK, NAV_LINKS } from "@/app/data/content";
import { ArrowUpRight } from "./icons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-3 z-50 px-4 sm:top-4 sm:px-6 lg:px-8">
      <div className="glass-nav mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 lg:px-6">
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
            className="rounded-full border border-border-color px-4 py-2 text-sm font-medium transition hover:border-text-primary hover:bg-white/5"
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
        <div className="glass-nav mx-auto mt-2 max-w-6xl rounded-3xl px-5 py-5 md:hidden">
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
  );
}
