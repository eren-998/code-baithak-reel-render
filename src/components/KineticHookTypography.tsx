import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

/* =========================================================================
   REMOTION INTRO HOOK (SKILL 2 IMPLEMENTATION)
   Zero dark box containers - Text & doodles float directly over footage
   Positioned strictly in upper ceiling area (Y: 70px - 250px)
   ABOVE head (Hair starts at Y: 320px) -> ZERO OVERLAP WITH HEAD
   ========================================================================= */

const heavyTextShadow = `
  0 4px 20px rgba(0, 0, 0, 0.98),
  0 8px 36px rgba(0, 0, 0, 0.95),
  0 0 30px rgba(0, 0, 0, 0.9),
  0 2px 6px rgba(0, 0, 0, 0.9)
`;

const strokeStyle: React.CSSProperties = {
  WebkitTextStroke: "2.5px rgba(0, 0, 0, 0.95)",
  paintOrder: "stroke fill",
  textShadow: heavyTextShadow,
};

// Clean stroke-based SVG Code Brackets Doodle
const CodeBracketsDoodle: React.FC<{ frame: number }> = ({ frame }) => {
  const wobble = Math.sin(frame / 4) * 4;
  return (
    <svg
      width="54"
      height="44"
      viewBox="0 0 60 48"
      fill="none"
      style={{
        transform: `rotate(${wobble}deg)`,
        filter: "drop-shadow(0 4px 12px rgba(0, 240, 255, 0.7))",
      }}
    >
      <path
        d="M20 10L6 24L20 38"
        stroke="#00F0FF"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 10L54 24L40 38"
        stroke="#00F0FF"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 8L26 40"
        stroke="#FFE600"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
};

// Game Controller Vector Doodle (Zero generic emojis)
const GamepadDoodle: React.FC<{ frame: number }> = ({ frame }) => {
  const wobble = Math.sin(frame / 5) * 5;
  return (
    <svg
      width="54"
      height="44"
      viewBox="0 0 64 48"
      fill="none"
      style={{
        transform: `rotate(${wobble}deg)`,
        filter: "drop-shadow(0 4px 14px rgba(255, 230, 0, 0.8))",
      }}
    >
      <rect
        x="6"
        y="12"
        width="52"
        height="28"
        rx="14"
        stroke="#FFE600"
        strokeWidth="5"
        fill="rgba(20, 20, 20, 0.6)"
      />
      {/* D-pad */}
      <path d="M18 20V32M12 26H24" stroke="#00F0FF" strokeWidth="4" strokeLinecap="round" />
      {/* Buttons */}
      <circle cx="44" cy="22" r="3" fill="#FF3366" />
      <circle cx="50" cy="28" r="3" fill="#00F0FF" />
    </svg>
  );
};

export const KineticHookTypography: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active during opening hook (0s - 3.7s, frames 0 to 110)
  if (frame > 112) return null;

  // Phase 1: 0 - 52 frames (0.0s - 1.7s) -> "So this website teaches you"
  // Phase 2: 52 - 110 frames (1.7s - 3.7s) -> "how to code as simple as a game"
  const isPhase1 = frame >= 0 && frame < 52;
  const isPhase2 = frame >= 52 && frame <= 112;

  // Spring animations for Phase 1
  const sprBadgeP1 = spring({ frame, fps, config: { damping: 14, stiffness: 160 } });
  const sprTitleP1 = spring({ frame: frame - 10, fps, config: { damping: 12, stiffness: 140, mass: 0.8 } });
  const scaleP1 = interpolate(sprTitleP1, [0, 1], [0.6, 1]);

  // Spring animations for Phase 2
  const localFrameP2 = frame - 52;
  const sprBadgeP2 = spring({ frame: localFrameP2, fps, config: { damping: 14, stiffness: 160 } });
  const sprTitleP2 = spring({ frame: localFrameP2 - 8, fps, config: { damping: 11, stiffness: 150, mass: 0.8 } });
  const scaleP2 = interpolate(sprTitleP2, [0, 1], [0.65, 1]);

  // Smooth exit fade at the end of hook
  const exitOpacity = frame > 102 ? interpolate(frame, [102, 112], [1, 0]) : 1;

  return (
    <div
      style={{
        position: "absolute",
        top: 75,
        left: 0,
        width: 1080,
        height: 220,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        pointerEvents: "none",
        zIndex: 55,
        opacity: exitOpacity,
      }}
    >
      {/* ============================================================== */}
      {/* PHASE 1: 0 - 52 frames (0.0s - 1.7s)                           */}
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
          {/* Monospace Topic Pill */}
          <div
            style={{
              opacity: sprBadgeP1,
              transform: `translateY(${(1 - sprBadgeP1) * -20}px)`,
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              fontSize: "26px",
              fontWeight: 800,
              letterSpacing: "4px",
              color: "#FFE600",
              textTransform: "uppercase",
              ...strokeStyle,
              marginBottom: "8px",
            }}
          >
            ✦ LEARN TO CODE ✦
          </div>

          {/* Clash Typography: LEARN CODING + Vector Doodle */}
          <div
            style={{
              opacity: Math.min(1, sprTitleP1 * 2),
              transform: `scale(${scaleP1})`,
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <CodeBracketsDoodle frame={frame} />
            <span
              style={{
                fontFamily: "'Inter', 'Impact', sans-serif",
                fontSize: "66px",
                fontWeight: 900,
                color: "#FFFFFF",
                letterSpacing: "-1px",
                ...strokeStyle,
              }}
            >
              SECRET CODING TOOL
            </span>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* PHASE 2: 52 - 112 frames (1.7s - 3.7s)                         */}
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
          {/* Monospace Topic Pill */}
          <div
            style={{
              opacity: sprBadgeP2,
              transform: `translateY(${(1 - sprBadgeP2) * -20}px)`,
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              fontSize: "26px",
              fontWeight: 800,
              letterSpacing: "4px",
              color: "#00F0FF",
              textTransform: "uppercase",
              ...strokeStyle,
              marginBottom: "8px",
            }}
          >
            ✦ GAMIFIED LEARNING ✦
          </div>

          {/* Clash Punchline: LIKE PLAYING A GAME + Gamepad Doodle */}
          <div
            style={{
              opacity: Math.min(1, sprTitleP2 * 2),
              transform: `scale(${scaleP2})`,
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <GamepadDoodle frame={frame} />
            <span
              style={{
                fontFamily: "'Inter', 'Impact', sans-serif",
                fontSize: "64px",
                fontWeight: 900,
                color: "#FFE600",
                letterSpacing: "-1px",
                ...strokeStyle,
              }}
            >
              AS SIMPLE AS A GAME!
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
