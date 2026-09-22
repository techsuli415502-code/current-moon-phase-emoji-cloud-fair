"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { AdSlot } from "./ad-slot";
import { AD_SLOTS } from "@/lib/constants";

/**
 * Anchor ad — sticky bottom banner that stays visible while scrolling.
 * Dismissible with the X button (per mobile ad best practices).
 *
 * The anchor reserves space at the bottom of the viewport via padding on
 * the page wrapper (see layout.tsx) so it never covers footer content.
 */
export function AnchorAd() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-amber-300/15 bg-[#0a0420]/95 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-3xl items-center justify-center px-2 py-2">
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="absolute -top-2 right-1 z-10 inline-flex h-6 w-6 items-center justify-center rounded-full border border-amber-300/20 bg-[#0a0420] text-[#c4b9d6] transition-colors hover:bg-amber-300/20"
          aria-label="Close advertisement"
        >
          <X className="h-3 w-3" strokeWidth={2.5} />
        </button>
        <AdSlot
          adKey={AD_SLOTS.BANNER_728x90.key}
          width={AD_SLOTS.BANNER_728x90.width}
          height={AD_SLOTS.BANNER_728x90.height}
          label=""
          hideLabel
          className="w-full justify-center"
        />
      </div>
    </div>
  );
}
