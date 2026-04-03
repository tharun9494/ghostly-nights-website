import { Instagram } from "lucide-react";
import GhostIcon from "./GhostIcon";

const links = ["Home", "About", "Menu", "Gallery", "Reviews", "Find Us"];

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase().replace(" ", "-"))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-primary/20" style={{ backgroundColor: "#060606" }}>
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="flex items-center gap-3">
            <GhostIcon className="w-8 h-8 text-primary" />
            <div>
              <span className="font-heading text-lg font-semibold text-foreground">Mr. Ghost Restaurant</span>
              <p className="text-muted-foreground text-xs mt-1">The Night Comes Alive. So Does the Biryani.</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {links.map(l => (
              <button key={l} onClick={() => scrollTo(l)} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                {l}
              </button>
            ))}
          </div>
          <div className="flex justify-end">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram size={22} />
            </a>
          </div>
        </div>
        <div className="text-center text-muted-foreground/50 text-xs mt-12">
          © 2025 Mr. Ghost Restaurant · Air Bypass Road, Tirupati, AP 517502
        </div>
      </div>
    </footer>
  );
};

export default Footer;
