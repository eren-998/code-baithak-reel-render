import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const Scene6OutroBranding: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const mainSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 200, mass: 0.8 },
  });

  // Shockwave burst at beginning of scene
  const burstRadius = interpolate(frame, [0, 25], [10, 1400], {
    extrapolateRight: "clamp",
  });
  const burstOpacity = interpolate(frame, [0, 8, 25], [0.9, 0.6, 0]);

  // Card slide-up spring
  const cardSpring = spring({
    frame: frame - 12,
    fps,
    config: { damping: 16, stiffness: 180 },
  });

  // Outro fade out for cinematic ending
  const finalFade = interpolate(frame, [65, 80], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const skillsPills = [
    "REMOTION & REACT",
    "AFTER EFFECTS & C4D",
    "KINETIC TYPOGRAPHY",
    "WEBGL / THREE.JS",
    "LOTTIE & RIVE",
  ];

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#060810",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        opacity: finalFade,
      }}
    >
      {/* Background Singularity Radial Shockwave */}
      <div
        style={{
          position: "absolute",
          width: burstRadius,
          height: burstRadius,
          borderRadius: "50%",
          border: "2px solid #00F0FF",
          boxShadow: "0 0 50px #00F0FF, inset 0 0 50px #BD00FF",
          opacity: burstOpacity,
          pointerEvents: "none",
        }}
      />

      {/* Ambient Glow Orbs */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          width: 800,
          height: 400,
          background: "radial-gradient(circle, rgba(0, 240, 255, 0.2) 0%, rgba(189, 0, 255, 0.1) 50%, transparent 80%)",
          filter: "blur(80px)",
        }}
      />

      {/* Main Content Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: `scale(${mainSpring})`,
          zIndex: 10,
        }}
      >
        {/* Availability Live Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            backgroundColor: "rgba(0, 255, 157, 0.12)",
            border: "1px solid rgba(0, 255, 157, 0.35)",
            padding: "8px 20px",
            borderRadius: 30,
            marginBottom: 20,
            boxShadow: "0 0 20px rgba(0, 255, 157, 0.2)",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#00FF9D",
              boxShadow: "0 0 8px #00FF9D",
            }}
          />
          <span style={{ fontSize: 13, color: "#00FF9D", fontWeight: 800, letterSpacing: 2, fontFamily: "monospace" }}>
            AVAILABLE FOR SENIOR ROLES & SELECT COMMISSIONS
          </span>
        </div>

        {/* Hero Name Branding */}
        <h1
          style={{
            fontSize: 120,
            fontWeight: 900,
            lineHeight: 0.95,
            margin: 0,
            letterSpacing: 14,
            background: "linear-gradient(135deg, #FFFFFF 0%, #00F0FF 50%, #FFE500 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "'Inter', 'Impact', sans-serif",
            filter: "drop-shadow(0 0 40px rgba(0, 240, 255, 0.4))",
          }}
        >
          ANNIE
        </h1>

        {/* Role & Title */}
        <p
          style={{
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: 8,
            color: "#E2E8F0",
            margin: "14px 0 32px 0",
            fontFamily: "'Inter', sans-serif",
            textTransform: "uppercase",
          }}
        >
          SENIOR MOTION DESIGNER & CREATIVE TECHNOLOGIST
        </p>

        {/* Résumé Contact & Specs Glass Card */}
        <div
          style={{
            width: 880,
            background: "rgba(15, 23, 42, 0.82)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: 24,
            padding: "28px 40px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 240, 255, 0.1)",
            transform: `translateY(${interpolate(cardSpring, [0, 1], [40, 0])}px)`,
            opacity: cardSpring,
          }}
        >
          {/* Skills Badges */}
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            {skillsPills.map((pill, i) => (
              <span
                key={i}
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  padding: "6px 14px",
                  borderRadius: 20,
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  color: "#FFFFFF",
                  fontFamily: "monospace",
                }}
              >
                {pill}
              </span>
            ))}
          </div>

          <div style={{ height: 1, backgroundColor: "rgba(255, 255, 255, 0.1)" }} />

          {/* Links & Channels */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", gap: 32, fontSize: 14, fontWeight: 700, color: "#94A3B8" }}>
              <span>PORTFOLIO: <strong style={{ color: "#00F0FF" }}>annie.design</strong></span>
              <span>GITHUB: <strong style={{ color: "#FFE500" }}>@annie-motion</strong></span>
              <span>EMAIL: <strong style={{ color: "#FFFFFF" }}>annie@design.studio</strong></span>
            </div>

            {/* Glowing CTA Button */}
            <div
              style={{
                backgroundColor: "#00F0FF",
                color: "#07090E",
                padding: "12px 26px",
                borderRadius: 30,
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: 2,
                boxShadow: "0 0 25px rgba(0, 240, 255, 0.6)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span>CONNECT & COLLABORATE</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
