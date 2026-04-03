import { Instagram } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const CTASection = () => (
  <section className="py-24 relative overflow-hidden">
    {/* Subtle gold glow bg */}
    <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
    <div className="relative z-10 container mx-auto px-4 text-center">
      <ScrollReveal>
        <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
          Tonight's Table is Waiting.
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
          Walk in after 7:30 PM. No booking needed. Just bring your hunger.
        </p>
        <a href="tel:09133635504" className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded text-lg font-medium gold-glow-hover hover:brightness-110 transition-all mb-8">
          Call Now — 091336 35504
        </a>
        <div>
          <a href="#" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
            <Instagram size={18} /> @mrghostrestaurant
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CTASection;
