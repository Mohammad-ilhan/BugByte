import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring, staticFile, Img } from "remotion";

export const NameRevealScene: React.FC<{ displayFont: string; bodyFont: string }> = ({ displayFont, bodyFont }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Background build-up
  const bgIntensity = interpolate(frame, [0, 40], [0, 1], { extrapolateRight: "clamp" });

  // Profile image — fades in from right
  const profileSpring = spring({ frame: frame - 10, fps, config: { damping: 20, stiffness: 100 } });
  const profileX = interpolate(profileSpring, [0, 1], [200, 0]);
  const profileOpacity = interpolate(frame, [10, 30], [0, 1], { extrapolateRight: "clamp" });

  // Name — dramatic entrance
  const nameSpring = spring({ frame: frame - 25, fps, config: { damping: 12, stiffness: 80, mass: 1.5 } });
  const nameScale = interpolate(nameSpring, [0, 1], [0.3, 1]);
  const nameOpacity = interpolate(frame, [25, 45], [0, 1], { extrapolateRight: "clamp" });

  // "MOHAMMAD" letter by letter stagger
  const firstName = "MOHAMMAD";
  const lastName = "ILHAN";

  // Subtitle
  const subSpring = spring({ frame: frame - 55, fps, config: { damping: 20 } });
  const subOpacity = interpolate(subSpring, [0, 1], [0, 1]);
  const subY = interpolate(subSpring, [0, 1], [30, 0]);

  // Fire particles for finale
  const particles = Array.from({ length: 35 }, (_, i) => {
    const x = 20 + ((i * 47) % 60);
    const baseY = 110;
    const y = interpolate(frame, [20, 140], [baseY, baseY - 100 - (i * 5) % 60], { extrapolateRight: "clamp" });
    const particleOpacity = interpolate(frame, [20 + i, 30 + i, 120, 140], [0, 0.7, 0.7, 0.3], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    const size = 2 + (i % 5);
    const hue = 24 + (i * 7) % 20;
    return { x, y, opacity: particleOpacity, size, hue };
  });

  // Glow pulse behind name
  const glowPulse = interpolate(frame, [40, 70, 100, 130], [0.3, 0.7, 0.5, 0.8], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Horizontal lines
  const lineWidth = interpolate(frame, [50, 80], [0, 40], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0c10" }}>
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "20%",
          width: "60%",
          height: "60%",
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(255,140,56,${0.12 * bgIntensity}) 0%, transparent 70%)`,
        }}
      />

      {/* Fire particles */}
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
            backgroundColor: `hsl(${p.hue}, 100%, 55%)`,
            opacity: p.opacity,
            boxShadow: `0 0 ${p.size * 4}px ${p.size * 2}px hsla(${p.hue}, 100%, 55%, 0.3)`,
          }}
        />
      ))}

      {/* Center content */}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{ textAlign: "center", position: "relative" }}>
          {/* Glow behind text */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 600,
              height: 200,
              borderRadius: "50%",
              background: `radial-gradient(ellipse, rgba(255,140,56,${glowPulse * 0.15}) 0%, transparent 70%)`,
            }}
          />

          {/* First name */}
          <div
            style={{
              fontFamily: displayFont,
              fontSize: 140,
              fontWeight: 800,
              color: "white",
              opacity: nameOpacity,
              transform: `scale(${nameScale})`,
              lineHeight: 1,
              letterSpacing: "0.05em",
              textShadow: "0 0 60px rgba(255,140,56,0.3)",
            }}
          >
            {firstName}
          </div>

          {/* Decorative lines */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 20, margin: "10px 0" }}>
            <div
              style={{
                width: `${lineWidth}%`,
                maxWidth: 200,
                height: 2,
                background: "linear-gradient(90deg, transparent, #ff8c38)",
              }}
            />
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#ff8c38",
                opacity: interpolate(frame, [55, 65], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
                boxShadow: "0 0 15px 5px rgba(255,140,56,0.4)",
              }}
            />
            <div
              style={{
                width: `${lineWidth}%`,
                maxWidth: 200,
                height: 2,
                background: "linear-gradient(270deg, transparent, #ff8c38)",
              }}
            />
          </div>

          {/* Last name — fire gradient */}
          <div
            style={{
              fontFamily: displayFont,
              fontSize: 160,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "0.1em",
              opacity: nameOpacity,
              transform: `scale(${nameScale})`,
              background: "linear-gradient(135deg, #ff8c38, #ffb347, #e85d26)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "none",
              filter: `drop-shadow(0 0 40px rgba(255,140,56,${glowPulse * 0.5}))`,
            }}
          >
            {lastName}
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontFamily: bodyFont,
              fontSize: 22,
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginTop: 30,
              opacity: subOpacity,
              transform: `translateY(${subY}px)`,
            }}
          >
            ML Engineer • Full Stack Developer • Freelancer
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
