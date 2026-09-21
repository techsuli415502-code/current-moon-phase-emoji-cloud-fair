import Script from "next/script";
import { GA_MEASUREMENT_ID } from "@/lib/constants";

/**
 * Google Analytics 4 (GA4) — loaded via next/script with strategy
 * "afterInteractive" so it does not block First Contentful Paint.
 *
 * The Measurement ID is centralized in src/lib/constants.ts so it can be
 * swapped without touching component code.
 *
 * On dev environments you may also want to disable GA — wrap the export
 * in a `process.env.NODE_ENV === "production"` check if you want dev
 * traffic excluded.
 */
export function GoogleAnalytics() {
  // Skip loading GA entirely if no ID is configured.
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === "G-XXXXXXXXXX") {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        async
      />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            send_page_view: true,
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
