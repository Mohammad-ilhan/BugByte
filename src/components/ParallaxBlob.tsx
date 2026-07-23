import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface Props {
  className?: string;
  intensity?: number;
}

/**
 * Soft gradient blob that drifts on scroll. Purely decorative, respects reduced motion.
 */
const ParallaxBlob = ({ className = "", intensity = 80 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [intensity, -intensity]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.9]);

  return (
    <div ref={ref} aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        style={reduce ? undefined : { y, scale }}
        className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full opacity-[0.10] blur-[100px]"
      >
        <div className="w-full h-full rounded-full" style={{ background: "var(--gradient-fire)" }} />
      </motion.div>
      <motion.div
        style={reduce ? undefined : { y: useTransform(scrollYProgress, [0, 1], [-intensity, intensity]) }}
        className="absolute -bottom-40 -right-32 w-[460px] h-[460px] rounded-full opacity-[0.08] blur-[110px]"
      >
        <div className="w-full h-full rounded-full bg-primary" />
      </motion.div>
    </div>
  );
};

export default ParallaxBlob;
