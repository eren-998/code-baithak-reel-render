import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

/* =========================================================================
   AFTER EFFECTS AMBIENT MOTION ESSENCE (ZERO WEB UI BOXES)
   - Cut-Point Vector Shockwaves & Light Pulses at every topic transition
   - Top-Left AE Viewfinder Reticle & Step Progress Telemetry (pure vector + stroked text)
   - Floating Vector Crosshairs (+) & Geometric Motion Accents around chest zone
   ========================================================================= */

const TOPIC_CUT_FRAMES = [0, 63, 116, 183, 231, 310, 418, 513, 591, 674, 772];

interface TopicTelemetry {
  start: number;
  end: number;
  code: string;
  label: string;
  color: string;
}

const TELEMETRY_STEPS: TopicTelemetry[] = [
  { start: 0, end: 116, code: "HOOK // 00", label: "WEBSITE LAUNCH PROTOCOL", color: "#EF4444" },
  { start: 116, end: 183, code: "NODE // 01", label: "GOOGLE LIVE SEARCH", color: "#00F0FF" },
  { start: 183, end: 231, code: "NODE // 02", label: "CRAWLER INDEXING", color: "#22C55E" },
  { start: 231, end: 310, code: "NODE // 03", label: "CONSOLE PAGES REPORT", color: "#FFE500" },
  { start: 310, end: 418, code: "NODE // 04", label: "VERITAS FREE AUDIT", color: "#10B981" },
  { start: 418, end: 513, code: "NODE // 05", label: "5-STAR TRUST SIGNAL", color: "#FFE500" },
  { start: 513, end: 591, code: "NODE // 06", label: "PARTNER BACKLINKS", color: "#A855F7" },
  { start: 591, end: 674, code: "NODE // 07", label: "BRAND GOOGLE ALERTS", color: "#FFE500" },
  { start: 674, end: 772, code: "NODE // 08", label: "PRODUCT BLOG ENGINE", color: "#00F0FF" },
  { start: 772, end: 875, code: "CTA // 09", label: "@CODE_BAITHAK", color: "#0095F6" },
];

const heavyShadow = "0 3px 14px rgba(0,0,0,0.98), 0 0 22px rgba(0,0,0,0.95), 0 1px 4px rgba(0,0,0,0.95)";

export const AEMotionEssence: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const activeStep =
    TELEMETRY_STEPS.find((s) => frame >= s.start && frame < s.end) ||
    TELEMETRY_STEPS[TELEMETRY_STEPS.length - 1];

  // Check if we are within 10 frames after any topic cut for AE shockwave burst
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

  // Overall reel progress (0 -> 1)
  const reelProgress = interpolate(frame, [0, 869], [0, 1], {
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
      {/* 1. Top-Left After Effects Viewfinder Reticle & Telemetry Callout (Zero Box) */}
      <div
        style={{
          position: "absolute",
          top: 96,
          left: 44,
          display: "flex",
          alignItems: "center",
          gap: 16,
          transform: `translateX(${(1 - stepSpr) * -25}px)`,
          opacity: Math.min(1, stepSpr * 1.5),
        }}
      >
        {/* Rotating Vector Reticle Dial */}
        <svg
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
          style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.95))" }}
        >
          <circle cx="34" cy="34" r="28" fill="rgba(8, 12, 22, 0.78)" stroke="#000000" strokeWidth="2" />
          <g style={{ transform: `rotate(${frame * 2.4}deg)`, transformOrigin: "34px 34px" }}>
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
              fontSize: 18,
              fontWeight: 900,
              letterSpacing: "3px",
              color: activeStep.color,
              WebkitTextStroke: "1.6px rgba(0,0,0,0.96)",
              paintOrder: "stroke fill",
              textShadow: heavyShadow,
            }}
          >
            {activeStep.code}
          </span>
          <span
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 22,
              fontWeight: 900,
              letterSpacing: "1px",
              color: "#FFFFFF",
              WebkitTextStroke: "1.8px rgba(0,0,0,0.96)",
              paintOrder: "stroke fill",
              textShadow: heavyShadow,
            }}
          >
            {activeStep.label}
          </span>
          {/* Animated Technical Underline Vector */}
          <svg width="240" height="10" viewBox="0 0 240 10" fill="none" style={{ marginTop: 2 }}>
            <path
              d="M0 4 H190 L202 9 H238"
              stroke={activeStep.color}
              strokeWidth="3"
              strokeLinecap="round"
              style={{
                filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.95))",
                strokeDasharray: 250,
                strokeDashoffset: interpolate(stepSpr, [0, 1], [250, 0]),
              }}
            />
          </svg>
        </div>
      </div>

      {/* 2. Floating AE Vector Crosshairs & Geometric Essence around Chest Motion Zone */}
      <svg
        width="1080"
        height="1920"
        viewBox="0 0 1080 1920"
        fill="none"
        style={{ position: "absolute", inset: 0 }}
      >
        {/* Left Floating Vector Crosshair */}
        <g
          transform={`translate(62, ${1300 + drift1}) rotate(${frame * 1.5})`}
          style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.9))" }}
        >
          <line x1="-14" y1="0" x2="14" y2="0" stroke={activeStep.color} strokeWidth="3.5" strokeLinecap="round" />
          <line x1="0" y1="-14" x2="0" y2="14" stroke={activeStep.color} strokeWidth="3.5" strokeLinecap="round" />
        </g>

        {/* Right Floating Vector Crosshair */}
        <g
          transform={`translate(1018, ${1350 + drift2}) rotate(${-frame * 1.8})`}
          style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.9))" }}
        >
          <line x1="-14" y1="0" x2="14" y2="0" stroke="#FFE500" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="0" y1="-14" x2="0" y2="14" stroke="#FFE500" strokeWidth="3.5" strokeLinecap="round" />
        </g>

        {/* Left & Right Corner Viewfinder Brackets in Chest Zone */}
        <path
          d="M 44 1240 V 1215 H 72"
          stroke="rgba(255,255,255,0.65)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M 1036 1240 V 1215 H 1008"
          stroke="rgba(255,255,255,0.65)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M 44 1450 V 1475 H 72"
          stroke="rgba(255,255,255,0.65)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M 1036 1450 V 1475 H 1008"
          stroke="rgba(255,255,255,0.65)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* 3. Cut-Point After Effects Radial Vector Shockwave on Topic Transitions */}
        {cutDelta >= 0 && (
          <g transform="translate(540, 1340)">
            <circle
              cx="0"
              cy="0"
              r={interpolate(cutDelta, [0, 11], [40, 460])}
              stroke={activeStep.color}
              strokeWidth={interpolate(cutDelta, [0, 11], [8, 1])}
              opacity={interpolate(cutDelta, [0, 11], [0.85, 0])}
            />
            <circle
              cx="0"
              cy="0"
              r={interpolate(cutDelta, [0, 11], [20, 320])}
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
