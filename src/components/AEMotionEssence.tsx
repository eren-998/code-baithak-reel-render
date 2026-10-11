import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

/* =========================================================================
   AFTER EFFECTS AMBIENT MOTION ESSENCE (EXPLAINER TELEMETRY & HUD)
   - Cut-Point Vector Shockwaves & Light Pulses at every explainer stage transition
   - Top-Left AE Viewfinder Reticle & Node Architecture Telemetry
   - Floating Vector Crosshairs (+) & Viewfinder Brackets around Footer-Up Explainer Zone
   ========================================================================= */

const TOPIC_CUT_FRAMES = [
  0, 101, 233, 337, 488, 548, 716, 853, 1040, 1324, 1483, 1771, 2018, 2210, 2564, 2730,
];

interface TopicTelemetry {
  start: number;
  end: number;
  code: string;
  label: string;
  color: string;
}

const TELEMETRY_STEPS: TopicTelemetry[] = [
  { start: 0, end: 101, code: "HOOK // 01", label: "P2P COMPLETE PAYLOAD", color: "#22C55E" },
  { start: 101, end: 233, code: "HOOK // 02", label: "AI CHUNK STREAMING", color: "#00F0FF" },
  { start: 233, end: 337, code: "QUERY // 03", label: "ARCHITECTURE DIFF", color: "#FFE500" },
  { start: 337, end: 548, code: "NODE // 04", label: "TOKENIZER PIPELINE", color: "#A855F7" },
  { start: 548, end: 716, code: "NODE // 05", label: "NEXT-WORD PROBABILITY", color: "#00F0FF" },
  { start: 716, end: 1040, code: "PASS // 06", label: "CONTEXT ➔ PREDICT 'FROM'", color: "#FFE500" },
  { start: 1040, end: 1324, code: "LOOP // 07", label: "4-TOKEN ➔ PREDICT 'EAST'", color: "#22C55E" },
  { start: 1324, end: 1483, code: "ITER // 08", label: "AUTOREGRESSIVE LOOP", color: "#00F0FF" },
  { start: 1483, end: 1771, code: "WARN // 09", label: "HUGE CONTEXT BOTTLENECK", color: "#EF4444" },
  { start: 1771, end: 2018, code: "FAST // 10", label: "KV CACHE ACCELERATOR", color: "#10B981" },
  { start: 2018, end: 2210, code: "REST // 11", label: "SINGLE PACKET TRANSFER", color: "#FFE500" },
  { start: 2210, end: 2564, code: "SSE // 12", label: "SERVER-TRIGGERED EVENTS", color: "#00F0FF" },
  { start: 2564, end: 2890, code: "CTA // 13", label: "@CODE_BAITHAK", color: "#0095F6" },
];

const heavyShadow =
  "0 3px 14px rgba(0,0,0,0.98), 0 0 22px rgba(0,0,0,0.95), 0 1px 4px rgba(0,0,0,0.95)";

export const AEMotionEssence: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const activeStep =
    TELEMETRY_STEPS.find((s) => frame >= s.start && frame < s.end) ||
    TELEMETRY_STEPS[TELEMETRY_STEPS.length - 1];

  // Check if we are within 12 frames after any topic cut for AE shockwave burst
  const activeCutFrame = TOPIC_CUT_FRAMES.find(
    (c) => frame >= c && frame < c + 12 && c > 0
  );
  const cutDelta = activeCutFrame !== undefined ? frame - activeCutFrame : -1;

  const stepLocal = frame - activeStep.start;
  const stepSpr = spring({
    frame: stepLocal,
    fps,
    config: { damping: 13, stiffness: 170 },
  });

  // Overall reel progress (0 -> 1) across 2883 frames
  const reelProgress = interpolate(frame, [0, 2883], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const drift1 = Math.sin(frame / 8) * 10;
  const drift2 = Math.cos(frame / 6.5) * 12;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 46,
        overflow: "hidden",
      }}
    >
      {/* 1. Top-Left After Effects Viewfinder Reticle & Telemetry Callout */}
      <div
        style={{
          position: "absolute",
          top: 90,
          left: 42,
          display: "flex",
          alignItems: "center",
          gap: 16,
          transform: `translateX(${(1 - stepSpr) * -25}px)`,
          opacity: Math.min(1, stepSpr * 1.5),
        }}
      >
        {/* Rotating Vector Reticle Dial */}
        <svg
          width="66"
          height="66"
          viewBox="0 0 68 68"
          fill="none"
          style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.95))" }}
        >
          <circle
            cx="34"
            cy="34"
            r="28"
            fill="rgba(6, 10, 20, 0.82)"
            stroke="#000000"
            strokeWidth="2"
          />
          <g
            style={{
              transform: `rotate(${frame * 2.2}deg)`,
              transformOrigin: "34px 34px",
            }}
          >
            <circle
              cx="34"
              cy="34"
              r="24"
              stroke={activeStep.color}
              strokeWidth="3"
              strokeDasharray="12 8"
            />
          </g>
          {/* Progress Arc */}
          <circle
            cx="34"
            cy="34"
            r="17"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeDasharray={107}
            strokeDashoffset={107 * (1 - reelProgress)}
            transform="rotate(-90 34 34)"
            strokeLinecap="round"
          />
          <circle cx="34" cy="34" r="5" fill={activeStep.color} />
        </svg>

        {/* Technical Callout Leader Line + Stroked Telemetry Text */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 17,
              fontWeight: 900,
              letterSpacing: "3px",
              color: activeStep.color,
              WebkitTextStroke: "1.5px rgba(0,0,0,0.96)",
              paintOrder: "stroke fill",
              textShadow: heavyShadow,
            }}
          >
            {activeStep.code}
          </span>
          <span
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 21,
              fontWeight: 900,
              letterSpacing: "0.8px",
              color: "#FFFFFF",
              WebkitTextStroke: "1.8px rgba(0,0,0,0.96)",
              paintOrder: "stroke fill",
              textShadow: heavyShadow,
            }}
          >
            {activeStep.label}
          </span>
          {/* Animated Technical Underline Vector */}
          <svg
            width="250"
            height="10"
            viewBox="0 0 250 10"
            fill="none"
            style={{ marginTop: 2 }}
          >
            <path
              d="M0 4 H198 L210 9 H248"
              stroke={activeStep.color}
              strokeWidth="3"
              strokeLinecap="round"
              style={{
                filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.95))",
                strokeDasharray: 260,
                strokeDashoffset: interpolate(stepSpr, [0, 1], [260, 0]),
              }}
            />
          </svg>
        </div>
      </div>

      {/* 2. Floating AE Vector Crosshairs & Viewfinder Framing around Footer-Up Explainer Zone */}
      <svg
        width="1080"
        height="1920"
        viewBox="0 0 1080 1920"
        fill="none"
        style={{ position: "absolute", inset: 0 }}
      >
        {/* Subtle Technical Blueprint Grid Lines in Footer-Up Zone (Y: 1140 to 1590) */}
        <line
          x1="44"
          y1="1145"
          x2="1036"
          y2="1145"
          stroke={activeStep.color}
          strokeWidth="1"
          strokeDasharray="6 10"
          opacity="0.28"
        />
        <line
          x1="44"
          y1="1595"
          x2="1036"
          y2="1595"
          stroke={activeStep.color}
          strokeWidth="1"
          strokeDasharray="6 10"
          opacity="0.28"
        />

        {/* Left Floating Vector Crosshair */}
        <g
          transform={`translate(46, ${1360 + drift1}) rotate(${frame * 1.5})`}
          style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.9))" }}
        >
          <line
            x1="-12"
            y1="0"
            x2="12"
            y2="0"
            stroke={activeStep.color}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="-12"
            x2="0"
            y2="12"
            stroke={activeStep.color}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>

        {/* Right Floating Vector Crosshair */}
        <g
          transform={`translate(1034, ${1380 + drift2}) rotate(${-frame * 1.8})`}
          style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.9))" }}
        >
          <line
            x1="-12"
            y1="0"
            x2="12"
            y2="0"
            stroke="#FFE500"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="-12"
            x2="0"
            y2="12"
            stroke="#FFE500"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>

        {/* Corner Viewfinder Brackets Framing Footer-Up Explainer Zone */}
        <path
          d="M 36 1175 V 1145 H 68"
          stroke="rgba(255,255,255,0.65)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M 1044 1175 V 1145 H 1012"
          stroke="rgba(255,255,255,0.65)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M 36 1565 V 1595 H 68"
          stroke="rgba(255,255,255,0.65)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M 1044 1565 V 1595 H 1012"
          stroke="rgba(255,255,255,0.65)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* 3. Cut-Point After Effects Radial Vector Shockwave on Topic Transitions */}
        {cutDelta >= 0 && (
          <g transform="translate(540, 1370)">
            <circle
              cx="0"
              cy="0"
              r={interpolate(cutDelta, [0, 11], [40, 480])}
              stroke={activeStep.color}
              strokeWidth={interpolate(cutDelta, [0, 11], [8, 1])}
              opacity={interpolate(cutDelta, [0, 11], [0.85, 0])}
            />
            <circle
              cx="0"
              cy="0"
              r={interpolate(cutDelta, [0, 11], [20, 340])}
              stroke="#FFFFFF"
              strokeWidth={interpolate(cutDelta, [0, 11], [5, 0.5])}
              strokeDasharray="18 14"
              opacity={interpolate(cutDelta, [0, 11], [0.75, 0])}
            />
          </g>
        )}
      </svg>
    </div>
  );
};
