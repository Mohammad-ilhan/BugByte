import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, CheckCircle2, Calendar, User, Code2, Image as ImageIcon } from "lucide-react";
import { ReactNode, useEffect } from "react";

export interface CaseStudy {
  title: string;
  category: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  highlights?: string[];
  role?: string;
  year?: string;
  tags: string[];
  links: { github?: string; live?: string };
  screenshots?: string[];
  icon?: React.ComponentType<any>;
  accent?: ReactNode;
}

interface Props {
  open: boolean;
  onClose: () => void;
  study: CaseStudy | null;
}

const CaseStudyModal = ({ open, onClose, study }: Props) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && study && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl max-h-[85svh] sm:max-h-[90vh] overflow-y-auto overscroll-contain rounded-2xl border border-primary/20 bg-card shadow-[0_30px_80px_-20px_hsl(24_100%_55%_/_0.35)]"
          >
            {/* Hero band */}
            <div className="relative overflow-hidden border-b border-border">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(24_100%_55%_/_0.25)_0%,_transparent_60%)]" />
              <div className="relative p-5 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-block text-[10px] font-body tracking-widest uppercase text-primary bg-primary/10 px-2 py-1 rounded mb-3">
                      {study.category}
                    </span>
                    <h2 id="case-study-title" className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                      {study.title}
                    </h2>
                    {study.subtitle && (
                      <p className="text-primary/90 font-body text-sm mt-1">{study.subtitle}</p>
                    )}
                  </div>
                  <button
                    onClick={onClose}
                    aria-label="Close"
                    className="flex-shrink-0 w-9 h-9 rounded-full border border-border hover:border-primary/50 hover:text-primary text-muted-foreground flex items-center justify-center transition-all"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-xs font-body text-muted-foreground">
                  {study.role && (
                    <span className="flex items-center gap-1.5"><User size={13} className="text-primary/70" /> {study.role}</span>
                  )}
                  {study.year && (
                    <span className="flex items-center gap-1.5"><Calendar size={13} className="text-primary/70" /> {study.year}</span>
                  )}
                  <span className="flex items-center gap-1.5"><Code2 size={13} className="text-primary/70" /> {study.tags.length} technologies</span>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-5 sm:p-7 space-y-6">
              {/* Description */}
              <motion.section
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <h3 className="font-display text-sm uppercase tracking-widest text-primary mb-2">Overview</h3>
                <p className="text-muted-foreground font-body text-sm sm:text-base leading-relaxed">
                  {study.longDescription || study.description}
                </p>
              </motion.section>

              {/* Highlights */}
              {study.highlights && study.highlights.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.4 }}
                >
                  <h3 className="font-display text-sm uppercase tracking-widest text-primary mb-3">Key Highlights</h3>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {study.highlights.map((h, i) => (
                      <motion.li
                        key={h}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.22 + i * 0.05 }}
                        className="flex items-start gap-2 text-sm font-body text-foreground/90"
                      >
                        <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.section>
              )}

              {/* Tech stack */}
              <motion.section
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.26, duration: 0.4 }}
              >
                <h3 className="font-display text-sm uppercase tracking-widest text-primary mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.04 }}
                      className="px-3 py-1 text-xs font-body bg-secondary text-secondary-foreground rounded-md border border-border"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.section>

              {/* Screenshots */}
              {study.screenshots && study.screenshots.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.34, duration: 0.4 }}
                >
                  <h3 className="font-display text-sm uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
                    <ImageIcon size={14} /> Screenshots
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {study.screenshots.map((src, i) => (
                      <motion.a
                        key={src}
                        href={src}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.06 }}
                        className="block overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-colors group"
                      >
                        <img
                          src={src}
                          alt={`${study.title} screenshot ${i + 1}`}
                          loading="lazy"
                          className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      </motion.a>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.4 }}
                className="flex flex-wrap gap-3 pt-2 border-t border-border"
              >
                {study.links.live && (
                  <a
                    href={study.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-primary text-primary-foreground font-body font-semibold text-sm rounded-lg glow-ember hover:scale-[1.03] transition-transform flex items-center gap-2"
                  >
                    <ExternalLink size={16} /> Visit Live
                  </a>
                )}
                {study.links.github && (
                  <a
                    href={study.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 border border-primary/30 text-primary font-body font-semibold text-sm rounded-lg hover:bg-primary/10 transition-all flex items-center gap-2"
                  >
                    <Github size={16} /> View Code
                  </a>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyModal;
