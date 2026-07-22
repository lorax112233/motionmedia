// ─────────────────────────────────────────────────────────────────────────────
// SITE CONTENT — single source of truth for all copy & data.
//
// • To change TEXT: edit the strings below and save. That's it.
// • To add an IMAGE: drop the file into `public/` (e.g. public/work/bloom.jpg),
//   then set the matching `image` field to its path ("/work/bloom.jpg").
//   Leave `image` as "" to show the aperture placeholder instead.
// • To add/remove CARDS (services, projects, stats, testimonials): add or delete
//   an item in the relevant array — the layout adjusts automatically.
// ─────────────────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "Digital marketing agency",
  // Headline renders as:  {before}<accent>{accent}</accent>{after}
  headlineBefore: "We put your brand in ",
  headlineAccent: "motion",
  headlineAfter: ".",
  subhead:
    "Scroll-stopping content, precision paid ads, and social strategies built on data — not guesswork.",
  primaryCta: { label: "Work with us", href: "/contact" },
  secondaryCta: { label: "See our work", href: "#work" },
};

export const services = {
  tag: "What we do",
  heading: "Everything your brand needs to move.",
  items: [
    {
      number: "01",
      title: "Social Media Management",
      description:
        "Content calendars, community management, and consistent posting that keeps your brand top of mind — across Facebook, Instagram, and TikTok.",
    },
    {
      number: "02",
      title: "Paid Advertising",
      description:
        "Facebook, Instagram, and Google ad campaigns engineered for return — audience research, creative testing, and weekly optimization.",
    },
    {
      number: "03",
      title: "Video & Content Production",
      description:
        "Reels, short-form video, and motion graphics that stop the scroll. Shot, edited, and delivered ready to post.",
    },
    {
      number: "04",
      title: "Branding & Design",
      description:
        "Logos, brand identities, and design systems that make your business instantly recognizable everywhere it shows up.",
    },
  ],
};

// A project card can show media in this priority order (first one set wins):
//   1. video  — a self-hosted clip in public/ (e.g. "/work/bloom.mp4").
//               Plays as a MUTED, LOOPING, AUTOPLAY preview. Keep files small.
//   2. embed  — a YouTube / Vimeo / Facebook video URL (paste the normal link).
//               Shows a poster + play button; the player loads only on click.
//   3. image  — a static thumbnail in public/ (e.g. "/work/bloom.jpg").
//   4. (none) — falls back to the aperture placeholder.
// `image` also acts as the POSTER (first frame) for a `video` or `embed`.
export type WorkItem = {
  title: string;
  category: string;
  result?: string;
  image?: string;
  video?: string;
  embed?: string;
};

export const work: { tag: string; heading: string; items: WorkItem[] } = {
  tag: "Case studies",
  heading: "Results, not just deliverables.",
  items: [
    {
      title: "Coffee Shop Reel",
      category: "Video Production",
      result: "Short-form promo video", // ← replace with a real result metric
      video: "/721.mp4",
    },
    {
      title: "Real Estate Showcase",
      category: "Real Estate",
      result: "Property tour video",
      video: "/realestate1.mp4",
    },
    {
      title: "Property Walkthrough",
      category: "Real Estate",
      result: "Listing highlight reel",
      video: "/realestate2.mp4",
    },
    {
      title: "Cinematic Lifestyle Vlog",
      category: "Cinematic",
      result: "Brand story film",
      video: "/lifestyle.mp4",
    },
  ],
};

// Graphic design examples — shown as a second group in the same Work section.
// Add an image: drop the file in public/ (e.g. public/graphics/poster.jpg) and
// set `image` to its path. Empty `image` shows the aperture placeholder.
export const graphics: { tag: string; heading: string; items: WorkItem[] } = {
  tag: "Graphic design",
  heading: "Designs that stop the scroll.",
  items: [
    { title: "Social Media Design", category: "Social Media", image: "/1.jpg" },
    { title: "Social Media Design", category: "Social Media", image: "/2.jpg" },
    { title: "Social Media Design", category: "Social Media", image: "/3.jpg" },
    { title: "Social Media Design", category: "Social Media", image: "/4.jpg" },
  ],
};

// Client logos for the scrolling marquee under the hero.
// Add a logo: drop the file in public/ (e.g. public/clients/rapide.png) and set
// `logo` to its path. Without a `logo`, the client's name shows as text instead.
// Transparent PNG or SVG logos look best on the dark strip.
export const clients: { name: string; logo?: string }[] = [
  { name: "King", logo: "/clients/king.png" },
  { name: "721", logo: "/clients/721.png" },
  { name: "Motion Real", logo: "/clients/motionreal.png" },
  { name: "Sole District", logo: "/clients/soledistrict.png" },
  { name: "Matu", logo: "/clients/matu.png" },
];

export const stats = [
  { value: "10+", label: "Brands helped" },
  { value: "2M+", label: "Impressions generated across all social media platforms" },
  { value: "3.5x", label: "Average return on ad spend" },
  { value: "100%", label: "Commitment to your growth" },
];

export const about = {
  tag: "Our team",
  heading: "A small team obsessed with your growth.",
  paragraphs: [
    "Motion Media Marketing is a digital marketing agency based in Butuan City. We partner with businesses that are serious about growing — combining creative content, sharp strategy, and data from every campaign to make each move count.",
    "No bloated retainers. No vanity metrics. Just work that moves the numbers you care about.",
  ],
  image: "/aboutus-fit.jpg",
};

export const contact = {
  tag: "Get in touch",
  title: "Let's build something people can't scroll past.",
  subtitle:
    "Tell us about your business and what you want to grow. We'll get back to you within 24 hours.",
  channels: [
    {
      label: "Facebook",
      value: "Message us on Facebook",
      href: "https://www.facebook.com/profile.php?id=61586711511997",
      note: "Fastest way to reach us — usually replies same day.",
      external: true,
    },
    {
      label: "Number",
      value: "+63 994 758 8670 ",
      href: "mailto:hello@motionmediamarketing.com",
      note: "For briefs, proposals, and detailed inquiries.",
      external: false,
    },
  ],
  details: [
    { label: "Based in", value: "Butuan City, Philippines" },
    { label: "Hours", value: "Mon – Sat, 9am – 6pm" },
    { label: "Response time", value: "Within 24 hours" },
  ],
};

// Shared brand/footer info
export const site = {
  name: "Motion Media Marketing",
  location: "Butuan City, Philippines",
};
