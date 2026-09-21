import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

/* =========================================================================
   WORD-BY-WORD HOOK TIMINGS (MAPPED TO EXACT AUDIO FRAMES)
   0 - 27 (0.00s - 0.92s): Bhai
   27 - 61 (0.92s - 2.06s): ye saari ki saari company
   61 - 74 (2.06s - 2.48s): hamara
   74 - 82 (2.48s - 2.74s): PAGAL
   82 - 93 (2.74s - 3.10s): bana rahi hai
   93 - 121 (3.10s - 4.06s): aur hum bane jaa rahe hain
   132 - 196 (4.42s - 6.56s): aankhein khol ke dekh nahi rahe ki ho kya raha hai
   213 - 235 (7.10s - 7.80s): dhyan se sun!
   ========================================================================= */

interface HookWord {
  text: string;
  startFrame: number;
  endFrame: number;
  color: string;
  fontSize: number;
  isPunch?: boolean;
}

const HOOK_WORDS_P1: HookWord[] = [
  { text: "BHAI", startFrame: 0, endFrame: 27, color: "#FFFFFF", fontSize: 60 },
  { text: "SAARI", startFrame: 27, endFrame: 44, color: "#FF3355", fontSize: 68 },
  { text: "COMPANIES", startFrame: 47, endFrame: 61, color: "#FF3355", fontSize: 72 },
  { text: "HAMARA", startFrame: 61, endFrame: 74, color: "#00F0FF", fontSize: 68 },
  { text: "PAGAL", startFrame: 74, endFrame: 84, color: "#FFE600", fontSize: 92, isPunch: true },
  { text: "BANA RAHI HAIN!", startFrame: 84, endFrame: 96, color: "#FFFFFF", fontSize: 70 },
];

export const KineticHookTypography: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active during hook: frames 0 to 240 (~8.0s)
  if (frame > 238) return null;

  // Phase divisions:
  // Phase 1: 0 - 96 (0s - 3.2s) -> "Bhai ye saari company hamara pagal bana rahi hai"
  // Phase 2: 96 - 132 (3.2s - 4.4s) -> "Hum bane jaa rahe hain!"
  // Phase 3: 132 - 205 (4.4s - 6.8s) -> "Aankhein khol ke dekh nahi rahe!"
  // Phase 4: 205 - 238 (6.8s - 7.9s) -> "Dhyan se sun!"

  const isPhase1 = frame >= 0 && frame < 96;
  const isPhase2 = frame >= 96 && frame < 132;
  const isPhase3 = frame >= 132 && frame < 205;
  const isPhase4 = frame >= 205 && frame <= 238;

  // Phase 2 springs
  const sprP2 = spring({ frame: frame - 96, fps, config: { damping: 10, stiffness: 220 } });
  
  // Phase 3 springs
  const sprP3 = spring({ frame: frame - 132, fps, config: { damping: 10, stiffness: 220 } });
  
  // Phase 4 spring (Dhyan se sun)
  const sprP4 = spring({ frame: frame - 213, fps, config: { damping: 8, stiffness: 260 } });

  // Floating ambient pulse
  const pulse = Math.sin(frame * 0.2) * 0.05 + 1;

  return (
    <>
      {/* Upper Floating AI Alert Chip (Strictly above head at Y: 180-320px) */}
      {isPhase1 && (() => {
        const chipEnter = spring({ frame, fps, config: { damping: 12, stiffness: 160 } });
        const chipScale = interpolate(chipEnter, [0, 1], [0.5, 1]);
        const chipOpacity = interpolate(chipEnter, [0, 1], [0, 1]);
        const radarPulse1 = (frame % 30) / 30;
        const radarPulse2 = ((frame + 15) % 30) / 30;
        return (
          <div
            style={{
              position: "absolute",
              top: 185,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              pointerEvents: "none",
              zIndex: 45,
              opacity: chipOpacity,
              transform: `scale(${chipScale})`,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                backgroundColor: "rgba(255, 30, 60, 0.12)",
                backdropFilter: "blur(16px)",
                border: "1.5px solid rgba(255, 51, 85, 0.5)",
                borderRadius: 50,
                padding: "10px 28px 10px 16px",
                boxShadow: "0 8px 30px rgba(255, 51, 85, 0.3)",
              }}
            >
              {/* Radar brain icon */}
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                {/* Radar pulse rings */}
                <circle cx="22" cy="22" r={8 + radarPulse1 * 14} stroke="#FF3355" strokeWidth="1.5" opacity={1 - radarPulse1} />
                <circle cx="22" cy="22" r={8 + radarPulse2 * 14} stroke="#FF3355" strokeWidth="1.5" opacity={1 - radarPulse2} />
                {/* Brain core */}
                <circle cx="22" cy="22" r="8" fill="rgba(255, 51, 85, 0.25)" stroke="#FF3355" strokeWidth="2" />
                <path d="M18 22 Q20 17 22 22 Q24 27 26 22" stroke="#FFE600" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
              {/* Label */}
              <span
                style={{
                  color: "#FF3355",
                  fontSize: 18,
                  fontWeight: 900,
                  letterSpacing: "0.15em",
                  fontFamily: "'Inter', system-ui, sans-serif",
                  textShadow: "0 2px 10px rgba(255, 51, 85, 0.6)",
                }}
              >
                ⚠ AI ALERT
              </span>
            </div>
          </div>
        );
      })()}

      {isPhase3 && (
        <div
          style={{
            position: "absolute",
            top: 200,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            pointerEvents: "none",
            zIndex: 45,
          }}
        >
          {/* Cyber Eye Vector Illustration */}
          <svg width="260" height="130" viewBox="0 0 260 130" fill="none">
            <path
              d="M30 65 Q130 10 230 65 Q130 120 30 65 Z"
              stroke="#00F0FF"
              strokeWidth="4"
              fill="rgba(0, 240, 255, 0.1)"
              filter="drop-shadow(0 0 16px #00F0FF)"
            />
            <circle cx="130" cy="65" r="32" stroke="#FFE600" strokeWidth="3" fill="rgba(255, 230, 0, 0.15)" />
            <circle cx="130" cy="65" r="14" fill="#00F0FF" filter="drop-shadow(0 0 12px #00F0FF)" />
          </svg>
        </div>
      )}

      {/* Main Kinetic Typography - POSITIONED STRICTLY ON CHEST (Y: 1040px)
          NEVER OVER FACE OR HEAD! Screen-safe width (max 920px), NO horizontal overflow! */}
      <div
        style={{
          position: "absolute",
          top: 1040,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          pointerEvents: "none",
          zIndex: 55,
          padding: "0 40px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: 920,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Phase 1: Word-by-Word Reveal */}
          {isPhase1 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                columnGap: "16px",
                rowGap: "10px",
                width: "100%",
              }}
            >
              {HOOK_WORDS_P1.map((w, i) => {
                // Show only if current frame >= word startFrame
                if (frame < w.startFrame) return null;

                const localWordFrame = frame - w.startFrame;
                const wordSpr = spring({
                  frame: localWordFrame,
                  fps,
                  config: { damping: w.isPunch ? 7 : 11, stiffness: w.isPunch ? 260 : 200 },
                });

                const scale = w.isPunch
                  ? interpolate(wordSpr, [0, 1], [0.6, 1.2]) * pulse
                  : interpolate(wordSpr, [0, 1], [0.8, 1]);

                const translateY = interpolate(wordSpr, [0, 1], [25, 0]);

                return (
                  <span
                    key={i}
                    style={{
                      display: "inline-block",
                      color: w.color,
                      fontSize: w.fontSize,
                      fontWeight: 900,
                      letterSpacing: "-0.03em",
                      fontFamily: "'Inter', system-ui, sans-serif",
                      textTransform: "uppercase",
                      transform: `translateY(${translateY}px) scale(${scale})`,
                      textShadow: w.isPunch
                        ? "0 10px 40px rgba(0,0,0,0.98), 0 0 45px rgba(255, 230, 0, 0.9)"
                        : "0 6px 30px rgba(0,0,0,0.95), 0 2px 8px rgba(0,0,0,0.9)",
                    }}
                  >
                    {w.text}
                  </span>
                );
              })}
            </div>
          )}

          {/* Phase 2: Hum Bane Jaa Rahe Hain */}
          {isPhase2 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                transform: `scale(${interpolate(sprP2, [0, 1], [0.75, 1])})`,
                opacity: interpolate(sprP2, [0, 1], [0, 1]),
              }}
            >
              <span
                style={{
                  color: "#94A3B8",
                  fontSize: 32,
                  fontWeight: 800,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  textShadow: "0 4px 20px rgba(0,0,0,0.9)",
                }}
              >
                AUR HUM
              </span>
              <span
                style={{
                  color: "#FF8800",
                  fontSize: 74,
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  textTransform: "uppercase",
                  fontFamily: "'Inter', system-ui, sans-serif",
                  textShadow: "0 8px 35px rgba(0,0,0,0.98), 0 0 35px rgba(255, 136, 0, 0.8)",
                }}
              >
                BANE JAA RAHE HAIN!
              </span>
            </div>
          )}

          {/* Phase 3: Aankhein Khol Ke Dekh */}
          {isPhase3 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                transform: `scale(${interpolate(sprP3, [0, 1], [0.7, 1.05]) * pulse})`,
                opacity: interpolate(sprP3, [0, 1], [0, 1]),
              }}
            >
              <span
                style={{
                  color: "#FFFFFF",
                  fontSize: 34,
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  textShadow: "0 4px 20px rgba(0,0,0,0.95)",
                }}
              >
                AANKHEIN KHOL KE DEKH
              </span>
              <span
                style={{
                  color: "#00F0FF",
                  fontSize: 78,
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  textTransform: "uppercase",
                  fontFamily: "'Inter', system-ui, sans-serif",
                  textShadow: "0 10px 40px rgba(0,0,0,0.98), 0 0 45px rgba(0, 240, 255, 0.9)",
                }}
              >
                HO KYA RAHA HAI!
              </span>
            </div>
          )}

          {/* Phase 4: Dhyan Se Sun! */}
          {isPhase4 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                transform: `scale(${interpolate(sprP4, [0, 1], [0.5, 1.15])}) rotate(-2deg)`,
                opacity: interpolate(sprP4, [0, 1], [0, 1]),
              }}
            >
              <span
                style={{
                  color: "#FF3355",
                  fontSize: 30,
                  fontWeight: 900,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  textShadow: "0 4px 20px rgba(0,0,0,0.95), 0 0 30px rgba(255, 51, 85, 0.9)",
                }}
              >
                ⚠️ LISTEN VERY CAREFULLY ⚠️
              </span>
              <span
                style={{
                  color: "#FFE600",
                  fontSize: 94,
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  textTransform: "uppercase",
                  fontFamily: "'Inter', system-ui, sans-serif",
                  textShadow: "0 12px 45px rgba(0,0,0,0.98), 0 0 50px rgba(255, 230, 0, 0.95)",
                }}
              >
                DHYAN SE SUN!
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
