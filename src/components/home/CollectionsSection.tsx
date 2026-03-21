"use client";

import { Gem } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/layout/SectionHeader";
import HorizontalScroll from "@/components/ui/HorizontalScroll";
import type { Collection } from "@/types";

interface CollectionsSectionProps {
  collections: Collection[];
}

export default function CollectionsSection({ collections }: CollectionsSectionProps) {
  return (
    <ScrollReveal>
      <section id="collections" className="mb-16 sm:mb-20">
        <SectionHeader
          eyebrow="Rupmilan Jewellers"
          title="Rupmilan"
          accentWord="Collections"
          subtitle="Explore our newly launched collection"
        />

        <HorizontalScroll>
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="snap-start flex-shrink-0 w-[280px] sm:w-[320px] glass-card-hover overflow-hidden group cursor-pointer"
            >
              <div className="relative aspect-[4/3] bg-ivory-300 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <Gem className="w-8 h-8 text-brand-gold/40" />
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] font-sans font-medium text-brand-muted bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-full">
                    {collection.productCount} Designs
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="luxury-heading text-lg font-normal text-brand-heading group-hover:text-brand-gold transition-colors duration-200">
                  {collection.name}
                </h3>
                <p className="text-brand-muted text-sm font-sans mt-1 leading-relaxed">
                  {collection.description}
                </p>
              </div>
            </div>
          ))}
        </HorizontalScroll>
      </section>
    </ScrollReveal>
  );
}
