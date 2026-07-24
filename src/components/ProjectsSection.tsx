import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Bot, Shield, Globe, Heart, Briefcase, ArrowUpRight } from "lucide-react";
import TiltCard from "@/components/TiltCard";
import GradientReveal from "@/components/GradientReveal";
import ScrollReveal from "@/components/ScrollReveal";
import CaseStudyModal, { CaseStudy } from "@/components/CaseStudyModal";

import scamAlert1 from "@/assets/scam-alert-1.webp";
import scamAlert2 from "@/assets/scam-alert-2.webp";
import scamAlert3 from "@/assets/scam-alert-3.webp";
import aiLawyer1 from "@/assets/ai-lawyer-1.webp";
import aiLawyer2 from "@/assets/ai-lawyer-2.webp";

const freelanceProjects: CaseStudy[] = [
  {
    title: "Tivagro Digital — Agri-Tech Corporate Site",
    category: "Client Website",
    subtitle: "Full-Stack Agri-Tech Platform",
    description: "Corporate web platform for an agri-tech company with service showcases, lead-capture forms and a modern editorial design system.",
    longDescription: "A production corporate website built for Tivagro Digital, positioning them as a modern agri-tech partner. The build focuses on trust-building through clean information architecture, service breakdowns, and multiple conversion touch-points for enquiries. Optimised for fast global load times and easy content updates by the client team.",
    highlights: [
      "Custom design system tuned to the agri-tech brand",
      "Multi-step lead-capture with validated forms",
      "Fully responsive across mobile, tablet and desktop",
      "SEO-friendly semantic markup & metadata",
    ],
    role: "Full Stack Studio",
    year: "2026",
    icon: Globe,
    links: { live: "https://tivagrodigital.com/" },
    tags: ["React", "Full Stack", "Corporate", "SEO"],
  },
  {
    title: "Digital Amnik — Digital Marketing Agency",
    category: "Client Website",
    subtitle: "Agency Marketing Website",
    description: "Bold, conversion-focused marketing site for a digital agency featuring service pages, case highlights and a strong lead funnel.",
    longDescription: "A modern marketing website built for Digital Amnik to establish authority in the digital marketing space. We designed a strong visual identity system, structured service pages, and a clear enquiry funnel — turning agency traffic into qualified leads. Built with performance and search visibility as first-class concerns.",
    highlights: [
      "Distinctive brand-led visual system",
      "Structured service pages for SEO",
      "High-intent CTA placement across the funnel",
      "Fast page loads & smooth micro-interactions",
    ],
    role: "Design & Development",
    year: "2026",
    icon: Globe,
    links: { live: "https://digitalamnik.com/" },
    tags: ["React", "Marketing Site", "SEO", "Branding"],
  },
  {
    title: "Dr. Aliza Fatima — Wellness Center",
    category: "Client Website",
    subtitle: "Ayurvedic Wellness Web Platform",
    description: "Full-stack web application for an Ayurvedic wellness center with auth, appointment booking, and elegant responsive UI.",
    longDescription: "A complete digital presence for an Ayurvedic wellness practitioner. Patients can sign up, browse treatments, and book appointments through a streamlined flow designed to convert visitors into clients. The interface emphasises calm, trust and clarity — chosen specifically to suit a healthcare brand.",
    highlights: [
      "Secure user authentication & session handling",
      "End-to-end appointment booking flow",
      "Mobile-first responsive layout",
      "Deployed on Vercel with edge caching",
    ],
    role: "Full Stack Studio",
    year: "2025",
    icon: Globe,
    links: { live: "https://aliza-fatima.vercel.app/" },
    tags: ["React", "Full Stack", "Auth", "Vercel"],
  },
  {
    title: "Full Stack E-Commerce Platform",
    category: "Client Website",
    subtitle: "Production E-Commerce System",
    description: "Complete e-commerce solution with product catalog, cart, payment integration, and admin dashboard.",
    longDescription: "An end-to-end e-commerce build covering customer storefront and merchant operations. Designed and shipped a smooth checkout, inventory views, and an admin dashboard so the client can manage the store independently after handover.",
    highlights: [
      "Product catalog with filtering & search",
      "Persistent cart and checkout flow",
      "Admin dashboard for orders & inventory",
      "Tailwind-based component system",
    ],
    role: "Full Stack Studio",
    year: "2025",
    icon: Globe,
    links: { live: "https://bla-blaa.vercel.app/" },
    tags: ["React", "E-Commerce", "Full Stack", "Tailwind"],
  },
  {
    title: "Kanaka — Complete Jewellery Shop",
    category: "Client Website",
    subtitle: "Edge-Deployed Jewellery Store",
    description: "Premium jewellery e-commerce platform deployed on Cloudflare Workers edge network for global low-latency access.",
    longDescription: "A boutique jewellery storefront engineered for speed. Deployed on Cloudflare Workers so the site loads sub-second from any region — critical for high-intent luxury shoppers. Visual design leans on contrast and typography to make the products feel premium.",
    highlights: [
      "Cloudflare Workers edge deployment",
      "Sub-second global TTFB",
      "Premium-feel product presentation",
      "Lightweight JS bundle",
    ],
    role: "Full Stack Studio",
    year: "2026",
    icon: Globe,
    links: { live: "https://linea-glide-one.mohammadilhan345.workers.dev/" },
    tags: ["Cloudflare Workers", "Edge Computing", "JavaScript"],
  },
  {
    title: "Effervescent Studio — Creative Landing",
    category: "Client Website",
    subtitle: "High-Impact Landing Page",
    description: "Boutique creative landing page focused on brand storytelling, smooth scroll interactions and a single strong CTA.",
    longDescription: "A high-impact one-page site delivered for a creative brand. The layout leans on bold typography, layered scroll interactions and generous whitespace to make the brand feel premium. Built to load fast and convert on the very first scroll — perfect for early-stage brands launching to market.",
    highlights: [
      "Single-page narrative-first structure",
      "Scroll-triggered animations & reveals",
      "Optimised Lighthouse performance scores",
      "Deployed on Netlify with instant rollbacks",
    ],
    role: "Design & Development",
    year: "2025",
    icon: Globe,
    links: { live: "https://effervescent-tiramisu-42ef9d.netlify.app/" },
    tags: ["Landing Page", "Animation", "Netlify", "Design"],
  },
  {
    title: "Cerulean Product Site — Live Build",
    category: "Client Website",
    subtitle: "Running Project · In Production",
    description: "Actively maintained product website with a modular component system, iterative feature rollouts and continuous performance tuning.",
    longDescription: "An ongoing engagement — this product site is live, actively iterated on, and continues to evolve with new sections, integrations, and content flows shipped on a regular cadence. Built on a modular component system so new pages can be assembled in hours instead of days.",
    highlights: [
      "Live, actively maintained production site",
      "Modular component library for rapid iteration",
      "CI-driven deploys with preview environments",
      "Ongoing performance & SEO optimisation",
    ],
    role: "Full Stack Studio",
    year: "2026",
    icon: Globe,
    links: { live: "https://cerulean-crisp-84c711.netlify.app" },
    tags: ["React", "Netlify", "Ongoing", "Product Site"],
  },
  {
    title: "Celebrated Travesseiro — Brand Site",
    category: "Client Website",
    subtitle: "Editorial Brand Website",
    description: "Editorial-style brand website with rich product storytelling, refined typography and a warm, tactile visual language.",
    longDescription: "A brand-forward site built to tell a product story rather than just list features. Editorial layout, refined typography and warm imagery combine to make the brand feel considered and premium. Structured so marketing pages can be added without engineering effort.",
    highlights: [
      "Editorial, magazine-inspired layouts",
      "Custom typography system & spacing scale",
      "Optimised responsive imagery pipeline",
      "Deployed on Netlify with atomic rollouts",
    ],
    role: "Design & Development",
    year: "2025",
    icon: Globe,
    links: { live: "https://6a5fc4f7202629127a101e6c--celebrated-travesseiro-9c7378.netlify.app/" },
    tags: ["Brand Site", "Editorial", "Typography", "Netlify"],
  },
];

const aiProjects: CaseStudy[] = [
  {
    title: "Family Scam Alert System",
    category: "AI / ML",
    subtitle: "ML-Based Phishing Detection",
    description: "ML-based scam detection analyzing SMS / WhatsApp / Email messages to detect phishing links and suspicious patterns.",
    longDescription: "Built to protect non-technical family members from rising digital scams. The system ingests messages, runs them through an NLP pipeline and a trained classifier, and surfaces a clear risk verdict — making it usable even by people who don't speak tech.",
    highlights: [
      "NLP pipeline for message analysis",
      "Scikit-learn classifier with phishing heuristics",
      "Detects suspicious URLs & patterns",
      "Designed for non-technical end users",
    ],
    role: "ML Engineer",
    year: "2025",
    icon: Shield,
    links: { github: "https://github.com/Mohammad-ilhan/Family-scam-alert-system" },
    tags: ["Python", "ML", "NLP", "Scikit-learn"],
    screenshots: [scamAlert1, scamAlert2, scamAlert3],
  },
  {
    title: "AI Lawyer Chatbot",
    category: "AI / ML",
    subtitle: "RAG-Based Legal Assistant",
    description: "RAG-based legal chatbot with multi-file input, context-aware responses using Phi-3 via Ollama, ChromaDB vector storage, and offline legal Q&A.",
    longDescription: "An offline-capable legal assistant that lets users drop in legal documents and ask grounded questions about them. Built on a retrieval-augmented generation (RAG) pipeline so answers stay anchored to the source material instead of hallucinating.",
    highlights: [
      "Multi-file ingestion & chunking",
      "Phi-3 model served locally via Ollama",
      "ChromaDB + FAISS vector retrieval",
      "Fully offline — no API costs",
    ],
    role: "ML Engineer",
    year: "2026",
    icon: Bot,
    links: { github: "https://github.com/Mohammad-ilhan/ai-legal-chatbot" },
    tags: ["Python", "RAG", "Ollama", "ChromaDB", "FAISS"],
    screenshots: [aiLawyer1, aiLawyer2],
  },
];

const weddingTemplates: CaseStudy[] = [
  {
    title: "Wedding Template — Premium Theme",
    category: "Template",
    subtitle: "Premium Dark & Light Theme",
    description: "Elegant wedding invitation with countdown timer, RSVP system, and stunning animations.",
    longDescription: "A premium wedding invitation template with both dark and light themes. Couples can share a single link that opens into a beautifully animated micro-site with a live countdown, RSVP collection, and event details — replacing paper invites entirely.",
    highlights: ["Live countdown timer", "Built-in RSVP collection", "Dark & light themes", "Smooth scroll animations"],
    role: "Designer & Developer",
    year: "2025",
    icon: Heart,
    links: { live: "https://wed-in-vitation.vercel.app/" },
    tags: ["Dark/Light Theme", "Countdown", "RSVP"],
  },
  {
    title: "Wedding Template — Luxury",
    category: "Template",
    subtitle: "Luxury Premium Design",
    description: "Sophisticated luxury wedding invitation with premium design elements and interactive features.",
    longDescription: "A luxury-tier wedding invitation crafted for couples who want a high-end editorial feel. Premium typography, refined motion, and interactive moments throughout the invite.",
    highlights: ["Editorial typography", "Refined motion design", "Interactive sections", "Premium visual identity"],
    role: "Designer & Developer",
    year: "2026",
    icon: Heart,
    links: { live: "https://weddingprimiuminvitation.vercel.app/" },
    tags: ["Luxury Design", "Interactive", "Premium"],
  },
  {
    title: "Wedding Template — Cultural",
    category: "Template",
    subtitle: "Cultural Multi-Theme",
    description: "Cultural wedding invitation featuring Hindu and Muslim quotes with multiple theme variants.",
    longDescription: "A culturally rich wedding template offering multiple variants to suit different traditions, including Hindu and Muslim contexts. Typography and ornamentation shift per theme while keeping a consistent UX.",
    highlights: ["Multi-cultural variants", "Tradition-specific quotes", "Unified UX across themes", "Custom typography"],
    role: "Designer & Developer",
    year: "2026",
    icon: Heart,
    links: { live: "https://wed-in-hindu.vercel.app/" },
    tags: ["Multi-Cultural", "Multi-Theme", "Typography"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState<CaseStudy | null>(null);

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-20"
        >
          <p className="text-primary font-body text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">Selected Work</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Recent <GradientReveal text="Projects" />
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base font-body mt-4 max-w-xl mx-auto">
            A snapshot of websites, platforms and products we've shipped for clients around the world.
          </p>
        </motion.div>

        {/* Client Websites */}
        <ProjectGroup
          title="Client Websites"
          subtitle="Full-stack builds & production deployments"
          icon={Briefcase}
          projects={freelanceProjects}
          inView={inView}
          startIndex={0}
          onOpen={setActive}
          gridCols="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto"
        />

        {/* AI-Powered */}
        <ProjectGroup
          title="AI-Powered Products"
          subtitle="Intelligent tools & AI-integrated web apps"
          icon={Bot}
          projects={aiProjects}
          inView={inView}
          startIndex={8}
          onOpen={setActive}
          gridCols="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto"
        />

        {/* Templates */}
        <ProjectGroup
          title="Premium Templates"
          subtitle="Ready-to-launch designs, customized to your brand"
          icon={Heart}
          projects={weddingTemplates}
          inView={inView}
          startIndex={10}
          onOpen={setActive}
          gridCols="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto"
          last
        />
      </div>

      <CaseStudyModal open={!!active} study={active} onClose={() => setActive(null)} />
    </section>
  );
};

interface GroupProps {
  title: string;
  subtitle: string;
  icon: React.ComponentType<any>;
  projects: CaseStudy[];
  inView: boolean;
  startIndex: number;
  onOpen: (s: CaseStudy) => void;
  gridCols: string;
  last?: boolean;
}

const ProjectGroup = ({ title, subtitle, icon: Icon, projects, inView, startIndex, onOpen, gridCols, last }: GroupProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.1 + startIndex * 0.04 }}
    className={last ? "" : "mb-12 sm:mb-16"}
  >
    <div className="flex items-center gap-3 mb-6 sm:mb-8">
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
        <Icon className="text-primary" size={18} />
      </div>
      <div>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">{title}</h3>
        <p className="text-muted-foreground text-xs sm:text-sm font-body">{subtitle}</p>
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent ml-4 hidden sm:block" />
    </div>
    <div className={gridCols}>
      {projects.map((p, i) => (
        <ProjectCard key={p.title} project={p} index={startIndex + i} inView={inView} onOpen={onOpen} />
      ))}
    </div>
  </motion.div>
);

interface CardProps {
  project: CaseStudy;
  index: number;
  inView: boolean;
  onOpen: (s: CaseStudy) => void;
}

const ProjectCard = ({ project, index, inView, onOpen }: CardProps) => {
  const Icon = project.icon || Globe;
  const open = () => onOpen(project);
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      open();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.05 * index }}
      className="h-full"
    >
      <TiltCard max={6} className="group h-full">
        <div
          role="button"
          tabIndex={0}
          onClick={open}
          onKeyDown={onKey}
          aria-label={`Open case study: ${project.title}`}
          className="cursor-pointer bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 hover:glow-ember transition-all duration-500 flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          <div className="p-4 sm:p-6 flex flex-col flex-1">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <span className="text-[10px] font-body tracking-widest uppercase text-primary bg-primary/10 px-2 py-1 rounded">
                {project.category}
              </span>
              <div className="flex items-center gap-2">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub repository"
                  >
                    <Github size={16} />
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Live site"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
            <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary/60 mb-2 sm:mb-3 group-hover:text-primary transition-colors" />
            <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm font-body leading-relaxed flex-1 mb-3 sm:mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tags.slice(0, 4).map((tag) => (
                <span key={tag} className="text-[10px] font-body px-2 py-0.5 bg-secondary text-muted-foreground rounded">
                  {tag}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span className="text-[10px] font-body px-2 py-0.5 text-muted-foreground">+{project.tags.length - 4}</span>
              )}
            </div>
            {project.screenshots && project.screenshots.length > 0 && (
              <div className="hidden md:grid grid-cols-3 gap-1.5 mb-3 max-h-0 group-hover:max-h-24 opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-out">
                {project.screenshots.slice(0, 3).map((s, i) => (
                  <div key={i} className="aspect-video rounded overflow-hidden border border-border">
                    <img src={s} alt="" aria-hidden loading="lazy" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
            <div className="flex items-center gap-1 text-xs font-body text-primary mt-auto group-hover:gap-2 transition-all">
              View case study <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
};

export default ProjectsSection;
