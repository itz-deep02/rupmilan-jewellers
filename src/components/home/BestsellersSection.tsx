"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/layout/SectionHeader";
import HorizontalScroll from "@/components/ui/HorizontalScroll";
import ProductCard from "@/components/product/ProductCard";
import ViewMoreCard from "@/components/product/ViewMoreCard";
import type { ExtendedProduct } from "@/types";

interface BestsellersSectionProps {
  products: ExtendedProduct[];
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
          <ViewMoreCard href="/catalogue?sort=popular" label="View All Bestsellers" count={products.length} />
        </HorizontalScroll>
      </section>
    </ScrollReveal>
  );
}
