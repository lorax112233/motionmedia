import Reveal from "./Reveal";
import SectionTag from "./SectionTag";
import ProjectCard from "./ProjectCard";
import { work, graphics } from "../content";

export default function Work() {
  return (
    <section id="work" className="border-y border-line bg-surface px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionTag>{work.tag}</SectionTag>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">
            {work.heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {work.items.map((p, i) => (
            <ProjectCard key={p.title} item={p} delay={i * 100} />
          ))}
        </div>

        {/* Graphic design group — same section */}
        <Reveal>
          <div className="mt-20">
            <SectionTag>{graphics.tag}</SectionTag>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">
              {graphics.heading}
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {graphics.items.map((p, i) => (
            <ProjectCard
              key={p.image}
              item={p}
              delay={i * 100}
              aspect="aspect-square"
              showCaption={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
