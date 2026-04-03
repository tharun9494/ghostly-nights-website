import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import GhostIcon from "./GhostIcon";

const reviews = [
  { text: "Best food with good ambiance and hygienic service in best prices.", stars: 5 },
  { text: "The best place to eat veg biryani.....", stars: 5 },
  { text: "Ordered mutton biryani and chicken kebab biryani.", stars: 4 },
];

const platforms = [
  { name: "Google", rating: "4.0★", detail: "246 reviews" },
  { name: "Zomato", rating: "3.7★", detail: "2090 votes" },
  { name: "Justdial", rating: "4★", detail: "239 votes" },
  { name: "Magicpin", rating: "3.7★", detail: "2033 reviews" },
];

const ReviewsSection = () => (
  <section id="reviews" className="py-16 md:py-24 bg-background relative overflow-hidden">
    <GhostIcon className="absolute right-[5%] top-[10%] w-32 h-32 text-primary/[0.02] animate-ghost-float hidden md:block" />
    <div className="section-divider container mx-auto mb-12 md:mb-24" />
    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground text-center mb-10 md:mb-16">What the Night Owls Say</h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-12 md:mb-16">
        {reviews.map((r, i) => (
          <ScrollReveal key={i}>
            <div className="bg-card p-5 md:p-6 rounded-lg gold-glow-hover ghost-hover relative group overflow-hidden">
              <div className="absolute -right-4 -top-4 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-700 hidden md:block">
                <GhostIcon className="w-16 h-16 text-primary" />
              </div>
              <span className="absolute top-3 md:top-4 left-4 font-heading text-4xl md:text-5xl text-primary/20 leading-none">"</span>
              <p className="text-foreground mt-6 md:mt-8 mb-3 md:mb-4 font-light leading-relaxed text-sm md:text-base">{r.text}</p>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star key={j} size={12} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-xs md:text-sm">— Google Reviewer</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs md:text-sm">
          {platforms.map(p => (
            <div key={p.name} className="text-center ghost-hover cursor-default p-2 md:p-3 rounded-lg">
              <span className="text-foreground font-medium">{p.name}</span>
              <div className="text-primary font-heading text-base md:text-lg">{p.rating}</div>
              <span className="text-muted-foreground text-[10px] md:text-xs">{p.detail}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ReviewsSection;
