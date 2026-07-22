import Reveal from "./Reveal";
import SectionTag from "./SectionTag";
import { services } from "../content";

export default function Services({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section id="services" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        {showHeader && (
          <Reveal>
            <SectionTag>{services.tag}</SectionTag>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">
              {services.heading}
            </h2>
          </Reveal>
        )}

        <div className="grid gap-6 md:grid-cols-2 [&:not(:first-child)]:mt-14">
          {services.items.map((s, i) => (
            <Reveal key={s.number} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-accent/50">
                <span className="font-display text-sm font-semibold text-accent">
                  {s.number}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
