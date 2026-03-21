import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import DecorativeOrbs from "@/components/layout/DecorativeOrbs";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionHeader from "@/components/layout/SectionHeader";
import CatalogueClient from "@/components/catalogue/CatalogueClient";
import { getProductsByCategory } from "@/lib/products";
import categories from "@/data/categories.json";

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
  const allSlugs = [...new Set([...categorySlugs, ...jewelleryTypes])];
  return allSlugs.map((slug) => ({ category: slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  const name = cat?.name || category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, " ");
  return {
    title: `${name} | Rupmilan Jewellers`,
    description: `Explore our ${name.toLowerCase()} collection. Handcrafted BIS Hallmarked designs.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  const products = getProductsByCategory(category);

  // Allow both categories.json slugs AND jewelleryType values
  if (!cat && products.length === 0) notFound();

  const displayName = cat?.name || category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, " ");

  return (
    <>
      <Navbar />
      <DecorativeOrbs />
      <main className="min-h-screen pb-20 md:pb-0">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <SectionHeader
            eyebrow="Rupmilan Jewellers"
            title={displayName}
            subtitle={`${products.length} exquisite design${products.length !== 1 ? "s" : ""} to explore`}
          />
          <div className="mt-8">
            <CatalogueClient initialProducts={products} categoryName={displayName} />
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileBottomNav />
    </>
  );
}
