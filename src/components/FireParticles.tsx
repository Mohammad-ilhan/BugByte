import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/use-theme";

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  hue: number;
}

const FireParticles = () => {
  const { theme } = useTheme();
  const isWater = theme === "water";
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const pts: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 10,
      // Fire: 15–45° (orange/yellow). Water: 185–215° (cyan/blue).
      hue: Math.random() * 30,
    }));
    setParticles(pts);
  }, []);

  const baseHue = isWater ? 190 : 15;
  const sat = isWater ? 90 : 100;
  const light = isWater ? 60 : 55;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => {
        const hue = baseHue + p.hue;
        return (
          <div
            key={p.id}
            className="absolute rounded-full animate-float"
            style={{
              left: `${p.x}%`,
              bottom: "-10px",
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: `hsl(${hue} ${sat}% ${light}%)`,
              boxShadow: `0 0 ${p.size * 3}px hsl(${hue} ${sat}% ${light}% / 0.6)`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default FireParticles;

