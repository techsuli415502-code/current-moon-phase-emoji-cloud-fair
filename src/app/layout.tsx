import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { StarfieldBackground } from "@/components/site/starfield-background";
import { GoogleAnalytics } from "@/components/site/google-analytics";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  GOOGLE_SITE_VERIFICATION,
} from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Current Moon Phase Emoji — Live Lunar Phase & Symbol Guide | ${SITE_NAME}`,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "Discover the current moon phase emoji, the live lunar cycle, illumination, and the next full moon countdown. See today's Moon phase glyph updated every minute.",
  keywords: [
    "current moon phase emoji",
    "moon phase today",
    "lunar phase",
    "moon emoji",
    "full moon",
    "new moon",
    "moon phase calendar",
    "moon illumination",
  ],
  authors: [{ name: "Jacob Moses" }],
  creator: "Jacob Moses",
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Current Moon Phase Emoji — Live Lunar Phase & Symbol Guide",
    description:
      "Discover the current moon phase emoji, the live lunar cycle, illumination, and the next full moon countdown. See today's Moon phase glyph updated every minute.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: "/logo.svg",
        width: 240,
        height: 60,
        alt: "Moon Phase Emoji — Live lunar phase and symbol guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Current Moon Phase Emoji — Live Lunar Phase & Symbol Guide",
    description:
      "Discover the current moon phase emoji, the live lunar cycle, illumination, and the next full moon countdown.",
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "science",
  applicationName: SITE_NAME,
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased bg-background text-foreground`}
      >
        <StarfieldBackground />
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
