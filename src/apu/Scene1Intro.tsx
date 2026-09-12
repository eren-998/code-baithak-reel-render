import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Background } from "./Background";
import { Header } from "./Header";
import { AirFlowIcon, PowerIcon, ShieldIcon } from "./Icons";
import { theme } from "./types";

export const Scene1Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animations
  const planeEntrance = spring({
    frame: frame - 5,
    fps,
    config: { damping: 14, mass: 0.8 },
  });

  const card1Entrance = spring({
    frame: frame - 22,
    fps,
    config: { damping: 15 },
  });

  const card2Entrance = spring({
    frame: frame - 36,
    fps,
    config: { damping: 15 },
  });

  const card3Entrance = spring({
    frame: frame - 50,
    fps,
    config: { damping: 15 },
  });

  const pulse = Math.sin(frame * 0.2) * 0.5 + 0.5;

  return (
    <AbsoluteFill>
      <Background />
      <Header
        currentStep={1}
        tag="OVERVIEW & LOCATION"
        title="What is an Aircraft APU?"
        subtitle="Auxiliary Power Unit — The hidden gas turbine engine in every jetliner's tail"
      />

      <div
        style={{
          position: "absolute",
          top: 170,
          left: 56,
          right: 56,
          bottom: 40,
          display: "flex",
          gap: 36,
          alignItems: "center",
        }}
      >
        {/* Left Side: Aircraft Graphic with Highlighted APU Tail */}
        <div
          style={{
            flex: "1 1 54%",
            height: "100%",
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.cardBorder}`,
            borderRadius: 16,
            padding: 24,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 16px 36px rgba(0,0,0,0.5)",
            opacity: interpolate(planeEntrance, [0, 1], [0, 1]),
            transform: `translateX(${interpolate(planeEntrance, [0, 1], [-40, 0])}px)`,
          }}
        >
          {/* Badge */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: theme.accentCyan,
                letterSpacing: "0.1em",
                fontFamily: "monospace",
              }}
            >
              LOCATION DIAGRAM // EMPENNAGE MOUNT
            </span>
            <span
              style={{
                fontSize: 11,
                padding: "3px 8px",
                borderRadius: 4,
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                color: theme.accentGreen,
                fontWeight: 700,
                fontFamily: "monospace",
              }}
            >
              TAIL CONE SECTION
            </span>
          </div>

          {/* Jetliner SVG Blueprint */}
          <div style={{ position: "relative", width: "100%", height: 320, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <svg viewBox="0 0 700 280" width="100%" height="100%">
              {/* Aircraft fuselage outline */}
              <path
                d="M 60,140 C 90,90 200,80 440,95 L 610,130 L 670,140 L 610,150 L 440,185 C 200,200 90,190 60,140 Z"
                fill="rgba(30, 41, 59, 0.6)"
                stroke="#475569"
                strokeWidth="2.5"
              />
              {/* Cockpit Window */}
              <path d="M 85,125 L 115,118 L 115,135 L 90,135 Z" fill={theme.accentCyan} opacity="0.8" />
              {/* Left Wing */}
              <path d="M 280,110 L 380,20 L 420,25 L 360,115 Z" fill="rgba(51, 65, 85, 0.5)" stroke="#64748B" strokeWidth="2" />
              {/* Right Wing */}
              <path d="M 280,170 L 380,260 L 420,255 L 360,165 Z" fill="rgba(51, 65, 85, 0.5)" stroke="#64748B" strokeWidth="2" />
              {/* Vertical Stabilizer & Tail */}
              <path d="M 520,135 L 630,70 L 655,75 L 590,138 Z" fill="rgba(51, 65, 85, 0.7)" stroke="#64748B" strokeWidth="2" />

              {/* APU LOCATION HIGHLIGHT BOX IN TAIL CONE */}
              <rect
                x="575"
                y="122"
                width="85"
                height="36"
                rx="6"
                fill="rgba(56, 189, 248, 0.25)"
                stroke={theme.accentCyan}
                strokeWidth="2.5"
                style={{
                  filter: `drop-shadow(0 0 ${8 + pulse * 6}px ${theme.accentCyan})`,
                }}
              />

              {/* APU Turbine Mini Icon inside highlight box */}
              <circle cx="617" cy="140" r="10" fill="none" stroke="#F8FAFC" strokeWidth="2" strokeDasharray="3 3" />
              <circle cx="617" cy="140" r="4" fill={theme.accentAmber} />

              {/* Animated Radar Pulse Rings */}
              <circle
                cx="617"
                cy="140"
                r={15 + (frame % 30) * 1.5}
                fill="none"
                stroke={theme.accentCyan}
                strokeWidth="1.5"
                opacity={1 - (frame % 30) / 30}
              />

              {/* Callout Pointer Line */}
              <line x1="617" y1="122" x2="617" y2="70" stroke={theme.accentCyan} strokeWidth="2" />
              <line x1="617" y1="70" x2="490" y2="70" stroke={theme.accentCyan} strokeWidth="2" />
            </svg>

            {/* Floating Callout Badge */}
            <div
              style={{
                position: "absolute",
                top: 45,
                right: 210,
                backgroundColor: "rgba(15, 23, 42, 0.95)",
                border: `1.5px solid ${theme.accentCyan}`,
                borderRadius: 8,
                padding: "8px 14px",
                boxShadow: `0 0 16px rgba(56, 189, 248, 0.3)`,
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 800, color: theme.accentCyan }}>
                APU COMPARTMENT
              </div>
              <div style={{ fontSize: 11, color: theme.textSecondary }}>
                Fire-walled titanium / inconel tail cone
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid rgba(51, 65, 85, 0.5)",
              paddingTop: 12,
              color: theme.textMuted,
              fontSize: 12,
              fontFamily: "monospace",
            }}
          >
            <span>STANDALONE SELF-CONTAINED GAS TURBINE</span>
            <span style={{ color: theme.accentCyan }}>OPERATES INDEPENDENTLY OF MAIN ENGINES</span>
          </div>
        </div>

        {/* Right Side: 3 Core Purposes */}
        <div
          style={{
            flex: "1 1 46%",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            height: "100%",
          }}
        >
          {/* Card 1: Electricity */}
          <div
            style={{
              flex: 1,
              backgroundColor: theme.cardBg,
              border: `1px solid ${theme.cardBorder}`,
              borderRadius: 14,
              padding: "18px 22px",
              display: "flex",
              gap: 18,
              alignItems: "center",
              boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
              opacity: interpolate(card1Entrance, [0, 1], [0, 1]),
              transform: `translateY(${interpolate(card1Entrance, [0, 1], [30, 0])}px)`,
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                border: "1px solid rgba(16, 185, 129, 0.4)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PowerIcon size={26} color={theme.accentGreen} />
            </div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 700, color: theme.textPrimary, marginBottom: 4 }}>
                1. Ground Electrical Power
              </div>
              <div style={{ fontSize: 13, color: theme.textSecondary, lineHeight: 1.4 }}>
                Runs cockpit avionics, passenger cabin lights, air circulation, and galleys without airport ground cables.
              </div>
            </div>
          </div>

          {/* Card 2: Pneumatic Air */}
          <div
            style={{
              flex: 1,
              backgroundColor: theme.cardBg,
              border: `1px solid ${theme.cardBorder}`,
              borderRadius: 14,
              padding: "18px 22px",
              display: "flex",
              gap: 18,
              alignItems: "center",
              boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
              opacity: interpolate(card2Entrance, [0, 1], [0, 1]),
              transform: `translateY(${interpolate(card2Entrance, [0, 1], [30, 0])}px)`,
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                backgroundColor: "rgba(56, 189, 248, 0.15)",
                border: "1px solid rgba(56, 189, 248, 0.4)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AirFlowIcon size={26} color={theme.accentCyan} />
            </div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 700, color: theme.textPrimary, marginBottom: 4 }}>
                2. Pneumatic Bleed Air & Engine Start
              </div>
              <div style={{ fontSize: 13, color: theme.textSecondary, lineHeight: 1.4 }}>
                Pumps high-pressure air to spin the main jet engines for startup and powers cabin air conditioning (ECS).
              </div>
            </div>
          </div>

          {/* Card 3: In-flight Backup */}
          <div
            style={{
              flex: 1,
              backgroundColor: theme.cardBg,
              border: `1px solid ${theme.cardBorder}`,
              borderRadius: 14,
              padding: "18px 22px",
              display: "flex",
              gap: 18,
              alignItems: "center",
              boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
              opacity: interpolate(card3Entrance, [0, 1], [0, 1]),
              transform: `translateY(${interpolate(card3Entrance, [0, 1], [30, 0])}px)`,
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                backgroundColor: "rgba(245, 158, 11, 0.15)",
                border: "1px solid rgba(245, 158, 11, 0.4)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ShieldIcon size={26} color={theme.accentAmber} />
            </div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 700, color: theme.textPrimary, marginBottom: 4 }}>
                3. In-Flight Emergency Redundancy
              </div>
              <div style={{ fontSize: 13, color: theme.textSecondary, lineHeight: 1.4 }}>
                Can be restarted at up to 41,000 ft as a secondary electrical & bleed air backup during dual-generator issues.
              </div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
