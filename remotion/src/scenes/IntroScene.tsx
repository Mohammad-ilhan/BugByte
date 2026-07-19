import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";

export const IntroScene: React.FC<{ displayFont: string; bodyFont: string }> = ({ displayFont, bodyFont }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Flash in from black
  const bgOpacity = interpolate(frame, [0, 8], [0, 1], { extrapolateRight: "clamp" });

  // Glowing line that sweeps across
  const lineX = interpolate(frame, [5, 40], [-100, 110], { extrapolateRight: "clamp" });

  // Text reveal
  const textOpacity = interpolate(frame, [15, 30], [0, 1], { extrapolateRight: "clamp" });
  const textY = interpolate(frame, [15, 35], [60, 0], { extrapolateRight: "clamp" });

  // Subtitle
  const subOpacity = interpolate(frame, [30, 45], [0, 1], { extrapolateRight: "clamp" });

  // Exit fade
  const exitOpacity = interpolate(frame, [60, 75], [1, 0], { extrapolateRight: "clamp" });

  // Ember particles
  const particles = Array.from({ length: 20 }, (_, i) => {
    const x = (i * 137.5) % 100;
    const startY = 100 + (i * 23) % 30;
    const y = interpolate(frame, [0, 75], [startY, startY - 80 - (i * 7) % 40], { extrapolateRight: "clamp" });
    const particleOpacity = interpolate(frame, [i * 2, i * 2 + 10, 65, 75], [0, 0.8, 0.8, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    const size = 2 + (i % 4);
    return { x, y, opacity: particleOpacity, size };
  });

  return (
    <AbsoluteFill style={{ opacity: exitOpacity }}>
      {/* Dark gradient background */}
      <AbsoluteFill
        style={{
          opacity: bgOpacity,
          background: "radial-gradient(ellipse at center, #1a0e05 0%, #0a0c10 70%)",
        }}
      />

      {/* Sweeping light line */}
      <div
        style={{
          position: "absolute",
          top: "48%",
          left: `${lineX}%`,
          width: "2px",
          height: "4%",
          background: "linear-gradient(180deg, transparent, #ff8c38, transparent)",
          filter: "blur(1px)",
          boxShadow: "0 0 30px 10px rgba(255,140,56,0.3)",
        }}
      />

      {/* Ember particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            backgroundColor: i % 3 === 0 ? "#ff8c38" : i % 3 === 1 ? "#ffb347" : "#e85d26",
            opacity: p.opacity,
            boxShadow: `0 0 ${p.size * 3}px ${p.size}px rgba(255,140,56,0.4)`,
          }}
        />
      ))}

      {/* Center text */}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: bodyFont,
              fontSize: 18,
              color: "#ff8c38",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              opacity: subOpacity,
              marginBottom: 20,
            }}
          >
            Portfolio Showcase
          </div>
          <div
            style={{
              fontFamily: displayFont,
              fontSize: 72,
              fontWeight: 800,
              color: "white",
              opacity: textOpacity,
              transform: `translateY(${textY}px)`,
              lineHeight: 1,
            }}
          >
            MY WORK
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
