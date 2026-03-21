interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  accentWord?: string;
  subtitle?: string;
  viewAllHref?: string;
}

export default function SectionHeader({ eyebrow, title, accentWord, subtitle, viewAllHref }: SectionHeaderProps) {
  return (
    <div className="text-center mb-8 sm:mb-10">
      {eyebrow && (
        <p className="text-brand-gold-light text-xs sm:text-sm font-sans font-medium tracking-[0.3em] uppercase mb-3">
          {eyebrow}
        </p>
      )}

      <h2 className="luxury-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-heading mb-3 leading-tight">
        {title}{" "}
        {accentWord && <span className="text-brand-gold">{accentWord}</span>}
      </h2>

      {subtitle && (
        <p className="text-brand-body text-sm sm:text-base font-sans max-w-lg mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className="flex items-center justify-center gap-2 mt-5">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-brand-gold/40" />
        <div className="w-1.5 h-1.5 rotate-45 bg-brand-gold/50" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-brand-gold/40" />
      </div>

      {viewAllHref && (
        <a
          href={viewAllHref}
          className="inline-block mt-4 text-brand-gold text-xs font-sans font-medium tracking-wide uppercase hover:text-brand-gold-light transition-colors duration-200"
        >
          View All →
        </a>
      )}
    </div>
  );
}
