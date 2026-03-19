"use client";

import { useEffect, useRef, useState } from "react";

interface CounterAnimationProps {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function CounterAnimation({
  to,
  duration = 2000,
  suffix = "",
  prefix = "",
}: CounterAnimationProps) {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCounter();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [to, duration]);

  function animateCounter() {
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.round(eased * to));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }

  return (
    <span ref={containerRef}>
      {prefix}{count.toLocaleString("en-IN")}{suffix}
    </span>
  );
}
