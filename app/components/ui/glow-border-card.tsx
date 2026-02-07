"use client";

import { ReactNode } from "react";

interface GlowBorderCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export default function GlowBorderCard({
  children,
  className = "",
  glowColor = "from-blue-500 via-purple-500 to-pink-500"
}: GlowBorderCardProps) {
  return (
    <div className={`relative group ${className}`}>
      {/* Rotating gradient border */}
      <div
        className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-75 blur-sm group-hover:opacity-100 transition duration-500"
        style={{
          backgroundSize: '200% 200%',
          animation: 'glow-rotate 3s ease infinite'
        }}
      />

      {/* Card content */}
      <div className="relative bg-[#0a0a0a] rounded-lg p-6 h-full">
        {children}
      </div>
    </div>
  );
}

// Alternative version with conic gradient (more like VengeanceUI)
export function GlowBorderCardConic({
  children,
  className = ""
}: GlowBorderCardProps) {
  return (
    <div className={`relative group ${className}`}>
      {/* Rotating conic gradient border */}
      <div
        className="absolute -inset-[2px] rounded-lg opacity-75 group-hover:opacity-100 transition duration-500"
        style={{
          animation: 'spin 6s linear infinite'
        }}
      >
        <div
          className="absolute inset-0 rounded-lg blur-md"
          style={{
            background: 'conic-gradient(from 0deg, #3B82F6, #8B5CF6, #EC4899, #3B82F6)'
          }}
        />
      </div>

      {/* Card content */}
      <div className="relative bg-[#0a0a0a] rounded-lg p-6 h-full border border-[#1a1a1a]">
        {children}
      </div>
    </div>
  );
}
