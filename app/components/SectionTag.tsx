/* Slash-cut section label, echoing the diagonal cuts in the logo letters */
export default function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-accent">
      <span className="mr-2">//</span>
      {children}
    </p>
  );
}
