import type { Metadata } from "next";
import { Hero } from "@/components/site/hero";
import { CurrentPhaseSection } from "@/components/site/current-phase-section";
import {
  EightPhasesSection,
  LunarCycleSection,
  MoonMeaningSection,
  HowItWorksSection,
  MoonFactsSection,
} from "@/components/site/home-sections";
import { MoonCalendar } from "@/components/site/moon-calendar";
import { LunarFaq } from "@/components/site/lunar-faq";
import { EeatBio } from "@/components/site/eeat-bio";
import { SourcesList } from "@/components/site/sources-list";
import { SidebarBoxAd } from "@/components/ads/sidebar-box-ad";
import { MidContentBannerAd } from "@/components/ads/mid-content-banner-ad";
import { SITE_URL } from "@/lib/constants";
import { FAQS } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "Current Moon Phase Emoji — Live Lunar Phase & Symbol Guide",
  description:
    "See the current moon phase emoji, tonight's illumination, and the countdown to the next full moon. Live lunar phase calculator updated every minute from U.S. Naval Observatory data.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Current Moon Phase Emoji — Live Lunar Phase & Symbol Guide",
    description:
      "See the current moon phase emoji, tonight's illumination, and the countdown to the next full moon. Live lunar phase calculator updated every minute.",
    url: SITE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Current Moon Phase Emoji — Live Lunar Phase & Symbol Guide",
    description:
      "See the current moon phase emoji, tonight's illumination, and the countdown to the next full moon.",
  },
};

export default function HomePage() {
  // JSON-LD: WebSite + FAQPage schemas
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Moon Phase Emoji",
    url: SITE_URL,
    description:
      "Discover the current moon phase emoji, the live lunar cycle, illumination, and the next full moon countdown.",
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero />

      {/* Sidebar box ad — desktop only (300×250), premium above-the-fold placement */}
      <section className="mx-auto -mt-4 mb-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center lg:justify-end">
          <SidebarBoxAd />
        </div>
      </section>

      <CurrentPhaseSection />

      {/* Mid-content banner #1 — after current phase, high viewability */}
      <MidContentBannerAd />

      <EightPhasesSection />

      {/* Mid-content banner #2 — between phases and lunar cycle */}
      <MidContentBannerAd />

      <LunarCycleSection />
      <MoonCalendar />

      {/* Mid-content banner #3 — after calendar, mid-scroll capture */}
      <MidContentBannerAd />

      <MoonMeaningSection />
      <HowItWorksSection />

      {/* Mid-content banner #4 — before facts, recapture attention */}
      <MidContentBannerAd />

      <MoonFactsSection />
      <LunarFaq />
      <EeatBio />
      <SourcesList />
    </>
  );
}
