import { ChevronDown, Star } from "lucide-react";
import { useMemo } from "react";
import logoIcon from "@/assets/logo-icon.png";
import logoFull from "@/assets/logo-full.png";

const HeroSection = () => {
  const embers = useMemo(() =>
    Array.from({ length: 30 }, (_, i) => ({
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${3 + Math.random() * 5}s`,
      size: 2 + Math.random() * 4,
    })), []
  );

  const orbs = useMemo(() =>
    Array.from({ length: 5 }, (_, i) => ({
      left: `${10 + Math.random() * 80}%`,
      top: `${20 + Math.random() * 60}%`,
      size: 200 + Math.random() * 300,
      delay: `${Math.random() * 4}s`,
      duration: `${6 + Math.random() * 6}s`,
    })), []
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16 md:pt-0">
      {/* Deep radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(43_82%_46%/0.06)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(0_69%_32%/0.08)_0%,_transparent_50%)]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_hsl(0_0%_4%/0.8)_100%)]" />

      {/* Animated smoke/mist layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="smoke-layer-1 absolute bottom-[-10%] left-[15%] w-[500px] h-[500px] bg-primary/[0.08] rounded-full blur-[100px]" />
        <div className="smoke-layer-2 absolute bottom-[-5%] right-[10%] w-[400px] h-[400px] bg-secondary/[0.06] rounded-full blur-[80px]" />
        <div className="smoke-layer-3 absolute bottom-[5%] left-[40%] w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-[120px]" />
        <div className="smoke-layer-1 absolute top-[10%] right-[20%] w-[300px] h-[300px] bg-primary/[0.04] rounded-full blur-[80px]" style={{ animationDelay: "3s" }} />
      </div>

      {/* Floating golden orbs */}
      {orbs.map((orb, i) => (
        <div
          key={`orb-${i}`}
          className="absolute rounded-full pointer-events-none animate-orb-pulse"
          style={{
            left: orb.left,
            top: orb.top,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, hsla(43, 82%, 46%, 0.06) 0%, transparent 70%)`,
            animationDelay: orb.delay,
            animationDuration: orb.duration,
          }}
        />
      ))}

      {/* Rising embers/sparks */}
      {embers.map((e, i) => (
        <div
          key={`ember-${i}`}
          className="absolute rounded-full pointer-events-none animate-ember-rise"
          style={{
            left: e.left,
            bottom: `-${e.size}px`,
            width: e.size,
            height: e.size,
            background: `radial-gradient(circle, hsl(43 82% 56%) 0%, hsl(43 82% 46% / 0.6) 50%, transparent 100%)`,
            boxShadow: `0 0 ${e.size * 2}px hsl(43 82% 46% / 0.4)`,
            animationDelay: e.delay,
            animationDuration: e.duration,
          }}
        />
      ))}

      {/* Horizontal light streak */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-light-sweep pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Real logo with glow */}
        <div className="mb-4 md:mb-6 flex justify-center">
          <div className="relative">
            <img src={logoFull} alt="Mr. Ghost Restaurant" className="w-48 h-auto md:w-72 animate-ghost-float relative z-10 drop-shadow-[0_0_20px_hsla(15,80%,50%,0.4)]" />
            <div className="absolute inset-0 bg-secondary/15 rounded-full blur-3xl animate-ghost-float" />
          </div>
        </div>

        <p className="text-primary text-[10px] md:text-xs tracking-[0.35em] uppercase mb-4 md:mb-6 font-body font-medium animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Now Open · 7:30 PM Onwards
        </p>

        <h1 className="font-heading text-[2.75rem] md:text-7xl lg:text-[5.5rem] font-bold text-foreground leading-[1.1] mb-5 md:mb-6 animate-fade-in-up hero-text-glow" style={{ animationDelay: "0.4s" }}>
          Where the Night<br />Gets Tasty.
        </h1>

        <p className="text-muted-foreground text-base md:text-xl mb-8 md:mb-10 font-body font-light animate-fade-in-up max-w-lg mx-auto" style={{ animationDelay: "0.6s" }}>
          Biryani. Kebabs. Unlimited. Every Night.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-10 md:mb-12 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <a href="#menu" className="group relative bg-primary text-primary-foreground px-8 md:px-10 py-3 md:py-3.5 rounded-lg font-semibold text-sm tracking-wide hover:brightness-110 transition-all overflow-hidden">
            <span className="relative z-10">Explore Menu</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-yellow-500 to-primary bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a href="tel:09133635504" className="border border-primary/60 text-primary px-8 md:px-10 py-3 md:py-3.5 rounded-lg font-semibold text-sm tracking-wide hover:bg-primary/10 hover:border-primary transition-all backdrop-blur-sm">
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
            <div key={r.name} className="flex items-center gap-1.5 bg-card/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/10">
              <Star size={12} className="text-primary fill-primary" />
              <span>{r.name} {r.rating}★</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll arrow */}
      <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-primary/40 animate-bounce-arrow hover:text-primary/70 transition-colors">
        <ChevronDown size={28} />
      </button>

      {/* Bottom fog */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
