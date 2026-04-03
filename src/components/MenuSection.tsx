import ScrollReveal from "./ScrollReveal";

const items = [
  { icon: "🌿", name: "Veg Biryani", desc: "The best veg biryani in Tirupati" },
  { icon: "🍗", name: "Chicken Biryani", desc: "Signature dish" },
  { icon: "🥩", name: "Mutton Biryani", desc: "Slow-cooked, rich & aromatic" },
  { icon: "🔥", name: "Chicken Kebab Biryani", desc: "Bold & smoky" },
  { icon: "🍢", name: "Starters & Kebabs", desc: "Happy Hour specials" },
  { icon: "🥤", name: "Drinks & Desserts", desc: "To complete the night" },
];

const MenuSection = () => (
  <section id="menu" className="py-24 bg-background">
    <div className="section-divider container mx-auto mb-24" />
    <div className="container mx-auto px-4 md:px-8">
      <ScrollReveal>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground text-center mb-4">Tonight's Menu</h2>
        <p className="text-muted-foreground text-center text-lg mb-16">Everything is Unlimited. Everything is Fresh.</p>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {items.map((item, i) => (
          <ScrollReveal key={i}>
            <div className="bg-card p-6 rounded-lg gold-glow-hover group cursor-default">
              <div className="flex items-start gap-4">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{item.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                  <span className="inline-block mt-2 text-xs bg-secondary/20 text-secondary px-2 py-0.5 rounded font-medium">All You Can Eat</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal>
        <p className="text-muted-foreground/60 text-center text-sm mt-10">
          * Unlimited servings included. Menu rotates nightly. Prices start at ₹200.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default MenuSection;
