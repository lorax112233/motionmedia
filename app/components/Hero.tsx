import Link from "next/link";
import { hero } from "../content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-40">
      {/* Teal corner glows, echoing the logo background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-accent/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-64 -right-40 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl"
      />
      {/* Slow-spinning ring, echoing the logo's circle */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <svg
          viewBox="0 0 100 100"
          className="animate-spin-slow h-[42rem] w-[42rem] text-accent/10 md:h-[54rem] md:w-[54rem]"
        >
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="230 40 8 24"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl text-center">
        <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {hero.eyebrow}
        </p>
        <h1
          className="animate-fade-up mx-auto mt-6 max-w-4xl font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl"
          style={{ animationDelay: "0.1s" }}
        >
          {hero.headlineBefore}
          <span className="relative inline-block text-accent">
            {hero.headlineAccent}
            <svg
              viewBox="0 0 200 12"
              className="absolute -bottom-2 left-0 w-full text-accent/50"
              aria-hidden
            >
              <path
                d="M2 9 C60 2 140 2 198 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
          {hero.headlineAfter}
        </h1>
        <p
          className="animate-fade-up mx-auto mt-8 max-w-2xl text-lg text-muted"
          style={{ animationDelay: "0.2s" }}
        >
          {hero.subhead}
        </p>
        <div
          className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.3s" }}
        >
          <Link
            href={hero.primaryCta.href}
            className="rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground transition-transform hover:scale-105"
          >
            {hero.primaryCta.label}
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="rounded-full border border-line px-8 py-4 font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
