import logo1 from "@/assets/Logo_1.webp.asset.json";
import logo2 from "@/assets/Logo_2.webp.asset.json";
import logo4 from "@/assets/Logo_4.webp.asset.json";
import logo5 from "@/assets/Logo_5.webp.asset.json";
import logo6 from "@/assets/logo_6.webp.asset.json";
import logo7 from "@/assets/Logo_7.webp.asset.json";
import logo8 from "@/assets/Logo_8.webp.asset.json";
import logo9 from "@/assets/Logo_9.webp.asset.json";
import logo10 from "@/assets/Logo_10.webp.asset.json";

export interface BrandLogo {
  name: string;
  tagline: string;
  industry: string;
  year: string;
  url: string;
  /** tailwind classes controlling the tile span on large screens */
  span?: string;
}

export const brandLogos: BrandLogo[] = [
  {
    name: "Heaven",
    tagline: "Under the Sky — Rooftop Bar & Lounge",
    industry: "Hospitality",
    year: "2025",
    url: logo1.url,
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    name: "Subhash Group",
    tagline: "Real estate since 2005",
    industry: "Real Estate",
    year: "2025",
    url: logo2.url,
  },
  {
    name: "The Pizzaplex",
    tagline: "Artisan pizza kitchen",
    industry: "Food & Beverage",
    year: "2025",
    url: logo4.url,
  },
  {
    name: "Vibrant Science Academy",
    tagline: "Learning that moves",
    industry: "Education",
    year: "2025",
    url: logo5.url,
    span: "lg:col-span-2",
  },
  {
    name: "Robotic Restaurant",
    tagline: "A unit of Palm Pacific Resort",
    industry: "Hospitality",
    year: "2025",
    url: logo6.url,
  },
  {
    name: "Fusion Bar",
    tagline: "A unit of Kota Club",
    industry: "Food & Beverage",
    year: "2025",
    url: logo7.url,
  },
  {
    name: "Nayra Agro",
    tagline: "Rooted in growth",
    industry: "Agriculture",
    year: "2025",
    url: logo8.url,
    span: "lg:col-span-2",
  },
  {
    name: "SID",
    tagline: "Solve It Digitally",
    industry: "Digital Marketing",
    year: "2025",
    url: logo9.url,
  },
  {
    name: "Apsara",
    tagline: "The Harmony of Jewellery",
    industry: "Luxury Retail",
    year: "2025",
    url: logo10.url,
  },
];
