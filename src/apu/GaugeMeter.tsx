import React from "react";
import { theme } from "./types";

interface GaugeMeterProps {
  label: string;
  value: number; // Current value (e.g. 0 to 100 for RPM, 0 to 800 for EGT)
  unit: string;
  min?: number;
  max?: number;
  warnThreshold?: number;
  dangerThreshold?: number;
  size?: number;
}

export const GaugeMeter: React.FC<GaugeMeterProps> = ({
  label,
  value,
  unit,
  min = 0,
  max = 100,
  warnThreshold = 80,
  dangerThreshold = 95,
  size = 140,
}) => {
  const percentage = Math.min(1, Math.max(0, (value - min) / (max - min)));
  // Arc angles: from -140 deg to +140 deg (total 280 deg)
  const startAngle = -140;
  const totalAngle = 280;
  const currentAngle = startAngle + percentage * totalAngle;

  // Arc path math
  const radius = size * 0.38;
  const center = size / 2;

  const polarToCartesian = (centerX: number, centerY: number, r: number, angleInDegrees: number) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + r * Math.cos(angleInRadians),
      y: centerY + r * Math.sin(angleInRadians),
    };
  };

  const describeArc = (x: number, y: number, r: number, start: number, end: number) => {
    const startPoint = polarToCartesian(x, y, r, end);
    const endPoint = polarToCartesian(x, y, r, start);
    const largeArcFlag = end - start <= 180 ? "0" : "1";
    return ["M", startPoint.x, startPoint.y, "A", r, r, 0, largeArcFlag, 0, endPoint.x, endPoint.y].join(" ");
  };

  const bgArc = describeArc(center, center, radius, startAngle, startAngle + totalAngle);
  const activeArc = describeArc(center, center, radius, startAngle, currentAngle);

  // Status color
  let statusColor = theme.accentCyan;
  if (value >= dangerThreshold) {
    statusColor = theme.accentRed;
  } else if (value >= warnThreshold) {
    statusColor = theme.accentAmber;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgba(15, 23, 42, 0.9)",
        border: `1px solid ${theme.cardBorder}`,
        borderRadius: 12,
        padding: "12px 16px",
        width: size + 20,
        boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
      }}
    >
      <div style={{ position: "relative", width: size, height: size * 0.85 }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {/* Background track */}
          <path
            d={bgArc}
            fill="none"
            stroke="rgba(51, 65, 85, 0.6)"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* Active progress track */}
          {percentage > 0.01 && (
            <path
              d={activeArc}
              fill="none"
              stroke={statusColor}
              strokeWidth="8"
              strokeLinecap="round"
              style={{
                filter: `drop-shadow(0 0 6px ${statusColor})`,
              }}
            />
          )}

          {/* Center Hub */}
          <circle cx={center} cy={center} r={6} fill="#CBD5E1" />

          {/* Needle Pointer */}
          <line
            x1={center}
            y1={center}
            x2={polarToCartesian(center, center, radius * 0.95, currentAngle).x}
            y2={polarToCartesian(center, center, radius * 0.95, currentAngle).y}
            stroke="#F8FAFC"
            strokeWidth="3"
            strokeLinecap="round"
            style={{
              filter: "drop-shadow(0 0 4px rgba(255,255,255,0.6))",
            }}
          />
        </svg>

        {/* Digital Readout */}
        <div
          style={{
            position: "absolute",
            bottom: 4,
            left: 0,
            right: 0,
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: 20,
              fontWeight: 800,
              color: statusColor,
              fontFamily: "monospace",
              letterSpacing: "-0.02em",
            }}
          >
            {Math.round(value)}
          </span>
          <span
            style={{
              fontSize: 11,
              color: theme.textSecondary,
              marginLeft: 4,
              fontFamily: "monospace",
            }}
          >
            {unit}
          </span>
        </div>
      </div>

      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: theme.textSecondary,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          fontFamily: "monospace",
          marginTop: 2,
        }}
      >
        {label}
      </div>
    </div>
  );
};
