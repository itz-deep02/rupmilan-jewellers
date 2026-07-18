import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import DecorativeOrbs from "@/components/layout/DecorativeOrbs";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import WhatsAppButton from "@/components/WhatsAppButton";
import WelcomeHero from "@/components/home/WelcomeHero";
import HeroCarousel from "@/components/home/HeroCarousel";
import StatsSection from "@/components/home/StatsSection";
import CollectionsSection from "@/components/home/CollectionsSection";
import CategorySection from "@/components/home/CategorySection";
import BestsellersSection from "@/components/home/BestsellersSection";
import TrendingSection from "@/components/home/TrendingSection";
import NewLaunchesSection from "@/components/home/NewLaunchesSection";
import GoldProductsSection from "@/components/home/GoldProductsSection";
import SilverProductsSection from "@/components/home/SilverProductsSection";
import RupmilanWorldSection from "@/components/home/RupmilanWorldSection";
import CustomerStories from "@/components/home/CustomerStories";

import heroSlides from "@/data/hero-slides.json";
import stats from "@/data/stats.json";
import collections from "@/data/collections.json";
import categories from "@/data/categories.json";
import products from "@/data/products.json";
import testimonials from "@/data/testimonials.json";

import type { ExtendedProduct } from "@/types";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "Rupmilan Jewellers | Gold, Silver & Diamond Jewellery",
  description:
    "Shop BIS Hallmarked gold, silver & diamond jewellery at Rupmilan Jewellers (Sharda Prasad Bitawan Sao), Sarafa Bazar, Champa. 38+ years of trust, 500+ designs, 100% purity guaranteed.",
  openGraph: {
    title: "Rupmilan Jewellers | Premium Hallmarked Jewellery",
    description: "Trusted since 1988. Explore bridal, daily wear, festive & heritage jewellery collections.",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rupmilan Jewellers - Exquisite Craftsmanship Since 1988",
      },
    ],
  },
};

export default function Home() {
  const typedProducts = products as ExtendedProduct[];
  const bestsellers = typedProducts.filter((p) => p.badge === "Bestseller");
  const trending = typedProducts.filter((p) => p.badge === "Trending");
  const newLaunches = typedProducts.filter((p) => p.badge === "New");
  const goldProducts = typedProducts.filter((p) => p.metalType === "gold");
  const silverProducts = typedProducts.filter((p) => p.metalType === "silver");

  return (
    <>
      <Navbar />
      <DecorativeOrbs />

      <main className="min-h-screen pb-20 md:pb-0">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          <WelcomeHero />
          <HeroCarousel slides={heroSlides} />
          <StatsSection stats={stats} />
          <CollectionsSection collections={collections} />
          <CategorySection categories={categories} />
          {bestsellers.length > 0 && <BestsellersSection products={bestsellers} />}
          {trending.length > 0 && <TrendingSection products={trending} />}
          {newLaunches.length > 0 && <NewLaunchesSection products={newLaunches} />}
          {goldProducts.length > 0 && <GoldProductsSection products={goldProducts} />}
          {silverProducts.length > 0 && <SilverProductsSection products={silverProducts} />}
          <RupmilanWorldSection />
          <CustomerStories testimonials={testimonials} />
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <MobileBottomNav />
    </>
  );
}
