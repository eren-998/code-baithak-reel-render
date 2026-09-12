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
import { TurbineGraphic } from "./TurbineGraphic";
import { theme } from "./types";

export const Scene3Thermodynamics: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active highlighted stage cycles based on frame
  let activeStage: "intake" | "compressor" | "combustor" | "turbine" | "exhaust" | "all" = "all";
  if (frame < 50) {
    activeStage = "intake";
  } else if (frame < 110) {
    activeStage = "compressor";
  } else if (frame < 170) {
    activeStage = "combustor";
  } else if (frame < 230) {
    activeStage = "turbine";
  } else {
    activeStage = "all";
  }

  const stages = [
    {
      id: "intake",
      num: "01",
      name: "INDUCTION (INTAKE)",
      desc: "Ambient air enters via NACA flap on fuselage skin. Screen prevents foreign object ingestion (FOD).",
      metric: "P: 14.7 PSI | T: Amb",
      color: theme.accentCyan,
    },
    {
      id: "compressor",
      num: "02",
      name: "COMPRESSION",
      desc: "High-speed centrifugal impeller accelerates and compresses air, raising pressure and density ~6x.",
      metric: "P: 90 PSI | T: 240°C",
      color: theme.accentCyan,
    },
    {
      id: "combustor",
      num: "03",
      name: "COMBUSTION",
      desc: "Fuel spray nozzles inject Jet A-1 into reverse-flow chamber. Continuous high-intensity flame burning.",
      metric: "T: 1,150°C Peak",
      color: theme.accentAmber,
    },
    {
      id: "turbine",
      num: "04",
      name: "EXPANSION (POWER)",
      desc: "Superheated gas expands over turbine blades, spinning the shaft at 100% governed speed (~50k RPM).",
      metric: "Work -> Drive Shaft",
      color: theme.accentOrange,
    },
  ];

  const leftCardSpring = spring({ frame: frame - 5, fps, config: { damping: 14 } });
  const rightCardSpring = spring({ frame: frame - 15, fps, config: { damping: 14 } });

  return (
    <AbsoluteFill>
      <Background />
      <Header
        currentStep={3}
        tag="THERMODYNAMIC CYCLE"
        title="Brayton Gas Turbine Cycle"
        subtitle="Continuous flow: Induction ➔ Compression ➔ Combustion ➔ Expansion"
      />

      <div
        style={{
          position: "absolute",
          top: 165,
          left: 56,
          right: 56,
          bottom: 35,
          display: "flex",
          gap: 28,
          alignItems: "center",
        }}
      >
        {/* LEFT: Turbine Cutaway Visualizer */}
        <div
          style={{
            flex: "1 1 54%",
            height: "100%",
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.cardBorder}`,
            borderRadius: 16,
            padding: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
            opacity: interpolate(leftCardSpring, [0, 1], [0, 1]),
            transform: `translateX(${interpolate(leftCardSpring, [0, 1], [-30, 0])}px)`,
          }}
        >
          <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 12, fontWeight: 800, color: theme.accentCyan, letterSpacing: "0.1em", fontFamily: "monospace" }}>
              CROSS-SECTION THERMODYNAMIC SIMULATION
            </span>
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                padding: "3px 8px",
                borderRadius: 4,
                backgroundColor: "rgba(245, 158, 11, 0.15)",
                color: theme.accentAmber,
                fontFamily: "monospace",
              }}
            >
              ACTIVE STAGE: {activeStage.toUpperCase()}
            </span>
          </div>

          {/* Animated SVG Turbine Cutaway with full scale */}
          <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <TurbineGraphic highlightStage={activeStage} rpmFactor={1} scale={1.05} showLabels={true} />
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              borderTop: "1px solid rgba(51, 65, 85, 0.4)",
              paddingTop: 10,
              fontSize: 11,
              color: theme.textSecondary,
              fontFamily: "monospace",
            }}
          >
            <span>SINGLE-SHAFT GAS TURBINE ENGINE</span>
            <span style={{ color: theme.accentCyan }}>GAS EXPANSION SPINS COMPRESSOR + AGB</span>
          </div>
        </div>

        {/* RIGHT: 4 Stage Cards */}
        <div
          style={{
            flex: "1 1 46%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            opacity: interpolate(rightCardSpring, [0, 1], [0, 1]),
            transform: `translateX(${interpolate(rightCardSpring, [0, 1], [30, 0])}px)`,
          }}
        >
          {stages.map((stg) => {
            const isCurrent = activeStage === "all" || activeStage === stg.id;

            return (
              <div
                key={stg.id}
                style={{
                  flex: 1,
                  backgroundColor: isCurrent ? "rgba(30, 41, 59, 0.95)" : "rgba(15, 23, 42, 0.5)",
                  border: `1.5px solid ${isCurrent ? stg.color : "rgba(51, 65, 85, 0.4)"}`,
                  borderRadius: 12,
                  padding: "12px 18px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  boxShadow: isCurrent ? `0 4px 20px ${stg.color}20` : "none",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 11, fontWeight: 900, color: stg.color, fontFamily: "monospace" }}>
                      STEP {stg.num}
                    </span>
                    <span style={{ fontSize: 14, fontWeight: 800, color: theme.textPrimary }}>
                      {stg.name}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      padding: "2px 6px",
                      borderRadius: 4,
                      backgroundColor: `${stg.color}20`,
                      color: stg.color,
                      fontFamily: "monospace",
                    }}
                  >
                    {stg.metric}
                  </span>
                </div>

                <div style={{ fontSize: 12, color: theme.textSecondary, lineHeight: 1.35 }}>
                  {stg.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
