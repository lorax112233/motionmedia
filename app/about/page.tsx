import type { Metadata } from "next";
import About from "../components/About";
import ScrollZoom from "../components/ScrollZoom";

export const metadata: Metadata = {
  title: "About — Motion Media Marketing",
  description:
    "Meet the team behind Motion Media Marketing — a small crew obsessed with your growth.",
};

export default function AboutPage() {
  return (
    <ScrollZoom>
      <About />
    </ScrollZoom>
  );
}
