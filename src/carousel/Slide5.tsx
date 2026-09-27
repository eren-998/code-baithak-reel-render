import React from "react";
import {
  JEV_COLORS,
  JEV_FONTS,
  jevSlideBase,
  WavyUnderline,
  JevBrandBadge,
  JevSlideCounter,
} from "./jevStyles";

/** Slide 5 — Many Questions At Once! */
export const JevSlide5: React.FC = () => {
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
          Many Questions
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
          At Once!
        </div>
        <WavyUnderline width={360} />

        <div style={{ fontSize: 24, color: JEV_COLORS.textDark, fontWeight: 700, marginBottom: 12 }}>
          One message in ➔ <span style={{ textDecoration: "underline", fontWeight: 900 }}>all answers out, together</span> 🚀
        </div>
      </div>

      {/* Visual Flow Tree Diagram */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 10, marginBottom: 16 }}>
        {/* Left Customer Message */}
        <div
          style={{
            flex: 1.1,
            backgroundColor: "#FFFFFF",
            border: "2.5px solid #1F2937",
            borderRadius: 18,
            padding: "18px",
            boxShadow: "3px 3px 0px #1F2937",
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 900, color: JEV_COLORS.blueAccent, marginBottom: 8 }}>
            💬 Customer:
          </div>
          <div style={{ fontSize: 18, color: JEV_COLORS.redAccent, fontStyle: "italic", lineHeight: 1.4 }}>
            "Bhai, course ka price batao, aaj hi join karna hai. Urgent!"
          </div>
        </div>

        {/* Center Jev Node */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ fontSize: 24, fontWeight: 900, color: "#1F2937" }}>➔</div>
          <div
            style={{
              border: "2.5px solid #1F2937",
              borderRadius: "50%",
              width: 76,
              height: 76,
              backgroundColor: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 900,
              color: JEV_COLORS.redAccent,
              fontFamily: JEV_FONTS.heading,
              boxShadow: "2px 2px 0px #1F2937",
              margin: "6px 0",
            }}
          >
            Jev
          </div>
          <div style={{ fontSize: 14, fontWeight: 800, color: JEV_COLORS.blueAccent, fontStyle: "italic" }}>
            all in one go!
          </div>
        </div>

        {/* Right 4 Output Cards */}
        <div style={{ flex: 1.2, display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { q: "Wants to buy?", a: "YES • 96%", aColor: JEV_COLORS.greenAccent },
            { q: "Lead type?", a: "🔥 HOT", aColor: JEV_COLORS.redAccent },
            { q: "Language?", a: "Hinglish", aColor: JEV_COLORS.blueAccent },
            { q: "Is it spam?", a: "NO • 2%", aColor: JEV_COLORS.greenAccent },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#FFFFFF",
                border: "2px solid #1F2937",
                borderRadius: 14,
                padding: "8px 14px",
                boxShadow: "2px 2px 0px #1F2937",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ fontSize: 15, fontWeight: 700, color: JEV_COLORS.textDark, fontStyle: "italic" }}>
                {item.q}
              </div>
              <div style={{ fontSize: 16, fontWeight: 900, color: item.aColor }}>
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dashed divider */}
      <div style={{ width: "100%", borderBottom: "2px dashed #9CA3AF", margin: "8px 0 16px" }} />

      {/* Bullet points */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ fontSize: 22, color: JEV_COLORS.redAccent, fontStyle: "italic" }}>
          — No waiting for one answer <span style={{ textDecoration: "underline", color: JEV_COLORS.textDark, fontWeight: 900 }}>after another</span>
        </div>
        <div style={{ fontSize: 22, color: JEV_COLORS.redAccent, fontStyle: "italic" }}>
          — Everything comes back <span style={{ textDecoration: "underline", color: JEV_COLORS.textDark, fontWeight: 900 }}>together</span> = <span style={{ color: JEV_COLORS.redAccent, fontWeight: 900 }}>super fast</span>
        </div>
      </div>

      <JevSlideCounter current={5} total={6} />
    </div>
  );
};
