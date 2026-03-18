import { type LucideIcon } from "lucide-react";
import CounterAnimation from "./CounterAnimation";

interface TagBadgeProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  counter?: {
    to: number;
    suffix?: string;
    prefix?: string;
  };
  animationDelay?: string;
}

export default function TagBadge({
  icon: Icon,
  title,
  subtitle,
  counter,
  animationDelay = "0ms",
}: TagBadgeProps) {
  return (
    <div
      className="glass-card-hover p-5 flex flex-col items-center text-center gap-3 opacity-0 animate-fade-in-up"
      style={{ animationDelay, animationFillMode: "forwards" }}
    >
      {/* Icon circle */}
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400/30 to-gold-600/20 border border-gold-400/40 flex items-center justify-center shadow-inner">
        <Icon className="w-6 h-6 text-gold-400" strokeWidth={1.5} />
      </div>

      {/* Title / counter */}
      <div className="luxury-heading text-2xl font-semibold text-white leading-none">
        {counter ? (
          <CounterAnimation
            to={counter.to}
            suffix={counter.suffix}
            prefix={counter.prefix}
          />
        ) : (
          title
        )}
      </div>

      {/* Subtitle */}
      <p className="text-xs text-white/60 font-sans tracking-wide uppercase">
        {subtitle}
      </p>
    </div>
  );
}
