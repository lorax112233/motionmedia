import SectionTag from "./SectionTag";

export default function PageHeader({
  tag,
  title,
  subtitle,
}: {
  tag: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden px-5 pb-8 pt-36 md:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="animate-fade-up relative mx-auto max-w-6xl">
        <SectionTag>{tag}</SectionTag>
        <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold tracking-tight md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg text-muted">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
