import { Phone } from "lucide-react";

const MobileCallCTA = () => (
  <div className="fixed bottom-0 left-0 right-[72px] z-50 md:hidden">
    <a href="tel:09133635504" className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 font-medium text-sm w-full">
      <Phone size={16} /> Call Now — 091336 35504
    </a>
  </div>
);

export default MobileCallCTA;
