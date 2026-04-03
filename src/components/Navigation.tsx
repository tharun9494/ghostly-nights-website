import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

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
    <>
      {/* Demo banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground text-center text-[10px] md:text-xs py-1 md:py-1.5 px-4 font-body leading-tight">
        <span className="hidden md:inline">Demo Website — All data, prices &amp; photos taken from your Google Maps listing. Final version will use your own photos &amp; can be updated anytime.</span>
        <span className="md:hidden">Demo Website — Data &amp; photos from Google Maps. Final version fully customizable.</span>
      </div>

      <nav className={`fixed top-[24px] md:top-[30px] left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-primary/10" : "bg-transparent"}`}>
        <div className="container mx-auto flex items-center justify-between py-3 md:py-4 px-4 md:px-8">
          <button onClick={() => scrollTo("Home")} className="flex items-center gap-2 group">
            <img src={logoIcon} alt="Mr. Ghost" className="w-9 h-9 md:w-10 md:h-10 object-contain drop-shadow-[0_0_8px_hsla(15,80%,50%,0.3)]" />
            <span className="font-heading text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">Mr. Ghost</span>
          </button>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <button key={l} onClick={() => scrollTo(l)} className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wide ghost-hover-text">
                {l}
              </button>
            ))}
            <button onClick={() => scrollTo("Find Us")} className="border border-primary text-primary px-5 py-2 rounded text-sm font-medium gold-glow-hover ghost-hover hover:bg-primary hover:text-primary-foreground transition-all">
              Reserve a Table
            </button>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-primary/10 px-6 pb-6 animate-fade-in">
            {links.map(l => (
              <button key={l} onClick={() => scrollTo(l)} className="block w-full text-left py-3 text-sm text-muted-foreground hover:text-primary transition-colors border-b border-primary/5">
                {l}
              </button>
            ))}
            <button onClick={() => scrollTo("Find Us")} className="mt-4 w-full border border-primary text-primary px-5 py-3 rounded text-sm font-medium">
              Reserve a Table
            </button>
          </div>
        )}
      </nav>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/919133635504"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6 w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-ghost-pulse-subtle"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 md:w-7 md:h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
};

export default Navigation;
