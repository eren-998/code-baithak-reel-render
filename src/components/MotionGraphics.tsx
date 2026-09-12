import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

/* =========================================================================
   LARGE BOLD VECTOR SVG ICONS (NO EMOJIS)
   ========================================================================= */

export const BigApertureIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 56,
  color = "#00F0FF",
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2.2" />
    <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
    <line x1="9.69" y1="8" x2="21.17" y2="8" />
    <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
    <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
    <line x1="14.31" y1="16" x2="2.83" y2="16" />
    <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
  </svg>
);

export const BigQuestionIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 56,
  color = "#FFE600",
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" stroke="rgba(255,230,0,0.4)" strokeWidth="2" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="4" />
  </svg>
);

export const BigLightningIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 50,
  color = "#FF9900",
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="1">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const BigTarotIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 40,
  color = "#C084FC",
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="rgba(192, 132, 252, 0.3)" />
  </svg>
);

export const BigDocIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 40,
  color = "#38BDF8",
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="rgba(56, 189, 248, 0.25)" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

export const BigTerminalIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 40,
  color = "#4ADE80",
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="3" fill="rgba(74, 222, 128, 0.2)" />
    <polyline points="6 9 10 12 6 15" />
    <line x1="12" y1="16" x2="17" y2="16" />
  </svg>
);

export const BigCheckIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 28,
  color = "#4ADE80",
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* =========================================================================
   1. HERO CONTENT CREATOR CARD (Frames 18 - 72) - Large & Centered
   ========================================================================= */
export const HeroContentCreatorCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const start = 18;
  const duration = 54;
  const local = frame - start;

  if (local < 0 || local > duration) return null;

  const spr = spring({ frame: local, fps, config: { damping: 14, stiffness: 120 } });
  const exitProgress = interpolate(local, [duration - 10, duration], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(spr, [0, 1], [40, 0]);
  const scale = interpolate(spr, [0, 1], [0.85, 1]);

  return (
    <div
      style={{
        position: "absolute",
        top: 360,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: 48,
        opacity: spr * exitProgress,
        transform: `translateY(${translateY}px) scale(${scale})`,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: 860,
          backgroundColor: "rgba(10, 18, 32, 0.92)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          padding: "24px 36px",
          borderRadius: 40,
          border: "2px solid rgba(0, 240, 255, 0.6)",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(0, 240, 255, 0.35)",
          display: "flex",
          alignItems: "center",
          gap: 24,
        }}
      >
        <div
          style={{
            width: 84,
            height: 84,
            borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(0, 240, 255, 0.3) 0%, rgba(0, 114, 255, 0.5) 100%)",
            border: "2px solid #00F0FF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 25px rgba(0, 240, 255, 0.5)",
            flexShrink: 0,
          }}
        >
          <BigApertureIcon size={46} color="#00F0FF" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                backgroundColor: "rgba(0, 240, 255, 0.2)",
                color: "#00F0FF",
                fontSize: 15,
                fontWeight: 900,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "4px 12px",
                borderRadius: 12,
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
            >
              Role & Creator
            </span>
          </div>
          <span
            style={{
              color: "#FFFFFF",
              fontSize: 38,
              fontWeight: 900,
              letterSpacing: "-0.02em",
              fontFamily: "'Inter', system-ui, sans-serif",
              lineHeight: 1.1,
            }}
          >
            CONTENT CREATOR
          </span>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   2. HERO MONETIZATION QUESTION CARD (Frames 115 - 200)
   ========================================================================= */
export const HeroMonetizeQuestionCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const start = 115;
  const duration = 85;
  const local = frame - start;

  if (local < 0 || local > duration) return null;

  const spr = spring({ frame: local, fps, config: { damping: 15, stiffness: 110 } });
  const exitProgress = interpolate(local, [duration - 12, duration], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(spr, [0, 1], [40, 0]);
  const scale = interpolate(spr, [0, 1], [0.88, 1]);

  return (
    <div
      style={{
        position: "absolute",
        top: 360,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: 48,
        opacity: spr * exitProgress,
        transform: `translateY(${translateY}px) scale(${scale})`,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: 880,
          backgroundColor: "rgba(22, 18, 10, 0.94)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          padding: "26px 36px",
          borderRadius: 40,
          border: "2px solid rgba(255, 230, 0, 0.6)",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.75), 0 0 40px rgba(255, 230, 0, 0.35)",
          display: "flex",
          alignItems: "center",
          gap: 24,
        }}
      >
        <div
          style={{
            width: 86,
            height: 86,
            borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(255, 230, 0, 0.3) 0%, rgba(251, 133, 0, 0.45) 100%)",
            border: "2px solid #FFE600",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 25px rgba(255, 230, 0, 0.5)",
            flexShrink: 0,
          }}
        >
          <BigQuestionIcon size={48} color="#FFE600" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span
            style={{
              color: "#FFE600",
              fontSize: 16,
              fontWeight: 900,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            Big Question In Mind
          </span>
          <span
            style={{
              color: "#FFFFFF",
              fontSize: 38,
              fontWeight: 900,
              letterSpacing: "-0.02em",
              fontFamily: "'Inter', system-ui, sans-serif",
              lineHeight: 1.1,
            }}
          >
            PAISE KAISE KAMAYEIN?
          </span>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   3. HERO DUAL OFFERINGS (Frames 345 - 450)
   ========================================================================= */
export const HeroOfferingsCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const start = 345;
  const duration = 105;
  const local = frame - start;

  if (local < 0 || local > duration) return null;

  const spr = spring({ frame: local, fps, config: { damping: 15, stiffness: 120 } });
  const exitProgress = interpolate(local, [duration - 12, duration], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 350,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: 48,
        opacity: spr * exitProgress,
        transform: `translateY(${interpolate(spr, [0, 1], [40, 0])}px) scale(${interpolate(spr, [0, 1], [0.9, 1])})`,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: 900,
          backgroundColor: "rgba(10, 15, 28, 0.94)",
          backdropFilter: "blur(28px)",
          padding: "24px 30px",
          borderRadius: 36,
          border: "2px solid rgba(0, 149, 246, 0.5)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.8), 0 0 35px rgba(0, 149, 246, 0.25)",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <span
          style={{
            color: "#0095F6",
            fontSize: 16,
            fontWeight: 900,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          My Monetization Plan
        </span>
        <div style={{ display: "flex", gap: 16 }}>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: 16,
              background: "rgba(0, 149, 246, 0.18)",
              border: "1.5px solid rgba(0, 149, 246, 0.6)",
              padding: "18px 24px",
              borderRadius: 24,
            }}
          >
            <BigDocIcon size={36} color="#38BDF8" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "#FFFFFF", fontSize: 26, fontWeight: 900, fontFamily: "'Inter', sans-serif" }}>
                1:1 SESSIONS
              </span>
              <span style={{ color: "#38BDF8", fontSize: 14, fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
                Direct Consultations
              </span>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: 16,
              background: "rgba(74, 222, 128, 0.18)",
              border: "1.5px solid rgba(74, 222, 128, 0.6)",
              padding: "18px 24px",
              borderRadius: 24,
            }}
          >
            <BigTerminalIcon size={36} color="#4ADE80" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "#FFFFFF", fontSize: 26, fontWeight: 900, fontFamily: "'Inter', sans-serif" }}>
                TECH COURSES
              </span>
              <span style={{ color: "#4ADE80", fontSize: 14, fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
                Workshops & Modules
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   4. FULL-SIZE PROMINENT SKILLS LIST (Frames 645 - 880) - THE MAIN REQUEST
   ========================================================================= */
export const HeroSkillsListCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const start = 645;
  const duration = 235; // Stays active through frame 880
  const local = frame - start;

  if (local < 0 || local > duration) return null;

  const spr = spring({ frame: local, fps, config: { damping: 15, stiffness: 120 } });
  const exitProgress = interpolate(local, [duration - 15, duration], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const skills = [
    {
      title: "Tarot Card Reading",
      subtitle: "Personal Consultations",
      icon: <BigTarotIcon size={36} color="#C084FC" />,
      accent: "#C084FC",
      bg: "rgba(192, 132, 252, 0.15)",
      triggerFrame: 710,
    },
    {
      title: "Resume Vetting Session",
      subtitle: "Career & Portfolio Review",
      icon: <BigDocIcon size={36} color="#38BDF8" />,
      accent: "#38BDF8",
      bg: "rgba(56, 189, 248, 0.15)",
      triggerFrame: 750,
    },
    {
      title: "Technical 1:1 Sessions",
      subtitle: "Live Mentorship & Guidance",
      icon: <BigTerminalIcon size={36} color="#4ADE80" />,
      accent: "#4ADE80",
      bg: "rgba(74, 222, 128, 0.15)",
      triggerFrame: 790,
    },
  ];

  return (
    <div
      style={{
        position: "absolute",
        top: 280,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: 48,
        opacity: spr * exitProgress,
        transform: `translateY(${interpolate(spr, [0, 1], [40, 0])}px) scale(${interpolate(spr, [0, 1], [0.92, 1])})`,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: 920,
          backgroundColor: "rgba(10, 14, 26, 0.95)",
          backdropFilter: "blur(32px)",
          WebkitBackdropFilter: "blur(32px)",
          padding: "28px 36px",
          borderRadius: 44,
          border: "2px solid rgba(255, 153, 0, 0.6)",
          boxShadow: "0 30px 80px rgba(0, 0, 0, 0.85), 0 0 50px rgba(255, 153, 0, 0.35)",
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        {/* Header Badge */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(255, 153, 0, 0.3) 0%, rgba(255, 85, 0, 0.5) 100%)",
                border: "2px solid #FF9900",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 20px rgba(255, 153, 0, 0.5)",
              }}
            >
              <BigLightningIcon size={28} color="#FF9900" />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  color: "#FF9900",
                  fontSize: 14,
                  fontWeight: 900,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Monetize
              </span>
              <span
                style={{
                  color: "#FFFFFF",
                  fontSize: 28,
                  fontWeight: 900,
                  letterSpacing: "-0.01em",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                ANY SKILL SET
              </span>
            </div>
          </div>
          <span
            style={{
              backgroundColor: "rgba(255, 153, 0, 0.2)",
              color: "#FF9900",
              fontSize: 13,
              fontWeight: 800,
              padding: "6px 14px",
              borderRadius: 20,
              border: "1px solid rgba(255, 153, 0, 0.4)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            TOP SERVICES
          </span>
        </div>

        {/* Animated Stacked Skills List */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 4 }}>
          {skills.map((item, i) => {
            const itemLocal = frame - item.triggerFrame;
            const isRevealed = itemLocal >= 0;

            const itemSpr = isRevealed
              ? spring({ frame: itemLocal, fps, config: { damping: 14, stiffness: 130 } })
              : 0;

            const itemTranslateX = isRevealed ? interpolate(itemSpr, [0, 1], [-40, 0]) : -40;
            const itemScale = isRevealed ? interpolate(itemSpr, [0, 1], [0.9, 1]) : 0.9;
            const itemOpacity = isRevealed ? itemSpr : 0.35;

            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: isRevealed ? item.bg : "rgba(255, 255, 255, 0.04)",
                  backdropFilter: "blur(16px)",
                  padding: "16px 24px",
                  borderRadius: 26,
                  border: `1.5px solid ${isRevealed ? item.accent : "rgba(255, 255, 255, 0.1)"}`,
                  boxShadow: isRevealed ? `0 10px 25px rgba(0,0,0,0.5), 0 0 20px ${item.accent}33` : "none",
                  opacity: itemOpacity,
                  transform: `translateX(${itemTranslateX}px) scale(${itemScale})`,
                  transition: "all 0.15s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div
                    style={{
                      width: 54,
                      height: 54,
                      borderRadius: 18,
                      background: `${item.accent}25`,
                      border: `1.5px solid ${item.accent}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: isRevealed ? `0 0 15px ${item.accent}55` : "none",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <span
                      style={{
                        color: "#FFFFFF",
                        fontSize: 26,
                        fontWeight: 900,
                        fontFamily: "'Inter', sans-serif",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.title}
                    </span>
                    <span
                      style={{
                        color: item.accent,
                        fontSize: 15,
                        fontWeight: 700,
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                {isRevealed && (
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      backgroundColor: "rgba(74, 222, 128, 0.2)",
                      border: "1.5px solid #4ADE80",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 12px rgba(74, 222, 128, 0.5)",
                    }}
                  >
                    <BigCheckIcon size={20} color="#4ADE80" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   5. HERO PLATFORM EARNINGS REVENUE CARD (Frames 930 - 1020)
   ========================================================================= */
export const HeroRevenueCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const start = 930;
  const duration = 90;
  const local = frame - start;

  if (local < 0 || local > duration) return null;

  const spr = spring({ frame: local, fps, config: { damping: 15, stiffness: 120 } });
  const exitProgress = interpolate(local, [duration - 12, duration], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 360,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: 48,
        opacity: spr * exitProgress,
        transform: `translateY(${interpolate(spr, [0, 1], [40, 0])}px) scale(${interpolate(spr, [0, 1], [0.9, 1])})`,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: 880,
          backgroundColor: "rgba(6, 32, 22, 0.94)",
          backdropFilter: "blur(28px)",
          padding: "26px 36px",
          borderRadius: 40,
          border: "2px solid rgba(16, 185, 129, 0.6)",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8), 0 0 45px rgba(16, 185, 129, 0.35)",
          display: "flex",
          alignItems: "center",
          gap: 24,
        }}
      >
        <div
          style={{
            width: 84,
            height: 84,
            borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(16, 185, 129, 0.3) 0%, rgba(5, 150, 105, 0.5) 100%)",
            border: "2px solid #10B981",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 25px rgba(16, 185, 129, 0.5)",
            flexShrink: 0,
          }}
        >
          <svg width={48} height={48} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
          </svg>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <span
            style={{
              color: "#10B981",
              fontSize: 15,
              fontWeight: 900,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Direct Revenue
          </span>
          <span
            style={{
              color: "#FFFFFF",
              fontSize: 36,
              fontWeight: 900,
              letterSpacing: "-0.01em",
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.1,
            }}
          >
            THIS PLATFORM GIVES YOU MONEY
          </span>
        </div>
      </div>
    </div>
  );
};
