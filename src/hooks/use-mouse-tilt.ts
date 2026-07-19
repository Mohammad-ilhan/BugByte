import { useRef, useCallback } from "react";
import { useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { useReducedMotion } from "./use-reduced-motion";

interface Options {
  max?: number; // max tilt degrees
  scale?: number;
  spring?: { stiffness?: number; damping?: number; mass?: number };
}

export interface MouseTilt {
  ref: React.RefObject<HTMLDivElement>;
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  // 0..1 normalized pointer position inside element
  px: MotionValue<number>;
  py: MotionValue<number>;
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: () => void;
}

const isTouch = () =>
  typeof window !== "undefined" &&
  ("ontouchstart" in window || (navigator.maxTouchPoints ?? 0) > 0);

export function useMouseTilt({ max = 8, spring }: Options = {}): MouseTilt {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const disabled = reduce || isTouch();

  const cfg = { stiffness: 180, damping: 18, mass: 0.4, ...(spring || {}) };

  const rxRaw = useMotionValue(0);
  const ryRaw = useMotionValue(0);
  const pxRaw = useMotionValue(0.5);
  const pyRaw = useMotionValue(0.5);

  const rotateX = useSpring(rxRaw, cfg);
  const rotateY = useSpring(ryRaw, cfg);
  const px = useSpring(pxRaw, { stiffness: 220, damping: 25 });
  const py = useSpring(pyRaw, { stiffness: 220, damping: 25 });

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width; // 0..1
      const y = (e.clientY - rect.top) / rect.height;
      pxRaw.set(x);
      pyRaw.set(y);
      // tilt: top => rotateX positive (tilt back), left => rotateY negative
      ryRaw.set((x - 0.5) * 2 * max);
      rxRaw.set(-(y - 0.5) * 2 * max);
    },
    [disabled, max, pxRaw, pyRaw, rxRaw, ryRaw]
  );

  const onMouseLeave = useCallback(() => {
    rxRaw.set(0);
    ryRaw.set(0);
    pxRaw.set(0.5);
    pyRaw.set(0.5);
  }, [rxRaw, ryRaw, pxRaw, pyRaw]);

  return { ref, rotateX, rotateY, px, py, onMouseMove, onMouseLeave };
}

export const useTiltTransform = (
  px: MotionValue<number>,
  py: MotionValue<number>
) => ({
  // background-position style spotlight (percent)
  bgX: useTransform(px, (v) => `${v * 100}%`),
  bgY: useTransform(py, (v) => `${v * 100}%`),
});
