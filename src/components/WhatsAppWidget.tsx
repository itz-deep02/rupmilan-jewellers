"use client";

import { useState, useEffect, useRef } from "react";
import { X, Send } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const quickOptions = [
  {
    icon: "📈",
    title: "Today's Gold & Silver Rate",
    subtitle: "Get today's latest rate",
    message: "Hi, I want to know today's gold and silver rate.",
  },
  {
    icon: "💍",
    title: "Custom Order",
    subtitle: "Design your own piece",
    message: "Hi, I want to create a custom jewellery design.",
  },
];

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const [customMessage, setCustomMessage] = useState("");
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  function handleQuickOption(message: string) {
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  function handleSendCustom() {
    if (!customMessage.trim()) return;
    window.open(buildWhatsAppUrl(customMessage.trim()), "_blank", "noopener,noreferrer");
    setCustomMessage("");
  }

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50" ref={popupRef}>
      {/* Popup */}
      <div
        className={`absolute bottom-full right-0 mb-3 transition-all duration-300 ease-out origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-2 pointer-events-none"
        }`}
      >
        <div className="w-[calc(100vw-2rem)] sm:w-[340px] max-w-[340px] bg-white rounded-2xl shadow-2xl shadow-black/15 overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-[#075E54] px-4 py-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-6 h-6 fill-white"
                aria-hidden="true"
              >
                <path d="M16.003 3C9.376 3 4 8.373 4 15.003c0 2.168.578 4.264 1.676 6.1L4 29l8.09-1.652A12.93 12.93 0 0 0 16.003 28c6.627 0 12.003-5.373 12.003-12.003C28.006 9.371 22.63 3 16.003 3zm6.647 17.08c-.277.78-1.596 1.49-2.22 1.566-.567.07-1.282.1-2.07-.13-.476-.14-1.088-.328-1.87-.643-3.29-1.41-5.44-4.71-5.603-4.93-.163-.22-1.327-1.765-1.327-3.365 0-1.6.839-2.387 1.137-2.71.277-.3.604-.375.806-.375.2 0 .4.002.576.01.185.01.432-.07.676.516.252.603.857 2.087.932 2.24.075.153.125.33.025.53-.1.2-.15.323-.298.497-.148.174-.311.39-.444.523-.148.148-.301.31-.13.608.172.3.765 1.262 1.64 2.044 1.126 1.003 2.075 1.313 2.372 1.46.298.148.472.124.647-.075.174-.198.748-.873.948-1.172.198-.3.397-.25.67-.15.272.1 1.73.816 2.027.965.298.148.496.222.57.347.075.123.075.717-.202 1.497z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm leading-tight">Rupmilan Jewellers</p>
              <p className="text-white/70 text-xs mt-0.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                Online &middot; Replies in minutes
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4">
            <p className="text-gray-800 font-semibold text-sm mb-3">How can we help you?</p>

            {/* Quick Options */}
            <div className="space-y-2.5 mb-4">
              {quickOptions.map((option) => (
                <button
                  key={option.title}
                  onClick={() => handleQuickOption(option.message)}
                  className="w-full flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-green-50 border border-gray-100 hover:border-green-200 transition-all duration-200 text-left group"
                >
                  <span className="text-xl flex-shrink-0">{option.icon}</span>
                  <div className="min-w-0">
                    <p className="text-gray-800 font-medium text-sm group-hover:text-green-700 transition-colors">
                      {option.title}
                    </p>
                    <p className="text-gray-400 text-xs mt-0.5">{option.subtitle}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Custom Message Input */}
            <div className="flex items-center gap-2 bg-gray-50 rounded-xl border border-gray-100 p-1.5 pl-3 focus-within:border-green-300 transition-colors">
              <input
                type="text"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendCustom()}
                placeholder="Or type your own message..."
                className="flex-1 bg-transparent text-sm text-gray-700 placeholder:text-gray-400 outline-none min-w-0"
              />
              <button
                onClick={handleSendCustom}
                disabled={!customMessage.trim()}
                className="w-9 h-9 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] disabled:bg-gray-200 disabled:cursor-not-allowed flex items-center justify-center transition-colors flex-shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative flex items-center rounded-full bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 shadow-lg shadow-green-900/30 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/25 hover:scale-105"
        aria-label="Chat with us on WhatsApp"
      >
        {/* Pulse ring */}
        {!isOpen && (
          <span className="absolute left-0 top-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-400 opacity-30 animate-pulse-ring pointer-events-none" />
        )}

        {/* Icon */}
        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0">
          {isOpen ? (
            <X className="w-6 h-6 md:w-7 md:h-7 text-white" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-7 h-7 md:w-8 md:h-8 fill-white"
              aria-hidden="true"
            >
              <path d="M16.003 3C9.376 3 4 8.373 4 15.003c0 2.168.578 4.264 1.676 6.1L4 29l8.09-1.652A12.93 12.93 0 0 0 16.003 28c6.627 0 12.003-5.373 12.003-12.003C28.006 9.371 22.63 3 16.003 3zm6.647 17.08c-.277.78-1.596 1.49-2.22 1.566-.567.07-1.282.1-2.07-.13-.476-.14-1.088-.328-1.87-.643-3.29-1.41-5.44-4.71-5.603-4.93-.163-.22-1.327-1.765-1.327-3.365 0-1.6.839-2.387 1.137-2.71.277-.3.604-.375.806-.375.2 0 .4.002.576.01.185.01.432-.07.676.516.252.603.857 2.087.932 2.24.075.153.125.33.025.53-.1.2-.15.323-.298.497-.148.174-.311.39-.444.523-.148.148-.301.31-.13.608.172.3.765 1.262 1.64 2.044 1.126 1.003 2.075 1.313 2.372 1.46.298.148.472.124.647-.075.174-.198.748-.873.948-1.172.198-.3.397-.25.67-.15.272.1 1.73.816 2.027.965.298.148.496.222.57.347.075.123.075.717-.202 1.497z" />
            </svg>
          )}
        </div>

        {/* Text label */}
        {!isOpen && (
          <span
            className={`text-white font-sans text-sm font-medium whitespace-nowrap pr-5 transition-all duration-500 ease-out ${
              showText ? "opacity-100 max-w-48 ml-0" : "opacity-0 max-w-0 ml-0 pr-0"
            } overflow-hidden`}
          >
            <span className="hidden sm:inline">Need Help? </span>Chat with us
          </span>
        )}
      </button>
    </div>
  );
}
