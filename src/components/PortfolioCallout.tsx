import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import GradientReveal from "@/components/GradientReveal";
import { portfolioSites } from "@/data/portfolio";

/**
 * Homepage teaser that replaces the old inline project list —
 * it simply routes visitors to the dedicated portfolio page.
 */
const PortfolioCallout = () => (
  <section id="projects" className="py-14 sm:py-28 md:py-32 relative overflow-hidden">
    <div
      aria-hidden
      className="pointer-events-none absolute -top-24 left-1/4 h-[26rem] w-[26rem] rounded-full bg-primary/10 blur-[150px]"
    />
    <div className="container mx-auto px-4 sm:px-6 relative z-10">
      <ScrollReveal direction="up">
        <div className="relative overflow-hidden border border-primary/20 bg-card/60 p-8 sm:p-14 text-center backdrop-blur-sm">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.16),transparent_65%)]"
          />
          <p className="relative text-primary font-body text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-4">
            Our Work
          </p>
          <h2 className="relative font-display text-3xl sm:text-5xl font-extrabold leading-tight">
            {portfolioSites.length}+ live websites, <GradientReveal text="one studio" />
          </h2>
          <p className="relative text-muted-foreground font-body text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Stores, landing pages and full-stack platforms shipped for brands across retail, real
            estate, health and education. Browse the full portfolio and open any project live.
          </p>
          <Link
            to="/portfolio"
            className="relative mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-body font-semibold text-primary-foreground glow-ember transition-transform duration-300 hover:scale-105"
          >
            View Portfolio <ArrowRight size={16} />
          </Link>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default PortfolioCallout;
