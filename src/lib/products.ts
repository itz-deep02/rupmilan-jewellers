import productsData from "@/data/products.json";
import type { ExtendedProduct, FilterState, SortOption } from "@/types";

const products = productsData as ExtendedProduct[];

export function getAllProducts(): ExtendedProduct[] {
  return products;
}

export function getProductBySlugAndTag(slug: string, tag: string): ExtendedProduct | undefined {
  return products.find(p => p.slug === slug && p.tagNumber === tag);
}

export function getProductsByCategory(categorySlug: string): ExtendedProduct[] {
  return products.filter(p => p.jewelleryType === categorySlug || p.category.toLowerCase() === categorySlug);
}

export function getSimilarProducts(product: ExtendedProduct, limit: number = 8): ExtendedProduct[] {
  return products
    .filter(p => p.id !== product.id && (p.jewelleryType === product.jewelleryType || p.metalType === product.metalType))
    .slice(0, limit);
}

export function getFilteredProducts(allProducts: ExtendedProduct[], filters: FilterState, sort: SortOption): ExtendedProduct[] {
  let filtered = [...allProducts];

  if (filters.metalType) {
    filtered = filtered.filter(p => p.metalType === filters.metalType);
  }
  if (filters.carat) {
    filtered = filtered.filter(p => p.carat === filters.carat);
  }
  if (filters.occasion) {
    filtered = filtered.filter(p => p.occasion?.includes(filters.occasion!));
  }
  if (filters.jewelleryType) {
    filtered = filtered.filter(p => p.jewelleryType === filters.jewelleryType);
  }
  if (filters.category) {
    filtered = filtered.filter(p => p.category.toLowerCase() === filters.category!.toLowerCase());
  }

  // Sort
  switch (sort) {
    case "newest":
      filtered.sort((a, b) => (b.dateAdded || "").localeCompare(a.dateAdded || ""));
      break;
    case "popular":
      const badgePriority: Record<string, number> = { Bestseller: 3, Trending: 2, New: 1 };
      filtered.sort((a, b) => (badgePriority[b.badge || ""] || 0) - (badgePriority[a.badge || ""] || 0));
      break;
    case "name-asc":
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      filtered.sort((a, b) => b.name.localeCompare(a.name));
      break;
  }

  return filtered;
}

export function getUniqueFilterValues(allProducts: ExtendedProduct[]) {
  const metalTypes = [...new Set(allProducts.map(p => p.metalType))];
  const carats = [...new Set(allProducts.filter(p => p.carat).map(p => p.carat!))];
  const occasions = [...new Set(allProducts.flatMap(p => p.occasion || []))];
  const jewelleryTypes = [...new Set(allProducts.map(p => p.jewelleryType))];
  const categories = [...new Set(allProducts.map(p => p.category))];

  return { metalTypes, carats, occasions, jewelleryTypes, categories };
}

export function generateSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
