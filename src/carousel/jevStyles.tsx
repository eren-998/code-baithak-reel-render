import React, { CSSProperties } from "react";

export const JEV_COLORS = {
  bg: "#FBFBFA",
  gridLine: "#E5E7EB",
  textDark: "#111827",
  textMuted: "#4B5563",
  redAccent: "#DC2626",
  greenAccent: "#16A34A",
  blueAccent: "#2563EB",
  orangeAccent: "#EA580C",
  cardBg: "#FFFFFF",
  cardBorder: "#1F2937",
};

export const JEV_FONTS = {
  heading: "'Patrick Hand', 'Comic Sans MS', 'Segoe UI', cursive, sans-serif",
  body: "'Segoe UI', -apple-system, sans-serif",
  mono: "'JetBrains Mono', 'Courier New', monospace",
};

export const jevSlideBase: CSSProperties = {
  width: 1080,
  height: 1080,
  backgroundColor: JEV_COLORS.bg,
  backgroundImage: `
    linear-gradient(to right, ${JEV_COLORS.gridLine} 1px, transparent 1px),
    linear-gradient(to bottom, ${JEV_COLORS.gridLine} 1px, transparent 1px)
  `,
  backgroundSize: "32px 32px",
  display: "flex",
  flexDirection: "column",
  padding: "50px 60px",
  position: "relative",
  overflow: "hidden",
  fontFamily: JEV_FONTS.body,
  border: "1px solid #E5E7EB",
};

/** Red Wavy Underline SVG */
export const WavyUnderline: React.FC<{ width?: number }> = ({ width = 360 }) => (
  <svg width={width} height="14" viewBox={`0 0 ${width} 14`} fill="none" style={{ marginTop: 4, marginBottom: 14 }}>
    <path
      d={`M 0 7 Q 15 0, 30 7 T 60 7 T 90 7 T 120 7 T 150 7 T 180 7 T 210 7 T 240 7 T 270 7 T 300 7 T 330 7 T 360 7`}
      stroke={JEV_COLORS.redAccent}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
  </svg>
);

/** Top-Right Brand Badge */
export const JevBrandBadge: React.FC = () => (
  <div
    style={{
      position: "absolute",
      top: 40,
      right: 48,
      backgroundColor: "#FFFFFF",
      border: "2px solid #1F2937",
      borderRadius: 14,
      padding: "8px 18px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      boxShadow: "3px 3px 0px #1F2937",
      zIndex: 20,
    }}
  >
    <div
      style={{
        backgroundColor: "#2563EB",
        color: "#FFFFFF",
        padding: "4px 8px",
        borderRadius: 8,
        fontFamily: JEV_FONTS.mono,
        fontWeight: 900,
        fontSize: 13,
      }}
    >
      {"</>"}
    </div>
    <div>
      <div style={{ fontSize: 16, fontWeight: 900, color: JEV_COLORS.textDark, lineHeight: 1.15 }}>
        Code Baithak
      </div>
      <div style={{ fontSize: 12, fontWeight: 700, color: JEV_COLORS.redAccent, fontStyle: "italic" }}>
        AI Learning • @code_baithak
      </div>
    </div>
  </div>
);

/** Bottom Slide Counter */
export const JevSlideCounter: React.FC<{ current: number; total?: number }> = ({ current, total = 6 }) => (
  <div
    style={{
      position: "absolute",
      bottom: 24,
      right: 44,
      fontSize: 22,
      fontWeight: 800,
      color: "#059669",
      fontFamily: JEV_FONTS.heading,
      fontStyle: "italic",
    }}
  >
    {current} / {total}
  </div>
);

/** Black Horizontal Divider Line */
export const JevDivider: React.FC = () => (
  <div
    style={{
      width: "100%",
      height: 3,
      backgroundColor: "#1F2937",
      borderRadius: 2,
      marginTop: 8,
      marginBottom: 16,
    }}
  />
);

/** Hand-drawn Oval Tag */
export const OvalTag: React.FC<{ text: string; color?: string }> = ({ text, color = JEV_COLORS.redAccent }) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "2.5px solid #1F2937",
      borderRadius: "999px",
      padding: "6px 24px",
      backgroundColor: "#FFFFFF",
      fontSize: 24,
      fontWeight: 900,
      color,
      fontFamily: JEV_FONTS.heading,
      boxShadow: "2px 2px 0px #1F2937",
    }}
  >
    {text}
  </div>
);
