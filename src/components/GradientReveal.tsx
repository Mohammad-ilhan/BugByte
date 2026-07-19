import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface Props {
  text: string;
  className?: string;
  delay?: number;
}

const GradientReveal = ({ text, className = "", delay = 0 }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  if (reduce) {
    return <span className={`text-gradient-fire ${className}`}>{text}</span>;
  }

  return (
    <span ref={ref} className={`text-gradient-fire inline-block ${className}`} aria-label={text}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden
          initial={{ y: "0.6em", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.55, delay: delay + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
          style={{ whiteSpace: ch === " " ? "pre" : "normal" }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
};

export default GradientReveal;
