import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

/* =========================================================================
   SIMPLE & MINIMAL MOTION ESSENCE + STRONG HOOK TYPOGRAPHY + TEMPORARY GITHUB OVERLAY
   + KINETIC COMMENT "REA" CTA in the exact same Left Motion-Graphics Zone (left: 68px)
   ========================================================================= */

const heavyTextShadow = `
  0 4px 20px rgba(0, 0, 0, 0.96),
  0 8px 34px rgba(0, 0, 0, 0.92),
  0 2px 6px rgba(0, 0, 0, 0.95)
`;

const strokeStyle: React.CSSProperties = {
  WebkitTextStroke: "2.2px rgba(0, 0, 0, 0.95)",
  paintOrder: "stroke fill",
  textShadow: heavyTextShadow,
};

const subStrokeStyle: React.CSSProperties = {
  WebkitTextStroke: "1.4px rgba(0, 0, 0, 0.95)",
  paintOrder: "stroke fill",
  textShadow: heavyTextShadow,
};

const CUT_FRAMES = [77, 150, 291, 368, 480, 535, 669, 750, 792];

const TELEMETRY_STEPS = [
  { start: 0, end: 77, code: "HOOK // 01", label: "RIA VS GITHUB REA", color: "#FACC15" },
  { start: 77, end: 247, code: "REPO // 02", label: "GITHUB: MORLUTO/REA", color: "#00F0FF" },
  { start: 247, end: 291, code: "WHY // 03", label: "THE REAL ADVANTAGE", color: "#22C55E" },
  { start: 291, end: 480, code: "CASE // 04", label: "ADOBE SUITE ➔ FREE", color: "#FACC15" },
  { start: 480, end: 535, code: "TOOL // 05", label: "POWERED BY REA", color: "#00F0FF" },
  { start: 535, end: 669, code: "SKILL // 06", label: "REVERSE ENGINEERING", color: "#A855F7" },
  { start: 669, end: 792, code: "CTA // 07", label: "COMMENT 'REA' FOR LINK", color: "#22C55E" },
  { start: 792, end: 876, code: "OUTRO // 08", label: "@CODE_BAITHAK", color: "#0095F6" },
];

const GitHubOctocatSVG: React.FC<{ size?: number; color?: string }> = ({
  size = 28,
  color = "#24292f",
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35 0.5 12 0.5Z" />
  </svg>
);

/* =========================================================================
   1. MINIMAL MOTION ESSENCE (Top-Left Reticle, Telemetry & Cut Shockwave)
   ========================================================================= */
export const MinimalMotionEssence: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const activeStep =
    TELEMETRY_STEPS.find((s) => frame >= s.start && frame < s.end) ||
    TELEMETRY_STEPS[TELEMETRY_STEPS.length - 1];

  const stepLocal = frame - activeStep.start;
  const stepSpr = spring({
    frame: stepLocal,
    fps,
    config: { damping: 14, stiffness: 170 },
  });

  const activeCutFrame = CUT_FRAMES.find(
    (c) => frame >= c && frame < c + 10
  );
  const cutDelta = activeCutFrame !== undefined ? frame - activeCutFrame : -1;

  const reelProgress = interpolate(frame, [0, 876], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 44,
        overflow: "hidden",
      }}
    >
      {/* Top-Left Rotating Reticle & Minimal Telemetry */}
      <div
        style={{
          position: "absolute",
          top: 38,
          left: 48,
          display: "flex",
          alignItems: "center",
          gap: 14,
          transform: `translateX(${(1 - stepSpr) * -20}px)`,
          opacity: Math.min(1, stepSpr * 1.4),
        }}
      >
        <svg
          width="56"
          height="56"
          viewBox="0 0 68 68"
          fill="none"
          style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.9))" }}
        >
          <circle
            cx="34"
            cy="34"
            r="28"
            fill="rgba(8, 12, 22, 0.82)"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="2"
          />
          <g
            style={{
              transform: `rotate(${frame * 2.2}deg)`,
              transformOrigin: "34px 34px",
            }}
          >
            <circle
              cx="34"
              cy="34"
              r="23"
              stroke={activeStep.color}
              strokeWidth="3"
              strokeDasharray="12 8"
            />
          </g>
          <circle
            cx="34"
            cy="34"
            r="16"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeDasharray={100}
            strokeDashoffset={100 * (1 - reelProgress)}
            transform="rotate(-90 34 34)"
            strokeLinecap="round"
          />
          <circle cx="34" cy="34" r="4.5" fill={activeStep.color} />
        </svg>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 15,
              fontWeight: 900,
              letterSpacing: "2.5px",
              color: activeStep.color,
              ...subStrokeStyle,
            }}
          >
            {activeStep.code}
          </span>
          <span
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 19,
              fontWeight: 900,
              letterSpacing: "0.6px",
              color: "#FFFFFF",
              ...subStrokeStyle,
            }}
          >
            {activeStep.label}
          </span>
        </div>
      </div>

      {/* Subtle Cut-Point Shockwave Ring */}
      {cutDelta >= 0 && (
        <svg
          width="1920"
          height="1080"
          viewBox="0 0 1920 1080"
          fill="none"
          style={{ position: "absolute", inset: 0 }}
        >
          <g transform="translate(460, 520)">
            <circle
              cx="0"
              cy="0"
              r={interpolate(cutDelta, [0, 9], [30, 320])}
              stroke={activeStep.color}
              strokeWidth={interpolate(cutDelta, [0, 9], [6, 0.8])}
              opacity={interpolate(cutDelta, [0, 9], [0.75, 0])}
            />
          </g>
        </svg>
      )}
    </div>
  );
};

/* =========================================================================
   2. TOPIC MOTION GRAPHICS, TEMPORARY GITHUB CARD & KINETIC COMMENT CTA
   All positioned in the Left Motion-Graphics Zone (left: 68px, top: 210..270px)
   ========================================================================= */
export const REATopicMotionGraphics: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const floatY = Math.sin(frame / 6.5) * 4;
  const wobble = Math.sin(frame / 5) * 4;

  const getAnim = (start: number, end: number) => {
    const local = frame - start;
    const spr = spring({ frame: local, fps, config: { damping: 13, stiffness: 155 } });
    const exit = interpolate(frame, [end - 9, end], [1, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    return {
      local,
      spr,
      opacity: spr * exit,
      scale: interpolate(spr, [0, 1], [0.86, 1]),
      translateY: interpolate(spr, [0, 1], [28, 0]),
    };
  };

  // =======================================================================
  // SCENE 1: STRONG OPENING HOOK TYPOGRAPHY (Frames 0 - 77 | 0.00s - 2.58s)
  // Spoken: "Bhai REA naam ki ladki tumhare jeevan mein aaye na aaye,"
  // =======================================================================
  if (frame >= 0 && frame < 77) {
    const { local, opacity, scale, translateY } = getAnim(0, 77);
    const phase2Spr = spring({
      frame: Math.max(0, local - 28),
      fps,
      config: { damping: 12, stiffness: 160 },
    });

    return (
      <div
        style={{
          position: "absolute",
          top: 250,
          left: 68,
          width: 790,
          zIndex: 48,
          pointerEvents: "none",
          opacity,
          transform: `translateY(${translateY + floatY}px) scale(${scale})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 22,
            fontWeight: 900,
            letterSpacing: "3.5px",
            color: "#FACC15",
            textTransform: "uppercase",
            marginBottom: 8,
            ...strokeStyle,
          }}
        >
          ✦ REALITY CHECK FOR DEVELOPERS ✦
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg
            width="86"
            height="86"
            viewBox="0 0 64 64"
            fill="none"
            style={{
              transform: `rotate(${wobble}deg)`,
              filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.95))",
              flexShrink: 0,
            }}
          >
            <circle cx="32" cy="32" r="28" fill="rgba(15, 23, 42, 0.85)" stroke="#EF4444" strokeWidth="4" />
            <path
              d="M32 46 C32 46 16 35 16 24 C16 18.5 20.5 15 25.5 15 C28.8 15 31 17 32 19.5 C33 17 35.2 15 38.5 15 C43.5 15 48 18.5 48 24 C48 35 32 46 32 46 Z"
              fill="rgba(239, 68, 68, 0.28)"
              stroke="#EF4444"
              strokeWidth="3.5"
            />
            <line x1="16" y1="16" x2="48" y2="48" stroke="#FACC15" strokeWidth="5" strokeLinecap="round" />
          </svg>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: 74,
                fontWeight: 900,
                color: "#FFFFFF",
                letterSpacing: "1.5px",
                lineHeight: 1.0,
                ...strokeStyle,
              }}
            >
              &ldquo;RIA&rdquo; NAAM KI LADKI
            </span>
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontSize: 48,
                fontWeight: 800,
                color: "#00F0FF",
                lineHeight: 1.15,
                marginTop: 4,
                opacity: local >= 24 ? phase2Spr : 0.85,
                transform: `translateX(${(1 - phase2Spr) * -15}px)`,
                ...strokeStyle,
              }}
            >
              Jeevan Mein Aaye Na Aaye...
            </span>
          </div>
        </div>
      </div>
    );
  }

  // =======================================================================
  // SCENE 2: SIMPLE LIGHT-THEME GITHUB REPO OVERLAY (Frames 77 - 247 | 2.58s - 8.25s)
  // Spoken: "lekin ye GitHub repository jiska naam REA hai, that is Reverse
  //          Engineering Anything, wo tumhare DM mein zaroor aa jayegi."
  // =======================================================================
  if (frame >= 77 && frame < 247) {
    const { local, opacity, scale, translateY } = getAnim(77, 247);
    const isExpanded = frame >= 150;
    const expandSpr = spring({
      frame: Math.max(0, frame - 150),
      fps,
      config: { damping: 13, stiffness: 160 },
    });

    const starCount = Math.floor(
      interpolate(local, [0, 65], [218000, 226387], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    );

    return (
      <div
        style={{
          position: "absolute",
          top: 195,
          left: 64,
          width: 760,
          zIndex: 48,
          pointerEvents: "none",
          opacity,
          transform: `translateY(${translateY + floatY}px) scale(${scale})`,
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 20,
              fontWeight: 900,
              letterSpacing: "3px",
              color: "#00F0FF",
              ...subStrokeStyle,
            }}
          >
            ✦ VIRAL GITHUB REPOSITORY ✦
          </span>
          <span
            style={{
              fontFamily: "'Impact', 'Arial Black', sans-serif",
              fontSize: 56,
              fontWeight: 900,
              letterSpacing: "1px",
              color: "#FFFFFF",
              lineHeight: 1.05,
              ...strokeStyle,
            }}
          >
            GITHUB.COM/<span style={{ color: "#FACC15" }}>MORLUTO/REA</span>
          </span>
        </div>

        {/* Clean Light-Theme GitHub Repository Card */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 22,
            border: "2.5px solid #d0d7de",
            boxShadow:
              "0 24px 60px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255,255,255,0.5)",
            padding: "22px 26px",
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <GitHubOctocatSVG size={34} color="#1f2328" />
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 26 }}>
                <span style={{ color: "#0969da", fontWeight: 600 }}>morluto</span>
                <span style={{ color: "#656d76", fontWeight: 400 }}>/</span>
                <span style={{ color: "#0969da", fontWeight: 900 }}>rea</span>
              </div>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#57606a",
                  border: "1.5px solid #d0d7de",
                  borderRadius: 20,
                  padding: "2px 10px",
                  backgroundColor: "#f6f8fa",
                }}
              >
                Public
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "#fff8c5",
                border: "1.5px solid #d4a72c",
                borderRadius: 12,
                padding: "6px 14px",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="#d4a72c">
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
              </svg>
              <span style={{ color: "#1f2328", fontWeight: 800, fontSize: 16 }}>Star</span>
              <span
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: 8,
                  padding: "2px 8px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 900,
                  fontSize: 15,
                  color: "#9a6700",
                }}
              >
                {(starCount / 1000).toFixed(1)}k
              </span>
            </div>
          </div>

          <div
            style={{
              fontSize: 19,
              fontWeight: 600,
              color: "#1f2328",
              lineHeight: 1.4,
            }}
          >
            Reverse engineer anything with agents, from app behavior down to native binaries.
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: isExpanded ? "#ddf4ff" : "#f6f8fa",
              border: isExpanded ? "2px solid #0969da" : "1.5px solid #d0d7de",
              borderRadius: 14,
              padding: "12px 16px",
              transform: `scale(${isExpanded ? 0.98 + expandSpr * 0.02 : 1})`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span
                style={{
                  backgroundColor: "#0969da",
                  color: "#ffffff",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 900,
                  fontSize: 16,
                  padding: "4px 10px",
                  borderRadius: 8,
                }}
              >
                R.E.A.
              </span>
              <span
                style={{
                  fontWeight: 800,
                  fontSize: 19,
                  color: "#0969da",
                }}
              >
                Reverse Engineering Anything
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                fontSize: 14,
                fontWeight: 700,
                color: "#57606a",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "#3178c6",
                    display: "inline-block",
                  }}
                />
                TypeScript
              </span>
              <span>⑂ 56.2k Forks</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =======================================================================
  // SCENE 3: "AB ISKA FAYDA KYA HAI DHYAN SE SUNNA" (Frames 247 - 291 | 8.26s - 9.69s)
  // =======================================================================
  if (frame >= 247 && frame < 291) {
    const { opacity, scale, translateY } = getAnim(247, 291);
    return (
      <div
        style={{
          position: "absolute",
          top: 300,
          left: 68,
          width: 760,
          zIndex: 48,
          pointerEvents: "none",
          opacity,
          transform: `translateY(${translateY + floatY}px) scale(${scale})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 22,
            fontWeight: 900,
            letterSpacing: "3px",
            color: "#22C55E",
            ...strokeStyle,
          }}
        >
          ✦ WHY THIS REPO BROKE THE INTERNET ✦
        </span>
        <span
          style={{
            fontFamily: "'Impact', 'Arial Black', sans-serif",
            fontSize: 68,
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: "1.5px",
            lineHeight: 1.05,
            ...strokeStyle,
          }}
        >
          ISKA <span style={{ color: "#FACC15" }}>FAYDA KYA HAI?</span>
        </span>
        <span
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: "italic",
            fontSize: 42,
            fontWeight: 800,
            color: "#00F0FF",
            ...strokeStyle,
          }}
        >
          Dhyan Se Sunna...
        </span>
      </div>
    );
  }

  // =======================================================================
  // SCENE 4: ADOBE PAID SOFTWARES ➔ FREE LAUNCH (Frames 291 - 480 | 9.70s - 16.01s)
  // =======================================================================
  if (frame >= 291 && frame < 480) {
    const { local, opacity, scale, translateY } = getAnim(291, 480);
    const isFreeLaunch = frame >= 368;
    const freeSpr = spring({
      frame: Math.max(0, frame - 368),
      fps,
      config: { damping: 12, stiffness: 165 },
    });

    const apps = [
      { code: "Ps", paid: "Photoshop", free: "PhotoCraft", color: "#31A8FF" },
      { code: "Pr", paid: "Premiere", free: "FilmCraft", color: "#9999FF" },
      { code: "Ai", paid: "Illustrator", free: "VectorCraft", color: "#FF9A00" },
    ];

    return (
      <div
        style={{
          position: "absolute",
          top: 230,
          left: 68,
          width: 780,
          zIndex: 48,
          pointerEvents: "none",
          opacity,
          transform: `translateY(${translateY + floatY}px) scale(${scale})`,
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 20,
              fontWeight: 900,
              letterSpacing: "3px",
              color: isFreeLaunch ? "#22C55E" : "#EF4444",
              ...subStrokeStyle,
            }}
          >
            {isFreeLaunch ? "✦ CLEAN-ROOM OPEN SOURCE REBUILD ✦" : "✦ EXPENSIVE CREATIVE CLOUD SUITE ✦"}
          </span>
          <span
            style={{
              fontFamily: "'Impact', 'Arial Black', sans-serif",
              fontSize: 60,
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "1px",
              lineHeight: 1.05,
              ...strokeStyle,
            }}
          >
            ADOBE PAID APPS{" "}
            <span style={{ color: isFreeLaunch ? "#22C55E" : "#FACC15" }}>
              {isFreeLaunch ? "➔ 100% FREE!" : "($699/YR)"}
            </span>
          </span>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {apps.map((app, i) => {
            const cardSpr = spring({
              frame: Math.max(0, local - i * 8),
              fps,
              config: { damping: 13, stiffness: 160 },
            });
            return (
              <div
                key={app.code}
                style={{
                  opacity: cardSpr,
                  transform: `scale(${0.85 + cardSpr * 0.15})`,
                  backgroundColor: "rgba(10, 15, 28, 0.88)",
                  backdropFilter: "blur(16px)",
                  border: `2px solid ${isFreeLaunch ? "#22C55E" : app.color}`,
                  borderRadius: 18,
                  padding: "14px 18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  minWidth: 215,
                  boxShadow: "0 14px 32px rgba(0,0,0,0.65)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      backgroundColor: app.color,
                      color: "#090d16",
                      fontWeight: 900,
                      fontSize: 18,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {app.code}
                  </div>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 18,
                      fontWeight: 800,
                      color: isFreeLaunch ? "#94A3B8" : "#FFFFFF",
                      textDecoration: isFreeLaunch ? "line-through" : "none",
                    }}
                  >
                    {app.paid}
                  </span>
                </div>

                {isFreeLaunch && (
                  <div
                    style={{
                      opacity: freeSpr,
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 16,
                      fontWeight: 900,
                      color: "#22C55E",
                    }}
                  >
                    ✓ {app.free} (FREE)
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // =======================================================================
  // SCENE 5: BRIEF GITHUB CALLBACK PILL (Frames 480 - 535 | 16.02s - 17.83s)
  // =======================================================================
  if (frame >= 480 && frame < 535) {
    const { opacity, scale, translateY } = getAnim(480, 535);
    return (
      <div
        style={{
          position: "absolute",
          top: 320,
          left: 68,
          zIndex: 48,
          pointerEvents: "none",
          opacity,
          transform: `translateY(${translateY + floatY}px) scale(${scale})`,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            backgroundColor: "#FFFFFF",
            border: "2.5px solid #0969da",
            borderRadius: 40,
            padding: "14px 28px",
            boxShadow: "0 18px 45px rgba(0,0,0,0.65)",
          }}
        >
          <GitHubOctocatSVG size={32} color="#1f2328" />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 24,
              fontWeight: 900,
              color: "#0969da",
            }}
          >
            morluto/rea
          </span>
          <span
            style={{
              backgroundColor: "#dafbe1",
              color: "#1a7f37",
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              fontWeight: 800,
              padding: "4px 12px",
              borderRadius: 20,
              border: "1px solid #4ac26b",
            }}
          >
            SAME GITHUB TOOL ⚡
          </span>
        </div>
      </div>
    );
  }

  // =======================================================================
  // SCENE 6: LEARN REVERSE ENGINEERING SKILL (Frames 535 - 669 | 17.84s - 22.29s)
  // =======================================================================
  if (frame >= 535 && frame < 669) {
    const { opacity, scale, translateY } = getAnim(535, 669);
    return (
      <div
        style={{
          position: "absolute",
          top: 270,
          left: 68,
          width: 780,
          zIndex: 48,
          pointerEvents: "none",
          opacity,
          transform: `translateY(${translateY + floatY}px) scale(${scale})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 21,
            fontWeight: 900,
            letterSpacing: "3px",
            color: "#00F0FF",
            ...strokeStyle,
          }}
        >
          ✦ MUST-LEARN DEVELOPER SKILL ✦
        </span>
        <span
          style={{
            fontFamily: "'Impact', 'Arial Black', sans-serif",
            fontSize: 64,
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: "1.5px",
            lineHeight: 1.04,
            ...strokeStyle,
          }}
        >
          MASTER <span style={{ color: "#FACC15" }}>REVERSE ENGINEERING</span>
        </span>
        <span
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: "italic",
            fontSize: 40,
            fontWeight: 800,
            color: "#22C55E",
            marginTop: 4,
            ...strokeStyle,
          }}
        >
          Binary Analysis + AI Agents
        </span>
      </div>
    );
  }

  // =======================================================================
  // SCENE 7: KINETIC TYPOGRAPHY COMMENT "REA" CTA (Frames 669 - 792 | 22.30s - 26.40s)
  // Spoken: "toh is video mein comment kar dena hai REA aur main tum sabhi ke
  //          DMs ke andar is GitHub repository ka link bhej dunga,"
  // Positioned in the EXACT same Left Motion-Graphics Zone (top: 225, left: 68)
  // =======================================================================
  if (frame >= 669 && frame < 792) {
    const { local, opacity, scale, translateY } = getAnim(669, 792);
    const keyword = "REA";
    const typedCount = Math.floor(
      interpolate(local, [10, 26], [0, keyword.length], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    );
    const typedKeyword = keyword.slice(0, typedCount);
    const showCursor = Math.floor(local / 6) % 2 === 0;
    const dmSpr = spring({
      frame: Math.max(0, local - 38),
      fps,
      config: { damping: 12, stiffness: 165 },
    });

    return (
      <div
        style={{
          position: "absolute",
          top: 220,
          left: 68,
          width: 800,
          zIndex: 52,
          pointerEvents: "none",
          opacity,
          transform: `translateY(${translateY + floatY}px) scale(${scale})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 10,
        }}
      >
        {/* Top Monospace Action Tag */}
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 22,
            fontWeight: 900,
            letterSpacing: "3.5px",
            color: "#22C55E",
            textTransform: "uppercase",
            ...strokeStyle,
          }}
        >
          ✦ GET DIRECT GITHUB REPO LINK ✦
        </span>

        {/* Big Kinetic Typography + Glowing Typed "REA" Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* Handcrafted Vector Comment Bubble Icon */}
          <svg
            width="84"
            height="84"
            viewBox="0 0 64 64"
            fill="none"
            style={{
              transform: `rotate(${wobble}deg)`,
              filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.95))",
              flexShrink: 0,
            }}
          >
            <circle cx="32" cy="32" r="28" fill="rgba(8, 16, 28, 0.9)" stroke="#00F0FF" strokeWidth="4" />
            <path
              d="M18 22 C18 18.7 20.7 16 24 16 H40 C43.3 16 46 18.7 46 22 V34 C46 37.3 43.3 40 40 40 H28 L20 47 V40 C18.9 40 18 37.3 18 34 V22 Z"
              fill="rgba(0, 240, 255, 0.22)"
              stroke="#00F0FF"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            <circle cx="26" cy="28" r="2.5" fill="#FACC15" />
            <circle cx="32" cy="28" r="2.5" fill="#FACC15" />
            <circle cx="38" cy="28" r="2.5" fill="#FACC15" />
          </svg>

          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <span
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: 76,
                fontWeight: 900,
                color: "#FFFFFF",
                letterSpacing: "1.5px",
                lineHeight: 1.0,
                ...strokeStyle,
              }}
            >
              COMMENT
            </span>

            {/* High-Impact Kinetic Keyword Pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "rgba(250, 204, 21, 0.2)",
                border: "3.5px solid #FACC15",
                borderRadius: 22,
                padding: "8px 26px",
                boxShadow:
                  "0 14px 36px rgba(0, 0, 0, 0.85), 0 0 32px rgba(250, 204, 21, 0.45)",
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 66,
                  fontWeight: 900,
                  color: "#FACC15",
                  letterSpacing: "3px",
                  lineHeight: 1.0,
                  ...strokeStyle,
                }}
              >
                &ldquo;{typedKeyword}&rdquo;
              </span>
              {showCursor && (
                <span
                  style={{
                    display: "inline-block",
                    width: 5,
                    height: 54,
                    backgroundColor: "#00F0FF",
                    marginLeft: 6,
                    borderRadius: 2,
                    boxShadow: "0 0 12px #00F0FF",
                  }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Italic Serif + Monospace DM Delivery Subtitle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginTop: 4,
            opacity: local >= 32 ? dmSpr : 0.9,
            transform: `translateX(${(1 - dmSpr) * -18}px)`,
          }}
        >
          <span
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontSize: 44,
              fontWeight: 800,
              color: "#00F0FF",
              ...strokeStyle,
            }}
          >
            Instant GitHub Repo Link in Your DMs!
          </span>
        </div>
      </div>
    );
  }

  return null;
};
