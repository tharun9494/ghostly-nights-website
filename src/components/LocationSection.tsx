import { MapPin, Phone, Clock, IndianRupee } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const LocationSection = () => (
  <section id="find-us" className="py-24 bg-background">
    <div className="section-divider container mx-auto mb-24" />
    <div className="container mx-auto px-4 md:px-8">
      <ScrollReveal>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground text-center mb-16">Find Us Tonight</h2>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="bg-card p-8 rounded-lg space-y-6">
            <div className="flex gap-3 items-start">
              <MapPin size={20} className="text-primary mt-1 shrink-0" />
              <p className="text-muted-foreground text-sm">Besides Fortuna Hospital, 3, Air Bypass Road, New Balaji Colony, Avilali, Tirupati – 517502</p>
            </div>
            <div className="flex gap-3 items-center">
              <Phone size={20} className="text-primary shrink-0" />
              <a href="tel:09133635504" className="text-foreground hover:text-primary transition-colors">091336 35504</a>
            </div>
            <div className="flex gap-3 items-center">
              <Clock size={20} className="text-primary shrink-0" />
              <span className="text-muted-foreground">Opens 7:30 PM daily</span>
            </div>
            <div className="flex gap-3 items-center">
              <IndianRupee size={20} className="text-primary shrink-0" />
              <span className="text-muted-foreground">₹200–₹400 per person</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a href="https://www.google.com/maps/place/Mr.Ghost+Restaurant/@13.6228995,79.4097029,17z" target="_blank" rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-6 py-3 rounded text-sm font-medium text-center hover:brightness-110 transition-all">
                Get Directions
              </a>
              <a href="tel:09133635504" className="border border-primary text-primary px-6 py-3 rounded text-sm font-medium text-center gold-glow-hover hover:bg-primary hover:text-primary-foreground transition-all">
                Call Now
              </a>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="rounded-lg overflow-hidden h-full min-h-[300px]">
            <iframe
              title="Mr. Ghost Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.5!2d79.4097029!3d13.6228995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM3JzIyLjQiTiA3OcKwMjQnNDQuMiJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 300, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default LocationSection;
