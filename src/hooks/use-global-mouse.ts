import { useEffect } from "react";
import { useMotionValue, useSpring, MotionValue } from "framer-motion";
import { useReducedMotion } from "./use-reduced-motion";

const isTouch = () =>
  typeof window !== "undefined" &&
  ("ontouchstart" in window || (navigator.maxTouchPoints ?? 0) > 0);

/** Tracks normalized cursor position over the viewport, centered (-0.5..0.5). */
export function useGlobalMouse(): { mx: MotionValue<number>; my: MotionValue<number> } {
  const reduce = useReducedMotion();
  const disabled = reduce || isTouch();

  const mxRaw = useMotionValue(0);
  const myRaw = useMotionValue(0);
  const mx = useSpring(mxRaw, { stiffness: 60, damping: 18, mass: 0.6 });
  const my = useSpring(myRaw, { stiffness: 60, damping: 18, mass: 0.6 });

  useEffect(() => {
    if (disabled) return;
    let raf = 0;
    let nx = 0;
    let ny = 0;
    const onMove = (e: MouseEvent) => {
      nx = e.clientX / window.innerWidth - 0.5;
      ny = e.clientY / window.innerHeight - 0.5;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        mxRaw.set(nx);
        myRaw.set(ny);
        raf = 0;
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [disabled, mxRaw, myRaw]);

  return { mx, my };
}
