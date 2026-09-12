import React from "react";
import { useCurrentFrame } from "remotion";
import { theme } from "./types";

interface TurbineGraphicProps {
  highlightStage?: "intake" | "compressor" | "combustor" | "turbine" | "exhaust" | "all";
  rpmFactor?: number; // 0 to 1
  showLabels?: boolean;
  scale?: number;
}

export const TurbineGraphic: React.FC<TurbineGraphicProps> = ({
  highlightStage = "all",
  rpmFactor = 1,
  showLabels = true,
  scale = 1,
}) => {
  const frame = useCurrentFrame();

  // Rotation angles for compressor and turbine blades driven by frame and RPM
  const rotationAngle = (frame * 12 * rpmFactor) % 360;
  const flamePulse = 0.85 + 0.15 * Math.sin(frame * 0.25);

  const isHighlighted = (stage: string) => {
    return highlightStage === "all" || highlightStage === stage;
  };

  return (
    <div
      style={{
        position: "relative",
        width: 820 * scale,
        height: 380 * scale,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        viewBox="0 0 820 380"
        width={820 * scale}
        height={380 * scale}
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="casingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="50%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>

          <linearGradient id="flameGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>

          <linearGradient id="intakeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.4)" />
            <stop offset="100%" stopColor="rgba(14, 165, 233, 0.1)" />
          </linearGradient>

          <filter id="glowCyan" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="glowOrange" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. Outer APU Containment Nacelle / Casing */}
        <path
          d="M 60,110 L 220,110 L 320,80 L 540,80 L 640,110 L 760,120 L 760,260 L 640,270 L 540,300 L 320,300 L 220,270 L 60,270 Z"
          fill="#0B132B"
          stroke={theme.cardBorder}
          strokeWidth="3"
          strokeDasharray="6 4"
        />

        {/* 2. Central Drive Shaft linking Compressor to Turbine & Gearbox */}
        <rect
          x="120"
          y="184"
          width="540"
          height="12"
          rx="6"
          fill="#94A3B8"
          stroke="#CBD5E1"
          strokeWidth="1.5"
        />

        {/* 3. AIR INTAKE DUCT (Left) */}
        <g opacity={isHighlighted("intake") ? 1 : 0.25} style={{ transition: "opacity 0.3s" }}>
          <path
            d="M 50,120 C 100,120 140,140 180,160 L 180,220 C 140,240 100,260 50,260 Z"
            fill="url(#intakeGrad)"
            stroke={theme.accentCyan}
            strokeWidth="2"
          />
          {/* Incoming Air Arrows */}
          <path
            d="M 20,150 L 130,170 M 20,190 L 130,190 M 20,230 L 130,210"
            stroke={theme.accentCyan}
            strokeWidth="2.5"
            strokeDasharray="8 6"
            strokeDashoffset={-frame * 3}
          />
        </g>

        {/* 4. COMPRESSOR SECTION (Centrifugal Impeller & Diffuser) */}
        <g
          opacity={isHighlighted("compressor") ? 1 : 0.25}
          style={{ transition: "opacity 0.3s" }}
        >
          {/* Diffuser Housing */}
          <ellipse
            cx="240"
            cy="190"
            rx="45"
            ry="75"
            fill="rgba(14, 165, 233, 0.2)"
            stroke={theme.accentCyan}
            strokeWidth="2"
          />
          {/* Rotating Impeller Blades */}
          <g transform={`translate(240, 190) rotate(${rotationAngle})`}>
            {[-60, -30, 0, 30, 60, 90, 120, 150, 180, 210, 240, 270].map((deg) => (
              <line
                key={deg}
                x1="0"
                y1="0"
                x2={Math.cos((deg * Math.PI) / 180) * 55}
                y2={Math.sin((deg * Math.PI) / 180) * 55}
                stroke={theme.accentCyan}
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            ))}
            <circle cx="0" cy="0" r="14" fill="#0284C7" stroke="#BAE6FD" strokeWidth="2" />
          </g>
        </g>

        {/* 5. COMBUSTION CHAMBER (Annular Reverse-Flow) */}
        <g
          opacity={isHighlighted("combustor") ? 1 : 0.25}
          style={{ transition: "opacity 0.3s" }}
        >
          {/* Upper Flame Chamber */}
          <path
            d="M 330,95 C 410,95 470,110 500,140 C 470,155 410,145 330,135 Z"
            fill="url(#flameGrad)"
            opacity={flamePulse}
            filter="url(#glowOrange)"
          />
          {/* Lower Flame Chamber */}
          <path
            d="M 330,285 C 410,285 470,270 500,240 C 470,225 410,235 330,245 Z"
            fill="url(#flameGrad)"
            opacity={flamePulse}
            filter="url(#glowOrange)"
          />

          {/* Fuel Injectors */}
          <circle cx="340" cy="115" r="5" fill="#F8FAFC" />
          <line x1="320" y1="115" x2="340" y2="115" stroke="#F59E0B" strokeWidth="3" />
          <circle cx="340" cy="265" r="5" fill="#F8FAFC" />
          <line x1="320" y1="265" x2="340" y2="265" stroke="#F59E0B" strokeWidth="3" />

          {/* Flame Spark particles */}
          <circle cx="420" cy="120" r="3" fill="#FEF08A" opacity={flamePulse} />
          <circle cx="450" cy="130" r="4" fill="#FEF08A" opacity={flamePulse * 0.9} />
          <circle cx="420" cy="260" r="3" fill="#FEF08A" opacity={flamePulse} />
          <circle cx="450" cy="250" r="4" fill="#FEF08A" opacity={flamePulse * 0.9} />
        </g>

        {/* 6. TURBINE SECTION (High Pressure Power Turbine) */}
        <g opacity={isHighlighted("turbine") ? 1 : 0.25} style={{ transition: "opacity 0.3s" }}>
          {/* Turbine Stator & Rotor Disc */}
          <ellipse
            cx="550"
            cy="190"
            rx="35"
            ry="70"
            fill="rgba(249, 115, 22, 0.2)"
            stroke={theme.accentOrange}
            strokeWidth="2"
          />
          {/* Rotating Turbine Blades */}
          <g transform={`translate(550, 190) rotate(${-rotationAngle})`}>
            {[-45, 0, 45, 90, 135, 180, 225, 270].map((deg) => (
              <line
                key={deg}
                x1="0"
                y1="0"
                x2={Math.cos((deg * Math.PI) / 180) * 50}
                y2={Math.sin((deg * Math.PI) / 180) * 50}
                stroke={theme.accentOrange}
                strokeWidth="4"
                strokeLinecap="round"
              />
            ))}
            <circle cx="0" cy="0" r="14" fill="#EA580C" stroke="#FED7AA" strokeWidth="2" />
          </g>
        </g>

        {/* 7. EXHAUST DUCT (Hot Gas Exit) */}
        <g opacity={isHighlighted("exhaust") ? 1 : 0.25} style={{ transition: "opacity 0.3s" }}>
          <path
            d="M 600,150 L 760,135 L 760,245 L 600,230 Z"
            fill="rgba(239, 68, 68, 0.15)"
            stroke={theme.accentRed}
            strokeWidth="2"
          />
          {/* Exhaust Streamlines */}
          <path
            d="M 620,170 L 780,160 M 620,190 L 790,190 M 620,210 L 780,220"
            stroke={theme.accentRed}
            strokeWidth="2.5"
            strokeDasharray="8 6"
            strokeDashoffset={-frame * 4}
          />
        </g>

        {/* 8. ACCESSORY GEARBOX & MECHANICAL COUPLING (Driven by shaft) */}
        <g opacity={highlightStage === "all" ? 1 : 0.35}>
          {/* Gearbox Box at front */}
          <rect
            x="80"
            y="290"
            width="170"
            height="70"
            rx="8"
            fill="#0F172A"
            stroke="#475569"
            strokeWidth="2"
          />
          <text
            x="165"
            y="320"
            fill={theme.textPrimary}
            fontSize="12"
            fontWeight="bold"
            textAnchor="middle"
            fontFamily="monospace"
          >
            ACCESSORY GEARBOX
          </text>
          <text
            x="165"
            y="342"
            fill={theme.textSecondary}
            fontSize="10"
            textAnchor="middle"
            fontFamily="monospace"
          >
            GEN + STARTER + PUMPS
          </text>
          {/* Connecting bevel gear rod */}
          <line x1="165" y1="190" x2="165" y2="290" stroke="#94A3B8" strokeWidth="4" />
        </g>

        {/* Callout Labels (Optional) */}
        {showLabels && (
          <g fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600">
            {/* Air Intake */}
            <text x="110" y="85" fill={theme.accentCyan} textAnchor="middle">
              1. AIR INTAKE
            </text>
            <line x1="110" y1="92" x2="110" y2="135" stroke={theme.accentCyan} strokeWidth="1.5" />

            {/* Compressor */}
            <text x="240" y="60" fill={theme.accentCyan} textAnchor="middle">
              2. COMPRESSOR
            </text>
            <line x1="240" y1="68" x2="240" y2="110" stroke={theme.accentCyan} strokeWidth="1.5" />

            {/* Combustor */}
            <text x="415" y="45" fill={theme.accentAmber} textAnchor="middle">
              3. COMBUSTOR (1,100°C)
            </text>
            <line x1="415" y1="52" x2="415" y2="92" stroke={theme.accentAmber} strokeWidth="1.5" />

            {/* Turbine */}
            <text x="550" y="60" fill={theme.accentOrange} textAnchor="middle">
              4. POWER TURBINE
            </text>
            <line x1="550" y1="68" x2="550" y2="115" stroke={theme.accentOrange} strokeWidth="1.5" />

            {/* Exhaust */}
            <text x="700" y="85" fill={theme.accentRed} textAnchor="middle">
              5. EXHAUST
            </text>
            <line x1="700" y1="92" x2="700" y2="130" stroke={theme.accentRed} strokeWidth="1.5" />
          </g>
        )}
      </svg>
    </div>
  );
};
