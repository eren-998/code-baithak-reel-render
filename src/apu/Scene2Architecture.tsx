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
import { AirFlowIcon, BatteryIcon, FuelPumpIcon, PowerIcon } from "./Icons";
import { theme } from "./types";

export const Scene2Architecture: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Staggered node animations
  const n1 = spring({ frame: frame - 5, fps, config: { damping: 14 } });
  const n2 = spring({ frame: frame - 16, fps, config: { damping: 14 } });
  const n3 = spring({ frame: frame - 27, fps, config: { damping: 14 } });
  const n4 = spring({ frame: frame - 38, fps, config: { damping: 14 } });
  const n5 = spring({ frame: frame - 49, fps, config: { damping: 14 } });

  const agbEntrance = spring({ frame: frame - 60, fps, config: { damping: 14 } });

  // Flow animation offset
  const flowOffset = -frame * 3;

  const coreNodes = [
    {
      num: "01",
      title: "AIR INTAKE",
      sub: "Inlet flap on fuselage skin",
      stat: "RAM AIR",
      color: theme.accentCyan,
      springVal: n1,
    },
    {
      num: "02",
      title: "COMPRESSOR",
      sub: "Centrifugal Impeller",
      stat: "~50,000 RPM",
      color: theme.accentCyan,
      springVal: n2,
    },
    {
      num: "03",
      title: "COMBUSTOR",
      sub: "Reverse-flow flame tube",
      stat: "1,100°C GAS",
      color: theme.accentAmber,
      springVal: n3,
    },
    {
      num: "04",
      title: "TURBINE",
      sub: "Radial / Axial power disc",
      stat: "EXTRACTS SHAFT HP",
      color: theme.accentOrange,
      springVal: n4,
    },
    {
      num: "05",
      title: "EXHAUST",
      sub: "Muffled tailcone outlet",
      stat: "HOT EFFLUENT",
      color: theme.accentRed,
      springVal: n5,
    },
  ];

  const accessoryItems = [
    { title: "AC GENERATOR", desc: "115V / 400Hz (90 kVA)", icon: <PowerIcon size={22} color={theme.accentGreen} />, color: theme.accentGreen },
    { title: "LOAD COMPRESSOR", desc: "Pneumatic Bleed (45 PSI)", icon: <AirFlowIcon size={22} color={theme.accentCyan} />, color: theme.accentCyan },
    { title: "ELECTRIC STARTER", desc: "Spools core to ~55% RPM", icon: <BatteryIcon size={22} color={theme.accentAmber} />, color: theme.accentAmber },
    { title: "FUEL & OIL PUMP", desc: "Hydro-mechanical FMU", icon: <FuelPumpIcon size={22} color="#A855F7" />, color: "#A855F7" },
  ];

  return (
    <AbsoluteFill>
      <Background />
      <Header
        currentStep={2}
        tag="SYSTEM ARCHITECTURE FLOWCHART"
        title="APU Flowchart & Subsystem Layout"
        subtitle="How thermal combustion energy converts into high-speed shaft rotation and electrical/pneumatic power"
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
          gap: 16,
        }}
      >
        {/* TOP ROW: Core Brayton Gas Generator Flowchart */}
        <div
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.cardBorder}`,
            borderRadius: 16,
            padding: "18px 24px",
            position: "relative",
            boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 14,
            }}
          >
            <span
              style={{
                fontSize: 12,
                fontWeight: 800,
                color: theme.accentCyan,
                letterSpacing: "0.12em",
                fontFamily: "monospace",
              }}
            >
              PRIMARY GAS GENERATOR CORE (CONTINUOUS FLOW)
            </span>
            <span
              style={{
                fontSize: 11,
                color: theme.textSecondary,
                fontFamily: "monospace",
              }}
            >
              FLOW DIRECTION: LEFT ➔ RIGHT
            </span>
          </div>

          {/* Connected Horizontal Flow Nodes */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            {coreNodes.map((node, idx) => {
              const op = interpolate(node.springVal, [0, 1], [0, 1]);
              const ty = interpolate(node.springVal, [0, 1], [25, 0]);

              return (
                <React.Fragment key={node.num}>
                  {/* Node Box */}
                  <div
                    style={{
                      flex: 1,
                      maxWidth: 200,
                      backgroundColor: "rgba(30, 41, 59, 0.8)",
                      border: `1.5px solid ${node.color}`,
                      borderRadius: 12,
                      padding: "12px 14px",
                      opacity: op,
                      transform: `translateY(${ty}px)`,
                      boxShadow: `0 4px 18px rgba(0,0,0,0.3), inset 0 0 12px ${node.color}15`,
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                      <span style={{ fontSize: 10, fontWeight: 900, color: node.color, fontFamily: "monospace" }}>
                        STAGE {node.num}
                      </span>
                      <span
                        style={{
                          fontSize: 9,
                          fontWeight: 700,
                          padding: "2px 5px",
                          backgroundColor: `${node.color}25`,
                          color: node.color,
                          borderRadius: 3,
                          fontFamily: "monospace",
                        }}
                      >
                        {node.stat}
                      </span>
                    </div>

                    <div style={{ fontSize: 15, fontWeight: 800, color: theme.textPrimary, letterSpacing: "-0.01em" }}>
                      {node.title}
                    </div>
                    <div style={{ fontSize: 11, color: theme.textSecondary, marginTop: 3 }}>
                      {node.sub}
                    </div>
                  </div>

                  {/* Flow Arrow Interconnect (between nodes) */}
                  {idx < coreNodes.length - 1 && (
                    <div style={{ width: 38, display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <svg width="38" height="20" viewBox="0 0 38 20">
                        <line
                          x1="2"
                          y1="10"
                          x2="32"
                          y2="10"
                          stroke={coreNodes[idx + 1].color}
                          strokeWidth="2.5"
                          strokeDasharray="5 3"
                          strokeDashoffset={flowOffset}
                        />
                        <polygon points="32,6 38,10 32,14" fill={coreNodes[idx + 1].color} />
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* MIDDLE: Visual Coupling Shaft Indicator */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 28 }}>
          <svg width="600" height="28" viewBox="0 0 600 28">
            <line x1="300" y1="0" x2="300" y2="28" stroke="#94A3B8" strokeWidth="3" strokeDasharray="4 3" />
            <circle cx="300" cy="14" r="6" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />
            <text x="320" y="18" fill={theme.accentCyan} fontSize="10" fontWeight="bold" fontFamily="monospace">
              MECHANICAL DRIVE SHAFT COUPLING (48,800 RPM)
            </text>
          </svg>
        </div>

        {/* BOTTOM ROW: Accessory Gearbox & Driven Power Systems */}
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
            opacity: interpolate(agbEntrance, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(agbEntrance, [0, 1], [30, 0])}px)`,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: theme.accentGreen,
                  letterSpacing: "0.12em",
                  fontFamily: "monospace",
                }}
              >
                MECHANICAL ACCESSORY GEARBOX (AGB) // DRIVEN SUBSYSTEMS
              </span>
              <span
                style={{
                  fontSize: 10,
                  padding: "2px 8px",
                  borderRadius: 4,
                  backgroundColor: "rgba(16, 185, 129, 0.15)",
                  color: theme.accentGreen,
                  fontFamily: "monospace",
                }}
              >
                GEAR REDUCTION RATIO: ~4:1
              </span>
            </div>
            <span style={{ fontSize: 11, color: theme.textMuted, fontFamily: "monospace" }}>
              CONVERTS CORE TORQUE TO ELECTRICAL & PNEUMATIC ENERGY
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginTop: 10 }}>
            {accessoryItems.map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: "rgba(30, 41, 59, 0.6)",
                  border: `1px solid ${item.color}50`,
                  borderRadius: 12,
                  padding: "14px 16px",
                  display: "flex",
                  gap: 12,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    backgroundColor: `${item.color}20`,
                    border: `1px solid ${item.color}60`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: theme.textPrimary }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: 11, color: item.color, fontWeight: 600, marginTop: 2 }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid rgba(51, 65, 85, 0.4)",
              paddingTop: 8,
              fontSize: 11,
              color: theme.textSecondary,
              fontFamily: "monospace",
            }}
          >
            <span>ECB (ELECTRONIC CONTROL BOX) GOVERNS CONSTANT SPEED</span>
            <span style={{ color: theme.accentGreen }}>GOVERNED AT 100% OPERATING RPM</span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
