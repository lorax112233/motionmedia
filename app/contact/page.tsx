import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import ScrollZoom from "../components/ScrollZoom";
import { contact } from "../content";

export const metadata: Metadata = {
  title: "Contact — Motion Media Marketing",
  description:
    "Get in touch with Motion Media Marketing. Message us on Facebook or send an email and we'll reply within 24 hours.",
};

const channels = contact.channels;

export default function ContactPage() {
  return (
    <>
      <PageHeader
        tag={contact.tag}
        title={contact.title}
        subtitle={contact.subtitle}
      />

      <ScrollZoom>
        <section className="px-5 pb-24 pt-8">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={i * 100}>
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-accent/50"
                >
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                      {c.label}
                    </span>
                    <p className="mt-3 font-display text-2xl font-semibold transition-colors group-hover:text-accent">
                      {c.value}
                    </p>
                  </div>
                  <p className="mt-4 text-muted">{c.note}</p>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mx-auto mt-6 max-w-6xl rounded-2xl border border-line bg-surface p-8 text-muted">
              <div className="grid gap-6 sm:grid-cols-3">
                {contact.details.map((d) => (
                  <div key={d.label}>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                      {d.label}
                    </p>
                    <p className="mt-2 text-foreground">{d.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      </ScrollZoom>
    </>
  );
}
