import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Sparkles, Code, Briefcase } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import TiltCard from "@/components/TiltCard";
import GradientReveal from "@/components/GradientReveal";

const stats = [
  { icon: Briefcase, label: "Freelance Projects", value: "5+" },
  { icon: Sparkles, label: "AI Projects", value: "3+" },
  { icon: Code, label: "Prompt Engineering", value: "Expert" },
  { icon: GraduationCap, label: "B.Tech CSE", value: "2026" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;
  const dist = reduce ? 0 : 30;

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: dist }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-primary font-body text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">About Me</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            Crafting <GradientReveal text="Intelligence" />
          </h2>
          <p className="text-muted-foreground font-body text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
            Aspiring Machine Learning Engineer and professional Freelancer with hands-on experience building RAG-based AI systems, 
            intelligent chatbots, and production-ready web applications for real clients. Skilled in Python, ML model development, 
            and deploying AI-powered applications using FAISS, Ollama, and Groq API.
          </p>
          <p className="text-muted-foreground font-body text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
            As a <span className="text-primary font-semibold">Prompt Engineer</span>, I've built full-stack websites, e-commerce platforms, 
            and AI projects purely through intelligent prompting — demonstrating that the future of development lies at the intersection 
            of human creativity and AI capability.
          </p>
          <p className="text-muted-foreground font-body text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-12">
            Currently pursuing B.Tech in Computer Science at JECRC University, Jaipur. Selected for HPE's AI project where
            I built a dual-model RAG chatbot. Certified in Machine Learning from Columbia University.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: dist }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.25 + i * 0.1, ease }}
            >
              <TiltCard max={7} className="bg-card border border-border rounded-xl p-4 sm:p-6 text-center hover:border-primary/30 hover:glow-ember transition-all duration-500 h-full">
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary mx-auto mb-2 sm:mb-3" />
                <p className="font-display text-xl sm:text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-muted-foreground text-[10px] sm:text-xs font-body mt-1">{stat.label}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
