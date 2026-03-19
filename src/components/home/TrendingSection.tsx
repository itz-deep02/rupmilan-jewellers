"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/layout/SectionHeader";
import HorizontalScroll from "@/components/ui/HorizontalScroll";
import ProductCard from "@/components/product/ProductCard";
import type { Product } from "@/types";

interface TrendingSectionProps {
  products: Product[];
}

export default function TrendingSection({ products }: TrendingSectionProps) {
  return (
    <ScrollReveal>
      <section className="mb-16 sm:mb-20">
        <SectionHeader
          eyebrow="What's Hot"
          title="Trending"
          accentWord="Now"
          subtitle="Jewellery pieces everyone's eyeing right now"
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
