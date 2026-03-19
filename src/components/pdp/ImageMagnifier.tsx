"use client";

import { useState, useRef } from "react";

interface ImageMagnifierProps {
  src: string;
  alt: string;
  zoomLevel?: number;
}

export default function ImageMagnifier({ zoomLevel = 2.5 }: ImageMagnifierProps) {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMagnifierPos({ x, y });
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 cursor-crosshair"
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Magnifier lens overlay */}
      {showMagnifier && (
        <div
          className="absolute inset-0 transition-opacity duration-150"
          style={{
            backgroundSize: `${zoomLevel * 100}%`,
            backgroundPosition: `${magnifierPos.x}% ${magnifierPos.y}%`,
            backgroundImage: `radial-gradient(circle 120px at ${magnifierPos.x}% ${magnifierPos.y}%, transparent 0%, rgba(0,0,0,0.4) 100%)`,
          }}
        />
      )}
    </div>
  );
}
