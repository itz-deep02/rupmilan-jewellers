"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/layout/SectionHeader";

const galleryImages = [
  { src: "/images/about/showroom-1.jpg", alt: "Rupmilan Jewellers Showroom Interior" },
  { src: "/images/about/showroom-2.jpg", alt: "Jewellery Display Counters" },
  { src: "/images/about/showroom-3.jpg", alt: "Customer Experience at Rupmilan" },
];

export default function ShowroomGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  return (
    <div className="mb-12 sm:mb-16">
      <ScrollReveal>
        <SectionHeader
          eyebrow="Visit Us"
          title="Our"
          accentWord="Showroom"
          subtitle="Step into a world of timeless elegance at our Champa showroom"
        />
      </ScrollReveal>

      <ScrollReveal>
        <div className="relative group">
          {/* Carousel viewport */}
          <div ref={emblaRef} className="overflow-hidden rounded-2xl">
            <div className="flex">
              {galleryImages.map((img) => (
                <div key={img.src} className="flex-[0_0_100%] min-w-0">
                  <div className="relative aspect-[16/9] sm:aspect-[16/8]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 80vw"
                    />
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/80 backdrop-blur-sm border border-[rgba(160,115,42,0.20)] flex items-center justify-center text-brand-heading hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100 shadow-sm"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/80 backdrop-blur-sm border border-[rgba(160,115,42,0.20)] flex items-center justify-center text-brand-heading hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100 shadow-sm"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {galleryImages.map((img, index) => (
              <button
                key={img.src}
                onClick={() => scrollTo(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "w-6 h-2 bg-white"
                    : "w-2 h-2 bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
