import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "./types";

interface HeaderProps {
  currentStep: number;
  totalSteps?: number;
  tag: string;
  title: string;
  subtitle: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentStep,
  totalSteps = 6,
  tag,
  title,
  subtitle,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const translateY = interpolate(frame, [0, 15], [-20, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 48,
        left: 56,
        right: 56,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        zIndex: 50,
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "4px 12px",
            backgroundColor: "rgba(56, 189, 248, 0.12)",
            border: "1px solid rgba(56, 189, 248, 0.3)",
            borderRadius: 6,
            marginBottom: 10,
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              backgroundColor: theme.accentCyan,
              boxShadow: `0 0 10px ${theme.accentCyan}`,
            }}
          />
          <span
            style={{
              color: theme.accentCyan,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            {tag}
          </span>
        </div>

        <h1
          style={{
            fontSize: 34,
            fontWeight: 800,
            color: theme.textPrimary,
            letterSpacing: "-0.02em",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontSize: 16,
            color: theme.textSecondary,
            margin: "6px 0 0 0",
            fontWeight: 400,
          }}
        >
          {subtitle}
        </p>
      </div>

      {/* Step Indicators */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
        <div style={{ display: "flex", gap: 6 }}>
          {Array.from({ length: totalSteps }).map((_, idx) => {
            const stepNum = idx + 1;
            const isActive = stepNum === currentStep;
            const isCompleted = stepNum < currentStep;

            return (
              <div
                key={stepNum}
                style={{
                  width: isActive ? 34 : 26,
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: isActive
                    ? theme.accentCyan
                    : isCompleted
                    ? theme.accentGreen
                    : "rgba(71, 85, 105, 0.5)",
                  boxShadow: isActive ? `0 0 8px ${theme.accentCyan}` : "none",
                  transition: "all 0.3s ease",
                }}
              />
            );
          })}
        </div>

        <span
          style={{
            color: theme.textMuted,
            fontSize: 12,
            fontFamily: "monospace",
            letterSpacing: "0.1em",
          }}
        >
          PHASE 0{currentStep} / 0{totalSteps}
        </span>
      </div>
    </div>
  );
};
