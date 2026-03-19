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
        <p className="text-gold-400 text-xs sm:text-sm font-sans font-medium tracking-[0.3em] uppercase mb-3">
          {eyebrow}
        </p>
      )}

      <h2 className="luxury-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-3 leading-tight">
        {title}{" "}
        {accentWord && <span className="gold-gradient-text">{accentWord}</span>}
      </h2>

      {subtitle && (
        <p className="text-white/60 text-sm sm:text-base font-sans max-w-lg mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className="flex items-center justify-center gap-2 mt-5">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-400/60" />
        <div className="w-1.5 h-1.5 rotate-45 bg-gold-400/60" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-400/60" />
      </div>

      {viewAllHref && (
        <a
          href={viewAllHref}
          className="inline-block mt-4 text-gold-400 text-xs font-sans font-medium tracking-wide uppercase hover:text-gold-300 transition-colors duration-200"
        >
          View All →
        </a>
      )}
    </div>
  );
}
