import { motion, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Quote, Star } from "lucide-react";
import GradientReveal from "@/components/GradientReveal";

// TODO: Replace with real client testimonials
const testimonials = [
  {
    quote:
      "Ilhan delivered our Ayurvedic wellness platform ahead of schedule. The booking flow is smooth, the design feels calm and trustworthy — exactly what we needed.",
    name: "Dr. Aliza Fatima",
    role: "Founder, Ayurvedic Wellness Center",
    project: "Wellness Web Platform",
    rating: 5,
  },
  {
    quote:
      "Working with Ilhan on our jewellery store was effortless. He deployed on Cloudflare Workers and our site loads instantly worldwide — sales went up within weeks.",
    name: "Kanaka Client",
    role: "Owner, Kanaka Jewellery",
    project: "E-Commerce Platform",
    rating: 5,
  },
  {
    quote:
      "The AI chatbot Ilhan built for our document workflow saved our team hours every week. Sharp engineer, clean code, and great communication throughout.",
    name: "HPE Project Lead",
    role: "AI Project Mentor",
    project: "Dual-Model RAG Chatbot",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const current = testimonials[active];

  return (
    <section id="testimonials" className="py-16 sm:py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)_/_0.06)_0%,_transparent_60%)]" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-primary font-body text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">Kind Words</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Client <GradientReveal text="Testimonials" />
          </h2>
        </motion.div>

        {/* Featured rotating quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-10 sm:mb-14 relative bg-card/60 border border-border rounded-2xl p-6 sm:p-10 backdrop-blur-sm"
        >
          <Quote className="absolute top-4 left-4 sm:top-6 sm:left-6 w-10 h-10 sm:w-14 sm:h-14 text-primary/15" />
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45 }}
              className="relative"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="font-display text-lg sm:text-xl md:text-2xl leading-relaxed text-foreground mb-6">
                "{current.quote}"
              </p>
              <div>
                <p className="font-body font-semibold text-foreground text-sm sm:text-base">{current.name}</p>
                <p className="text-muted-foreground text-xs sm:text-sm font-body">{current.role} · {current.project}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-2 justify-center mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === active ? "w-8 bg-primary" : "w-1.5 bg-border hover:bg-primary/40"}`}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
