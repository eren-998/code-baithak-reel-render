import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

/* =========================================================================
   AFTER EFFECTS-GRADE INTRO HOOK (SKILL 2: REMOTION-INTRO-HOOK)
   - ZERO BOXES / CONTAINERS: Pure kinetic typography floating over raw footage
   - POSITIONED BELOW HEAD: Y = 770px (under chin & beard at Y=700px)
   - ZERO SPOILERS: Does NOT reveal "PDF" early; builds suspense around "illegal use"
   - Handcrafted stroke-based SVG doodles (Warning Shield + Secret Key)
   - Multi-font pairing: JetBrains Mono (tech badge) + Inter 900 (clash punch)
   - Compact sizing: 42px - 48px, punchy, elegant, no screen crowding
   ========================================================================= */

const heavyTextShadow = `
  0 4px 18px rgba(0, 0, 0, 0.98),
  0 8px 32px rgba(0, 0, 0, 0.96),
  0 0 28px rgba(0, 0, 0, 0.9),
  0 2px 5px rgba(0, 0, 0, 0.9)
`;

const strokeStyle: React.CSSProperties = {
  WebkitTextStroke: "2px rgba(0, 0, 0, 0.95)",
  paintOrder: "stroke fill",
  textShadow: heavyTextShadow,
};

// Handcrafted SVG: Warning Shield Doodle (Stroke-based, round caps)
const WarningShieldSVG: React.FC<{ frame: number }> = ({ frame }) => {
  const wobble = Math.sin(frame / 4.5) * 4;
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 48 48"
      fill="none"
      style={{
        transform: `rotate(${wobble}deg)`,
        filter: "drop-shadow(0 4px 14px rgba(239, 68, 68, 0.75))",
      }}
    >
      <path
        d="M24 4L8 10V22C8 32 15 40 24 44C33 40 40 32 40 22V10L24 4Z"
        stroke="#EF4444"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(239, 68, 68, 0.15)"
      />
      <line x1="24" y1="16" x2="24" y2="26" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
      <circle cx="24" cy="32" r="2.5" fill="#FFE500" />
    </svg>
  );
};

// Handcrafted SVG: Secret Key / Lock Pick Doodle
const SecretKeySVG: React.FC<{ frame: number }> = ({ frame }) => {
  const wobble = Math.sin(frame / 5) * 5;
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 48 48"
      fill="none"
      style={{
        transform: `rotate(${wobble}deg)`,
        filter: "drop-shadow(0 4px 14px rgba(0, 240, 255, 0.75))",
      }}
    >
      <circle cx="16" cy="20" r="10" stroke="#FFE500" strokeWidth="4" />
      <path d="M23 27L40 44M33 37L39 31M37 41L43 35" stroke="#00F0FF" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
};

export const KineticHookTypography: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active during opening hook (0s - 3.7s | frames 0 to 110)
  if (frame > 112) return null;

  // Phase 1: 0 - 56 frames (0.0s - 1.86s) -> "Toh agar illegal tareeqe se use na karo"
  // Phase 2: 56 - 110 frames (1.86s - 3.7s) -> "toh ek bohot badhiya website batata hoon main tumhe"
  const isPhase1 = frame >= 0 && frame < 56;
  const isPhase2 = frame >= 56 && frame <= 112;

  // Phase 1 Springs
  const sprBadgeP1 = spring({ frame, fps, config: { damping: 14, stiffness: 160 } });
  const sprTitleP1 = spring({ frame: frame - 8, fps, config: { damping: 12, stiffness: 150, mass: 0.8 } });
  const scaleP1 = interpolate(sprTitleP1, [0, 1], [0.75, 1]);

  // Phase 2 Springs
  const localFrameP2 = frame - 56;
  const sprBadgeP2 = spring({ frame: localFrameP2, fps, config: { damping: 14, stiffness: 160 } });
  const sprTitleP2 = spring({ frame: localFrameP2 - 8, fps, config: { damping: 12, stiffness: 150, mass: 0.8 } });
  const scaleP2 = interpolate(sprTitleP2, [0, 1], [0.75, 1]);

  // Smooth exit transition
  const exitOpacity = frame > 102 ? interpolate(frame, [102, 112], [1, 0]) : 1;

  return (
    <div
      style={{
        position: "absolute",
        top: 1300, // Safely on chest, completely below chin & beard
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
      {/* PHASE 1: 0 - 56 frames (0.0s - 1.86s)                          */}
      {/* Spoken: "Toh agar illegal tareeqe se use na karo..."           */}
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
          {/* Monospace Tech Badge (No Box) */}
          <div
            style={{
              opacity: sprBadgeP1,
              transform: `translateY(${(1 - sprBadgeP1) * -14}px)`,
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              fontSize: "22px",
              fontWeight: 800,
              letterSpacing: "3px",
              color: "#EF4444",
              textTransform: "uppercase",
              ...strokeStyle,
              marginBottom: "6px",
            }}
          >
            ✦ STRICT WARNING ✦
          </div>

          {/* Headline + Warning Shield Doodle (No Box) */}
          <div
            style={{
              opacity: Math.min(1, sprTitleP1 * 2),
              transform: `scale(${scaleP1})`,
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <WarningShieldSVG frame={frame} />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <span
                style={{
                  fontFamily: "'Inter', 'Impact', sans-serif",
                  fontSize: "48px",
                  fontWeight: 900,
                  color: "#FFFFFF",
                  letterSpacing: "-0.5px",
                  lineHeight: 1.1,
                  ...strokeStyle,
                }}
              >
                DON'T USE THIS ILLEGALLY!
              </span>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "26px",
                  fontWeight: 800,
                  color: "#FFE500",
                  letterSpacing: "0.5px",
                  ...strokeStyle,
                }}
              >
                Galat Kaam Mein Use Mat Karna
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* PHASE 2: 56 - 112 frames (1.86s - 3.7s)                        */}
      {/* Spoken: "toh ek bohot badhiya website batata hoon main tumhe"   */}
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
          {/* Monospace Tech Badge (No Box) */}
          <div
            style={{
              opacity: sprBadgeP2,
              transform: `translateY(${(1 - sprBadgeP2) * -14}px)`,
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              fontSize: "22px",
              fontWeight: 800,
              letterSpacing: "3px",
              color: "#00F0FF",
              textTransform: "uppercase",
              ...strokeStyle,
              marginBottom: "6px",
            }}
          >
            ✦ SECRET WEBSITE ✦
          </div>

          {/* Headline + Secret Key Doodle (No Box) */}
          <div
            style={{
              opacity: Math.min(1, sprTitleP2 * 2),
              transform: `scale(${scaleP2})`,
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <SecretKeySVG frame={frame} />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <span
                style={{
                  fontFamily: "'Inter', 'Impact', sans-serif",
                  fontSize: "46px",
                  fontWeight: 900,
                  color: "#FFE500",
                  letterSpacing: "-0.5px",
                  lineHeight: 1.1,
                  ...strokeStyle,
                }}
              >
                BOHOT KAAM KI WEBSITE
              </span>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "26px",
                  fontWeight: 800,
                  color: "#00F0FF",
                  letterSpacing: "0.5px",
                  ...strokeStyle,
                }}
              >
                Emergency Ke Liye Save Kar Lo
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
