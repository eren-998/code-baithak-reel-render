import React from "react";
import {
  JEV_COLORS,
  JEV_FONTS,
  jevSlideBase,
  WavyUnderline,
  JevBrandBadge,
  JevSlideCounter,
} from "./jevStyles";

/** Slide 4 — How Does It Work? */
export const JevSlide4: React.FC = () => {
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
          How Does It
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
          Work?
        </div>
        <WavyUnderline width={280} />

        <div style={{ fontSize: 24, color: JEV_COLORS.textDark, fontWeight: 700, fontStyle: "italic", marginBottom: 16 }}>
          Just <span style={{ textDecoration: "underline", fontWeight: 900 }}>3 steps</span>. Let's take a WhatsApp message 👇
        </div>
      </div>

      {/* 3 Steps */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Step 1 */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                backgroundColor: "#1F2937",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                fontWeight: 900,
              }}
            >
              1
            </div>
            <div style={{ fontSize: 22, color: JEV_COLORS.redAccent, fontStyle: "italic", fontWeight: 700 }}>
              You give it <span style={{ textDecoration: "underline", color: JEV_COLORS.textDark, fontWeight: 900 }}>information</span>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "2px solid #1F2937",
              borderRadius: 16,
              padding: "14px 20px",
              boxShadow: "2px 2px 0px #1F2937",
              fontSize: 20,
              color: JEV_COLORS.textDark,
              fontStyle: "italic",
            }}
          >
            💬 "Hi! What's the price? I want to join today."
          </div>
        </div>

        {/* Step 2 */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                backgroundColor: "#1F2937",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                fontWeight: 900,
              }}
            >
              2
            </div>
            <div style={{ fontSize: 22, color: JEV_COLORS.redAccent, fontStyle: "italic", fontWeight: 700 }}>
              You ask a question with <span style={{ textDecoration: "underline", color: JEV_COLORS.textDark, fontWeight: 900 }}>fixed options</span>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "2px solid #1F2937",
              borderRadius: 16,
              padding: "14px 20px",
              boxShadow: "2px 2px 0px #1F2937",
              fontSize: 22,
              color: JEV_COLORS.textDark,
              fontWeight: 800,
              textAlign: "center",
            }}
          >
            <span style={{ color: JEV_COLORS.redAccent }}>?</span> Hot 🔥 &nbsp;/&nbsp; Warm 🙂 &nbsp;/&nbsp; Cold 🧊 <span style={{ color: JEV_COLORS.redAccent }}>?</span>
          </div>
        </div>

        {/* Step 3 */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                backgroundColor: "#1F2937",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                fontWeight: 900,
              }}
            >
              3
            </div>
            <div style={{ fontSize: 22, color: JEV_COLORS.redAccent, fontStyle: "italic", fontWeight: 700 }}>
              It picks <span style={{ textDecoration: "underline", color: JEV_COLORS.textDark, fontWeight: 900 }}>one</span> + says <span style={{ textDecoration: "underline", color: JEV_COLORS.textDark, fontWeight: 900 }}>how sure</span> it is
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#ECFDF5",
              border: "2px solid #1F2937",
              borderRadius: 16,
              padding: "14px 20px",
              boxShadow: "2px 2px 0px #1F2937",
              fontSize: 26,
              color: JEV_COLORS.greenAccent,
              fontWeight: 900,
              textAlign: "center",
            }}
          >
            🔥 HOT — 91% sure
          </div>
        </div>
      </div>

      {/* Bottom Tip Box */}
      <div
        style={{
          marginTop: "auto",
          backgroundColor: "#FFFFFF",
          border: "2px dashed #2563EB",
          borderRadius: 16,
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <span style={{ fontSize: 28 }}>💡</span>
        <div style={{ fontSize: 20, color: JEV_COLORS.textDark, fontStyle: "italic", fontWeight: 700 }}>
          <span style={{ fontWeight: 900, fontStyle: "normal" }}>That's it!</span> No essay. No extra words. Just the answer your automation needs.
        </div>
      </div>

      <JevSlideCounter current={4} total={6} />
    </div>
  );
};
