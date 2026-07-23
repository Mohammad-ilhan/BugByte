import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface Props {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

const Reveal = ({ children, delay = 0, y = 24, className = "", once = true }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-80px" });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : { opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
