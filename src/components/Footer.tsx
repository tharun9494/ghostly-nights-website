import { Instagram } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const links = ["Home", "About", "Menu", "Gallery", "Reviews", "Find Us"];

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase().replace(" ", "-"))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-primary/20 pb-16 md:pb-0" style={{ backgroundColor: "#060606" }}>
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <img src={logoIcon} alt="Mr. Ghost" className="w-9 h-9 md:w-10 md:h-10 object-contain" />
            <div>
              <span className="font-heading text-base md:text-lg font-semibold text-foreground">Mr. Ghost Restaurant</span>
              <p className="text-muted-foreground text-[10px] md:text-xs mt-1">The Night Comes Alive. So Does the Biryani.</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {links.map(l => (
              <button key={l} onClick={() => scrollTo(l)} className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm">
                {l}
              </button>
            ))}
          </div>
          <div className="flex justify-center md:justify-end">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        <div className="text-center text-muted-foreground/50 text-[10px] md:text-xs mt-8 md:mt-12">
          © 2025 Mr. Ghost Restaurant · Air Bypass Road, Tirupati, AP 517502
        </div>
      </div>
    </footer>
  );
};

export default Footer;
