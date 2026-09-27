import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

/* =========================================================================
   SHORT & SIMPLE MOTION GRAPHICS (Glassmorphism, SVG Icons, Spring Physics)
   Positioned safely in top area (Y: 75px - 220px) ABOVE the screen recording
   and outside the speaker head/face region.
   ========================================================================= */

// Glass container style helper
const glassCardStyle: React.CSSProperties = {
  backgroundColor: "rgba(10, 15, 26, 0.78)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  borderRadius: 50,
  border: "1.5px solid rgba(255, 255, 255, 0.16)",
  boxShadow: "0 12px 35px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.2)",
  padding: "12px 28px",
  display: "flex",
  alignItems: "center",
  gap: 16,
};

// 1. Coddy.tech Website & Left Panel Badge (Frames 115 - 225 | ~3.8s - 7.5s)
export const CoddyWebsiteBadge: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const startFrame = 115;
  const endFrame = 225;
  if (frame < startFrame || frame > endFrame) return null;

  const localFrame = frame - startFrame;
  const enterSpring = spring({ frame: localFrame, fps, config: { damping: 14, stiffness: 140 } });
  const scale = interpolate(enterSpring, [0, 1], [0.85, 1]);
  const translateY = interpolate(enterSpring, [0, 1], [-25, 0]);

  // Smooth exit
  const exitOpacity = frame > endFrame - 10 ? interpolate(frame, [endFrame - 10, endFrame], [1, 0]) : 1;

  // Pulse effect
  const pulse = Math.sin(frame / 6) * 0.05 + 1;

  return (
    <div
      style={{
        position: "absolute",
        top: 75,
        left: 0,
        width: 1080,
        display: "flex",
        justifyContent: "center",
        zIndex: 48,
        pointerEvents: "none",
        opacity: enterSpring * exitOpacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
      }}
    >
      <div style={glassCardStyle}>
        {/* Pulsing Green Live Dot */}
        <div style={{ position: "relative", width: 14, height: 14 }}>
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              backgroundColor: "#22C55E",
              boxShadow: "0 0 12px #22C55E",
            }}
          />
        </div>

        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 800,
            fontSize: 26,
            color: "#00F0FF",
            letterSpacing: "1px",
          }}
        >
          CODDY.TECH
        </span>

        <div style={{ width: 1, height: 24, backgroundColor: "rgba(255,255,255,0.2)" }} />

        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: 24,
            color: "#FFFFFF",
          }}
        >
          Instructions on Left ⬅️
        </span>
      </div>
    </div>
  );
};

// 2. In-Browser Editor & Projects Badge (Frames 225 - 355 | ~7.5s - 11.8s)
export const InteractiveEditorBadge: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const startFrame = 225;
  const endFrame = 355;
  if (frame < startFrame || frame > endFrame) return null;

  const localFrame = frame - startFrame;
  const enterSpring = spring({ frame: localFrame, fps, config: { damping: 14, stiffness: 140 } });
  const scale = interpolate(enterSpring, [0, 1], [0.85, 1]);
  const translateY = interpolate(enterSpring, [0, 1], [-25, 0]);
  const exitOpacity = frame > endFrame - 10 ? interpolate(frame, [endFrame - 10, endFrame], [1, 0]) : 1;

  return (
    <div
      style={{
        position: "absolute",
        top: 75,
        left: 0,
        width: 1080,
        display: "flex",
        justifyContent: "center",
        zIndex: 48,
        pointerEvents: "none",
        opacity: enterSpring * exitOpacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
      }}
    >
      <div style={glassCardStyle}>
        {/* Code editor icon */}
        <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
          <rect x="1" y="1" width="26" height="22" rx="4" stroke="#FFE600" strokeWidth="2.5" />
          <path d="M7 8L11 12L7 16" stroke="#00F0FF" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="14" y1="16" x2="21" y2="16" stroke="#FFE600" strokeWidth="2.5" strokeLinecap="round" />
        </svg>

        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: 24,
            color: "#FFFFFF",
          }}
        >
          Code on Right ➔ <span style={{ color: "#FFE600", fontWeight: 800 }}>100+ Projects 🚀</span>
        </span>
      </div>
    </div>
  );
};

// 3. Coding Journey Very Easy Badge (Frames 355 - 425 | ~11.8s - 14.2s)
export const CodingMadeEasyBadge: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const startFrame = 355;
  const endFrame = 425;
  if (frame < startFrame || frame > endFrame) return null;

  const localFrame = frame - startFrame;
  const enterSpring = spring({ frame: localFrame, fps, config: { damping: 14, stiffness: 140 } });
  const scale = interpolate(enterSpring, [0, 1], [0.85, 1]);
  const translateY = interpolate(enterSpring, [0, 1], [-25, 0]);
  const exitOpacity = frame > endFrame - 10 ? interpolate(frame, [endFrame - 10, endFrame], [1, 0]) : 1;

  return (
    <div
      style={{
        position: "absolute",
        top: 75,
        left: 0,
        width: 1080,
        display: "flex",
        justifyContent: "center",
        zIndex: 48,
        pointerEvents: "none",
        opacity: enterSpring * exitOpacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
      }}
    >
      <div style={glassCardStyle}>
        <span style={{ fontSize: 26 }}>⚡</span>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 800,
            fontSize: 24,
            color: "#00F0FF",
            letterSpacing: "0.5px",
          }}
        >
          ZERO SETUP REQUIRED
        </span>
        <div style={{ width: 1, height: 24, backgroundColor: "rgba(255,255,255,0.2)" }} />
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: 24,
            color: "#FFFFFF",
          }}
        >
          Coding Journey Made Easy
        </span>
      </div>
    </div>
  );
};

// 4. Closing Comment & DM Callout (Frames 430 - 532 | ~14.3s - 17.75s)
export const CommentLinkCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const startFrame = 430;
  if (frame < startFrame) return null;

  const localFrame = frame - startFrame;
  const enterSpring = spring({ frame: localFrame, fps, config: { damping: 13, stiffness: 120 } });
  const scale = interpolate(enterSpring, [0, 1], [0.8, 1]);
  const translateY = interpolate(enterSpring, [0, 1], [30, 0]);

  // Typing simulation for "LINK"
  const keyword = "LINK";
  const typedLength = Math.floor(
    interpolate(localFrame, [10, 10 + keyword.length * 5], [0, keyword.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const typedKeyword = keyword.slice(0, typedLength);
  const showCursor = Math.floor(localFrame / 7) % 2 === 0;

  return (
    <div
      style={{
        position: "absolute",
        bottom: 300,
        left: 0,
        width: 1080,
        display: "flex",
        justifyContent: "center",
        zIndex: 48,
        pointerEvents: "none",
        opacity: enterSpring,
        transform: `translateY(${translateY}px) scale(${scale})`,
      }}
    >
      <div
        style={{
          ...glassCardStyle,
          borderRadius: 36,
          padding: "16px 36px",
          border: "2px solid rgba(0, 240, 255, 0.45)",
          boxShadow: "0 14px 40px rgba(0, 0, 0, 0.7), 0 0 25px rgba(0, 240, 255, 0.25)",
        }}
      >
        <span style={{ fontSize: 32 }}>💬</span>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: 26,
                color: "#FFFFFF",
              }}
            >
              Comment
            </span>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 900,
                fontSize: 28,
                color: "#FFE600",
                backgroundColor: "rgba(255, 230, 0, 0.15)",
                padding: "2px 14px",
                borderRadius: 8,
                border: "1px solid rgba(255, 230, 0, 0.4)",
              }}
            >
              "{typedKeyword}"{showCursor ? "|" : ""}
            </span>
          </div>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 20,
              color: "#00F0FF",
            }}
          >
            I'll share the website link directly in your DMs! 📩
          </span>
        </div>
      </div>
    </div>
  );
};
