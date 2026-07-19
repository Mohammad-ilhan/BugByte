import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";

export const CodeFlashScene: React.FC<{ displayFont: string; bodyFont: string }> = ({ displayFont, bodyFont }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const lines = [
    'const ai = new RAGChatbot({',
    '  model: "deepseek-r1",',
    '  vectorDB: "FAISS",',
    '  embeddings: "all-MiniLM"',
    '});',
    '',
    'const response = await ai.query(',
    '  "Analyze legal document..."',
    ');',
  ];

  const gridOpacity = interpolate(frame, [0, 5], [0, 0.08], { extrapolateRight: "clamp" });
  const exitOp = interpolate(frame, [30, 40], [1, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0c10", opacity: exitOp }}>
      {/* Grid background */}
      <div style={{
        position: "absolute", inset: 0, opacity: gridOpacity,
        backgroundImage: "linear-gradient(rgba(255,140,56,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,140,56,0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Code block */}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{
          backgroundColor: "rgba(15,18,25,0.95)",
          border: "1px solid rgba(255,140,56,0.2)",
          borderRadius: 16, padding: "40px 60px",
          boxShadow: "0 0 80px rgba(255,140,56,0.1)",
          maxWidth: 900,
        }}>
          {/* Terminal dots */}
          <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
            {["#ff5f57", "#ffbd2e", "#28ca41"].map((c, i) => (
              <div key={i} style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: c }} />
            ))}
          </div>
          {lines.map((line, i) => {
            const lineOpacity = interpolate(frame, [2 + i * 2, 5 + i * 2], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
            return (
              <div key={i} style={{
                fontFamily: "'Courier New', monospace", fontSize: 22,
                color: line.includes("const") || line.includes("await") ? "#ff8c38" : line.includes('"') ? "#28ca41" : "#e0e0e0",
                opacity: lineOpacity, lineHeight: 1.8,
              }}>
                {line || "\u00A0"}
              </div>
            );
          })}
        </div>
      </AbsoluteFill>

      {/* Badge */}
      <div style={{
        position: "absolute", bottom: 70, right: 80,
        fontFamily: bodyFont, fontSize: 14, color: "#ff8c38",
        letterSpacing: "0.3em", textTransform: "uppercase",
        opacity: interpolate(frame, [12, 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      }}>
        AI · RAG · Machine Learning
      </div>
    </AbsoluteFill>
  );
};
