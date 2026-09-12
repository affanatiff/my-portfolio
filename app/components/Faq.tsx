"use client";

import { useState } from "react";
import { FAQS } from "@/app/data/content";
import { ChevronDown } from "./icons";

export default function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
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
              <div key={faq.question} className="border-b border-border-color">
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
  );
}
