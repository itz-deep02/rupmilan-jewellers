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
  const slug = categorySlug.toLowerCase();
  return products.filter(p => {
    const type = p.jewelleryType.toLowerCase();
    const cat = p.category.toLowerCase();
    // Match exact, plural (necklaces → necklace), or singular (necklace → necklaces)
    return type === slug || cat === slug
      || type + "s" === slug || slug + "s" === type
      || cat + "s" === slug || slug + "s" === cat;
  });
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

  // Helper to parse carat number (e.g. "22K" → 22, "18K" → 18)
  const parseCarat = (c?: string) => parseInt(c || "0", 10) || 0;
  // Helper to parse weight number (e.g. "45.2g" → 45.2)
  const parseWeight = (w?: string) => parseFloat(w || "0") || 0;

  // Sort
  switch (sort) {
    case "newest":
      filtered.sort((a, b) => (b.dateAdded || "").localeCompare(a.dateAdded || ""));
      break;
    case "popular": {
      const badgePriority: Record<string, number> = { Bestseller: 3, Trending: 2, New: 1 };
      filtered.sort((a, b) => (badgePriority[b.badge || ""] || 0) - (badgePriority[a.badge || ""] || 0));
      break;
    }
    case "name-asc":
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      filtered.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "carat-high":
      filtered.sort((a, b) => parseCarat(b.carat) - parseCarat(a.carat));
      break;
    case "carat-low":
      filtered.sort((a, b) => parseCarat(a.carat) - parseCarat(b.carat));
      break;
    case "weight-high":
      filtered.sort((a, b) => parseWeight(b.weight) - parseWeight(a.weight));
      break;
    case "weight-low":
      filtered.sort((a, b) => parseWeight(a.weight) - parseWeight(b.weight));
      break;
  }

  return filtered;
}

export function getUniqueFilterValues(allProducts: ExtendedProduct[]) {
  const metalTypes = [...new Set(allProducts.map(p => p.metalType))];
  // Standard carat options — always show these, plus any from data
  const standardCarats = ["18K", "20K", "22K", "23K", "24K"];
  const dataCarats = [...new Set(allProducts.filter(p => p.carat).map(p => p.carat!))];
  const carats = standardCarats.filter(c => (dataCarats as string[]).includes(c) || c === "23K");
  const occasions = [...new Set(allProducts.flatMap(p => p.occasion || []))];
  const jewelleryTypes = [...new Set(allProducts.map(p => p.jewelleryType))];
  const categories = [...new Set(allProducts.map(p => p.category))];

  return { metalTypes, carats, occasions, jewelleryTypes, categories };
}

export function generateSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
