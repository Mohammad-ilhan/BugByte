import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import GradientReveal from "@/components/GradientReveal";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";
import shot1 from "@/assets/showcase-1.jpg";
import shot2 from "@/assets/showcase-2.jpg";
import shot3 from "@/assets/showcase-3.jpg";
import waterShot1 from "@/assets/showcase-water-1.jpg";
import waterShot2 from "@/assets/showcase-water-2.jpg";
import waterShot3 from "@/assets/showcase-water-3.jpg";
import { useTheme } from "@/hooks/use-theme";

const VisualShowcase = () => {
  const { theme } = useTheme();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 70]);
  const shots = theme === "water"
    ? [waterShot1, waterShot2, waterShot3]
    : [shot1, shot2, shot3];

  return (
    <section
      ref={ref}
      id="craft"
      className="relative overflow-hidden py-14 sm:py-28 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(var(--primary)/0.10),transparent_65%)]"
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal direction="up" className="max-w-3xl mb-10 sm:mb-16">
          <p className="text-primary font-body text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">
            The Craft
          </p>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.1]">
            Interfaces built to <GradientReveal text="glow" />.
          </h2>
          <p className="text-muted-foreground font-body text-base sm:text-lg mt-5 leading-relaxed">
            Motion, depth and detail on every surface — the difference between a website that works
            and one people remember.
          </p>
        </ScrollReveal>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
          <ScrollReveal direction="left" distance={60} className="lg:row-span-2">
            <motion.div style={{ y: y1 }} className="h-full">
              <TiltCard
                max={5}
                className="group h-full overflow-hidden rounded-2xl border border-primary/15 bg-card/60 backdrop-blur-sm"
              >
                <img
                  src={shots[0]}
                  alt={theme === "water" ? "Luminous aqua analytics interface" : "Dark dashboard interface with glowing ember accents"}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] sm:h-[26rem] lg:h-[34rem]"
                />
                <div className="p-5 sm:p-7">
                  <h3 className="font-display text-xl sm:text-2xl font-bold">Product Dashboards</h3>
                  <p className="text-muted-foreground font-body text-sm mt-2 leading-relaxed">
                    Data-dense panels that stay calm, readable and fast under real usage.
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal direction="right" distance={60} className="lg:col-span-2">
            <motion.div style={{ y: y2 }}>
              <TiltCard
                max={4}
                className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-card/60"
              >
                <img
                  src={shots[1]}
                  alt={theme === "water" ? "Translucent aqua ribbons over an architectural grid" : "Abstract molten light ribbons over a dark geometric grid"}
                  loading="lazy"
                  width={1280}
                  height={912}
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-[1.05] sm:h-72"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 sm:p-7">
                  <h3 className="font-display text-xl sm:text-2xl font-bold">Motion & Micro-Detail</h3>
                  <p className="text-muted-foreground font-body text-sm mt-2 max-w-md leading-relaxed">
                    Scroll-linked reveals, magnetic buttons and physics-driven interactions.
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={60} delay={0.1} className="lg:col-span-2">
            <TiltCard
              max={4}
              className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-card/60"
            >
              <img
                src={shots[2]}
                alt={theme === "water" ? "Layered glass interfaces with cyan light" : "Layered translucent glass website layouts lit with amber rim light"}
                loading="lazy"
                width={1280}
                height={912}
                className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-[1.05] sm:h-72"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 sm:p-7">
                <h3 className="font-display text-xl sm:text-2xl font-bold">Layouts With Depth</h3>
                <p className="text-muted-foreground font-body text-sm mt-2 max-w-md leading-relaxed">
                  Layered composition and typography that scales from phone to widescreen.
                </p>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default VisualShowcase;
