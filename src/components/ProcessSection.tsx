import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import GradientReveal from "@/components/GradientReveal";

const steps = [
  {
    n: "01",
    title: "Discovery",
    description:
      "We understand your brand, audience and goals in a focused kickoff call — no fluff, no filler.",
  },
  {
    n: "02",
    title: "Design",
    description:
      "We craft a bespoke visual direction with typography, palette and layout tailored to your industry.",
  },
  {
    n: "03",
    title: "Build",
    description:
      "Clean, hand-written code. React + Tailwind, edge-deployed, mobile-first and lightning fast.",
  },
  {
    n: "04",
    title: "Launch",
    description:
      "We deploy, monitor and hand over — with docs so you're never locked in or left behind.",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-20 sm:py-28 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 sm:mb-20 max-w-2xl mx-auto"
        >
          <p className="text-primary font-body text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">
            How We Work
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            A simple, <GradientReveal text="proven" /> process.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
              className="relative group"
            >
              <div className="bg-card border border-border rounded-xl p-6 sm:p-7 h-full hover:border-primary/40 hover:glow-ember transition-all duration-500">
                <p className="font-display text-4xl sm:text-5xl font-extrabold text-primary/20 group-hover:text-primary/50 transition-colors mb-4">
                  {s.n}
                </p>
                <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground font-body text-xs sm:text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
