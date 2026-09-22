import { AdSlot } from "./ad-slot";
import { AD_SLOTS } from "@/lib/constants";

/**
 * Top banner ad — 728×90 leaderboard placed immediately below the
 * navbar on every page. High viewability placement.
 */
export function TopBannerAd() {
  return (
    <div className="border-b border-amber-300/10 bg-[#0a0420]/40 py-3">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AdSlot
          adKey={AD_SLOTS.BANNER_728x90.key}
          width={AD_SLOTS.BANNER_728x90.width}
          height={AD_SLOTS.BANNER_728x90.height}
          className="mx-auto"
        />
      </div>
    </div>
  );
}
