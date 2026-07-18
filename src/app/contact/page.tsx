import type { Metadata } from "next";
import { Shield, Clock, Star, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import DecorativeOrbs from "@/components/layout/DecorativeOrbs";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import TagBadge from "@/components/TagBadge";
import InfoSection from "@/components/InfoSection";
import MapSection from "@/components/MapSection";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
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
    subtitle: "38+ Years Trust",
    counter: { to: 38, suffix: "+ yrs" },
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
    customIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 fill-brand-gold">
        <path d="M16.003 3C9.376 3 4 8.373 4 15.003c0 2.168.578 4.264 1.676 6.1L4 29l8.09-1.652A12.93 12.93 0 0 0 16.003 28c6.627 0 12.003-5.373 12.003-12.003C28.006 9.371 22.63 3 16.003 3zm6.647 17.08c-.277.78-1.596 1.49-2.22 1.566-.567.07-1.282.1-2.07-.13-.476-.14-1.088-.328-1.87-.643-3.29-1.41-5.44-4.71-5.603-4.93-.163-.22-1.327-1.765-1.327-3.365 0-1.6.839-2.387 1.137-2.71.277-.3.604-.375.806-.375.2 0 .4.002.576.01.185.01.432-.07.676.516.252.603.857 2.087.932 2.24.075.153.125.33.025.53-.1.2-.15.323-.298.497-.148.174-.311.39-.444.523-.148.148-.301.31-.13.608.172.3.765 1.262 1.64 2.044 1.126 1.003 2.075 1.313 2.372 1.46.298.148.472.124.647-.075.174-.198.748-.873.948-1.172.198-.3.397-.25.67-.15.272.1 1.73.816 2.027.965.298.148.496.222.57.347.075.123.075.717-.202 1.497z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <DecorativeOrbs />

      <main className="min-h-screen pb-20 md:pb-0">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
            <p className="text-brand-gold-light text-xs sm:text-sm font-sans font-medium tracking-[0.3em] uppercase mb-3">
              Rupmilan Jewellers
            </p>
            <h1 className="luxury-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-brand-heading mb-4 leading-tight">
              Contact{" "}
              <span className="text-brand-gold">Us</span>
            </h1>
            <p className="text-brand-body text-base sm:text-lg font-sans max-w-xl mx-auto leading-relaxed">
              We&apos;d love to hear from you. Visit our showroom or get in
              touch today.
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-brand-gold/40" />
              <div className="w-2 h-2 rotate-45 bg-brand-gold/50" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-brand-gold/40" />
            </div>
          </div>

          {/* Feature Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 sm:mb-16">
            {badges.map((badge) => (
              <TagBadge
                key={badge.title}
                icon={badge.icon}
                title={badge.title}
                subtitle={badge.subtitle}
                counter={badge.counter}
                animationDelay={badge.animationDelay}
                customIcon={badge.customIcon}
              />
            ))}
          </div>

          {/* Info + Map Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <InfoSection />
            <MapSection />
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppWidget />
      <MobileBottomNav />
    </>
  );
}
