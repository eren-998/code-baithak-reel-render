import React from "react";
import { theme } from "./types";

interface CockpitPanelProps {
  masterOn: boolean;
  startActive: boolean;
  availActive: boolean;
  faultActive?: boolean;
}

export const CockpitPanel: React.FC<CockpitPanelProps> = ({
  masterOn,
  startActive,
  availActive,
  faultActive = false,
}) => {
  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        padding: "16px 20px",
        backgroundColor: "#1E293B",
        border: "2px solid #475569",
        borderRadius: 14,
        boxShadow: "0 12px 30px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.1)",
      }}
    >
      {/* 1. MASTER SW PUSHBUTTON */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <span
          style={{
            fontSize: 10,
            fontWeight: 800,
            color: "#CBD5E1",
            letterSpacing: "0.1em",
            fontFamily: "monospace",
          }}
        >
          MASTER SW
        </span>
        <div
          style={{
            width: 76,
            height: 76,
            backgroundColor: "#0F172A",
            border: "2px solid #334155",
            borderRadius: 8,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Fault Indicator (Top half) */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: faultActive ? "rgba(245, 158, 11, 0.25)" : "transparent",
              borderBottom: "1px solid #334155",
            }}
          >
            <span
              style={{
                fontSize: 10,
                fontWeight: 900,
                color: faultActive ? theme.accentAmber : "#475569",
                letterSpacing: "0.08em",
                fontFamily: "monospace",
                textShadow: faultActive ? `0 0 8px ${theme.accentAmber}` : "none",
              }}
            >
              FAULT
            </span>
          </div>
          {/* ON Indicator (Bottom half) */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: masterOn ? "rgba(56, 189, 248, 0.2)" : "transparent",
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 900,
                color: masterOn ? theme.accentCyan : "#475569",
                letterSpacing: "0.08em",
                fontFamily: "monospace",
                textShadow: masterOn ? `0 0 8px ${theme.accentCyan}` : "none",
              }}
            >
              ON
            </span>
          </div>
        </div>
      </div>

      {/* 2. START PUSHBUTTON */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <span
          style={{
            fontSize: 10,
            fontWeight: 800,
            color: "#CBD5E1",
            letterSpacing: "0.1em",
            fontFamily: "monospace",
          }}
        >
          APU START
        </span>
        <div
          style={{
            width: 76,
            height: 76,
            backgroundColor: "#0F172A",
            border: "2px solid #334155",
            borderRadius: 8,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* AVAIL Indicator (Top half) */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: availActive ? "rgba(16, 185, 129, 0.3)" : "transparent",
              borderBottom: "1px solid #334155",
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 900,
                color: availActive ? theme.accentGreen : "#475569",
                letterSpacing: "0.08em",
                fontFamily: "monospace",
                textShadow: availActive ? `0 0 10px ${theme.accentGreen}` : "none",
              }}
            >
              AVAIL
            </span>
          </div>
          {/* ON / START Indicator (Bottom half) */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: startActive ? "rgba(56, 189, 248, 0.2)" : "transparent",
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 900,
                color: startActive ? theme.accentCyan : "#475569",
                letterSpacing: "0.08em",
                fontFamily: "monospace",
                textShadow: startActive ? `0 0 8px ${theme.accentCyan}` : "none",
              }}
            >
              ON
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
