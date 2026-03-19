import { Sparkles } from "lucide-react";

export default function AboutHero() {
  return (
    <div className="text-center mb-12 sm:mb-16 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
      <div className="inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/20 rounded-full px-4 py-1.5 mb-4">
        <Sparkles className="w-3.5 h-3.5 text-gold-400" />
        <span className="text-gold-400 text-xs font-sans font-medium tracking-wide uppercase">
          Since 1988
        </span>
      </div>

      <h1 className="luxury-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-4 leading-tight">
        About{" "}
        <span className="gold-gradient-text">Us</span>
      </h1>

      <p className="text-white/60 text-base sm:text-lg font-sans max-w-xl mx-auto leading-relaxed">
        A legacy of trust, craftsmanship, and timeless jewellery since 1988.
      </p>

      <div className="flex items-center justify-center gap-2 mt-6">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/60" />
        <div className="w-2 h-2 rotate-45 bg-gold-400/60" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/60" />
      </div>
    </div>
  );
}
