import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Theme = "fire" | "water";

interface ThemeCtx {
  theme: Theme;
  toggle: (origin?: { x: number; y: number }) => void;
}

const Ctx = createContext<ThemeCtx | null>(null);
const STORAGE_KEY = "portfolio-theme";

const BURST_MS = 2200;
const SWAP_AT  = 1100;
const TOTAL_MS = 2800;


const applyClass = (theme: Theme) => {
  const root = document.documentElement;
  if (theme === "water") root.classList.add("water");
  else root.classList.remove("water");
};

const applySweepClass = (target: Theme) => {
  const root = document.documentElement;
  root.classList.add("theme-sweeping", target === "water" ? "theme-sweeping-water" : "theme-sweeping-fire");
  root.classList.remove(target === "water" ? "theme-sweeping-fire" : "theme-sweeping-water");
};

const clearSweepClass = () => {
  const root = document.documentElement;
  root.classList.remove("theme-sweeping", "theme-sweeping-water", "theme-sweeping-fire");
};


const pulseElements = (target: Theme, origin: { x: number; y: number }) => {
  const cls = target === "water" ? "theme-freeze-pulse" : "theme-ignite-pulse";
  const nodes = Array.from(
    document.querySelectorAll<HTMLElement>(
      "main section, header, footer, nav, [data-theme-sweep], main > div, [data-theme-card]"
    )
  );
  if (!nodes.length) return;

  const maxDist = Math.hypot(window.innerWidth, window.innerHeight);
  const items = nodes
    .map((el) => {
      const r = el.getBoundingClientRect();
      if (r.width < 40 || r.height < 40) return null;
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dist = Math.hypot(cx - origin.x, cy - origin.y);
      return { el, dist };
    })
    .filter((x): x is { el: HTMLElement; dist: number } => !!x)
    .sort((a, b) => a.dist - b.dist);

  items.forEach(({ el, dist }) => {
    const delay = (dist / maxDist) * BURST_MS * 0.75;
    window.setTimeout(() => {
      el.classList.remove("theme-freeze-pulse", "theme-ignite-pulse");
      void el.offsetWidth;
      el.classList.add(cls);
      window.setTimeout(() => el.classList.remove(cls), 1000);
    }, delay);
  });
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "fire";
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    return stored === "water" ? "water" : "fire";
  });

  const [wave, setWave] = useState<{ target: Theme; id: number; origin: { x: number; y: number } } | null>(null);
  const idRef = useRef(0);
  const busyRef = useRef(false);

  useEffect(() => { applyClass(theme); }, [theme]);


  const toggle = useCallback((origin?: { x: number; y: number }) => {
    if (busyRef.current) return;
    busyRef.current = true;

    const target: Theme = theme === "fire" ? "water" : "fire";
    const o = origin ?? { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    idRef.current += 1;
    setWave({ target, id: idRef.current, origin: o });
    applySweepClass(target);
    pulseElements(target, o);


    window.setTimeout(() => {
      setTheme(target);
      localStorage.setItem(STORAGE_KEY, target);
    }, SWAP_AT);

    window.setTimeout(() => {
      setWave((w) => (w && w.id === idRef.current ? null : w));
      clearSweepClass();
      busyRef.current = false;
    }, TOTAL_MS);
  }, [theme]);

  return (
    <Ctx.Provider value={{ theme, toggle }}>
      {children}
      <ThemeWave wave={wave} />
    </Ctx.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};

/* ---------- Collision burst overlay ---------- */
const ThemeWave = ({ wave }: { wave: { target: Theme; id: number; origin: { x: number; y: number } } | null }) => (
  <AnimatePresence>
    {wave && (wave.target === "water"
      ? <WaterBurst key={wave.id} origin={wave.origin} />
      : <FireBurst key={wave.id} origin={wave.origin} />)}
  </AnimatePresence>
);

const range = (n: number) => Array.from({ length: n }, (_, i) => i);

const useViewport = () => useMemo(() => {
  if (typeof window === "undefined") return { W: 1280, H: 800 };
  return { W: window.innerWidth, H: window.innerHeight };
}, []);

/* ---------------- WATER BURST — splash crown explodes from origin ---------------- */
const WaterBurst = ({ origin }: { origin: { x: number; y: number } }) => {
  const { W, H } = useViewport();
  const maxR = Math.hypot(W, H) * 1.15;

  const droplets = useMemo(
    () => range(90).map((i) => {
      const angle = (i / 90) * Math.PI * 2 + Math.random() * 0.3;
      const dist = 220 + Math.random() * Math.max(W, H) * 0.9;
      return {
        key: i,
        angle,
        dx: Math.cos(angle) * dist,
        dy: Math.sin(angle) * dist - Math.random() * 180, // gravity bias up
        size: 6 + Math.random() * 18,
        delay: Math.random() * 0.35,
        duration: 0.9 + Math.random() * 0.9,
      };
    }),
    [W, H],
  );

  const splashes = useMemo(
    () => range(14).map((i) => {
      const angle = -Math.PI / 2 + (i / 14 - 0.5) * Math.PI * 1.4;
      return {
        key: i,
        angle,
        length: 180 + Math.random() * 240,
        delay: Math.random() * 0.15,
      };
    }),
    [],
  );

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[100] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.55 } }}
    >
      {/* radial color wash expanding from origin */}
      <motion.div
        className="absolute"
        style={{
          left: origin.x,
          top: origin.y,
          width: maxR * 2,
          height: maxR * 2,
          marginLeft: -maxR,
          marginTop: -maxR,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, hsl(190 100% 92% / 0.95) 0%, hsl(195 100% 70% / 0.85) 18%, hsl(200 95% 45% / 0.7) 38%, hsl(210 90% 22% / 0.55) 62%, hsl(215 85% 12% / 0) 92%)",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: [0, 1, 1, 0.6, 0] }}
        transition={{ duration: BURST_MS / 1000, ease: [0.22, 0.85, 0.3, 1] }}
      />

      {/* video splash overlay anchored to origin */}
      <motion.div
        className="absolute"
        style={{
          left: origin.x,
          top: origin.y,
          width: maxR * 1.6,
          height: maxR * 1.6,
          marginLeft: -maxR * 0.8,
          marginTop: -maxR * 0.8,
          borderRadius: "50%",
          overflow: "hidden",
        }}
        initial={{ scale: 0.05, opacity: 0 }}
        animate={{ scale: 1, opacity: [0, 0.85, 0.55, 0] }}
        transition={{ duration: BURST_MS / 1000, ease: [0.22, 0.85, 0.3, 1] }}
      >
        <video
          className="h-full w-full object-cover"
          src="/theme-media/water-transition.mp4"
          autoPlay muted playsInline preload="auto"
          style={{ mixBlendMode: "screen", filter: "saturate(1.4) contrast(1.15)" }}
        />
      </motion.div>

      {/* Splash crown streaks — radial sprays from origin */}
      <svg className="absolute inset-0" width={W} height={H} style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id="waterStreak" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(190 100% 96%)" stopOpacity="1" />
            <stop offset="60%" stopColor="hsl(195 100% 75%)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="hsl(200 100% 60%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {splashes.map(({ key, angle, length, delay }) => {
          const x2 = origin.x + Math.cos(angle) * length;
          const y2 = origin.y + Math.sin(angle) * length;
          return (
            <motion.line
              key={key}
              x1={origin.x} y1={origin.y} x2={x2} y2={y2}
              stroke="url(#waterStreak)"
              strokeWidth={10}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
              transition={{ duration: 0.9, delay, ease: "easeOut" }}
              style={{ filter: "drop-shadow(0 0 12px hsl(190 100% 80% / 0.9))" }}
            />
          );
        })}
      </svg>

      {/* Droplets exploding outward */}
      {droplets.map(({ key, dx, dy, size, delay, duration }) => (
        <motion.div
          key={key}
          className="absolute rounded-full"
          style={{
            left: origin.x,
            top: origin.y,
            width: size,
            height: size,
            marginLeft: -size / 2,
            marginTop: -size / 2,
            background:
              "radial-gradient(circle at 30% 30%, hsl(190 100% 98%) 0%, hsl(200 100% 70%) 55%, hsl(210 95% 40%) 100%)",
            boxShadow: "0 0 18px hsl(190 100% 80% / 0.9), inset -2px -3px 6px hsl(210 80% 30% / 0.6)",
          }}
          initial={{ x: 0, y: 0, opacity: 0, scale: 0.2 }}
          animate={{
            x: [0, dx * 0.6, dx],
            y: [0, dy * 0.5, dy + 280], // gravity drop
            opacity: [0, 1, 1, 0],
            scale: [0.2, 1.1, 0.7],
          }}
          transition={{ duration, delay, ease: [0.2, 0.7, 0.4, 1] }}
        />
      ))}

      {/* Final ambient blue tint covering screen */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, hsl(195 100% 92% / 0.5), hsl(205 90% 60% / 0.35))",
          mixBlendMode: "screen",
          backdropFilter: "blur(3px)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.85, 0.5, 0] }}
        transition={{ duration: TOTAL_MS / 1000, ease: "easeOut" }}
      />
    </motion.div>
  );
};

/* ---------------- FIRE BURST — flame explosion from origin ---------------- */
const FireBurst = ({ origin }: { origin: { x: number; y: number } }) => {
  const { W, H } = useViewport();
  const maxR = Math.hypot(W, H) * 1.15;

  const embers = useMemo(
    () => range(110).map((i) => {
      const angle = (i / 110) * Math.PI * 2 + Math.random() * 0.4;
      const dist = 240 + Math.random() * Math.max(W, H);
      return {
        key: i,
        dx: Math.cos(angle) * dist,
        dy: Math.sin(angle) * dist - 200 - Math.random() * 280, // strong upward bias
        size: 4 + Math.random() * 12,
        delay: Math.random() * 0.4,
        duration: 1 + Math.random() * 1.0,
        hue: 18 + Math.random() * 38,
      };
    }),
    [W, H],
  );

  const flames = useMemo(
    () => range(16).map((i) => {
      const angle = -Math.PI / 2 + (i / 16 - 0.5) * Math.PI * 1.6;
      return {
        key: i,
        angle,
        length: 220 + Math.random() * 280,
        delay: Math.random() * 0.18,
      };
    }),
    [],
  );

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[100] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.55 } }}
    >
      <motion.div
        className="absolute"
        style={{
          left: origin.x,
          top: origin.y,
          width: maxR * 2,
          height: maxR * 2,
          marginLeft: -maxR,
          marginTop: -maxR,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, hsl(55 100% 90% / 0.98) 0%, hsl(40 100% 65% / 0.9) 16%, hsl(20 100% 52% / 0.78) 36%, hsl(8 95% 30% / 0.6) 60%, hsl(0 80% 8% / 0) 92%)",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: [0, 1, 1, 0.6, 0] }}
        transition={{ duration: BURST_MS / 1000, ease: [0.22, 0.85, 0.3, 1] }}
      />

      <motion.div
        className="absolute"
        style={{
          left: origin.x,
          top: origin.y,
          width: maxR * 1.6,
          height: maxR * 1.6,
          marginLeft: -maxR * 0.8,
          marginTop: -maxR * 0.8,
          borderRadius: "50%",
          overflow: "hidden",
        }}
        initial={{ scale: 0.05, opacity: 0 }}
        animate={{ scale: 1, opacity: [0, 0.9, 0.6, 0] }}
        transition={{ duration: BURST_MS / 1000, ease: [0.22, 0.85, 0.3, 1] }}
      >
        <video
          className="h-full w-full object-cover"
          src="/theme-media/fire-transition.mp4"
          autoPlay muted playsInline preload="auto"
          style={{ mixBlendMode: "screen", filter: "saturate(1.5) contrast(1.2)" }}
        />
      </motion.div>

      <svg className="absolute inset-0" width={W} height={H} style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id="fireStreak" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(55 100% 92%)" stopOpacity="1" />
            <stop offset="55%" stopColor="hsl(35 100% 62%)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(15 100% 48%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {flames.map(({ key, angle, length, delay }) => {
          const x2 = origin.x + Math.cos(angle) * length;
          const y2 = origin.y + Math.sin(angle) * length;
          return (
            <motion.line
              key={key}
              x1={origin.x} y1={origin.y} x2={x2} y2={y2}
              stroke="url(#fireStreak)"
              strokeWidth={12}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
              transition={{ duration: 0.95, delay, ease: "easeOut" }}
              style={{ filter: "drop-shadow(0 0 14px hsl(30 100% 60% / 0.95))" }}
            />
          );
        })}
      </svg>

      {embers.map(({ key, dx, dy, size, delay, duration, hue }) => (
        <motion.div
          key={key}
          className="absolute rounded-full"
          style={{
            left: origin.x,
            top: origin.y,
            width: size,
            height: size,
            marginLeft: -size / 2,
            marginTop: -size / 2,
            background: `radial-gradient(circle, hsl(55 100% 92%) 0%, hsl(${hue} 100% 58%) 55%, hsl(${hue - 10} 100% 35% / 0) 100%)`,
            boxShadow: `0 0 22px hsl(${hue} 100% 60% / 0.95)`,
          }}
          initial={{ x: 0, y: 0, opacity: 0, scale: 0.2 }}
          animate={{
            x: [0, dx * 0.55, dx],
            y: [0, dy * 0.55, dy + 220],
            opacity: [0, 1, 1, 0],
            scale: [0.2, 1.1, 0.4],
          }}
          transition={{ duration, delay, ease: [0.2, 0.7, 0.4, 1] }}
        />
      ))}

      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, hsl(45 100% 60% / 0.4), hsl(15 100% 40% / 0.5))",
          mixBlendMode: "screen",
          backdropFilter: "blur(3px)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.9, 0.5, 0] }}
        transition={{ duration: TOTAL_MS / 1000, ease: "easeOut" }}
      />
    </motion.div>
  );
};
