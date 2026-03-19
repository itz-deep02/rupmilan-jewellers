import Link from "next/link";
import { Gem, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-amber-950 via-stone-900 to-neutral-900">
      {/* Decorative orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-400/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative text-center max-w-md mx-auto">
        {/* Icon */}
        <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8">
          <Gem className="w-12 h-12 text-gold-400/40" />
        </div>

        {/* 404 */}
        <h1 className="luxury-heading text-7xl sm:text-8xl font-bold gold-gradient-text mb-4">
          404
        </h1>

        <h2 className="luxury-heading text-2xl sm:text-3xl font-semibold text-white mb-3">
          Page Not Found
        </h2>

        <p className="text-white/50 text-sm font-sans leading-relaxed mb-8 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let us help you find what you need.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-400 to-gold-500 text-amber-950 font-sans font-semibold text-sm px-6 py-3 rounded-xl hover:from-gold-300 hover:to-gold-400 transition-all duration-200 active:scale-[0.98]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/catalogue"
            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/70 font-sans font-medium text-sm px-6 py-3 rounded-xl hover:border-white/40 hover:text-white transition-all duration-200"
          >
            View Catalogue
          </Link>
        </div>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-2 mt-10">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-400/30" />
          <div className="w-1.5 h-1.5 rotate-45 bg-gold-400/30" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-400/30" />
        </div>
      </div>
    </div>
  );
}
