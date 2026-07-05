"use client";

import { useState, useEffect } from "react";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=919232000436&text=Namaste%20Rupmilan%20Jewellers%2C%20mujhe%20jewellery%20ke%20baare%20mein%20jaankari%20chahiye&type=phone_number&app_absent=0";

export default function WhatsAppButton() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 flex items-center justify-end">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="relative flex items-center rounded-full bg-green-500 hover:bg-green-400 active:scale-95 shadow-lg shadow-green-900/40 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30 hover:scale-105"
      >
        {/* Pulse ring - anchored to the icon */}
        <span className="absolute left-0 top-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-400 opacity-30 animate-pulse-ring pointer-events-none" />

        {/* Icon container - fixed size */}
        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-7 h-7 md:w-8 md:h-8 fill-white"
            aria-hidden="true"
          >
            <path d="M16.003 3C9.376 3 4 8.373 4 15.003c0 2.168.578 4.264 1.676 6.1L4 29l8.09-1.652A12.93 12.93 0 0 0 16.003 28c6.627 0 12.003-5.373 12.003-12.003C28.006 9.371 22.63 3 16.003 3zm6.647 17.08c-.277.78-1.596 1.49-2.22 1.566-.567.07-1.282.1-2.07-.13-.476-.14-1.088-.328-1.87-.643-3.29-1.41-5.44-4.71-5.603-4.93-.163-.22-1.327-1.765-1.327-3.365 0-1.6.839-2.387 1.137-2.71.277-.3.604-.375.806-.375.2 0 .4.002.576.01.185.01.432-.07.676.516.252.603.857 2.087.932 2.24.075.153.125.33.025.53-.1.2-.15.323-.298.497-.148.174-.311.39-.444.523-.148.148-.301.31-.13.608.172.3.765 1.262 1.64 2.044 1.126 1.003 2.075 1.313 2.372 1.46.298.148.472.124.647-.075.174-.198.748-.873.948-1.172.198-.3.397-.25.67-.15.272.1 1.73.816 2.027.965.298.148.496.222.57.347.075.123.075.717-.202 1.497z" />
          </svg>
        </div>

        {/* Text label - expands from right of icon */}
        <span
          className={`text-white font-sans text-sm font-medium whitespace-nowrap pr-5 transition-all duration-500 ease-out ${
            showText ? "opacity-100 max-w-48 ml-0" : "opacity-0 max-w-0 ml-0 pr-0"
          } overflow-hidden`}
        >
          <span className="hidden sm:inline">Need Help? </span>Chat with us
        </span>
      </a>
    </div>
  );
}
