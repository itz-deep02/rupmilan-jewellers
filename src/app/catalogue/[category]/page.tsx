import { redirect } from "next/navigation";
import categories from "@/data/categories.json";
import collections from "@/data/collections.json";

// Allow routes not returned by generateStaticParams to be rendered on demand
export const dynamicParams = true;

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const { getAllProducts } = await import("@/lib/products");
  const products = getAllProducts();
  const jewelleryTypes = [...new Set(products.map((p) => p.jewelleryType))];
  const categorySlugs = categories.map((c) => c.slug);
  const collectionSlugs = collections.map((c) => c.slug);
  const allSlugs = [...new Set([...categorySlugs, ...collectionSlugs, ...jewelleryTypes])];
  return allSlugs.map((slug) => ({ category: slug }));
}

export default async function CategoryRedirect({ params }: CategoryPageProps) {
  const { category } = await params;

  // Collection slug → ?collection=
  const col = collections.find((c) => c.slug === category);
  if (col) redirect(`/catalogue?collection=${category}`);

  // Category slug → ?type= (uses explicit jewelleryType mapping)
  const cat = categories.find((c) => c.slug === category);
  if (cat) redirect(`/catalogue?type=${cat.jewelleryType}`);

  // Fallback: treat as jewelleryType directly
  redirect(`/catalogue?type=${category}`);
}
