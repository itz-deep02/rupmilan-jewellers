"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/layout/SectionHeader";
import HorizontalScroll from "@/components/ui/HorizontalScroll";
import ProductCard from "@/components/product/ProductCard";
import ViewMoreCard from "@/components/product/ViewMoreCard";
import type { ExtendedProduct } from "@/types";

interface NewLaunchesSectionProps {
  products: ExtendedProduct[];
}

export default function NewLaunchesSection({ products }: NewLaunchesSectionProps) {
  return (
    <ScrollReveal>
      <section className="mb-16 sm:mb-20">
        <SectionHeader
          eyebrow="Just Arrived"
          title="New"
          accentWord="Launches"
          subtitle="Freshly crafted designs to add sparkle to your collection"
        />

        <HorizontalScroll>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          <ViewMoreCard href="/catalogue?sort=newest" label="View All New Arrivals" count={products.length} />
        </HorizontalScroll>
      </section>
    </ScrollReveal>
  );
}
