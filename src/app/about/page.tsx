import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import DecorativeOrbs from "@/components/layout/DecorativeOrbs";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import WhatsAppButton from "@/components/WhatsAppButton";
import AboutHero from "@/components/about/AboutHero";
import StorySection from "@/components/about/StorySection";
import OfferingsSection from "@/components/about/OfferingsSection";
import CraftsmanshipSection from "@/components/about/CraftsmanshipSection";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import OurPromise from "@/components/about/OurPromise";

export const metadata: Metadata = {
  title: "About Us | Rupmilan Jewellers",
  description: "Established in 1988, Rupmilan Jewellers is a trusted name in gold, silver, and diamond jewellery. Founded by Late Shri Sharda Prasad Bitawan Sao.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <DecorativeOrbs />
      <main className="min-h-screen pb-20 md:pb-0">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <AboutHero />
          <StorySection />
          <OfferingsSection />
          <CraftsmanshipSection />
          <WhyChooseUs />
          <OurPromise />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileBottomNav />
    </>
  );
}
