import { Gem, MapPin, Phone, Mail, Clock } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <Gem className="w-4 h-4 text-amber-950" />
              </div>
              <span className="luxury-heading text-lg font-semibold text-gold-300">
                Rupmilan Jewellers
              </span>
            </div>
            <p className="text-white/50 text-sm font-sans leading-relaxed max-w-xs">
              Crafting timeless jewellery with 100% purity and BIS Hallmark certification since 1988.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="luxury-heading text-sm font-semibold text-gold-400 uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/50 text-sm font-sans hover:text-gold-300 transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="luxury-heading text-sm font-semibold text-gold-400 uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400/60 mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm font-sans leading-relaxed">
                  Near Samleshwari Mandir, Sarafa Bazar, Champa, CG 495671
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400/60 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919826540190" className="text-white/50 text-sm font-sans hover:text-gold-300 transition-colors">
                    +91 98265 40190
                  </a>
                  <a href="tel:+919926514690" className="text-white/50 text-sm font-sans hover:text-gold-300 transition-colors">
                    +91 99265 14690
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-4 h-4 fill-gold-400/60 flex-shrink-0">
                  <path d="M16.003 3C9.376 3 4 8.373 4 15.003c0 2.168.578 4.264 1.676 6.1L4 29l8.09-1.652A12.93 12.93 0 0 0 16.003 28c6.627 0 12.003-5.373 12.003-12.003C28.006 9.371 22.63 3 16.003 3zm6.647 17.08c-.277.78-1.596 1.49-2.22 1.566-.567.07-1.282.1-2.07-.13-.476-.14-1.088-.328-1.87-.643-3.29-1.41-5.44-4.71-5.603-4.93-.163-.22-1.327-1.765-1.327-3.365 0-1.6.839-2.387 1.137-2.71.277-.3.604-.375.806-.375.2 0 .4.002.576.01.185.01.432-.07.676.516.252.603.857 2.087.932 2.24.075.153.125.33.025.53-.1.2-.15.323-.298.497-.148.174-.311.39-.444.523-.148.148-.301.31-.13.608.172.3.765 1.262 1.64 2.044 1.126 1.003 2.075 1.313 2.372 1.46.298.148.472.124.647-.075.174-.198.748-.873.948-1.172.198-.3.397-.25.67-.15.272.1 1.73.816 2.027.965.298.148.496.222.57.347.075.123.075.717-.202 1.497z" />
                </svg>
                <a href="https://api.whatsapp.com/send/?phone=919232000436&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-white/50 text-sm font-sans hover:text-gold-300 transition-colors">
                  +91 92320 00436 <span className="text-xs text-gold-400/50">(WhatsApp)</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400/60 flex-shrink-0" />
                <a href="mailto:rupmilanjewellers@gmail.com" className="text-white/50 text-sm font-sans hover:text-gold-300 transition-colors">
                  rupmilanjewellers@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="luxury-heading text-sm font-semibold text-gold-400 uppercase tracking-widest mb-4">
              Store Hours
            </h4>
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-gold-400/60 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white/50 text-sm font-sans">Monday – Sunday</p>
                <p className="text-white/70 text-sm font-sans font-medium">9:00 AM – 9:00 PM</p>
                <span className="inline-block mt-2 text-[10px] font-sans font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full">
                  Open 7 Days
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 pb-20 md:pb-0">
          <p className="text-center text-white/30 text-xs font-sans tracking-wide">
            © {new Date().getFullYear()} Rupmilan Jewellers · Champa, Chhattisgarh · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
