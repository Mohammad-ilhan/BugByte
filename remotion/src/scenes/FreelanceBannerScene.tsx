import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";

export const FreelanceBannerScene: React.FC<{ displayFont: string; bodyFont: string }> = ({ displayFont, bodyFont }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const textSpring = spring({ frame: frame - 3, fps, config: { damping: 12, stiffness: 100, mass: 1.5 } });
  const scale = interpolate(textSpring, [0, 1], [0.5, 1]);
  const rotation = interpolate(textSpring, [0, 1], [-5, 0]);

  const counterSpring = spring({ frame: frame - 15, fps, config: { damping: 20 } });
  const counterY = interpolate(counterSpring, [0, 1], [50, 0]);

  const exitOp = interpolate(frame, [30, 38], [1, 0], { extrapolateRight: "clamp" });

  const stats = [
    { value: "5+", label: "CLIENTS" },
    { value: "8+", label: "PROJECTS" },
    { value: "100%", label: "DELIVERY" },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0c10", opacity: exitOp }}>
      {/* Large diagonal text bg */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%) rotate(-10deg)",
        fontFamily: displayFont, fontSize: 300, fontWeight: 800,
        color: "rgba(255,140,56,0.03)", whiteSpace: "nowrap",
        letterSpacing: "-0.05em",
      }}>
        FREELANCER
      </div>

      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{
            fontFamily: displayFont, fontSize: 90, fontWeight: 800,
            color: "white", transform: `scale(${scale}) rotate(${rotation}deg)`,
            lineHeight: 1, marginBottom: 20,
          }}>
            <span style={{ color: "#ff8c38" }}>FREELANCE</span>
            <br />
            DEVELOPER
          </div>

          <div style={{
            display: "flex", gap: 60, justifyContent: "center", marginTop: 30,
            transform: `translateY(${counterY}px)`,
            opacity: interpolate(counterSpring, [0, 1], [0, 1]),
          }}>
            {stats.map((stat, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{
                  fontFamily: displayFont, fontSize: 48, fontWeight: 800,
                  color: "#ff8c38",
                }}>{stat.value}</div>
                <div style={{
                  fontFamily: bodyFont, fontSize: 13, color: "rgba(255,255,255,0.5)",
                  letterSpacing: "0.3em", marginTop: 4,
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
