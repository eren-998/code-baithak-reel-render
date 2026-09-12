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
import {
  AirFlowIcon,
  FuelPumpIcon,
  PlaneIcon,
  PowerIcon,
  ShieldIcon,
  TurbineIcon,
} from "./Icons";
import { theme } from "./types";

export const Scene6Summary: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const c1 = spring({ frame: frame - 5, fps, config: { damping: 14 } });
  const c2 = spring({ frame: frame - 16, fps, config: { damping: 14 } });
  const c3 = spring({ frame: frame - 27, fps, config: { damping: 14 } });
  const c4 = spring({ frame: frame - 38, fps, config: { damping: 14 } });
  const bottomBanner = spring({ frame: frame - 50, fps, config: { damping: 14 } });

  const specs = [
    {
      label: "ELECTRICAL CAPACITY",
      val: "90 - 120 kVA",
      sub: "115V AC / 400 Hz 3-Phase",
      detail: "Matches main engine generator output",
      icon: <PowerIcon size={22} color={theme.accentGreen} />,
      color: theme.accentGreen,
      springVal: c1,
    },
    {
      label: "PNEUMATIC BLEED FLOW",
      val: "130+ lbs/min",
      sub: "40 - 45 PSI Pressurized Air",
      detail: "Starts main engines & feeds 2 ECS packs",
      icon: <AirFlowIcon size={22} color={theme.accentCyan} />,
      color: theme.accentCyan,
      springVal: c2,
    },
    {
      label: "OPERATING SPEED",
      val: "~48,800 RPM",
      sub: "100% Constant Governed Speed",
      detail: "Single-shaft centrifugal gas turbine",
      icon: <TurbineIcon size={22} color={theme.accentAmber} />,
      color: theme.accentAmber,
      springVal: c3,
    },
    {
      label: "GROUND FUEL BURN",
      val: "110 - 180 kg/hr",
      sub: "Jet A-1 Aviation Kerosene",
      detail: "Fraction of main engine burn (2,000+ kg/hr)",
      icon: <FuelPumpIcon size={22} color={theme.accentOrange} />,
      color: theme.accentOrange,
      springVal: c4,
    },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: theme.bg }}>
      <Background />
      <Header
        currentStep={6}
        tag="SPECIFICATION & SUMMARY SCORECARD"
        title="Key APU Takeaways & Engineering Specs"
        subtitle="A compact, indispensable gas turbine delivering total ground autonomy and in-flight safety"
      />

      <div
        style={{
          position: "absolute",
          top: 165,
          left: 56,
          right: 56,
          bottom: 35,
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        {/* TOP: 4 Vital Spec Scorecards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {specs.map((s) => {
            const op = interpolate(s.springVal, [0, 1], [0, 1]);
            const ty = interpolate(s.springVal, [0, 1], [25, 0]);

            return (
              <div
                key={s.label}
                style={{
                  backgroundColor: theme.cardBg,
                  border: `1.5px solid ${s.color}60`,
                  borderRadius: 14,
                  padding: "16px 18px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 10px 24px rgba(0,0,0,0.4)",
                  opacity: op,
                  transform: `translateY(${ty}px)`,
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <span style={{ fontSize: 10, fontWeight: 900, color: s.color, fontFamily: "monospace" }}>
                      {s.label}
                    </span>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {s.icon}
                    </div>
                  </div>

                  <div style={{ fontSize: 24, fontWeight: 900, color: theme.textPrimary, letterSpacing: "-0.02em" }}>
                    {s.val}
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: s.color, marginTop: 3 }}>
                    {s.sub}
                  </div>
                </div>

                <div
                  style={{
                    borderTop: "1px solid rgba(51, 65, 85, 0.4)",
                    paddingTop: 8,
                    fontSize: 11,
                    color: theme.textSecondary,
                    marginTop: 10,
                  }}
                >
                  {s.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM: 3 Core Pillars Banner */}
        <div
          style={{
            flex: 1,
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.cardBorder}`,
            borderRadius: 16,
            padding: "18px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
            opacity: interpolate(bottomBanner, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(bottomBanner, [0, 1], [30, 0])}px)`,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 12, fontWeight: 800, color: theme.accentCyan, letterSpacing: "0.12em", fontFamily: "monospace" }}>
              CRITICAL ROLES IN COMMERCIAL AVIATION
            </span>
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                padding: "3px 8px",
                borderRadius: 4,
                backgroundColor: "rgba(56, 189, 248, 0.15)",
                color: theme.accentCyan,
                fontFamily: "monospace",
              }}
            >
              STANDALONE JETLINER RELIANCE
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, margin: "8px 0" }}>
            <div style={{ backgroundColor: "rgba(30, 41, 59, 0.6)", padding: 14, borderRadius: 10, border: "1px solid rgba(51, 65, 85, 0.5)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <PlaneIcon size={18} color={theme.accentCyan} />
                <div style={{ fontSize: 13, fontWeight: 800, color: theme.textPrimary }}>
                  Remote Airport Autonomy
                </div>
              </div>
              <div style={{ fontSize: 11, color: theme.textSecondary, lineHeight: 1.35 }}>
                Enables jetliners to turn around, cool cabin, and start engines at airstrips without ground power units (GPU) or air starters (ASU).
              </div>
            </div>

            <div style={{ backgroundColor: "rgba(30, 41, 59, 0.6)", padding: 14, borderRadius: 10, border: "1px solid rgba(51, 65, 85, 0.5)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <ShieldIcon size={18} color={theme.accentAmber} />
                <div style={{ fontSize: 13, fontWeight: 800, color: theme.textPrimary }}>
                  ETOPS Crossing Safety
                </div>
              </div>
              <div style={{ fontSize: 11, color: theme.textSecondary, lineHeight: 1.35 }}>
                Mandatory redundancy power source for twin-engine airliners flying over oceans and remote polar routes up to 330 minutes away from diversion airfields.
              </div>
            </div>

            <div style={{ backgroundColor: "rgba(30, 41, 59, 0.6)", padding: 14, borderRadius: 10, border: "1px solid rgba(51, 65, 85, 0.5)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <PowerIcon size={18} color={theme.accentGreen} />
                <div style={{ fontSize: 13, fontWeight: 800, color: theme.textPrimary }}>
                  High Fuel Efficiency On Ground
                </div>
              </div>
              <div style={{ fontSize: 11, color: theme.textSecondary, lineHeight: 1.35 }}>
                Burning ~120 kg/hr saves tons of jet fuel compared to idling massive main jet engines at the terminal gate during boarding.
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid rgba(51, 65, 85, 0.4)",
              paddingTop: 8,
              fontSize: 11,
              color: theme.textMuted,
              fontFamily: "monospace",
            }}
          >
            <span>MODELS: HONEYWELL 131-9A / APS 3200 / PRATT & WHITNEY PW980</span>
            <span style={{ color: theme.accentGreen }}>SYSTEM RELIABILITY &gt; 99.8% DISPATCH</span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
