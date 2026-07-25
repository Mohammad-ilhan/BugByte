import { ArrowUp, Instagram, Linkedin, Mail } from "lucide-react";
import BugByteLogo from "@/components/BugByteLogo";

const links = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Work", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
  <footer className="pt-16 pb-8 border-t border-border relative">
    <div className="container mx-auto px-6">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12 max-w-5xl mx-auto">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 text-foreground">
              <BugByteLogo />
            </div>
          </div>
          <p className="text-muted-foreground text-xs font-body leading-relaxed mb-4 max-w-xs">
            A digital studio building landing pages, full-stack platforms and e-commerce
            experiences for ambitious brands.
          </p>
          <div className="flex items-center gap-2 text-xs font-body">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-muted-foreground">Accepting new projects</span>
          </div>
        </div>
        <div>
          <p className="font-display text-sm font-semibold text-foreground mb-3">Explore</p>
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
          <p className="font-display text-sm font-semibold text-foreground mb-3">Get in Touch</p>
          <a
            href="mailto:hello@bugbyte.com"
            className="text-muted-foreground hover:text-primary text-xs font-body transition-colors block mb-3"
          >
            hello@bugbyte.com
          </a>
          <div className="flex gap-3">
            {[
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
              { Icon: Instagram, href: "#", label: "Instagram" },
              { Icon: Mail, href: "mailto:hello@bugbyte.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
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
          © {new Date().getFullYear()} BugByte · All rights reserved.
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
};

export default Footer;
