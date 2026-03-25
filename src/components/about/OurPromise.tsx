import { Quote, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function OurPromise() {
  return (
    <div className="space-y-4">
      {/* Quote block */}
      <ScrollReveal>
        <div className="relative bg-gradient-to-br from-amber-950 via-stone-900 to-neutral-900 rounded-2xl shadow-lg px-8 sm:px-14 lg:px-20 py-10 sm:py-14 text-center overflow-hidden">
          {/* Decorative quote mark */}
          <Quote className="absolute top-5 left-5 sm:top-6 sm:left-8 w-8 h-8 sm:w-10 sm:h-10 text-gold-400/30" />

          <div className="relative z-10">
            <p className="luxury-heading text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto italic">
              &ldquo;Jewellery is more than an accessory — it is a memory, a celebration, and a legacy passed down through generations.&rdquo;
            </p>

            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="h-px w-8 bg-gold-400/40" />
              <p className="text-gold-400 text-[10px] sm:text-xs font-sans font-medium tracking-[0.25em] uppercase">
                Rupmilan Jewellers &middot; Since 1988
              </p>
              <div className="h-px w-8 bg-gold-400/40" />
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* BIS Hallmark Certification bar */}
      <ScrollReveal delay={0.1}>
        <div className="bg-white border border-[rgba(160,115,42,0.20)] rounded-2xl shadow-sm px-5 sm:px-8 py-4 sm:py-5 flex items-start sm:items-center gap-4">
          {/* BIS icon */}
          <div className="flex-shrink-0 text-2xl sm:text-3xl">🏛️</div>

          <div>
            <p className="text-brand-heading font-sans text-sm sm:text-base font-semibold">
              BIS Hallmark Certified &middot; 100% Purity Guaranteed
            </p>
            <p className="text-brand-body font-sans text-xs sm:text-sm leading-relaxed mt-0.5">
              Every piece at Rupmilan Jewellers carries the Bureau of Indian Standards Hallmark — your assurance of verified gold and silver purity.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
