import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";

export const ShowreelHUD: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const currentSeconds = Math.floor(frame / fps);
  const currentSubFrame = frame % fps;
  const timecode = `00:00:${currentSeconds.toString().padStart(2, "0")}:${currentSubFrame.toString().padStart(2, "0")}`;
  const progressPercent = ((frame / durationInFrames) * 100).toFixed(1);

  // Audio reactive VU meters simulation
  const leftMeters = Array.from({ length: 12 }, (_, i) => {
    const val = Math.sin(frame * 0.4 + i * 0.5) * 0.5 + 0.5;
    return val > 0.35 + (i * 0.05);
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 1920,
        height: 1080,
        pointerEvents: "none",
        zIndex: 100,
        fontFamily: "'JetBrains Mono', 'SF Pro Mono', 'Menlo', 'Courier New', monospace",
        color: "rgba(255, 255, 255, 0.75)",
        boxSizing: "border-box",
        padding: "36px 48px",
      }}
    >
      {/* Top Header Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
          paddingBottom: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: frame % 15 < 8 ? "#FF3344" : "#661122",
              boxShadow: frame % 15 < 8 ? "0 0 10px #FF3344" : "none",
            }}
          />
          <span style={{ fontSize: 13, letterSpacing: 3, fontWeight: 700, color: "#FFFFFF" }}>
            REC [ANNIE_SHOWREEL_2026]
          </span>
          <span
            style={{
              fontSize: 11,
              backgroundColor: "rgba(0, 240, 255, 0.15)",
              color: "#00F0FF",
              border: "1px solid rgba(0, 240, 255, 0.4)",
              padding: "2px 8px",
              borderRadius: 4,
              letterSpacing: 1.5,
              fontWeight: 600,
            }}
          >
            MASTER CUT
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 24, fontSize: 13, letterSpacing: 2 }}>
          <span>TC: <strong style={{ color: "#FFE500" }}>{timecode}</strong></span>
          <span>FR: <strong>{frame.toString().padStart(3, "0")}</strong> / {durationInFrames}</span>
          <span>FPS: <strong style={{ color: "#00FF9D" }}>{fps}.0</strong></span>
          <span>PRG: <strong>{progressPercent}%</strong></span>
        </div>
      </div>

      {/* Viewfinder Corner Brackets */}
      <div style={{ position: "absolute", top: 32, left: 44, width: 28, height: 28, borderTop: "2px solid #00F0FF", borderLeft: "2px solid #00F0FF" }} />
      <div style={{ position: "absolute", top: 32, right: 44, width: 28, height: 28, borderTop: "2px solid #00F0FF", borderRight: "2px solid #00F0FF" }} />
      <div style={{ position: "absolute", bottom: 32, left: 44, width: 28, height: 28, borderBottom: "2px solid #00F0FF", borderLeft: "2px solid #00F0FF" }} />
      <div style={{ position: "absolute", bottom: 32, right: 44, width: 28, height: 28, borderBottom: "2px solid #00F0FF", borderRight: "2px solid #00F0FF" }} />

      {/* Center Subtle Crosshair */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.18,
        }}
      >
        <div style={{ width: 40, height: 1, backgroundColor: "#FFFFFF", position: "absolute", left: -20, top: 0 }} />
        <div style={{ width: 1, height: 40, backgroundColor: "#FFFFFF", position: "absolute", top: -20, left: 0 }} />
        <div style={{ width: 18, height: 18, border: "1px solid #FFFFFF", borderRadius: "50%", position: "absolute", top: -9, left: -9 }} />
      </div>

      {/* Left Vertical VU Meter */}
      <div
        style={{
          position: "absolute",
          left: 48,
          top: "40%",
          display: "flex",
          flexDirection: "column-reverse",
          gap: 4,
        }}
      >
        {leftMeters.map((active, i) => (
          <div
            key={i}
            style={{
              width: 14,
              height: 3,
              backgroundColor: active
                ? i > 9
                  ? "#FF3344"
                  : i > 6
                  ? "#FFE500"
                  : "#00F0FF"
                : "rgba(255, 255, 255, 0.1)",
              borderRadius: 1,
            }}
          />
        ))}
        <span style={{ fontSize: 9, letterSpacing: 1, color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>
          AUDIO
        </span>
      </div>

      {/* Bottom Footer Bar */}
      <div
        style={{
          position: "absolute",
          bottom: 36,
          left: 48,
          right: 48,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid rgba(255, 255, 255, 0.15)",
          paddingTop: 12,
          fontSize: 12,
          letterSpacing: 2,
        }}
      >
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <span>RES: 1920 × 1080</span>
          <span>COLOR: DCI-P3 10-BIT</span>
          <span>CHOREOGRAPHY: REMOTION 4.0</span>
        </div>

        {/* Color Palette Indicators */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.5)" }}>PALETTE:</span>
          {["#00F0FF", "#BD00FF", "#FFE500", "#00FF9D", "#FF3366"].map((c) => (
            <div
              key={c}
              style={{
                width: 12,
                height: 12,
                borderRadius: 2,
                backgroundColor: c,
                boxShadow: `0 0 6px ${c}66`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
