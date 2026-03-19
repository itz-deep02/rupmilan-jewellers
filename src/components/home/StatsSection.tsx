"use client";

import CounterAnimation from "@/components/CounterAnimation";
import type { Stat } from "@/types";

interface StatsSectionProps {
  stats: Stat[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="mb-16 sm:mb-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="glass-card p-5 sm:p-6 text-center flex flex-col items-center gap-3"
          >
            {/* Emoji icon */}
            <span className="text-3xl sm:text-4xl" role="img" aria-hidden="true">
              {stat.emoji}
            </span>

            {/* Animated number */}
            <div className="luxury-heading text-2xl sm:text-3xl font-bold text-gold-400">
              <CounterAnimation
                to={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                duration={2000}
              />
            </div>

            {/* Description */}
            {stat.description && (
              <p className="text-white/50 text-xs sm:text-sm font-sans leading-relaxed">
                {stat.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
