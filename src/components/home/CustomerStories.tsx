"use client";

import { Star } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/layout/SectionHeader";
import type { Testimonial } from "@/types";

interface CustomerStoriesProps {
  testimonials: Testimonial[];
}

export default function CustomerStories({ testimonials }: CustomerStoriesProps) {
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

        {/* Google rating badge */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <a
            href="https://maps.app.goo.gl/WKomde96qZcqsgDJ8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-[rgba(160,115,42,0.25)] rounded-full px-5 py-2.5 shadow-sm hover:shadow-md transition-shadow"
          >
            <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />
            <span className="text-brand-heading font-sans font-semibold text-sm">4.7</span>
            <span className="text-brand-muted font-sans text-sm">· 416 Google reviews</span>
          </a>
          <a
            href="https://g.page/r/CYiqvd-wqmi1EAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-gold hover:bg-gold-600 text-white font-sans font-medium text-sm px-5 py-2.5 rounded-full transition-colors"
          >
            <Star className="w-4 h-4" />
            Review us on Google
          </a>
        </div>

        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 animate-scroll-x hover:[animation-play-state:paused] w-max items-stretch">
            {doubled.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[280px] sm:w-[320px] glass-card p-5 flex flex-col"
              >
                <div className="flex items-center gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < testimonial.rating
                          ? "fill-brand-gold text-brand-gold"
                          : "text-brand-muted/30"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-brand-body text-sm font-sans leading-relaxed mb-4 line-clamp-3 flex-1">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 mt-auto pt-3 border-t border-[rgba(160,115,42,0.15)]">
                  <div className="w-8 h-8 rounded-full bg-ivory-100 flex items-center justify-center text-xs font-sans font-bold text-brand-gold flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-brand-heading text-sm font-sans font-medium">
                      {testimonial.name}
                    </p>
                    <p className="text-brand-muted text-xs font-sans">
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
