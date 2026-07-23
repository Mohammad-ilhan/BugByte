import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Direction = "up" | "down" | "left" | "right" | "fade" | "zoom";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  className?: string;
  as?: "div" | "section" | "article" | "span";
}

const offsetFor = (dir: Direction, d: number) => {
  switch (dir) {
    case "up": return { y: d, x: 0, scale: 1 };
    case "down": return { y: -d, x: 0, scale: 1 };
    case "left": return { x: d, y: 0, scale: 1 };
    case "right": return { x: -d, y: 0, scale: 1 };
    case "zoom": return { x: 0, y: 0, scale: 0.92 };
    default: return { x: 0, y: 0, scale: 1 };
  }
};

const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 40,
  once = true,
  className,
  as = "div",
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-80px" });
  const reduce = useReducedMotion();

  const from = reduce ? { x: 0, y: 0, scale: 1 } : offsetFor(direction, distance);
  const variants: Variants = {
    hidden: { opacity: 0, ...from },
    show: { opacity: 1, x: 0, y: 0, scale: 1 },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};

export default ScrollReveal;
