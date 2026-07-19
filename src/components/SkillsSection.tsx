import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import TiltCard from "@/components/TiltCard";
import GradientReveal from "@/components/GradientReveal";
import TechMarquee from "@/components/TechMarquee";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "MySQL"],
  },
  {
    title: "AI / ML",
    skills: ["Scikit-learn", "FAISS", "Ollama", "Groq API", "RAG Systems", "NLP"],
  },
  {
    title: "Libraries",
    skills: ["NumPy", "Pandas", "Matplotlib"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Cloudflare Workers", "Prompt Engineering", "Excel"],
  },

];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;
  const dist = reduce ? 0 : 30;

  return (
    <section id="skills" className="py-16 sm:py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(24_100%_55%_/_0.05)_0%,_transparent_60%)]" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: dist }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-primary font-body text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">Tech Stack</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Skills & <GradientReveal text="Expertise" />
          </h2>
        </motion.div>

        <div className="mb-10 sm:mb-14 -mx-4 sm:-mx-6">
          <TechMarquee />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: dist }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + 0.12 * i, ease }}
            >
              <TiltCard max={5} className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:border-primary/30 transition-all duration-500 group h-full">
                <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: reduce ? 0 : 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.35, delay: 0.3 + 0.12 * i + 0.05 * j, ease }}
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-body bg-secondary text-secondary-foreground rounded-md border border-border hover:border-primary/40 hover:text-primary transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
