import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring, Img } from "remotion";

interface Props {
  image: string;
  label: string;
  category: string;
  displayFont: string;
  bodyFont: string;
  index: number;
}

export const WebsiteScene: React.FC<Props> = ({ image, label, category, displayFont, bodyFont, index }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Alternate entrance directions
  const directions = ["left", "right", "top", "bottom", "left"];
  const dir = directions[index % 5];

  // Quick zoom-in entrance
  const enterScale = spring({ frame, fps, config: { damping: 25, stiffness: 180 } });
  const scale = interpolate(enterScale, [0, 1], [1.3, 1]);

  // Slow Ken Burns drift
  const driftX = interpolate(frame, [0, 50], [0, index % 2 === 0 ? -20 : 20], { extrapolateRight: "clamp" });
  const driftY = interpolate(frame, [0, 50], [0, index % 2 === 0 ? -10 : 10], { extrapolateRight: "clamp" });

  // Image opacity
  const imgOpacity = interpolate(frame, [0, 6, 40, 50], [0, 1, 1, 0.3], { extrapolateRight: "clamp" });

  // Label entrance
  const labelSpring = spring({ frame: frame - 8, fps, config: { damping: 15, stiffness: 150 } });
  const labelY = interpolate(labelSpring, [0, 1], [40, 0]);
  const labelOpacity = interpolate(frame, [8, 16, 38, 48], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Category badge
  const catOpacity = interpolate(frame, [4, 12, 38, 48], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Glowing border effect
  const glowIntensity = interpolate(frame, [0, 15, 35, 50], [0, 1, 1, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0c10" }}>
      {/* Background ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "30%",
          width: "40%",
          height: "40%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,140,56,0.08) 0%, transparent 70%)",
          opacity: glowIntensity,
        }}
      />

      {/* Website screenshot — centered with perspective */}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div
          style={{
            width: "75%",
            maxWidth: 1400,
            position: "relative",
            opacity: imgOpacity,
            transform: `scale(${scale}) translate(${driftX}px, ${driftY}px)`,
          }}
        >
          {/* Glow border */}
          <div
            style={{
              position: "absolute",
              inset: -3,
              borderRadius: 16,
              background: "linear-gradient(135deg, #ff8c38, #e85d26, #ffb347)",
              opacity: glowIntensity * 0.6,
              filter: "blur(2px)",
            }}
          />
          <Img
            src={image}
            style={{
              width: "100%",
              borderRadius: 12,
              position: "relative",
              display: "block",
            }}
          />
        </div>
      </AbsoluteFill>

      {/* Category badge — top left */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 80,
          opacity: catOpacity,
        }}
      >
        <div
          style={{
            fontFamily: bodyFont,
            fontSize: 13,
            color: "#ff8c38",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            backgroundColor: "rgba(255,140,56,0.1)",
            padding: "6px 16px",
            borderRadius: 6,
            border: "1px solid rgba(255,140,56,0.2)",
          }}
        >
          {category}
        </div>
      </div>

      {/* Label — bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: labelOpacity,
          transform: `translateY(${labelY}px)`,
        }}
      >
        <div
          style={{
            fontFamily: displayFont,
            fontSize: 36,
            fontWeight: 700,
            color: "white",
            textShadow: "0 4px 30px rgba(0,0,0,0.8)",
          }}
        >
          {label}
        </div>
      </div>
    </AbsoluteFill>
  );
};
