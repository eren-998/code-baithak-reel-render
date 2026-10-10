import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

/* =========================================================================
   AFTER EFFECTS STYLE TOPIC MOTION GRAPHICS (ZERO WEB UI ELEMENTS)
   - ZERO HTML CARDS / ZERO WEB BUTTONS / ZERO BROWSER BOXES
   - Pure floating After Effects vector illustrations with animated SVG
     trim-paths (strokeDasharray / strokeDashoffset), orbital rings,
     radar sweeps, shockwave ripples, and multi-font kinetic typography.
   - Positioned in the Chest Safe Zone (top: 1175px) over the dark maroon
     t-shirt — 100% clear of the speaker's face (Y: 520–1150px) and
     captions (bottom: 175px).
   ========================================================================= */

const heavyTextShadow = `
  0 4px 20px rgba(0, 0, 0, 0.99),
  0 8px 38px rgba(0, 0, 0, 0.96),
  0 0 32px rgba(0, 0, 0, 0.94),
  0 2px 6px rgba(0, 0, 0, 0.95)
`;

const strokeStyle: React.CSSProperties = {
  WebkitTextStroke: "2.5px rgba(0, 0, 0, 0.96)",
  paintOrder: "stroke fill",
  textShadow: heavyTextShadow,
};

const subStrokeStyle: React.CSSProperties = {
  WebkitTextStroke: "1.8px rgba(0, 0, 0, 0.95)",
  paintOrder: "stroke fill",
  textShadow: heavyTextShadow,
};

const svgDropShadow = "drop-shadow(0 8px 20px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 14px rgba(0, 0, 0, 0.85))";

// Helper for AE Trim Path stroke animation
const getTrimPath = (progress: number, length: number) => ({
  strokeDasharray: length,
  strokeDashoffset: interpolate(progress, [0, 1], [length, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }),
});

export const AETopicMotionGraphics: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Continuous After Effects sine-wave micro-physics
  const wobble = Math.sin(frame / 4.5) * 4.5;
  const floatY = Math.sin(frame / 7) * 5;
  const pulse = 1 + Math.sin(frame / 5) * 0.05;

  // Determine active scene and local timing
  const renderScene = () => {
    // =====================================================================
    // SCENE 0A: HOOK PHASE 1 (Frames 0 - 63 | 0.00s - 2.10s)
    // Spoken: "Koi fayda nahi hoga teri product website live hone ka"
    // AE Design: Signal-Lost Wireframe Globe + Red X Slash Trim-Path
    // =====================================================================
    if (frame >= 0 && frame < 63) {
      const local = frame;
      const spr1 = spring({ frame: local, fps, config: { damping: 12, stiffness: 150, mass: 0.8 } });
      const spr2 = spring({ frame: local - 8, fps, config: { damping: 11, stiffness: 140, mass: 0.8 } });
      const slashProg = interpolate(local, [10, 28], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
      const exit = interpolate(local, [54, 63], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

      return (
        <div
          style={{
            opacity: spr1 * exit,
            transform: `translateY(${(1 - spr1) * 35 + floatY}px) scale(${0.82 + spr1 * 0.18})`,
            display: "flex",
            alignItems: "center",
            gap: 26,
          }}
        >
          {/* AE Vector: Wireframe Globe with Animated Red X Slash & Shockwave */}
          <svg width="138" height="138" viewBox="0 0 120 120" fill="none" style={{ filter: svgDropShadow }}>
            {/* Expanding Shockwave Ring */}
            <circle
              cx="60"
              cy="60"
              r={36 + (local % 30) * 0.7}
              stroke="#EF4444"
              strokeWidth="2"
              opacity={interpolate(local % 30, [0, 29], [0.8, 0])}
            />
            {/* Rotating Outer Dashed Reticle */}
            <g style={{ transform: `rotate(${local * 2.5}deg)`, transformOrigin: "60px 60px" }}>
              <circle cx="60" cy="60" r="52" stroke="#FACC15" strokeWidth="2.5" strokeDasharray="10 8" />
            </g>
            {/* Wireframe Globe */}
            <circle cx="60" cy="60" r="38" stroke="#FFFFFF" strokeWidth="3.5" />
            <ellipse cx="60" cy="60" rx="20" ry="38" stroke="#00F0FF" strokeWidth="2.5" />
            <line x1="22" y1="60" x2="98" y2="60" stroke="#00F0FF" strokeWidth="2.5" />
            <path d="M28 42 Q60 50 92 42" stroke="#00F0FF" strokeWidth="2" />
            <path d="M28 78 Q60 70 92 78" stroke="#00F0FF" strokeWidth="2" />
            {/* Animated Trim-Path Red X Cross-Out */}
            <path
              d="M28 28 L92 92"
              stroke="#EF4444"
              strokeWidth="8"
              strokeLinecap="round"
              style={getTrimPath(slashProg, 100)}
            />
            <path
              d="M92 28 L28 92"
              stroke="#EF4444"
              strokeWidth="8"
              strokeLinecap="round"
              style={getTrimPath(slashProg, 100)}
            />
          </svg>

          {/* AE Kinetic Typography */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 23,
                fontWeight: 900,
                letterSpacing: "4px",
                color: "#00F0FF",
                ...subStrokeStyle,
              }}
            >
              // WEBSITE LIVE WARNING
            </span>
            <span
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: 66,
                fontWeight: 900,
                color: "#FFFFFF",
                lineHeight: 1.02,
                letterSpacing: "1.5px",
                ...strokeStyle,
              }}
            >
              KOI FAYDA <span style={{ color: "#EF4444" }}>NAHI HOGA</span>
            </span>
            <span
              style={{
                opacity: Math.max(0, spr2),
                transform: `translateX(${(1 - spr2) * 25}px)`,
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontSize: 42,
                fontWeight: 900,
                color: "#FFE500",
                lineHeight: 1.1,
                ...strokeStyle,
              }}
            >
              Product Website Live Hone Ka!
            </span>
          </div>
        </div>
      );
    }

    // =====================================================================
    // SCENE 0B: HOOK PHASE 2 (Frames 63 - 116 | 2.10s - 3.88s)
    // Spoken: "agar tune in 10 cheezon ka dhyan nahi rakha!"
    // AE Design: 10-Point Tactical Target Reticle + Alert Triangle Vector
    // =====================================================================
    if (frame >= 63 && frame < 116) {
      const local = frame - 63;
      const spr = spring({ frame: local, fps, config: { damping: 11, stiffness: 155, mass: 0.8 } });
      const ringProg = interpolate(local, [0, 22], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
      const exit = interpolate(local, [44, 53], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

      return (
        <div
          style={{
            opacity: spr * exit,
            transform: `scale(${0.78 + spr * 0.22}) translateY(${floatY}px)`,
            display: "flex",
            alignItems: "center",
            gap: 26,
          }}
        >
          {/* AE Vector: Tactical 10X Target Reticle */}
          <svg
            width="136"
            height="136"
            viewBox="0 0 120 120"
            fill="none"
            style={{ filter: svgDropShadow, transform: `rotate(${wobble}deg)` }}
          >
            <circle
              cx="60"
              cy="60"
              r="48"
              stroke="#FFE500"
              strokeWidth="5"
              strokeLinecap="round"
              style={getTrimPath(ringProg, 310)}
            />
            <circle cx="60" cy="60" r="36" stroke="#00F0FF" strokeWidth="2.5" strokeDasharray="6 6" />
            {/* Target Crosshairs */}
            <line x1="60" y1="4" x2="60" y2="20" stroke="#FFE500" strokeWidth="4" strokeLinecap="round" />
            <line x1="60" y1="100" x2="60" y2="116" stroke="#FFE500" strokeWidth="4" strokeLinecap="round" />
            <line x1="4" y1="60" x2="20" y2="60" stroke="#FFE500" strokeWidth="4" strokeLinecap="round" />
            <line x1="100" y1="60" x2="116" y2="60" stroke="#FFE500" strokeWidth="4" strokeLinecap="round" />
            {/* Center "10" Vector Stamp */}
            <text
              x="60"
              y="74"
              textAnchor="middle"
              fill="#FFFFFF"
              stroke="#000000"
              strokeWidth="3"
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: "44px",
                fontWeight: 900,
                paintOrder: "stroke fill",
              }}
            >
              10
            </text>
          </svg>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 23,
                fontWeight: 900,
                letterSpacing: "4px",
                color: "#FFE500",
                ...subStrokeStyle,
              }}
            >
              ✦ MANDATORY CHECKLIST ✦
            </span>
            <span
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: 68,
                fontWeight: 900,
                color: "#FFE500",
                lineHeight: 1.02,
                letterSpacing: "1.5px",
                ...strokeStyle,
              }}
            >
              IN 10 CHEEZON KA
            </span>
            <span
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: 56,
                fontWeight: 900,
                color: "#FFFFFF",
                lineHeight: 1.05,
                letterSpacing: "2px",
                ...strokeStyle,
              }}
            >
              DHYAN NAHI RAKHA!
            </span>
          </div>
        </div>
      );
    }

    // =====================================================================
    // SCENE 1: GOOGLE SEARCH (Frames 116 - 183 | 3.88s - 6.10s)
    // Spoken: "Sabse pehle apni website ko search kar Google pe,"
    // AE Design: 4-Color Google Emblem + Orbital Magnifying Vector Lens
    // =====================================================================
    if (frame >= 116 && frame < 183) {
      const local = frame - 116;
      const spr = spring({ frame: local, fps, config: { damping: 12, stiffness: 150, mass: 0.8 } });
      const drawProg = interpolate(local, [0, 24], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
      const exit = interpolate(local, [58, 67], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

      return (
        <div
          style={{
            opacity: spr * exit,
            transform: `translateY(${(1 - spr) * 30 + floatY}px) scale(${0.84 + spr * 0.16})`,
            display: "flex",
            alignItems: "center",
            gap: 26,
          }}
        >
          {/* AE Vector: Orbital Google Search Scanner */}
          <svg width="138" height="138" viewBox="0 0 120 120" fill="none" style={{ filter: svgDropShadow }}>
            {/* Rotating Orbital Scan Ring */}
            <g style={{ transform: `rotate(${local * 3.2}deg)`, transformOrigin: "54px 54px" }}>
              <circle cx="54" cy="54" r="44" stroke="#00F0FF" strokeWidth="2.5" strokeDasharray="14 8" />
            </g>
            {/* Magnifying Lens Rim (Trim Path) */}
            <circle
              cx="54"
              cy="54"
              r="34"
              stroke="#FFFFFF"
              strokeWidth="5"
              style={getTrimPath(drawProg, 220)}
            />
            {/* Magnifying Handle */}
            <line
              x1="79"
              y1="79"
              x2="108"
              y2="108"
              stroke="#FFE500"
              strokeWidth="9"
              strokeLinecap="round"
              style={getTrimPath(drawProg, 50)}
            />
            {/* Official 4-Color Google "G" Vector */}
            <g transform="translate(32, 32) scale(0.92)">
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
              />
              <path
                fill="#FBBC05"
                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
              />
            </g>
          </svg>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 22,
                fontWeight: 900,
                letterSpacing: "4px",
                color: "#FFE500",
                ...subStrokeStyle,
              }}
            >
              STEP 01 // DISCOVERY
            </span>
            <span
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: 66,
                fontWeight: 900,
                color: "#FFFFFF",
                lineHeight: 1.02,
                letterSpacing: "1.5px",
                ...strokeStyle,
              }}
            >
              SEARCH ON <span style={{ color: "#00F0FF" }}>GOOGLE</span>
            </span>
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontSize: 40,
                fontWeight: 900,
                color: "#FFE500",
                ...strokeStyle,
              }}
            >
              Verify Your Live Domain
            </span>
          </div>
        </div>
      );
    }

    // =====================================================================
    // SCENE 2: INDEXING CHECK (Frames 183 - 231 | 6.10s - 7.70s)
    // Spoken: "uske baad uska indexing check kar."
    // AE Design: Crawler Neural Node Graph with Sequential Node Lock-On
    // =====================================================================
    if (frame >= 183 && frame < 231) {
      const local = frame - 183;
      const spr = spring({ frame: local, fps, config: { damping: 12, stiffness: 160, mass: 0.8 } });
      const lineProg = interpolate(local, [0, 18], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
      const exit = interpolate(local, [40, 48], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

      return (
        <div
          style={{
            opacity: spr * exit,
            transform: `scale(${0.82 + spr * 0.18}) translateY(${floatY}px)`,
            display: "flex",
            alignItems: "center",
            gap: 26,
          }}
        >
          {/* AE Vector: Crawler Indexing Node Constellation */}
          <svg width="138" height="138" viewBox="0 0 120 120" fill="none" style={{ filter: svgDropShadow }}>
            {/* Trim-path laser connectors from center hub to 4 nodes */}
            <line x1="60" y1="60" x2="24" y2="24" stroke="#00F0FF" strokeWidth="4" style={getTrimPath(lineProg, 60)} />
            <line x1="60" y1="60" x2="96" y2="24" stroke="#00F0FF" strokeWidth="4" style={getTrimPath(lineProg, 60)} />
            <line x1="60" y1="60" x2="24" y2="96" stroke="#22C55E" strokeWidth="4" style={getTrimPath(lineProg, 60)} />
            <line x1="60" y1="60" x2="96" y2="96" stroke="#22C55E" strokeWidth="4" style={getTrimPath(lineProg, 60)} />

            {/* Outer Satellite Nodes lighting up */}
            {[
              { cx: 24, cy: 24, delay: 4 },
              { cx: 96, cy: 24, delay: 8 },
              { cx: 24, cy: 96, delay: 12 },
              { cx: 96, cy: 96, delay: 16 },
            ].map((n, i) => {
              const active = local >= n.delay;
              return (
                <g key={i}>
                  <circle
                    cx={n.cx}
                    cy={n.cy}
                    r="14"
                    fill={active ? "#22C55E" : "#1E293B"}
                    stroke="#FFFFFF"
                    strokeWidth="3"
                  />
                  {active && (
                    <path
                      d={`M${n.cx - 5} ${n.cy} L${n.cx - 1} ${n.cy + 4} L${n.cx + 6} ${n.cy - 4}`}
                      stroke="#000000"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  )}
                </g>
              );
            })}

            {/* Center Crawler Core */}
            <circle cx="60" cy="60" r="20" fill="#00F0FF" stroke="#000000" strokeWidth="3.5" />
            <circle cx="60" cy="60" r="8" fill="#000000" />
          </svg>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 22,
                fontWeight: 900,
                letterSpacing: "4px",
                color: "#22C55E",
                ...subStrokeStyle,
              }}
            >
              STEP 02 // GOOGLEBOT CRAWL
            </span>
            <span
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: 68,
                fontWeight: 900,
                color: "#22C55E",
                lineHeight: 1.02,
                letterSpacing: "1.5px",
                ...strokeStyle,
              }}
            >
              INDEXING <span style={{ color: "#FFFFFF" }}>CHECK KAR</span>
            </span>
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontSize: 38,
                fontWeight: 900,
                color: "#00F0FF",
                ...strokeStyle,
              }}
            >
              URL Inspection & Crawl Status
            </span>
          </div>
        </div>
      );
    }

    // =====================================================================
    // SCENE 3: PAGES REPORT (Frames 231 - 310 | 7.70s - 10.33s)
    // Spoken: "Then uski Pages Report, that is uski indexing ko check karo."
    // AE Design: Isometric Vector Page Stack + Sweeping Laser Beam & Telemetry Bars
    // =====================================================================
    if (frame >= 231 && frame < 310) {
      const local = frame - 231;
      const spr = spring({ frame: local, fps, config: { damping: 12, stiffness: 150, mass: 0.8 } });
      const scanY = interpolate(local % 36, [0, 18, 36], [22, 98, 22]);
      const exit = interpolate(local, [70, 79], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

      return (
        <div
          style={{
            opacity: spr * exit,
            transform: `translateY(${(1 - spr) * 30 + floatY}px) scale(${0.84 + spr * 0.16})`,
            display: "flex",
            alignItems: "center",
            gap: 26,
          }}
        >
          {/* AE Vector: Isometric Pages Telemetry Scanner */}
          <svg width="138" height="138" viewBox="0 0 120 120" fill="none" style={{ filter: svgDropShadow }}>
            {/* Stacked Vector Page Outlines (Pure linework, no web card) */}
            <path
              d="M60 16 L104 38 L60 60 L16 38 Z"
              stroke="#00F0FF"
              strokeWidth="4"
              fill="rgba(0, 240, 255, 0.18)"
              strokeLinejoin="round"
            />
            <path
              d="M16 58 L60 80 L104 58"
              stroke="#FFE500"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 78 L60 100 L104 78"
              stroke="#22C55E"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Sweeping Laser Scan Line */}
            <line x1="10" y1={scanY} x2="110" y2={scanY} stroke="#FFE500" strokeWidth="4" strokeLinecap="round" />
            <circle cx="16" cy={scanY} r="5" fill="#FFE500" />
            <circle cx="104" cy={scanY} r="5" fill="#FFE500" />
          </svg>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 22,
                fontWeight: 900,
                letterSpacing: "4px",
                color: "#00F0FF",
                ...subStrokeStyle,
              }}
            >
              STEP 03 // SEARCH CONSOLE
            </span>
            <span
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: 66,
                fontWeight: 900,
                color: "#FFE500",
                lineHeight: 1.02,
                letterSpacing: "1.5px",
                ...strokeStyle,
              }}
            >
              PAGES REPORT <span style={{ color: "#FFFFFF" }}>CHECK</span>
            </span>
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontSize: 38,
                fontWeight: 900,
                color: "#22C55E",
                ...strokeStyle,
              }}
            >
              Verify Indexed vs Not-Indexed Pages
            </span>
          </div>
        </div>
      );
    }

    // =====================================================================
    // SCENE 4: FREE AUDIT - VERITAS (Frames 310 - 418 | 10.33s - 13.95s)
    // Spoken: "Fourth one, uska free audit karwa, Veritas teri help kar dega free mein karne mein."
    // AE Design: Diagnostic Radar Shield + Animated 100% Arc Gauge
    // =====================================================================
    if (frame >= 310 && frame < 418) {
      const local = frame - 310;
      const spr = spring({ frame: local, fps, config: { damping: 12, stiffness: 150, mass: 0.8 } });
      const gaugeProg = interpolate(local, [5, 55], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
      const score = Math.round(gaugeProg * 100);
      const exit = interpolate(local, [98, 108], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

      return (
        <div
          style={{
            opacity: spr * exit,
            transform: `scale(${0.82 + spr * 0.18}) translateY(${floatY}px)`,
            display: "flex",
            alignItems: "center",
            gap: 26,
          }}
        >
          {/* AE Vector: Cyber Shield & 100% Diagnostic Arc Gauge */}
          <svg width="142" height="142" viewBox="0 0 120 120" fill="none" style={{ filter: svgDropShadow }}>
            {/* Outer Track Ring */}
            <circle cx="60" cy="60" r="50" stroke="rgba(255,255,255,0.22)" strokeWidth="7" />
            {/* Animated Trim-Path Gauge Arc */}
            <circle
              cx="60"
              cy="60"
              r="50"
              stroke="#10B981"
              strokeWidth="7"
              strokeLinecap="round"
              transform="rotate(-90 60 60)"
              style={getTrimPath(gaugeProg, 315)}
            />
            {/* Inner Shield Vector */}
            <path
              d="M60 22 L90 34 V58 C90 79 60 95 60 95 C60 95 30 79 30 58 V34 Z"
              fill="rgba(16, 185, 129, 0.25)"
              stroke="#FFE500"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            {/* Live Animated Score Readout */}
            <text
              x="60"
              y="69"
              textAnchor="middle"
              fill="#FFFFFF"
              stroke="#000000"
              strokeWidth="2.5"
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: "30px",
                fontWeight: 900,
                paintOrder: "stroke fill",
              }}
            >
              {score}%
            </text>
          </svg>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 22,
                fontWeight: 900,
                letterSpacing: "4px",
                color: "#10B981",
                ...subStrokeStyle,
              }}
            >
              STEP 04 // VERITAS AI TOOL
            </span>
            <span
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: 66,
                fontWeight: 900,
                color: "#FFFFFF",
                lineHeight: 1.02,
                letterSpacing: "1.5px",
                ...strokeStyle,
              }}
            >
              FREE <span style={{ color: "#10B981" }}>SITE AUDIT</span>
            </span>
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontSize: 40,
                fontWeight: 900,
                color: "#FFE500",
                ...strokeStyle,
              }}
            >
              Veritas Diagnostic — 100% Free
            </span>
          </div>
        </div>
      );
    }

    // =====================================================================
    // SCENE 5: 5-STAR GOOGLE REVIEWS (Frames 418 - 513 | 13.95s - 17.11s)
    // Spoken: "Zyada se zyada 5-Star Google Reviews lekar aao apne product ki site par."
    // AE Design: 5-Star Golden Vector Constellation with Sequential Spring Burst
    // =====================================================================
    if (frame >= 418 && frame < 513) {
      const local = frame - 418;
      const spr = spring({ frame: local, fps, config: { damping: 12, stiffness: 150, mass: 0.8 } });
      const exit = interpolate(local, [85, 95], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

      return (
        <div
          style={{
            opacity: spr * exit,
            transform: `translateY(${(1 - spr) * 30 + floatY}px) scale(${0.84 + spr * 0.16})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
          }}
        >
          {/* AE Vector: 5-Star Sequential Spring Burst Constellation */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {[0, 1, 2, 3, 4].map((idx) => {
              const starSpr = spring({
                frame: local - idx * 4,
                fps,
                config: { damping: 9, stiffness: 190, mass: 0.7 },
              });
              const archY = Math.abs(idx - 2) * 8;
              return (
                <svg
                  key={idx}
                  width="64"
                  height="64"
                  viewBox="0 0 48 48"
                  fill="none"
                  style={{
                    transform: `translateY(${archY}px) scale(${starSpr}) rotate(${(1 - starSpr) * -35 + wobble * 0.6}deg)`,
                    filter: svgDropShadow,
                  }}
                >
                  <path
                    d="M24 3L30.5 16.2L45 18.3L34.5 28.5L37 43L24 36.2L11 43L13.5 28.5L3 18.3L17.5 16.2L24 3Z"
                    fill="#FFE500"
                    stroke="#000000"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                </svg>
              );
            })}
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 22,
                fontWeight: 900,
                letterSpacing: "4px",
                color: "#00F0FF",
                ...subStrokeStyle,
              }}
            >
              STEP 05 // SOCIAL PROOF ENGINE
            </span>
            <span
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: 66,
                fontWeight: 900,
                color: "#FFE500",
                lineHeight: 1.02,
                letterSpacing: "1.5px",
                ...strokeStyle,
              }}
            >
              5-STAR <span style={{ color: "#FFFFFF" }}>GOOGLE REVIEWS</span>
            </span>
          </div>
        </div>
      );
    }

    // =====================================================================
    // SCENE 6: PARTNER BACKLINKS (Frames 513 - 591 | 17.11s - 19.69s)
    // Spoken: "Agar tumhara koi partner hai to use bolo link kare in products ko."
    // AE Design: Interlocking Vector Chain + Energy Bridge
    // =====================================================================
    if (frame >= 513 && frame < 591) {
      const local = frame - 513;
      const spr = spring({ frame: local, fps, config: { damping: 12, stiffness: 155, mass: 0.8 } });
      const lockOffset = interpolate(spr, [0, 1], [28, 0]);
      const exit = interpolate(local, [68, 78], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

      return (
        <div
          style={{
            opacity: spr * exit,
            transform: `scale(${0.82 + spr * 0.18}) translateY(${floatY}px)`,
            display: "flex",
            alignItems: "center",
            gap: 26,
          }}
        >
          {/* AE Vector: Interlocking Neon Hyperlink Chain */}
          <svg width="142" height="136" viewBox="0 0 130 120" fill="none" style={{ filter: svgDropShadow }}>
            {/* Glowing Orbit Ring */}
            <circle cx="65" cy="60" r="50" stroke="#A855F7" strokeWidth="2.5" strokeDasharray="10 8" />
            {/* Left Chain Link sliding in */}
            <g transform={`translate(${-lockOffset}, 0) rotate(-32 52 60)`}>
              <rect
                x="22"
                y="42"
                width="54"
                height="32"
                rx="16"
                stroke="#00F0FF"
                strokeWidth="7"
              />
            </g>
            {/* Right Chain Link sliding in */}
            <g transform={`translate(${lockOffset}, 0) rotate(-32 78 60)`}>
              <rect
                x="54"
                y="46"
                width="54"
                height="32"
                rx="16"
                stroke="#FFE500"
                strokeWidth="7"
              />
            </g>
            {/* Spark Node at Intersection */}
            <circle cx="65" cy="60" r={6 * pulse} fill="#FFFFFF" />
          </svg>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 22,
                fontWeight: 900,
                letterSpacing: "4px",
                color: "#A855F7",
                ...subStrokeStyle,
              }}
            >
              STEP 06 // DOMAIN AUTHORITY
            </span>
            <span
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: 64,
                fontWeight: 900,
                color: "#FFFFFF",
                lineHeight: 1.02,
                letterSpacing: "1.5px",
                ...strokeStyle,
              }}
            >
              PARTNER <span style={{ color: "#00F0FF" }}>BACKLINKS</span>
            </span>
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontSize: 38,
                fontWeight: 900,
                color: "#FFE500",
                ...strokeStyle,
              }}
            >
              Cross-Link Your Product Pages
            </span>
          </div>
        </div>
      );
    }

    // =====================================================================
    // SCENE 7: BRAND GOOGLE ALERTS (Frames 591 - 674 | 19.69s - 22.46s)
    // Spoken: "Second last is, apne brand ka Google Alert set kar lo."
    // AE Design: Harmonic Swinging Sonic Bell + Concentric Radar Shockwaves
    // =====================================================================
    if (frame >= 591 && frame < 674) {
      const local = frame - 591;
      const spr = spring({ frame: local, fps, config: { damping: 12, stiffness: 155, mass: 0.8 } });
      const bellSwing = Math.sin(local * 0.5) * 14 * Math.exp(-local * 0.015);
      const exit = interpolate(local, [73, 83], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

      return (
        <div
          style={{
            opacity: spr * exit,
            transform: `translateY(${(1 - spr) * 30 + floatY}px) scale(${0.84 + spr * 0.16})`,
            display: "flex",
            alignItems: "center",
            gap: 26,
          }}
        >
          {/* AE Vector: Sonic Alert Bell with Radar Ripples */}
          <svg width="138" height="138" viewBox="0 0 120 120" fill="none" style={{ filter: svgDropShadow }}>
            {/* Left & Right Sonic Radar Waves */}
            <path
              d="M22 36 C10 50, 10 70, 22 84"
              stroke="#00F0FF"
              strokeWidth="4"
              strokeLinecap="round"
              opacity={0.4 + Math.sin(local * 0.4) * 0.5}
            />
            <path
              d="M98 36 C110 50, 110 70, 98 84"
              stroke="#00F0FF"
              strokeWidth="4"
              strokeLinecap="round"
              opacity={0.4 + Math.sin(local * 0.4) * 0.5}
            />
            <path
              d="M12 24 C-4 46, -4 74, 12 96"
              stroke="#FFE500"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity={0.4 + Math.cos(local * 0.4) * 0.5}
            />
            <path
              d="M108 24 C124 46, 124 74, 108 96"
              stroke="#FFE500"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity={0.4 + Math.cos(local * 0.4) * 0.5}
            />

            {/* Swinging Bell Vector */}
            <g style={{ transform: `rotate(${bellSwing}deg)`, transformOrigin: "60px 24px" }}>
              <path
                d="M60 18 C42 18, 34 34, 34 56 L26 76 H94 L86 56 C86 34, 78 18, 60 18 Z"
                fill="#FFE500"
                stroke="#000000"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <circle cx="60" cy="86" r="9" fill="#EF4444" stroke="#000000" strokeWidth="3.5" />
            </g>
          </svg>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 22,
                fontWeight: 900,
                letterSpacing: "4px",
                color: "#FFE500",
                ...subStrokeStyle,
              }}
            >
              STEP 07 // BRAND RADAR
            </span>
            <span
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: 66,
                fontWeight: 900,
                color: "#FFE500",
                lineHeight: 1.02,
                letterSpacing: "1.5px",
                ...strokeStyle,
              }}
            >
              GOOGLE <span style={{ color: "#FFFFFF" }}>ALERTS</span>
            </span>
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontSize: 38,
                fontWeight: 900,
                color: "#00F0FF",
                ...strokeStyle,
              }}
            >
              Track Every Brand Mention Live
            </span>
          </div>
        </div>
      );
    }

    // =====================================================================
    // SCENE 8: PUBLISH PRODUCT BLOGS (Frames 674 - 772 | 22.46s - 25.74s)
    // Spoken: "And the last thing is, make sure aap blogs ke andar batao ki kya-kya aapne kiya hai."
    // AE Design: Vector Fountain Pen Nib Drawing a Glowing Bezier Curve
    // =====================================================================
    if (frame >= 674 && frame < 772) {
      const local = frame - 674;
      const spr = spring({ frame: local, fps, config: { damping: 12, stiffness: 150, mass: 0.8 } });
      const pathProg = interpolate(local, [4, 42], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
      const exit = interpolate(local, [88, 98], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

      return (
        <div
          style={{
            opacity: spr * exit,
            transform: `scale(${0.82 + spr * 0.18}) translateY(${floatY}px)`,
            display: "flex",
            alignItems: "center",
            gap: 26,
          }}
        >
          {/* AE Vector: Fountain Pen Nib + Bezier Ink Trail */}
          <svg width="138" height="138" viewBox="0 0 120 120" fill="none" style={{ filter: svgDropShadow }}>
            {/* Animated Bezier Curve Trail */}
            <path
              d="M16 94 C 38 94, 42 46, 68 62 C 88 74, 92 32, 106 24"
              stroke="#00F0FF"
              strokeWidth="6"
              strokeLinecap="round"
              style={getTrimPath(pathProg, 160)}
            />
            {/* Vector Pen Nib */}
            <g style={{ transform: `rotate(${wobble}deg)`, transformOrigin: "60px 55px" }}>
              <path
                d="M78 16 L104 42 L58 88 L26 94 L32 62 Z"
                fill="#FFE500"
                stroke="#000000"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <line x1="26" y1="94" x2="52" y2="68" stroke="#000000" strokeWidth="3.5" />
              <circle cx="54" cy="66" r="5" fill="#000000" />
            </g>
          </svg>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 22,
                fontWeight: 900,
                letterSpacing: "4px",
                color: "#00F0FF",
                ...subStrokeStyle,
              }}
            >
              STEP 08 // CONTENT ENGINE
            </span>
            <span
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: 66,
                fontWeight: 900,
                color: "#FFFFFF",
                lineHeight: 1.02,
                letterSpacing: "1.5px",
                ...strokeStyle,
              }}
            >
              PUBLISH <span style={{ color: "#FFE500" }}>BLOGS</span>
            </span>
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontSize: 38,
                fontWeight: 900,
                color: "#22C55E",
                ...strokeStyle,
              }}
            >
              Share Product Updates & Case Studies
            </span>
          </div>
        </div>
      );
    }

    // =====================================================================
    // SCENE 9: OUTRO CTA (Frames 772 - 869 | 25.74s - 29.02s)
    // Spoken: "And aise hi aur informative videos ke liye apne bhai ke channel Code Baithak ko follow kar sakte hain!"
    // AE Design: Sweeping Vector Arrow Callout + @CODE_BAITHAK Kinetic Stamp
    // =====================================================================
    if (frame >= 772) {
      const local = frame - 772;
      const spr = spring({ frame: local, fps, config: { damping: 11, stiffness: 150, mass: 0.8 } });
      const arrowProg = interpolate(local, [4, 28], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

      return (
        <div
          style={{
            opacity: spr,
            transform: `scale(${0.8 + spr * 0.2}) translateY(${floatY}px)`,
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          {/* AE Vector: Verified Rocket / Upward Sweep Arrow */}
          <svg width="130" height="130" viewBox="0 0 120 120" fill="none" style={{ filter: svgDropShadow }}>
            <circle cx="60" cy="60" r="48" stroke="#0095F6" strokeWidth="4" strokeDasharray="12 8" />
            <path
              d="M32 84 C 48 84, 56 64, 78 32"
              stroke="#FFE500"
              strokeWidth="8"
              strokeLinecap="round"
              style={getTrimPath(arrowProg, 90)}
            />
            <path
              d="M56 30 L82 28 L84 54"
              stroke="#FFE500"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={getTrimPath(arrowProg, 70)}
            />
          </svg>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 22,
                fontWeight: 900,
                letterSpacing: "4px",
                color: "#00F0FF",
                ...subStrokeStyle,
              }}
            >
              ✦ DAILY TECH BREAKDOWNS ✦
            </span>
            <span
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: 60,
                fontWeight: 900,
                color: "#FFE500",
                lineHeight: 1.02,
                letterSpacing: "1.5px",
                ...strokeStyle,
              }}
            >
              FOLLOW <span style={{ color: "#FFFFFF" }}>CODE BAITHAK</span>
            </span>
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontSize: 38,
                fontWeight: 900,
                color: "#0095F6",
                ...strokeStyle,
              }}
            >
              @code_baithak for More!
            </span>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 1270, // Centered on chest below collar mic (Y: 1185) and above captions (Y: 1620)
        left: 0,
        width: 1080,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "none",
        zIndex: 52,
      }}
    >
      {renderScene()}
    </div>
  );
};
