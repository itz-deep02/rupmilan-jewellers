"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/layout/SectionHeader";
import HorizontalScroll from "@/components/ui/HorizontalScroll";
import ProductCard from "@/components/product/ProductCard";
import ViewMoreCard from "@/components/product/ViewMoreCard";
import type { ExtendedProduct } from "@/types";

interface GoldProductsSectionProps {
  products: ExtendedProduct[];
}

export default function GoldProductsSection({ products }: GoldProductsSectionProps) {
  return (
    <ScrollReveal>
      <section className="mb-16 sm:mb-20">
        <SectionHeader
          eyebrow="Discover our most loved pieces"
          title="Gold"
          accentWord="Products"
          subtitle="A perfect blend of tradition and style. Each design is selected to add timeless elegance to your jewellery collection"
        />

        <HorizontalScroll>
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          <ViewMoreCard href="/catalogue?metal=gold" label="View All Gold" count={products.length} />
        </HorizontalScroll>
      </section>
    </ScrollReveal>
  );
}
