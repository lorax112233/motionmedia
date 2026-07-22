"use client";

import { useEffect, useRef, useState } from "react";

// Decorative upward-trending line chart behind the stats.
const LINE =
  "M0 172 L150 150 L300 158 L450 108 L600 120 L750 74 L900 88 L1050 40 L1200 24";
const AREA = `${LINE} L1200 220 L0 220 Z`;

export default function StatsGraph() {
  const ref = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDrawn(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 1200 220"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <defs>
        <linearGradient id="statArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Area fill fades in once the line has started drawing */}
      <path
        d={AREA}
        fill="url(#statArea)"
        style={{
          opacity: drawn ? 1 : 0,
          animation: drawn ? "fade-in 1.2s ease 0.9s both" : undefined,
        }}
      />

      {/* The trending line draws itself */}
      <path
        d={LINE}
        stroke="var(--accent)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        opacity="0.55"
        className={`stat-line ${drawn ? "is-drawn" : ""}`}
      />
    </svg>
  );
}
