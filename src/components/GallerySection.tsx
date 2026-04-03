import { Camera } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const images = [
  { label: "Biryani Spread", span: "row-span-2" },
  { label: "Night Ambiance", span: "row-span-2" },
  { label: "Live Counter", span: "" },
  { label: "Happy Hours", span: "" },
  { label: "Family Seating", span: "" },
  { label: "Signature Dish", span: "" },
];

const GallerySection = () => (
  <section id="gallery" className="py-24 bg-background">
    <div className="section-divider container mx-auto mb-24" />
    <div className="container mx-auto px-4 md:px-8">
      <ScrollReveal>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground text-center mb-4">Feel the Vibe</h2>
        <p className="text-muted-foreground text-center text-lg mb-16">A night you won't forget</p>
      </ScrollReveal>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[180px] md:auto-rows-[200px]">
        {images.map((img, i) => (
          <ScrollReveal key={i} className={img.span}>
            <div className={`relative w-full h-full bg-muted rounded-lg overflow-hidden gold-glow-hover group cursor-pointer flex items-center justify-center transition-transform hover:scale-[1.02] ${img.span}`}
              style={{ minHeight: img.span ? 370 : 180 }}
            >
              <div className="flex flex-col items-center gap-2 text-primary/40 group-hover:text-primary/70 transition-colors">
                <Camera size={32} />
                <span className="text-xs font-body tracking-wide text-muted-foreground">{img.label}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal>
        <p className="text-muted-foreground/60 text-center text-sm mt-8">
          📸 Real photos coming soon. Visit us tonight on Air Bypass Road, Tirupati.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default GallerySection;
