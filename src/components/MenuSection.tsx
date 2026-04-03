import ScrollReveal from "./ScrollReveal";
import GhostIcon from "./GhostIcon";

const items = [
  { icon: "🌿", name: "Veg Biryani", desc: "The best veg biryani in Tirupati" },
  { icon: "🍗", name: "Chicken Biryani", desc: "Signature dish" },
  { icon: "🥩", name: "Mutton Biryani", desc: "Slow-cooked, rich & aromatic" },
  { icon: "🔥", name: "Chicken Kebab Biryani", desc: "Bold & smoky" },
  { icon: "🍢", name: "Starters & Kebabs", desc: "Happy Hour specials" },
  { icon: "🥤", name: "Drinks & Desserts", desc: "To complete the night" },
];

const MenuSection = () => (
  <section id="menu" className="py-16 md:py-24 bg-background relative overflow-hidden">
    <GhostIcon className="absolute -left-8 bottom-20 w-48 h-48 text-primary/[0.02] animate-ghost-float-reverse hidden md:block" />
    <div className="section-divider container mx-auto mb-12 md:mb-24" />
    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground text-center mb-3 md:mb-4">Tonight's Menu</h2>
        <p className="text-muted-foreground text-center text-base md:text-lg mb-10 md:mb-16">Everything is Unlimited. Everything is Fresh.</p>
      </ScrollReveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
        {items.map((item, i) => (
          <ScrollReveal key={i}>
            <div className="bg-card p-4 md:p-6 rounded-lg gold-glow-hover ghost-hover group cursor-default relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 hidden md:block">
                <GhostIcon className="w-20 h-20 text-primary" />
              </div>
              <div className="flex items-start gap-3 md:gap-4 relative z-10">
                <span className="text-2xl md:text-3xl group-hover:animate-ghost-wiggle">{item.icon}</span>
                <div>
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{item.name}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm mt-1">{item.desc}</p>
                  <span className="inline-block mt-2 text-[10px] md:text-xs bg-secondary/20 text-secondary px-2 py-0.5 rounded font-medium">All You Can Eat</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal>
        <p className="text-muted-foreground/60 text-center text-xs md:text-sm mt-8 md:mt-10">
          * Unlimited servings included. Menu rotates nightly. Prices start at ₹200.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default MenuSection;
