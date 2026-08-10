import { brandLogos, type BrandLogo } from "@/data/logos";

interface LogoGridProps {
  logos?: BrandLogo[];
}

const LogoGrid = ({ logos = brandLogos }: LogoGridProps) => (
  <div className="grid w-full grid-cols-1 gap-4 xs:grid-cols-2 sm:gap-6 lg:grid-cols-3">
    {logos.map((logo) => (
      <div
        key={logo.name}
        className="group relative min-w-0 overflow-hidden rounded-lg border border-primary/20 bg-card transition-colors duration-500 hover:border-primary/50"
      >
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.18),transparent_65%)]" />
        <div className="flex aspect-[4/3] w-full items-center justify-center p-2 xs:p-3 sm:p-6">
          <img
            src={logo.url}
            alt={logo.name}
            loading="eager"
            decoding="async"
            className="relative z-10 block h-full w-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.05]"
          />
        </div>
      </div>
    ))}
  </div>
);

export default LogoGrid;
