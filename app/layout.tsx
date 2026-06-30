import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanmay Bhardwaj — Founder & Builder",
  description:
    "New Delhi-based founder working at the intersection of GTM strategy and technology. Two companies. Both profitable.",
  openGraph: {
    title: "Tanmay Bhardwaj — Founder & Builder",
    description:
      "New Delhi-based founder. Two companies. Both profitable.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
