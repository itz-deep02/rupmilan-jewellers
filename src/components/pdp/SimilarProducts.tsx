import type { Product } from "@/types";
import SectionHeader from "@/components/layout/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import HorizontalScroll from "@/components/ui/HorizontalScroll";
import ProductCard from "@/components/product/ProductCard";

interface SimilarProductsProps {
  products: Product[];
}

export default function SimilarProducts({ products }: SimilarProductsProps) {
  if (products.length === 0) return null;

  return (
    <ScrollReveal className="mt-16 sm:mt-20">
      <SectionHeader
        title="You May Also"
        accentWord="Like"
        subtitle="Explore similar pieces from our collection"
      />
      <HorizontalScroll>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </HorizontalScroll>
    </ScrollReveal>
  );
}
