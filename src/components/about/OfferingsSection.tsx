import { Gem, Coins, Diamond, Medal, Palette, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/layout/SectionHeader";

const offerings = [
  { icon: Gem, label: "18K, 20K & 22K Gold Jewellery" },
  { icon: Coins, label: "24K Gold Coins" },
  { icon: Diamond, label: "Diamond Jewellery" },
  { icon: Medal, label: "925 Sterling Silver" },
  { icon: Palette, label: "Customised Designs" },
  { icon: Sparkles, label: "Personalised Pieces" },
];

export default function OfferingsSection() {
  return (
    <div className="mb-12 sm:mb-16">
      <ScrollReveal>
        <SectionHeader title="What We" accentWord="Offer" />
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {offerings.map((item, index) => (
          <ScrollReveal key={item.label} delay={index * 0.08}>
            <div className="h-full bg-white border border-[rgba(160,115,42,0.20)] rounded-2xl shadow-sm p-6 flex flex-col items-center justify-center text-center hover:shadow-md hover:border-[rgba(160,115,42,0.35)] transition-all duration-300 min-h-[140px]">
              <item.icon className="w-7 h-7 text-brand-gold mb-3 flex-shrink-0" />
              <p className="text-brand-heading text-sm sm:text-base font-sans font-medium leading-snug">
                {item.label}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
