import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";

const skills = ["REACT", "PYTHON", "TAILWIND", "FAISS", "OLLAMA", "ML", "RAG", "TYPESCRIPT", "EXCEL"];

export const SkillsFlashScene: React.FC<{ displayFont: string; bodyFont: string }> = ({ displayFont, bodyFont }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const exitOp = interpolate(frame, [32, 40], [1, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0c10", opacity: exitOp }}>
      {/* Diagonal accent line */}
      <div style={{
        position: "absolute", top: 0, left: "40%",
        width: 2, height: "100%",
        background: "linear-gradient(180deg, transparent 20%, rgba(255,140,56,0.3) 50%, transparent 80%)",
        transform: "rotate(15deg)",
        opacity: interpolate(frame, [0, 10], [0, 1], { extrapolateRight: "clamp" }),
      }} />

      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16, maxWidth: 1200, padding: "0 100px" }}>
          {skills.map((skill, i) => {
            const s = spring({ frame: frame - i * 2, fps, config: { damping: 18, stiffness: 200 } });
            const scale = interpolate(s, [0, 1], [0, 1]);
            const rotation = interpolate(s, [0, 1], [15, 0]);
            return (
              <div key={skill} style={{
                fontFamily: displayFont, fontSize: 42, fontWeight: 800,
                color: i % 3 === 0 ? "#ff8c38" : i % 3 === 1 ? "#ffb347" : "white",
                padding: "12px 32px", border: `2px solid ${i % 2 === 0 ? "rgba(255,140,56,0.4)" : "rgba(255,255,255,0.15)"}`,
                borderRadius: 12, transform: `scale(${scale}) rotate(${rotation}deg)`,
                boxShadow: i % 3 === 0 ? "0 0 30px rgba(255,140,56,0.2)" : "none",
              }}>
                {skill}
              </div>
            );
          })}
        </div>
      </AbsoluteFill>

      <div style={{
        position: "absolute", top: 60, left: 80,
        fontFamily: bodyFont, fontSize: 14, color: "#ff8c38",
        letterSpacing: "0.3em", textTransform: "uppercase",
        opacity: interpolate(frame, [5, 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      }}>
        Tech Stack
      </div>
    </AbsoluteFill>
  );
};
