import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

/**
 * Artist-Grade Detailed Flaky Golden Samosa
 */
const DetailedSamosa: React.FC<{
  x: number;
  y: number;
  scale?: number;
  rotate?: number;
}> = ({ x, y, scale = 1, rotate = 0 }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale}) rotate(${rotate})`}>
    <ellipse cx="0" cy="48" rx="46" ry="12" fill="rgba(0,0,0,0.45)" />
    <path
      d="M 0 -52 L 50 36 Q 0 54 -50 36 Z"
      fill="url(#act3SamosaGold)"
      stroke="#FEF08A"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <path
      d="M 0 -52 L -6 42 Q -32 42 -50 36 Z"
      fill="url(#act3SamosaShadow)"
      opacity="0.75"
    />
    <path
      d="M 0 -52 L -6 42 Q 24 44 50 36 Z"
      fill="url(#act3SamosaHighlight)"
      opacity="0.65"
    />
    <path
      d="M 0 -52 Q -4 -5 -6 42"
      stroke="#FEF9C3"
      strokeWidth="2"
      fill="none"
      opacity="0.75"
    />
    <path
      d="M -50 36 Q -34 48 -18 43 Q -2 50 16 43 Q 34 48 50 36"
      fill="none"
      stroke="#92400E"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M -46 37 Q -30 46 -16 42 Q 0 48 16 42 Q 32 46 46 37"
      fill="none"
      stroke="#FDE68A"
      strokeWidth="2"
      strokeDasharray="6 6"
      strokeLinecap="round"
    />
    <circle cx="-18" cy="4" r="3.2" fill="#B45309" opacity="0.65" />
    <circle cx="-26" cy="20" r="2.4" fill="#92400E" opacity="0.6" />
    <circle cx="14" cy="-6" r="3.5" fill="#D97706" opacity="0.65" />
    <circle cx="22" cy="14" r="2.8" fill="#B45309" opacity="0.65" />
    <circle cx="8" cy="22" r="2.2" fill="#15803D" opacity="0.7" />
    <circle cx="-12" cy="-16" r="2" fill="#15803D" opacity="0.7" />
  </g>
);

/**
 * Artist-Grade Speaker Character ("Code Baithak Creator")
 * Curved cap, gold-rimmed aviator sunglasses with lens sheen, shaped beard & mustache,
 * botanical shirt + CB apron, and optional smartphone in hand.
 */
const SpeakerCharacter: React.FC<{
  x: number;
  y: number;
  scale?: number;
  frame: number;
  holdingPhone?: boolean;
  celebrating?: boolean;
}> = ({
  x,
  y,
  scale = 1,
  frame,
  holdingPhone = false,
  celebrating = false,
}) => {
  const breathe = Math.sin(frame / 7) * 3;
  const armWave = Math.sin(frame / 6) * 6;

  return (
    <g transform={`translate(${x}, ${y + breathe}) scale(${scale})`}>
      {/* Drop Shadow */}
      <ellipse cx="0" cy="42" rx="64" ry="14" fill="rgba(0,0,0,0.45)" />

      {/* Neck */}
      <rect x="-14" y="-66" width="28" height="24" rx="10" fill="#D99B66" />

      {/* Torso — Leaf-patterned light shirt */}
      <path
        d="M -62 32 L -54 -42 Q -52 -56 -28 -58 L 28 -58 Q 52 -56 54 -42 L 62 32 Z"
        fill="#E2E8F0"
        stroke="#94A3B8"
        strokeWidth="2.5"
      />
      <path
        d="M -46 -28 Q -38 -36 -34 -24 Q -42 -18 -46 -28 Z"
        fill="#64748B"
        opacity="0.55"
      />
      <path
        d="M 46 -28 Q 38 -36 34 -24 Q 42 -18 46 -28 Z"
        fill="#64748B"
        opacity="0.55"
      />
      {/* Open Shirt Collar */}
      <polygon
        points="-24,-58 -6,-36 -30,-42"
        fill="#CBD5E1"
        stroke="#64748B"
        strokeWidth="1.5"
      />
      <polygon
        points="24,-58 6,-36 30,-42"
        fill="#CBD5E1"
        stroke="#64748B"
        strokeWidth="1.5"
      />

      {/* Code Baithak Apron */}
      <path
        d="M -36 -40 L 36 -40 L 42 32 L -42 32 Z"
        fill="url(#act3ApronGrad)"
        stroke="#FDE047"
        strokeWidth="2"
      />
      <rect
        x="-30"
        y="-16"
        width="60"
        height="22"
        rx="6"
        fill="#7C2D12"
        opacity="0.9"
      />
      <text
        x="0"
        y="-1"
        textAnchor="middle"
        fill="#FEF08A"
        fontSize="10.5"
        fontWeight="900"
        letterSpacing="0.8"
      >
        CODE BAITHAK
      </text>

      {/* Left Articulated Arm */}
      <path
        d={
          celebrating
            ? `M -52 -42 Q -84 -55 ${-72 - armWave} -85`
            : `M -52 -42 Q -78 -10 ${-64 + armWave * 0.4} 18`
        }
        stroke="#E2E8F0"
        strokeWidth="18"
        strokeLinecap="round"
        fill="none"
      />
      <circle
        cx={celebrating ? -72 - armWave : -64 + armWave * 0.4}
        cy={celebrating ? -88 : 20}
        r="9"
        fill="#D99B66"
      />

      {/* Right Articulated Arm (Holding Glowing Smartphone or Celebrating) */}
      <path
        d={
          holdingPhone
            ? `M 52 -42 Q 86 -28 ${92 + armWave * 0.4} -48`
            : celebrating
            ? `M 52 -42 Q 84 -55 ${72 + armWave} -85`
            : `M 52 -42 Q 80 -10 ${66 + armWave} 16`
        }
        stroke="#E2E8F0"
        strokeWidth="18"
        strokeLinecap="round"
        fill="none"
      />
      <circle
        cx={
          holdingPhone
            ? 94 + armWave * 0.4
            : celebrating
            ? 72 + armWave
            : 66 + armWave
        }
        cy={holdingPhone ? -50 : celebrating ? -88 : 18}
        r="9"
        fill="#D99B66"
      />

      {/* Glowing Smartphone in Right Hand */}
      {holdingPhone && (
        <g
          transform={`translate(${
            106 + armWave * 0.4
          }, -68) rotate(-12)`}
        >
          <circle
            cx="0"
            cy="0"
            r="44"
            fill="#38BDF8"
            opacity="0.25"
            filter="url(#act3Glow)"
          />
          <rect
            x="-22"
            y="-38"
            width="44"
            height="76"
            rx="9"
            fill="#0F172A"
            stroke="#38BDF8"
            strokeWidth="3"
          />
          <rect
            x="-17"
            y="-30"
            width="34"
            height="60"
            rx="5"
            fill="#0284C7"
            opacity="0.35"
          />
          <circle cx="0" cy="-4" r="10" fill="#38BDF8" />
          <polygon points="-3,-9 6,-4 -3,1" fill="#FFFFFF" />
          <rect
            x="-11"
            y="14"
            width="22"
            height="5"
            rx="2.5"
            fill="#7DD3FC"
          />
        </g>
      )}

      {/* Ears */}
      <ellipse
        cx="-38"
        cy="-102"
        rx="7"
        ry="12"
        fill="#D99B66"
        stroke="#B47B48"
        strokeWidth="1.5"
      />
      <ellipse
        cx="38"
        cy="-102"
        rx="7"
        ry="12"
        fill="#D99B66"
        stroke="#B47B48"
        strokeWidth="1.5"
      />

      {/* Head Base */}
      <path
        d="M -36 -112 Q -36 -148 0 -148 Q 36 -148 36 -112 Q 36 -66 0 -64 Q -36 -66 -36 -112 Z"
        fill="#E0A36E"
        stroke="#B47B48"
        strokeWidth="2"
      />

      {/* Hair Crop Under Cap */}
      <path
        d="M -36 -116 Q -20 -132 0 -130 Q 22 -132 36 -116 L 34 -128 L -34 -128 Z"
        fill="#111827"
      />

      {/* Signature Curved Olive/Khaki Baseball Cap */}
      <path
        d="M -38 -122 Q -36 -166 0 -166 Q 36 -166 38 -122 Z"
        fill="#57534E"
        stroke="#D6D3D1"
        strokeWidth="2"
      />
      <path
        d="M -38 -120 Q 0 -146 38 -120 Q 34 -136 0 -138 Q -34 -136 -38 -120 Z"
        fill="#292524"
        stroke="#F59E0B"
        strokeWidth="2"
      />

      {/* Expressive Eyebrows */}
      <path
        d="M -26 -116 Q -15 -121 -6 -116"
        stroke="#111827"
        strokeWidth="3.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 6 -116 Q 15 -121 26 -116"
        stroke="#111827"
        strokeWidth="3.2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Signature Gold-Rimmed Aviator Sunglasses */}
      <g transform="translate(0, -104)">
        <path
          d="M -32 -6 L -6 -6 Q -4 10 -16 14 Q -30 14 -32 -6 Z"
          fill="url(#act3AviatorLens)"
          stroke="#FACC15"
          strokeWidth="2.5"
        />
        <path
          d="M 6 -6 L 32 -6 Q 30 14 16 14 Q 4 10 6 -6 Z"
          fill="url(#act3AviatorLens)"
          stroke="#FACC15"
          strokeWidth="2.5"
        />
        <line
          x1="-6"
          y1="-5"
          x2="6"
          y2="-5"
          stroke="#FACC15"
          strokeWidth="2.2"
        />
        <line
          x1="-5"
          y1="-1"
          x2="5"
          y2="-1"
          stroke="#FACC15"
          strokeWidth="1.8"
        />
        <line
          x1="-26"
          y1="-2"
          x2="-18"
          y2="8"
          stroke="#FEF08A"
          strokeWidth="2"
          opacity="0.65"
          strokeLinecap="round"
        />
        <line
          x1="12"
          y1="-2"
          x2="20"
          y2="8"
          stroke="#FEF08A"
          strokeWidth="2"
          opacity="0.65"
          strokeLinecap="round"
        />
      </g>

      {/* Nose */}
      <path
        d="M 0 -104 L -3 -90 L 3 -88"
        stroke="#B47B48"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Full Shaped Beard & Mustache */}
      <path
        d="M -35 -98 Q -34 -64 0 -60 Q 34 -64 35 -98 L 28 -96 Q 24 -74 0 -72 Q -24 -74 -28 -96 Z"
        fill="#111827"
      />
      <path
        d="M -18 -82 Q 0 -90 18 -82 Q 12 -76 0 -80 Q -12 -76 -18 -82 Z"
        fill="#111827"
      />
      <path
        d="M -9 -78 Q 0 -72 9 -78"
        stroke="#F8FAFC"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
    </g>
  );
};

export const Act3DatabaseBottleneck: React.FC = () => {
  const rawFrame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Support both global timeline frames (598..968) and Sequence-local frames (0..370)
  const frame = rawFrame < 500 ? rawFrame + 598 : rawFrame;

  const isBeat1 = frame < 720;
  const isBeat2 = frame >= 720 && frame < 898;
  const isBeat3 = frame >= 898;

  // Beat springs
  const beat1Enter = spring({
    frame: Math.max(0, frame - 598),
    fps,
    config: { damping: 14, stiffness: 115 },
  });
  const sqlPop = spring({
    frame: Math.max(0, frame - 605),
    fps,
    config: { damping: 13, stiffness: 120 },
  });
  const nosqlPop = spring({
    frame: Math.max(0, frame - 662),
    fps,
    config: { damping: 13, stiffness: 120 },
  });

  const beat2Enter = spring({
    frame: Math.max(0, frame - 720),
    fps,
    config: { damping: 14, stiffness: 115 },
  });

  const beat3Drop = spring({
    frame: Math.max(0, frame - 898),
    fps,
    config: { damping: 11, stiffness: 155 },
  });

  // Dynamic Titles
  let mainTitle = "SQL OR NoSQL REQUEST";
  let subTitle = "FETCHING DATA FROM DATABASE TOWERS";
  let subColor = "#38BDF8";
  let glowColor = "#0EA5E9";

  if (isBeat3) {
    mainTitle = "ENTER REDIS!";
    subTitle = "THE ULTRA-FAST IN-MEMORY FORTRESS";
    subColor = "#FBBF24";
    glowColor = "#EF4444";
  } else if (isBeat2) {
    mainTitle = "CPU FETCH = TOO SLOW!";
    subTitle = "HEAVY SILICON & DISK I/O BOTTLENECK";
    subColor = "#F87171";
    glowColor = "#F59E0B";
  }

  // Animated variables
  const orb1T = ((frame - 605) % 38) / 38;
  const orb2T = ((frame - 662) % 38) / 38;
  const armSweep = Math.sin(frame * 0.14) * 18;
  const gearRot = (frame - 720) * 1.15;
  const stopwatchRot = (frame - 720) * 2.6;
  const heatWave = Math.sin(frame * 0.22) * 10;
  const shockwaveT = interpolate(frame, [898, 962], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const cubeFloat = Math.sin((frame - 898) * 0.16) * 8;

  // 16 pins per side = 64 gold motherboard socket pins
  const socketPins = Array.from({ length: 16 }, (_, i) => -112 + i * 15);

  return (
    <div
      style={{
        position: "relative",
        width: 1080,
        height: 960,
        overflow: "hidden",
        backgroundColor: "#0B0F19",
        fontFamily: "'Inter', system-ui, sans-serif",
        color: "#F8FAFC",
        userSelect: "none",
      }}
    >
      {/* Studio Backdrop & Shared Gradients */}
      <svg
        width={1080}
        height={960}
        viewBox="0 0 1080 960"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <defs>
          <radialGradient id="act3BgGlow" cx="50%" cy="56%" r="58%">
            <stop offset="0%" stopColor={glowColor} stopOpacity="0.25" />
            <stop offset="55%" stopColor={glowColor} stopOpacity="0.07" />
            <stop offset="100%" stopColor="#0B0F19" stopOpacity="0" />
          </radialGradient>
          <pattern
            id="act3StudioGrid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="#1E293B"
              strokeWidth="1"
              strokeOpacity="0.38"
            />
          </pattern>

          {/* Character & Samosa Gradients */}
          <linearGradient
            id="act3SamosaGold"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="45%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient
            id="act3SamosaShadow"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>
          <linearGradient
            id="act3SamosaHighlight"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FFFBEB" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <linearGradient
            id="act3ApronGrad"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#EA580C" />
            <stop offset="100%" stopColor="#9A3412" />
          </linearGradient>
          <linearGradient
            id="act3AviatorLens"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#451A03" />
            <stop offset="50%" stopColor="#78350F" />
            <stop offset="100%" stopColor="#1C1917" />
          </linearGradient>

          {/* SQL & NoSQL Tower Gradients */}
          <linearGradient id="sqlPlatter" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0369A1" />
            <stop offset="35%" stopColor="#38BDF8" />
            <stop offset="70%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0C4A6E" />
          </linearGradient>
          <linearGradient id="sqlTopCap" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E0F2FE" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          <linearGradient id="nosqlVault" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="50%" stopColor="#059669" />
            <stop offset="100%" stopColor="#064E3B" />
          </linearGradient>

          {/* CPU Die & Brass Chronograph Gradients */}
          <linearGradient id="cpuSubstrate" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="50%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#090D16" />
          </linearGradient>
          <linearGradient id="brassBezel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="45%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>

          {/* Redis Cube Fortress Gradients */}
          <linearGradient
            id="redisRubyTop"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FCA5A5" />
            <stop offset="35%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#B91C1C" />
          </linearGradient>
          <linearGradient
            id="redisRubyLeft"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#DC2626" />
            <stop offset="100%" stopColor="#7F1D1D" />
          </linearGradient>
          <linearGradient
            id="redisRubyRight"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#B91C1C" />
            <stop offset="100%" stopColor="#450A0A" />
          </linearGradient>

          <filter id="act3Glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="9" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <rect width="1080" height="960" fill="#0B0F19" />
        <rect width="1080" height="960" fill="url(#act3StudioGrid)" />
        <rect width="1080" height="960" fill="url(#act3BgGlow)" />
      </svg>

      {/* ONE Bold Centered Title + ONE Short Subtitle */}
      <div
        style={{
          position: "absolute",
          top: 46,
          left: 0,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 20,
        }}
      >
        <div
          style={{
            fontSize: 44,
            fontWeight: 900,
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: 8,
            textShadow: "0 4px 24px rgba(0,0,0,0.65)",
          }}
        >
          {mainTitle}
        </div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 800,
            color: subColor,
            letterSpacing: "0.08em",
          }}
        >
          {subTitle}
        </div>
      </div>

      {/* =====================================================================
          ARTIST-GRADE 2D VECTOR ILLUSTRATION STAGE (1000x700)
         ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 175,
          left: 40,
          width: 1000,
          height: 720,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <svg width={1000} height={720} viewBox="0 0 1000 720">
          {/* =================================================================
              BEAT 1 (598..720): SPEAKER CHARACTER + SQL & NoSQL DB TOWERS
             ================================================================= */}
          {isBeat1 && (
            <g
              transform={`scale(${interpolate(beat1Enter, [0, 1], [0.88, 1])})`}
              style={{ transformOrigin: "500px 360px" }}
              opacity={beat1Enter}
            >
              {/* Laser Data Conduits from Character's Smartphone to SQL & NoSQL */}
              <path
                d="M 330 310 C 445 310, 480 175, 610 175"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="5"
                strokeDasharray="14 10"
                strokeDashoffset={-frame * 3.5}
              />
              {frame >= 662 && (
                <path
                  d="M 330 310 C 445 310, 480 515, 610 515"
                  fill="none"
                  stroke="#34D399"
                  strokeWidth="5"
                  strokeDasharray="14 10"
                  strokeDashoffset={-frame * 3.5}
                />
              )}

              {/* Animated Laser Data Packets */}
              {frame >= 605 && (
                <g
                  transform={`translate(${interpolate(
                    orb1T,
                    [0, 0.5, 1],
                    [330, 470, 605]
                  )}, ${interpolate(orb1T, [0, 0.5, 1], [310, 215, 175])})`}
                >
                  <circle
                    r="18"
                    fill="#38BDF8"
                    opacity="0.4"
                    filter="url(#act3Glow)"
                  />
                  <circle r="9" fill="#E0F2FE" />
                </g>
              )}

              {frame >= 662 && (
                <g
                  transform={`translate(${interpolate(
                    orb2T,
                    [0, 0.5, 1],
                    [330, 470, 605]
                  )}, ${interpolate(orb2T, [0, 0.5, 1], [310, 460, 515])})`}
                >
                  <circle
                    r="18"
                    fill="#34D399"
                    opacity="0.4"
                    filter="url(#act3Glow)"
                  />
                  <circle r="9" fill="#ECFDF5" />
                </g>
              )}

              {/* LEFT: Detailed Speaker Character Holding Smartphone + Samosa Plate */}
              <SpeakerCharacter
                x={205}
                y={385}
                scale={1.32}
                frame={frame}
                holdingPhone={true}
              />
              {/* Mini Brass Plate with 2 Flaky Samose beside Character */}
              <g transform="translate(195, 525)">
                <ellipse
                  cx="0"
                  cy="18"
                  rx="82"
                  ry="24"
                  fill="#1E293B"
                  stroke="#F59E0B"
                  strokeWidth="3"
                />
                <DetailedSamosa x={-26} y={-2} scale={0.58} rotate={-8} />
                <DetailedSamosa x={26} y={2} scale={0.62} rotate={7} />
              </g>

              {/* TOP-RIGHT: Multi-Platter Cobalt-Blue SQL Database Tower */}
              <g
                transform={`translate(745, 185) scale(${interpolate(
                  sqlPop,
                  [0, 1],
                  [0.65, 1]
                )})`}
                opacity={sqlPop}
              >
                <circle
                  r="135"
                  fill="#38BDF8"
                  opacity="0.16"
                  filter="url(#act3Glow)"
                />
                {[52, 8, -36].map((dy, tierIdx) => (
                  <g key={tierIdx} transform={`translate(0, ${dy})`}>
                    <path
                      d="M -112 0 L -112 34 A 112 26 0 0 0 112 34 L 112 0 Z"
                      fill="url(#sqlPlatter)"
                      stroke="#BAE6FD"
                      strokeWidth="2.2"
                    />
                    <ellipse
                      cx="0"
                      cy="0"
                      rx="112"
                      ry="26"
                      fill="url(#sqlTopCap)"
                      stroke="#E0F2FE"
                      strokeWidth="2.2"
                    />
                    {/* Glowing LED Vent Slots & Status Lights */}
                    <circle cx="-72" cy="18" r="4" fill="#FEF08A" />
                    <circle cx="-56" cy="18" r="4" fill="#38BDF8" />
                    <rect
                      x="25"
                      y="14"
                      width="58"
                      height="7"
                      rx="3.5"
                      fill="#082F49"
                      stroke="#7DD3FC"
                      strokeWidth="1.2"
                    />
                  </g>
                ))}
                {/* Magnetic Read/Write Actuator Arm Sweeping Top Platter */}
                <g transform={`translate(-85, -42) rotate(${armSweep})`}>
                  <line
                    x1="0"
                    y1="0"
                    x2="68"
                    y2="8"
                    stroke="#FDE047"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                  <circle cx="0" cy="0" r="8" fill="#F59E0B" />
                  <circle cx="68" cy="8" r="5" fill="#FEF08A" />
                </g>

                <text
                  x="0"
                  y="132"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="34"
                  fontWeight="900"
                  letterSpacing="0.08em"
                >
                  SQL TOWER
                </text>
              </g>

              {/* BOTTOM-RIGHT: Emerald Interlocking Hexagonal NoSQL Vault Cluster */}
              <g
                transform={`translate(745, 510) scale(${interpolate(
                  nosqlPop,
                  [0, 1],
                  [0.65, 1]
                )})`}
                opacity={nosqlPop}
              >
                <circle
                  r="135"
                  fill="#34D399"
                  opacity="0.16"
                  filter="url(#act3Glow)"
                />
                {[
                  { hx: -58, hy: 18, s: 0.92 },
                  { hx: 58, hy: 18, s: 0.92 },
                  { hx: 0, hy: -26, s: 1.06 },
                ].map((vault, idx) => (
                  <g
                    key={idx}
                    transform={`translate(${vault.hx}, ${vault.hy}) scale(${vault.s})`}
                  >
                    <polygon
                      points="0,-54 48,-27 48,27 0,54 -48,27 -48,-27"
                      fill="url(#nosqlVault)"
                      stroke="#A7F3D0"
                      strokeWidth="2.8"
                    />
                    <polygon
                      points="0,-38 34,-19 34,19 0,38 -34,19 -34,-19"
                      fill="#064E3B"
                      stroke="#34D399"
                      strokeWidth="1.8"
                    />
                    <text
                      x="0"
                      y="8"
                      textAnchor="middle"
                      fill="#ECFDF5"
                      fontSize="24"
                      fontWeight="900"
                    >
                      {"{ }"}
                    </text>
                  </g>
                ))}
                {/* Glowing Inter-Node Mesh Links */}
                <circle cx="-28" cy="-4" r="5" fill="#FEF08A" />
                <circle cx="28" cy="-4" r="5" fill="#FEF08A" />
                <circle cx="0" cy="28" r="5" fill="#FEF08A" />

                <text
                  x="0"
                  y="118"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="34"
                  fontWeight="900"
                  letterSpacing="0.06em"
                >
                  NoSQL VAULT
                </text>
              </g>
            </g>
          )}

          {/* =================================================================
              BEAT 2 (720..898): 64-PIN SILICON CPU DIE + BRASS CHRONOGRAPH
             ================================================================= */}
          {isBeat2 && (
            <g
              transform={`scale(${interpolate(beat2Enter, [0, 1], [0.86, 1])})`}
              style={{ transformOrigin: "500px 360px" }}
              opacity={beat2Enter}
            >
              {/* LEFT: Speaker Character Watching the Overheated CPU */}
              <SpeakerCharacter
                x={145}
                y={415}
                scale={1.15}
                frame={frame}
                holdingPhone={false}
              />

              {/* CENTER: Ultra-Detailed 64-Pin Silicon CPU Die & Motherboard Socket */}
              <g transform="translate(465, 345)">
                {/* PCB Circuit Traces Radiating Outward */}
                <g stroke="#EF4444" strokeWidth="2.5" opacity="0.45" fill="none">
                  <path d="M -145 -80 L -195 -115 L -235 -115" />
                  <path d="M -145 40 L -195 75 L -235 75" />
                  <path d="M 145 -80 L 195 -115 L 235 -115" />
                  <path d="M 145 40 L 195 75 L 235 75" />
                </g>

                {/* Rising Crimson Heat-Wave Bezier Curves */}
                {[-65, 0, 65].map((hx, i) => (
                  <path
                    key={i}
                    d={`M ${hx} -155 C ${hx - 18 + heatWave} -195, ${
                      hx + 18 - heatWave
                    } -235, ${hx + heatWave * 0.5} -275`}
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="5"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                ))}

                {/* 64 Gold Contact Pins (16 per side) */}
                {socketPins.map((pos, idx) => (
                  <g key={idx}>
                    <rect
                      x={pos - 3.5}
                      y="-154"
                      width="7"
                      height="22"
                      rx="2"
                      fill="url(#brassBezel)"
                    />
                    <rect
                      x={pos - 3.5}
                      y="132"
                      width="7"
                      height="22"
                      rx="2"
                      fill="url(#brassBezel)"
                    />
                    <rect
                      x="-154"
                      y={pos - 3.5}
                      width="22"
                      height="7"
                      rx="2"
                      fill="url(#brassBezel)"
                    />
                    <rect
                      x="132"
                      y={pos - 3.5}
                      width="22"
                      height="7"
                      rx="2"
                      fill="url(#brassBezel)"
                    />
                  </g>
                ))}

                {/* Outer Ceramic/Silicon Substrate */}
                <rect
                  x="-134"
                  y="-134"
                  width="268"
                  height="268"
                  rx="26"
                  fill="url(#cpuSubstrate)"
                  stroke="#EF4444"
                  strokeWidth="5"
                  filter="url(#act3Glow)"
                />
                {/* Exposed Silicon Core Window */}
                <rect
                  x="-102"
                  y="-102"
                  width="204"
                  height="204"
                  rx="18"
                  fill="#090D16"
                  stroke="#F59E0B"
                  strokeWidth="3"
                />

                {/* 3 Interlocking Metallic Gears Grinding Inside Silicon Core */}
                {/* Main Gear */}
                <g transform={`translate(-22, -18) rotate(${gearRot})`}>
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                    <rect
                      key={deg}
                      x="-10"
                      y="-54"
                      width="20"
                      height="108"
                      rx="4"
                      fill="#F59E0B"
                      transform={`rotate(${deg})`}
                    />
                  ))}
                  <circle
                    r="40"
                    fill="#1E293B"
                    stroke="#FEF08A"
                    strokeWidth="4"
                  />
                  <circle r="16" fill="#EF4444" />
                </g>

                {/* Secondary Meshed Gear */}
                <g transform={`translate(48, 34) rotate(${-gearRot * 1.35})`}>
                  {[0, 60, 120, 180, 240, 300].map((deg) => (
                    <rect
                      key={deg}
                      x="-8"
                      y="-38"
                      width="16"
                      height="76"
                      rx="4"
                      fill="#EF4444"
                      transform={`rotate(${deg})`}
                    />
                  ))}
                  <circle
                    r="28"
                    fill="#0F172A"
                    stroke="#FCA5A5"
                    strokeWidth="3.5"
                  />
                  <circle r="10" fill="#FDE047" />
                </g>

                {/* Tertiary Top-Right Gear */}
                <g transform={`translate(52, -48) rotate(${-gearRot * 1.6})`}>
                  {[0, 60, 120, 180, 240, 300].map((deg) => (
                    <rect
                      key={deg}
                      x="-6"
                      y="-28"
                      width="12"
                      height="56"
                      rx="3"
                      fill="#FBBF24"
                      transform={`rotate(${deg})`}
                    />
                  ))}
                  <circle r="20" fill="#1E293B" stroke="#FDE047" strokeWidth="3" />
                </g>

                <text
                  x="0"
                  y="196"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="30"
                  fontWeight="900"
                  letterSpacing="0.08em"
                >
                  SILICON CPU + DISK
                </text>
              </g>

              {/* RIGHT: Brass & Glass Chronograph Stopwatch */}
              <g transform="translate(815, 345)">
                <circle
                  r="130"
                  fill="#F59E0B"
                  opacity="0.16"
                  filter="url(#act3Glow)"
                />
                {/* Top Crown & Side Pusher */}
                <rect
                  x="-16"
                  y="-146"
                  width="32"
                  height="22"
                  rx="5"
                  fill="url(#brassBezel)"
                />
                <rect
                  x="-28"
                  y="-160"
                  width="56"
                  height="16"
                  rx="8"
                  fill="#FEF08A"
                />
                <rect
                  x="68"
                  y="-118"
                  width="22"
                  height="14"
                  rx="4"
                  fill="url(#brassBezel)"
                  transform="rotate(42 68 -118)"
                />

                {/* Brass Bezel & Dial */}
                <circle
                  r="112"
                  fill="#0F172A"
                  stroke="url(#brassBezel)"
                  strokeWidth="12"
                />
                <path
                  d="M 0 0 L 0 -92 A 92 92 0 1 1 -78 48 Z"
                  fill="#EF4444"
                  fillOpacity="0.3"
                />

                {/* Glass Reflection Arc */}
                <path
                  d="M -72 -48 A 86 86 0 0 1 58 -64"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="5"
                  strokeLinecap="round"
                  opacity="0.35"
                />

                {/* Chronograph Ticks */}
                {Array.from({ length: 12 }, (_, i) => i * 30).map((deg) => (
                  <line
                    key={deg}
                    x1="0"
                    y1="-80"
                    x2="0"
                    y2="-94"
                    stroke="#FEF08A"
                    strokeWidth="4"
                    strokeLinecap="round"
                    transform={`rotate(${deg})`}
                  />
                ))}

                {/* Ticking Hand */}
                <g transform={`rotate(${stopwatchRot})`}>
                  <line
                    x1="0"
                    y1="18"
                    x2="0"
                    y2="-74"
                    stroke="#EF4444"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  <circle r="11" fill="#FEF08A" />
                </g>

                <text
                  x="0"
                  y="196"
                  textAnchor="middle"
                  fill="#F87171"
                  fontSize="30"
                  fontWeight="900"
                  letterSpacing="0.06em"
                >
                  SLOW &amp; HEAVY
                </text>
              </g>
            </g>
          )}

          {/* =================================================================
              BEAT 3 (898..968): GIANT 3D ISOMETRIC REDIS CUBE FORTRESS
             ================================================================= */}
          {isBeat3 && (
            <g>
              {/* Left: Celebrating Speaker Character */}
              <g opacity={beat3Drop}>
                <SpeakerCharacter
                  x={155}
                  y={425}
                  scale={1.22}
                  frame={frame}
                  celebrating={true}
                />
              </g>

              {/* Right: Platter of Hot Golden Samose Celebrating Instant Serve */}
              <g
                transform="translate(835, 455)"
                opacity={beat3Drop}
              >
                <ellipse
                  cx="0"
                  cy="38"
                  rx="110"
                  ry="36"
                  fill="#1E293B"
                  stroke="#F59E0B"
                  strokeWidth="4"
                />
                <DetailedSamosa x={-38} y={4} scale={0.85} rotate={-10} />
                <DetailedSamosa x={38} y={4} scale={0.85} rotate={10} />
                <DetailedSamosa x={0} y={18} scale={0.95} rotate={0} />
              </g>

              {/* CENTER: Giant 3D Isometric Redis Cube Fortress */}
              <g
                transform={`translate(500, ${
                  interpolate(beat3Drop, [0, 1], [110, 340]) + cubeFloat
                }) scale(${interpolate(beat3Drop, [0, 1], [1.45, 1.15])})`}
                opacity={interpolate(beat3Drop, [0, 0.25, 1], [0, 1, 1])}
              >
                {/* Multi-Ring Golden & Crimson Shockwaves */}
                <ellipse
                  cx="0"
                  cy="45"
                  rx={165 + shockwaveT * 235}
                  ry={70 + shockwaveT * 95}
                  fill="none"
                  stroke="#FBBF24"
                  strokeWidth="5"
                  opacity={1 - shockwaveT}
                />
                <ellipse
                  cx="0"
                  cy="45"
                  rx={135 + shockwaveT * 155}
                  ry={55 + shockwaveT * 65}
                  fill="none"
                  stroke="#EF4444"
                  strokeWidth="4"
                  opacity={1 - shockwaveT * 0.7}
                />

                <circle
                  cx="0"
                  cy="0"
                  r="185"
                  fill="#EF4444"
                  opacity="0.24"
                  filter="url(#act3Glow)"
                />

                {/* 3 Beveled Crimson/Ruby Isometric Tiers with Specular Highlights */}
                {[74, 14, -46].map((layerY, idx) => (
                  <g key={idx} transform={`translate(0, ${layerY})`}>
                    {/* Top Beveled Diamond */}
                    <polygon
                      points="0,-76 156,0 0,76 -156,0"
                      fill="url(#redisRubyTop)"
                      stroke="#FECACA"
                      strokeWidth="2.8"
                    />
                    {/* Inner Circuit Core Recessed Ring */}
                    <polygon
                      points="0,-54 112,0 0,54 -112,0"
                      fill="none"
                      stroke="#FEF08A"
                      strokeWidth="1.6"
                      strokeDasharray="10 6"
                      opacity="0.7"
                    />
                    {/* Left Isometric Wall */}
                    <polygon
                      points="-156,0 0,76 0,116 -156,40"
                      fill="url(#redisRubyLeft)"
                      stroke="#FCA5A5"
                      strokeWidth="2"
                    />
                    {/* Right Isometric Wall */}
                    <polygon
                      points="156,0 0,76 0,116 156,40"
                      fill="url(#redisRubyRight)"
                      stroke="#F87171"
                      strokeWidth="2"
                    />
                  </g>
                ))}

                {/* Top White Lightning & Star Relief Emblem */}
                <g transform="translate(0, -52)">
                  <polygon
                    points="14,-44 -30,2 4,2 -14,44 34,-6 -2,-6"
                    fill="#FFFFFF"
                    filter="url(#act3Glow)"
                  />
                  <polygon
                    points="-58,-12 -48,-28 -38,-12 -22,-4 -38,4 -48,20 -58,4 -74,-4"
                    fill="#FEF08A"
                  />
                  <polygon
                    points="58,-18 65,-30 72,-18 84,-12 72,-6 65,6 58,-6 46,-12"
                    fill="#FEF08A"
                  />
                </g>

                <text
                  x="0"
                  y="225"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="44"
                  fontWeight="900"
                  letterSpacing="0.16em"
                >
                  REDIS CACHE
                </text>
              </g>
            </g>
          )}
        </svg>
      </div>
    </div>
  );
};

export default Act3DatabaseBottleneck;
