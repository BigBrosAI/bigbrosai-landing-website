"use client";
import { MessageCircle } from "lucide-react";

export function FloatingWA() {
  return (
    <a href="https://wa.me/918279305027" target="_blank" rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-7 right-7 z-50 w-12 h-12 rounded-full flex items-center justify-center"
      style={{ background: "#15803d", boxShadow: "0 4px 24px #15803d" }}>
      <span className="absolute inset-0 rounded-full bg-[#15803d] animate-ping-slow" />
      <MessageCircle size={20} className="text-white relative z-10" style={{ fill: "white" }} />
    </a>
  );
}
