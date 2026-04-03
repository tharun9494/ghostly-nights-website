import { ChevronDown, Star } from "lucide-react";
import { useMemo } from "react";
import GhostIcon from "./GhostIcon";

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16 md:pt-0">
      {/* Smoke layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="smoke-layer-1 absolute bottom-0 left-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
        <div className="smoke-layer-2 absolute bottom-10 right-1/4 w-80 h-80 bg-foreground/3 rounded-full blur-3xl" />
        <div className="smoke-layer-3 absolute bottom-20 left-1/2 w-72 h-72 bg-foreground/4 rounded-full blur-3xl" />
      </div>

      {/* Ghost silhouettes - hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        <GhostIcon className="absolute top-[15%] left-[8%] w-20 h-20 text-primary/[0.03] animate-ghost-float" />
        <GhostIcon className="absolute top-[25%] right-[10%] w-16 h-16 text-primary/[0.04] animate-ghost-float-reverse" />
        <GhostIcon className="absolute bottom-[20%] left-[15%] w-12 h-12 text-primary/[0.03] animate-ghost-float" style={{ animationDelay: "3s" }} />
        <GhostIcon className="absolute bottom-[30%] right-[20%] w-14 h-14 text-primary/[0.025] animate-ghost-float-reverse" style={{ animationDelay: "5s" }} />
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
        {/* Animated ghost logo - smaller on mobile */}
        <div className="mb-4 md:mb-6 flex justify-center">
          <GhostIcon className="w-10 h-10 md:w-16 md:h-16 text-primary animate-ghost-float ghost-glow" />
        </div>

        <p className="text-primary text-[10px] md:text-xs tracking-[0.3em] uppercase mb-3 md:mb-6 font-body font-medium animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Now Open · 7:30 PM Onwards
        </p>
        <h1 className="font-heading text-4xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-4 md:mb-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Where the Night<br />Gets Tasty.
        </h1>
        <p className="text-muted-foreground text-base md:text-xl mb-6 md:mb-10 font-body font-light animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          Biryani. Kebabs. Unlimited. Every Night.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <a href="#menu" className="bg-primary text-primary-foreground px-6 md:px-8 py-2.5 md:py-3 rounded font-medium text-sm tracking-wide hover:brightness-110 transition-all gold-glow-hover ghost-hover">
            Explore Menu
          </a>
          <a href="tel:09133635504" className="border border-primary text-primary px-6 md:px-8 py-2.5 md:py-3 rounded font-medium text-sm tracking-wide gold-glow-hover hover:bg-primary hover:text-primary-foreground transition-all ghost-hover">
            Call Now
          </a>
        </div>

        {/* Rating badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "1s" }}>
          {[
            { name: "Google", rating: "4.0" },
            { name: "Zomato", rating: "3.7" },
            { name: "Justdial", rating: "4.0" },
          ].map(r => (
            <div key={r.name} className="flex items-center gap-1">
              <Star size={12} className="text-primary fill-primary md:w-3.5 md:h-3.5" />
              <span>{r.name} {r.rating}★</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll arrow */}
      <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/50 animate-bounce-arrow">
        <ChevronDown size={28} />
      </button>
    </section>
  );
};

export default HeroSection;
