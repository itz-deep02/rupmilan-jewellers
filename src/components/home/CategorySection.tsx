"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/layout/SectionHeader";
import HorizontalScroll from "@/components/ui/HorizontalScroll";
import CategoryCard from "@/components/product/CategoryCard";
import type { Category } from "@/types";

interface CategorySectionProps {
  categories: Category[];
}

export default function CategorySection({ categories }: CategorySectionProps) {
  return (
    <ScrollReveal>
      <section id="categories" className="mb-16 sm:mb-20">
        <SectionHeader
          title="Find Your Perfect"
          accentWord="Match"
          subtitle="Shop by Categories"
        />

        <HorizontalScroll>
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </HorizontalScroll>
      </section>
    </ScrollReveal>
  );
}
