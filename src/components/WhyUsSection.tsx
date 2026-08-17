import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Clock, Users, TrendingUp } from "lucide-react";
import GradientReveal from "@/components/GradientReveal";

const pillars = [
  {
    icon: Users,
    value: "10+",
    label: "Clients Served",
    detail: "Businesses trust BugByte Digitals to bring their vision online.",
  },
  {
    icon: Award,
    value: "1+ Year",
    label: "Studio Experience",
    detail: "A focused track record of shipping production-grade websites.",
  },
  {
    icon: Clock,
    value: "2 Weeks",
    label: "Avg. Turnaround",
    detail: "Most landing pages ship in under 14 days, end to end.",
  },
  {
    icon: TrendingUp,
    value: "100%",
    label: "Delivery Rate",
    detail: "Every project delivered on time, on scope, on brand.",
  },
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-14 sm:py-28 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_hsl(24_100%_55%_/_0.06)_0%,_transparent_55%)]" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-body text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">
              Why BugByte
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
              A studio built for <GradientReveal text="ambitious brands" />.
            </h2>
            <p className="text-muted-foreground font-body text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
              We aren't a template farm. BugByte Digitals is a small, senior team focused on
              shipping premium digital products — landing pages that convert, full-stack platforms
              that scale, and storefronts that sell.
            </p>
            <p className="text-muted-foreground font-body text-sm sm:text-base lg:text-lg leading-relaxed">
              Every project is designed, coded and deployed by us — no outsourcing, no
              copy-paste. Just clean code, sharp design and honest communication.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.2 + i * 0.1 }}
                className="bg-card border border-border rounded-xl p-5 sm:p-6 hover:border-primary/40 transition-all duration-500"
              >
                <p.icon className="text-primary mb-3" size={22} />
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-foreground">
                  {p.value}
                </p>
                <p className="text-primary/90 text-[11px] sm:text-xs font-body tracking-[0.2em] uppercase mt-1 mb-2">
                  {p.label}
                </p>
                <p className="text-muted-foreground text-[11px] sm:text-xs font-body leading-relaxed">
                  {p.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
