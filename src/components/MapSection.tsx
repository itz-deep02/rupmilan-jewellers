import { Navigation } from "lucide-react";

export default function MapSection() {
  return (
    <div
      className="glass-card overflow-hidden flex flex-col opacity-0 animate-fade-in-up animate-delay-200 h-full"
      style={{ animationFillMode: "forwards" }}
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-[rgba(160,115,42,0.25)] flex items-center justify-center">
          <Navigation className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
        </div>
        <div>
          <h2 className="luxury-heading text-xl font-normal text-brand-heading">
            Find Us
          </h2>
          <p className="text-xs text-brand-muted font-sans">
            Champa, Chhattisgarh, India
          </p>
        </div>
      </div>

      {/* Map embed */}
      <div className="flex-1 min-h-[340px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.3574149568913!2d82.6426652!3d22.0359193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a27bf23880b3d0d%3A0xb568aab0dfbdaa88!2sSharda%20Prasad%20Bitawan%20Sao%20Rupmilan%20Jewellers!5e0!3m2!1sen!2sin!4v1773825771116!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: 340 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Rupmilan Jewellers Location"
          className="w-full h-full"
        />
        {/* Subtle border overlay */}
        <div className="absolute inset-0 pointer-events-none border-t border-[rgba(160,115,42,0.15)]" />
      </div>

      {/* Footer link */}
      <div className="px-6 py-3 border-t border-[rgba(160,115,42,0.15)]">
        <a
          href="https://maps.google.com/?q=Sharda+Prasad+Bitawan+Sao+Rupmilan+Jewellers+Champa+Chhattisgarh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-brand-gold hover:text-brand-gold-light font-sans transition-colors duration-200 flex items-center gap-1"
        >
          <Navigation className="w-3 h-3" />
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}
