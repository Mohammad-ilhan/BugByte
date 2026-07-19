import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX, transformOrigin: "0% 50%", background: "var(--gradient-fire)" }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] pointer-events-none"
    />
  );
};

export default ScrollProgress;
