"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const milestones = [
  {
    year: "1988",
    title: "Founded in Champa",
    description: "Late Shri Sharda Prasad Bitawan Sao opens the first workshop in Sarafa Bazar with a vision of trust and craftsmanship.",
  },
  {
    year: "Late 1990s",
    title: "A name families trust",
    description: "Word of mouth spreads across Champa — families begin returning generation after generation.",
  },
  {
    year: "Early 2000s",
    title: "Showroom Expansion",
    description: "Growing demand leads to a bigger, better showroom in Sarafa Bazar to serve more families.",
  },
  {
    year: "2020",
    title: "BIS Hallmark Certified",
    description: "Became BIS Hallmark certified — an official government guarantee of 100% purity on every piece.",
  },
  {
    year: "Today",
    title: "Three Generations Strong",
    description: "The family legacy continues — serving Champa with the same values of trust, quality and craftsmanship.",
  },
];

export default function JourneyTimeline() {
  return (
    <div className="mb-12 sm:mb-16">
      <ScrollReveal>
        <div className="mb-8 sm:mb-10">
          <p className="text-brand-gold-light text-xs sm:text-sm font-sans font-medium tracking-[0.3em] uppercase mb-3">
            Our Journey
          </p>
          <h2 className="luxury-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-heading leading-tight">
            A legacy built <span className="text-brand-gold italic">decade by decade</span>
          </h2>
        </div>
      </ScrollReveal>

      {/* Timeline */}
      <div className="relative pl-6 sm:pl-8">
        {/* Vertical line */}
        <div className="absolute left-[9px] sm:left-[11px] top-2 bottom-2 w-px bg-brand-gold/25" />

        {milestones.map((milestone, index) => (
          <ScrollReveal key={milestone.year} delay={index * 0.1}>
            <div className="relative pb-8 sm:pb-10 last:pb-0">
              {/* Dot */}
              <div className="absolute -left-6 sm:-left-8 top-1 w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] rounded-full border-2 border-brand-gold bg-ivory flex items-center justify-center">
                <div className="w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] rounded-full bg-brand-gold" />
              </div>

              {/* Content */}
              <div className="ml-2 sm:ml-4">
                <p className="text-brand-gold text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider mb-1">
                  {milestone.year}
                </p>
                <h3 className="luxury-heading text-lg sm:text-xl lg:text-2xl font-normal text-brand-heading mb-1.5">
                  {milestone.title}
                </h3>
                <p className="text-brand-body font-sans text-sm sm:text-base leading-relaxed max-w-2xl">
                  {milestone.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
