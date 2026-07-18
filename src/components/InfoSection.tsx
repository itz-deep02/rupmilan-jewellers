import { MapPin, Clock, Phone, Mail, MessageCircle } from "lucide-react";

const phones = [
  { number: "+919826540190", display: "+91 98265 40190" },
  { number: "+919926514690", display: "+91 99265 14690" },
];

const whatsappPhone = { number: "9232000436", display: "+91 92320 00436" };

function InfoRow({
  icon: Icon,
  label,
  children,
  customIcon,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
  customIcon?: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-gold/10 border border-[rgba(160,115,42,0.25)] flex items-center justify-center mt-0.5">
        {customIcon ?? <Icon className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />}
      </div>
      <div>
        <p className="text-xs font-sans font-medium text-brand-gold-light uppercase tracking-widest mb-1">
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
        <h2 className="luxury-heading text-2xl sm:text-3xl font-normal text-brand-heading mb-1">
          Get In Touch
        </h2>
        <div className="h-0.5 w-12 bg-gradient-to-r from-brand-gold to-transparent rounded-full" />
      </div>

      {/* Address */}
      <InfoRow icon={MapPin} label="Visit Our Showroom">
        <p className="text-brand-body text-sm leading-relaxed font-sans">
          Near Samleshwari Mandir, Main,<br />
          Sarafa Bazar, Sonar Para,<br />
          Champa, Chhattisgarh 495671, India
        </p>
      </InfoRow>

      {/* Hours */}
      <InfoRow icon={Clock} label="Business Hours">
        <p className="text-brand-body text-sm font-sans">
          Monday – Sunday
        </p>
        <p className="text-brand-gold font-medium text-sm font-sans mt-0.5">
          9:00 AM – 9:00 PM
        </p>
        <span className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-sans">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
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
              className="text-brand-body hover:text-brand-gold text-sm font-sans transition-colors duration-200 hover:underline underline-offset-2"
            >
              {p.display}
            </a>
          ))}
        </div>
      </InfoRow>

      {/* WhatsApp Enquiry */}
      <InfoRow
        icon={MessageCircle}
        label="WhatsApp Enquiry"
        customIcon={
          <svg viewBox="0 0 32 32" className="w-5 h-5 fill-brand-gold" aria-hidden="true">
            <path d="M16.003 3C9.376 3 4 8.373 4 15.003c0 2.168.578 4.264 1.676 6.1L4 29l8.09-1.652A12.93 12.93 0 0 0 16.003 28c6.627 0 12.003-5.373 12.003-12.003C28.006 9.371 22.63 3 16.003 3zm6.647 17.08c-.277.78-1.596 1.49-2.22 1.566-.567.07-1.282.1-2.07-.13-.476-.14-1.088-.328-1.87-.643-3.29-1.41-5.44-4.71-5.603-4.93-.163-.22-1.327-1.765-1.327-3.365 0-1.6.839-2.387 1.137-2.71.277-.3.604-.375.806-.375.2 0 .4.002.576.01.185.01.432-.07.676.516.252.603.857 2.087.932 2.24.075.153.125.33.025.53-.1.2-.15.323-.298.497-.148.174-.311.39-.444.523-.148.148-.301.31-.13.608.172.3.765 1.262 1.64 2.044 1.126 1.003 2.075 1.313 2.372 1.46.298.148.472.124.647-.075.174-.198.748-.873.948-1.172.198-.3.397-.25.67-.15.272.1 1.73.816 2.027.965.298.148.496.222.57.347.075.123.075.717-.202 1.497z" />
          </svg>
        }
      >
        <a
          href={`https://api.whatsapp.com/send/?phone=91${whatsappPhone.number}&type=phone_number&app_absent=0`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-body hover:text-brand-gold text-sm font-sans transition-colors duration-200 hover:underline underline-offset-2"
        >
          {whatsappPhone.display}
        </a>
      </InfoRow>

      {/* Email */}
      <InfoRow icon={Mail} label="Email">
        <a
          href="mailto:rupmilanjewellers@gmail.com"
          className="text-brand-body hover:text-brand-gold text-sm font-sans transition-colors duration-200 hover:underline underline-offset-2 break-all"
        >
          rupmilanjewellers@gmail.com
        </a>
      </InfoRow>
    </div>
  );
}
