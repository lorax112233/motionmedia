/* Camera-shutter mark, echoing the aperture "o" in the Motion logo */
export default function Aperture({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden>
      <circle
        cx="50"
        cy="50"
        r="44"
        stroke="currentColor"
        strokeWidth="8"
      />
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <line
          key={angle}
          x1="50"
          y1="10"
          x2="76"
          y2="60"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
    </svg>
  );
}
