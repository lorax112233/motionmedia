/* Connected-nodes mark — three members linked as a team/network. */
export default function TeamMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden>
      {/* links between members */}
      <path
        d="M50 28 L28 70 M50 28 L72 70 M28 70 L72 70"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.45"
      />
      {/* members */}
      <circle cx="50" cy="26" r="11" fill="currentColor" />
      <circle cx="26" cy="72" r="11" fill="currentColor" />
      <circle cx="74" cy="72" r="11" fill="currentColor" />
    </svg>
  );
}
