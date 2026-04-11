import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function StorySection() {
  return (
    <div className="mb-12 sm:mb-16">
      {/* Our Story */}
      <ScrollReveal>
        <div className="mb-10 sm:mb-14">
          <p className="text-brand-gold text-xs sm:text-sm font-sans font-medium tracking-[0.3em] uppercase mb-3">
            Our Story
          </p>
          <h2 className="luxury-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-heading leading-tight mb-4 sm:mb-5">
            A legacy of <span className="text-brand-gold italic">trust &amp; craftsmanship</span>
          </h2>
          <p className="text-brand-body font-sans text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl">
            What began as a small workshop in Sarafa Bazar, Champa in 1988 has grown into one of the most trusted jewellery destinations in Chhattisgarh. For over three decades, Rupmilan Jewellers has served generations of families — crafting not just jewellery, but memories that last a lifetime. Every piece that leaves our showroom carries the same promise of purity, trust, and timeless elegance that our founder envisioned.
          </p>
        </div>
      </ScrollReveal>

      {/* Founder card */}
      <ScrollReveal>
        <div className="mb-2">
          <p className="text-brand-gold text-xs sm:text-sm font-sans font-medium tracking-[0.3em] uppercase mb-5 sm:mb-6">
            Our Founder
          </p>

          <div className="flex flex-row items-start gap-3 sm:gap-8">
            {/* Photo with badge */}
            <div className="relative flex-shrink-0 w-[88px] sm:w-[160px]">
              <div className="w-[88px] h-[106px] sm:w-[160px] sm:h-[185px] rounded-lg sm:rounded-xl overflow-hidden border border-[rgba(160,115,42,0.20)] shadow-sm relative">
                <Image
                  src="/images/about/founder.jpg"
                  alt="Late Shri Sharda Prasad Bitawan Sao - Founder of Rupmilan Jewellers"
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
              {/* Badge at bottom */}
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-brand-gold text-white text-[7px] sm:text-[10px] font-sans font-semibold tracking-wider uppercase px-2 py-1 sm:px-3 sm:py-1.5 rounded-full whitespace-nowrap shadow-md">
                Founder &middot; 1988
              </div>
            </div>

            {/* Text content */}
            <div className="flex-1 pt-0 sm:pt-2">
              <h2 className="luxury-heading text-base sm:text-3xl lg:text-4xl font-normal text-brand-heading leading-snug mb-0.5 sm:mb-1">
                Late Shri Sharda Prasad Bitawan Sao
              </h2>
              <p className="text-brand-gold text-[8px] sm:text-xs font-sans font-medium tracking-[0.12em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-4">
                Founder &middot; Rupmilan Jewellers &middot; Est. 1988
              </p>

              {/* Quote with left border */}
              <div className="border-l-2 border-brand-gold pl-2.5 sm:pl-5">
                <p className="luxury-heading text-xs sm:text-lg lg:text-xl font-normal text-brand-body italic leading-relaxed">
                  &ldquo;Jewellery is not just gold and silver — it is trust, it is memory, it is family. Every piece we make carries a little piece of our heart.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
