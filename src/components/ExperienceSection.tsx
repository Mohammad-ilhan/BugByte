import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const timeline = [
  {
    year: "2026",
    title: "Freelance Journey Started",
    description: "Launched freelance career building premium websites, e-commerce platforms, and AI-powered solutions for clients worldwide.",
  },
  {
    year: "2025",
    title: "AI Project — Hewlett Packard Enterprise (HPE)",
    description: "Selected for AI-based project. Built dual-model RAG chatbot integrating DeepSeek & Mistral models. Optimized responses for document queries.",
  },
  {
    year: "2025",
    title: "Machine Learning Certification — Columbia University",
    description: "Completed ML certification covering supervised/unsupervised learning, model optimization, and real-world ML pipeline design from Columbia University.",
  },
  {
    year: "2022–2026",
    title: "B.Tech CSE — JECRC University, Jaipur",
    description: "Pursuing Computer Science Engineering with CGPA 7.6. Focus areas include Machine Learning, Artificial Intelligence, and modern web technologies.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;
  const dist = reduce ? 0 : 30;

  return (
    <section id="experience" className="py-16 sm:py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(24_100%_55%_/_0.05)_0%,_transparent_60%)]" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: dist }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-primary font-body text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">Journey</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Experience & <span className="text-gradient-fire">Education</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-0">
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: reduce ? 0 : -20, y: dist }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + 0.15 * i, ease }}
              className="relative pl-8 sm:pl-10 pb-10 sm:pb-12 last:pb-0 border-l border-border ml-2"
            >
              <div className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-primary glow-ember border-2 border-background" />
              <span className="text-primary text-xs font-body tracking-widest">{item.year}</span>
              <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mt-1 mb-1.5 sm:mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm font-body leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
