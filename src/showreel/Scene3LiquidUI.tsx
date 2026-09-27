import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const Scene3LiquidUI: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Master card entrance spring
  const cardSpring = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 180, mass: 0.9 },
  });

  // Chart line drawing animation (0 to 1)
  const chartDrawProgress = interpolate(frame, [10, 50], [1000, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Animated counter
  const counterVal = Math.floor(
    interpolate(frame, [10, 55], [120000, 1420890], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  // Toggle switch animation
  const togglePos = spring({
    frame: frame - 28,
    fps,
    config: { damping: 12, stiffness: 220 },
  });

  // Simulated cursor animation
  const cursorX = interpolate(frame, [0, 25, 45, 70], [800, 1180, 1180, 1300], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const cursorY = interpolate(frame, [0, 25, 45, 70], [650, 480, 480, 420], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const isClicking = frame >= 25 && frame <= 32;

  // Staggered notification pills
  const notif1 = spring({ frame: frame - 20, fps, config: { damping: 14, stiffness: 200 } });
  const notif2 = spring({ frame: frame - 35, fps, config: { damping: 14, stiffness: 200 } });

  // 3D Parallax tilt
  const tiltX = interpolate(frame, [0, 80], [6, -4]);
  const tiltY = interpolate(frame, [0, 80], [-8, 6]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#070B14",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        perspective: 1400,
      }}
    >
      {/* Background Cyber Ambient Lights */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "25%",
          width: 700,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,240,255,0.18) 0%, rgba(189,0,255,0.06) 60%, transparent 80%)",
          filter: "blur(70px)",
        }}
      />

      {/* Main Glass Dashboard Card */}
      <div
        style={{
          width: 1060,
          height: 580,
          background: "linear-gradient(135deg, rgba(17, 24, 39, 0.85) 0%, rgba(10, 15, 26, 0.92) 100%)",
          backdropFilter: "blur(32px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: 28,
          boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px rgba(0, 240, 255, 0.15)",
          padding: "36px 44px",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          transform: `scale(${cardSpring}) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
          position: "relative",
          boxSizing: "border-box",
        }}
      >
        {/* Top Header of Card */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "linear-gradient(135deg, #00F0FF 0%, #0072FF 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 16px rgba(0,240,255,0.4)",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <span style={{ fontSize: 13, color: "#94A3B8", letterSpacing: 2, fontWeight: 700, fontFamily: "monospace" }}>
                LIQUID PROTOCOL // YIELD VAULT
              </span>
              <h2 style={{ fontSize: 24, color: "#FFFFFF", fontWeight: 800, margin: 0 }}>
                Autonomous Portfolio Engine
              </h2>
            </div>
          </div>

          {/* Toggle Switch */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 13, color: "#E2E8F0", fontWeight: 600 }}>AUTO-COMPOUND</span>
            <div
              style={{
                width: 56,
                height: 30,
                borderRadius: 20,
                backgroundColor: togglePos > 0.5 ? "#00FF9D" : "rgba(255,255,255,0.2)",
                padding: 3,
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                transition: "background 0.2s",
                boxShadow: togglePos > 0.5 ? "0 0 12px rgba(0,255,157,0.5)" : "none",
              }}
            >
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  transform: `translateX(${interpolate(togglePos, [0, 1], [0, 26])}px)`,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Metric Balance Row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <span style={{ fontSize: 12, color: "#64748B", letterSpacing: 1.5, fontWeight: 700 }}>
              AGGREGATED REALIZED VALUE
            </span>
            <div style={{ fontSize: 52, fontWeight: 900, color: "#FFFFFF", letterSpacing: -1, fontFamily: "'Inter', sans-serif" }}>
              ${counterVal.toLocaleString()}.00
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              backgroundColor: "rgba(0, 255, 157, 0.12)",
              border: "1px solid rgba(0, 255, 157, 0.3)",
              padding: "6px 14px",
              borderRadius: 20,
              color: "#00FF9D",
              fontWeight: 800,
              fontSize: 14,
            }}
          >
            <span>▲ +428.4% APY</span>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11 }}>ALL-TIME</span>
          </div>
        </div>

        {/* Dynamic SVG Animated Bezier Curve Chart */}
        <div style={{ position: "relative", width: "100%", height: 210 }}>
          <svg width="100%" height="100%" viewBox="0 0 970 200" fill="none">
            <defs>
              <linearGradient id="chartStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00F0FF" />
                <stop offset="50%" stopColor="#BD00FF" />
                <stop offset="100%" stopColor="#00FF9D" />
              </linearGradient>
              <linearGradient id="chartArea" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(0, 240, 255, 0.28)" />
                <stop offset="100%" stopColor="rgba(0, 240, 255, 0)" />
              </linearGradient>
            </defs>

            {/* Horizontal Grid lines */}
            {[40, 90, 140, 190].map((y) => (
              <line key={y} x1="0" y1={y} x2="970" y2={y} stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
            ))}

            {/* Area Fill */}
            <path
              d="M 20 180 C 150 170, 280 130, 420 100 C 560 70, 700 80, 820 40 L 950 20 L 950 190 L 20 190 Z"
              fill="url(#chartArea)"
              opacity={interpolate(chartDrawProgress, [0, 1000], [1, 0], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              })}
            />

            {/* Animated Bezier Curve Stroke */}
            <path
              d="M 20 180 C 150 170, 280 130, 420 100 C 560 70, 700 80, 820 40 L 950 20"
              stroke="url(#chartStroke)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="1000"
              strokeDashoffset={chartDrawProgress}
            />

            {/* Endpoint Pulse Dot */}
            {chartDrawProgress < 100 && (
              <circle cx="950" cy="20" r="7" fill="#00FF9D" filter="drop-shadow(0 0 10px #00FF9D)" />
            )}
          </svg>
        </div>

        {/* Floating Interactive Badge (CTA) */}
        <div
          style={{
            position: "absolute",
            bottom: -24,
            right: 48,
            backgroundColor: "#00F0FF",
            color: "#07090E",
            padding: "12px 24px",
            borderRadius: 30,
            fontWeight: 800,
            fontSize: 13,
            letterSpacing: 1.5,
            boxShadow: isClicking ? "0 0 35px #00F0FF" : "0 8px 24px rgba(0, 240, 255, 0.4)",
            transform: `scale(${isClicking ? 0.94 : 1})`,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span>EXECUTE REBALANCE</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </div>

      {/* Floating Staggered Toast Notifications */}
      <div
        style={{
          position: "absolute",
          left: "8%",
          bottom: "16%",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <div
          style={{
            padding: "14px 22px",
            background: "rgba(15, 23, 42, 0.85)",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(0, 255, 157, 0.35)",
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            gap: 12,
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            transform: `translateX(${interpolate(notif1, [0, 1], [-80, 0])}px)`,
            opacity: notif1,
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#00FF9D", boxShadow: "0 0 8px #00FF9D" }} />
          <span style={{ fontSize: 13, color: "#FFFFFF", fontWeight: 700, fontFamily: "monospace" }}>
            TRANSACTION CONFIRMED // BLOCK #189204
          </span>
        </div>

        <div
          style={{
            padding: "14px 22px",
            background: "rgba(15, 23, 42, 0.85)",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(0, 240, 255, 0.35)",
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            gap: 12,
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            transform: `translateX(${interpolate(notif2, [0, 1], [-80, 0])}px)`,
            opacity: notif2,
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#00F0FF", boxShadow: "0 0 8px #00F0FF" }} />
          <span style={{ fontSize: 13, color: "#FFFFFF", fontWeight: 700, fontFamily: "monospace" }}>
            SWAP OPTIMIZED: 0.001s ULTRA-LOW LATENCY
          </span>
        </div>
      </div>

      {/* Animated Mouse Pointer & Click Ring */}
      <div
        style={{
          position: "absolute",
          top: cursorY,
          left: cursorX,
          pointerEvents: "none",
          zIndex: 50,
          transform: "translate(-2px, -2px)",
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5">
          <path d="M3 3l7 18 3-7 7-3L3 3z" />
        </svg>

        {/* Ripple Click Effect */}
        {isClicking && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: "2px solid #00F0FF",
              transform: "translate(-50%, -50%)",
              opacity: interpolate(frame, [25, 32], [1, 0]),
            }}
          />
        )}
      </div>

      {/* Discipline Tag */}
      <div
        style={{
          position: "absolute",
          top: "14%",
          right: "12%",
          fontFamily: "'JetBrains Mono', monospace",
          textAlign: "right",
        }}
      >
        <span style={{ fontSize: 13, color: "#00F0FF", letterSpacing: 3, fontWeight: 700 }}>
          [03] UI & MICRO-INTERACTIONS
        </span>
        <h3 style={{ fontSize: 26, color: "#FFFFFF", fontWeight: 900, margin: "4px 0 0 0" }}>
          FLUID COMPONENT PHYSICS
        </h3>
      </div>
    </div>
  );
};
