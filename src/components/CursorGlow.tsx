import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const CursorGlow = () => {
  const reduce = useReducedMotion();
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 });

  useEffect(() => {
    if (reduce) return;
    if (matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce, x, y]);

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      style={{
        x: sx,
        y: sy,
        background: "radial-gradient(circle, hsl(var(--primary) / 0.18), transparent 60%)",
      }}
      className="pointer-events-none fixed top-0 left-0 -ml-[200px] -mt-[200px] w-[400px] h-[400px] rounded-full z-[5] mix-blend-screen hidden md:block"
    />
  );
};

export default CursorGlow;
