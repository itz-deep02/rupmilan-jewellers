import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CraftsmanshipSection() {
  return (
    <ScrollReveal>
      <div className="bg-white border border-[rgba(160,115,42,0.20)] rounded-2xl shadow-sm p-6 sm:p-8 mb-12 sm:mb-16">
        <h2 className="luxury-heading text-2xl sm:text-3xl font-normal text-brand-heading mb-4 leading-tight">
          Our{" "}
          <span className="text-brand-gold">Craftsmanship</span>
        </h2>
        <p className="text-brand-body font-sans text-sm sm:text-base leading-relaxed">
          Each piece is thoughtfully created by skilled artisans, blending traditional techniques
          with modern design. Every design undergoes strict quality checks to ensure purity,
          precision, and long-lasting beauty.
        </p>
      </div>
    </ScrollReveal>
  );
}
