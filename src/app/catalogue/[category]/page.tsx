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

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  return {
    title: `${cat?.name || "Category"} | Rupmilan Jewellers`,
    description: `Explore our ${cat?.name?.toLowerCase() || "jewellery"} collection. Handcrafted BIS Hallmarked designs.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) notFound();

  const products = getProductsByCategory(category);

  return (
    <>
      <Navbar />
      <DecorativeOrbs />
      <main className="min-h-screen pb-20 md:pb-0">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <SectionHeader
            eyebrow="Rupmilan Jewellers"
            title={cat.name}
            subtitle={`${products.length} exquisite designs to explore`}
          />
          <div className="mt-8">
            <CatalogueClient initialProducts={products} categoryName={cat.name} />
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileBottomNav />
    </>
  );
}
