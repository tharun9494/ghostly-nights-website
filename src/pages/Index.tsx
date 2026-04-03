import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import MobileCallCTA from "@/components/MobileCallCTA";
import FloatingGhosts from "@/components/FloatingGhosts";

const Index = () => (
  <div className="min-h-screen bg-background">
    <FloatingGhosts />
    <Navigation />
    <HeroSection />
    <AboutSection />
    <MenuSection />
    <GallerySection />
    <ReviewsSection />
    <LocationSection />
    <CTASection />
    <Footer />
    <MobileCallCTA />
  </div>
);

export default Index;
