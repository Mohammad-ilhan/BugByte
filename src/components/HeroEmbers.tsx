import { useMemo } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Ember/spark field scoped to the hero. Purely decorative, GPU transforms only.
 */
const HeroEmbers = ({ count = 22 }: { count?: number }) => {
  const reduced = useReducedMotion();

  const embers = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: (i * 37) % 100,
        size: 2 + ((i * 13) % 5),
        duration: 9 + ((i * 7) % 9),
        delay: (i * 0.83) % 9,
        drift: ((i % 5) - 2) * 26,
      })),
    [count]
  );

  if (reduced) return null;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {embers.map((e) => (
        <motion.span
          key={e.id}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${e.x}%`,
            bottom: -20,
            width: e.size,
            height: e.size,
            boxShadow: `0 0 ${e.size * 4}px hsl(var(--primary) / 0.65)`,
          }}
          initial={{ opacity: 0, y: 0, x: 0 }}
          animate={{
            opacity: [0, 0.9, 0.7, 0],
            y: [0, -320, -620, -820],
            x: [0, e.drift, -e.drift, e.drift / 2],
          }}
          transition={{
            duration: e.duration,
            delay: e.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export default HeroEmbers;
