import React, { CSSProperties } from "react";
import { COLORS, FONTS, meshGlowStyle } from "./styles";

/** Brand Badge — Modern Glossy Pill */
export const BrandBadgeLight: React.FC = () => (
  <div
    style={{
      position: "absolute",
      top: 40,
      right: 44,
      display: "flex",
      alignItems: "center",
      gap: 12,
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      border: "1px solid rgba(226, 232, 240, 0.9)",
      borderRadius: 999,
      padding: "8px 18px 8px 10px",
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.06), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
      zIndex: 20,
      backdropFilter: "blur(12px)",
    }}
  >
    <div
      style={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.purple})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 14,
        fontWeight: 900,
        color: COLORS.white,
        fontFamily: FONTS.mono,
        boxShadow: `0 4px 12px ${COLORS.primaryLight}66`,
      }}
    >
      {"</>"}
    </div>
    <div>
      <div
        style={{
          fontSize: 15,
          fontWeight: 800,
          color: COLORS.textHeading,
          letterSpacing: -0.3,
          lineHeight: 1.15,
        }}
      >
        Code Baithak
      </div>
      <div
        style={{
          fontSize: 11,
          color: COLORS.primary,
          fontWeight: 700,
          letterSpacing: 0.2,
        }}
      >
        @code_baithak
      </div>
    </div>
  </div>
);

/** Slide Counter Badge */
export const SlideCounterLight: React.FC<{ current: number; total: number }> = ({
  current,
  total,
}) => (
  <div
    style={{
      position: "absolute",
      bottom: 36,
      right: 44,
      fontSize: 15,
      fontWeight: 800,
      color: COLORS.textMuted,
      fontFamily: FONTS.mono,
      backgroundColor: "rgba(255, 255, 255, 0.85)",
      border: `1px solid ${COLORS.borderLight}`,
      borderRadius: 20,
      padding: "6px 14px",
      letterSpacing: 1,
      boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
      zIndex: 10,
    }}
  >
    <span style={{ color: COLORS.primary, fontWeight: 900 }}>{current}</span> / {total}
  </div>
);

/** Frosted Glass Card */
export const GlassCard: React.FC<{
  children: React.ReactNode;
  style?: CSSProperties;
  borderColor?: string;
}> = ({ children, style, borderColor = "rgba(255, 255, 255, 0.9)" }) => (
  <div
    style={{
      backgroundColor: "rgba(255, 255, 255, 0.88)",
      backdropFilter: "blur(20px)",
      border: `1.5px solid ${borderColor}`,
      borderRadius: 24,
      boxShadow: "0 20px 35px -10px rgba(15, 23, 42, 0.08), 0 4px 12px rgba(0, 0, 0, 0.03)",
      ...style,
    }}
  >
    {children}
  </div>
);

/** 3D Mechanical Keyboard Keycap */
export const TactileKey: React.FC<{ text: string }> = ({ text }) => (
  <div
    style={{
      background: "linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%)",
      border: "1.5px solid #CBD5E1",
      borderBottom: "3.5px solid #94A3B8",
      borderRadius: 10,
      padding: "8px 16px",
      fontSize: 18,
      fontWeight: 800,
      color: COLORS.textHeading,
      fontFamily: FONTS.mono,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.06)",
      minWidth: 44,
    }}
  >
    {text}
  </div>
);

/** Keyboard Combo */
export const KeyboardShortcutLight: React.FC<{ keys: string[] }> = ({ keys }) => (
  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
    {keys.map((key, i) => (
      <React.Fragment key={i}>
        <TactileKey text={key} />
        {i < keys.length - 1 && (
          <span style={{ color: COLORS.textMuted, fontSize: 18, fontWeight: 800 }}>+</span>
        )}
      </React.Fragment>
    ))}
  </div>
);

/** Vibrant Tag Sticker */
export const StickerTag: React.FC<{
  text: string;
  icon?: React.ReactNode;
  bg?: string;
  textColor?: string;
  borderColor?: string;
  rotate?: number;
}> = ({
  text,
  icon,
  bg = COLORS.primaryBg,
  textColor = COLORS.primary,
  borderColor = COLORS.primaryLight,
  rotate = 0,
}) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      backgroundColor: bg,
      border: `1.5px solid ${borderColor}`,
      borderRadius: 999,
      padding: "8px 18px",
      fontSize: 14,
      fontWeight: 800,
      color: textColor,
      letterSpacing: 1.2,
      textTransform: "uppercase",
      transform: `rotate(${rotate}deg)`,
      boxShadow: "0 6px 16px -2px rgba(0,0,0,0.05)",
    }}
  >
    {icon}
    <span>{text}</span>
  </div>
);

/** Dot Matrix Pattern Overlay */
export const DotGrid: React.FC<{
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
}> = ({ top, right, bottom, left }) => (
  <div
    style={{
      position: "absolute",
      top,
      right,
      bottom,
      left,
      width: 160,
      height: 160,
      backgroundImage: `radial-gradient(${COLORS.borderMedium} 1.5px, transparent 1.5px)`,
      backgroundSize: "16px 16px",
      opacity: 0.6,
      pointerEvents: "none",
      zIndex: 0,
    }}
  />
);
