"use client";

import { useEffect, useRef } from "react";

interface AdSlotProps {
  /** Unique ad network key (used to build the invoke.js URL). */
  adKey: string;
  /** Pixel width of the ad slot. */
  width: number;
  /** Pixel height of the ad slot. */
  height: number;
  /** Optional className for the outer wrapper. */
  className?: string;
  /** Optional label shown above the ad ("Advertisement" by default). */
  label?: string;
  /** When true, hides the "Advertisement" label. */
  hideLabel?: boolean;
}

/**
 * Renders a single ad slot from highrevenueformat.com.
 *
 * Each AdSlot creates its own DOM-scoped <script> elements via
 * document.createElement — this is the only safe way to load multiple
 * ads on the same page because the ad network uses a global `atOptions`
 * variable. We force `async = false` so the browser executes the
 * atOptions-setter and the matching invoke.js in document order, meaning
 * each invoke.js always reads the right atOptions snapshot.
 *
 * The scripts are scoped to the slot's own container ref so React's
 * static HTML export doesn't try to render them during the build.
 */
export function AdSlot({
  adKey,
  width,
  height,
  className,
  label = "Advertisement",
  hideLabel = false,
}: AdSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isLoadedRef = useRef(false);

  useEffect(() => {
    if (isLoadedRef.current || !containerRef.current) return;
    isLoadedRef.current = true;

    const container = containerRef.current;

    // 1) atOptions-setter script — defines the global adOptions for THIS slot
    const optionsScript = document.createElement("script");
    optionsScript.text = `atOptions = {'key':'${adKey}','format':'iframe','height':${height},'width':${width},'params':{}};`;
    optionsScript.async = false;

    // 2) invoke.js — loads the actual ad creative from the ad network.
    // The URL contains the ad key, so the network knows which ad to return.
    const invokeScript = document.createElement("script");
    invokeScript.src = `https://www.highrevenueformat.com/${adKey}/invoke.js`;
    invokeScript.async = false;

    container.appendChild(optionsScript);
    container.appendChild(invokeScript);

    return () => {
      // React unmount: clear the container so scripts don't leak/duplicate
      // on route changes.
      container.innerHTML = "";
      isLoadedRef.current = false;
    };
  }, [adKey, width, height]);

  return (
    <aside
      className={`ad-slot flex flex-col items-center justify-center ${className ?? ""}`}
      aria-label="Advertisement"
      role="complementary"
    >
      {!hideLabel && (
        <span className="mb-1 text-[10px] uppercase tracking-widest text-[#9c8cba]/70">
          {label}
        </span>
      )}
      <div
        ref={containerRef}
        style={{
          minHeight: `${height}px`,
          minWidth: `${width}px`,
          width: "100%",
          maxWidth: `${width}px`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </aside>
  );
}
