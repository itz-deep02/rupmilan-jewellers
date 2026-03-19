import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import DecorativeOrbs from "@/components/layout/DecorativeOrbs";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionHeader from "@/components/layout/SectionHeader";
import CatalogueClient from "@/components/catalogue/CatalogueClient";
import { getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Catalogue | Rupmilan Jewellers",
  description: "Explore our complete collection of BIS Hallmarked gold, silver & diamond jewellery. 500+ designs across necklaces, earrings, rings, bangles & more.",
};

export default function CataloguePage() {
  const products = getAllProducts();

  return (
    <>
      <Navbar />
      <DecorativeOrbs />
      <main className="min-h-screen pb-20 md:pb-0">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <SectionHeader
            eyebrow="Rupmilan Jewellers"
            title="Our"
            accentWord="Collection"
            subtitle="Discover handcrafted gold, silver & diamond jewellery for every occasion"
          />
          <div className="mt-8">
            <CatalogueClient initialProducts={products} />
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileBottomNav />
    </>
  );
}
