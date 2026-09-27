import React from "react";
import { Img, staticFile } from "remotion";
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
import { TalkingHeadDoodle, LightningDoodle } from "./jevIcons";

/** Slide 6 — In One Line... & CTA */
export const JevSlide6: React.FC = () => {
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
          In One Line...
        </div>
        <WavyUnderline width={340} />

        {/* Formula */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
          <OvalTag text="AI + Jev" />
          <span style={{ fontSize: 28, color: "#1F2937", fontWeight: 900 }}>➔</span>
          <div style={{ fontSize: 24, color: JEV_COLORS.redAccent, fontWeight: 700, fontStyle: "italic" }}>
            Not AI <span style={{ textDecoration: "underline", color: JEV_COLORS.textDark, fontWeight: 900 }}>vs</span> Jev. It's AI <span style={{ textDecoration: "underline", color: JEV_COLORS.textDark, fontWeight: 900 }}>with</span> Jev.
          </div>
        </div>
      </div>

      <JevDivider />

      {/* Two Brains Cards */}
      <div style={{ display: "flex", gap: 24, marginTop: 4, marginBottom: 14 }}>
        {/* ChatGPT */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF",
            border: "2.5px solid #1F2937",
            borderRadius: 20,
            padding: "20px 18px",
            boxShadow: "3px 3px 0px #1F2937",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <TalkingHeadDoodle size={44} />
          <div style={{ fontSize: 26, fontWeight: 900, color: JEV_COLORS.textDark, fontStyle: "italic", marginTop: 6 }}>
            ChatGPT
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: JEV_COLORS.redAccent, fontStyle: "italic", marginTop: 4 }}>
            the talking brain
          </div>
          <div style={{ fontSize: 16, color: JEV_COLORS.textMuted, fontStyle: "italic", marginTop: 10 }}>
            writing • planning • explaining
          </div>
        </div>

        {/* Jev */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF",
            border: "2.5px solid #1F2937",
            borderRadius: 20,
            padding: "20px 18px",
            boxShadow: "3px 3px 0px #1F2937",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <LightningDoodle size={44} />
          <div style={{ fontSize: 26, fontWeight: 900, color: JEV_COLORS.textDark, fontStyle: "italic", marginTop: 6 }}>
            Jev
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: JEV_COLORS.redAccent, fontStyle: "italic", marginTop: 4 }}>
            the deciding brain
          </div>
          <div style={{ fontSize: 16, color: JEV_COLORS.textMuted, fontStyle: "italic", marginTop: 10 }}>
            sorting • routing • checking
          </div>
        </div>
      </div>

      {/* When to use which guide card */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          border: "2px dashed #1E40AF",
          borderRadius: 18,
          padding: "16px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 14,
        }}
      >
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, fontWeight: 900, color: JEV_COLORS.blueAccent }}>USE CHATGPT FOR:</div>
          <div style={{ fontSize: 16, color: JEV_COLORS.textDark, fontWeight: 700, fontStyle: "italic" }}>
            Emails, code gen &amp; creative work
          </div>
        </div>
        <div style={{ width: 2, height: 40, backgroundColor: "#E5E7EB", margin: "0 16px" }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, fontWeight: 900, color: JEV_COLORS.greenAccent }}>USE JEV FOR:</div>
          <div style={{ fontSize: 16, color: JEV_COLORS.textDark, fontWeight: 700, fontStyle: "italic" }}>
            Routing, classification &amp; 1000s of checks
          </div>
        </div>
      </div>

      {/* Main takeaway */}
      <div style={{ fontSize: 22, color: JEV_COLORS.textDark, fontWeight: 700, marginBottom: 12 }}>
        Use Jev when you ask the <span style={{ textDecoration: "underline", fontWeight: 900 }}>same small question</span> <span style={{ textDecoration: "underline", fontWeight: 900 }}>1000s of times</span>.
      </div>

      <JevDivider />

      {/* CTA Box with Creator Photo */}
      <div
        style={{
          marginTop: "auto",
          backgroundColor: "#FFFFFF",
          border: "2.5px solid #1F2937",
          borderRadius: 20,
          padding: "16px 22px",
          display: "flex",
          alignItems: "center",
          gap: 18,
          boxShadow: "3px 3px 0px #1F2937",
        }}
      >
        <div
          style={{
            width: 76,
            height: 76,
            borderRadius: "50%",
            overflow: "hidden",
            border: "2.5px solid #1F2937",
            flexShrink: 0,
            backgroundColor: "#EFF6FF",
          }}
        >
          <Img
            src={staticFile("headshot.png")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
            }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 22, fontWeight: 900, color: JEV_COLORS.greenAccent, fontStyle: "italic", lineHeight: 1.3 }}>
            Comment "JEV" &amp; follow @code_baithak for more AI, made simple!
          </div>
        </div>
      </div>

      <JevSlideCounter current={6} total={6} />
    </div>
  );
};
