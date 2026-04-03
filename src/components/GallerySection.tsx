import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
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

const GallerySection = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = () => setLightboxIndex(null);
  const prev = useCallback(() => setLightboxIndex(i => (i !== null ? (i - 1 + images.length) % images.length : null)), []);
  const next = useCallback(() => setLightboxIndex(i => (i !== null ? (i + 1) % images.length : null)), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [lightboxIndex, prev, next]);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="section-divider container mx-auto mb-12 md:mb-24" />
      <div className="container mx-auto px-4 md:px-8">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground text-center mb-3 md:mb-4">Feel the Vibe</h2>
          <p className="text-muted-foreground text-center text-base md:text-lg mb-10 md:mb-16">A night you won't forget</p>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[200px]">
          {images.map((img, i) => (
            <ScrollReveal key={i} className={`${img.tall ? "row-span-2" : ""}`}>
              <div
                onClick={() => setLightboxIndex(i)}
                className={`relative w-full h-full rounded-lg overflow-hidden gold-glow-hover group cursor-pointer transition-transform hover:scale-[1.02] ${img.tall ? "row-span-2" : ""}`}
                style={{ minHeight: img.tall ? 290 : 140 }}
              >
                <img src={img.src} alt={img.label} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-all flex items-end p-3 md:p-4">
                  <span className="text-[10px] md:text-xs font-body tracking-wide text-foreground/80 bg-background/60 px-2 py-1 rounded backdrop-blur-sm">
                    {img.label}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <p className="text-muted-foreground/60 text-center text-xs md:text-sm mt-6 md:mt-8">
            📸 Visit us tonight on Air Bypass Road, Tirupati.
          </p>
        </ScrollReveal>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[70] bg-background/95 backdrop-blur-md flex items-center justify-center" onClick={close}>
          <button onClick={close} className="absolute top-4 right-4 text-foreground/70 hover:text-foreground transition-colors p-2">
            <X size={24} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-2 md:left-4 text-foreground/50 hover:text-primary transition-colors p-2">
            <ChevronLeft size={28} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-2 md:right-4 text-foreground/50 hover:text-primary transition-colors p-2">
            <ChevronRight size={28} />
          </button>
          <div className="max-w-4xl max-h-[85vh] px-10 md:px-12" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].label}
              className="max-w-full max-h-[75vh] md:max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-center text-foreground/70 text-xs md:text-sm mt-3 md:mt-4 font-body">{images[lightboxIndex].label}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
