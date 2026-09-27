import { CSSProperties } from "react";

// ── New-Gen Vibrant Light Theme Palette ──
export const COLORS = {
  // Backgrounds
  bg: "#F8FAFC",              // Ultra-clean slate white
  bgSubtle: "#F1F5F9",
  card: "#FFFFFF",
  cardGlass: "rgba(255, 255, 255, 0.82)",
  cardGlassBorder: "rgba(255, 255, 255, 0.9)",

  // Brand & Accents
  primary: "#4F46E5",         // Electric Indigo
  primaryLight: "#818CF8",
  primaryBg: "#EEF2FF",
  
  purple: "#7C3AED",          // Vibrant Violet
  purpleLight: "#A78BFA",
  purpleBg: "#F5F3FF",

  pink: "#EC4899",            // Hot Pink
  pinkLight: "#F472B6",
  pinkBg: "#FDF2F8",

  orange: "#F97316",          // Sunset Orange
  orangeLight: "#FB923C",
  orangeBg: "#FFF7ED",

  emerald: "#10B981",         // Fresh Mint / Emerald
  emeraldLight: "#34D399",
  emeraldBg: "#ECFDF5",

  cyan: "#06B6D4",            // Electric Cyan
  cyanLight: "#22D3EE",
  cyanBg: "#ECFEFF",

  // Text Hierarchy
  textHeading: "#0F172A",     // Deep Slate 900
  textBody: "#334155",        // Slate 700
  textMuted: "#64748B",       // Slate 500
  textLight: "#94A3B8",       // Slate 400
  white: "#FFFFFF",

  // Borders & Shadows
  borderLight: "#E2E8F0",
  borderMedium: "#CBD5E1",
};

// ── Typography ──
export const FONTS = {
  heading: "system-ui, -apple-system, 'Plus Jakarta Sans', 'Segoe UI', sans-serif",
  body: "system-ui, -apple-system, 'Plus Jakarta Sans', 'Segoe UI', sans-serif",
  mono: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
};

// ── Shared Base Styles ──
export const slideBaseLight: CSSProperties = {
  width: 1080,
  height: 1080,
  backgroundColor: COLORS.bg,
  display: "flex",
  flexDirection: "column",
  padding: 60,
  position: "relative",
  overflow: "hidden",
  fontFamily: FONTS.body,
};

// ── Reusable Glow Orbs for Mesh Gradient Effect ──
export const meshGlowStyle = (color: string, size = 450, top?: number | string, left?: number | string, right?: number | string, bottom?: number | string): CSSProperties => ({
  position: "absolute",
  width: size,
  height: size,
  borderRadius: "50%",
  background: `radial-gradient(circle, ${color} 0%, transparent 68%)`,
  filter: "blur(40px)",
  opacity: 0.55,
  top,
  left,
  right,
  bottom,
  pointerEvents: "none",
  zIndex: 0,
});
