import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(160,115,42,0.20)] mt-8 bg-ivory-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                <Image src="/icon.png" alt="Rupmilan Jewellers Logo" width={64} height={64} className="w-full h-full object-cover" unoptimized />
              </div>
              <span className="brand-name text-lg font-semibold text-brand-gold">
                Rupmilan Jewellers
              </span>
            </div>
            <p className="text-brand-body text-sm font-sans leading-relaxed max-w-xs">
              Crafting timeless jewellery with 100% purity and BIS Hallmark certification since 1988.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.instagram.com/rupmilanjewellers/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rupmilan Jewellers on Instagram"
                className="w-9 h-9 rounded-full bg-ivory-100 border border-[rgba(160,115,42,0.25)] flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-white transition-colors duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/people/Rupmilan-Jewellers/61580702806806/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rupmilan Jewellers on Facebook"
                className="w-9 h-9 rounded-full bg-ivory-100 border border-[rgba(160,115,42,0.25)] flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-white transition-colors duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://in.pinterest.com/rupmilanjewellers/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rupmilan Jewellers on Pinterest"
                className="w-9 h-9 rounded-full bg-ivory-100 border border-[rgba(160,115,42,0.25)] flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-white transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.853 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 0 1 .069.288c-.076.315-.245.995-.278 1.134-.043.183-.145.222-.334.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.472 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.15l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://www.whatsapp.com/channel/0029VbCNrcJHbFVA26TE5W1e"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join our WhatsApp Channel"
                title="Join our WhatsApp Channel"
                className="w-9 h-9 rounded-full bg-ivory-100 border border-[rgba(160,115,42,0.25)] flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-white transition-colors duration-200"
              >
                <svg viewBox="0 0 32 32" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M16.003 3C9.376 3 4 8.373 4 15.003c0 2.168.578 4.264 1.676 6.1L4 29l8.09-1.652A12.93 12.93 0 0 0 16.003 28c6.627 0 12.003-5.373 12.003-12.003C28.006 9.371 22.63 3 16.003 3zm6.647 17.08c-.277.78-1.596 1.49-2.22 1.566-.567.07-1.282.1-2.07-.13-.476-.14-1.088-.328-1.87-.643-3.29-1.41-5.44-4.71-5.603-4.93-.163-.22-1.327-1.765-1.327-3.365 0-1.6.839-2.387 1.137-2.71.277-.3.604-.375.806-.375.2 0 .4.002.576.01.185.01.432-.07.676.516.252.603.857 2.087.932 2.24.075.153.125.33.025.53-.1.2-.15.323-.298.497-.148.174-.311.39-.444.523-.148.148-.301.31-.13.608.172.3.765 1.262 1.64 2.044 1.126 1.003 2.075 1.313 2.372 1.46.298.148.472.124.647-.075.174-.198.748-.873.948-1.172.198-.3.397-.25.67-.15.272.1 1.73.816 2.027.965.298.148.496.222.57.347.075.123.075.717-.202 1.497z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="luxury-heading text-sm font-semibold text-brand-gold uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="text-brand-body text-sm font-sans hover:text-brand-gold transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="luxury-heading text-sm font-semibold text-brand-gold uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/WKomde96qZcqsgDJ8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-body text-sm font-sans leading-relaxed hover:text-brand-gold transition-colors"
                >
                  Near Samleshwari Mandir, Sarafa Bazar, Champa, CG 495671
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919826540190" className="text-brand-body text-sm font-sans hover:text-brand-gold transition-colors">
                    +91 98265 40190
                  </a>
                  <a href="tel:+919926514690" className="text-brand-body text-sm font-sans hover:text-brand-gold transition-colors">
                    +91 99265 14690
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-4 h-4 fill-brand-gold flex-shrink-0">
                  <path d="M16.003 3C9.376 3 4 8.373 4 15.003c0 2.168.578 4.264 1.676 6.1L4 29l8.09-1.652A12.93 12.93 0 0 0 16.003 28c6.627 0 12.003-5.373 12.003-12.003C28.006 9.371 22.63 3 16.003 3zm6.647 17.08c-.277.78-1.596 1.49-2.22 1.566-.567.07-1.282.1-2.07-.13-.476-.14-1.088-.328-1.87-.643-3.29-1.41-5.44-4.71-5.603-4.93-.163-.22-1.327-1.765-1.327-3.365 0-1.6.839-2.387 1.137-2.71.277-.3.604-.375.806-.375.2 0 .4.002.576.01.185.01.432-.07.676.516.252.603.857 2.087.932 2.24.075.153.125.33.025.53-.1.2-.15.323-.298.497-.148.174-.311.39-.444.523-.148.148-.301.31-.13.608.172.3.765 1.262 1.64 2.044 1.126 1.003 2.075 1.313 2.372 1.46.298.148.472.124.647-.075.174-.198.748-.873.948-1.172.198-.3.397-.25.67-.15.272.1 1.73.816 2.027.965.298.148.496.222.57.347.075.123.075.717-.202 1.497z" />
                </svg>
                <a href="https://api.whatsapp.com/send/?phone=919232000436&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-brand-body text-sm font-sans hover:text-brand-gold transition-colors">
                  +91 92320 00436 <span className="text-xs text-brand-muted">(WhatsApp)</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a href="mailto:rupmilanjewellers@gmail.com" className="text-brand-body text-sm font-sans hover:text-brand-gold transition-colors">
                  rupmilanjewellers@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="luxury-heading text-sm font-semibold text-brand-gold uppercase tracking-widest mb-4">
              Store Hours
            </h4>
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-brand-body text-sm font-sans">Monday – Sunday</p>
                <p className="text-brand-heading text-sm font-sans font-medium">9:00 AM – 9:00 PM</p>
                <span className="inline-block mt-2 text-[10px] font-sans font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                  Open 7 Days
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[rgba(160,115,42,0.20)] mt-10 pt-6 pb-20 md:pb-0">
          <p className="text-center text-brand-muted text-xs font-sans tracking-wide">
            © {new Date().getFullYear()} Rupmilan Jewellers · Champa, Chhattisgarh · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
