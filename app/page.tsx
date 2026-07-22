import Hero from "./components/Hero";
import LogoMarquee from "./components/LogoMarquee";
import Work from "./components/Work";
import Stats from "./components/Stats";
import CTA from "./components/CTA";
import ScrollZoom from "./components/ScrollZoom";

export default function Home() {
  return (
    <>
      <ScrollZoom>
        <Hero />
      </ScrollZoom>
      <ScrollZoom>
        <LogoMarquee />
      </ScrollZoom>
      <ScrollZoom>
        <Work />
      </ScrollZoom>
      <ScrollZoom>
        <Stats />
      </ScrollZoom>
      <ScrollZoom>
        <CTA />
      </ScrollZoom>
    </>
  );
}
