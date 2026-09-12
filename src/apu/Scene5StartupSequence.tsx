import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Background } from "./Background";
import { CockpitPanel } from "./CockpitPanel";
import { GaugeMeter } from "./GaugeMeter";
import { Header } from "./Header";
import { theme } from "./types";

export const Scene5StartupSequence: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const simulatedRpm = interpolate(
    frame,
    [0, 30, 80, 160, 220],
    [0, 5, 45, 99, 100],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );

  const simulatedEgt = interpolate(
    frame,
    [0, 30, 80, 120, 160, 220],
    [22, 25, 180, 680, 420, 385],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );

  const isMasterOn = frame >= 10;
  const isStartOn = frame >= 35 && frame <= 140;
  const isAvail = frame >= 170;

  let activeStep = 0;
  if (frame < 35) activeStep = 1;
  else if (frame < 80) activeStep = 2;
  else if (frame < 160) activeStep = 3;
  else if (frame < 220) activeStep = 4;
  else activeStep = 5;

  const steps = [
    {
      step: 1,
      name: "MASTER SWITCH [ON]",
      desc: "Inlet air door opens, low-pressure fuel isolation valve opens, Electronic Control Box (ECB) runs BIT test.",
      status: frame >= 10 ? "COMPLETED" : "ARMED",
      color: theme.accentCyan,
    },
    {
      step: 2,
      name: "START BUTTON [ENGAGE]",
      desc: "Aircraft battery/transformer energizes DC electric starter motor. Compressor spools up toward 50% RPM.",
      status: frame >= 35 ? (frame >= 80 ? "DISENGAGED" : "RUNNING") : "PENDING",
      color: theme.accentAmber,
    },
    {
      step: 3,
      name: "LIGHT-OFF & SELF-SUSTAIN",
      desc: "Fuel spray ignited by high-energy spark igniters. Core accelerates past 55% RPM; starter automatically disconnects.",
      status: frame >= 80 ? (frame >= 160 ? "IGNITED" : "ACCELERATING") : "PENDING",
      color: theme.accentOrange,
    },
    {
      step: 4,
      name: "100% GOVERNED SPEED (AVAIL)",
      desc: "FADEC stabilizes APU at 100% RPM (48,800 RPM). Overhead green 'AVAIL' light illuminates on cockpit panel.",
      status: isAvail ? "APU AVAIL (ONLINE)" : "SPOOLING",
      color: theme.accentGreen,
    },
    {
      step: 5,
      name: "MAIN ENGINE PNEUMATIC START",
      desc: "APU Bleed Air Valve opens, delivering 45 PSI high-pressure air to spin Engine 1 and Engine 2 up to fuel-on speed.",
      status: frame >= 220 ? "START AIR ACTIVE" : "READY",
      color: theme.accentCyan,
    },
  ];

  const leftSpring = spring({ frame: frame - 5, fps, config: { damping: 14 } });
  const rightSpring = spring({ frame: frame - 15, fps, config: { damping: 14 } });

  return (
    <AbsoluteFill style={{ backgroundColor: theme.bg }}>
      <Background />
      <Header
        currentStep={5}
        tag="COCKPIT STARTUP & AUTOMATION"
        title="APU Startup Sequence"
        subtitle="Automatic FADEC/ECB controlled sequence from battery ignition to 100% APU AVAIL"
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
          alignItems: "stretch",
        }}
      >
        {/* LEFT COLUMN: Cockpit Panel & Live Telemetry Gauges */}
        <div
          style={{
            flex: "1 1 45%",
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.cardBorder}`,
            borderRadius: 16,
            padding: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
            opacity: interpolate(leftSpring, [0, 1], [0, 1]),
            transform: `translateX(${interpolate(leftSpring, [0, 1], [-30, 0])}px)`,
          }}
        >
          <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 11, fontWeight: 800, color: theme.accentCyan, letterSpacing: "0.1em", fontFamily: "monospace" }}>
              COCKPIT OVERHEAD PANEL // ECAM TELEMETRY
            </span>
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                padding: "2px 8px",
                borderRadius: 4,
                backgroundColor: isAvail ? "rgba(16, 185, 129, 0.2)" : "rgba(245, 158, 11, 0.2)",
                color: isAvail ? theme.accentGreen : theme.accentAmber,
                fontFamily: "monospace",
              }}
            >
              {isAvail ? "● ONLINE & GOVERNED" : "○ STARTING UP"}
            </span>
          </div>

          {/* Cockpit Pushbutton Switch Unit */}
          <div style={{ margin: "10px 0" }}>
            <CockpitPanel
              masterOn={isMasterOn}
              startActive={isStartOn}
              availActive={isAvail}
              faultActive={false}
            />
          </div>

          {/* Dual Live Gauges */}
          <div style={{ display: "flex", gap: 16 }}>
            <GaugeMeter
              label="APU SPEED (N%)"
              value={simulatedRpm}
              unit="%"
              min={0}
              max={110}
              warnThreshold={101}
              dangerThreshold={107}
              size={135}
            />
            <GaugeMeter
              label="EXHAUST GAS TEMP"
              value={simulatedEgt}
              unit="°C"
              min={0}
              max={800}
              warnThreshold={650}
              dangerThreshold={720}
              size={135}
            />
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              borderTop: "1px solid rgba(51, 65, 85, 0.4)",
              paddingTop: 8,
              fontSize: 10,
              color: theme.textSecondary,
              fontFamily: "monospace",
            }}
          >
            <span>ECB MONITORS OVERSPEED & OVERTEMP</span>
            <span style={{ color: theme.accentGreen }}>AUTO-SHUTDOWN ON FAULT</span>
          </div>
        </div>

        {/* RIGHT COLUMN: 5 Sequential Event Timeline Cards */}
        <div
          style={{
            flex: "1 1 55%",
            display: "flex",
            flexDirection: "column",
            gap: 9,
            opacity: interpolate(rightSpring, [0, 1], [0, 1]),
            transform: `translateX(${interpolate(rightSpring, [0, 1], [30, 0])}px)`,
          }}
        >
          {steps.map((s) => {
            const isHighlighted = s.step === activeStep;
            const isPassed = s.step < activeStep;

            return (
              <div
                key={s.step}
                style={{
                  flex: 1,
                  backgroundColor: isHighlighted ? "rgba(30, 41, 59, 0.95)" : "rgba(15, 23, 42, 0.6)",
                  border: `1.5px solid ${isHighlighted ? s.color : isPassed ? "rgba(16, 185, 129, 0.4)" : "rgba(51, 65, 85, 0.3)"}`,
                  borderRadius: 10,
                  padding: "8px 14px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  boxShadow: isHighlighted ? `0 4px 18px ${s.color}25` : "none",
                  transition: "all 0.25s ease",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 900,
                        color: isPassed ? theme.accentGreen : s.color,
                        fontFamily: "monospace",
                      }}
                    >
                      STEP 0{s.step}
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 800, color: theme.textPrimary }}>
                      {s.name}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: 9,
                      fontWeight: 700,
                      padding: "2px 6px",
                      borderRadius: 3,
                      backgroundColor: isPassed ? "rgba(16, 185, 129, 0.2)" : `${s.color}20`,
                      color: isPassed ? theme.accentGreen : s.color,
                      fontFamily: "monospace",
                    }}
                  >
                    {isPassed ? "✓ COMPLETED" : s.status}
                  </span>
                </div>

                <div style={{ fontSize: 11, color: theme.textSecondary, lineHeight: 1.3 }}>
                  {s.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
