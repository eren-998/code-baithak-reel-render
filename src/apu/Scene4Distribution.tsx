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
  AvionicsIcon,
  BatteryIcon,
  FlameIcon,
  GearIcon,
  PlaneIcon,
  PowerIcon,
  SnowflakeIcon,
  TurbineIcon,
} from "./Icons";
import { theme } from "./types";

export const Scene4Distribution: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const coreEntrance = spring({ frame: frame - 5, fps, config: { damping: 14 } });
  const elecEntrance = spring({ frame: frame - 22, fps, config: { damping: 14 } });
  const bleedEntrance = spring({ frame: frame - 36, fps, config: { damping: 14 } });

  const pulse = Math.sin(frame * 0.15) * 0.5 + 0.5;

  return (
    <AbsoluteFill>
      <Background />
      <Header
        currentStep={4}
        tag="OUTPUT DISTRIBUTION FLOWCHART"
        title="Where Does APU Energy Go?"
        subtitle="Independent routing of 115V AC Electrical Grid and 45 PSI Pneumatic Bleed Air"
      />

      <div
        style={{
          position: "absolute",
          top: 165,
          left: 56,
          right: 56,
          bottom: 35,
          display: "flex",
          gap: 20,
          alignItems: "stretch",
        }}
      >
        {/* LEFT COLUMN: 115V AC Electrical Grid */}
        <div
          style={{
            flex: 1,
            backgroundColor: theme.cardBg,
            border: "1.5px solid rgba(16, 185, 129, 0.4)",
            borderRadius: 16,
            padding: "18px 22px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
            opacity: interpolate(elecEntrance, [0, 1], [0, 1]),
            transform: `translateX(${interpolate(elecEntrance, [0, 1], [-30, 0])}px)`,
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  color: theme.accentGreen,
                  letterSpacing: "0.1em",
                  fontFamily: "monospace",
                }}
              >
                BRANCH A // ELECTRICAL SYSTEM
              </span>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  padding: "2px 8px",
                  borderRadius: 4,
                  backgroundColor: "rgba(16, 185, 129, 0.2)",
                  color: theme.accentGreen,
                  fontFamily: "monospace",
                }}
              >
                115V AC / 400 Hz (90 kVA)
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
              <PowerIcon size={24} color={theme.accentGreen} />
              <div style={{ fontSize: 19, fontWeight: 800, color: theme.textPrimary }}>
                APU Generator (GEN)
              </div>
            </div>
            <div style={{ fontSize: 12, color: theme.textSecondary, marginBottom: 14 }}>
              Feeds AC Bus 1 & AC Bus 2 via APU Generator Line Contactor
            </div>

            {/* Load Items List */}
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {[
                { title: "Cockpit Avionics & Screens", desc: "Powers Primary Flight Displays (PFD), Navigation, & FMC", icon: <AvionicsIcon size={20} color={theme.accentCyan} /> },
                { title: "Fly-by-Wire & Systems", desc: "Hydraulic electric pumps, flight control computers", icon: <GearIcon size={20} color="#94A3B8" /> },
                { title: "DC Transformer Rectifiers (TRU)", desc: "Converts 115V AC to 28V DC for aircraft batteries", icon: <BatteryIcon size={20} color={theme.accentAmber} /> },
                { title: "Passenger Cabin & Galleys", desc: "Cabin lighting, seat power, in-flight entertainment, ovens", icon: <PowerIcon size={20} color={theme.accentGreen} /> },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    backgroundColor: "rgba(30, 41, 59, 0.6)",
                    border: "1px solid rgba(16, 185, 129, 0.25)",
                    borderRadius: 10,
                    padding: "9px 14px",
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: 26 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: theme.textPrimary }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: 11, color: theme.textSecondary }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(16, 185, 129, 0.3)",
              paddingTop: 8,
              fontSize: 11,
              color: theme.accentGreen,
              fontFamily: "monospace",
            }}
          >
            STATUS: 400Hz STABLE CONSTANT VOLTAGE SUPPLY
          </div>
        </div>

        {/* CENTER COLUMN: Central APU Energy Source Indicator */}
        <div
          style={{
            width: 150,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            opacity: interpolate(coreEntrance, [0, 1], [0, 1]),
            transform: `scale(${interpolate(coreEntrance, [0, 1], [0.8, 1])})`,
          }}
        >
          <div
            style={{
              width: 116,
              height: 116,
              borderRadius: "50%",
              backgroundColor: "#0F172A",
              border: `2.5px solid ${theme.accentCyan}`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: `0 0 ${16 + pulse * 10}px rgba(56, 189, 248, 0.4)`,
              textAlign: "center",
              position: "relative",
            }}
          >
            <TurbineIcon size={34} color={theme.accentOrange} />
            <span style={{ fontSize: 11, fontWeight: 900, color: theme.accentCyan, fontFamily: "monospace", marginTop: 4 }}>
              APU CORE
            </span>
            <span style={{ fontSize: 9, color: theme.textSecondary, fontFamily: "monospace" }}>
              100% RPM
            </span>
          </div>

          {/* Splitting Conduits */}
          <div style={{ marginTop: 14, textAlign: "center" }}>
            <span style={{ fontSize: 10, color: theme.textMuted, fontFamily: "monospace", letterSpacing: "0.08em" }}>
              DUAL OUTPUT
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: 45 PSI Pneumatic Bleed Air */}
        <div
          style={{
            flex: 1,
            backgroundColor: theme.cardBg,
            border: "1.5px solid rgba(56, 189, 248, 0.4)",
            borderRadius: 16,
            padding: "18px 22px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
            opacity: interpolate(bleedEntrance, [0, 1], [0, 1]),
            transform: `translateX(${interpolate(bleedEntrance, [0, 1], [30, 0])}px)`,
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  color: theme.accentCyan,
                  letterSpacing: "0.1em",
                  fontFamily: "monospace",
                }}
              >
                BRANCH B // PNEUMATIC SYSTEM
              </span>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  padding: "2px 8px",
                  borderRadius: 4,
                  backgroundColor: "rgba(56, 189, 248, 0.2)",
                  color: theme.accentCyan,
                  fontFamily: "monospace",
                }}
              >
                40 - 45 PSI HIGH PRESSURE
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
              <AirFlowIcon size={24} color={theme.accentCyan} />
              <div style={{ fontSize: 19, fontWeight: 800, color: theme.textPrimary }}>
                APU Bleed Air Valve
              </div>
            </div>
            <div style={{ fontSize: 12, color: theme.textSecondary, marginBottom: 14 }}>
              Directs compressed air across cross-bleed manifold for two vital jobs:
            </div>

            {/* Pneumatic Jobs */}
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {[
                { title: "Main Jet Engine Starting", desc: "Spins Air Turbine Starters (ATS) on CFM56/LEAP/Trent engines up to 25% N2", icon: <PlaneIcon size={20} color={theme.accentCyan} /> },
                { title: "Air Conditioning Packs (ECS)", desc: "Drives air cycle machines to cool and heat the cockpit & cabin", icon: <SnowflakeIcon size={20} color={theme.accentCyan} /> },
                { title: "Cabin Pressurization", desc: "Provides conditioned air pressure before main engines run", icon: <AirFlowIcon size={20} color={theme.accentCyan} /> },
                { title: "Wing & Cowl Anti-Ice (Backup)", desc: "Heats leading edges during severe ground/flight icing conditions", icon: <FlameIcon size={20} color={theme.accentRed} /> },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    backgroundColor: "rgba(30, 41, 59, 0.6)",
                    border: "1px solid rgba(56, 189, 248, 0.25)",
                    borderRadius: 10,
                    padding: "9px 14px",
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: 26 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: theme.textPrimary }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: 11, color: theme.textSecondary }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(56, 189, 248, 0.3)",
              paddingTop: 8,
              fontSize: 11,
              color: theme.accentCyan,
              fontFamily: "monospace",
            }}
          >
            STATUS: PNEUMATIC CROSS-BLEED MANIFOLD CHARGED
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
