import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useGlobalMouse } from "@/hooks/use-global-mouse";
import MagneticButton from "@/components/MagneticButton";
import GradientReveal from "@/components/GradientReveal";
import Lanyard from "@/components/Lanyard/Lanyard";
import zenyxLogo from "@/assets/lanyard/zenyx-logo.png";
import zenyxLogoLight from "@/assets/lanyard/zenyx-logo-light.png";
import { useTheme } from "@/hooks/use-theme";

const HeroSection = () => {
  const { mx, my } = useGlobalMouse();
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const wordmarkY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const wordmarkOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const orb1X = useTransform(mx, (v) => v * 60);
  const orb1Y = useTransform(my, (v) => v * 50);
  const orb2X = useTransform(mx, (v) => v * -90);
  const orb2Y = useTransform(my, (v) => v * -70);
  const cardLogo = theme === "water" ? zenyxLogoLight : zenyxLogo;

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(24_100%_55%_/_0.12)_0%,_transparent_60%)]" />
      <motion.div
        aria-hidden
        style={{ x: orb1X, y: orb1Y }}
        className="pointer-events-none absolute top-1/4 -left-32 w-[32rem] h-[32rem] rounded-full bg-primary/10 blur-[140px]"
      />
      <motion.div
        aria-hidden
        style={{ x: orb2X, y: orb2Y }}
        className="pointer-events-none absolute bottom-0 -right-32 w-[28rem] h-[28rem] rounded-full bg-accent/10 blur-[140px]"
      />

      {/* Massive faded wordmark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 font-display font-extrabold text-center whitespace-nowrap select-none"
        style={{
          fontSize: "clamp(120px, 22vw, 340px)",
          letterSpacing: "-0.06em",
          color: "hsl(var(--primary) / 0.04)",
          lineHeight: 1,
        }}
      >
        ZENYX
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8 items-center">
          {/* LEFT: copy */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-primary font-body text-xs tracking-[0.3em] uppercase">
                Digital Studio · Est. 2025
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-extrabold leading-[0.9] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6.5rem)" }}
            >
              <span className="text-foreground">ZENYX</span>{" "}
              <GradientReveal text="Digitals" />
              <br />
              <span className="text-muted-foreground font-display text-[0.4em] sm:text-[0.35em] font-medium tracking-widest uppercase block mt-4">
                We build websites that convert.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground font-body text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              A digital studio crafting high-performing{" "}
              <span className="text-foreground font-semibold">landing pages</span>,{" "}
              <span className="text-foreground font-semibold">full-stack platforms</span>, and{" "}
              <span className="text-foreground font-semibold">e-commerce experiences</span> for
              ambitious brands worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start flex-wrap mb-16"
            >
              <MagneticButton
                href="#contact"
                className="px-7 py-3 bg-primary text-primary-foreground font-body font-semibold text-sm sm:text-base rounded-lg glow-ember hover:scale-105 transition-transform duration-300 inline-flex items-center gap-2"
              >
                Start a Project <ArrowRight size={16} />
              </MagneticButton>
              <MagneticButton
                href="#projects"
                className="px-7 py-3 border border-primary/30 text-foreground font-body font-semibold text-sm sm:text-base rounded-lg hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Sparkles size={16} className="text-primary" /> View Our Work
              </MagneticButton>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="grid grid-cols-3 max-w-3xl mx-auto lg:mx-0 border-t border-border pt-8"
            >
              {[
                { value: "10+", label: "Happy Clients" },
                { value: "1+ Yr", label: "Studio Experience" },
                { value: "100%", label: "On-Time Delivery" },
              ].map((s) => (
                <div key={s.label} className="text-center lg:text-left px-2">
                  <p className="font-display text-2xl sm:text-4xl font-extrabold text-gradient-fire">
                    {s.value}
                  </p>
                  <p className="text-muted-foreground text-[10px] sm:text-xs font-body tracking-[0.2em] uppercase mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: interactive lanyard card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[520px] sm:h-[600px] lg:h-[640px] hidden md:block"
          >
            <Lanyard
              key={theme}
              position={[0, 0, 18]}
              gravity={[0, -40, 0]}
              frontImage={cardLogo}
              backImage={cardLogo}
              imageFit="cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
