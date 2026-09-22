import { AdSlot } from "./ad-slot";
import { AD_SLOTS } from "@/lib/constants";

/**
 * Sidebar box ad — 300×250 medium rectangle. Premium placement
 * in the hero sidebar on desktop. Hidden on mobile (no sidebar).
 */
export function SidebarBoxAd() {
  return (
    <div className="hidden lg:block">
      <AdSlot
        adKey={AD_SLOTS.BOX_300x250.key}
        width={AD_SLOTS.BOX_300x250.width}
        height={AD_SLOTS.BOX_300x250.height}
        className="mx-auto"
      />
    </div>
  );
}
