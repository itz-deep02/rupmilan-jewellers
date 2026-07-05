"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/layout/SectionHeader";
import HorizontalScroll from "@/components/ui/HorizontalScroll";
import ProductCard from "@/components/product/ProductCard";
import ViewMoreCard from "@/components/product/ViewMoreCard";
import type { ExtendedProduct } from "@/types";

interface SilverProductsSectionProps {
  products: ExtendedProduct[];
}

export default function SilverProductsSection({ products }: SilverProductsSectionProps) {
  return (
    <ScrollReveal>
      <section className="mb-16 sm:mb-20">
        <SectionHeader
          eyebrow="Explore our exquisite silver collection"
          title="Silver"
          accentWord="Products"
          subtitle="Where purity meets timeless beauty. From ornaments to idols, each piece reflects elegance and grace for every occasion"
        />

        <HorizontalScroll>
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          <ViewMoreCard href="/catalogue?metal=silver" label="View All Silver" count={products.length} />
        </HorizontalScroll>
      </section>
    </ScrollReveal>
  );
}
