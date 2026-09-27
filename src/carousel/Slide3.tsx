import React from "react";
import {
  JEV_COLORS,
  JEV_FONTS,
  jevSlideBase,
  WavyUnderline,
  JevBrandBadge,
  JevSlideCounter,
  JevDivider,
} from "./jevStyles";

/** Slide 3 — Easy Example: 2 Employees */
export const JevSlide3: React.FC = () => {
  return (
    <div style={jevSlideBase}>
      <JevBrandBadge />

      <div style={{ maxWidth: 700 }}>
        <div
          style={{
            fontSize: 66,
            fontWeight: 900,
            color: JEV_COLORS.textDark,
            fontFamily: JEV_FONTS.heading,
            letterSpacing: -1,
            lineHeight: 1.1,
          }}
        >
          Easy Example:
        </div>
        <div
          style={{
            fontSize: 66,
            fontWeight: 900,
            color: JEV_COLORS.textDark,
            fontFamily: JEV_FONTS.heading,
            letterSpacing: -1,
            lineHeight: 1.1,
          }}
        >
          2 Employees
        </div>
        <WavyUnderline width={360} />

        <div style={{ fontSize: 24, color: JEV_COLORS.textDark, fontWeight: 700, fontStyle: "italic", marginBottom: 10 }}>
          You ask both: <span style={{ textDecoration: "underline", fontWeight: 900 }}>"Is this customer ready to buy?"</span>
        </div>
      </div>

      {/* Side-by-Side Comparison Cards */}
      <div style={{ display: "flex", gap: 24, marginTop: 10, marginBottom: 16 }}>
        {/* The Talker */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF",
            border: "2.5px solid #1F2937",
            borderRadius: 20,
            padding: "24px 20px",
            boxShadow: "3px 3px 0px #1F2937",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ fontSize: 28 }}>🗣️</span>
            <div>
              <div style={{ fontSize: 22, fontWeight: 900, color: JEV_COLORS.textDark }}>The Talker</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: JEV_COLORS.blueAccent }}>(ChatGPT)</div>
            </div>
          </div>

          <div
            style={{
              fontSize: 18,
              color: JEV_COLORS.redAccent,
              fontStyle: "italic",
              lineHeight: 1.4,
              backgroundColor: "#FFF1F2",
              border: "1.5px dashed #FDA4AF",
              borderRadius: 12,
              padding: "16px",
              flex: 1,
            }}
          >
            "Great question! The customer asked about price, which is a good sign. They also said 'today', so maybe... however, we should also consider..."
            <div style={{ marginTop: 12, color: JEV_COLORS.textMuted, fontSize: 15 }}>
              ...still typing... 😴
            </div>
          </div>
        </div>

        {/* The Decider */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF",
            border: "2.5px solid #1F2937",
            borderRadius: 20,
            padding: "24px 20px",
            boxShadow: "3px 3px 0px #1F2937",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, alignSelf: "flex-start" }}>
            <span style={{ fontSize: 28 }}>⚡</span>
            <div>
              <div style={{ fontSize: 22, fontWeight: 900, color: JEV_COLORS.textDark }}>The Decider</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: JEV_COLORS.blueAccent }}>(Jev)</div>
            </div>
          </div>

          <div
            style={{
              fontSize: 82,
              fontWeight: 900,
              color: JEV_COLORS.greenAccent,
              fontFamily: JEV_FONTS.heading,
              lineHeight: 1,
              marginTop: 10,
            }}
          >
            YES
          </div>

          <div style={{ fontSize: 26, fontWeight: 900, color: JEV_COLORS.textDark, marginTop: 8 }}>
            94% sure
          </div>

          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: JEV_COLORS.blueAccent,
              marginTop: 8,
              backgroundColor: "#EFF6FF",
              padding: "4px 14px",
              borderRadius: 20,
            }}
          >
            done in 0.2 sec ⏱️
          </div>
        </div>
      </div>

      <JevDivider />

      {/* Summary lines */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }}>
        <div style={{ fontSize: 22, color: JEV_COLORS.redAccent, fontStyle: "italic" }}>
          — Talker = <span style={{ textDecoration: "underline", color: JEV_COLORS.textDark, fontWeight: 900 }}>slow</span>, costly, you have to read it all
        </div>
        <div style={{ fontSize: 22, color: JEV_COLORS.redAccent, fontStyle: "italic" }}>
          — Decider = <span style={{ textDecoration: "underline", color: JEV_COLORS.textDark, fontWeight: 900 }}>fast</span>, cheap, your app uses the answer <span style={{ textDecoration: "underline", color: JEV_COLORS.textDark, fontWeight: 900 }}>directly</span>
        </div>
      </div>

      <div style={{ marginTop: "auto", fontSize: 24, fontWeight: 900, color: JEV_COLORS.greenAccent, fontStyle: "italic" }}>
        👉 Jev is the Decider employee.
      </div>

      <JevSlideCounter current={3} total={6} />
    </div>
  );
};
