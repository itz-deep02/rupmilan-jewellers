import ScrollReveal from "@/components/ui/ScrollReveal";

export default function StorySection() {
  return (
    <ScrollReveal>
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16">
        <h2 className="luxury-heading text-2xl sm:text-3xl font-semibold text-white mb-4 leading-tight">
          Our{" "}
          <span className="gold-gradient-text">Story</span>
        </h2>
        <p className="text-white/70 font-sans text-sm sm:text-base leading-relaxed">
          Established in 1988, Rupmilan Jewellers is a trusted name in gold, silver, and diamond
          jewellery, built on a legacy of craftsmanship, quality, and transparency. Founded by Late
          Shri Sharda Prasad Bitawan Sao, we began with a simple vision — to create beautifully
          handcrafted jewellery that celebrates life&apos;s most precious moments. From a small
          workshop to a destination serving three generations of families, our journey has been
          defined by trust and lasting relationships.
        </p>
      </div>
    </ScrollReveal>
  );
}
