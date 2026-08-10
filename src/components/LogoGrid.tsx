import { motion } from "framer-motion";
import { brandLogos, type BrandLogo } from "@/data/logos";

interface LogoGridProps {
  logos?: BrandLogo[];
}

const LogoGrid = ({ logos = brandLogos }: LogoGridProps) => (
  <div className="grid gap-3 sm:gap-6 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3">
    {logos.map((logo, i) => (
      <motion.div
        key={logo.name}
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, delay: (i % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
        className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-card/60 backdrop-blur-sm transition-colors duration-500 hover:border-primary/50"
      >
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.18),transparent_65%)]" />
        <div className="flex aspect-[16/10] sm:aspect-[4/3] items-center justify-center p-3 sm:p-8">
          <img
            src={logo.url}
            alt={logo.name}
            loading="lazy"
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.05]"
          />
        </div>
      </motion.div>
    ))}
  </div>
);

export default LogoGrid;
