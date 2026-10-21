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
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://aarohdharmadhikari.dev"),
  title: {
    default: "Aaroh Dharmadhikari — Developer",
    template: "%s — Aaroh Dharmadhikari",
  },
  description:
    "Aaroh Dharmadhikari is an Artificial Intelligence & Data Science student building web applications and applied AI projects.",
  keywords: [
    "Aaroh Dharmadhikari",
    "Web Developer",
    "AI Developer",
    "Next.js Developer",
    "Vishwakarma University",
  ],
  authors: [{ name: "Aaroh Dharmadhikari" }],
  creator: "Aaroh Dharmadhikari",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Aaroh Dharmadhikari — Developer",
    description: "Web development and applied AI projects by Aaroh Dharmadhikari.",
    siteName: "Aaroh Dharmadhikari",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#171719",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden bg-void font-body text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-emerald focus:px-4 focus:py-2 focus:font-medium focus:text-void"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main" className="relative z-10 min-h-screen">{children}</main>
        <div className="relative z-10">
          <Footer />
        </div>
      </body>
    </html>
  );
}
