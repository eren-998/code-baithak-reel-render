import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

export const StartingHookCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active during opening hook (0s - 3.7s | frames 0 to 110)
  if (frame > 110) return null;

  const isPhase1 = frame < 52;
  const isPhase2 = frame >= 52;

  // Phase 1 entrance spring (frames 0 to 25)
  const spr1 = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 140 },
  });
  const opacity1 = interpolate(spr1, [0, 1], [0, 1]);
  const translateY1 = interpolate(spr1, [0, 1], [25, 0]);
  const scale1 = interpolate(spr1, [0, 1], [0.92, 1]);

  // Phase 2 transition spring (frames 52 to 75)
  const spr2 = spring({
    frame: frame - 52,
    fps,
    config: { damping: 14, stiffness: 160 },
  });
  const opacity2 = interpolate(spr2, [0, 1], [0, 1]);
  const translateY2 = interpolate(spr2, [0, 1], [20, 0]);
  const scale2 = interpolate(spr2, [0, 1], [0.94, 1]);

  // Smooth exit fade (frames 98 to 110)
  const exitOpacity = frame > 98 ? interpolate(frame, [98, 110], [1, 0]) : 1;

  return (
    <div
      style={{
        position: "absolute",
        top: 1120, // Safely on chest, completely below beard and face
        left: 0,
        width: 1080,
        display: "flex",
        justifyContent: "center",
        zIndex: 50,
        opacity: exitOpacity,
        pointerEvents: "none",
      }}
    >
      {isPhase1 && (
        <div
          style={{
            opacity: opacity1,
            transform: `translateY(${translateY1}px) scale(${scale1})`,
            display: "flex",
            alignItems: "center",
            gap: 18,
            backgroundColor: "rgba(10, 15, 26, 0.92)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            padding: "16px 32px",
            borderRadius: 36,
            border: "1.5px solid rgba(255, 215, 0, 0.35)",
            boxShadow:
              "0 16px 45px rgba(0, 0, 0, 0.8), 0 0 35px rgba(255, 229, 0, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.25)",
            maxWidth: 820,
          }}
        >
          {/* Target/Aim SVG Icon */}
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: "50%",
              background: "rgba(255, 229, 0, 0.15)",
              border: "1.5px solid #FFE500",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: "0 0 20px rgba(255, 229, 0, 0.4)",
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFE500"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" fill="#FFE500" />
              <line x1="12" y1="2" x2="12" y2="4" />
              <line x1="12" y1="20" x2="12" y2="22" />
              <line x1="2" y1="12" x2="4" y2="12" />
              <line x1="20" y1="12" x2="22" y2="12" />
            </svg>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <span
              style={{
                color: "#FFE500",
                fontSize: 14,
                fontWeight: 900,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              ✦ DREAM PRODUCT COMPANY ✦
            </span>
            <span
              style={{
                color: "#FFFFFF",
                fontSize: 34,
                fontWeight: 900,
                letterSpacing: "-0.02em",
                fontFamily: "'Inter', system-ui, sans-serif",
                lineHeight: 1.15,
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.8)",
              }}
            >
              ₹20 - 30 LPA Package?
            </span>
            <span
              style={{
                color: "rgba(255, 255, 255, 0.75)",
                fontSize: 18,
                fontWeight: 600,
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
            >
              Sapna Dekhne Se Pehle Ye Solve Karo
            </span>
          </div>
        </div>
      )}

      {isPhase2 && (
        <div
          style={{
            opacity: opacity2,
            transform: `translateY(${translateY2}px) scale(${scale2})`,
            display: "flex",
            alignItems: "center",
            gap: 18,
            backgroundColor: "rgba(10, 15, 26, 0.92)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            padding: "16px 32px",
            borderRadius: 36,
            border: "1.5px solid rgba(0, 240, 255, 0.4)",
            boxShadow:
              "0 16px 45px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 240, 255, 0.25), inset 0 1px 2px rgba(255, 255, 255, 0.25)",
            maxWidth: 820,
          }}
        >
          {/* Code Terminal SVG Icon */}
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: "50%",
              background: "rgba(0, 240, 255, 0.15)",
              border: "1.5px solid #00F0FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: "0 0 20px rgba(0, 240, 255, 0.4)",
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00F0FF"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
              <line x1="14" y1="4" x2="10" y2="20" />
            </svg>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <span
              style={{
                color: "#00F0FF",
                fontSize: 14,
                fontWeight: 900,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              ✦ BENCHMARK QUESTION ✦
            </span>
            <span
              style={{
                color: "#FFFFFF",
                fontSize: 32,
                fontWeight: 900,
                letterSpacing: "-0.02em",
                fontFamily: "'Inter', system-ui, sans-serif",
                lineHeight: 1.15,
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.8)",
              }}
            >
              10-12 LPA Ka Sawal To Lagao!
            </span>
            <span
              style={{
                color: "rgba(255, 255, 255, 0.75)",
                fontSize: 18,
                fontWeight: 600,
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
            >
              Tricky JavaScript Output Challenge
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
