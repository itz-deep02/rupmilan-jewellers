import ScrollReveal from "@/components/ui/ScrollReveal";

export default function OurPromise() {
  return (
    <ScrollReveal>
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8">
        <h2 className="luxury-heading text-2xl sm:text-3xl font-semibold text-white mb-4 leading-tight">
          Our{" "}
          <span className="gold-gradient-text">Promise</span>
        </h2>
        <p className="text-white/70 font-sans text-sm sm:text-base leading-relaxed">
          We believe jewellery is more than an accessory — it&apos;s a memory, a celebration, and a
          legacy. Every piece we create is designed to be cherished for generations.
        </p>
      </div>
    </ScrollReveal>
  );
}
