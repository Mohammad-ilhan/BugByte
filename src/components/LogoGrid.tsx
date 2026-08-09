import { motion } from "framer-motion";
import { brandLogos, type BrandLogo } from "@/data/logos";
import TiltCard from "@/components/TiltCard";

interface LogoGridProps {
  logos?: BrandLogo[];
  bento?: boolean;
}

const LogoTile = ({ logo, index, bento }: { logo: BrandLogo; index: number; bento: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 24, scale: 0.97 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.55, delay: (index % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
    className={bento ? logo.span ?? "" : ""}
  >
    <TiltCard max={5} className="h-full">
      <div className="group relative h-full min-h-[220px] overflow-hidden rounded-2xl border border-primary/15 bg-card/60 backdrop-blur-sm transition-colors duration-500 hover:border-primary/50">
        {/* premium sheen */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.18),transparent_65%)]" />
        <div className="pointer-events-none absolute -inset-x-10 -top-24 h-40 rotate-12 bg-gradient-to-r from-transparent via-foreground/10 to-transparent translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-[1400ms] ease-out" />

        <div className="relative flex h-full flex-col">
          <div className="flex flex-1 items-center justify-center p-6 sm:p-8">
            <img
              src={logo.url}
              alt={`${logo.name} logo designed by BugByte Digitals`}
              loading="lazy"
              className="max-h-40 w-auto max-w-full object-contain drop-shadow-[0_10px_30px_hsl(var(--primary)/0.15)] transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>
          <div className="flex items-end justify-between gap-3 border-t border-border/60 px-5 py-4">
            <div className="min-w-0">
              <p className="font-display text-sm sm:text-base font-bold truncate">{logo.name}</p>
              <p className="text-muted-foreground font-body text-[11px] sm:text-xs truncate">
                {logo.tagline}
              </p>
            </div>
            <span className="shrink-0 rounded-full border border-primary/25 bg-primary/5 px-2.5 py-1 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-primary">
              {logo.industry}
            </span>
          </div>
        </div>
      </div>
    </TiltCard>
  </motion.div>
);

const LogoGrid = ({ logos = brandLogos, bento = true }: LogoGridProps) => (
  <div
    className={`grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ${
      bento ? "lg:auto-rows-[minmax(220px,auto)]" : ""
    }`}
  >
    {logos.map((logo, i) => (
      <LogoTile key={logo.name} logo={logo} index={i} bento={bento} />
    ))}
  </div>
);

export default LogoGrid;
