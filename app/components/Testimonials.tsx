export default function Testimonials() {
  return (
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
  );
}
