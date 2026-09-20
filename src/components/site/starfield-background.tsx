/**
 * StarfieldBackground — layered cosmic gradient + animated starfield + grain.
 *
 * Pure CSS, no canvas. Three parallax star layers + nebula gradient + grain
 * overlay. Respects prefers-reduced-motion (animations disabled in CSS).
 */
export function StarfieldBackground() {
  return (
    <div aria-hidden="true" className="cosmic-bg animate-nebula">
      {/* Subtle drifting nebula layers */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 15% 25%, rgba(183, 109, 143, 0.18), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 85% 60%, rgba(126, 196, 207, 0.16), transparent 60%)",
        }}
      />

      {/* Three parallax star layers */}
      <div className="stars-layer opacity-60" style={{ backgroundSize: "300px 300px" }} />
      <div
        className="stars-layer opacity-80"
        style={{ backgroundSize: "500px 500px", animationDelay: "1.5s" }}
      />
      <div
        className="stars-layer opacity-100"
        style={{ backgroundSize: "700px 700px", animationDelay: "0.7s" }}
      />

      {/* Grain overlay */}
      <div className="cosmic-grain" />
    </div>
  );
}
