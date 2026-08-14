import { brandLogos, type BrandLogo } from "@/data/logos";

interface LogoGridProps {
  logos?: BrandLogo[];
}

const LogoGrid = ({ logos = brandLogos }: LogoGridProps) => (
  <div className="grid w-full grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
    {logos.map((logo) => (
      <div
        key={logo.name}
        className="group relative min-w-0 overflow-hidden rounded-lg border border-primary/20 bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
      >
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.18),transparent_65%)]" />
        <div className="flex aspect-square w-full items-center justify-center p-1.5 sm:p-4">
          <img
            src={logo.url}
            alt={logo.name}
            loading="eager"
            decoding="async"
            width={800}
            height={800}
            className="relative z-10 block h-full w-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.035]"
          />
        </div>
      </div>
    ))}
  </div>
);

export default LogoGrid;
