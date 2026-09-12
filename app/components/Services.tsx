"use client";

import { SERVICES } from "@/app/data/content";
import { useInView } from "@/app/hooks/useInView";
import { ArrowUpRight, Check } from "./icons";

export default function Services() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="services" className="border-b border-border-color">
      <div ref={ref} className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className={`reveal max-w-3xl ${inView ? "in-view" : ""}`}>
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

        <div
          className={`reveal fade-delay-1 mt-16 grid gap-5 lg:grid-cols-3 ${
            inView ? "in-view" : ""
          }`}
        >
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="glass-card group rounded-3xl p-7 transition duration-300 hover:-translate-y-1"
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
                  <div key={feature} className="flex items-center gap-3 text-sm">
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
  );
}
