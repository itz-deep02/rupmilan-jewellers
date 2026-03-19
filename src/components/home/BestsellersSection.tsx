"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/layout/SectionHeader";
import HorizontalScroll from "@/components/ui/HorizontalScroll";
import ProductCard from "@/components/product/ProductCard";
import type { Product } from "@/types";

interface BestsellersSectionProps {
  products: Product[];
}

export default function BestsellersSection({ products }: BestsellersSectionProps) {
  return (
    <ScrollReveal>
      <section className="mb-16 sm:mb-20">
        <SectionHeader
          eyebrow="Most Loved"
          title="Our"
          accentWord="Bestsellers"
          subtitle="Timeless pieces loved by thousands of families"
        />

        <HorizontalScroll>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </HorizontalScroll>
      </section>
    </ScrollReveal>
  );
}
