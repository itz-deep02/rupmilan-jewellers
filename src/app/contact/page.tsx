import type { Metadata } from "next";
import { Shield, Clock, Star, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import DecorativeOrbs from "@/components/layout/DecorativeOrbs";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import TagBadge from "@/components/TagBadge";
import InfoSection from "@/components/InfoSection";
import MapSection from "@/components/MapSection";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Contact Us | Rupmilan Jewellers",
  description:
    "Visit Rupmilan Jewellers in Champa, Chhattisgarh. BIS Hallmarked jewellery. Open 7 days a week, 9 AM – 9 PM.",
};

const badges = [
  {
    icon: Shield,
    title: "BIS Hallmarked",
    subtitle: "Certified Purity",
    animationDelay: "0ms",
  },
  {
    icon: Clock,
    title: "Since 1988",
    subtitle: "35+ Years Trust",
    counter: { to: 35, suffix: "+ yrs" },
    animationDelay: "100ms",
  },
  {
    icon: Star,
    title: "100% Purity",
    subtitle: "Guaranteed Quality",
    counter: { to: 100, suffix: "%" },
    animationDelay: "200ms",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    subtitle: "Quick Response",
    animationDelay: "300ms",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <DecorativeOrbs />

      <main className="min-h-screen pb-20 md:pb-0">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

          {/* ── Header ─────────────────────────────────── */}
          <div className="text-center mb-12 sm:mb-16 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
            <p className="text-gold-400 text-xs sm:text-sm font-sans font-medium tracking-[0.3em] uppercase mb-3">
              Rupmilan Jewellers
            </p>
            <h1 className="luxury-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-4 leading-tight">
              Contact{" "}
              <span className="gold-gradient-text">Us</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg font-sans max-w-xl mx-auto leading-relaxed">
              We&apos;d love to hear from you. Visit our showroom or get in
              touch today.
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/60" />
              <div className="w-2 h-2 rotate-45 bg-gold-400/60" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/60" />
            </div>
          </div>

          {/* ── Feature Badges ──────────────────────────── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 sm:mb-16">
            {badges.map((badge) => (
              <TagBadge
                key={badge.title}
                icon={badge.icon}
                title={badge.title}
                subtitle={badge.subtitle}
                counter={badge.counter}
                animationDelay={badge.animationDelay}
              />
            ))}
          </div>

          {/* ── Info + Map Grid ─────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <InfoSection />
            <MapSection />
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <MobileBottomNav />
    </>
  );
}
