import React from "react";
import {
  JEV_COLORS,
  JEV_FONTS,
  jevSlideBase,
  WavyUnderline,
  JevBrandBadge,
  JevSlideCounter,
  JevDivider,
  OvalTag,
} from "./jevStyles";

/** Slide 2 — What is Jev? */
export const JevSlide2: React.FC = () => {
  return (
    <div style={jevSlideBase}>
      <JevBrandBadge />

      <div style={{ maxWidth: 700 }}>
        <div
          style={{
            fontSize: 70,
            fontWeight: 900,
            color: JEV_COLORS.textDark,
            fontFamily: JEV_FONTS.heading,
            letterSpacing: -1,
            lineHeight: 1.1,
          }}
        >
          What is Jev?
        </div>
        <WavyUnderline width={320} />

        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
          <OvalTag text="Jev" />
          <span style={{ fontSize: 28, color: "#1F2937", fontWeight: 900 }}>➔</span>
          <div style={{ fontSize: 23, color: JEV_COLORS.redAccent, fontWeight: 700, fontStyle: "italic", lineHeight: 1.4 }}>
            A new AI model. You ask a question, it gives <span style={{ textDecoration: "underline", color: JEV_COLORS.textDark, fontWeight: 900 }}>one clear answer</span> + tells you <span style={{ textDecoration: "underline", color: JEV_COLORS.textDark, fontWeight: 900 }}>how sure</span> it is.
          </div>
        </div>
      </div>

      <JevDivider />

      {/* The Basic Facts Section */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 28, fontWeight: 900, color: JEV_COLORS.blueAccent, textDecoration: "underline", marginBottom: 16 }}>
          ✦ The basic facts
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { text: "Made by", bold: "TypeSafe AI", rest: "— a startup from San Francisco" },
            { text: "Launched on", bold: "15 Sept 2026", rest: "— super new!" },
            { text: "Founder", bold: "Diogo Almeida", rest: "worked at OpenAI & helped build ChatGPT" },
            { text: "Raised", bold: "$40 million", rest: "to build it" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 10, fontSize: 22, color: JEV_COLORS.redAccent, fontStyle: "italic" }}>
              <span style={{ color: "#1F2937", fontSize: 24, fontStyle: "normal" }}>—</span>
              <div>
                {item.text} <span style={{ color: JEV_COLORS.textDark, fontWeight: 900, textDecoration: "underline", fontStyle: "normal" }}>{item.bold}</span> {item.rest}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dashed divider */}
      <div style={{ width: "100%", borderBottom: "2px dashed #9CA3AF", margin: "10px 0 20px" }} />

      {/* The Big Difference Section */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 28, fontWeight: 900, color: JEV_COLORS.blueAccent, textDecoration: "underline", marginBottom: 16 }}>
          ✦ The big difference
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, fontSize: 23, color: JEV_COLORS.redAccent, fontStyle: "italic" }}>
            <span style={{ color: "#1F2937", fontSize: 24, fontStyle: "normal" }}>—</span>
            <div>
              ChatGPT / Claude ➔ <span style={{ color: JEV_COLORS.textDark, fontWeight: 900, textDecoration: "underline", fontStyle: "normal" }}>write</span> long answers
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, fontSize: 23, color: JEV_COLORS.redAccent, fontStyle: "italic" }}>
            <span style={{ color: "#1F2937", fontSize: 24, fontStyle: "normal" }}>—</span>
            <div>
              Jev ➔ only <span style={{ color: JEV_COLORS.textDark, fontWeight: 900, textDecoration: "underline", fontStyle: "normal" }}>decides</span> (no writing at all)
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Box */}
      <div
        style={{
          marginTop: "auto",
          backgroundColor: "#FFFFFF",
          border: "2px dashed #1E40AF",
          borderRadius: 16,
          padding: "16px 24px",
          textAlign: "center",
          fontSize: 26,
          fontWeight: 900,
          color: JEV_COLORS.textDark,
          fontFamily: JEV_FONTS.heading,
        }}
      >
        <span style={{ color: JEV_COLORS.blueAccent }}>Normal AI writes.</span> Jev <span style={{ textDecoration: "underline" }}>decides</span>. ✍️ vs ⚡
      </div>

      <JevSlideCounter current={2} total={6} />
    </div>
  );
};
