import Reveal from "@/components/Reveal";
import GradientReveal from "@/components/GradientReveal";
import ParallaxBlob from "@/components/ParallaxBlob";
import { ArrowUpRight, Target, Wrench, TrendingUp } from "lucide-react";

const studies = [
  {
    client: "Tivagro Digital",
    year: "2026",
    role: "Full-Stack Studio",
    title: "Turning a legacy agri brand into a modern digital company.",
    problem:
      "Tivagro had strong offline authority but no digital surface — no lead capture, no story, no way for enterprise buyers to evaluate them online.",
    approach:
      "We built a full corporate platform: brand system, service architecture, validated multi-step enquiry funnel and SEO-first content structure — all shippable and editable by their team.",
    result:
      "A production site that positions them as a serious agri-tech partner, converts enquiries directly from search and loads under one second globally.",
    metrics: [
      { k: "< 1s", v: "Global TTFB" },
      { k: "95+", v: "Lighthouse" },
      { k: "5x", v: "Enquiry surface" },
    ],
    link: "https://tivagrodigital.com/",
  },
  {
    client: "Kanaka Jewellery",
    year: "2026",
    role: "E-Commerce · Edge",
    title: "A boutique jewellery store engineered for luxury speed.",
    problem:
      "High-intent luxury shoppers abandon slow sites within seconds. The client needed a premium store that felt as considered as the product itself — and loaded instantly worldwide.",
    approach:
      "Deployed on Cloudflare Workers, we built a lightweight, JavaScript-lean storefront with typography-led product presentation, edge-cached catalog and a friction-free cart.",
    result:
      "Sub-second first paints from every region, a checkout that feels effortless and a brand surface that matches the price point.",
    metrics: [
      { k: "300+", v: "Edge PoPs" },
      { k: "< 500ms", v: "First paint" },
      { k: "100%", v: "Mobile-ready" },
    ],
    link: "https://linea-glide-one.mohammadilhan345.workers.dev/",
  },
  {
    client: "Dr. Aliza Fatima",
    year: "2025",
    role: "Full-Stack Wellness Platform",
    title: "From offline practice to bookable digital clinic.",
    problem:
      "An established Ayurvedic practitioner was losing patients to competitors with online booking. Phone-only intake was a bottleneck.",
    approach:
      "We shipped a full-stack site with secure patient auth, treatment browsing and end-to-end appointment booking — designed to feel calm, trustworthy and medically credible.",
    result:
      "Patients can now discover, evaluate and book in a single flow. Intake time dropped, and the clinic captures leads 24/7 without staff involvement.",
    metrics: [
      { k: "24/7", v: "Bookings" },
      { k: "1 flow", v: "Signup → book" },
      { k: "Edge", v: "Vercel deploy" },
    ],
    link: "https://aliza-fatima.vercel.app/",
  },
];

const CaseStudyDeepDive = () => {
  return (
    <section id="case-studies" className="relative py-24 sm:py-32">
      <ParallaxBlob intensity={60} />
      <div className="container mx-auto px-4 sm:px-6 relative">
        <Reveal className="max-w-3xl mb-20">
          <p className="text-primary font-body text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">
            Case Studies
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1]">
            The <GradientReveal text="story" /> behind three shipped builds.
          </h2>
          <p className="text-muted-foreground font-body text-base sm:text-lg mt-5 leading-relaxed">
            Problem, approach, outcome — the unfiltered version of how we work with clients.
          </p>
        </Reveal>

        <div className="space-y-20 sm:space-y-28">
          {studies.map((s, i) => (
            <article key={s.client} className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-24">
                <Reveal>
                  <p className="font-display text-6xl sm:text-7xl font-extrabold text-primary/15 leading-none mb-4">
                    0{i + 1}
                  </p>
                  <p className="text-primary/80 text-[11px] tracking-[0.28em] uppercase font-body mb-2">
                    {s.role} · {s.year}
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    {s.client}
                  </h3>
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 text-primary font-body text-sm hover:gap-3 transition-all"
                  >
                    Visit live site <ArrowUpRight size={16} />
                  </a>
                </Reveal>
              </div>

              <div className="lg:col-span-8 space-y-6">
                <Reveal delay={0.05}>
                  <h4 className="font-display text-xl sm:text-2xl md:text-3xl font-bold leading-snug text-foreground">
                    {s.title}
                  </h4>
                </Reveal>

                <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
                  {s.metrics.map((m) => (
                    <Reveal key={m.v} delay={0.1}>
                      <div className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/40 transition-colors">
                        <p className="font-display text-2xl font-extrabold text-primary">{m.k}</p>
                        <p className="text-muted-foreground text-[11px] uppercase tracking-widest mt-1 font-body">
                          {m.v}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>

                {[
                  { icon: Target, label: "Problem", body: s.problem },
                  { icon: Wrench, label: "Approach", body: s.approach },
                  { icon: TrendingUp, label: "Result", body: s.result },
                ].map((row, idx) => (
                  <Reveal key={row.label} delay={0.15 + idx * 0.05}>
                    <div className="flex gap-4 pt-2">
                      <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <row.icon className="text-primary" size={18} />
                      </div>
                      <div>
                        <p className="text-primary/90 text-[11px] tracking-[0.28em] uppercase font-body mb-1.5">
                          {row.label}
                        </p>
                        <p className="text-muted-foreground font-body text-sm sm:text-base leading-relaxed">
                          {row.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDeepDive;
