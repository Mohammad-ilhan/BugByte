import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import GradientReveal from "@/components/GradientReveal";

const ContactSection = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sending, setSending] = useState(false);
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;
  const dist = reduce ? 0 : 30;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    try {
      await emailjs.sendForm(
        "service_lj4sl34",   // ← Replace with your EmailJS Service ID
        "template_xo9ofla",  // ← Replace with your EmailJS Template ID
        formRef.current,
        "2dor02USLuMYHmJdj"    // ← Replace with your EmailJS Public Key
      );
      toast.success("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: dist }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-primary font-body text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">Get In Touch</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Let's <GradientReveal text="Connect" />
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: reduce ? 0 : -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="space-y-6 sm:space-y-8"
          >
            <p className="text-muted-foreground font-body text-sm sm:text-base lg:text-lg leading-relaxed">
              Open for freelance projects, AI collaborations, and full-time opportunities.
              Let's build something extraordinary together.
            </p>
            {[
              { icon: Mail, label: "mohammadilhan345@gmail.com", href: "mailto:mohammadilhan345@gmail.com" },
              { icon: Phone, label: "+91-9636632048", href: "tel:+919636632048" },
              { icon: MessageCircle, label: "Chat on WhatsApp", href: "https://wa.me/919636632048" },
              { icon: MapPin, label: "Jhalawar, Rajasthan, India" },
            ].map(({ icon: Icon, label, href }, idx) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: reduce ? 0 : -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + idx * 0.1, ease }}
              >
                {href ? (
                  <a href={href} target={href.startsWith("https") ? "_blank" : undefined} rel={href.startsWith("https") ? "noopener noreferrer" : undefined} className="flex items-center gap-3 sm:gap-4 text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors flex-shrink-0">
                      <Icon size={16} className="text-primary sm:w-[18px] sm:h-[18px]" />
                    </div>
                    <span className="font-body text-xs sm:text-sm break-all">{label}</span>
                  </a>
                ) : (
                  <div className="flex items-center gap-3 sm:gap-4 text-muted-foreground">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-primary sm:w-[18px] sm:h-[18px]" />
                    </div>
                    <span className="font-body text-xs sm:text-sm break-all">{label}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: reduce ? 0 : 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="space-y-3 sm:space-y-4"
            onSubmit={handleSubmit}
          >
            <input name="from_name" id="contact-name" placeholder="Your Name" required aria-label="Your name"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-secondary border border-border rounded-lg text-foreground font-body text-xs sm:text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all" />
            <input name="from_email" id="contact-email" type="email" placeholder="Your Email" required aria-label="Your email address"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-secondary border border-border rounded-lg text-foreground font-body text-xs sm:text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all" />
            <textarea name="message" id="contact-message" placeholder="Your Message" rows={4} required aria-label="Your message"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-secondary border border-border rounded-lg text-foreground font-body text-xs sm:text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none" />
            <button type="submit" disabled={sending}
              className="w-full px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground font-body font-semibold text-sm rounded-lg glow-ember hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
              <Send size={16} /> {sending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
