"use client";

import { useEffect, useRef } from "react";

/*
 * Scrubs scale + opacity with scroll position: a section zooms in as it
 * approaches the viewport center, holds full size while in view, and
 * shrinks/fades again as it scrolls out — in both scroll directions.
 */
export default function ScrollZoom({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the section center sits at the viewport center,
      // 1 when the section is fully off-screen.
      const center = rect.top + rect.height / 2;
      const range = (vh + rect.height) / 2;
      const offset = Math.min(Math.abs(center - vh / 2) / range, 1);
      // Dead zone: full size while roughly centered, ramp near the edges.
      const t = Math.min(Math.max((1 - offset) * 1.4, 0), 1);
      const eased = t * (2 - t);
      const scale = 0.6 + 0.4 * eased;
      const opacity = eased;
      el.style.transform = `scale(${scale})`;
      el.style.opacity = `${opacity}`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform, opacity" }}>
      {children}
    </div>
  );
}
