import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  Img,
  staticFile,
} from "remotion";

interface FollowCardProps {
  startFrame: number;
  pageName?: string;
  handle?: string;
  avatarFileName?: string;
}

const heavyTextShadow = `
  0 4px 20px rgba(0, 0, 0, 0.96),
  0 8px 34px rgba(0, 0, 0, 0.92),
  0 2px 6px rgba(0, 0, 0, 0.95)
`;

const strokeStyle: React.CSSProperties = {
  WebkitTextStroke: "2.2px rgba(0, 0, 0, 0.95)",
  paintOrder: "stroke fill",
  textShadow: heavyTextShadow,
};

export const FollowCard: React.FC<FollowCardProps> = ({
  startFrame = 792,
  pageName = "Code_baithak",
  handle = "@code_baithak",
  avatarFileName = "avatar.jpg",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = frame - startFrame;

  if (localFrame < 0) return null;

  const enterSpring = spring({
    frame: localFrame,
    fps,
    config: { damping: 12, stiffness: 125 },
  });

  const translateY = interpolate(enterSpring, [0, 1], [36, 0]);
  const opacity = interpolate(enterSpring, [0, 1], [0, 1]);
  const scale = interpolate(enterSpring, [0, 1], [0.84, 1]);
  const floatY = Math.sin(frame / 6.5) * 4;

  const pulseSpring = spring({
    frame: Math.max(0, localFrame - 10),
    fps,
    config: { damping: 10, stiffness: 160 },
  });
  const buttonScale = interpolate(pulseSpring, [0, 1], [0.85, 1.04]);

  return (
    <div
      style={{
        position: "absolute",
        top: 215,
        left: 68,
        zIndex: 60,
        opacity,
        transform: `translateY(${translateY + floatY}px) scale(${scale})`,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 16,
        pointerEvents: "none",
      }}
    >
      {/* Kinetic Typography Header Above Enlarged Follow Card */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 21,
            fontWeight: 900,
            letterSpacing: "3.5px",
            color: "#00F0FF",
            textTransform: "uppercase",
            ...strokeStyle,
          }}
        >
          ✦ DAILY TECH &amp; AI BREAKDOWNS ✦
        </span>
        <span
          style={{
            fontFamily: "'Impact', 'Arial Black', sans-serif",
            fontSize: 64,
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: "1.5px",
            lineHeight: 1.04,
            ...strokeStyle,
          }}
        >
          FOLLOW <span style={{ color: "#FACC15" }}>CODE BAITHAK</span>
        </span>
      </div>

      {/* Enlarged Liquid-Glass Follow Card in the Left Motion-Graphics Zone */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          backgroundColor: "rgba(10, 15, 26, 0.95)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          padding: "20px 36px 20px 20px",
          borderRadius: 72,
          border: "2.5px solid rgba(0, 240, 255, 0.45)",
          boxShadow:
            "0 28px 68px rgba(0, 0, 0, 0.85), 0 0 45px rgba(0, 149, 246, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.35)",
        }}
      >
        {/* Enlarged Avatar with Instagram Gradient Ring (96px) */}
        <div
          style={{
            position: "relative",
            width: 96,
            height: 96,
            borderRadius: "50%",
            background:
              "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
            padding: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 26px rgba(220, 39, 67, 0.55)",
            flexShrink: 0,
          }}
        >
          <Img
            src={staticFile(avatarFileName)}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid #0a0f1a",
            }}
          />
        </div>

        {/* Enlarged Page Name + Handle */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                color: "#FFFFFF",
                fontSize: 34,
                fontWeight: 900,
                letterSpacing: "-0.01em",
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
            >
              {pageName}
            </span>
            {/* Verified Badge (30px) */}
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
                fill="#0095F6"
              />
              <path
                d="M10.0002 15.1702L6.83018 12.0002L5.41016 13.4102L10.0002 18.0002L19.0002 9.00016L17.5902 7.59016L10.0002 15.1702Z"
                fill="white"
              />
            </svg>
          </div>
          <span
            style={{
              color: "#00F0FF",
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: "0.02em",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {handle}
          </span>
        </div>

        {/* Divider */}
        <div
          style={{
            width: 2,
            height: 54,
            backgroundColor: "rgba(255, 255, 255, 0.24)",
            margin: "0 8px",
          }}
        />

        {/* Enlarged Follow Button */}
        <div
          style={{
            background: "linear-gradient(135deg, #0095F6 0%, #0066CC 100%)",
            color: "#FFFFFF",
            fontSize: 24,
            fontWeight: 900,
            padding: "16px 32px",
            borderRadius: 40,
            boxShadow: "0 8px 28px rgba(0, 149, 246, 0.6)",
            display: "flex",
            alignItems: "center",
            gap: 8,
            letterSpacing: "0.02em",
            fontFamily: "'Inter', system-ui, sans-serif",
            transform: `scale(${buttonScale})`,
          }}
        >
          <span style={{ fontSize: 26, lineHeight: 1, fontWeight: 900 }}>+</span>{" "}
          Follow
        </div>
      </div>
    </div>
  );
};
