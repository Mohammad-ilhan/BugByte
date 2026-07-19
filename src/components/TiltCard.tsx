import { motion, useTransform } from "framer-motion";
import { ReactNode, CSSProperties } from "react";
import { useMouseTilt } from "@/hooks/use-mouse-tilt";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
  style?: CSSProperties;
  as?: "div";
}

/**
 * Wraps content with a smooth 3D tilt that follows the cursor, plus an optional
 * radial spotlight highlight. GPU-only transforms; disabled on touch / reduced motion.
 */
const TiltCard = ({ children, className = "", max = 6, glare = true, style }: TiltCardProps) => {
  const { ref, rotateX, rotateY, px, py, onMouseMove, onMouseLeave } = useMouseTilt({ max });

  const bgX = useTransform(px, (v) => `${v * 100}%`);
  const bgY = useTransform(py, (v) => `${v * 100}%`);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
        ...style,
      }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"
          style={{
            background: useTransform(
              [bgX, bgY] as any,
              ([x, y]: any) =>
                `radial-gradient(circle at ${x} ${y}, hsl(24 100% 60% / 0.35), transparent 55%)`
            ),
          }}
        />
      )}
    </motion.div>
  );
};

export default TiltCard;
