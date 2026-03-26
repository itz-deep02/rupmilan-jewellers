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

      {/* Timeline — mobile: single column, desktop: two-column with center line */}

      {/* Mobile timeline */}
      <div className="sm:hidden relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-brand-gold/25" />

        {milestones.map((milestone, index) => (
          <ScrollReveal key={milestone.year} delay={index * 0.1}>
            <div className="relative pb-8 last:pb-0">
              {/* Dot */}
              <div className="absolute -left-8 top-1 w-[22px] h-[22px] rounded-full border-2 border-brand-gold bg-ivory flex items-center justify-center">
                <div className="w-[8px] h-[8px] rounded-full bg-brand-gold" />
              </div>

              {/* Content */}
              <p className="text-brand-gold text-xs font-sans font-semibold uppercase tracking-[0.2em] mb-1">
                {milestone.year}
              </p>
              <h3 className="luxury-heading text-lg font-normal text-brand-heading mb-1.5">
                {milestone.title}
              </h3>
              <p className="text-brand-body font-sans text-sm leading-relaxed">
                {milestone.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Desktop timeline — two-column with center line */}
      <div className="hidden sm:block relative">
        {/* Center vertical line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-px bg-brand-gold/25" />

        {milestones.map((milestone, index) => {
          const isLeft = index % 2 === 0;
          return (
            <ScrollReveal key={milestone.year} delay={index * 0.1}>
              <div className="relative flex items-start pb-10 last:pb-0">
                {/* Center dot */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1 w-[22px] h-[22px] rounded-full border-2 border-brand-gold bg-ivory flex items-center justify-center z-10">
                  <div className="w-[8px] h-[8px] rounded-full bg-brand-gold" />
                </div>

                {isLeft ? (
                  <>
                    {/* Left content */}
                    <div className="w-1/2 pr-10 text-right">
                      <p className="text-brand-gold text-sm font-sans font-semibold uppercase tracking-[0.2em] mb-1">
                        {milestone.year}
                      </p>
                      <h3 className="luxury-heading text-xl lg:text-2xl font-normal text-brand-heading mb-1.5">
                        {milestone.title}
                      </h3>
                      <p className="text-brand-body font-sans text-sm lg:text-base leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                    {/* Right spacer */}
                    <div className="w-1/2" />
                  </>
                ) : (
                  <>
                    {/* Left spacer */}
                    <div className="w-1/2" />
                    {/* Right content */}
                    <div className="w-1/2 pl-10">
                      <p className="text-brand-gold text-sm font-sans font-semibold uppercase tracking-[0.2em] mb-1">
                        {milestone.year}
                      </p>
                      <h3 className="luxury-heading text-xl lg:text-2xl font-normal text-brand-heading mb-1.5">
                        {milestone.title}
                      </h3>
                      <p className="text-brand-body font-sans text-sm lg:text-base leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
