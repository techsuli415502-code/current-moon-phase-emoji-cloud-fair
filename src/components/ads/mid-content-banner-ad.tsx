import { AdSlot } from "./ad-slot";
import { AD_SLOTS } from "@/lib/constants";

/**
 * Mid-content banner ad — 728×90 leaderboard placed between major
 * content sections on the home page. Breaks up long reads and
 * captures mid-scroll viewability.
 */
export function MidContentBannerAd() {
  return (
    <section className="mx-auto my-12 max-w-4xl px-4 sm:px-6 lg:px-8">
      <AdSlot
        adKey={AD_SLOTS.BANNER_728x90.key}
        width={AD_SLOTS.BANNER_728x90.width}
        height={AD_SLOTS.BANNER_728x90.height}
        className="mx-auto"
      />
    </section>
  );
}
