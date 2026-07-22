import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const display = Sora({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Motion Media Marketing: Digital Marketing Agency in Butuan City",
  description:
    "Motion Media Marketing helps brands grow with social media management, paid ads, video production, and branding that moves people.",
  openGraph: {
    title: "Motion Media Marketing",
    description:
      "Social media management, paid ads, video production, and branding that puts your brand in motion.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Motion Media Marketing",
    description:
      "Social media management, paid ads, video production, and branding that puts your brand in motion.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
