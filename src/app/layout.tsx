import type { Metadata, Viewport } from "next";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import { Background } from "@/components/background";
import { GridField } from "@/components/grid-field";
import { CursorSystem } from "@/components/cursor";
import { Navigation } from "@/components/navigation";
import { StatusReadout } from "@/components/status-readout";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://aarohdharmadhikari.dev"),
  title: {
    default: "Aaroh Dharmadhikari — Full Stack Developer",
    template: "%s — Aaroh Dharmadhikari",
  },
  description:
    "Full stack developer building AI-powered systems — from speech recognition to autonomous agents. B.Tech in Artificial Intelligence & Data Science, Vishwakarma University.",
  keywords: [
    "Aaroh Dharmadhikari",
    "Full Stack Developer",
    "AI Developer",
    "Machine Learning Engineer",
    "Next.js Developer",
    "Vishwakarma University",
  ],
  authors: [{ name: "Aaroh Dharmadhikari" }],
  creator: "Aaroh Dharmadhikari",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Aaroh Dharmadhikari — Full Stack Developer",
    description:
      "Full stack developer building AI-powered systems — from speech recognition to autonomous agents.",
    siteName: "Aaroh Dharmadhikari",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaroh Dharmadhikari — Full Stack Developer",
    description:
      "Full stack developer building AI-powered systems — from speech recognition to autonomous agents.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#06090A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-void text-ink font-body antialiased overflow-x-hidden">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-emerald focus:text-void focus:px-4 focus:py-2 focus:rounded-md focus:font-medium"
        >
          Skip to content
        </a>
        <Background />
        <GridField />
        <CursorSystem />
        <Navigation />
        <StatusReadout />
        <main id="main" className="relative z-10">{children}</main>
        <div className="relative z-10">
          <Footer />
        </div>
      </body>
    </html>
  );
}
