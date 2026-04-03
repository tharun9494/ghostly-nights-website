import { useState, useEffect } from "react";
import GhostIcon from "./GhostIcon";
import { Menu, X } from "lucide-react";

const links = ["Home", "About", "Menu", "Gallery", "Reviews", "Find Us"];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id.toLowerCase().replace(" ", "-"));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-primary/10" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <button onClick={() => scrollTo("Home")} className="flex items-center gap-2 text-primary">
          <GhostIcon className="w-8 h-8" />
          <span className="font-heading text-xl font-semibold text-foreground">Mr. Ghost</span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wide">
              {l}
            </button>
          ))}
          <button onClick={() => scrollTo("Find Us")} className="border border-primary text-primary px-5 py-2 rounded text-sm font-medium gold-glow-hover hover:bg-primary hover:text-primary-foreground transition-all">
            Reserve a Table
          </button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-primary/10 px-6 pb-6">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} className="block w-full text-left py-3 text-muted-foreground hover:text-primary transition-colors border-b border-primary/5">
              {l}
            </button>
          ))}
          <button onClick={() => scrollTo("Find Us")} className="mt-4 w-full border border-primary text-primary px-5 py-3 rounded text-sm font-medium">
            Reserve a Table
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
