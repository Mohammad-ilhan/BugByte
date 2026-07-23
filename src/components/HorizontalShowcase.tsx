import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import GradientReveal from "@/components/GradientReveal";
import Reveal from "@/components/Reveal";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const items = [
  { name: "Tivagro Digital", tag: "Agri-Tech · Corporate", url: "https://tivagrodigital.com/", accent: "from-emerald-500/30 to-primary/20" },
  { name: "Digital Amnik", tag: "Marketing Agency", url: "https://digitalamnik.com/", accent: "from-primary/30 to-fuchsia-500/20" },
  { name: "Kanaka Jewellery", tag: "E-Commerce · Edge", url: "https://linea-glide-one.mohammadilhan345.workers.dev/", accent: "from-amber-500/30 to-primary/20" },
  { name: "Effervescent Studio", tag: "Creative Landing", url: "https://effervescent-tiramisu-42ef9d.netlify.app/", accent: "from-rose-500/30 to-primary/20" },
  { name: "Cerulean Product", tag: "Live · In Production", url: "https://cerulean-crisp-84c711.netlify.app", accent: "from-sky-500/30 to-primary/20" },
  { name: "Celebrated Travesseiro", tag: "Editorial Brand", url: "https://6a5fc4f7202629127a101e6c--celebrated-travesseiro-9c7378.netlify.app/", accent: "from-orange-500/30 to-primary/20" },
  { name: "Dr. Aliza Fatima", tag: "Wellness · Full-Stack", url: "https://aliza-fatima.vercel.app/", accent: "from-teal-500/30 to-primary/20" },
];

const HorizontalShowcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  // Move roughly -70% of container width for a comfortable horizontal drift.
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-72%"]);

  return (
    <section id="showcase" ref={ref} className="relative" style={{ height: reduce ? "auto" : "300vh" }}>
      <div className={reduce ? "py-24" : "sticky top-0 h-screen flex flex-col justify-center overflow-hidden"}>
        <div className="container mx-auto px-4 sm:px-6 mb-10 sm:mb-14">
          <Reveal>
            <p className="text-primary font-body text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">
              Live Showcase
            </p>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] max-w-2xl">
                Scroll through <GradientReveal text="the work" />.
              </h2>
              {!reduce && (
                <p className="text-muted-foreground font-body text-xs sm:text-sm">
                  Scroll ↓ to slide horizontally →
                </p>
              )}
            </div>
          </Reveal>
        </div>

        {reduce ? (
          <div className="container mx-auto px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((it) => (
              <ShowcaseCard key={it.name} item={it} />
            ))}
          </div>
        ) : (
          <motion.div style={{ x }} className="flex gap-5 sm:gap-7 pl-4 sm:pl-8 will-change-transform">
            {items.map((it) => (
              <ShowcaseCard key={it.name} item={it} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

const ShowcaseCard = ({ item }: { item: (typeof items)[number] }) => (
  <a
    href={item.url}
    target="_blank"
    rel="noreferrer noopener"
    className="group relative flex-shrink-0 w-[78vw] sm:w-[52vw] lg:w-[38vw] xl:w-[32vw] aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-colors duration-500"
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-70`} />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--primary)_/_0.25),_transparent_60%)]" />
    <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
      <div className="flex items-start justify-between">
        <span className="text-[10px] tracking-[0.28em] uppercase text-primary/90 font-body bg-background/40 backdrop-blur px-2.5 py-1 rounded">
          {item.tag}
        </span>
        <div className="w-10 h-10 rounded-full bg-background/60 backdrop-blur flex items-center justify-center border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <ArrowUpRight size={18} />
        </div>
      </div>
      <div>
        <h3 className="font-display text-2xl sm:text-4xl font-bold text-foreground leading-tight">
          {item.name}
        </h3>
        <p className="text-muted-foreground font-body text-sm mt-2 opacity-80">Visit live site</p>
      </div>
    </div>
  </a>
);

export default HorizontalShowcase;
