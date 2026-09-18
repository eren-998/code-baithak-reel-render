import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

interface TechChipData {
  startFrame: number;
  endFrame: number;
  tag: string;
  label: string;
  accentColor: string;
  iconType: "auth" | "algo" | "claims" | "encode" | "warning" | "shield";
}

const chips: TechChipData[] = [
  {
    startFrame: 145,
    endFrame: 235,
    tag: "AUTH",
    label: "Stateless Authentication",
    accentColor: "#00F0FF",
    iconType: "auth",
  },
  {
    startFrame: 590,
    endFrame: 700,
    tag: "ALGO",
    label: "HS256 · HMAC-SHA256",
    accentColor: "#00F0FF",
    iconType: "algo",
  },
  {
    startFrame: 840,
    endFrame: 955,
    tag: "CLAIMS",
    label: "user_id · role · exp",
    accentColor: "#FFE600",
    iconType: "claims",
  },
  {
    startFrame: 1050,
    endFrame: 1140,
    tag: "FORMAT",
    label: "Base64Url Encoded",
    accentColor: "#A855F7",
    iconType: "encode",
  },
  {
    startFrame: 1140,
    endFrame: 1240,
    tag: "SECURITY",
    label: "Never Store Passwords!",
    accentColor: "#F43F5E",
    iconType: "warning",
  },
  {
    startFrame: 1350,
    endFrame: 1470,
    tag: "INTEGRITY",
    label: "Zero Tampering · Verified",
    accentColor: "#10B981",
    iconType: "shield",
  },
];

const renderIcon = (type: TechChipData["iconType"], color: string) => {
  switch (type) {
    case "auth":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v4" />
          <circle cx="12" cy="16" r="1" fill={color} />
        </svg>
      );
    case "algo":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "claims":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 8h10M7 12h7M7 16h4" />
        </svg>
      );
    case "encode":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
    case "warning":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="3" />
        </svg>
      );
    case "shield":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );
  }
};

export const TechnicalMotionEssence: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const activeChip = chips.find(
    (c) => frame >= c.startFrame && frame <= c.endFrame
  );

  if (!activeChip) return null;

  const local = frame - activeChip.startFrame;
  const duration = activeChip.endFrame - activeChip.startFrame;

  // Spring entrance
  const spr = spring({
    frame: local,
    fps,
    config: { damping: 15, stiffness: 140 },
  });

  // Exit fade & slide
  const exitProgress = interpolate(
    local,
    [duration - 10, duration],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const translateY = interpolate(spr, [0, 1], [15, 0]);
  const scale = interpolate(spr, [0, 1], [0.92, 1]);
  const opacity = spr * exitProgress;

  return (
    <div
      style={{
        position: "absolute",
        bottom: 285,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: 44,
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          backgroundColor: "rgba(8, 12, 22, 0.85)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          padding: "8px 18px",
          borderRadius: 24,
          border: `1.5px solid ${activeChip.accentColor}77`,
          boxShadow: `0 8px 24px rgba(0, 0, 0, 0.5), 0 0 16px ${activeChip.accentColor}33`,
        }}
      >
        {/* Glowing Icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 28,
            height: 28,
            borderRadius: "50%",
            backgroundColor: `${activeChip.accentColor}20`,
            border: `1px solid ${activeChip.accentColor}`,
          }}
        >
          {renderIcon(activeChip.iconType, activeChip.accentColor)}
        </div>

        {/* Micro Tag */}
        <span
          style={{
            color: activeChip.accentColor,
            fontSize: 12,
            fontWeight: 900,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontFamily: "'Inter', sans-serif",
            padding: "2px 8px",
            backgroundColor: `${activeChip.accentColor}18`,
            borderRadius: 6,
          }}
        >
          {activeChip.tag}
        </span>

        {/* Technical Label */}
        <span
          style={{
            color: "#FFFFFF",
            fontSize: 17,
            fontWeight: 800,
            letterSpacing: "-0.01em",
            fontFamily: "'Inter', system-ui, sans-serif",
          }}
        >
          {activeChip.label}
        </span>
      </div>
    </div>
  );
};
