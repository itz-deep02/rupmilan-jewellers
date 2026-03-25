import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden mb-12 sm:mb-16 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
      {/* Background image */}
      <div className="relative w-full aspect-[16/7] sm:aspect-[16/6] lg:aspect-[16/5]">
        <Image
          src="/images/about/hero.jpg"
          alt="Rupmilan Jewellers Showroom"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

        {/* Text content overlay — left-aligned, bottom-positioned */}
        <div className="absolute inset-0 flex flex-col justify-end px-5 sm:px-10 lg:px-14 pb-6 sm:pb-10 lg:pb-12">
          <p className="text-gold-300 text-[9px] sm:text-[11px] font-sans font-medium tracking-[0.25em] uppercase mb-2 sm:mb-3">
            Since 1988 &middot; Sarafa Bazar, Champa, Chhattisgarh
          </p>
          <h1 className="luxury-heading text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.15] mb-2 sm:mb-3">
            Three Generations<br />
            of <span className="text-gold-300 italic">Trust &amp; Gold</span>
          </h1>
          <p className="text-white/70 text-xs sm:text-sm lg:text-base font-sans max-w-lg leading-relaxed">
            A family legacy built on craftsmanship, purity, and the belief that every piece carries a memory.
          </p>
        </div>
      </div>
    </div>
  );
}
