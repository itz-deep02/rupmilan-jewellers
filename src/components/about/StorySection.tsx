import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function StorySection() {
  return (
    <ScrollReveal>
      <div className="mb-12 sm:mb-16">
        {/* Eyebrow */}
        <p className="text-brand-gold text-xs sm:text-sm font-sans font-medium tracking-[0.3em] uppercase mb-5 sm:mb-6">
          Our Founder
        </p>

        {/* Founder card */}
        <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-8">
          {/* Photo with badge */}
          <div className="relative flex-shrink-0">
            <div className="w-[140px] h-[160px] sm:w-[160px] sm:h-[185px] rounded-xl overflow-hidden border border-[rgba(160,115,42,0.20)] shadow-sm">
              <Image
                src="/images/about/founder.jpg"
                alt="Late Shri Sharda Prasad Bitawan Sao - Founder of Rupmilan Jewellers"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
            {/* Badge at bottom */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-brand-gold text-white text-[9px] sm:text-[10px] font-sans font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full whitespace-nowrap shadow-md">
              Founder &middot; 1988
            </div>
          </div>

          {/* Text content */}
          <div className="pt-1 sm:pt-2">
            <h2 className="luxury-heading text-2xl sm:text-3xl lg:text-4xl font-normal text-brand-heading leading-tight mb-1.5">
              Late Shri Sharda Prasad Bitawan Sao
            </h2>
            <p className="text-brand-gold text-[10px] sm:text-xs font-sans font-medium tracking-[0.2em] uppercase mb-4">
              Founder &middot; Rupmilan Jewellers &middot; Est. 1988
            </p>

            {/* Quote with left border */}
            <div className="border-l-2 border-brand-gold pl-4 sm:pl-5">
              <p className="luxury-heading text-base sm:text-lg lg:text-xl font-normal text-brand-body italic leading-relaxed">
                &ldquo;Jewellery is not just gold and silver — it is trust, it is memory, it is family. Every piece we make carries a little piece of our heart.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
