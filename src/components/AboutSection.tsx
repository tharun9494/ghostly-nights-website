import ScrollReveal from "./ScrollReveal";
import GhostIcon from "./GhostIcon";

const stats = [
  { icon: "👻", title: "Night Only", desc: "Opens at 7:30 PM" },
  { icon: "🍛", title: "All You Can Eat", desc: "Unlimited Biryani" },
  { icon: "₹", title: "₹200–400", desc: "Per Person, Every Night" },
];

const AboutSection = () => (
  <section id="about" className="py-16 md:py-24 bg-background relative overflow-hidden">
    {/* Background ghost watermark - hidden on mobile */}
    <GhostIcon className="absolute -right-10 top-1/2 -translate-y-1/2 w-64 h-64 text-primary/[0.02] animate-ghost-float hidden md:block" />

    <div className="section-divider container mx-auto mb-12 md:mb-24" />
    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-10 md:mb-16 text-center">
          The Ghost Story
        </h2>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <ScrollReveal>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-light">
            Mr. Ghost Restaurant is Tirupati's most talked-about night dining experience. We open when the city slows down — and serve the kind of biryani that keeps you coming back, night after night.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-light mt-4">
            Located beside Fortuna Hospital on Air Bypass Road, we're the hidden gem you'll want to tell everyone about.
          </p>
        </ScrollReveal>
        <div className="grid gap-3 md:gap-4">
          {stats.map((s, i) => (
            <ScrollReveal key={i}>
              <div className="bg-card p-4 md:p-6 rounded-lg border-t-2 border-primary gold-glow-hover ghost-hover cursor-default group">
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-2xl md:text-3xl group-hover:animate-ghost-wiggle transition-transform">{s.icon}</span>
                  <div>
                    <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground">{s.title}</h3>
                    <p className="text-muted-foreground text-xs md:text-sm">{s.desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
