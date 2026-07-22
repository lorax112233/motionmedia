import Link from "next/link";
import Reveal from "./Reveal";
import SectionTag from "./SectionTag";

export default function CTA() {
  return (
    <section className="px-5 py-24">
      <Reveal>
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-line bg-surface px-8 py-16 text-center md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[500px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
          />
          <div className="relative">
            <div className="flex justify-center">
              <SectionTag>Ready to move?</SectionTag>
            </div>
            <h2 className="mx-auto mt-4 max-w-xl font-display text-4xl font-bold tracking-tight md:text-5xl">
              Let&apos;s build something people can&apos;t scroll past.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted">
              Tell us about your business and we&apos;ll get back to you within
              24 hours.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className="rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground transition-transform hover:scale-105"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
