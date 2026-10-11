import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

/* =========================================================================
   AFTER EFFECTS EXPLAINER MOTION DIAGRAMS & NODE GRAPHS (FOOTER-UP ZONE)
   - Positioned in the Footer-Up Zone (top: 1140px - 1590px), directly above
     the footer captions (bottom: 145px) and below the speaker's hands/face.
   - Pure After Effects vector node graphs, animated SVG bezier conduits,
     token splitters, autoregressive feedback arcs, KV cache memory locks,
     and Server-Triggered Event (SSE) streaming pipelines.
   ========================================================================= */

const heavyTextShadow = `
  0 4px 20px rgba(0, 0, 0, 0.99),
  0 8px 36px rgba(0, 0, 0, 0.96),
  0 0 28px rgba(0, 0, 0, 0.94),
  0 2px 6px rgba(0, 0, 0, 0.95)
`;

const strokeStyle: React.CSSProperties = {
  WebkitTextStroke: "2.4px rgba(0, 0, 0, 0.96)",
  paintOrder: "stroke fill",
  textShadow: heavyTextShadow,
};

const subStrokeStyle: React.CSSProperties = {
  WebkitTextStroke: "1.6px rgba(0, 0, 0, 0.95)",
  paintOrder: "stroke fill",
  textShadow: heavyTextShadow,
};

const svgDropShadow =
  "drop-shadow(0 8px 20px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 14px rgba(0, 0, 0, 0.85))";

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

  const floatY = Math.sin(frame / 7) * 4;
  const pulse = 1 + Math.sin(frame / 5) * 0.04;

  const renderScene = () => {
    // =====================================================================
    // SCENE 1: FRIEND TEXTS YOU — COMPLETE FORMAT (Frames 0 - 101 | 0.00s - 3.38s)
    // Spoken: "So whenever your friend texts you, it comes in a complete format."
    // AE Node Diagram: [ FRIEND NODE ] ──( SINGLE 100% PAYLOAD )──► [ YOUR PHONE ]
    // =====================================================================
    if (frame >= 0 && frame < 101) {
      const local = frame;
      const spr = spring({ frame: local, fps, config: { damping: 13, stiffness: 150 } });
      const pipeProg = interpolate(local, [8, 38], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
      const packetX = interpolate(local, [12, 42], [210, 610], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
      const lockSpr = spring({ frame: local - 40, fps, config: { damping: 11, stiffness: 180 } });
      const exit = interpolate(local, [91, 101], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

      return (
        <div
          style={{
            opacity: spr * exit,
            transform: `translateY(${(1 - spr) * 32 + floatY}px) scale(${0.9 + spr * 0.1})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 980,
          }}
        >
          {/* Kinetic Header */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, marginBottom: 6, textAlign: "center" }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 20,
                fontWeight: 900,
                letterSpacing: "3px",
                color: "#22C55E",
                ...subStrokeStyle,
              }}
            >
              [ P2P MESSAGE ARCHITECTURE ]
            </span>
            <span
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: 48,
                fontWeight: 900,
                letterSpacing: "1.5px",
                color: "#FFFFFF",
                ...strokeStyle,
              }}
            >
              100% <span style={{ color: "#22C55E" }}>COMPLETE FORMAT</span>
            </span>
          </div>

          {/* AE Explainer Node Graph SVG */}
          <svg width="960" height="260" viewBox="0 0 960 260" fill="none" style={{ filter: svgDropShadow }}>
            {/* Connecting Conduit Pipe */}
            <path
              d="M 210 130 L 750 130"
              stroke="rgba(34, 197, 94, 0.28)"
              strokeWidth="8"
              strokeDasharray="14 10"
            />
            <path
              d="M 210 130 L 750 130"
              stroke="#22C55E"
              strokeWidth="5"
              strokeLinecap="round"
              style={getTrimPath(pipeProg, 540)}
            />

            {/* Left Node: FRIEND SENDER NODE */}
            <g transform="translate(125, 130)">
              <circle r="72" fill="rgba(6, 14, 24, 0.9)" stroke="#22C55E" strokeWidth="3.5" />
              <circle
                r="82"
                stroke="#22C55E"
                strokeWidth="2"
                strokeDasharray="12 8"
                transform={`rotate(${local * 2})`}
              />
              {/* Vector User Icon */}
              <circle cx="0" cy="-16" r="16" stroke="#FFFFFF" strokeWidth="3.5" fill="rgba(34,197,94,0.25)" />
              <path d="M -28 24 C -28 4, 28 4, 28 24" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
              <text x="0" y="52" textAnchor="middle" fill="#22C55E" fontFamily="JetBrains Mono" fontSize="14" fontWeight="900">
                FRIEND NODE
              </text>
            </g>

            {/* Traveling / Locked Complete Payload Capsule */}
            <g transform={`translate(${packetX}, 130) scale(${0.85 + Math.min(1, pipeProg) * 0.15})`}>
              <rect
                x="-135"
                y="-44"
                width="270"
                height="88"
                rx="16"
                fill="rgba(8, 24, 18, 0.95)"
                stroke="#FFE500"
                strokeWidth="3.5"
              />
              <text x="0" y="-8" textAnchor="middle" fill="#FFE500" fontFamily="JetBrains Mono" fontSize="15" fontWeight="900">
                SINGLE PAYLOAD // 1 PACKET
              </text>
              <text x="0" y="22" textAnchor="middle" fill="#FFFFFF" fontFamily="Inter" fontSize="22" fontWeight="900">
                &quot;Hey! Let&apos;s meet at 5&quot;
              </text>
            </g>

            {/* Right Node: RECEIVER NODE */}
            <g transform={`translate(835, 130) scale(${0.92 + lockSpr * 0.08})`}>
              {lockSpr > 0.1 && (
                <circle
                  r={72 + lockSpr * 26}
                  stroke="#FFE500"
                  strokeWidth={4 * (1 - lockSpr)}
                  opacity={1 - lockSpr}
                />
              )}
              <circle
                r="72"
                fill="rgba(6, 14, 24, 0.9)"
                stroke={lockSpr > 0.2 ? "#FFE500" : "#00F0FF"}
                strokeWidth="3.5"
              />
              {/* Checkmark / Complete Delivery */}
              <path
                d="M -22 -4 L -6 14 L 26 -18"
                stroke="#22C55E"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <text x="0" y="46" textAnchor="middle" fill="#FFFFFF" fontFamily="JetBrains Mono" fontSize="14" fontWeight="900">
                DELIVERED 100%
              </text>
            </g>
          </svg>
        </div>
      );
    }

    // =====================================================================
    // SCENE 2: AI RESPONSE — CHUNK BY CHUNK (Frames 101 - 233 | 3.38s - 7.78s)
    // Spoken: "But whenever an AI sends you a response, it comes chunk by chunk."
    // AE Node Diagram: [ AI ENGINE ] ──► [CHUNK 01] ➔ [CHUNK 02] ➔ [CHUNK 03] ➔ [CHUNK 04]
    // =====================================================================
    if (frame >= 101 && frame < 233) {
      const local = frame - 101;
      const spr = spring({ frame: local, fps, config: { damping: 12, stiffness: 155 } });
      const exit = interpolate(local, [120, 132], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

      const chunks = [
        { id: "CHUNK_01", word: '"Here"', color: "#00F0FF", delay: 12, x: 310 },
        { id: "CHUNK_02", word: '"is"', color: "#38BDF8", delay: 30, x: 485 },
        { id: "CHUNK_03", word: '"your"', color: "#A855F7", delay: 48, x: 660 },
        { id: "CHUNK_04", word: '"answer..."', color: "#FFE500", delay: 66, x: 835 },
      ];

      return (
        <div
          style={{
            opacity: spr * exit,
            transform: `translateY(${(1 - spr) * 32 + floatY}px) scale(${0.9 + spr * 0.1})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 980,
          }}
        >
          {/* Kinetic Header */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, marginBottom: 6, textAlign: "center" }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 20,
                fontWeight: 900,
                letterSpacing: "3px",
                color: "#00F0FF",
                ...subStrokeStyle,
              }}
            >
              [ AI STREAMING PIPELINE ]
            </span>
            <span
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: 50,
                fontWeight: 900,
                letterSpacing: "1.5px",
                color: "#FFFFFF",
                ...strokeStyle,
              }}
            >
              STREAMED <span style={{ color: "#FFE500" }}>CHUNK BY CHUNK</span>
            </span>
          </div>

          <svg width="960" height="260" viewBox="0 0 960 260" fill="none" style={{ filter: svgDropShadow }}>
            {/* Main Stream Bus */}
            <path d="M 190 130 L 900 130" stroke="rgba(0, 240, 255, 0.22)" strokeWidth="6" strokeDasharray="10 8" />
            <path
              d="M 190 130 L 900 130"
              stroke="#00F0FF"
              strokeWidth="4"
              style={getTrimPath(interpolate(local, [5, 75], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }), 710)}
            />

            {/* Left Node: AI NEURAL CORE */}
            <g transform="translate(115, 130)">
              <polygon
                points="0,-74 64,-37 64,37 0,74 -64,37 -64,-37"
                fill="rgba(8, 14, 28, 0.94)"
                stroke="#00F0FF"
                strokeWidth="3.5"
              />
              <circle
                r="52"
                stroke="#A855F7"
                strokeWidth="2.5"
                strokeDasharray="10 6"
                transform={`rotate(${-local * 3})`}
              />
              <text x="0" y="-4" textAnchor="middle" fill="#00F0FF" fontFamily="Impact" fontSize="28" letterSpacing="1">
                AI LLM
              </text>
              <text x="0" y="22" textAnchor="middle" fill="#FFFFFF" fontFamily="JetBrains Mono" fontSize="13" fontWeight="900">
                STREAM CORE
              </text>
            </g>

            {/* Sequential Chunk Nodes */}
            {chunks.map((c, i) => {
              const cSpr = spring({
                frame: local - c.delay,
                fps,
                config: { damping: 11, stiffness: 180 },
              });
              const op = Math.min(1, Math.max(0, cSpr));
              return (
                <g
                  key={i}
                  transform={`translate(${c.x}, 130) scale(${0.5 + cSpr * 0.5})`}
                  opacity={op}
                >
                  {/* Node Pulse Ring */}
                  <rect
                    x="-74"
                    y="-54"
                    width="148"
                    height="108"
                    rx="16"
                    fill="rgba(8, 14, 26, 0.94)"
                    stroke={c.color}
                    strokeWidth="3.5"
                  />
                  <circle cx="-52" cy="-32" r="5" fill={c.color} />
                  <text x="6" y="-27" textAnchor="middle" fill={c.color} fontFamily="JetBrains Mono" fontSize="13" fontWeight="900">
                    {c.id}
                  </text>
                  <text x="0" y="14" textAnchor="middle" fill="#FFFFFF" fontFamily="Inter" fontSize="24" fontWeight="900">
                    {c.word}
                  </text>
                  <text x="0" y="38" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontFamily="JetBrains Mono" fontSize="11" fontWeight="700">
                    TOKEN #{i + 1}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      );
    }

    // =====================================================================
    // SCENE 3: WHAT'S THE DIFFERENCE? (Frames 233 - 337 | 7.78s - 11.24s)
    // Spoken: "Now the question is, what's the difference? So let me tell you."
    // AE Node Diagram: Split Comparison Node Graph converging on Question Core
    // =====================================================================
    if (frame >= 233 && frame < 337) {
      const local = frame - 233;
      const spr = spring({ frame: local, fps, config: { damping: 12, stiffness: 160 } });
      const exit = interpolate(local, [92, 104], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

      return (
        <div
          style={{
            opacity: spr * exit,
            transform: `translateY(${(1 - spr) * 30 + floatY}px) scale(${0.9 + spr * 0.1})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 980,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, marginBottom: 6, textAlign: "center" }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 20,
                fontWeight: 900,
                letterSpacing: "3px",
                color: "#FFE500",
                ...subStrokeStyle,
              }}
            >
              [ ARCHITECTURE MYSTERY ]
            </span>
            <span
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: 52,
                fontWeight: 900,
                letterSpacing: "1.5px",
                color: "#FFFFFF",
                ...strokeStyle,
              }}
            >
              WHAT&apos;S THE <span style={{ color: "#00F0FF" }}>DIFFERENCE?</span>
            </span>
          </div>

          <svg width="960" height="255" viewBox="0 0 960 255" fill="none" style={{ filter: svgDropShadow }}>
            {/* Left & Right Bezier Arms into Central Query Core */}
            <path d="M 310 128 C 380 128, 400 128, 430 128" stroke="#22C55E" strokeWidth="4" strokeDasharray="8 6" />
            <path d="M 650 128 C 580 128, 560 128, 530 128" stroke="#00F0FF" strokeWidth="4" strokeDasharray="8 6" />

            {/* Left Comparison Node: FRIEND TEXT */}
            <g transform="translate(180, 128)">
              <rect x="-135" y="-58" width="270" height="116" rx="18" fill="rgba(8, 18, 16, 0.94)" stroke="#22C55E" strokeWidth="3.5" />
              <text x="0" y="-20" textAnchor="middle" fill="#22C55E" fontFamily="JetBrains Mono" fontSize="15" fontWeight="900">
                FRIEND TEXT MESSAGE
              </text>
              <text x="0" y="14" textAnchor="middle" fill="#FFFFFF" fontFamily="Impact" fontSize="30" letterSpacing="1">
                ALL AT ONCE
              </text>
              <text x="0" y="40" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontFamily="JetBrains Mono" fontSize="13" fontWeight="700">
                [ 1 COMPLETE PAYLOAD ]
              </text>
            </g>

            {/* Center Node: Rotating AE Query Core */}
            <g transform={`translate(480, 128) scale(${pulse})`}>
              <circle r="64" fill="rgba(12, 14, 26, 0.96)" stroke="#FFE500" strokeWidth="4" />
              <circle
                r="76"
                stroke="#00F0FF"
                strokeWidth="2.5"
                strokeDasharray="14 8"
                transform={`rotate(${local * 3.2})`}
              />
              <text x="0" y="18" textAnchor="middle" fill="#FFE500" fontFamily="Impact" fontSize="56">
                VS
              </text>
            </g>

            {/* Right Comparison Node: AI LLM STREAM */}
            <g transform="translate(780, 128)">
              <rect x="-135" y="-58" width="270" height="116" rx="18" fill="rgba(8, 14, 28, 0.94)" stroke="#00F0FF" strokeWidth="3.5" />
              <text x="0" y="-20" textAnchor="middle" fill="#00F0FF" fontFamily="JetBrains Mono" fontSize="15" fontWeight="900">
                AI MODEL RESPONSE
              </text>
              <text x="0" y="14" textAnchor="middle" fill="#FFFFFF" fontFamily="Impact" fontSize="30" letterSpacing="1">
                CHUNK BY CHUNK
              </text>
              <text x="0" y="40" textAnchor="middle" fill="#FFE500" fontFamily="JetBrains Mono" fontSize="13" fontWeight="700">
                [ TOKEN STREAMING ]
              </text>
            </g>
          </svg>
        </div>
      );
    }

    // =====================================================================
    // SCENE 4: INPUT WORD ➔ TOKENIZATION PIPELINE (Frames 337 - 548 | 11.24s - 18.26s)
    // Spoken: "So let's assume that you are giving this word to your AI model.
    //          So this word is actually converted into different tokens so that the model can process it."
    // AE Node Diagram: [ INPUT WORD ] ──► [ TOKENIZER PRISM ] ──► [TOK_01] [TOK_02] [TOK_03] ──► [ AI MODEL ]
    // =====================================================================
    if (frame >= 337 && frame < 548) {
      const local = frame - 337;
      const spr = spring({ frame: local, fps, config: { damping: 12, stiffness: 150 } });
      const splitSpr = spring({ frame: local - 55, fps, config: { damping: 12, stiffness: 140 } });
      const processSpr = spring({ frame: local - 135, fps, config: { damping: 12, stiffness: 150 } });
      const exit = interpolate(local, [198, 211], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

      const tokenNodes = [
        { label: "TOK_01", sub: "ID: 1842", y: 55, color: "#00F0FF" },
        { label: "TOK_02", sub: "ID: 9041", y: 135, color: "#FFE500" },
        { label: "TOK_03", sub: "ID: 3319", y: 215, color: "#A855F7" },
      ];

      return (
        <div
          style={{
            opacity: spr * exit,
            transform: `translateY(${(1 - spr) * 30 + floatY}px) scale(${0.9 + spr * 0.1})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 980,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, marginBottom: 6, textAlign: "center" }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 19,
                fontWeight: 900,
                letterSpacing: "3px",
                color: "#A855F7",
                ...subStrokeStyle,
              }}
            >
              [ STEP 01 // TOKENIZATION ENGINE ]
            </span>
            <span
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: 46,
                fontWeight: 900,
                letterSpacing: "1.5px",
                color: "#FFFFFF",
                ...strokeStyle,
              }}
            >
              INPUT WORD <span style={{ color: "#00F0FF" }}>➔</span> <span style={{ color: "#FFE500" }}>TOKENS</span> <span style={{ color: "#00F0FF" }}>➔</span> AI MODEL
            </span>
          </div>

          <svg width="960" height="270" viewBox="0 0 960 270" fill="none" style={{ filter: svgDropShadow }}>
            {/* Input Pipe: Word -> Tokenizer */}
            <path d="M 210 135 L 330 135" stroke="#00F0FF" strokeWidth="4.5" />

            {/* Branching Bezier Pipes: Tokenizer -> 3 Token Nodes -> AI Model */}
            {tokenNodes.map((t, i) => (
              <g key={i}>
                <path
                  d={`M 415 135 C 460 135, 470 ${t.y}, 515 ${t.y}`}
                  stroke={t.color}
                  strokeWidth="3.5"
                  style={getTrimPath(splitSpr, 160)}
                />
                <path
                  d={`M 685 ${t.y} C 730 ${t.y}, 745 135, 790 135`}
                  stroke={t.color}
                  strokeWidth="3.5"
                  strokeDasharray="8 6"
                  opacity={processSpr}
                />
              </g>
            ))}

            {/* Node 1: RAW INPUT WORD */}
            <g transform="translate(115, 135)">
              <rect x="-95" y="-52" width="190" height="104" rx="16" fill="rgba(8, 14, 26, 0.94)" stroke="#00F0FF" strokeWidth="3.5" />
              <text x="0" y="-16" textAnchor="middle" fill="#00F0FF" fontFamily="JetBrains Mono" fontSize="13" fontWeight="900">
                USER INPUT
              </text>
              <text x="0" y="18" textAnchor="middle" fill="#FFFFFF" fontFamily="Inter" fontSize="24" fontWeight="900">
                &quot;PROMPT&quot;
              </text>
              <text x="0" y="38" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontFamily="JetBrains Mono" fontSize="11">
                RAW STRING
              </text>
            </g>

            {/* Node 2: TOKENIZER PRISM */}
            <g transform="translate(372, 135)">
              <polygon
                points="0,-56 48,0 0,56 -48,0"
                fill="rgba(24, 12, 40, 0.95)"
                stroke="#A855F7"
                strokeWidth="3.5"
              />
              <circle r="64" stroke="#A855F7" strokeWidth="2" strokeDasharray="8 8" transform={`rotate(${local * 2.5})`} />
              <text x="0" y="5" textAnchor="middle" fill="#FFFFFF" fontFamily="JetBrains Mono" fontSize="13" fontWeight="900">
                SPLIT
              </text>
            </g>

            {/* Node 3A/3B/3C: SPLIT TOKEN NODES */}
            {tokenNodes.map((t, i) => {
              const tSpr = spring({ frame: local - 60 - i * 10, fps, config: { damping: 11, stiffness: 170 } });
              return (
                <g
                  key={i}
                  transform={`translate(600, ${t.y}) scale(${0.6 + tSpr * 0.4})`}
                  opacity={Math.min(1, Math.max(0, tSpr))}
                >
                  <rect x="-85" y="-30" width="170" height="60" rx="12" fill="rgba(8, 14, 26, 0.95)" stroke={t.color} strokeWidth="3" />
                  <text x="0" y="-4" textAnchor="middle" fill={t.color} fontFamily="JetBrains Mono" fontSize="16" fontWeight="900">
                    {t.label}
                  </text>
                  <text x="0" y="18" textAnchor="middle" fill="#FFFFFF" fontFamily="JetBrains Mono" fontSize="13" fontWeight="700">
                    {t.sub}
                  </text>
                </g>
              );
            })}

            {/* Node 4: AI MODEL PROCESSOR */}
            <g transform={`translate(870, 135) scale(${0.85 + processSpr * 0.15})`} opacity={0.35 + processSpr * 0.65}>
              <polygon
                points="0,-68 60,-34 60,34 0,68 -60,34 -60,-34"
                fill="rgba(8, 20, 28, 0.95)"
                stroke="#22C55E"
                strokeWidth="3.5"
              />
              <text x="0" y="-4" textAnchor="middle" fill="#22C55E" fontFamily="Impact" fontSize="25">
                AI MODEL
              </text>
              <text x="0" y="20" textAnchor="middle" fill="#FFFFFF" fontFamily="JetBrains Mono" fontSize="12" fontWeight="900">
                PROCESS
              </text>
            </g>
          </svg>
        </div>
      );
    }

    // =====================================================================
    // SCENE 5: ROLE OF THE MODEL — NEXT WORD PREDICTION (Frames 548 - 716 | 18.26s - 23.86s)
    // Spoken: "The role of the model is simple. It will give you the best next word prediction on the basis of the tokens."
    // AE Node Diagram: [ TOKENS ] ──► [ TRANSFORMER CORE ] ──► Probability Branches (96.8% Winner!)
    // =====================================================================
    if (frame >= 548 && frame < 716) {
      const local = frame - 548;
      const spr = spring({ frame: local, fps, config: { damping: 12, stiffness: 150 } });
      const barProg = interpolate(local, [25, 75], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
      const exit = interpolate(local, [155, 168], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

      const candidates = [
        { label: "BEST NEXT WORD", pct: 96, width: 220, y: 58, color: "#FFE500", active: true },
        { label: "ALT CANDIDATE B", pct: 3, width: 45, y: 138, color: "#00F0FF", active: false },
        { label: "ALT CANDIDATE C", pct: 1, width: 20, y: 214, color: "#64748B", active: false },
      ];

      return (
        <div
          style={{
            opacity: spr * exit,
            transform: `translateY(${(1 - spr) * 30 + floatY}px) scale(${0.9 + spr * 0.1})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 980,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, marginBottom: 6, textAlign: "center" }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 19,
                fontWeight: 900,
                letterSpacing: "3px",
                color: "#00F0FF",
                ...subStrokeStyle,
              }}
            >
              [ CORE LLM OBJECTIVE ]
            </span>
            <span
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: 48,
                fontWeight: 900,
                letterSpacing: "1.5px",
                color: "#FFFFFF",
                ...strokeStyle,
              }}
            >
              BEST <span style={{ color: "#FFE500" }}>NEXT-WORD PREDICTION</span>
            </span>
          </div>

          <svg width="960" height="265" viewBox="0 0 960 265" fill="none" style={{ filter: svgDropShadow }}>
            {/* Input Tokens Node */}
            <g transform="translate(135, 136)">
              <rect x="-105" y="-58" width="210" height="116" rx="16" fill="rgba(8, 14, 26, 0.95)" stroke="#00F0FF" strokeWidth="3.5" />
              <text x="0" y="-22" textAnchor="middle" fill="#00F0FF" fontFamily="JetBrains Mono" fontSize="14" fontWeight="900">
                INPUT BASIS
              </text>
              <text x="0" y="12" textAnchor="middle" fill="#FFFFFF" fontFamily="Impact" fontSize="28" letterSpacing="1">
                [T1] [T2] [T3]
              </text>
              <text x="0" y="38" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontFamily="JetBrains Mono" fontSize="13" fontWeight="700">
                TOKEN SEQUENCE
              </text>
            </g>

            <path d="M 240 136 L 345 136" stroke="#00F0FF" strokeWidth="4.5" />

            {/* Central AI Model Node */}
            <g transform="translate(425, 136)">
              <circle r="68" fill="rgba(12, 16, 32, 0.96)" stroke="#A855F7" strokeWidth="4" />
              <circle r="78" stroke="#00F0FF" strokeWidth="2.5" strokeDasharray="12 8" transform={`rotate(${local * 2.5})`} />
              <text x="0" y="-6" textAnchor="middle" fill="#FFFFFF" fontFamily="Impact" fontSize="26">
                AI MODEL
              </text>
              <text x="0" y="18" textAnchor="middle" fill="#FFE500" fontFamily="JetBrains Mono" fontSize="13" fontWeight="900">
                PREDICTOR
              </text>
            </g>

            {/* Output Probability Branches */}
            {candidates.map((c, i) => (
              <g key={i}>
                <path
                  d={`M 495 136 C 540 136, 550 ${c.y}, 595 ${c.y}`}
                  stroke={c.color}
                  strokeWidth={c.active ? "4" : "2.5"}
                />
                <g transform={`translate(600, ${c.y - 28})`}>
                  <rect
                    x="0"
                    y="0"
                    width="335"
                    height="56"
                    rx="12"
                    fill="rgba(8, 14, 26, 0.95)"
                    stroke={c.color}
                    strokeWidth={c.active ? "3.5" : "2"}
                  />
                  {/* Animated Probability Fill Bar */}
                  <rect
                    x="10"
                    y="34"
                    width={c.width * barProg}
                    height="10"
                    rx="5"
                    fill={c.color}
                  />
                  <text x="14" y="24" fill="#FFFFFF" fontFamily="JetBrains Mono" fontSize="15" fontWeight="900">
                    {c.label}
                  </text>
                  <text x="320" y="26" textAnchor="end" fill={c.color} fontFamily="Impact" fontSize="24">
                    {Math.round(c.pct * barProg)}%
                  </text>
                </g>
              </g>
            ))}
          </svg>
        </div>
      );
    }

    // =====================================================================
    // SCENE 6: CONTEXT "THE SUN RISES" ➔ PREDICT "FROM" (Frames 716 - 1040 | 23.86s - 34.68s)
    // Spoken: "For example, 'the sun rises.' This is your context.
    //          So your AI model will accept these three words as an input and will predict 'from' as the next best word prediction."
    // AE Node Diagram: ["The"] ➔ ["sun"] ➔ ["rises"] (3-Token Context) ──► [ AI MODEL ] ──► ["from"]
    // =====================================================================
    if (frame >= 716 && frame < 1040) {
      const local = frame - 716;
      const spr = spring({ frame: local, fps, config: { damping: 12, stiffness: 150 } });
      // At frame 853 (local = 137), he says "So your AI model will accept these three words as an input and will predict 'from'"
      const modelSpr = spring({ frame: local - 125, fps, config: { damping: 12, stiffness: 150 } });
      const fromSpr = spring({ frame: local - 210, fps, config: { damping: 10, stiffness: 180 } });
      const exit = interpolate(local, [310, 324], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

      const contextWords = ["The", "sun", "rises"];

      return (
        <div
          style={{
            opacity: spr * exit,
            transform: `translateY(${(1 - spr) * 30 + floatY}px) scale(${0.9 + spr * 0.1})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 980,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, marginBottom: 6, textAlign: "center" }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 19,
                fontWeight: 900,
                letterSpacing: "3px",
                color: "#FFE500",
                ...subStrokeStyle,
              }}
            >
              {local < 130 ? "[ INPUT CONTEXT // 3 TOKENS ]" : "[ PASS #1 // NEXT-WORD PREDICTION ]"}
            </span>
            <span
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: 46,
                fontWeight: 900,
                letterSpacing: "1.5px",
                color: "#FFFFFF",
                ...strokeStyle,
              }}
            >
              &quot;THE SUN RISES&quot; <span style={{ color: "#00F0FF" }}>➔</span>{" "}
              <span style={{ color: "#FFE500" }}>PREDICTS &quot;FROM&quot;</span>
            </span>
          </div>

          <svg width="960" height="265" viewBox="0 0 960 265" fill="none" style={{ filter: svgDropShadow }}>
            {/* Context Grouping Bracket Box */}
            <rect
              x="24"
              y="42"
              width="465"
              height="165"
              rx="20"
              fill="rgba(6, 14, 26, 0.75)"
              stroke="#00F0FF"
              strokeWidth="2.5"
              strokeDasharray="10 6"
            />
            <text x="256" y="72" textAnchor="middle" fill="#00F0FF" fontFamily="JetBrains Mono" fontSize="15" fontWeight="900">
              CONTEXT INPUT (3 WORDS)
            </text>

            {/* 3 Context Word Nodes */}
            {contextWords.map((w, i) => {
              const wSpr = spring({ frame: local - i * 12, fps, config: { damping: 12, stiffness: 170 } });
              const xPos = 104 + i * 150;
              return (
                <g key={i} transform={`translate(${xPos}, 138) scale(${0.6 + wSpr * 0.4})`} opacity={Math.min(1, wSpr)}>
                  <rect x="-62" y="-42" width="124" height="84" rx="14" fill="rgba(10, 18, 34, 0.96)" stroke="#00F0FF" strokeWidth="3.5" />
                  <text x="0" y="-12" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontFamily="JetBrains Mono" fontSize="12" fontWeight="800">
                    TOKEN #{i + 1}
                  </text>
                  <text x="0" y="20" textAnchor="middle" fill="#FFFFFF" fontFamily="Inter" fontSize="26" fontWeight="900">
                    &quot;{w}&quot;
                  </text>
                </g>
              );
            })}

            {/* Conduit into AI Model */}
            <path
              d="M 490 138 L 575 138"
              stroke="#00F0FF"
              strokeWidth="5"
              style={getTrimPath(modelSpr, 90)}
            />

            {/* AI Model Node */}
            <g transform={`translate(645, 138) scale(${0.7 + modelSpr * 0.3})`} opacity={0.25 + modelSpr * 0.75}>
              <polygon
                points="0,-64 56,-32 56,32 0,64 -56,32 -56,-32"
                fill="rgba(14, 12, 32, 0.96)"
                stroke="#A855F7"
                strokeWidth="3.5"
              />
              <circle r="72" stroke="#A855F7" strokeWidth="2" strokeDasharray="10 6" transform={`rotate(${local * 2.5})`} />
              <text x="0" y="-4" textAnchor="middle" fill="#FFFFFF" fontFamily="Impact" fontSize="23">
                AI MODEL
              </text>
              <text x="0" y="18" textAnchor="middle" fill="#00F0FF" fontFamily="JetBrains Mono" fontSize="12" fontWeight="900">
                PASS #1
              </text>
            </g>

            {/* Conduit to Predicted Word "from" */}
            <path
              d="M 710 138 L 775 138"
              stroke="#FFE500"
              strokeWidth="5"
              style={getTrimPath(fromSpr, 70)}
            />

            {/* Predicted Output Token Node: "from" */}
            <g transform={`translate(862, 138) scale(${0.5 + fromSpr * 0.5})`} opacity={Math.min(1, Math.max(0.15, fromSpr))}>
              {fromSpr > 0.1 && (
                <circle
                  r={65 + fromSpr * 25}
                  stroke="#FFE500"
                  strokeWidth={4 * (1 - fromSpr)}
                  opacity={1 - fromSpr}
                />
              )}
              <rect x="-80" y="-54" width="160" height="108" rx="18" fill="rgba(28, 22, 6, 0.96)" stroke="#FFE500" strokeWidth="4" />
              <text x="0" y="-18" textAnchor="middle" fill="#FFE500" fontFamily="JetBrains Mono" fontSize="13" fontWeight="900">
                NEXT BEST WORD
              </text>
              <text x="0" y="20" textAnchor="middle" fill="#FFFFFF" fontFamily="Impact" fontSize="36" letterSpacing="1">
                &quot;from&quot;
              </text>
              <text x="0" y="42" textAnchor="middle" fill="#22C55E" fontFamily="JetBrains Mono" fontSize="12" fontWeight="900">
                PROB: 98.4%
              </text>
            </g>
          </svg>
        </div>
      );
    }

    // =====================================================================
    // SCENE 7: 4-WORD LOOP ➔ PREDICT "EAST" (Frames 1040 - 1324 | 34.68s - 44.14s)
    // Spoken: "Now this entire four-word context will again go to the AI model and then the next word is predicted,
    //          that is 'East', and the sentence turns out to be 'The sun rises from East.'"
    // AE Node Diagram: 4-Token Context ["The"]["sun"]["rises"]["from"] ──► [ AI MODEL ] ──► ["East"]
    // =====================================================================
    if (frame >= 1040 && frame < 1324) {
      const local = frame - 1040;
      const spr = spring({ frame: local, fps, config: { damping: 12, stiffness: 150 } });
      const eastSpr = spring({ frame: local - 135, fps, config: { damping: 10, stiffness: 180 } });
      const bannerSpr = spring({ frame: local - 205, fps, config: { damping: 12, stiffness: 160 } });
      const exit = interpolate(local, [270, 284], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

      const fourWords = [
        { w: "The", c: "#00F0FF" },
        { w: "sun", c: "#00F0FF" },
        { w: "rises", c: "#00F0FF" },
        { w: "from", c: "#FFE500" },
      ];

      return (
        <div
          style={{
            opacity: spr * exit,
            transform: `translateY(${(1 - spr) * 30 + floatY}px) scale(${0.9 + spr * 0.1})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 980,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, marginBottom: 6, textAlign: "center" }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 19,
                fontWeight: 900,
                letterSpacing: "3px",
                color: "#22C55E",
                ...subStrokeStyle,
              }}
            >
              [ PASS #2 // 4-WORD CONTEXT LOOP ]
            </span>
            <span
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: 46,
                fontWeight: 900,
                letterSpacing: "1.5px",
                color: "#FFFFFF",
                ...strokeStyle,
              }}
            >
              4-WORD CONTEXT <span style={{ color: "#00F0FF" }}>➔</span>{" "}
              <span style={{ color: "#22C55E" }}>PREDICTS &quot;EAST&quot;</span>
            </span>
          </div>

          <svg width="960" height="275" viewBox="0 0 960 275" fill="none" style={{ filter: svgDropShadow }}>
            {/* Autoregressive Overhead Loop Arc */}
            <path
              d="M 480 42 C 480 10, 650 10, 655 58"
              stroke="#FFE500"
              strokeWidth="3"
              strokeDasharray="8 6"
            />
            <text x="565" y="22" textAnchor="middle" fill="#FFE500" fontFamily="JetBrains Mono" fontSize="13" fontWeight="900">
              ↻ APPENDED TO CONTEXT
            </text>

            {/* 4-Word Context Container */}
            <rect
              x="18"
              y="44"
              width="520"
              height="130"
              rx="18"
              fill="rgba(6, 14, 26, 0.8)"
              stroke="#00F0FF"
              strokeWidth="2.5"
              strokeDasharray="10 6"
            />

            {fourWords.map((item, i) => {
              const xPos = 88 + i * 125;
              return (
                <g key={i} transform={`translate(${xPos}, 110)`}>
                  <rect x="-54" y="-38" width="108" height="76" rx="12" fill="rgba(10, 18, 34, 0.96)" stroke={item.c} strokeWidth="3" />
                  <text x="0" y="-10" textAnchor="middle" fill={item.c} fontFamily="JetBrains Mono" fontSize="11" fontWeight="900">
                    TOK #{i + 1}
                  </text>
                  <text x="0" y="18" textAnchor="middle" fill="#FFFFFF" fontFamily="Inter" fontSize="22" fontWeight="900">
                    &quot;{item.w}&quot;
                  </text>
                </g>
              );
            })}

            <path d="M 538 110 L 598 110" stroke="#00F0FF" strokeWidth="4.5" />

            {/* AI Model Node */}
            <g transform="translate(658, 110)">
              <polygon
                points="0,-58 52,-29 52,29 0,58 -52,29 -52,-29"
                fill="rgba(14, 12, 32, 0.96)"
                stroke="#A855F7"
                strokeWidth="3.5"
              />
              <text x="0" y="-2" textAnchor="middle" fill="#FFFFFF" fontFamily="Impact" fontSize="22">
                AI MODEL
              </text>
              <text x="0" y="18" textAnchor="middle" fill="#22C55E" fontFamily="JetBrains Mono" fontSize="12" fontWeight="900">
                PASS #2
              </text>
            </g>

            <path
              d="M 712 110 L 775 110"
              stroke="#22C55E"
              strokeWidth="5"
              style={getTrimPath(eastSpr, 65)}
            />

            {/* Predicted Token #5: "East" */}
            <g transform={`translate(862, 110) scale(${0.5 + eastSpr * 0.5})`} opacity={Math.min(1, Math.max(0.15, eastSpr))}>
              <rect x="-80" y="-48" width="160" height="96" rx="16" fill="rgba(6, 26, 18, 0.96)" stroke="#22C55E" strokeWidth="4" />
              <text x="0" y="-14" textAnchor="middle" fill="#22C55E" fontFamily="JetBrains Mono" fontSize="13" fontWeight="900">
                TOKEN #5
              </text>
              <text x="0" y="22" textAnchor="middle" fill="#FFFFFF" fontFamily="Impact" fontSize="36" letterSpacing="1">
                &quot;East&quot;
              </text>
            </g>

            {/* Bottom Completed Sentence Output Strip */}
            <g transform={`translate(480, 228) scale(${0.85 + bannerSpr * 0.15})`} opacity={Math.min(1, Math.max(0, bannerSpr))}>
              <rect x="-420" y="-32" width="840" height="64" rx="14" fill="rgba(8, 22, 18, 0.96)" stroke="#FFE500" strokeWidth="3" />
              <text x="0" y="10" textAnchor="middle" fill="#FFFFFF" fontFamily="Inter" fontSize="28" fontWeight="900">
                OUTPUT: <tspan fill="#00F0FF">&quot;The sun rises</tspan> <tspan fill="#FFE500">from</tspan> <tspan fill="#22C55E">East.&quot;</tspan>
              </text>
            </g>
          </svg>
        </div>
      );
    }

    // =====================================================================
    // SCENE 8: ITERATIVE COMPUTATION REPEATS (Frames 1324 - 1483 | 44.14s - 49.42s)
    // Spoken: "Now this entire computation repeats itself with the previous data and the AI model just predicts the next word."
    // AE Node Diagram: Autoregressive Infinity/Cycle Engine
    // =====================================================================
    if (frame >= 1324 && frame < 1483) {
      const local = frame - 1324;
      const spr = spring({ frame: local, fps, config: { damping: 12, stiffness: 155 } });
      const exit = interpolate(local, [145, 159], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
      const cycleNum = Math.min(8, 1 + Math.floor(local / 22));

      return (
        <div
          style={{
            opacity: spr * exit,
            transform: `translateY(${(1 - spr) * 30 + floatY}px) scale(${0.9 + spr * 0.1})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 980,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, marginBottom: 6, textAlign: "center" }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 19,
                fontWeight: 900,
                letterSpacing: "3px",
                color: "#00F0FF",
                ...subStrokeStyle,
              }}
            >
              [ AUTOREGRESSIVE CYCLE ]
            </span>
            <span
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: 48,
                fontWeight: 900,
                letterSpacing: "1.5px",
                color: "#FFFFFF",
                ...strokeStyle,
              }}
            >
              COMPUTATION <span style={{ color: "#FFE500" }}>REPEATS</span> PER TOKEN
            </span>
          </div>

          <svg width="960" height="260" viewBox="0 0 960 260" fill="none" style={{ filter: svgDropShadow }}>
            {/* Feedback Loop Top & Bottom Bezier Arcs */}
            <path d="M 280 95 C 400 20, 560 20, 680 95" stroke="#00F0FF" strokeWidth="4" strokeDasharray="12 8" />
            <path d="M 680 165 C 560 240, 400 240, 280 165" stroke="#FFE500" strokeWidth="4" strokeDasharray="12 8" />

            {/* Left Node: PREVIOUS DATA (N TOKENS) */}
            <g transform="translate(185, 130)">
              <rect x="-140" y="-56" width="280" height="112" rx="18" fill="rgba(8, 16, 30, 0.95)" stroke="#00F0FF" strokeWidth="3.5" />
              <text x="0" y="-18" textAnchor="middle" fill="#00F0FF" fontFamily="JetBrains Mono" fontSize="14" fontWeight="900">
                PREVIOUS CONTEXT DATA
              </text>
              <text x="0" y="16" textAnchor="middle" fill="#FFFFFF" fontFamily="Impact" fontSize="30">
                [ N TOKENS ]
              </text>
              <text x="0" y="40" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontFamily="JetBrains Mono" fontSize="12" fontWeight="700">
                FEEDS BACK INTO MODEL
              </text>
            </g>

            {/* Center Rotating Cycle Core */}
            <g transform="translate(480, 130)">
              <circle r="66" fill="rgba(14, 12, 32, 0.96)" stroke="#A855F7" strokeWidth="4" />
              <circle
                r="78"
                stroke="#FFE500"
                strokeWidth="3"
                strokeDasharray="16 10"
                transform={`rotate(${local * 4})`}
              />
              <text x="0" y="-8" textAnchor="middle" fill="#FFE500" fontFamily="JetBrains Mono" fontSize="14" fontWeight="900">
                LOOP PASS
              </text>
              <text x="0" y="24" textAnchor="middle" fill="#FFFFFF" fontFamily="Impact" fontSize="34">
                #{cycleNum}
              </text>
            </g>

            {/* Right Node: PREDICT NEXT WORD (N + 1) */}
            <g transform="translate(775, 130)">
              <rect x="-140" y="-56" width="280" height="112" rx="18" fill="rgba(24, 18, 8, 0.95)" stroke="#FFE500" strokeWidth="3.5" />
              <text x="0" y="-18" textAnchor="middle" fill="#FFE500" fontFamily="JetBrains Mono" fontSize="14" fontWeight="900">
                MODEL OUTPUT
              </text>
              <text x="0" y="16" textAnchor="middle" fill="#FFFFFF" fontFamily="Impact" fontSize="30">
                NEXT WORD (N+1)
              </text>
              <text x="0" y="40" textAnchor="middle" fill="#22C55E" fontFamily="JetBrains Mono" fontSize="12" fontWeight="900">
                APPEND &amp; REPEAT ↻
              </text>
            </g>
          </svg>
        </div>
      );
    }

    // =====================================================================
    // SCENE 9: HUGE CONTEXT BOTTLENECK (Frames 1483 - 1771 | 49.42s - 59.04s)
    // Spoken: "Now imagine there is a huge context of a sentence. Now every time, giving this entire context
    //          to the AI model will become difficult for the AI to understand and to work with it."
    // AE Node Diagram: Massive Grid of Context Tokens Jamming the AI Compute Funnel (OVERLOAD WARNING)
    // =====================================================================
    if (frame >= 1483 && frame < 1771) {
      const local = frame - 1483;
      const spr = spring({ frame: local, fps, config: { damping: 12, stiffness: 150 } });
      const loadPct = Math.round(interpolate(local, [10, 140], [45, 99], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
      const warnPulse = 0.65 + Math.sin(local / 3.5) * 0.35;
      const exit = interpolate(local, [274, 288], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

      return (
        <div
          style={{
            opacity: spr * exit,
            transform: `translateY(${(1 - spr) * 30 + floatY}px) scale(${0.9 + spr * 0.1})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 980,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, marginBottom: 6, textAlign: "center" }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 19,
                fontWeight: 900,
                letterSpacing: "3px",
                color: "#EF4444",
                ...subStrokeStyle,
              }}
            >
              [ ⚠ COMPUTE BOTTLENECK ]
            </span>
            <span
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: 48,
                fontWeight: 900,
                letterSpacing: "1.5px",
                color: "#FFFFFF",
                ...strokeStyle,
              }}
            >
              HUGE CONTEXT <span style={{ color: "#EF4444" }}>OVERLOADS MODEL</span>
            </span>
          </div>

          <svg width="960" height="265" viewBox="0 0 960 265" fill="none" style={{ filter: svgDropShadow }}>
            {/* Left Node: Massive 12-Token Matrix Block */}
            <rect x="28" y="32" width="430" height="200" rx="18" fill="rgba(26, 8, 12, 0.94)" stroke="#EF4444" strokeWidth="3.5" />
            <text x="243" y="60" textAnchor="middle" fill="#EF4444" fontFamily="JetBrains Mono" fontSize="15" fontWeight="900">
              HUGE SENTENCE CONTEXT (1,000+ TOKENS)
            </text>

            {Array.from({ length: 12 }).map((_, idx) => {
              const row = Math.floor(idx / 4);
              const col = idx % 4;
              const bx = 52 + col * 98;
              const by = 76 + row * 46;
              return (
                <g key={idx} transform={`translate(${bx}, ${by})`}>
                  <rect width="86" height="36" rx="8" fill="rgba(239, 68, 68, 0.18)" stroke="#F87171" strokeWidth="2" />
                  <text x="43" y="23" textAnchor="middle" fill="#FFFFFF" fontFamily="JetBrains Mono" fontSize="13" fontWeight="800">
                    TOK_{idx + 1}
                  </text>
                </g>
              );
            })}

            {/* Jammed Funnel Lines into AI Model */}
            <path d="M 458 65 L 615 125" stroke="#EF4444" strokeWidth="3.5" strokeDasharray="8 6" />
            <path d="M 458 132 L 615 132" stroke="#EF4444" strokeWidth="4.5" />
            <path d="M 458 200 L 615 140" stroke="#EF4444" strokeWidth="3.5" strokeDasharray="8 6" />

            {/* Overloaded AI Model Node */}
            <g transform="translate(745, 132)">
              <circle r="92" stroke="#EF4444" strokeWidth="3" opacity={warnPulse} strokeDasharray="14 8" />
              <rect x="-135" y="-68" width="270" height="136" rx="20" fill="rgba(28, 8, 12, 0.96)" stroke="#EF4444" strokeWidth="4" />
              <text x="0" y="-28" textAnchor="middle" fill="#EF4444" fontFamily="JetBrains Mono" fontSize="15" fontWeight="900">
                ⚠ RE-PROCESSING ALL
              </text>
              <text x="0" y="10" textAnchor="middle" fill="#FFFFFF" fontFamily="Impact" fontSize="34">
                LOAD: {loadPct}%
              </text>
              <text x="0" y="42" textAnchor="middle" fill="#FFE500" fontFamily="JetBrains Mono" fontSize="14" fontWeight="900">
                HIGH LATENCY // SLOW
              </text>
            </g>
          </svg>
        </div>
      );
    }

    // =====================================================================
    // SCENE 10: KV CACHING SOLUTION — FASTEST RESPONSE (Frames 1771 - 2018 | 59.04s - 67.28s)
    // Spoken: "So what we do is we perform caching. Yes. So because of caching, the prediction of the next word
    //          becomes easier for the AI model and you get the fastest response."
    // AE Node Diagram: [ KV CACHE LOCKED MEMORY ] ──( INSTANT LOOKUP )──► [ AI MODEL ] ──► [ FASTEST RESPONSE ]
    // =====================================================================
    if (frame >= 1771 && frame < 2018) {
      const local = frame - 1771;
      const spr = spring({ frame: local, fps, config: { damping: 12, stiffness: 155 } });
      const fastSpr = spring({ frame: local - 95, fps, config: { damping: 11, stiffness: 175 } });
      const exit = interpolate(local, [234, 247], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

      return (
        <div
          style={{
            opacity: spr * exit,
            transform: `translateY(${(1 - spr) * 30 + floatY}px) scale(${0.9 + spr * 0.1})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 980,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, marginBottom: 6, textAlign: "center" }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 19,
                fontWeight: 900,
                letterSpacing: "3px",
                color: "#22C55E",
                ...subStrokeStyle,
              }}
            >
              [ ⚡ KV CACHE OPTIMIZATION ]
            </span>
            <span
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: 48,
                fontWeight: 900,
                letterSpacing: "1.5px",
                color: "#FFFFFF",
                ...strokeStyle,
              }}
            >
              KV CACHING <span style={{ color: "#00F0FF" }}>➔</span>{" "}
              <span style={{ color: "#22C55E" }}>FASTEST RESPONSE</span>
            </span>
          </div>

          <svg width="960" height="265" viewBox="0 0 960 265" fill="none" style={{ filter: svgDropShadow }}>
            {/* Node 1: KV CACHE MEMORY BANK */}
            <g transform="translate(185, 132)">
              <rect x="-150" y="-68" width="300" height="136" rx="18" fill="rgba(6, 24, 18, 0.96)" stroke="#22C55E" strokeWidth="4" />
              <text x="0" y="-32" textAnchor="middle" fill="#22C55E" fontFamily="JetBrains Mono" fontSize="15" fontWeight="900">
                ⚡ KV CACHE MEMORY
              </text>
              <text x="0" y="6" textAnchor="middle" fill="#FFFFFF" fontFamily="Impact" fontSize="30" letterSpacing="1">
                PAST TOKENS SAVED
              </text>
              <text x="0" y="38" textAnchor="middle" fill="#00F0FF" fontFamily="JetBrains Mono" fontSize="13" fontWeight="900">
                [ NO RE-COMPUTATION ]
              </text>
            </g>

            {/* High-Speed Conduit */}
            <path d="M 335 132 L 425 132" stroke="#22C55E" strokeWidth="5" />

            {/* Node 2: AI MODEL (LIGHTWEIGHT COMPUTE) */}
            <g transform="translate(505, 132)">
              <polygon
                points="0,-66 58,-33 58,33 0,66 -58,33 -58,-33"
                fill="rgba(8, 18, 30, 0.96)"
                stroke="#00F0FF"
                strokeWidth="3.5"
              />
              <circle r="76" stroke="#22C55E" strokeWidth="2.5" strokeDasharray="12 8" transform={`rotate(${local * 4})`} />
              <text x="0" y="-4" textAnchor="middle" fill="#FFFFFF" fontFamily="Impact" fontSize="24">
                AI MODEL
              </text>
              <text x="0" y="20" textAnchor="middle" fill="#22C55E" fontFamily="JetBrains Mono" fontSize="13" fontWeight="900">
                EASY PREDICT
              </text>
            </g>

            <path
              d="M 575 132 L 650 132"
              stroke="#FFE500"
              strokeWidth="5"
              style={getTrimPath(fastSpr, 80)}
            />

            {/* Node 3: FASTEST RESPONSE OUTPUT */}
            <g transform={`translate(795, 132) scale(${0.65 + fastSpr * 0.35})`} opacity={0.3 + fastSpr * 0.7}>
              <rect x="-140" y="-68" width="280" height="136" rx="18" fill="rgba(26, 22, 6, 0.96)" stroke="#FFE500" strokeWidth="4" />
              <text x="0" y="-28" textAnchor="middle" fill="#FFE500" fontFamily="JetBrains Mono" fontSize="15" fontWeight="900">
                ⚡ TURBO OUTPUT
              </text>
              <text x="0" y="10" textAnchor="middle" fill="#FFFFFF" fontFamily="Impact" fontSize="32" letterSpacing="1">
                FASTEST RESPONSE
              </text>
              <text x="0" y="42" textAnchor="middle" fill="#22C55E" fontFamily="JetBrains Mono" fontSize="14" fontWeight="900">
                10X SPEED BOOST
              </text>
            </g>
          </svg>
        </div>
      );
    }

    // =====================================================================
    // SCENE 11: THE ANSWER PART 1 — FRIEND TEXT SENT AT ONCE (Frames 2018 - 2210 | 67.28s - 73.66s)
    // Spoken: "Now the answer to the question: that whenever your friend sends you a text,
    //          it is actually sent as a single message and it appears to you at once."
    // AE Node Diagram: [ FRIEND DEVICE ] ══► [ SINGLE HTTP PAYLOAD ] ══► [ APPEARS AT ONCE ]
    // =====================================================================
    if (frame >= 2018 && frame < 2210) {
      const local = frame - 2018;
      const spr = spring({ frame: local, fps, config: { damping: 12, stiffness: 155 } });
      const packetSpr = spring({ frame: local - 30, fps, config: { damping: 12, stiffness: 165 } });
      const exit = interpolate(local, [178, 192], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

      return (
        <div
          style={{
            opacity: spr * exit,
            transform: `translateY(${(1 - spr) * 30 + floatY}px) scale(${0.9 + spr * 0.1})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 980,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, marginBottom: 6, textAlign: "center" }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 19,
                fontWeight: 900,
                letterSpacing: "3px",
                color: "#FFE500",
                ...subStrokeStyle,
              }}
            >
              [ FINAL ANSWER // PART 01 ]
            </span>
            <span
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: 48,
                fontWeight: 900,
                letterSpacing: "1.5px",
                color: "#FFFFFF",
                ...strokeStyle,
              }}
            >
              FRIEND TEXT = <span style={{ color: "#FFE500" }}>SINGLE MESSAGE AT ONCE</span>
            </span>
          </div>

          <svg width="960" height="260" viewBox="0 0 960 260" fill="none" style={{ filter: svgDropShadow }}>
            <path d="M 235 130 L 725 130" stroke="#FFE500" strokeWidth="5" />

            {/* Left Node: Friend */}
            <g transform="translate(130, 130)">
              <rect x="-100" y="-56" width="200" height="112" rx="16" fill="rgba(8, 14, 26, 0.95)" stroke="#00F0FF" strokeWidth="3.5" />
              <text x="0" y="-14" textAnchor="middle" fill="#00F0FF" fontFamily="JetBrains Mono" fontSize="14" fontWeight="900">
                FRIEND SENDS
              </text>
              <text x="0" y="20" textAnchor="middle" fill="#FFFFFF" fontFamily="Impact" fontSize="28">
                FULL TEXT
              </text>
            </g>

            {/* Center Node: Single Complete Packet */}
            <g transform={`translate(480, 130) scale(${0.75 + packetSpr * 0.25})`}>
              <rect x="-155" y="-62" width="310" height="124" rx="18" fill="rgba(26, 20, 6, 0.96)" stroke="#FFE500" strokeWidth="4" />
              <text x="0" y="-22" textAnchor="middle" fill="#FFE500" fontFamily="JetBrains Mono" fontSize="14" fontWeight="900">
                PROTOCOL // SINGLE PAYLOAD
              </text>
              <text x="0" y="14" textAnchor="middle" fill="#FFFFFF" fontFamily="Impact" fontSize="30" letterSpacing="1">
                1 COMPLETE PACKET
              </text>
              <text x="0" y="40" textAnchor="middle" fill="#22C55E" fontFamily="JetBrains Mono" fontSize="13" fontWeight="900">
                NO STREAMING NEEDED
              </text>
            </g>

            {/* Right Node: Appears At Once */}
            <g transform="translate(830, 130)">
              <rect x="-100" y="-56" width="200" height="112" rx="16" fill="rgba(6, 24, 18, 0.95)" stroke="#22C55E" strokeWidth="3.5" />
              <text x="0" y="-14" textAnchor="middle" fill="#22C55E" fontFamily="JetBrains Mono" fontSize="14" fontWeight="900">
                YOUR SCREEN
              </text>
              <text x="0" y="20" textAnchor="middle" fill="#FFFFFF" fontFamily="Impact" fontSize="26">
                ALL AT ONCE
              </text>
            </g>
          </svg>
        </div>
      );
    }

    // =====================================================================
    // SCENE 12: THE ANSWER PART 2 — LLM SERVER-TRIGGERED EVENTS (SSE) (Frames 2210 - 2564 | 73.66s - 85.48s)
    // Spoken: "But if we talk about the LLMs, the LLM will give us the response on the basis of the server-triggered events,
    //          and every time a token is predicted, that event is triggered, and then you see the data coming up in a chunk by chunk format."
    // AE Node Diagram: [ LLM TOKEN PREDICTED ] ──► [ ⚡ SERVER-TRIGGERED EVENT (SSE) ] ──► [ CHUNK-BY-CHUNK UI ]
    // =====================================================================
    if (frame >= 2210 && frame < 2564) {
      const local = frame - 2210;
      const spr = spring({ frame: local, fps, config: { damping: 12, stiffness: 150 } });
      const exit = interpolate(local, [340, 354], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

      // Periodic SSE Event Trigger pulse every 35 frames
      const eventCycle = local % 35;
      const eventNum = Math.min(5, 1 + Math.floor(local / 45));
      const streamWords = ["The", "sun", "rises", "from", "East"].slice(0, eventNum);

      return (
        <div
          style={{
            opacity: spr * exit,
            transform: `translateY(${(1 - spr) * 30 + floatY}px) scale(${0.9 + spr * 0.1})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 980,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, marginBottom: 6, textAlign: "center" }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 18,
                fontWeight: 900,
                letterSpacing: "3px",
                color: "#00F0FF",
                ...subStrokeStyle,
              }}
            >
              [ SSE ARCHITECTURE ]
            </span>
            <span
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: 46,
                fontWeight: 900,
                letterSpacing: "1.2px",
                color: "#FFFFFF",
                ...strokeStyle,
              }}
            >
              <span style={{ color: "#00F0FF" }}>SERVER-TRIGGERED EVENTS</span> ➔ CHUNK STREAM
            </span>
          </div>

          <svg width="960" height="270" viewBox="0 0 960 270" fill="none" style={{ filter: svgDropShadow }}>
            {/* Conduit 1: LLM -> SSE Trigger */}
            <path d="M 255 125 L 345 125" stroke="#00F0FF" strokeWidth="5" />
            {/* Conduit 2: SSE Trigger -> Live Chunk Stream */}
            <path d="M 605 125 L 685 125" stroke="#FFE500" strokeWidth="5" />

            {/* Node 1: LLM TOKEN PREDICTOR */}
            <g transform="translate(140, 125)">
              <rect x="-115" y="-64" width="230" height="128" rx="18" fill="rgba(8, 16, 30, 0.96)" stroke="#00F0FF" strokeWidth="3.5" />
              <text x="0" y="-26" textAnchor="middle" fill="#00F0FF" fontFamily="JetBrains Mono" fontSize="13" fontWeight="900">
                STAGE 01 // LLM CORE
              </text>
              <text x="0" y="8" textAnchor="middle" fill="#FFFFFF" fontFamily="Impact" fontSize="28">
                TOKEN #{eventNum}
              </text>
              <text x="0" y="38" textAnchor="middle" fill="#22C55E" fontFamily="JetBrains Mono" fontSize="13" fontWeight="900">
                PREDICTED ✓
              </text>
            </g>

            {/* Node 2: SERVER-TRIGGERED EVENT (SSE) HUB */}
            <g transform="translate(475, 125)">
              {/* Expanding SSE Event Shockwave */}
              <circle
                r={65 + eventCycle * 1.4}
                stroke="#FFE500"
                strokeWidth="3"
                opacity={interpolate(eventCycle, [0, 34], [0.9, 0])}
              />
              <rect x="-130" y="-68" width="260" height="136" rx="20" fill="rgba(24, 18, 6, 0.96)" stroke="#FFE500" strokeWidth="4" />
              <text x="0" y="-28" textAnchor="middle" fill="#FFE500" fontFamily="JetBrains Mono" fontSize="13" fontWeight="900">
                STAGE 02 // SSE PUSH
              </text>
              <text x="0" y="8" textAnchor="middle" fill="#FFFFFF" fontFamily="Impact" fontSize="27" letterSpacing="1">
                SERVER EVENT
              </text>
              <text x="0" y="38" textAnchor="middle" fill="#00F0FF" fontFamily="JetBrains Mono" fontSize="14" fontWeight="900">
                ⚡ EVENT TRIGGERED #{eventNum}
              </text>
            </g>

            {/* Node 3: CHUNK-BY-CHUNK CLIENT STREAM */}
            <g transform="translate(815, 125)">
              <rect x="-125" y="-68" width="250" height="136" rx="18" fill="rgba(6, 22, 20, 0.96)" stroke="#22C55E" strokeWidth="3.5" />
              <text x="0" y="-28" textAnchor="middle" fill="#22C55E" fontFamily="JetBrains Mono" fontSize="13" fontWeight="900">
                STAGE 03 // LIVE UI
              </text>
              <text x="0" y="6" textAnchor="middle" fill="#FFFFFF" fontFamily="Impact" fontSize="26">
                CHUNK BY CHUNK
              </text>
              <text x="0" y="38" textAnchor="middle" fill="#FFE500" fontFamily="Inter" fontSize="18" fontWeight="900">
                &quot;{streamWords.join(" ")}...&quot;
              </text>
            </g>
          </svg>
        </div>
      );
    }

    // =====================================================================
    // SCENE 13: OUTRO — SHARE & FOLLOW CODE BAITHAK (Frames 2564 - 2883 | 85.48s - 96.10s)
    // Spoken: "So this is the answer to your question, and make sure you share it with your friends
    //          so that they also know what is actually happening in the AI model.
    //          And to get more such amazing videos, make sure you follow our channel Code Baithak."
    // =====================================================================
    if (frame >= 2564) {
      const local = frame - 2564;
      const spr = spring({ frame: local, fps, config: { damping: 12, stiffness: 150 } });

      return (
        <div
          style={{
            opacity: spr,
            transform: `translateY(${(1 - spr) * 30 + floatY}px) scale(${0.9 + spr * 0.1})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 980,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, marginBottom: 6, textAlign: "center" }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 19,
                fontWeight: 900,
                letterSpacing: "3px",
                color: "#00F0FF",
                ...subStrokeStyle,
              }}
            >
              [ ✦ AI ARCHITECTURE EXPLAINED ✦ ]
            </span>
            <span
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: 48,
                fontWeight: 900,
                letterSpacing: "1.5px",
                color: "#FFE500",
                ...strokeStyle,
              }}
            >
              SHARE &amp; FOLLOW <span style={{ color: "#FFFFFF" }}>CODE BAITHAK</span>
            </span>
          </div>

          <svg width="960" height="250" viewBox="0 0 960 250" fill="none" style={{ filter: svgDropShadow }}>
            <path d="M 290 125 L 385 125" stroke="#00F0FF" strokeWidth="4.5" strokeDasharray="10 6" />
            <path d="M 575 125 L 670 125" stroke="#22C55E" strokeWidth="4.5" strokeDasharray="10 6" />

            {/* Left Node: SHARE WITH FRIENDS */}
            <g transform="translate(165, 125)">
              <rect x="-125" y="-56" width="250" height="112" rx="18" fill="rgba(8, 16, 30, 0.95)" stroke="#00F0FF" strokeWidth="3.5" />
              <text x="0" y="-14" textAnchor="middle" fill="#00F0FF" fontFamily="JetBrains Mono" fontSize="14" fontWeight="900">
                SPREAD THE KNOWLEDGE
              </text>
              <text x="0" y="20" textAnchor="middle" fill="#FFFFFF" fontFamily="Impact" fontSize="28" letterSpacing="1">
                SHARE THIS REEL
              </text>
            </g>

            {/* Center Node: CODE BAITHAK HUB */}
            <g transform={`translate(480, 125) scale(${pulse})`}>
              <circle r="74" fill="rgba(8, 18, 36, 0.96)" stroke="#0095F6" strokeWidth="4.5" />
              <circle
                r="86"
                stroke="#FFE500"
                strokeWidth="3"
                strokeDasharray="16 10"
                transform={`rotate(${local * 2.5})`}
              />
              <text x="0" y="-6" textAnchor="middle" fill="#FFE500" fontFamily="Impact" fontSize="25" letterSpacing="1">
                CODE BAITHAK
              </text>
              <text x="0" y="22" textAnchor="middle" fill="#00F0FF" fontFamily="JetBrains Mono" fontSize="14" fontWeight="900">
                @code_baithak
              </text>
            </g>

            {/* Right Node: FOLLOW FOR MORE */}
            <g transform="translate(795, 125)">
              <rect x="-125" y="-56" width="250" height="112" rx="18" fill="rgba(6, 24, 18, 0.95)" stroke="#22C55E" strokeWidth="3.5" />
              <text x="0" y="-14" textAnchor="middle" fill="#22C55E" fontFamily="JetBrains Mono" fontSize="14" fontWeight="900">
                DAILY AI BREAKDOWNS
              </text>
              <text x="0" y="20" textAnchor="middle" fill="#FFFFFF" fontFamily="Impact" fontSize="28" letterSpacing="1">
                FOLLOW CHANNEL +
              </text>
            </g>
          </svg>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 1150, // Footer-Up Explainer Zone: above captions (bottom: 145px) and below hands/face
        left: 0,
        width: 1080,
        height: 440,
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
