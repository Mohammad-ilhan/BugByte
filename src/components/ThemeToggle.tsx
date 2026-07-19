import { Droplets, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";

const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const { theme, toggle } = useTheme();
  const [hover, setHover] = useState(false);
  const isWater = theme === "water";

  // When in fire theme, button cools things down. When in water, button fires it up.
  const hoverText = isWater ? "Fire up the cool" : "Freeze the fire";

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    toggle({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
  };

  return (
    <div className="relative flex items-center">
      <button
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-label={hoverText}
        className={`relative inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card/60 backdrop-blur-md hover:border-primary/60 hover:glow-ember transition-all duration-300 overflow-hidden ${className}`}
      >
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-primary"
        >
          {isWater ? <Flame size={18} /> : <Droplets size={18} />}
        </motion.span>
      </button>

      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.92 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="pointer-events-none absolute top-full right-0 mt-2 whitespace-nowrap rounded-md border border-primary/40 bg-card/95 backdrop-blur-md px-3 py-1.5 text-xs font-body font-medium text-primary shadow-lg z-50"
          >
            <span className="text-gradient-fire font-semibold">{hoverText}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;
