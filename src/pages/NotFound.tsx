import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Mail, Briefcase } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    const title = "404 — Page Not Found | Mohammad Ilhan";
    const desc =
      "The page you are looking for does not exist. Return to Mohammad Ilhan's portfolio to explore projects and case studies.";
    document.title = title;

    const setMeta = (selector: string, attr: string, name: string, content: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta('meta[name="description"]', "name", "description", desc);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", desc);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", desc);
    setMeta('meta[name="robots"]', "name", "robots", "noindex, follow");

    console.error("404: route not found ->", location.pathname);
  }, [location.pathname]);

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden px-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(24_100%_55%_/_0.12)_0%,_transparent_60%)]" />
      <div className="relative z-10 text-center max-w-xl">
        <p className="text-primary font-body text-xs sm:text-sm tracking-[0.3em] uppercase mb-4">
          Error 404
        </p>
        <h1 className="font-display text-7xl sm:text-8xl md:text-9xl font-extrabold leading-none mb-4">
          <span className="text-gradient-fire">404</span>
        </h1>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
          This page wandered off
        </h2>
        <p className="text-muted-foreground font-body text-sm sm:text-base mb-8 leading-relaxed">
          The link you followed may be broken, or the page may have been moved.
          Try one of the routes below to get back on track.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-body font-semibold text-sm rounded-lg glow-ember hover:scale-105 transition-transform duration-300"
          >
            <Home size={16} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-primary/30 text-primary font-body font-semibold text-sm rounded-lg hover:bg-primary/10 transition-all duration-300"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 text-left">
          <Link
            to="/#projects"
            className="group flex items-center gap-3 p-4 border border-border rounded-lg hover:border-primary/40 transition-colors"
          >
            <Briefcase className="text-primary" size={20} />
            <div>
              <div className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                Projects
              </div>
              <div className="text-xs text-muted-foreground font-body">
                Case studies & freelance work
              </div>
            </div>
          </Link>
          <Link
            to="/#contact"
            className="group flex items-center gap-3 p-4 border border-border rounded-lg hover:border-primary/40 transition-colors"
          >
            <Mail className="text-primary" size={20} />
            <div>
              <div className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                Contact
              </div>
              <div className="text-xs text-muted-foreground font-body">
                Hire me or say hello
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
