"use client";

import { Star } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/layout/SectionHeader";
import type { Testimonial } from "@/types";

interface CustomerStoriesProps {
  testimonials: Testimonial[];
}

export default function CustomerStories({ testimonials }: CustomerStoriesProps) {
  // Duplicate for seamless loop
  const doubled = [...testimonials, ...testimonials];

  return (
    <ScrollReveal>
      <section className="mb-16 sm:mb-20">
        <SectionHeader
          eyebrow="Trusted by Thousands"
          title="Customer"
          accentWord="Stories"
          subtitle="Hear what our valued customers have to say"
        />

        {/* Marquee container */}
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 animate-scroll-x hover:[animation-play-state:paused] w-max items-stretch">
            {doubled.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[280px] sm:w-[320px] glass-card p-5 flex flex-col"
              >
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < testimonial.rating
                          ? "fill-gold-400 text-gold-400"
                          : "text-white/20"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote - fixed height area so author stays aligned */}
                <p className="text-white/70 text-sm font-sans leading-relaxed mb-4 line-clamp-3 flex-1">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author - always pinned to bottom */}
                <div className="flex items-center gap-3 mt-auto pt-3 border-t border-white/10">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400/30 to-gold-600/20 flex items-center justify-center text-xs font-sans font-bold text-gold-300 flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white text-sm font-sans font-medium">
                      {testimonial.name}
                    </p>
                    <p className="text-white/40 text-xs font-sans">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
