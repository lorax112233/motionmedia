import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Services from "../components/Services";
import CTA from "../components/CTA";
import ScrollZoom from "../components/ScrollZoom";

export const metadata: Metadata = {
  title: "Services: Motion Media Marketing",
  description:
    "Social media management, paid advertising, video production, and branding built to grow your business.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        tag="Services"
        title="Everything your brand needs to move."
        subtitle="From daily social to full scale campaigns, one team handling the content, the ads, and the design that make people stop and pay attention."
      />
      <ScrollZoom>
        <Services showHeader={false} />
      </ScrollZoom>
      <ScrollZoom>
        <CTA />
      </ScrollZoom>
    </>
  );
}
