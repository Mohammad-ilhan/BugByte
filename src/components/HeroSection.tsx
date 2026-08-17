import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useGlobalMouse } from "@/hooks/use-global-mouse";
import MagneticButton from "@/components/MagneticButton";
import GradientReveal from "@/components/GradientReveal";
import HeroEmbers from "@/components/HeroEmbers";
import Lanyard from "@/components/Lanyard/Lanyard";
import bugbyteLogo from "@/assets/lanyard/zenyx-logo.png";
import bugbyteLogoLight from "@/assets/lanyard/zenyx-logo-light.png";
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
  const cardLogo = theme === "water" ? bugbyteLogoLight : bugbyteLogo;
  const isCompact = useIsMobile();


  return (
    <section ref={sectionRef} id="home" className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 pb-14 sm:pt-24 sm:pb-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)_/_0.14)_0%,_transparent_62%)]" />
      {/* fine grid, fades toward the bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(ellipse_at_50%_35%,black,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)/0.25) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.25) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <HeroEmbers />
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


      {/* Massive faded wordmark — parallax on scroll */}
      <motion.div
        aria-hidden
        style={{
          y: wordmarkY,
          opacity: wordmarkOpacity,
          fontSize: "clamp(72px, 20vw, 340px)",
          letterSpacing: "-0.06em",
          color: "hsl(var(--primary) / 0.04)",
          lineHeight: 1,
        }}
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 font-display font-extrabold text-center whitespace-nowrap select-none will-change-transform"
      >
        BUGBYTE
      </motion.div>


      <motion.div style={{ y: contentY }} className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8 items-center">
          {/* LEFT: copy */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-6 sm:mb-8 max-w-full"
            >
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-primary font-body text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                Digital Studio · Est. 2025
              </span>
            </motion.div>


            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-extrabold leading-[0.95] sm:leading-[0.9] tracking-tight mb-5 sm:mb-6"
              style={{ fontSize: "clamp(2.25rem, 11vw, 6.5rem)" }}
            >
              <span className="text-foreground">BugByte</span>{" "}
              <GradientReveal text="Digitals" />
              <br />
              <span className="text-muted-foreground font-display text-[0.45em] sm:text-[0.35em] font-medium tracking-wider sm:tracking-widest uppercase block mt-3 sm:mt-4">
                We build websites that convert.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground font-body text-sm sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed"
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
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 justify-center lg:justify-start sm:flex-wrap mb-10 sm:mb-16"
            >
              <MagneticButton
                href="#contact"
                className="w-full sm:w-auto px-7 py-3.5 sm:py-3 bg-primary text-primary-foreground font-body font-semibold text-sm sm:text-base rounded-lg glow-ember hover:scale-105 transition-transform duration-300 inline-flex items-center justify-center gap-2"
              >
                Start a Project <ArrowRight size={16} />
              </MagneticButton>
              <MagneticButton
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 sm:py-3 border border-primary/30 text-foreground font-body font-semibold text-sm sm:text-base rounded-lg hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Sparkles size={16} className="text-primary" /> View Our Work
              </MagneticButton>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="grid grid-cols-3 gap-2 max-w-3xl mx-auto lg:mx-0 border-t border-border pt-6 sm:pt-8"
            >
              {[
                { value: "10+", label: "Happy Clients" },
                { value: "1+ Yr", label: "Studio Experience" },
                { value: "100%", label: "On-Time Delivery" },
              ].map((s) => (
                <div key={s.label} className="text-center lg:text-left px-1 sm:px-2">
                  <p className="font-display text-xl sm:text-4xl font-extrabold text-gradient-fire">
                    {s.value}
                  </p>
                  <p className="text-muted-foreground text-[9px] sm:text-xs font-body tracking-normal sm:tracking-[0.2em] uppercase mt-1 leading-tight">
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
            className="relative order-first lg:order-none h-[340px] sm:h-[480px] md:h-[560px] lg:h-[640px]"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 sm:h-80 sm:w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[90px]"
            />
            <Lanyard
              key={theme}
              position={[0, 0, isCompact ? 22 : 18]}
              gravity={[0, -40, 0]}
              frontImage={cardLogo}
              backImage={cardLogo}
              imageFit="contain"
              cardBackground={theme === "water" ? "#ffffff" : "#000000"}
              logoScale={0.55}
            />
            <p className="absolute inset-x-0 bottom-0 text-center text-[10px] sm:text-xs font-body uppercase tracking-[0.25em] text-muted-foreground">
              Drag the card
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="pointer-events-none absolute inset-x-0 bottom-5 hidden sm:flex justify-center"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-6 rounded-full border border-primary/40 flex items-start justify-center p-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        </motion.span>
      </motion.div>
    </section>

  );
};

export default HeroSection;
