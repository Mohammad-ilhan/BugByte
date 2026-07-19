import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, ReactNode } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface Props {
  children: ReactNode;
  as?: "a" | "button";
  href?: string;
  download?: boolean;
  target?: string;
  rel?: string;
  className?: string;
  strength?: number;
  onClick?: () => void;
  ariaLabel?: string;
}

const MagneticButton = ({
  children,
  as = "a",
  href,
  download,
  target,
  rel,
  className,
  strength = 8,
  onClick,
  ariaLabel,
}: Props) => {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const handleMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = (e.clientX - cx) / (r.width / 2);
    const dy = (e.clientY - cy) / (r.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const MotionComp: any = as === "a" ? motion.a : motion.button;
  return (
    <MotionComp
      ref={ref as any}
      href={href}
      download={download}
      target={target}
      rel={rel}
      onClick={onClick}
      aria-label={ariaLabel}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </MotionComp>
  );
};

export default MagneticButton;
