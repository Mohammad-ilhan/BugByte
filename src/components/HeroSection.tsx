import { AnimatePresence, motion, useTransform } from "framer-motion";
import profileFire from "@/assets/profile-fire.webp";
import profileWater from "@/assets/profile-water.webp";
import resumeAsset from "@/assets/Mohammad_Ilhan_Resume.pdf.asset.json";
import { Github, Linkedin, Mail, ChevronDown, Download } from "lucide-react";
import { useMouseTilt } from "@/hooks/use-mouse-tilt";
import { useGlobalMouse } from "@/hooks/use-global-mouse";
import { useTheme } from "@/hooks/use-theme";
import MagneticButton from "@/components/MagneticButton";
import GradientReveal from "@/components/GradientReveal";

const HeroSection = () => {
  const tilt = useMouseTilt({ max: 12, spring: { stiffness: 150, damping: 16 } });
  const { mx, my } = useGlobalMouse();
  const { theme } = useTheme();
  const profileImg = theme === "water" ? profileWater : profileFire;

  // Parallax orbs (px)
  const orb1X = useTransform(mx, (v) => v * 60);
  const orb1Y = useTransform(my, (v) => v * 50);
  const orb2X = useTransform(mx, (v) => v * -90);
  const orb2Y = useTransform(my, (v) => v * -70);

  // Theme-aware accent hsl values for dynamic styles
  const accent = theme === "water" ? "200 95% 55%" : "24 100% 55%";
  const accentBright = theme === "water" ? "190 100% 70%" : "24 100% 65%";

  // Subtle depth shadow on name
  const shadow = useTransform([mx, my] as any, ([x, y]: any) =>
    `${(-x as number) * 8}px ${(-y as number) * 8}px 30px hsl(${accent} / 0.35)`
  );

  // Spotlight on image
  const spotX = useTransform(tilt.px, (v) => `${v * 100}%`);
  const spotY = useTransform(tilt.py, (v) => `${v * 100}%`);
  const spot = useTransform([spotX, spotY] as any, ([x, y]: any) =>
    `radial-gradient(circle at ${x} ${y}, hsl(${accentBright} / 0.35), transparent 55%)`
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 md:pt-0 md:pb-0">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_hsl(24_100%_55%_/_0.1)_0%,_transparent_60%)]" />

      {/* Parallax ambient orbs */}
      <motion.div
        aria-hidden
        style={{ x: orb1X, y: orb1Y }}
        className="pointer-events-none absolute top-1/4 -left-20 w-[28rem] h-[28rem] rounded-full bg-primary/10 blur-[120px]"
      />
      <motion.div
        aria-hidden
        style={{ x: orb2X, y: orb2Y }}
        className="pointer-events-none absolute bottom-10 right-0 w-[24rem] h-[24rem] rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-8">
          {/* Image — show on top on mobile */}
          <motion.div
            ref={tilt.ref}
            onMouseMove={tilt.onMouseMove}
            onMouseLeave={tilt.onMouseLeave}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            style={{
              rotateX: tilt.rotateX,
              rotateY: tilt.rotateY,
              transformPerspective: 1000,
              transformStyle: "preserve-3d",
            }}
            className="flex-shrink-0 relative order-first lg:order-last will-change-transform"
          >
            <div className="absolute -inset-6 bg-primary/15 rounded-3xl blur-3xl animate-pulse-glow" />
            <div className="relative overflow-hidden rounded-2xl border border-primary/20 glow-ember">
              <div className="relative w-48 sm:w-56 md:w-72 lg:w-[22rem]" style={{ transform: "translateZ(40px)" }}>
                <img
                  src={profileFire}
                  alt=""
                  aria-hidden
                  width={880}
                  height={1178}
                  className="block w-full h-auto object-cover invisible"
                />
                <AnimatePresence mode="sync">
                  <motion.img
                    key={theme}
                    src={profileImg}
                    alt="Mohammad Ilhan — ML Engineer & Full Stack Developer portrait"
                    width={880}
                    height={1178}
                    fetchPriority="high"
                    decoding="async"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-16 md:h-24 bg-gradient-to-t from-background to-transparent" />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 mix-blend-overlay"
                style={{ background: spot }}
              />
            </div>
          </motion.div>

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-primary font-body text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4"
            >
              ML Engineer • Full Stack Dev • Freelancer
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ textShadow: shadow as any }}
              className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] mb-4 sm:mb-6"
            >
              <span className="text-foreground">Mohammad</span>
              <br />
              <GradientReveal text="Ilhan" />
              <span className="sr-only"> — ML Engineer & Full Stack Developer</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground font-body text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed"
            >
              Turning complex ideas into intelligent software — from machine learning systems
              to sleek web experiences. I build things that think, scale, and leave an impression.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start flex-wrap"
            >
              <MagneticButton
                href="#projects"
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground font-body font-semibold text-sm sm:text-base rounded-lg glow-ember hover:scale-105 transition-transform duration-300 inline-block"
              >
                View Projects
              </MagneticButton>
              <MagneticButton
                href="#contact"
                className="px-6 sm:px-8 py-2.5 sm:py-3 border border-primary/30 text-primary font-body font-semibold text-sm sm:text-base rounded-lg hover:bg-primary/10 transition-all duration-300 inline-block"
              >
                Hire Me
              </MagneticButton>
              <MagneticButton
                href={resumeAsset.url}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-2.5 sm:py-3 border border-border text-muted-foreground font-body font-semibold text-sm sm:text-base rounded-lg hover:border-primary/30 hover:text-primary transition-all duration-300 inline-flex items-center gap-2"
              >
                <Download size={16} />
                Resume
              </MagneticButton>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-4 sm:gap-5 mt-6 sm:mt-8 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com/Mohammad-ilhan", label: "GitHub profile" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/mohammad-ilhan/", label: "LinkedIn profile" },
                { icon: Mail, href: "mailto:mohammadilhan345@gmail.com", label: "Send email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator - hidden on small mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="text-primary/50" size={28} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
