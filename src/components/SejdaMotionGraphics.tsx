import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

/* =========================================================================
   BOX-FREE FLOATING KINETIC MOTION GRAPHICS (SKILL 2 AESTHETIC)
   - ZERO BOXES / ZERO CARD CONTAINERS: Text & illustrations float directly
   - POSITIONED ON CHEST: Y = 780px (strictly below beard, zero head blocking)
   - Multi-layer drop shadows + WebkitTextStroke for crystal-clear readability
   ========================================================================= */

const heavyTextShadow = `
  0 4px 18px rgba(0, 0, 0, 0.98),
  0 8px 32px rgba(0, 0, 0, 0.96),
  0 0 28px rgba(0, 0, 0, 0.9),
  0 2px 5px rgba(0, 0, 0, 0.9)
`;

const strokeStyle: React.CSSProperties = {
  WebkitTextStroke: "2px rgba(0, 0, 0, 0.95)",
  paintOrder: "stroke fill",
  textShadow: heavyTextShadow,
};

// 1. Google Search: Sejda PDF (Frames 112 - 165 | 3.7s - 5.5s)
export const SejdaWebsiteReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const startFrame = 112;
  const endFrame = 165;
  if (frame < startFrame || frame > endFrame) return null;

  const localFrame = frame - startFrame;
  const enterSpring = spring({ frame: localFrame, fps, config: { damping: 14, stiffness: 150 } });
  const scale = interpolate(enterSpring, [0, 1], [0.8, 1]);
  const exitOpacity = frame > endFrame - 8 ? interpolate(frame, [endFrame - 8, endFrame], [1, 0]) : 1;

  return (
    <div
      style={{
        position: "absolute",
        top: 1300, // Safely below head & chin
        left: 0,
        width: 1080,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 48,
        pointerEvents: "none",
        opacity: enterSpring * exitOpacity,
        transform: `scale(${scale})`,
      }}
    >
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "22px",
          fontWeight: 800,
          letterSpacing: "3px",
          color: "#FFE500",
          textTransform: "uppercase",
          ...strokeStyle,
          marginBottom: "4px",
        }}
      >
        ✦ GOOGLE SEARCH ✦
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <span
          style={{
            fontFamily: "'Inter', 'Impact', sans-serif",
            fontSize: "52px",
            fontWeight: 900,
            color: "#00F0FF",
            letterSpacing: "1px",
            ...strokeStyle,
          }}
        >
          SEJDA.COM
        </span>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "28px",
            fontWeight: 800,
            color: "#FFFFFF",
            ...strokeStyle,
          }}
        >
          (FREE PDF EDITOR)
        </span>
      </div>
    </div>
  );
};

// 2. Document Variety (Frames 235 - 340 | 7.8s - 11.4s)
// Spoken: "Chahe tumhara bijli ka bill ho, offer letter ya experience letter"
export const DocumentVarietyCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const startFrame = 235;
  const endFrame = 340;
  if (frame < startFrame || frame > endFrame) return null;

  const localFrame = frame - startFrame;
  const enterSpring = spring({ frame: localFrame, fps, config: { damping: 14, stiffness: 150 } });
  const scale = interpolate(enterSpring, [0, 1], [0.8, 1]);
  const exitOpacity = frame > endFrame - 8 ? interpolate(frame, [endFrame - 8, endFrame], [1, 0]) : 1;

  return (
    <div
      style={{
        position: "absolute",
        top: 1300, // Safely below head & chin
        left: 0,
        width: 1080,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 48,
        pointerEvents: "none",
        opacity: enterSpring * exitOpacity,
        transform: `scale(${scale})`,
      }}
    >
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "20px",
          fontWeight: 800,
          letterSpacing: "3px",
          color: "#00F0FF",
          textTransform: "uppercase",
          ...strokeStyle,
          marginBottom: "4px",
        }}
      >
        ✦ WORKS ON ANY DOCUMENT ✦
      </div>
      <div
        style={{
          fontFamily: "'Inter', 'Impact', sans-serif",
          fontSize: "44px",
          fontWeight: 900,
          color: "#FFFFFF",
          letterSpacing: "-0.5px",
          textAlign: "center",
          ...strokeStyle,
        }}
      >
        <span style={{ color: "#FFE500" }}>BIJLI BILL</span> • <span style={{ color: "#00F0FF" }}>OFFER LETTER</span> • <span style={{ color: "#FFFFFF" }}>EXPERIENCE DOC</span>
      </div>
    </div>
  );
};

// 3. Exact Font Match (Frames 345 - 455 | 11.5s - 15.2s)
// Spoken: "edit kar sakte ho aur font size mein bhi koi difference nahi hoga"
export const ExactFontMatchCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const startFrame = 345;
  const endFrame = 455;
  if (frame < startFrame || frame > endFrame) return null;

  const localFrame = frame - startFrame;
  const enterSpring = spring({ frame: localFrame, fps, config: { damping: 14, stiffness: 150 } });
  const scale = interpolate(enterSpring, [0, 1], [0.8, 1]);
  const exitOpacity = frame > endFrame - 8 ? interpolate(frame, [endFrame - 8, endFrame], [1, 0]) : 1;

  return (
    <div
      style={{
        position: "absolute",
        top: 1300, // Safely below head & chin
        left: 0,
        width: 1080,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 48,
        pointerEvents: "none",
        opacity: enterSpring * exitOpacity,
        transform: `scale(${scale})`,
      }}
    >
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "22px",
          fontWeight: 800,
          letterSpacing: "3px",
          color: "#FFE500",
          textTransform: "uppercase",
          ...strokeStyle,
          marginBottom: "4px",
        }}
      >
        ✦ AUTOMATIC MATCHING ✦
      </div>
      <div
        style={{
          fontFamily: "'Inter', 'Impact', sans-serif",
          fontSize: "48px",
          fontWeight: 900,
          color: "#00F0FF",
          letterSpacing: "-0.5px",
          ...strokeStyle,
        }}
      >
        100% SAME FONT & SIZE!
      </div>
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "26px",
          fontWeight: 800,
          color: "#FFFFFF",
          ...strokeStyle,
        }}
      >
        Koi Difference Samajh Nahi Aayega
      </div>
    </div>
  );
};

// 4. Free Limit Notice (Frames 465 - 575 | 15.5s - 19.2s)
// Spoken: "dhyan rakhna din mein sirf 3 edits free hain"
export const FreeLimitBadge: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const startFrame = 465;
  const endFrame = 575;
  if (frame < startFrame || frame > endFrame) return null;

  const localFrame = frame - startFrame;
  const enterSpring = spring({ frame: localFrame, fps, config: { damping: 14, stiffness: 150 } });
  const scale = interpolate(enterSpring, [0, 1], [0.8, 1]);
  const exitOpacity = frame > endFrame - 8 ? interpolate(frame, [endFrame - 8, endFrame], [1, 0]) : 1;

  return (
    <div
      style={{
        position: "absolute",
        top: 1300, // Safely below head & chin
        left: 0,
        width: 1080,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 48,
        pointerEvents: "none",
        opacity: enterSpring * exitOpacity,
        transform: `scale(${scale})`,
      }}
    >
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "22px",
          fontWeight: 800,
          letterSpacing: "3px",
          color: "#EF4444",
          textTransform: "uppercase",
          ...strokeStyle,
          marginBottom: "4px",
        }}
      >
        ✦ IMPORTANT LIMIT ✦
      </div>
      <div
        style={{
          fontFamily: "'Inter', 'Impact', sans-serif",
          fontSize: "48px",
          fontWeight: 900,
          color: "#FFE500",
          letterSpacing: "-0.5px",
          ...strokeStyle,
        }}
      >
        ONLY 3 EDITS FREE / DAY
      </div>
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "24px",
          fontWeight: 800,
          color: "#FFFFFF",
          ...strokeStyle,
        }}
      >
        Uske Baad Pro Subscription Chahiye
      </div>
    </div>
  );
};
