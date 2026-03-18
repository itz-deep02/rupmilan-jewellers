import { MapPin, Clock, Phone, Mail } from "lucide-react";

const phones = [
  { number: "9826540190", display: "+91 98265 40190" },
  { number: "9926514690", display: "+91 99265 14690" },
  { number: "8269520743", display: "+91 82695 20743" },
];

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gold-400/15 border border-gold-400/30 flex items-center justify-center mt-0.5">
        <Icon className="w-5 h-5 text-gold-400" strokeWidth={1.5} />
      </div>
      <div>
        <p className="text-xs font-sans font-medium text-gold-400/80 uppercase tracking-widest mb-1">
          {label}
        </p>
        {children}
      </div>
    </div>
  );
}

export default function InfoSection() {
  return (
    <div className="glass-card p-6 sm:p-8 flex flex-col gap-7 h-full opacity-0 animate-fade-in-up animate-delay-100" style={{ animationFillMode: "forwards" }}>
      <div>
        <h2 className="luxury-heading text-2xl sm:text-3xl font-semibold text-white mb-1">
          Get In Touch
        </h2>
        <div className="h-0.5 w-12 bg-gradient-to-r from-gold-400 to-transparent rounded-full" />
      </div>

      {/* Address */}
      <InfoRow icon={MapPin} label="Visit Our Showroom">
        <p className="text-white/80 text-sm leading-relaxed font-sans">
          Near Samleshwari Mandir, Main,<br />
          Sarafa Bazar, Sonar Para,<br />
          Champa, Chhattisgarh 495671, India
        </p>
      </InfoRow>

      {/* Hours */}
      <InfoRow icon={Clock} label="Business Hours">
        <p className="text-white/80 text-sm font-sans">
          Monday – Sunday
        </p>
        <p className="text-gold-300 font-semibold text-sm font-sans mt-0.5">
          9:00 AM – 9:00 PM
        </p>
        <span className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-sans">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Open all 7 days
        </span>
      </InfoRow>

      {/* Phones */}
      <InfoRow icon={Phone} label="Contact Numbers">
        <div className="flex flex-col gap-1.5">
          {phones.map((p) => (
            <a
              key={p.number}
              href={`tel:${p.number}`}
              className="text-white/80 hover:text-gold-300 text-sm font-sans transition-colors duration-200 hover:underline underline-offset-2"
            >
              {p.display}
            </a>
          ))}
        </div>
      </InfoRow>

      {/* Email */}
      <InfoRow icon={Mail} label="Email">
        <a
          href="mailto:rupmilanjewellers@gmail.com"
          className="text-white/80 hover:text-gold-300 text-sm font-sans transition-colors duration-200 hover:underline underline-offset-2 break-all"
        >
          rupmilanjewellers@gmail.com
        </a>
      </InfoRow>
    </div>
  );
}
