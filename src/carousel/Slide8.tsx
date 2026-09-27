import React from "react";
import { Img, staticFile } from "remotion";
import { COLORS, FONTS, slideBase } from "./styles";
import {
  BrandBadge,
  SlideCounter,
  AccentBar,
  GlowOrb,
} from "./Components";
import { BookmarkIcon } from "./Icons";

/** Slide 8 — Summary Checklist & CTA */
export const Slide8: React.FC = () => {
  return (
    <div style={slideBase}>
      <GlowOrb color={COLORS.accent} size={450} top={-100} right={-100} opacity={0.12} />
      <GlowOrb color={COLORS.orange} size={350} bottom={-80} left={-80} opacity={0.1} />
      <BrandBadge />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", flex: 1 }}>
        <div
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: COLORS.orangeLight,
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          QUICK RECAP
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
            Save This For Later!
          </div>
          <BookmarkIcon size={40} color={COLORS.orangeLight} />
        </div>
        <AccentBar color1={COLORS.accent} color2={COLORS.orange} width={120} />

        {/* 7 Tricks Checklist */}
        <div
          style={{
            backgroundColor: COLORS.card,
            border: `1px solid ${COLORS.borderLight}`,
            borderRadius: 20,
            padding: "22px 26px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px 20px",
            marginBottom: 20,
          }}
        >
          {[
            { n: "01", title: "Multi-Cursor Edit", key: "Ctrl + Alt + ↑/↓" },
            { n: "02", title: "Emmet Expansion", key: "ul>li*4>a" },
            { n: "03", title: "Command Palette", key: "Ctrl + Shift + P" },
            { n: "04", title: "Zen Focus Mode", key: "Ctrl + K Z" },
            { n: "05", title: "Custom Snippets", key: "User Snippets" },
            { n: "06", title: "GitLens Blame", key: "Inline History" },
            { n: "07", title: "File Timeline", key: "Local Save Points" },
            { n: "★", title: "Master All 7", key: "10x Faster Coding" },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "8px 10px",
                borderBottom: `1px solid ${COLORS.borderLight}44`,
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  color: COLORS.accentLight,
                  fontFamily: FONTS.mono,
                  backgroundColor: `${COLORS.accent}22`,
                  padding: "4px 8px",
                  borderRadius: 6,
                }}
              >
                {item.n}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.white }}>{item.title}</div>
                <div style={{ fontSize: 12, color: COLORS.textMuted, fontFamily: FONTS.mono }}>{item.key}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Creator CTA Box with photo thumbnail */}
        <div
          style={{
            backgroundColor: "rgba(108, 92, 231, 0.12)",
            border: `1.5px solid ${COLORS.accent}`,
            borderRadius: 20,
            padding: "20px 24px",
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginTop: "auto",
          }}
        >
          <div
            style={{
              width: 74,
              height: 74,
              borderRadius: "50%",
              overflow: "hidden",
              border: `2.5px solid ${COLORS.orange}`,
              flexShrink: 0,
              backgroundColor: "#111",
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
            <div style={{ fontSize: 21, fontWeight: 800, color: COLORS.white, marginBottom: 4 }}>
              Which trick was your favorite?
            </div>
            <div style={{ fontSize: 15, color: COLORS.textSecondary, lineHeight: 1.4 }}>
              Drop a comment below &amp; follow <span style={{ color: COLORS.orangeLight, fontWeight: 700 }}>@code_baithak</span> for daily developer tips!
            </div>
          </div>

          <div
            style={{
              backgroundColor: COLORS.white,
              color: COLORS.bg,
              fontWeight: 800,
              fontSize: 15,
              padding: "12px 22px",
              borderRadius: 30,
              display: "flex",
              alignItems: "center",
              gap: 8,
              boxShadow: "0 4px 14px rgba(0,0,0,0.4)",
            }}
          >
            Follow +
          </div>
        </div>
      </div>

      <SlideCounter current={8} total={8} />
    </div>
  );
};
