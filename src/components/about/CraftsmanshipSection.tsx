import { Fingerprint, Eye, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/layout/SectionHeader";

const craftsmanshipPoints = [
  {
    icon: Fingerprint,
    title: "Handcrafted Excellence",
    description: "Each piece is thoughtfully created by skilled artisans, blending traditional techniques with modern design.",
  },
  {
    icon: Eye,
    title: "Quality Assurance",
    description: "Every design undergoes strict quality checks to ensure purity, precision, and long-lasting beauty.",
  },
  {
    icon: ShieldCheck,
    title: "BIS Hallmarked",
    description: "All our gold jewellery is BIS Hallmarked, guaranteeing the purity and authenticity of every piece.",
  },
];

export default function CraftsmanshipSection() {
  return (
    <div className="mb-12 sm:mb-16">
      <ScrollReveal>
        <SectionHeader title="Our" accentWord="Craftsmanship" subtitle="Where tradition meets artistry in every detail" />
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {craftsmanshipPoints.map((item, index) => (
          <ScrollReveal key={item.title} delay={index * 0.1}>
            <div className="bg-white border border-[rgba(160,115,42,0.20)] rounded-2xl shadow-sm p-6 sm:p-8 text-center hover:shadow-md hover:border-[rgba(160,115,42,0.35)] transition-all duration-300 h-full flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="luxury-heading text-lg sm:text-xl font-normal text-brand-heading mb-2">
                {item.title}
              </h3>
              <p className="text-brand-body font-sans text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
