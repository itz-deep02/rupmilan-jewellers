import { Shield, BadgeCheck, Heart, Calendar } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/layout/SectionHeader";

const reasons = [
  { icon: Shield, label: "Trusted for over 3 decades" },
  { icon: BadgeCheck, label: "Certified and authentic jewellery" },
  { icon: Heart, label: "Personalized customer experience" },
  { icon: Calendar, label: "Designs for every occasion" },
];

export default function WhyChooseUs() {
  return (
    <div className="mb-12 sm:mb-16">
      <ScrollReveal>
        <SectionHeader title="Why Choose" accentWord="Us" />
      </ScrollReveal>

      <div className="grid grid-cols-2 gap-4">
        {reasons.map((item, index) => (
          <ScrollReveal key={item.label} delay={index * 0.08}>
            <div className="h-full bg-white border border-[rgba(160,115,42,0.20)] rounded-2xl shadow-sm p-6 text-center hover:shadow-md hover:border-[rgba(160,115,42,0.35)] transition-all duration-300 flex flex-col items-center justify-center">
              <item.icon className="w-7 h-7 text-brand-gold mx-auto mb-3" />
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
