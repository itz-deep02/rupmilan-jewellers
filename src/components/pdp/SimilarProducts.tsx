import type { ExtendedProduct } from "@/types";
import SectionHeader from "@/components/layout/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import HorizontalScroll from "@/components/ui/HorizontalScroll";
import ProductCard from "@/components/product/ProductCard";
import ViewMoreCard from "@/components/product/ViewMoreCard";

interface SimilarProductsProps {
  products: ExtendedProduct[];
  categorySlug?: string;
}

export default function SimilarProducts({ products, categorySlug }: SimilarProductsProps) {
  if (products.length === 0) return null;

  const categoryHref = categorySlug
    ? `/catalogue/${categorySlug}`
    : "/catalogue";

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
        <ViewMoreCard href={categoryHref} label="View More" count={products.length} />
      </HorizontalScroll>
    </ScrollReveal>
  );
}
