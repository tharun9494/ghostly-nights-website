import { ChevronDown, Star } from "lucide-react";
import { useMemo } from "react";

const HeroSection = () => {
  const particles = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 6}s`,
      duration: `${4 + Math.random() * 4}s`,
      size: 2 + Math.random() * 3,
    })), []
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Smoke layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="smoke-layer-1 absolute bottom-0 left-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
        <div className="smoke-layer-2 absolute bottom-10 right-1/4 w-80 h-80 bg-foreground/3 rounded-full blur-3xl" />
        <div className="smoke-layer-3 absolute bottom-20 left-1/2 w-72 h-72 bg-foreground/4 rounded-full blur-3xl" />
      </div>

      {/* Floating particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-primary/15 animate-float-particle pointer-events-none"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size, animationDelay: p.delay, animationDuration: p.duration }}
        />
      ))}

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-primary text-xs tracking-[0.3em] uppercase mb-6 font-body font-medium">
          Now Open · 7:30 PM Onwards
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-6">
          Where the Night<br />Gets Tasty.
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mb-10 font-body font-light">
          Biryani. Kebabs. Unlimited. Every Night.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#menu" className="bg-primary text-primary-foreground px-8 py-3 rounded font-medium text-sm tracking-wide hover:brightness-110 transition-all gold-glow-hover">
            Explore Menu
          </a>
          <a href="tel:09133635504" className="border border-primary text-primary px-8 py-3 rounded font-medium text-sm tracking-wide gold-glow-hover hover:bg-primary hover:text-primary-foreground transition-all">
            Call Now
          </a>
        </div>

        {/* Rating badges */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          {[
            { name: "Google", rating: "4.0" },
            { name: "Zomato", rating: "3.7" },
            { name: "Justdial", rating: "4.0" },
          ].map(r => (
            <div key={r.name} className="flex items-center gap-1">
              <Star size={14} className="text-primary fill-primary" />
              <span>{r.name} {r.rating}★</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll arrow */}
      <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/50 animate-bounce-arrow">
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
