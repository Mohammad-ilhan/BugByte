import p1 from "@/assets/portfolio/p1.png.asset.json";
import p2 from "@/assets/portfolio/p2.png.asset.json";
import p3 from "@/assets/portfolio/p3.png.asset.json";
import p4 from "@/assets/portfolio/p4.png.asset.json";
import p5 from "@/assets/portfolio/p5.png.asset.json";
import p6 from "@/assets/portfolio/p6.png.asset.json";
import p7 from "@/assets/portfolio/p7.png.asset.json";
import p8 from "@/assets/portfolio/p8.png.asset.json";
import p9 from "@/assets/portfolio/p9.png.asset.json";
import p10 from "@/assets/portfolio/p10.png.asset.json";

export interface PortfolioSite {
  name: string;
  description: string;
  url: string;
  image: string;
}

export const portfolioSites: PortfolioSite[] = [
  {
    name: "Teddy Bear Dubai",
    description:
      "A luxury gifting storefront for premium bouquets, teddies and celebration hampers. Built for fast browsing and instant WhatsApp ordering.",
    url: "http://teddybeardubai.com/",
    image: p1.url,
  },
  {
    name: "Aventara",
    description:
      "A digital growth brand site with a bold editorial hero and clear service storytelling. Conversion-focused layout ending in a strategy-call booking.",
    url: "https://aventara.co/",
    image: p2.url,
  },
  {
    name: "Altriva Studio",
    description:
      "A minimal black-and-white studio identity site built around typography and whitespace. Every section is engineered for calm, premium presentation.",
    url: "https://altrivastudio.com/",
    image: p3.url,
  },
  {
    name: "Tilak Stone Arts",
    description:
      "A marble and pooja-room craftsmanship showcase with a cinematic product gallery. Designed to turn browsing into direct enquiries.",
    url: "https://www.tilakstonearts.com/",
    image: p4.url,
  },
  {
    name: "Sankalp Builders",
    description:
      "A real-estate developer site presenting projects, amenities and floor plans clearly. Structured to capture qualified site-visit leads.",
    url: "https://sankalpbuilders.com/",
    image: p5.url,
  },
  {
    name: "Sun Interiors Pune",
    description:
      "An interior-design portfolio with muted tones and full-bleed project photography. Layouts keep the focus entirely on the finished spaces.",
    url: "https://www.suninteriorspune.com/",
    image: p6.url,
  },
  {
    name: "Dr. Aliza Fatima — Ayurveda",
    description:
      "A practitioner site pairing treatment information with health tools and products. Booking and call actions stay reachable on every screen.",
    url: "https://aliza-fatima.vercel.app/",
    image: p7.url,
  },
  {
    name: "Bla-Bla Fashion",
    description:
      "An Indian ethnic-wear commerce experience with a serif-led editorial hero. Collection pages are tuned for discovery and quick checkout.",
    url: "https://bla-blaa.vercel.app/",
    image: p8.url,
  },
  {
    name: "Info Classes",
    description:
      "A coaching-institute platform for NEET and IIT-JEE aspirants in a gold-on-black theme. Courses, results and enrolment flow in one scroll.",
    url: "https://6a5fc4f7202629127a101e6c--celebrated-travesseiro-9c7378.netlify.app/",
    image: p9.url,
  },
  {
    name: "Kickass Sneakers",
    description:
      "A streetwear sneaker store with high-contrast drops and a brand marquee. Built for fast catalogue browsing across every device.",
    url: "https://cerulean-crisp-84c711.netlify.app/",
    image: p10.url,
  },
];
