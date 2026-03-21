import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ViewMoreCardProps {
  href: string;
  label?: string;
  count?: number;
}

export default function ViewMoreCard({ href, label = "View All", count }: ViewMoreCardProps) {
  return (
    <Link
      href={href}
      className="snap-start flex-shrink-0 w-[240px] sm:w-[280px] glass-card-hover p-3 flex flex-col items-center justify-center min-h-[320px] sm:min-h-[380px] group"
    >
      <div className="w-16 h-16 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mb-4 group-hover:bg-brand-gold/20 group-hover:scale-110 transition-all duration-300">
        <ArrowRight className="w-7 h-7 text-brand-gold group-hover:translate-x-0.5 transition-transform duration-300" />
      </div>
      <p className="luxury-heading text-lg font-normal text-brand-heading mb-1">{label}</p>
      {count !== undefined && (
        <p className="text-xs font-sans text-brand-muted">{count}+ designs to explore</p>
      )}
    </Link>
  );
}
