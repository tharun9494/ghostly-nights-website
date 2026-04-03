import { Instagram } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import logoIcon from "@/assets/logo-icon.png";

const CTASection = () => (
  <section className="py-16 md:py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
    
    {/* Haunted mist */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/[0.03] to-transparent animate-mist-pulse" />
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center">
      <ScrollReveal>
        <img src={logoIcon} alt="Mr. Ghost" className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 animate-ghost-float object-contain drop-shadow-[0_0_12px_hsla(15,80%,50%,0.3)]" />
        <h2 className="font-heading text-3xl md:text-6xl font-bold text-foreground mb-4 md:mb-6">
          Tonight's Table is Waiting.
        </h2>
        <p className="text-muted-foreground text-base md:text-lg mb-8 md:mb-10 max-w-md mx-auto">
          Walk in after 7:30 PM. No booking needed. Just bring your hunger.
        </p>
        <a href="tel:09133635504" className="inline-block bg-primary text-primary-foreground px-8 md:px-10 py-3 md:py-4 rounded text-base md:text-lg font-medium gold-glow-hover ghost-hover hover:brightness-110 transition-all mb-6 md:mb-8">
          Call Now — 091336 35504
        </a>
        <div>
          <a href="#" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm">
            <Instagram size={16} /> @mrghostrestaurant
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CTASection;
