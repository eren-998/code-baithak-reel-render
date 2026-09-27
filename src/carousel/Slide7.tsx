import React from "react";
import { COLORS, FONTS, slideBase } from "./styles";
import {
  BrandBadge,
  SlideCounter,
  AccentBar,
  GlowOrb,
} from "./Components";
import { GitBranchIcon, ClockIcon } from "./Icons";

/** Slide 7 — Git Lens + Timeline */
export const Slide7: React.FC = () => {
  return (
    <div style={slideBase}>
      <GlowOrb color={COLORS.green} size={450} top={-80} left={-80} opacity={0.12} />
      <GlowOrb color={COLORS.orange} size={300} bottom={-40} right={-60} opacity={0.1} />
      <BrandBadge />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", flex: 1 }}>
        <div
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: COLORS.greenLight,
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          TRICKS #6 &amp; #7
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              fontSize: 52,
              fontWeight: 900,
              color: COLORS.white,
              lineHeight: 1.1,
              fontFamily: FONTS.heading,
            }}
          >
            GitLens &amp;
          </div>
          <GitBranchIcon size={44} color={COLORS.greenLight} />
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 900,
            lineHeight: 1.1,
            fontFamily: FONTS.heading,
            background: `linear-gradient(135deg, ${COLORS.green}, ${COLORS.greenLight})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Local Timeline
        </div>
        <AccentBar color1={COLORS.green} color2={COLORS.greenLight} />

        <div
          style={{
            fontSize: 22,
            color: COLORS.textSecondary,
            lineHeight: 1.6,
            marginBottom: 26,
          }}
        >
          Never lose code context again. Track every commit author and restore deleted code without git commits.
        </div>

        {/* Two cards side by side */}
        <div style={{ display: "flex", gap: 20, flex: 1 }}>
          {/* Git Lens Card */}
          <div
            style={{
              flex: 1,
              backgroundColor: COLORS.card,
              border: `1.5px solid ${COLORS.borderLight}`,
              borderRadius: 18,
              padding: 24,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <div
              style={{
                background: `linear-gradient(135deg, ${COLORS.orange}33, ${COLORS.orange}11)`,
                borderRadius: 12,
                padding: "8px 14px",
                display: "inline-flex",
                alignSelf: "flex-start",
                alignItems: "center",
                gap: 8,
              }}
            >
              <GitBranchIcon size={20} color={COLORS.orange} />
              <span style={{ fontSize: 15, fontWeight: 800, color: COLORS.orange }}>
                #6 — GitLens
              </span>
            </div>

            <div style={{ fontSize: 18, fontWeight: 700, color: COLORS.white }}>
              Inline Blame &amp; Authorship
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["Inline blame annotations", "Commit history per line", "Rich visual comparison", "Interactive revision nav"].map(
                (item, i) => (
                  <div key={i} style={{ fontSize: 15, color: COLORS.textSecondary, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: COLORS.orange, fontWeight: 800 }}>✓</span> {item}
                  </div>
                )
              )}
            </div>

            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: 12,
                color: COLORS.orangeLight,
                backgroundColor: "#0D0D0D",
                padding: "10px 14px",
                borderRadius: 10,
                marginTop: "auto",
                border: `1px solid ${COLORS.borderLight}`,
              }}
            >
              ext: eamodio.gitlens
            </div>
          </div>

          {/* Timeline Card */}
          <div
            style={{
              flex: 1,
              backgroundColor: COLORS.card,
              border: `1.5px solid ${COLORS.green}33`,
              borderRadius: 18,
              padding: 24,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <div
              style={{
                background: `linear-gradient(135deg, ${COLORS.green}33, ${COLORS.green}11)`,
                borderRadius: 12,
                padding: "8px 14px",
                display: "inline-flex",
                alignSelf: "flex-start",
                alignItems: "center",
                gap: 8,
              }}
            >
              <ClockIcon size={20} color={COLORS.green} />
              <span style={{ fontSize: 15, fontWeight: 800, color: COLORS.green }}>
                #7 — Timeline View
              </span>
            </div>

            <div style={{ fontSize: 18, fontWeight: 700, color: COLORS.white }}>
              Built-in File Time Machine
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["Zero extensions required", "Tracks every Ctrl+S save", "Diff against any past state", "Rescues accidental deletes"].map(
                (item, i) => (
                  <div key={i} style={{ fontSize: 15, color: COLORS.textSecondary, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: COLORS.greenLight, fontWeight: 800 }}>✓</span> {item}
                  </div>
                )
              )}
            </div>

            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: 12,
                color: COLORS.greenLight,
                backgroundColor: "#0D0D0D",
                padding: "10px 14px",
                borderRadius: 10,
                marginTop: "auto",
                border: `1px solid ${COLORS.borderLight}`,
              }}
            >
              View → Explorer → Timeline
            </div>
          </div>
        </div>
      </div>

      <SlideCounter current={7} total={8} />
    </div>
  );
};
