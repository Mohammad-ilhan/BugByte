import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FireParticles from "@/components/FireParticles";
import ScrollProgress from "@/components/ScrollProgress";
import BackgroundFX from "@/components/BackgroundFX";
import CursorGlow from "@/components/CursorGlow";
import GradientReveal from "@/components/GradientReveal";
import { portfolioSites } from "@/data/portfolio";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Website Portfolio | BugByte Digitals";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Live websites designed and built by BugByte Digitals — e-commerce stores, landing pages and full-stack platforms across retail, real estate, health and education."
      );
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <BackgroundFX />
      <CursorGlow />
      <FireParticles />
      <Navbar />

      <main className="pt-28 sm:pt-32 pb-16">
        <section className="relative overflow-hidden py-8 sm:py-14">
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
                Selected Work
              </p>
              <h1 className="font-display font-extrabold leading-[0.95] tracking-tight text-4xl sm:text-6xl md:text-7xl">
                Website <GradientReveal text="Portfolio" />
              </h1>
              <p className="text-muted-foreground font-body text-sm sm:text-lg mt-5 leading-relaxed">
                Live websites we designed and shipped — tap any card to open the real site.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {portfolioSites.map((site, i) => (
                <motion.a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                  className="group relative block overflow-hidden rounded-none border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_18px_50px_-20px_hsl(var(--primary)/0.55)]"
                >
                  {/* image fills the card as its background */}
                  <img
                    src={site.image}
                    alt={`${site.name} website designed by BugByte Digitals`}
                    loading="eager"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover opacity-40 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/45"
                  />

                  <div className="relative flex min-h-[190px] sm:min-h-[210px] flex-col justify-end p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {site.name}
                      </h2>
                      <ArrowUpRight
                        size={18}
                        className="mt-1 shrink-0 text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                    <p className="mt-2 font-body text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {site.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-14">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="relative overflow-hidden border border-primary/20 bg-card/60 p-8 sm:p-14 text-center backdrop-blur-sm">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.18),transparent_65%)]"
              />
              <h2 className="relative font-display text-2xl sm:text-4xl font-bold">
                Want your site <GradientReveal text="here" />?
              </h2>
              <p className="relative text-muted-foreground font-body text-sm sm:text-base mt-3 max-w-xl mx-auto">
                Landing pages, full-stack platforms and stores — designed, built and shipped by one team.
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

export default Portfolio;
