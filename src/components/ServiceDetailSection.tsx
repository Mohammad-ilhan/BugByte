import { Layout, Layers, ShoppingBag, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import GradientReveal from "@/components/GradientReveal";
import ParallaxBlob from "@/components/ParallaxBlob";

const details = [
  {
    icon: Layout,
    kicker: "01 — Landing Pages",
    title: "Launch pages that convert on the first scroll.",
    blurb:
      "Single-purpose pages engineered for product launches, ad campaigns and waitlists. Every pixel is scored against one KPI: conversion.",
    deliverables: [
      "Custom hero, story & CTA architecture",
      "Copy structure & wireframe",
      "Motion & micro-interactions",
      "Lighthouse 95+ performance budget",
      "SEO metadata, OG tags & sitemap",
      "Analytics + form/lead capture",
    ],
    stack: ["React", "Tailwind", "Framer Motion", "Vercel Edge"],
    timeline: "5 – 10 days",
    startingAt: "Starting at $499",
  },
  {
    icon: Layers,
    kicker: "02 — Full-Stack Platforms",
    title: "Production platforms with auth, data & dashboards.",
    blurb:
      "End-to-end web apps. Marketing site, authenticated app surface, admin console — all designed, built and shipped by one senior team.",
    deliverables: [
      "Design system & component library",
      "Auth flows (email, OAuth, magic link)",
      "Postgres schema & row-level security",
      "Role-based admin dashboards",
      "REST / RPC / edge functions",
      "CI/CD with preview environments",
    ],
    stack: ["React", "TypeScript", "Postgres", "Edge Functions", "Tailwind"],
    timeline: "3 – 6 weeks",
    startingAt: "Starting at $2,400",
  },
  {
    icon: ShoppingBag,
    kicker: "03 — E-Commerce",
    title: "Storefronts that make buying effortless.",
    blurb:
      "Product catalog, cart, secure checkout and merchant tooling — deployed at the edge for sub-second loads worldwide.",
    deliverables: [
      "Product catalog with filters & search",
      "Persistent cart & checkout flow",
      "Payments (Stripe / Razorpay / Paddle)",
      "Inventory + order admin dashboard",
      "Transactional email templates",
      "Cloudflare Workers edge deploy",
    ],
    stack: ["React", "Stripe", "Cloudflare Workers", "Postgres"],
    timeline: "4 – 8 weeks",
    startingAt: "Starting at $3,200",
  },
];

const ServiceDetailSection = () => {
  return (
    <section id="services-detail" className="relative py-24 sm:py-32">
      <ParallaxBlob />
      <div className="container mx-auto px-4 sm:px-6 relative">
        <Reveal className="max-w-3xl mb-20">
          <p className="text-primary font-body text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">
            Services in depth
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1]">
            Exactly what you get, <GradientReveal text="line by line" />.
          </h2>
          <p className="text-muted-foreground font-body text-base sm:text-lg mt-5 leading-relaxed">
            No vague packages. Every engagement lists scope, stack, timeline and starting price up
            front — so you know what ships before we start.
          </p>
        </Reveal>

        <div className="space-y-24 sm:space-y-32">
          {details.map((d, i) => (
            <div key={d.title} className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Sticky column */}
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <Reveal>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                    <d.icon className="text-primary" size={22} />
                  </div>
                  <p className="text-primary/80 font-body text-[11px] tracking-[0.28em] uppercase mb-3">
                    {d.kicker}
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.15] mb-4">
                    {d.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm sm:text-base leading-relaxed mb-6">
                    {d.blurb}
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm font-body">
                    <div>
                      <p className="text-muted-foreground/70 uppercase tracking-widest text-[10px]">Timeline</p>
                      <p className="text-foreground font-medium mt-0.5">{d.timeline}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground/70 uppercase tracking-widest text-[10px]">Investment</p>
                      <p className="text-foreground font-medium mt-0.5">{d.startingAt}</p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Deliverables + stack */}
              <div className="lg:col-span-7">
                <Reveal delay={0.1}>
                  <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/40 transition-colors duration-500">
                    <p className="font-display text-lg font-bold text-foreground mb-5">Deliverables</p>
                    <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                      {d.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground font-body">
                          <Check className="text-primary flex-shrink-0 mt-0.5" size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-6 border-t border-border">
                      <p className="text-muted-foreground/70 text-[10px] uppercase tracking-widest mb-3 font-body">
                        Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {d.stack.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-body px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailSection;
