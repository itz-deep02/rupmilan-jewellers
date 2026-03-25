import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/layout/SectionHeader";

const galleryImages = [
  { src: "/images/about/showroom-1.jpg", alt: "Rupmilan Jewellers Showroom Interior" },
  { src: "/images/about/showroom-2.jpg", alt: "Jewellery Display Counters" },
  { src: "/images/about/showroom-3.jpg", alt: "Customer Experience at Rupmilan" },
];

export default function ShowroomGallery() {
  return (
    <div className="mb-12 sm:mb-16">
      <ScrollReveal>
        <SectionHeader
          eyebrow="Visit Us"
          title="Our"
          accentWord="Showroom"
          subtitle="Step into a world of timeless elegance at our Champa showroom"
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {galleryImages.map((img, index) => (
          <ScrollReveal key={img.src} delay={index * 0.1}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
