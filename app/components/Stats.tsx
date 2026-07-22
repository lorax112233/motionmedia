import Reveal from "./Reveal";
import StatsGraph from "./StatsGraph";
import { stats } from "../content";

export default function Stats() {
  return (
    <section className="relative overflow-hidden px-5 py-24">
      <StatsGraph />
      <div className="relative mx-auto grid max-w-6xl gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100}>
            <p className="font-display text-5xl font-bold text-accent">
              {s.value}
            </p>
            <p className="mt-2 text-sm text-muted">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
