import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

interface SaveThisReelCTAProps {
  startFrame: number;
}

export const SaveThisReelCTA: React.FC<SaveThisReelCTAProps> = ({
  startFrame = 1695,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = frame - startFrame;

  if (localFrame < 0) return null;

  // Spring entrance
  const enterSpring = spring({
    frame: localFrame,
    fps,
    config: { damping: 15, stiffness: 120 },
  });

  const opacity = interpolate(enterSpring, [0, 1], [0, 1]);
  const translateY = interpolate(enterSpring, [0, 1], [35, 0]);
  const scale = interpolate(enterSpring, [0, 1], [0.88, 1]);

  // Bookmark fill & pop animation
  const bookmarkFillSpring = spring({
    frame: localFrame - 15,
    fps,
    config: { damping: 12, stiffness: 150 },
  });
  const bookmarkScale = interpolate(bookmarkFillSpring, [0, 1], [1, 1.25], {
    extrapolateRight: "clamp",
  });
  const isFilled = localFrame >= 18;

  // Glow pulse
  const pulse = Math.sin(localFrame * 0.15) * 0.15 + 0.85;

  return (
    <div
      style={{
        position: "absolute",
        bottom: 300,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: 46,
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          backgroundColor: "rgba(12, 16, 28, 0.92)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          padding: "16px 32px",
          borderRadius: 40,
          border: "2px solid rgba(255, 170, 0, 0.7)",
          boxShadow: `0 15px 45px rgba(0, 0, 0, 0.75), 0 0 ${35 * pulse}px rgba(255, 170, 0, ${0.4 * pulse})`,
        }}
      >
        {/* Animated Bookmark SVG */}
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: isFilled
              ? "linear-gradient(135deg, rgba(255, 170, 0, 0.4) 0%, rgba(255, 100, 0, 0.6) 100%)"
              : "rgba(255, 170, 0, 0.15)",
            border: "1.5px solid #FFAA00",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: isFilled ? "0 0 20px rgba(255, 170, 0, 0.6)" : "none",
            transform: `scale(${bookmarkScale})`,
            transition: "all 0.15s ease",
          }}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill={isFilled ? "#FFAA00" : "none"}
            stroke="#FFAA00"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
        </div>

        {/* Text */}
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                color: "#FFFFFF",
                fontSize: 28,
                fontWeight: 900,
                fontFamily: "'Inter', system-ui, sans-serif",
                letterSpacing: "-0.01em",
              }}
            >
              SAVE THIS REEL
            </span>
            <span style={{ fontSize: 24, lineHeight: 1 }}>🔥</span>
          </div>
          <span
            style={{
              color: "rgba(255, 170, 0, 0.9)",
              fontSize: 15,
              fontWeight: 700,
              fontFamily: "'Inter', system-ui, sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            Never forget JWT in interviews
          </span>
        </div>
      </div>
    </div>
  );
};
