"use client";

import Image from "next/image";
import { Gem } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/layout/SectionHeader";
import HorizontalScroll from "@/components/ui/HorizontalScroll";

const occasions = [
  { id: "wedding", title: "Wedding", description: "Make your big day unforgettable", ctaText: "Explore Bridal", image: "/images/world/wedding.jpg" },
  { id: "anniversary", title: "Anniversary", description: "Celebrate years of love", ctaText: "Shop Gifts", image: "/images/world/anniversary.jpg" },
  { id: "festival", title: "Festive Season", description: "Shine at every celebration", ctaText: "Festive Picks", image: "/images/world/festive-season.jpg" },
  { id: "daily", title: "Daily Wear", description: "Everyday elegance, effortlessly", ctaText: "Browse Daily Wear", image: "/images/world/daily-wear.jpg" },
  { id: "gifting", title: "Gifting", description: "Perfect presents for loved ones", ctaText: "Find a Gift", image: "/images/world/gifting.jpg" },
];

export default function RupmilanWorldSection() {
  return (
    <ScrollReveal>
      <section className="mb-16 sm:mb-20">
        <SectionHeader
          eyebrow="For Every Moment"
          title="Rupmilan"
          accentWord="World"
          subtitle="A companion for every occasion"
        />

        <HorizontalScroll>
          {occasions.map((occasion) => (
            <div
              key={occasion.id}
              className="snap-start flex-shrink-0 w-[240px] sm:w-[280px] glass-card-hover overflow-hidden group cursor-pointer"
            >
              <div className="relative aspect-[4/5] bg-ivory-300 flex items-center justify-center overflow-hidden">
                {occasion.image ? (
                  <Image
                    src={occasion.image}
                    alt={occasion.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 240px, 280px"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center">
                    <Gem className="w-7 h-7 text-brand-gold/40" />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-brand-heading/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="luxury-heading text-xl font-normal text-white mb-1">
                    {occasion.title}
                  </h3>
                  <p className="text-white/70 text-sm font-sans mb-3">
                    {occasion.description}
                  </p>
                  <span className="inline-block text-white text-xs font-sans font-medium border border-white/40 px-3 py-1.5 rounded-full group-hover:bg-white/20 transition-colors duration-200">
                    {occasion.ctaText}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </HorizontalScroll>
      </section>
    </ScrollReveal>
  );
}
