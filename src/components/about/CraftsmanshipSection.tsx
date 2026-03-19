import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CraftsmanshipSection() {
  return (
    <ScrollReveal>
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16">
        <h2 className="luxury-heading text-2xl sm:text-3xl font-semibold text-white mb-4 leading-tight">
          Our{" "}
          <span className="gold-gradient-text">Craftsmanship</span>
        </h2>
        <p className="text-white/70 font-sans text-sm sm:text-base leading-relaxed">
          Each piece is thoughtfully created by skilled artisans, blending traditional techniques
          with modern design. Every design undergoes strict quality checks to ensure purity,
          precision, and long-lasting beauty.
        </p>
      </div>
    </ScrollReveal>
  );
}
