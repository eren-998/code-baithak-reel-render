import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

/* =========================================================================
   GEN-Z STYLE EPISODE 17 OF 40 INTRO (Frames 278 - 465 | ~9.3s - 15.5s)
   No plain box! Free-floating kinetic typography, neon gradient & streak glow.
   ========================================================================= */
export const GenZEpisodeIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const start = 278;
  const duration = 185;
  const local = frame - start;

  if (local < 0 || local > duration) return null;

  // Spring entry with bounce
  const spr = spring({
    frame: local,
    fps,
    config: { damping: 12, stiffness: 120 },
  });

  // Exit animation
  const exitProgress = interpolate(
    local,
    [duration - 14, duration],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const translateY = interpolate(spr, [0, 1], [-40, 0]);
  const scale = interpolate(spr, [0, 1], [0.85, 1]);
  const opacity = spr * exitProgress;

  // Dynamic floating wobble
  const floatY = Math.sin(local * 0.1) * 4;
  const glowPulse = Math.sin(local * 0.15) * 0.2 + 0.8;

  // Progress animation (17 out of 40)
  const progressPercent = Math.min(100, (17 / 40) * 100);

  return (
    <div
      style={{
        position: "absolute",
        top: 90,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: 50,
        opacity,
        transform: `translateY(${translateY + floatY}px) scale(${scale})`,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          transform: "rotate(-1.5deg)",
        }}
      >
        {/* Top streak chip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "linear-gradient(90deg, rgba(255, 60, 0, 0.25) 0%, rgba(255, 170, 0, 0.3) 100%)",
            border: "1.5px solid rgba(255, 170, 0, 0.7)",
            borderRadius: 30,
            padding: "6px 18px",
            boxShadow: `0 0 ${20 * glowPulse}px rgba(255, 100, 0, 0.45)`,
          }}
        >
          <span style={{ fontSize: 16, lineHeight: 1 }}>🔥</span>
          <span
            style={{
              color: "#FFAA00",
              fontSize: 14,
              fontWeight: 900,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            DAILY TECH STREAK
          </span>
          <span
            style={{
              backgroundColor: "#FF5500",
              color: "#FFFFFF",
              fontSize: 13,
              fontWeight: 900,
              padding: "2px 8px",
              borderRadius: 12,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            17 / 40
          </span>
        </div>

        {/* Big Gen Z kinetic text - NO BOX, raw stylish typography */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
          <span
            style={{
              fontSize: 52,
              fontWeight: 950,
              fontFamily: "'Inter', system-ui, sans-serif",
              letterSpacing: "-0.03em",
              background: "linear-gradient(135deg, #00F0FF 0%, #A855F7 60%, #EC4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 10px 30px rgba(0, 240, 255, 0.3)",
              lineHeight: 1,
            }}
          >
            EPISODE 17
          </span>
        </div>

        {/* Series subtitle pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            backgroundColor: "rgba(10, 15, 26, 0.8)",
            backdropFilter: "blur(16px)",
            padding: "6px 16px",
            borderRadius: 20,
            border: "1px solid rgba(0, 240, 255, 0.3)",
          }}
        >
          <span
            style={{
              color: "#E2E8F0",
              fontSize: 16,
              fontWeight: 800,
              letterSpacing: "0.02em",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            40 Interview Questions in 40 Days
          </span>
        </div>

        {/* Mini progress bar */}
        <div
          style={{
            width: 240,
            height: 4,
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            borderRadius: 10,
            overflow: "hidden",
            marginTop: 2,
          }}
        >
          <div
            style={{
              width: `${progressPercent}%`,
              height: "100%",
              background: "linear-gradient(90deg, #00F0FF 0%, #A855F7 100%)",
              boxShadow: "0 0 10px #00F0FF",
            }}
          />
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   HOOK CARD — Frames 15 - 250 (~0.5s - 8.3s)
   "JWT = 3 Components 🔥" + Live token breakdown
   ========================================================================= */
export const JWTHookCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const start = 15;
  const duration = 235;
  const local = frame - start;

  if (local < 0 || local > duration) return null;

  const spr = spring({
    frame: local,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const exitProgress = interpolate(
    local,
    [duration - 14, duration],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const translateY = interpolate(spr, [0, 1], [-30, 0]);
  const scale = interpolate(spr, [0, 1], [0.88, 1]);
  const opacity = spr * exitProgress;
  const pulse = Math.sin(local * 0.12) * 0.15 + 0.85;

  return (
    <div
      style={{
        position: "absolute",
        top: 95,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: 48,
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: 880,
          backgroundColor: "rgba(10, 14, 26, 0.92)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          padding: "20px 28px",
          borderRadius: 36,
          border: "2px solid rgba(0, 240, 255, 0.65)",
          boxShadow: `0 20px 50px rgba(0, 0, 0, 0.75), 0 0 ${35 * pulse}px rgba(0, 240, 255, 0.35)`,
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        {/* Title Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(0, 240, 255, 0.3) 0%, rgba(168, 85, 247, 0.5) 100%)",
                border: "2px solid #00F0FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 16px rgba(0, 240, 255, 0.5)",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00F0FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
              </svg>
            </div>
            <span
              style={{
                color: "#FFFFFF",
                fontSize: 34,
                fontWeight: 900,
                letterSpacing: "-0.02em",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              JWT = 3 Components 🔥
            </span>
          </div>
          <span
            style={{
              backgroundColor: "rgba(0, 240, 255, 0.15)",
              color: "#00F0FF",
              fontSize: 13,
              fontWeight: 900,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "5px 12px",
              borderRadius: 14,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            AUTH ESSENTIAL
          </span>
        </div>

        {/* 3 Components Live Preview Pills */}
        <div style={{ display: "flex", gap: 10 }}>
          <div
            style={{
              flex: 1,
              backgroundColor: "rgba(244, 63, 94, 0.18)",
              border: "1.5px solid #F43F5E",
              borderRadius: 18,
              padding: "10px 14px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <span style={{ color: "#F43F5E", fontSize: 13, fontWeight: 900, letterSpacing: "0.1em" }}>01. HEADER</span>
            <span style={{ color: "#FFFFFF", fontSize: 18, fontWeight: 800 }}>Algorithm</span>
          </div>

          <div
            style={{
              flex: 1,
              backgroundColor: "rgba(168, 85, 247, 0.18)",
              border: "1.5px solid #A855F7",
              borderRadius: 18,
              padding: "10px 14px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <span style={{ color: "#A855F7", fontSize: 13, fontWeight: 900, letterSpacing: "0.1em" }}>02. PAYLOAD</span>
            <span style={{ color: "#FFFFFF", fontSize: 18, fontWeight: 800 }}>User Data</span>
          </div>

          <div
            style={{
              flex: 1,
              backgroundColor: "rgba(16, 185, 129, 0.18)",
              border: "1.5px solid #10B981",
              borderRadius: 18,
              padding: "10px 14px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <span style={{ color: "#10B981", fontSize: 13, fontWeight: 900, letterSpacing: "0.1em" }}>03. SIGNATURE</span>
            <span style={{ color: "#FFFFFF", fontSize: 18, fontWeight: 800 }}>Verify Hash</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   HEADER CARD — Frames 485 - 710 (~16.2s - 23.7s)
   "HEADER → HOW?" + First section highlight
   ========================================================================= */
export const HeaderCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const start = 485;
  const duration = 225;
  const local = frame - start;

  if (local < 0 || local > duration) return null;

  const spr = spring({ frame: local, fps, config: { damping: 14, stiffness: 120 } });
  const exitProgress = interpolate(local, [duration - 14, duration], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(spr, [0, 1], [-30, 0]);
  const scale = interpolate(spr, [0, 1], [0.88, 1]);
  const opacity = spr * exitProgress;

  return (
    <div
      style={{
        position: "absolute",
        top: 95,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: 48,
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: 890,
          backgroundColor: "rgba(8, 14, 28, 0.94)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          padding: "20px 28px",
          borderRadius: 36,
          border: "2px solid rgba(0, 240, 255, 0.7)",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 240, 255, 0.35)",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                backgroundColor: "#00F0FF",
                color: "#000000",
                fontSize: 14,
                fontWeight: 950,
                padding: "3px 10px",
                borderRadius: 10,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              1️⃣ COMPONENT
            </span>
            <span
              style={{
                color: "#FFFFFF",
                fontSize: 34,
                fontWeight: 900,
                letterSpacing: "-0.01em",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              HEADER → HOW?
            </span>
          </div>
          <span style={{ color: "#00F0FF", fontSize: 16, fontWeight: 800, fontFamily: "'Inter', sans-serif" }}>
            Signing Algorithm
          </span>
        </div>

        {/* Simulated JWT section highlight (Header highlighted) */}
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: 18,
            padding: "12px 18px",
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "monospace",
            fontSize: 18,
            overflow: "hidden",
          }}
        >
          <span
            style={{
              backgroundColor: "rgba(0, 240, 255, 0.3)",
              color: "#00F0FF",
              border: "1px solid #00F0FF",
              padding: "4px 10px",
              borderRadius: 8,
              fontWeight: 800,
            }}
          >
            eyJhbGciOiJIUzI1NiJ9
          </span>
          <span style={{ color: "rgba(255, 255, 255, 0.4)", fontWeight: 900 }}>.</span>
          <span style={{ color: "rgba(255, 255, 255, 0.35)" }}>payload</span>
          <span style={{ color: "rgba(255, 255, 255, 0.4)", fontWeight: 900 }}>.</span>
          <span style={{ color: "rgba(255, 255, 255, 0.35)" }}>signature</span>
        </div>

        {/* Explain text */}
        <span
          style={{
            color: "rgba(255, 255, 255, 0.85)",
            fontSize: 18,
            fontWeight: 700,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Token kaise sign hua — jaise <span style={{ color: "#00F0FF" }}>HS256 / RS256 algorithm</span>
        </span>
      </div>
    </div>
  );
};

/* =========================================================================
   PAYLOAD CARD — Frames 715 - 975 (~23.8s - 32.5s)
   "PAYLOAD → WHAT?" + Second section highlight
   ========================================================================= */
export const PayloadCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const start = 715;
  const duration = 260;
  const local = frame - start;

  if (local < 0 || local > duration) return null;

  const spr = spring({ frame: local, fps, config: { damping: 14, stiffness: 120 } });
  const exitProgress = interpolate(local, [duration - 14, duration], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(spr, [0, 1], [-30, 0]);
  const scale = interpolate(spr, [0, 1], [0.88, 1]);
  const opacity = spr * exitProgress;

  return (
    <div
      style={{
        position: "absolute",
        top: 95,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: 48,
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: 890,
          backgroundColor: "rgba(18, 14, 8, 0.94)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          padding: "20px 28px",
          borderRadius: 36,
          border: "2px solid rgba(255, 230, 0, 0.7)",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8), 0 0 35px rgba(255, 230, 0, 0.35)",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                backgroundColor: "#FFE600",
                color: "#000000",
                fontSize: 14,
                fontWeight: 950,
                padding: "3px 10px",
                borderRadius: 10,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              2️⃣ COMPONENT
            </span>
            <span
              style={{
                color: "#FFFFFF",
                fontSize: 34,
                fontWeight: 900,
                letterSpacing: "-0.01em",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              PAYLOAD → WHAT?
            </span>
          </div>
          <span style={{ color: "#FFE600", fontSize: 16, fontWeight: 800, fontFamily: "'Inter', sans-serif" }}>
            User Information
          </span>
        </div>

        {/* Simulated JWT section highlight (Payload highlighted) */}
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: 18,
            padding: "12px 18px",
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "monospace",
            fontSize: 18,
            overflow: "hidden",
          }}
        >
          <span style={{ color: "rgba(255, 255, 255, 0.35)" }}>header</span>
          <span style={{ color: "rgba(255, 255, 255, 0.4)", fontWeight: 900 }}>.</span>
          <span
            style={{
              backgroundColor: "rgba(255, 230, 0, 0.3)",
              color: "#FFE600",
              border: "1px solid #FFE600",
              padding: "4px 10px",
              borderRadius: 8,
              fontWeight: 800,
            }}
          >
            eyJzdWIiOiIxMjM0NTYiLCJyb2xlIjoiYWRtaW4ifQ
          </span>
          <span style={{ color: "rgba(255, 255, 255, 0.4)", fontWeight: 900 }}>.</span>
          <span style={{ color: "rgba(255, 255, 255, 0.35)" }}>signature</span>
        </div>

        {/* Explain text */}
        <span
          style={{
            color: "rgba(255, 255, 255, 0.85)",
            fontSize: 18,
            fontWeight: 700,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          User ID, Role aur Expiry data — <span style={{ color: "#FFE600" }}>Token create karne ke liye</span>
        </span>
      </div>
    </div>
  );
};

/* =========================================================================
   WARNING CARD — Frames 980 - 1230 (~32.6s - 41.0s)
   "❌ Passwords in JWT Payload — Encrypted nahi, encoded hota hai!"
   ========================================================================= */
export const PayloadWarningCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const start = 980;
  const duration = 250;
  const local = frame - start;

  if (local < 0 || local > duration) return null;

  const spr = spring({ frame: local, fps, config: { damping: 14, stiffness: 120 } });
  const exitProgress = interpolate(local, [duration - 14, duration], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(spr, [0, 1], [-30, 0]);
  const scale = interpolate(spr, [0, 1], [0.88, 1]);
  const opacity = spr * exitProgress;
  const alertPulse = Math.sin(local * 0.18) * 0.15 + 0.85;

  return (
    <div
      style={{
        position: "absolute",
        top: 95,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: 48,
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: 890,
          backgroundColor: "rgba(26, 8, 12, 0.95)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          padding: "20px 28px",
          borderRadius: 36,
          border: `2px solid rgba(244, 63, 94, ${0.6 + alertPulse * 0.3})`,
          boxShadow: `0 20px 50px rgba(0, 0, 0, 0.85), 0 0 ${40 * alertPulse}px rgba(244, 63, 94, 0.4)`,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {/* Warning header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 24 }}>⚠️</span>
            <span
              style={{
                color: "#F43F5E",
                fontSize: 30,
                fontWeight: 900,
                letterSpacing: "-0.01em",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              ENCODED ≠ ENCRYPTED
            </span>
          </div>
          <span
            style={{
              backgroundColor: "rgba(244, 63, 94, 0.2)",
              color: "#F43F5E",
              fontSize: 13,
              fontWeight: 900,
              padding: "4px 12px",
              borderRadius: 12,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            CRITICAL RULE
          </span>
        </div>

        {/* Big Rule Callout */}
        <div
          style={{
            backgroundColor: "rgba(244, 63, 94, 0.15)",
            border: "1.5px solid #F43F5E",
            borderRadius: 20,
            padding: "12px 20px",
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <span style={{ fontSize: 28 }}>❌</span>
          <span
            style={{
              color: "#FFFFFF",
              fontSize: 26,
              fontWeight: 900,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Passwords in JWT Payload
          </span>
        </div>

        {/* Note */}
        <span
          style={{
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: 17,
            fontWeight: 700,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Payload sirf Base64 encoded hai — koi bhi <span style={{ color: "#F43F5E" }}>jwt.io</span> par decode kar sakta hai!
        </span>
      </div>
    </div>
  );
};

/* =========================================================================
   SIGNATURE CARD — Frames 1235 - 1475 (~41.2s - 49.2s)
   "SIGNATURE → AUTHENTIC? 🔐" + Third section highlight
   ========================================================================= */
export const SignatureCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const start = 1235;
  const duration = 240;
  const local = frame - start;

  if (local < 0 || local > duration) return null;

  const spr = spring({ frame: local, fps, config: { damping: 14, stiffness: 120 } });
  const exitProgress = interpolate(local, [duration - 14, duration], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(spr, [0, 1], [-30, 0]);
  const scale = interpolate(spr, [0, 1], [0.88, 1]);
  const opacity = spr * exitProgress;

  return (
    <div
      style={{
        position: "absolute",
        top: 95,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: 48,
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: 890,
          backgroundColor: "rgba(6, 20, 14, 0.94)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          padding: "20px 28px",
          borderRadius: 36,
          border: "2px solid rgba(16, 185, 129, 0.7)",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8), 0 0 35px rgba(16, 185, 129, 0.35)",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                backgroundColor: "#10B981",
                color: "#000000",
                fontSize: 14,
                fontWeight: 950,
                padding: "3px 10px",
                borderRadius: 10,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              3️⃣ COMPONENT
            </span>
            <span
              style={{
                color: "#FFFFFF",
                fontSize: 34,
                fontWeight: 900,
                letterSpacing: "-0.01em",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              SIGNATURE → AUTHENTIC? 🔐
            </span>
          </div>
          <span style={{ color: "#10B981", fontSize: 16, fontWeight: 800, fontFamily: "'Inter', sans-serif" }}>
            Verify Integrity
          </span>
        </div>

        {/* Simulated JWT section highlight (Signature highlighted) */}
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: 18,
            padding: "12px 18px",
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "monospace",
            fontSize: 18,
            overflow: "hidden",
          }}
        >
          <span style={{ color: "rgba(255, 255, 255, 0.35)" }}>header</span>
          <span style={{ color: "rgba(255, 255, 255, 0.4)", fontWeight: 900 }}>.</span>
          <span style={{ color: "rgba(255, 255, 255, 0.35)" }}>payload</span>
          <span style={{ color: "rgba(255, 255, 255, 0.4)", fontWeight: 900 }}>.</span>
          <span
            style={{
              backgroundColor: "rgba(16, 185, 129, 0.3)",
              color: "#10B981",
              border: "1px solid #10B981",
              padding: "4px 10px",
              borderRadius: 8,
              fontWeight: 800,
            }}
          >
            SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
          </span>
        </div>

        {/* Explain text */}
        <span
          style={{
            color: "rgba(255, 255, 255, 0.85)",
            fontSize: 18,
            fontWeight: 700,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Token ke saath kisi ne chhed-chaad toh nahi ki — <span style={{ color: "#10B981" }}>Tamper verification</span>
        </span>
      </div>
    </div>
  );
};

/* =========================================================================
   RECAP DIAGRAM — Frames 1475 - 1695 (~49.2s - 56.5s)
   Fast cuts: HEADER → HOW | PAYLOAD → WHAT | SIGNATURE → VERIFY
   ========================================================================= */
export const RecapDiagramCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const start = 1475;
  const duration = 220;
  const local = frame - start;

  if (local < 0 || local > duration) return null;

  const spr = spring({ frame: local, fps, config: { damping: 14, stiffness: 120 } });
  const exitProgress = interpolate(local, [duration - 14, duration], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(spr, [0, 1], [-30, 0]);
  const scale = interpolate(spr, [0, 1], [0.88, 1]);
  const opacity = spr * exitProgress;

  const items = [
    { label: "HEADER", arrow: "→", meaning: "HOW", sub: "Algorithm", color: "#00F0FF", trigger: 0 },
    { label: "PAYLOAD", arrow: "→", meaning: "WHAT", sub: "User Data", color: "#FFE600", trigger: 35 },
    { label: "SIGNATURE", arrow: "→", meaning: "VERIFY", sub: "Valid or Not?", color: "#10B981", trigger: 75 },
  ];

  return (
    <div
      style={{
        position: "absolute",
        top: 90,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: 48,
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: 900,
          backgroundColor: "rgba(10, 14, 26, 0.95)",
          backdropFilter: "blur(32px)",
          WebkitBackdropFilter: "blur(32px)",
          padding: "20px 28px",
          borderRadius: 36,
          border: "2px solid rgba(168, 85, 247, 0.6)",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.85), 0 0 40px rgba(168, 85, 247, 0.3)",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {/* Title */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span
            style={{
              color: "#FFFFFF",
              fontSize: 28,
              fontWeight: 900,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            TOH YAAD RAKHO ⚡
          </span>
          <span
            style={{
              backgroundColor: "rgba(168, 85, 247, 0.2)",
              color: "#A855F7",
              fontSize: 13,
              fontWeight: 900,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "4px 12px",
              borderRadius: 12,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            QUICK RECAP
          </span>
        </div>

        {/* 3 Rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {items.map((it, idx) => {
            const rowLocal = local - it.trigger;
            const isRevealed = rowLocal >= 0;
            const rowSpr = isRevealed
              ? spring({ frame: rowLocal, fps, config: { damping: 14, stiffness: 140 } })
              : 0;

            return (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: isRevealed ? `${it.color}15` : "rgba(255, 255, 255, 0.04)",
                  border: `1.5px solid ${isRevealed ? it.color : "rgba(255, 255, 255, 0.1)"}`,
                  borderRadius: 20,
                  padding: "12px 20px",
                  opacity: isRevealed ? rowSpr : 0.3,
                  transform: `translateX(${isRevealed ? interpolate(rowSpr, [0, 1], [-20, 0]) : -20}px)`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontSize: 24,
                      fontWeight: 900,
                      fontFamily: "'Inter', sans-serif",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {it.label}
                  </span>
                  <span style={{ color: it.color, fontSize: 22, fontWeight: 900 }}>
                    {it.arrow}
                  </span>
                  <span
                    style={{
                      color: it.color,
                      fontSize: 26,
                      fontWeight: 950,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {it.meaning}
                  </span>
                </div>
                <span
                  style={{
                    color: "rgba(255, 255, 255, 0.7)",
                    fontSize: 16,
                    fontWeight: 700,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {it.sub}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
