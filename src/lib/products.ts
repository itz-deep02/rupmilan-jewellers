import productsData from "@/data/products.json";
import subcategoryData from "@/data/subcategories.json";
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
    const col = (p.collection || "").toLowerCase();
    // Match exact, plural (necklaces → necklace), or singular (necklace → necklaces)
    return type === slug || cat === slug || col === slug
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
  if (filters.subcategory) {
    filtered = filtered.filter(p => p.subcategory === filters.subcategory);
  }
  if (filters.collection) {
    filtered = filtered.filter(p => (p.collection || "").toLowerCase() === filters.collection!.toLowerCase());
  }
  if (filters.q) {
    const raw = filters.q.toLowerCase().trim().split(/\s+/).filter(Boolean);
    const terms = raw.map(correctTerm);
    filtered = filtered.filter(p => {
      const h = buildHaystack(p);
      return terms.every(term => h.includes(term));
    });
  }

  // Helper to parse carat number (e.g. "22K" → 22, "18K" → 18)
  const parseCarat = (c?: string) => parseInt(c || "0", 10) || 0;
  // Helper to parse weight number (e.g. "45.2g" → 45.2)
  const parseWeight = (w?: string) => parseFloat(w || "0") || 0;

  // Sort
  switch (sort) {
    case "newest": {
      const isNew = (p: ExtendedProduct) => p.badge === "New" ? 1 : 0;
      filtered.sort((a, b) => {
        const badgeDiff = isNew(b) - isNew(a);
        if (badgeDiff !== 0) return badgeDiff;
        const dateDiff = (b.dateAdded || "").localeCompare(a.dateAdded || "");
        if (dateDiff !== 0) return dateDiff;
        return (b.sortOrder ?? 0) - (a.sortOrder ?? 0);
      });
      break;
    }
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

  // Build subcategories grouped by jewelleryType, only for types present in products
  const activeTypes = [...new Set(allProducts.map(p => p.jewelleryType))];
  const subcategories: Record<string, string[]> = {};
  for (const type of activeTypes) {
    const subs = (subcategoryData as Record<string, { label: string; subcategories: string[] }>)[type];
    if (subs?.subcategories?.length > 0) {
      subcategories[type] = subs.subcategories;
    }
  }

  return { metalTypes, carats, occasions, jewelleryTypes, categories, subcategories };
}

// Levenshtein edit distance
function editDistance(a: string, b: string): number {
  const m = a.length, n = b.length;
  const dp: number[] = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= n; j++) {
      const tmp = dp[j];
      dp[j] = a[i - 1] === b[j - 1] ? prev : 1 + Math.min(prev, dp[j], dp[j - 1]);
      prev = tmp;
    }
  }
  return dp[n];
}

// Build a flat set of all unique tokens across products for fuzzy correction
let _tokenIndex: string[] | null = null;
function getTokenIndex(): string[] {
  if (_tokenIndex) return _tokenIndex;
  const tokens = new Set<string>();
  for (const p of products) {
    const words = [
      p.name, p.category, p.jewelleryType, p.subcategory || "",
      p.metalType, p.collection || "", p.description || "",
      ...(p.tags || []), ...(p.occasion || []),
    ].join(" ").toLowerCase().split(/\s+/);
    words.forEach(w => { if (w.length > 2) tokens.add(w); });
  }
  _tokenIndex = [...tokens];
  return _tokenIndex;
}

// If a term doesn't match exactly, find the closest token within edit distance threshold
function correctTerm(term: string): string {
  const tokens = getTokenIndex();
  // Already present — no correction needed
  if (tokens.some(t => t.includes(term))) return term;
  const maxDist = term.length <= 5 ? 1 : 2;
  let best = term, bestDist = Infinity;
  for (const token of tokens) {
    if (Math.abs(token.length - term.length) > maxDist) continue;
    const d = editDistance(term, token);
    if (d < bestDist && d <= maxDist) { bestDist = d; best = token; }
  }
  return best;
}

function buildHaystack(p: ExtendedProduct): string {
  return [
    p.name, p.category, p.jewelleryType, p.subcategory || "",
    p.metalType, p.collection || "", p.description || "", p.tagNumber,
    ...(p.tags || []), ...(p.occasion || []),
  ].join(" ").toLowerCase();
}

export function correctQuery(query: string): string {
  if (!query.trim()) return query;
  return query.toLowerCase().trim().split(/\s+/).filter(Boolean).map(correctTerm).join(" ");
}

export function searchProducts(query: string, limit = 6): ExtendedProduct[] {
  if (!query.trim()) return [];
  const raw = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const terms = raw.map(correctTerm);
  return products.filter(p => {
    const h = buildHaystack(p);
    return terms.every(term => h.includes(term));
  }).slice(0, limit);
}

export function generateSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
