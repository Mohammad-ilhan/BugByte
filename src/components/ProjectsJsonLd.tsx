/**
 * Per-project structured data (JSON-LD) for SEO.
 *
 * Case studies live as modals on the home page (no per-project routes), so we
 * emit a single ItemList of CreativeWork entries. Each entry includes its
 * canonical anchor on the portfolio (#projects) plus the live/source URLs via
 * `sameAs`, so search engines can attribute and link to each project.
 *
 * NOTE on per-project Open Graph: OG tags must live in the document <head> at
 * request time and require unique URLs per project. Since all case studies
 * share one route (modals), the page-level OG tags in index.html apply. To get
 * true per-project OG previews, each project would need its own route
 * (e.g. /projects/:slug) rendered server-side or pre-rendered.
 */

const SITE = "https://zenyxdigitals.com";
const AUTHOR = "ZENYX Digitals";

type ProjectSeo = {
  name: string;
  slug: string;
  description: string;
  category: "Freelance" | "AI / ML" | "Template";
  type: "WebSite" | "SoftwareApplication" | "CreativeWork";
  year: string;
  keywords: string[];
  live?: string;
  github?: string;
};

const projects: ProjectSeo[] = [
  {
    name: "Dr. Aliza Fatima — Ayurvedic Wellness Web Platform",
    slug: "aliza-fatima-wellness",
    description:
      "Full-stack Ayurvedic wellness web platform with secure authentication, end-to-end appointment booking, and a mobile-first responsive interface. Deployed on Vercel.",
    category: "Freelance",
    type: "WebSite",
    year: "2025",
    keywords: ["React", "Full Stack", "Authentication", "Healthcare", "Vercel"],
    live: "https://aliza-fatima.vercel.app/",
  },
  {
    name: "Full Stack E-Commerce Platform",
    slug: "fullstack-ecommerce",
    description:
      "Production e-commerce solution with product catalog, persistent cart, checkout flow, and an admin dashboard for orders and inventory.",
    category: "Freelance",
    type: "WebSite",
    year: "2025",
    keywords: ["React", "E-Commerce", "Full Stack", "Tailwind CSS", "Admin Dashboard"],
    live: "https://bla-blaa.vercel.app/",
  },
  {
    name: "Kanaka — Premium Jewellery Shop",
    slug: "kanaka-jewellery",
    description:
      "Premium jewellery e-commerce storefront engineered for sub-second global TTFB on the Cloudflare Workers edge network.",
    category: "Freelance",
    type: "WebSite",
    year: "2026",
    keywords: ["Cloudflare Workers", "Edge Computing", "JavaScript", "E-Commerce", "Performance"],
    live: "https://linea-glide-one.mohammadilhan345.workers.dev/",
  },
  {
    name: "Family Scam Alert System",
    slug: "family-scam-alert-system",
    description:
      "ML-based scam detection system that analyses SMS, WhatsApp, and email messages with an NLP pipeline and a Scikit-learn classifier to flag phishing links and suspicious patterns.",
    category: "AI / ML",
    type: "SoftwareApplication",
    year: "2025",
    keywords: ["Python", "Machine Learning", "NLP", "Scikit-learn", "Phishing Detection"],
    github: "https://github.com/Mohammad-ilhan/Family-scam-alert-system",
  },
  {
    name: "AI Lawyer Chatbot",
    slug: "ai-lawyer-chatbot",
    description:
      "Offline RAG-based legal assistant with multi-file ingestion, Phi-3 served locally via Ollama, and ChromaDB + FAISS vector retrieval for grounded legal Q&A.",
    category: "AI / ML",
    type: "SoftwareApplication",
    year: "2026",
    keywords: ["Python", "RAG", "Ollama", "ChromaDB", "FAISS", "Phi-3", "LLM"],
    github: "https://github.com/Mohammad-ilhan/ai-legal-chatbot",
  },
  {
    name: "Wedding Invitation Template — Premium Theme",
    slug: "wedding-template-premium",
    description:
      "Elegant wedding invitation micro-site template with a live countdown timer, RSVP collection, smooth animations, and dark/light themes.",
    category: "Template",
    type: "CreativeWork",
    year: "2025",
    keywords: ["Wedding Invitation", "Countdown", "RSVP", "Dark Theme", "Light Theme"],
    live: "https://wed-in-vitation.vercel.app/",
  },
  {
    name: "Wedding Invitation Template — Luxury",
    slug: "wedding-template-luxury",
    description:
      "Luxury-tier wedding invitation template with editorial typography, refined motion design, and interactive premium sections.",
    category: "Template",
    type: "CreativeWork",
    year: "2026",
    keywords: ["Wedding Invitation", "Luxury Design", "Editorial Typography", "Interactive"],
    live: "https://weddingprimiuminvitation.vercel.app/",
  },
  {
    name: "Wedding Invitation Template — Cultural",
    slug: "wedding-template-cultural",
    description:
      "Culturally rich wedding invitation template with Hindu and Muslim variants, tradition-specific quotes, and per-theme custom typography.",
    category: "Template",
    type: "CreativeWork",
    year: "2026",
    keywords: ["Wedding Invitation", "Multi-Cultural", "Hindu", "Muslim", "Typography"],
    live: "https://wed-in-hindu.vercel.app/",
  },
];

const buildEntity = (p: ProjectSeo, position: number) => {
  const sameAs = [p.live, p.github].filter(Boolean) as string[];
  const url = p.live ?? `${SITE}/#projects`;

  return {
    "@type": "ListItem",
    position,
    item: {
      "@type": p.type,
      "@id": `${SITE}/#project-${p.slug}`,
      name: p.name,
      url,
      description: p.description,
      inLanguage: "en",
      keywords: p.keywords.join(", "),
      genre: p.category,
      datePublished: p.year,
      author: {
        "@type": "Organization",
        name: AUTHOR,
        url: SITE,
      },
      creator: {
        "@type": "Organization",
        name: AUTHOR,
        url: SITE,
      },
      isPartOf: {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        name: "ZENYX Digitals",
        url: SITE,
      },
      ...(sameAs.length > 0 ? { sameAs } : {}),
      ...(p.type === "SoftwareApplication"
        ? {
            applicationCategory: p.category === "AI / ML" ? "DeveloperApplication" : "WebApplication",
            operatingSystem: "Cross-platform",
          }
        : {}),
    },
  };
};

const ProjectsJsonLd = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Selected Work by ZENYX Digitals",
    description:
      "Client websites, AI-powered products, and premium templates designed and built by ZENYX Digitals.",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: projects.length,
    itemListElement: projects.map((p, i) => buildEntity(p, i + 1)),
  };

  return (
    <script
      type="application/ld+json"
      // Static, build-time JSON — safe.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default ProjectsJsonLd;
