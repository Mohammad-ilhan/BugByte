import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="pt-12 pb-8 border-t border-border relative">
    <div className="container mx-auto px-6">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10 max-w-5xl mx-auto">
        <div>
          <p className="font-display text-xl font-bold text-gradient-fire mb-2">Mohammad Ilhan</p>
          <p className="text-muted-foreground text-xs font-body leading-relaxed mb-3">
            ML Engineer · Full Stack Developer · Freelancer crafting AI-powered web experiences.
          </p>
          <div className="flex items-center gap-2 text-xs font-body">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-muted-foreground">Available for freelance</span>
          </div>
        </div>
        <div>
          <p className="font-display text-sm font-semibold text-foreground mb-3">Quick Links</p>
          <ul className="space-y-1.5">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted-foreground hover:text-primary text-xs font-body transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-sm font-semibold text-foreground mb-3">Connect</p>
          <div className="flex gap-3">
            {[
              { Icon: Github, href: "https://github.com/Mohammad-ilhan", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/mohammad-ilhan/", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:mohammadilhan345@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-border max-w-5xl mx-auto">
        <p className="text-muted-foreground text-xs font-body">
          © {new Date().getFullYear()} Mohammad Ilhan — Crafted with passion & AI
        </p>
        <a
          href="#home"
          className="flex items-center gap-2 text-xs font-body text-muted-foreground hover:text-primary transition-colors group"
        >
          Back to top
          <span className="w-7 h-7 rounded-full border border-border flex items-center justify-center group-hover:border-primary/40 group-hover:-translate-y-0.5 transition-all">
            <ArrowUp size={13} />
          </span>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
