"use client";

import { useMemo } from "react";

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
 * IMPORTANT — why we use an iframe instead of injecting scripts into the
 * parent document:
 *
 * 1. The ad network's invoke.js calls document.write() to render the ad
 *    creative. After the page has loaded, document.write() WIPES the
 *    entire parent document — which is why the previous implementation
 *    made ads disappear. Loading the script inside an iframe scopes
 *    document.write to that iframe's document only.
 *
 * 2. invoke.js reads a global `atOptions` variable. With multiple ad
 *    slots on the same page, the global gets overwritten before later
 *    invoke.js calls read it. Each iframe has its own window object,
 *    so each ad's atOptions is isolated.
 *
 * The srcDoc attribute is preferred over document.write into the iframe
 * because it lets Next.js static export render the iframe content
 * server-side, ensuring ads work without client-side hydration.
 */
export function AdSlot({
  adKey,
  width,
  height,
  className,
  label = "Advertisement",
  hideLabel = false,
}: AdSlotProps) {
  const srcDoc = useMemo(
    () => `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: transparent;
    width: 100%;
    height: 100%;
  }
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }
  #ad-fallback {
    color: #9c8cba;
    font-size: 11px;
    text-align: center;
    padding: 8px;
  }
</style>
</head>
<body>
<div id="ad-fallback">Loading ad…</div>
<script>
  // Remove fallback once the ad script runs
  (function(){
    var observer = new MutationObserver(function(){
      var fb = document.getElementById('ad-fallback');
      if (fb && document.body.children.length > 1) {
        fb.style.display = 'none';
      }
    });
    observer.observe(document.body, { childNodes: true, subtree: true });
    setTimeout(function(){ observer.disconnect(); }, 5000);
  })();
<\/script>
<script>
  atOptions = {
    'key' : '${adKey}',
    'format' : 'iframe',
    'height' : ${height},
    'width' : ${width},
    'params' : {}
  };
<\/script>
<script src="https://www.highrevenueformat.com/${adKey}/invoke.js"><\/script>
</body>
</html>`,
    [adKey, width, height],
  );

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
      <iframe
        // eslint-disable-next-line react/no-iframe -- intentional, isolates 3rd-party ad scripts
        srcDoc={srcDoc}
        title={`Advertisement ${width}x${height}`}
        width={width}
        height={height}
        loading="lazy"
        style={{
          border: "none",
          maxWidth: "100%",
          background: "transparent",
          display: "block",
        }}
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </aside>
  );
}
