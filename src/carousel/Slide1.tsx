import React from "react";
import { Img, staticFile } from "remotion";
import {
  JEV_COLORS,
  JEV_FONTS,
  jevSlideBase,
  WavyUnderline,
  JevBrandBadge,
  JevDivider,
  OvalTag,
} from "./jevStyles";
import { RobotDoodle, LightningDoodle } from "./jevIcons";

/** Slide 1 — Cover with Creator Headshot */
export const JevSlide1: React.FC = () => {
  return (
    <div style={jevSlideBase}>
      <JevBrandBadge />

      {/* Title Area */}
      <div style={{ maxWidth: 660 }}>
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
          Jev AI
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
          Explained Simply
        </div>
        <WavyUnderline width={360} />

        <div
          style={{
            fontSize: 25,
            color: JEV_COLORS.redAccent,
            fontWeight: 800,
            fontStyle: "italic",
            marginBottom: 16,
          }}
        >
          The AI that doesn't talk... it just decides!
        </div>

        {/* Hook equation */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
          <OvalTag text="Jev" />
          <span style={{ fontSize: 28, color: "#1F2937", fontWeight: 900 }}>➔</span>
          <div style={{ fontSize: 23, color: JEV_COLORS.redAccent, fontWeight: 700, fontStyle: "italic" }}>
            A new AI that <span style={{ textDecoration: "underline", color: JEV_COLORS.textDark, fontWeight: 900 }}>doesn't talk</span>.<br />
            It just <span style={{ textDecoration: "underline", color: JEV_COLORS.textDark, fontWeight: 900 }}>decides</span>. ⚡
          </div>
        </div>
      </div>

      <JevDivider />

      {/* Visual Comparison Cards */}
      <div style={{ display: "flex", gap: 20, maxWidth: 600, zIndex: 10, marginTop: 4 }}>
        {/* Normal AI Card */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF",
            border: "2px solid #1F2937",
            borderRadius: 18,
            padding: "16px 14px",
            boxShadow: "3px 3px 0px #1F2937",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#F3F4F6",
              border: "1.5px solid #1F2937",
              borderRadius: 12,
              padding: "10px 12px",
              fontSize: 14,
              color: JEV_COLORS.redAccent,
              fontStyle: "italic",
              lineHeight: 1.3,
              marginBottom: 12,
              width: "100%",
              textAlign: "center",
            }}
          >
            "Well, let me explain... many factors here... blah blah..."
          </div>
          <RobotDoodle size={38} />
          <div style={{ fontSize: 19, fontWeight: 900, color: JEV_COLORS.textDark, marginTop: 6 }}>Normal AI</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", fontSize: 24, fontWeight: 900, color: JEV_COLORS.blueAccent }}>
          VS
        </div>

        {/* Jev Card */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF",
            border: "2px solid #1F2937",
            borderRadius: 18,
            padding: "16px 14px",
            boxShadow: "3px 3px 0px #1F2937",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#ECFDF5",
              border: "1.5px solid #1F2937",
              borderRadius: 12,
              padding: "10px 12px",
              fontSize: 18,
              color: JEV_COLORS.greenAccent,
              fontWeight: 900,
              marginBottom: 12,
              width: "100%",
              textAlign: "center",
            }}
          >
            YES • 94% ✓
          </div>
          <LightningDoodle size={38} />
          <div style={{ fontSize: 19, fontWeight: 900, color: JEV_COLORS.textDark, marginTop: 6 }}>Jev</div>
        </div>
      </div>

      {/* Swipe callout */}
      <div
        style={{
          marginTop: "auto",
          fontSize: 24,
          color: JEV_COLORS.greenAccent,
          fontWeight: 800,
          fontStyle: "italic",
          display: "flex",
          alignItems: "center",
          gap: 8,
          zIndex: 10,
        }}
      >
        swipe to learn how it works ➔
      </div>

      {/* Slide counter positioned at bottom-left */}
      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: 60,
          fontSize: 22,
          fontWeight: 800,
          color: "#059669",
          fontFamily: JEV_FONTS.heading,
          fontStyle: "italic",
          zIndex: 10,
        }}
      >
        1 / 6
      </div>

      {/* Headshot Placement */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: -20,
          width: 500,
          height: 600,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          zIndex: 5,
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 20,
            width: 440,
            height: 480,
            backgroundColor: "rgba(37, 99, 235, 0.08)",
            border: "2.5px dashed #1F2937",
            borderRadius: "140px 140px 0 0",
            zIndex: 1,
          }}
        />
        <Img
          src={staticFile("headshot.png")}
          style={{
            height: 560,
            width: "auto",
            objectFit: "contain",
            position: "relative",
            zIndex: 2,
          }}
        />
      </div>
    </div>
  );
};
