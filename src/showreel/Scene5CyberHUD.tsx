import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const Scene5CyberHUD: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 200 },
  });

  // Audio spectrum visualizer bars (32 bands)
  const numBars = 32;
  const bars = Array.from({ length: numBars }, (_, i) => {
    // Generate organic responsive equalizer values
    const freq = (i + 1) * 0.12;
    const wave1 = Math.sin(frame * 0.55 + freq * 3);
    const wave2 = Math.cos(frame * 0.35 + i * 0.4);
    const wave3 = Math.sin(frame * 0.8 + i * 0.1);
    const rawHeight = (wave1 * 0.4 + wave2 * 0.35 + wave3 * 0.25 + 1) / 2;
    const height = Math.max(12, rawHeight * 190);
    return { height, active: height > 110 };
  });

  // Radar sweep angle
  const radarAngle = (frame * 5.5) % 360;

  // Skills telemetry list
  const skills = [
    { name: "3D SPATIAL DYNAMICS", level: "100%", color: "#00F0FF" },
    { name: "KINETIC TYPOGRAPHY", level: "100%", color: "#FFE500" },
    { name: "PROCEDURAL SHADERS & VECTORS", level: "98%", color: "#00FF9D" },
    { name: "SOUND DESIGN & BEAT SYNC", level: "96%", color: "#BD00FF" },
    { name: "HIGH-FIDELITY MICRO-INTERACTIONS", level: "99%", color: "#FF007F" },
  ];

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#05070D",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 110px",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Background Matrix Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.08) 0%, transparent 60%), linear-gradient(rgba(0, 255, 157, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 157, 0.05) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 40px 40px, 40px 40px",
          opacity: 0.8,
        }}
      />

      {/* Left Column: Skills Capabilities Telemetry */}
      <div
        style={{
          width: 500,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          zIndex: 10,
          transform: `translateX(${interpolate(enterSpring, [0, 1], [-80, 0])}px)`,
          opacity: enterSpring,
        }}
      >
        <div>
          <span style={{ fontSize: 13, color: "#00F0FF", letterSpacing: 3, fontWeight: 700, fontFamily: "monospace" }}>
            [05] CORE COMPETENCY RADAR
          </span>
          <h2 style={{ fontSize: 34, color: "#FFFFFF", fontWeight: 900, margin: "6px 0 0 0", letterSpacing: -0.5 }}>
            TECHNICAL MASTERY
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {skills.map((skill, index) => {
            const barSpring = spring({
              frame: frame - index * 4,
              fps,
              config: { damping: 14, stiffness: 220 },
            });

            return (
              <div
                key={index}
                style={{
                  background: "rgba(15, 23, 42, 0.7)",
                  backdropFilter: "blur(14px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: 12,
                  padding: "12px 18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, fontWeight: 700, letterSpacing: 1 }}>
                  <span style={{ color: "#FFFFFF" }}>{skill.name}</span>
                  <span style={{ color: skill.color, fontFamily: "monospace" }}>{skill.level}</span>
                </div>

                {/* Progress bar container */}
                <div style={{ width: "100%", height: 6, backgroundColor: "rgba(255, 255, 255, 0.08)", borderRadius: 3, overflow: "hidden" }}>
                  <div
                    style={{
                      height: "100%",
                      width: skill.level,
                      backgroundColor: skill.color,
                      boxShadow: `0 0 10px ${skill.color}`,
                      transform: `scaleX(${barSpring})`,
                      transformOrigin: "left",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Center Radar Sweep & Target Reticle */}
      <div
        style={{
          position: "relative",
          width: 380,
          height: 380,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `scale(${enterSpring})`,
        }}
      >
        {/* Radar Rings */}
        {[360, 260, 160, 60].map((size, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: size,
              height: size,
              borderRadius: "50%",
              border: `1px solid rgba(0, 240, 255, ${0.15 + i * 0.1})`,
            }}
          />
        ))}

        {/* Crosshairs */}
        <div style={{ position: "absolute", width: "100%", height: 1, backgroundColor: "rgba(0, 240, 255, 0.3)" }} />
        <div style={{ position: "absolute", width: 1, height: "100%", backgroundColor: "rgba(0, 240, 255, 0.3)" }} />

        {/* Rotating Radar Sweep Cone */}
        <div
          style={{
            position: "absolute",
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "conic-gradient(from 0deg, rgba(0, 240, 255, 0.35) 0deg, transparent 65deg, transparent 360deg)",
            transform: `rotate(${radarAngle}deg)`,
            pointerEvents: "none",
          }}
        />

        {/* Center Target Lock */}
        <div
          style={{
            width: 24,
            height: 24,
            border: "2px solid #FFE500",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 12px #FFE500",
          }}
        >
          <div style={{ width: 6, height: 6, backgroundColor: "#FFE500", borderRadius: "50%" }} />
        </div>

        {/* Lock Tag */}
        <div
          style={{
            position: "absolute",
            top: 24,
            right: 24,
            fontFamily: "monospace",
            fontSize: 11,
            color: "#00FF9D",
            letterSpacing: 1.5,
          }}
        >
          TARGET: ACQUIRED
          <br />
          LOCK_STATUS: 100%
        </div>
      </div>

      {/* Right Column: 32-Band Audio Visualizer Array */}
      <div
        style={{
          width: 520,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          zIndex: 10,
          transform: `translateX(${interpolate(enterSpring, [0, 1], [80, 0])}px)`,
          opacity: enterSpring,
        }}
      >
        <div style={{ textAlign: "right" }}>
          <span style={{ fontSize: 13, color: "#FFE500", letterSpacing: 3, fontWeight: 700, fontFamily: "monospace" }}>
            FREQUENCY SPECTRUM
          </span>
          <h3 style={{ fontSize: 26, color: "#FFFFFF", fontWeight: 800, margin: "4px 0 0 0" }}>
            AUDIO REACTIVE SYNCHRONIZATION
          </h3>
        </div>

        {/* Visualizer Container */}
        <div
          style={{
            height: 220,
            background: "rgba(10, 15, 26, 0.8)",
            border: "1px solid rgba(0, 240, 255, 0.2)",
            borderRadius: 16,
            padding: "20px 24px",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 6,
            boxSizing: "border-box",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          }}
        >
          {bars.map((bar, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: bar.height,
                background:
                  i > 24
                    ? "linear-gradient(180deg, #FF0055 0%, #FF9900 100%)"
                    : i > 14
                    ? "linear-gradient(180deg, #FFE500 0%, #00FF9D 100%)"
                    : "linear-gradient(180deg, #00F0FF 0%, #0055FF 100%)",
                borderRadius: "3px 3px 1px 1px",
                boxShadow: bar.active ? "0 0 10px rgba(0, 240, 255, 0.6)" : "none",
                transition: "height 0.05s ease-out",
              }}
            />
          ))}
        </div>

        {/* Bottom Telemetry Metrics */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 12,
            fontFamily: "monospace",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <span>SAMPLE RATE: 44.1 kHz</span>
          <span>BPM: 128.0 (LOCKED)</span>
          <span>LATENCY: 0.2 ms</span>
        </div>
      </div>
    </div>
  );
};
