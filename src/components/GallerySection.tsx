import ScrollReveal from "./ScrollReveal";
import galleryExterior from "@/assets/gallery-exterior.png";
import galleryBiryaniSpread from "@/assets/gallery-biryani-spread.png";
import galleryMuttonBiryani from "@/assets/gallery-mutton-biryani.png";
import galleryKebabs from "@/assets/gallery-kebabs.png";
import galleryNightAmbiance from "@/assets/gallery-night-ambiance.png";
import gallerySignatureDish from "@/assets/gallery-signature-dish.png";

const images = [
  { label: "Biryani Spread", src: galleryBiryaniSpread, tall: true },
  { label: "Night Ambiance", src: galleryNightAmbiance, tall: true },
  { label: "The Entrance", src: galleryExterior, tall: false },
  { label: "Tandoori Kebabs", src: galleryKebabs, tall: false },
  { label: "Signature Dish", src: gallerySignatureDish, tall: false },
  { label: "Mutton Biryani", src: galleryMuttonBiryani, tall: false },
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
          <ScrollReveal key={i} className={img.tall ? "row-span-2" : ""}>
            <div
              className={`relative w-full h-full rounded-lg overflow-hidden gold-glow-hover group cursor-pointer transition-transform hover:scale-[1.02] ${img.tall ? "row-span-2" : ""}`}
              style={{ minHeight: img.tall ? 370 : 180 }}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Dark overlay with label */}
              <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-all flex items-end p-4">
                <span className="text-xs font-body tracking-wide text-foreground/80 bg-background/60 px-2 py-1 rounded backdrop-blur-sm">
                  {img.label}
                </span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal>
        <p className="text-muted-foreground/60 text-center text-sm mt-8">
          📸 Visit us tonight on Air Bypass Road, Tirupati.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default GallerySection;
