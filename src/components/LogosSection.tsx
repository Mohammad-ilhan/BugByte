import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import GradientReveal from "@/components/GradientReveal";
import LogoGrid from "@/components/LogoGrid";
import { brandLogos } from "@/data/logos";

const LogosSection = () => {
  return (
    <section id="logos" className="py-14 sm:py-28 md:py-32 relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-40 h-[26rem] w-[26rem] rounded-full bg-primary/10 blur-[150px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -right-40 h-[22rem] w-[22rem] rounded-full bg-accent/10 blur-[150px]"
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-10 sm:mb-16 max-w-3xl"
        >
          <p className="text-primary font-body text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">
            Brand Identity
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1]">
            Logos we&apos;ve <GradientReveal text="crafted" />.
          </h2>
        </motion.div>

        <LogoGrid logos={brandLogos.slice(0, 6)} />

        <div className="mt-10 sm:mt-14 flex justify-center">
          <Link
            to="/logos"
            className="group inline-flex items-center gap-2 rounded-lg border border-primary/30 px-7 py-3.5 font-body text-sm sm:text-base font-semibold text-foreground transition-all duration-300 hover:border-primary/60 hover:bg-primary/10"
          >
            View full logo portfolio
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
