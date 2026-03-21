"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { Gem } from "lucide-react";
import type { HeroSlide } from "@/types";

interface HeroCarouselProps {
  slides: HeroSlide[];
}

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
    Fade(),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="relative w-full overflow-hidden rounded-2xl mb-12 sm:mb-16 border border-[rgba(160,115,42,0.20)]">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative">
              <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-ivory-300 flex items-center">
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-gold-300/30 blur-3xl" />
                  <div className="absolute bottom-1/4 left-1/4 w-24 h-24 sm:w-36 sm:h-36 rounded-full bg-gold-200/20 blur-2xl" />
                </div>

                {/* Gem icon watermark */}
                <div className="absolute right-6 sm:right-16 top-1/2 -translate-y-1/2 opacity-10">
                  <Gem className="w-24 h-24 sm:w-40 sm:h-40 text-brand-gold" />
                </div>

                {/* Text content */}
                <div className="relative z-10 px-6 sm:px-12 lg:px-16 py-8 sm:py-12 max-w-2xl">
                  <h2 className="luxury-heading text-2xl sm:text-4xl lg:text-5xl font-normal text-brand-heading mb-3 sm:mb-4 leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-brand-body text-sm sm:text-base lg:text-lg font-sans leading-relaxed mb-5 sm:mb-7 max-w-lg">
                    {slide.subtitle}
                  </p>
                  <a
                    href={slide.ctaLink}
                    className="inline-block bg-brand-gold text-white font-sans font-medium text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-gold-600 transition-all duration-300 hover:shadow-lg active:scale-95"
                  >
                    {slide.ctaText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => scrollTo(index)}
            className={`rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "w-6 h-2 bg-brand-gold"
                : "w-2 h-2 bg-brand-gold/30 hover:bg-brand-gold/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
