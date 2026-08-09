import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FireParticles from "@/components/FireParticles";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import LogoGrid from "@/components/LogoGrid";
import GradientReveal from "@/components/GradientReveal";
import { brandLogos } from "@/data/logos";

const Logos = () => {
  useEffect(() => {
    document.title = "Logo Design Portfolio | BugByte Digitals";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Premium logo and brand identity design portfolio by BugByte Digitals — marks crafted for hospitality, real estate, agriculture, education and luxury retail."
      );
  }, []);

  const industries = Array.from(new Set(brandLogos.map((l) => l.industry)));

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <CursorGlow />
      <FireParticles />
      <Navbar />

      <main className="pt-28 sm:pt-32 pb-16">
        <section className="relative overflow-hidden py-10 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.12)_0%,_transparent_60%)]"
          />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm mb-8"
            >
              <ArrowLeft size={16} /> Back to home
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <p className="text-primary font-body text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">
                Brand Identity Studio
              </p>
              <h1 className="font-display font-extrabold leading-[0.95] tracking-tight text-4xl sm:text-6xl md:text-7xl">
                Logo <GradientReveal text="Portfolio" />
              </h1>
              <p className="text-muted-foreground font-body text-sm sm:text-lg mt-5 leading-relaxed">
                A curated selection of identities designed by our studio — each mark built to scale
                from a favicon to a storefront sign, delivered with full colour, monochrome and
                reversed variants.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 grid grid-cols-3 gap-2 max-w-xl border-t border-border pt-6"
            >
              {[
                { value: `${brandLogos.length}+`, label: "Marks Delivered" },
                { value: `${industries.length}`, label: "Industries" },
                { value: "3", label: "Variants Each" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl sm:text-4xl font-extrabold text-gradient-fire">
                    {s.value}
                  </p>
                  <p className="text-muted-foreground text-[9px] sm:text-xs font-body uppercase tracking-[0.15em] mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <LogoGrid />
          </div>
        </section>

        <section className="py-10 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card/60 p-8 sm:p-14 text-center backdrop-blur-sm">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.18),transparent_65%)]"
              />
              <h2 className="relative font-display text-2xl sm:text-4xl font-bold">
                Need a mark that <GradientReveal text="lasts" />?
              </h2>
              <p className="relative text-muted-foreground font-body text-sm sm:text-base mt-3 max-w-xl mx-auto">
                We design identities alongside the websites they live on — one team, one direction.
              </p>
              <Link
                to="/#contact"
                className="relative mt-7 inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3.5 font-body font-semibold text-primary-foreground glow-ember transition-transform duration-300 hover:scale-105"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Logos;
