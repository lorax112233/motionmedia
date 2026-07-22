import Image from "next/image";
import Reveal from "./Reveal";
import SectionTag from "./SectionTag";
import Aperture from "./Aperture";
import TeamMark from "./TeamMark";
import { about } from "../content";

export default function About() {
  return (
    <section id="about" className="px-5 pb-24 pt-36 md:pt-44">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <Reveal>
          <SectionTag>{about.tag}</SectionTag>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            {about.heading}
          </h2>
          {about.paragraphs.map((text, i) => (
            <p
              key={i}
              className={`leading-relaxed text-muted ${i === 0 ? "mt-6" : "mt-4"}`}
            >
              {text}
            </p>
          ))}
        </Reveal>

        {/* Team photo framed like a camera viewfinder, with motion graphics */}
        <Reveal delay={150}>
          <div className="animate-float relative">
            {/* Teal glow behind the frame */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-accent/15 blur-3xl"
            />

            <div className="group relative aspect-[2/1] overflow-hidden rounded-2xl border border-line bg-surface">
              {about.image ? (
                <Image
                  src={about.image}
                  alt="The Motion Media Marketing team"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <Aperture className="h-16 w-16 text-muted/20" />
                </div>
              )}

              {/* Depth gradient */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"
              />

              {/* Sweeping scan line */}
              <div
                aria-hidden
                className="animate-scan pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-accent/25 to-transparent"
              />

              {/* Viewfinder corner brackets */}
              <span aria-hidden className="pointer-events-none absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-accent/80" />
              <span aria-hidden className="pointer-events-none absolute right-3 top-3 h-6 w-6 border-r-2 border-t-2 border-accent/80" />
              <span aria-hidden className="pointer-events-none absolute bottom-3 left-3 h-6 w-6 border-b-2 border-l-2 border-accent/80" />
              <span aria-hidden className="pointer-events-none absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-accent/80" />

              {/* REC indicator */}
              <div className="pointer-events-none absolute left-1/2 top-4 flex -translate-x-1/2 items-center gap-2 rounded-full bg-background/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                Rec
              </div>
            </div>

            {/* Team badge on the corner */}
            <div
              aria-hidden
              className="absolute -bottom-5 -right-5 flex h-16 w-16 items-center justify-center rounded-full border border-line bg-surface"
            >
              <TeamMark className="h-8 w-8 animate-pulse text-accent" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
