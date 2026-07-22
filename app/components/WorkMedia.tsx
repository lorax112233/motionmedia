"use client";

import { useState } from "react";
import Image from "next/image";
import Aperture from "./Aperture";
import type { WorkItem } from "../content";

// Turn a normal YouTube/Vimeo/Facebook link into its embeddable player URL.
function toEmbedUrl(url: string): string {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      return `https://www.youtube.com/embed/${u.pathname.slice(1)}?autoplay=1`;
    }
    if (host.endsWith("youtube.com")) {
      const id = u.searchParams.get("v") || u.pathname.split("/").pop();
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    if (host.endsWith("vimeo.com")) {
      const id = u.pathname.split("/").filter(Boolean).pop();
      return `https://player.vimeo.com/video/${id}?autoplay=1`;
    }
    if (host.endsWith("facebook.com") || host === "fb.watch") {
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
        url,
      )}&autoplay=true&show_text=false`;
    }
  } catch {
    /* fall through to raw url */
  }
  return url;
}

const imageSizes = "(max-width: 768px) 100vw, 33vw";

export default function WorkMedia({ item }: { item: WorkItem }) {
  const [playing, setPlaying] = useState(false);

  // 1) Self-hosted clip: auto-loops muted as a preview, but has controls so
  //    viewers can unmute, pause, scrub, and go fullscreen — i.e. play it normally.
  if (item.video) {
    return (
      <video
        className="absolute inset-0 h-full w-full object-contain"
        src={item.video}
        poster={item.image || undefined}
        autoPlay
        muted
        loop
        controls
        playsInline
        preload="metadata"
      />
    );
  }

  // 2) Embed — load the heavy player only after the user clicks
  if (item.embed) {
    if (playing) {
      return (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={toEmbedUrl(item.embed)}
          title={item.title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      );
    }
    return (
      <button
        type="button"
        onClick={() => setPlaying(true)}
        aria-label={`Play ${item.title}`}
        className="group/play absolute inset-0 flex items-center justify-center"
      >
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes={imageSizes}
            className="object-cover"
          />
        ) : (
          <span className="absolute inset-0 bg-gradient-to-br from-surface-raised to-line" />
        )}
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform group-hover/play:scale-110">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 translate-x-0.5">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </button>
    );
  }

  // 3) Static image
  if (item.image) {
    return (
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes={imageSizes}
        className="object-contain"
      />
    );
  }

  // 4) Placeholder
  return (
    <Aperture className="h-10 w-10 text-muted/20 transition-colors group-hover:text-accent/40" />
  );
}
