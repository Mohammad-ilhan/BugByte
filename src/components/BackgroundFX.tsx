import { useTheme } from "@/hooks/use-theme";

/**
 * Ambient visual layer: animated aurora blobs, a slowly panning grid and a
 * vignette. Purely decorative, sits behind all content.
 */
const BackgroundFX = () => {
  const { theme } = useTheme();

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* panning grid */}
      <div
        className="absolute inset-0 opacity-[0.16] animate-grid-pan"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary) / 0.25) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.25) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at 50% 30%, black 10%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, black 10%, transparent 75%)",
        }}
      />

      {/* aurora blobs */}
      <div className="absolute -top-40 left-[10%] h-[34rem] w-[34rem] rounded-full bg-primary/15 blur-[160px] animate-aurora-a" />
      <div className="absolute top-1/3 -right-32 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-[160px] animate-aurora-b" />
      <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-[hsl(var(--fire)/0.12)] blur-[150px] animate-aurora-c" />

      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            theme === "water"
              ? "radial-gradient(ellipse at center, transparent 45%, hsl(var(--background) / 0.85) 100%)"
              : "radial-gradient(ellipse at center, transparent 40%, hsl(var(--background) / 0.9) 100%)",
        }}
      />
    </div>
  );
};

export default BackgroundFX;
