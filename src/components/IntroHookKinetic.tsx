import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

/* =========================================================================
   SKILL: remotion-intro-hook
   - ZERO BOXES / ZERO CARDS / ZERO CONTAINERS: Pure kinetic typography floating over raw video
   - SAFE CHEST POSITION: Y = 1060px (completely below chin & beard at Y=620px) - FACE 100% UNBLOCKED
   - MULTI-FONT PAIRING: JetBrains Mono (tech pill) + Impact (punch) + Georgia Italic (accent)
   - CONTRAST: heavyTextShadow + -webkit-text-stroke (2.5px) for maximum legibility
   - CONTINUOUS MICRO-WOBBLE: Math.sin(frame / 5) * 4deg on vector doodles
   ========================================================================= */

const heavyTextShadow = `
  0 4px 24px rgba(0, 0, 0, 0.98),
  0 8px 42px rgba(0, 0, 0, 0.95),
  0 0 35px rgba(0, 0, 0, 0.92),
  0 2px 6px rgba(0, 0, 0, 0.9)
`;

const strokeStyle: React.CSSProperties = {
  WebkitTextStroke: "2.5px rgba(0, 0, 0, 0.95)",
  paintOrder: "stroke fill",
  textShadow: heavyTextShadow,
};

// Handcrafted SVG: Aim Target Vector Doodle
const TargetDoodleSVG: React.FC<{ frame: number }> = ({ frame }) => {
  const wobble = Math.sin(frame / 4.5) * 4;
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 48 48"
      fill="none"
      style={{
        transform: `rotate(${wobble}deg)`,
        filter: "drop-shadow(0 6px 16px rgba(0, 0, 0, 0.95))",
      }}
    >
      <circle cx="24" cy="24" r="20" stroke="#FACC15" strokeWidth="4" />
      <circle cx="24" cy="24" r="12" stroke="#FFFFFF" strokeWidth="3" />
      <circle cx="24" cy="24" r="4" fill="#FACC15" />
      <line x1="24" y1="2" x2="24" y2="8" stroke="#FACC15" strokeWidth="4" strokeLinecap="round" />
      <line x1="24" y1="40" x2="24" y2="46" stroke="#FACC15" strokeWidth="4" strokeLinecap="round" />
      <line x1="2" y1="24" x2="8" y2="24" stroke="#FACC15" strokeWidth="4" strokeLinecap="round" />
      <line x1="40" y1="24" x2="46" y2="24" stroke="#FACC15" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
};

// Handcrafted SVG: Code Terminal Brackets Vector Doodle
const CodeBracketsSVG: React.FC<{ frame: number }> = ({ frame }) => {
  const wobble = Math.sin(frame / 5) * 5;
  return (
    <svg
      width="68"
      height="68"
      viewBox="0 0 48 48"
      fill="none"
      style={{
        transform: `rotate(${wobble}deg)`,
        filter: "drop-shadow(0 6px 16px rgba(0, 0, 0, 0.95))",
      }}
    >
      <path
        d="M16 12L6 24L16 36"
        stroke="#06B6D4"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 12L42 24L32 36"
        stroke="#06B6D4"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="28" y1="10" x2="20" y2="38" stroke="#FACC15" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
};

export const IntroHookKinetic: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active during opening hook (0s - 3.7s | frames 0 to 110)
  if (frame > 110) return null;

  // Phase 1: frames 0 - 54 (0.0s - 1.8s) -> "Haan bhai mere developers, 20-30 Lakh ki company ka sapna dekhte ho..."
  // Phase 2: frames 54 - 110 (1.8s - 3.7s) -> "to usse pehle kam se kam 10-12 Lakh ki company ka sawal to laga jao yaar!"
  const isPhase1 = frame >= 0 && frame < 54;
  const isPhase2 = frame >= 54 && frame <= 110;

  // Phase 1 Springs
  const sprBadgeP1 = spring({ frame, fps, config: { damping: 14, stiffness: 160 } });
  const sprTitleP1 = spring({ frame: frame - 6, fps, config: { damping: 12, stiffness: 140, mass: 0.8 } });
  const scaleP1 = interpolate(sprTitleP1, [0, 1], [0.8, 1]);

  // Phase 2 Springs
  const localP2 = frame - 54;
  const sprBadgeP2 = spring({ frame: localP2, fps, config: { damping: 14, stiffness: 160 } });
  const sprTitleP2 = spring({ frame: localP2 - 6, fps, config: { damping: 12, stiffness: 140, mass: 0.8 } });
  const scaleP2 = interpolate(sprTitleP2, [0, 1], [0.8, 1]);

  // Smooth exit fade before question setup begins
  const exitOpacity = frame > 100 ? interpolate(frame, [100, 110], [1, 0]) : 1;

  return (
    <div
      style={{
        position: "absolute",
        top: 1040, // Safely resting on chest, well below chin & beard (Y: 620)
        left: 0,
        width: 1080,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        zIndex: 55,
        opacity: exitOpacity,
      }}
    >
      {/* ============================================================== */}
      {/* PHASE 1: 0 - 54 frames (0.0s - 1.8s)                           */}
      {/* Spoken: "Haan bhai mere developers, 20-30 Lakh ki company..."   */}
      {/* ============================================================== */}
      {isPhase1 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Monospace Topic Pill (Pure Floating Typography, No Box) */}
          <div
            style={{
              opacity: sprBadgeP1,
              transform: `translateY(${(1 - sprBadgeP1) * -20}px)`,
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              fontSize: "26px",
              fontWeight: 900,
              letterSpacing: "4px",
              color: "#FACC15",
              textTransform: "uppercase",
              ...strokeStyle,
              marginBottom: "8px",
            }}
          >
            ✦ DREAM TECH PACKAGE ✦
          </div>

          {/* Clash Typography + Target SVG Doodle */}
          <div
            style={{
              opacity: Math.min(1, sprTitleP1 * 2),
              transform: `scale(${scaleP1})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <TargetDoodleSVG frame={frame} />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <span
                style={{
                  fontFamily: "'Impact', 'Arial Black', sans-serif",
                  fontSize: "68px",
                  fontWeight: 900,
                  color: "#FFFFFF",
                  letterSpacing: "1px",
                  lineHeight: 1.05,
                  ...strokeStyle,
                }}
              >
                20 - 30 LAKH KI
              </span>
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "44px",
                  fontWeight: 800,
                  color: "#FACC15",
                  letterSpacing: "0.5px",
                  lineHeight: 1.1,
                  ...strokeStyle,
                }}
              >
                Company Ka Sapna?
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* PHASE 2: 54 - 110 frames (1.8s - 3.7s)                         */}
      {/* Spoken: "to usse pehle kam se kam 10-12 Lakh ki company ka..."  */}
      {/* ============================================================== */}
      {isPhase2 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Monospace Tech Pill (Pure Floating Typography, No Box) */}
          <div
            style={{
              opacity: sprBadgeP2,
              transform: `translateY(${(1 - sprBadgeP2) * -20}px)`,
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              fontSize: "26px",
              fontWeight: 900,
              letterSpacing: "4px",
              color: "#06B6D4",
              textTransform: "uppercase",
              ...strokeStyle,
              marginBottom: "8px",
            }}
          >
            ✦ BENCHMARK CHALLENGE ✦
          </div>

          {/* Clash Typography + Code Brackets SVG Doodle */}
          <div
            style={{
              opacity: Math.min(1, sprTitleP2 * 2),
              transform: `scale(${scaleP2})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <CodeBracketsSVG frame={frame} />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <span
                style={{
                  fontFamily: "'Impact', 'Arial Black', sans-serif",
                  fontSize: "66px",
                  fontWeight: 900,
                  color: "#FFFFFF",
                  letterSpacing: "1px",
                  lineHeight: 1.05,
                  ...strokeStyle,
                }}
              >
                10-12 LAKH KA
              </span>
              <span
                style={{
                  fontFamily: "'Impact', 'Arial Black', sans-serif",
                  fontSize: "58px",
                  fontWeight: 900,
                  color: "#FACC15",
                  letterSpacing: "2px",
                  lineHeight: 1.05,
                  ...strokeStyle,
                }}
              >
                SAWAL TOH LAGAO!
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
