import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Layout, Layers, ShoppingBag, Rocket, Sparkles, Zap } from "lucide-react";
import TiltCard from "@/components/TiltCard";
import GradientReveal from "@/components/GradientReveal";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: Layout,
    title: "Landing Pages",
    description:
      "High-converting landing pages engineered for speed, clarity and results — perfect for launches, campaigns and product releases.",
    tags: ["Conversion Focused", "SEO Ready", "Blazing Fast"],
  },
  {
    icon: Layers,
    title: "Full-Stack Websites",
    description:
      "End-to-end web platforms with authentication, dashboards, databases and admin panels — production-grade from day one.",
    tags: ["React", "Auth", "APIs", "Databases"],
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Platforms",
    description:
      "Complete online stores with product catalogs, secure checkout, inventory management and merchant dashboards.",
    tags: ["Payments", "Cart", "Admin Panel"],
  },
  {
    icon: Sparkles,
    title: "Premium Templates",
    description:
      "Beautifully crafted, ready-to-ship templates — from wedding invitations to portfolios — customized to your brand.",
    tags: ["Custom Design", "Animation"],
  },
  {
    icon: Rocket,
    title: "Deployment & Hosting",
    description:
      "Edge-deployed on Vercel and Cloudflare Workers for sub-second global load times — we ship, monitor and maintain.",
    tags: ["Edge Network", "CI/CD"],
  },
  {
    icon: Zap,
    title: "Rapid Redesigns",
    description:
      "Have an outdated site? We rebuild it modern, mobile-first and stunning — usually inside two weeks.",
    tags: ["2-Week Turnaround", "Modern Stack"],
  },
];

const ServicesSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [60, -100]);

  return (
    <section ref={ref} id="services" className="py-14 sm:py-28 md:py-32 relative overflow-hidden">
      <motion.div
        aria-hidden
        style={{ y: blobY }}
        className="pointer-events-none absolute -top-20 -left-32 w-[28rem] h-[28rem] rounded-full bg-primary/[0.06] blur-[120px]"
      />
      <motion.div
        aria-hidden
        style={{ y: blob2Y }}
        className="pointer-events-none absolute bottom-0 -right-32 w-[24rem] h-[24rem] rounded-full bg-accent/[0.06] blur-[120px]"
      />
      <div className="container mx-auto px-4 sm:px-6 relative">
        <ScrollReveal direction="up" className="max-w-3xl mb-14 sm:mb-20">
          <p className="text-primary font-body text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.1] sm:leading-[1.05]">
            Websites that <GradientReveal text="perform" />, brands that <GradientReveal text="stand out" />.
          </h2>
          <p className="text-muted-foreground font-body text-base sm:text-lg mt-6 leading-relaxed">
            From single-page launches to complex full-stack platforms — BugByte Digitals builds
            digital products designed to grow your business.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((s, i) => (
            <ScrollReveal
              key={s.title}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={0.05 + (i % 3) * 0.08}
              distance={50}
            >
              <TiltCard max={6} className="group h-full bg-card border border-border rounded-xl p-6 sm:p-7 hover:border-primary/40 hover:glow-ember transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                  <s.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                  {s.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-body px-2 py-0.5 bg-secondary text-muted-foreground rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
