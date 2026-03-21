import ScrollReveal from "@/components/ui/ScrollReveal";

export default function OurPromise() {
  return (
    <ScrollReveal>
      <div className="bg-white border border-[rgba(160,115,42,0.20)] rounded-2xl shadow-sm p-6 sm:p-8">
        <h2 className="luxury-heading text-2xl sm:text-3xl font-normal text-brand-heading mb-4 leading-tight">
          Our{" "}
          <span className="text-brand-gold">Promise</span>
        </h2>
        <p className="text-brand-body font-sans text-sm sm:text-base leading-relaxed">
          We believe jewellery is more than an accessory — it&apos;s a memory, a celebration, and a
          legacy. Every piece we create is designed to be cherished for generations.
        </p>
      </div>
    </ScrollReveal>
  );
}
