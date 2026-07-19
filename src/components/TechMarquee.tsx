const items = [
  "Python", "Machine Learning", "RAG", "FAISS", "Ollama", "Groq API",
  "Scikit-learn", "NumPy", "Pandas", "React", "TypeScript", "Tailwind",
  "Cloudflare Workers", "Vercel", "Prompt Engineering", "NLP", "MySQL", "Git", "Excel",
];


const TechMarquee = () => {
  return (
    <div
      className="relative overflow-hidden py-4 border-y border-border/50 bg-card/30 backdrop-blur-sm group"
      aria-hidden
    >
      <div className="flex gap-10 animate-[marquee_38s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="font-display text-sm sm:text-base font-semibold text-muted-foreground/80 flex items-center gap-10">
            {t}
            <span className="text-primary/60">✦</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
};

export default TechMarquee;
