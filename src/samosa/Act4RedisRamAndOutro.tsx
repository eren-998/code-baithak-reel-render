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
      fill="url(#act4SamosaGold)"
      stroke="#FEF08A"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <path
      d="M 0 -52 L -6 42 Q -32 42 -50 36 Z"
      fill="url(#act4SamosaShadow)"
      opacity="0.75"
    />
    <path
      d="M 0 -52 L -6 42 Q 24 44 50 36 Z"
      fill="url(#act4SamosaHighlight)"
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
 * Artist-Grade Crispy Filled Golgappa (Pani Puri)
 */
const DetailedGolgappa: React.FC<{
  x: number;
  y: number;
  r?: number;
}> = ({ x, y, r = 30 }) => (
  <g transform={`translate(${x}, ${y})`}>
    <ellipse
      cx="0"
      cy={r * 0.85}
      rx={r * 0.9}
      ry={r * 0.28}
      fill="rgba(0,0,0,0.4)"
    />
    <circle
      cx="0"
      cy="0"
      r={r}
      fill="url(#act4PuriShell)"
      stroke="#FEF08A"
      strokeWidth="2"
    />
    <ellipse
      cx="0"
      cy={-r * 0.16}
      rx={r * 0.58}
      ry={r * 0.36}
      fill="#451A03"
      stroke="#FDE68A"
      strokeWidth="1.8"
    />
    <ellipse
      cx="0"
      cy={-r * 0.12}
      rx={r * 0.48}
      ry={r * 0.26}
      fill="#059669"
    />
    <circle cx={-r * 0.18} cy={-r * 0.16} r={r * 0.11} fill="#FACC15" />
    <circle cx={r * 0.15} cy={-r * 0.12} r={r * 0.1} fill="#FB923C" />
    <circle cx="0" cy={-r * 0.2} r={r * 0.09} fill="#FDE047" />
  </g>
);

/**
 * Artist-Grade Speaker Character ("Code Baithak Creator")
 * Curved olive/khaki cap, gold-rimmed aviator sunglasses, shaped beard & mustache,
 * leaf-patterned shirt + CB apron, and optional laptop or steaming Samosa platter.
 */
const SpeakerCharacter: React.FC<{
  x: number;
  y: number;
  scale?: number;
  frame: number;
  holdingSamosaPlate?: boolean;
  holdingLaptop?: boolean;
}> = ({
  x,
  y,
  scale = 1,
  frame,
  holdingSamosaPlate = false,
  holdingLaptop = false,
}) => {
  const breathe = Math.sin(frame / 7) * 2.8;
  const armWave = Math.sin(frame / 6) * 5;

  return (
    <g transform={`translate(${x}, ${y + breathe}) scale(${scale})`}>
      <ellipse cx="0" cy="44" rx="64" ry="14" fill="rgba(0,0,0,0.45)" />
      <rect x="-14" y="-66" width="28" height="24" rx="10" fill="#D99B66" />

      {/* Torso */}
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
        fill="url(#act4ApronGrad)"
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

      {/* Left Arm */}
      <path
        d={`M -52 -42 Q -78 -10 ${-64 + armWave * 0.4} 18`}
        stroke="#E2E8F0"
        strokeWidth="18"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx={-64 + armWave * 0.4} cy="20" r="9" fill="#D99B66" />

      {/* Right Arm */}
      <path
        d={
          holdingSamosaPlate || holdingLaptop
            ? `M 52 -42 Q 86 -20 ${92 + armWave * 0.3} -24`
            : `M 52 -42 Q 80 -10 ${66 + armWave} 18`
        }
        stroke="#E2E8F0"
        strokeWidth="18"
        strokeLinecap="round"
        fill="none"
      />
      <circle
        cx={
          holdingSamosaPlate || holdingLaptop
            ? 94 + armWave * 0.3
            : 66 + armWave
        }
        cy={holdingSamosaPlate || holdingLaptop ? -24 : 20}
        r="9"
        fill="#D99B66"
      />

      {/* Steaming Golden Samosa Platter in Right Hand */}
      {holdingSamosaPlate && (
        <g transform={`translate(${110 + armWave * 0.3}, -38)`}>
          <ellipse
            cx="0"
            cy="14"
            rx="62"
            ry="18"
            fill="#1E293B"
            stroke="#FACC15"
            strokeWidth="2.8"
          />
          <DetailedSamosa x={-20} y={-2} scale={0.55} rotate={-8} />
          <DetailedSamosa x={20} y={-2} scale={0.55} rotate={8} />
          <DetailedSamosa x={0} y={6} scale={0.62} rotate={0} />
        </g>
      )}

      {/* Developer Laptop with Redis Sticker in Right Hand */}
      {holdingLaptop && (
        <g transform={`translate(${108 + armWave * 0.3}, -36)`}>
          <polygon
            points="-44,18 44,18 56,28 -56,28"
            fill="#94A3B8"
            stroke="#E2E8F0"
            strokeWidth="1.5"
          />
          <rect
            x="-42"
            y="-38"
            width="84"
            height="56"
            rx="6"
            fill="#1E293B"
            stroke="#38BDF8"
            strokeWidth="2.5"
          />
          <polygon points="0,-24 18,-10 0,4 -18,-10" fill="#EF4444" />
        </g>
      )}

      {/* Ears & Head */}
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
      <path
        d="M -36 -112 Q -36 -148 0 -148 Q 36 -148 36 -112 Q 36 -66 0 -64 Q -36 -66 -36 -112 Z"
        fill="#E0A36E"
        stroke="#B47B48"
        strokeWidth="2"
      />
      <path
        d="M -36 -116 Q -20 -132 0 -130 Q 22 -132 36 -116 L 34 -128 L -34 -128 Z"
        fill="#111827"
      />

      {/* Curved Olive/Khaki Baseball Cap */}
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

      {/* Eyebrows & Gold-Rimmed Aviator Sunglasses */}
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
      <g transform="translate(0, -104)">
        <path
          d="M -32 -6 L -6 -6 Q -4 10 -16 14 Q -30 14 -32 -6 Z"
          fill="url(#act4AviatorLens)"
          stroke="#FACC15"
          strokeWidth="2.5"
        />
        <path
          d="M 6 -6 L 32 -6 Q 30 14 16 14 Q 4 10 6 -6 Z"
          fill="url(#act4AviatorLens)"
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

      {/* Nose & Full Shaped Beard */}
      <path
        d="M 0 -104 L -3 -90 L 3 -88"
        stroke="#B47B48"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
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

export const Act4RedisRamAndOutro: React.FC = () => {
  const rawFrame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Support both global timeline frames (968..1610) and Sequence-local frames (0..642)
  const globalFrame = rawFrame < 800 ? rawFrame + 968 : rawFrame;

  const isBeat1 = globalFrame < 1108;
  const isBeat2 = globalFrame >= 1108 && globalFrame < 1235;
  const isBeat3 = globalFrame >= 1235 && globalFrame < 1409;
  const isBeat4 = globalFrame >= 1409;

  // Beat springs
  const beat1Enter = spring({
    frame: Math.max(0, globalFrame - 968),
    fps,
    config: { damping: 14, stiffness: 115 },
  });
  const cpuCrossSpring = spring({
    frame: Math.max(0, globalFrame - 980),
    fps,
    config: { damping: 12, stiffness: 150 },
  });
  const ramEnter = spring({
    frame: Math.max(0, globalFrame - 1015),
    fps,
    config: { damping: 12, stiffness: 135 },
  });

  const beat2Enter = spring({
    frame: Math.max(0, globalFrame - 1108),
    fps,
    config: { damping: 13, stiffness: 120 },
  });

  const beat3Enter = spring({
    frame: Math.max(0, globalFrame - 1235),
    fps,
    config: { damping: 13, stiffness: 120 },
  });

  const beat4Enter = spring({
    frame: Math.max(0, globalFrame - 1409),
    fps,
    config: { damping: 14, stiffness: 115 },
  });

  // CRITICAL EXACT SYNC AT GLOBAL FRAME 1485 (49.50s) WHEN <FollowCard startFrame={1485} /> APPEARS!
  const followSync = spring({
    frame: Math.max(0, globalFrame - 1485),
    fps,
    config: { damping: 12, stiffness: 140 },
  });
  const followArrowOpacity = globalFrame < 1485 ? 0 : followSync;

  // Dynamic Titles
  let mainTitle = "REDIS READS FROM RAM!";
  let subTitle = "ULTRA-FAST DDR5 MEMORY VS SLOW CPU DISK";
  let subColor = "#34D399";
  let glowColor = "#10B981";

  if (isBeat4) {
    mainTitle =
      globalFrame >= 1485 ? "FOLLOW @CODE_BAITHAK" : "CODE BAITHAK DARBAR";
    subTitle =
      globalFrame >= 1485
        ? "RAW TECHNICAL CLARITY // 100%"
        : "GOLGAPPA STALL TO REDIS ARCHITECTURE";
    subColor = "#FBBF24";
    glowColor = "#F59E0B";
  } else if (isBeat3) {
    mainTitle = "ADD REDIS TO YOUR STACK";
    subTitle = "SUPERCHARGE YOUR APP & DEVELOPER SKILLSET";
    subColor = "#38BDF8";
    glowColor = "#EF4444";
  } else if (isBeat2) {
    mainTitle = "POWERING EVERY MODERN APP";
    subTitle = "SUB-MILLISECOND CACHE FOR ALL SERVICES";
    subColor = "#FBBF24";
    glowColor = "#EF4444";
  }

  // Motion waves
  const floatWave = Math.sin(globalFrame * 0.14) * 8;
  const steamWave = Math.sin(globalFrame * 0.18) * 9;
  const bulbPulse = 0.78 + 0.22 * Math.sin(globalFrame * 0.22);
  const arrowOsc = Math.sin(Math.max(0, globalFrame - 1485) * 0.28) * 10;

  // Reusable 3D Isometric Beveled Redis Cube Fortress
  const renderBeveledRedisCube = (scale = 1) => (
    <g transform={`scale(${scale})`}>
      {[44, 6, -32].map((ly, idx) => (
        <g key={idx} transform={`translate(0, ${ly})`}>
          <polygon
            points="0,-56 116,0 0,56 -116,0"
            fill="url(#act4RedisTop)"
            stroke="#FECACA"
            strokeWidth="2.4"
          />
          <polygon
            points="0,-38 78,0 0,38 -78,0"
            fill="none"
            stroke="#FEF08A"
            strokeWidth="1.4"
            strokeDasharray="8 5"
            opacity="0.65"
          />
          <polygon
            points="-116,0 0,56 0,86 -116,30"
            fill="url(#act4RedisLeft)"
            stroke="#FCA5A5"
            strokeWidth="1.8"
          />
          <polygon
            points="116,0 0,56 0,86 116,30"
            fill="url(#act4RedisRight)"
            stroke="#F87171"
            strokeWidth="1.8"
          />
        </g>
      ))}
      <polygon
        points="10,-62 -20,-28 4,-28 -10,2 24,-34 -2,-34"
        fill="#FFFFFF"
      />
    </g>
  );

  // 24 gold contact fingers for DDR5 RAM stick
  const ramGoldFingers = Array.from({ length: 24 }, (_, i) => -184 + i * 16);

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
      {/* Clean Studio Lighting & Shared Artistic Gradients */}
      <svg
        width={1080}
        height={960}
        viewBox="0 0 1080 960"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <defs>
          <radialGradient id="act4BgGlow" cx="50%" cy="56%" r="58%">
            <stop offset="0%" stopColor={glowColor} stopOpacity="0.24" />
            <stop offset="55%" stopColor={glowColor} stopOpacity="0.07" />
            <stop offset="100%" stopColor="#0B0F19" stopOpacity="0" />
          </radialGradient>
          <pattern
            id="act4StudioGrid"
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

          {/* Samosa, Golgappa, Stall & Character Gradients */}
          <linearGradient
            id="act4SamosaGold"
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
            id="act4SamosaShadow"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>
          <linearGradient
            id="act4SamosaHighlight"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FFFBEB" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <linearGradient id="act4PuriShell" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FEF3C7" />
            <stop offset="55%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#92400E" />
          </linearGradient>
          <linearGradient
            id="act4BrassMatka"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="45%" stopColor="#F59E0B" />
            <stop offset="80%" stopColor="#B45309" />
            <stop offset="100%" stopColor="#451A03" />
          </linearGradient>
          <linearGradient id="act4WoodCart" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9A3412" />
            <stop offset="50%" stopColor="#7C2D12" />
            <stop offset="100%" stopColor="#431407" />
          </linearGradient>
          <linearGradient id="act4ApronGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EA580C" />
            <stop offset="100%" stopColor="#9A3412" />
          </linearGradient>
          <linearGradient
            id="act4AviatorLens"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#451A03" />
            <stop offset="50%" stopColor="#78350F" />
            <stop offset="100%" stopColor="#1C1917" />
          </linearGradient>
          <linearGradient
            id="act4SignboardGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#1E1B4B" />
            <stop offset="50%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#1E1B4B" />
          </linearGradient>

          {/* Redis & DDR5 RAM Gradients */}
          <linearGradient
            id="act4RedisTop"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FCA5A5" />
            <stop offset="40%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#B91C1C" />
          </linearGradient>
          <linearGradient
            id="act4RedisLeft"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#DC2626" />
            <stop offset="100%" stopColor="#7F1D1D" />
          </linearGradient>
          <linearGradient
            id="act4RedisRight"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#B91C1C" />
            <stop offset="100%" stopColor="#450A0A" />
          </linearGradient>
          <linearGradient id="ddr5Pcb" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#065F46" />
            <stop offset="50%" stopColor="#047857" />
            <stop offset="100%" stopColor="#022C22" />
          </linearGradient>
          <linearGradient id="ddr5RgbBar" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="50%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#FACC15" />
          </linearGradient>

          <filter id="act4Glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="9" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <rect width="1080" height="960" fill="#0B0F19" />
        <rect width="1080" height="960" fill="url(#act4StudioGrid)" />
        <rect width="1080" height="960" fill="url(#act4BgGlow)" />
      </svg>

      {/* ONE Bold Centered Title + ONE Short Subtitle (Shifted Left on Beat 4 after 1485 so Top-Right FollowCard has full room) */}
      <div
        style={{
          position: "absolute",
          top: 42,
          left: isBeat4 && globalFrame >= 1485 ? 48 : 0,
          width: isBeat4 && globalFrame >= 1485 ? 580 : "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: isBeat4 && globalFrame >= 1485 ? "flex-start" : "center",
          zIndex: 20,
        }}
      >
        <div
          style={{
            fontSize: 42,
            fontWeight: 900,
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            textAlign: isBeat4 && globalFrame >= 1485 ? "left" : "center",
            lineHeight: 1.1,
            marginBottom: 8,
            textShadow: "0 4px 24px rgba(0,0,0,0.65)",
          }}
        >
          {mainTitle}
        </div>
        <div
          style={{
            fontSize: 19,
            fontWeight: 800,
            color: subColor,
            letterSpacing: "0.08em",
          }}
        >
          {subTitle}
        </div>
      </div>

      {/* =====================================================================
          ARTIST-GRADE 2D VECTOR ILLUSTRATION STAGE (1040x760)
         ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 155,
          left: 20,
          width: 1040,
          height: 760,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <svg width={1040} height={760} viewBox="0 0 1040 760">
          {/* =================================================================
              BEAT 1 (968..1108): CHAINED CPU DIE VS REDIS + DDR5 RGB RAM MODULE
             ================================================================= */}
          {isBeat1 && (
            <g
              transform={`scale(${interpolate(beat1Enter, [0, 1], [0.88, 1])})`}
              style={{ transformOrigin: "520px 380px" }}
              opacity={beat1Enter}
            >
              {/* LEFT: Dimmed Silicon CPU Die with Heavy Crimson Cross */}
              <g transform="translate(205, 370)" opacity={0.62}>
                {Array.from({ length: 10 }, (_, i) => -80 + i * 18).map(
                  (p, idx) => (
                    <g key={idx}>
                      <rect
                        x={p - 4}
                        y="-124"
                        width="8"
                        height="18"
                        rx="2"
                        fill="#64748B"
                      />
                      <rect
                        x={p - 4}
                        y="106"
                        width="8"
                        height="18"
                        rx="2"
                        fill="#64748B"
                      />
                      <rect
                        x="-124"
                        y={p - 4}
                        width="18"
                        height="8"
                        rx="2"
                        fill="#64748B"
                      />
                      <rect
                        x="106"
                        y={p - 4}
                        width="18"
                        height="8"
                        rx="2"
                        fill="#64748B"
                      />
                    </g>
                  )
                )}
                <rect
                  x="-106"
                  y="-106"
                  width="212"
                  height="212"
                  rx="24"
                  fill="#1E293B"
                  stroke="#64748B"
                  strokeWidth="4"
                />
                <rect
                  x="-76"
                  y="-76"
                  width="152"
                  height="152"
                  rx="14"
                  fill="#090D16"
                  stroke="#475569"
                  strokeWidth="2.5"
                />
                <text
                  x="0"
                  y="10"
                  textAnchor="middle"
                  fill="#94A3B8"
                  fontSize="30"
                  fontWeight="900"
                >
                  CPU I/O
                </text>

                {/* Glowing Crimson Cross Stamp */}
                <g
                  transform={`scale(${interpolate(
                    cpuCrossSpring,
                    [0, 1],
                    [1.5, 1]
                  )})`}
                  opacity={cpuCrossSpring}
                >
                  <line
                    x1="-112"
                    y1="-112"
                    x2="112"
                    y2="112"
                    stroke="#EF4444"
                    strokeWidth="16"
                    strokeLinecap="round"
                  />
                  <line
                    x1="112"
                    y1="-112"
                    x2="-112"
                    y2="112"
                    stroke="#EF4444"
                    strokeWidth="16"
                    strokeLinecap="round"
                  />
                </g>

                <text
                  x="0"
                  y="185"
                  textAnchor="middle"
                  fill="#F87171"
                  fontSize="26"
                  fontWeight="900"
                  letterSpacing="0.06em"
                >
                  CPU = SLOW DISK I/O
                </text>
              </g>

              {/* RIGHT: 3D Redis Cube Firing Cyan/Gold Lightning into 8-Chip DDR5 RGB RAM Module */}
              <g
                transform={`translate(690, 370) scale(${interpolate(
                  ramEnter,
                  [0, 1],
                  [0.9, 1]
                )})`}
              >
                <circle
                  cx="0"
                  cy="0"
                  r="250"
                  fill="#10B981"
                  opacity="0.16"
                  filter="url(#act4Glow)"
                />

                {/* Top-Left of Right Scene: 3D Isometric Redis Cube */}
                <g transform={`translate(-155, -135) translate(0, ${floatWave})`}>
                  {renderBeveledRedisCube(0.84)}
                </g>

                {/* Electric Cyan & Gold Lightning Arcs Firing from Redis into RAM Chips */}
                <g filter="url(#act4Glow)">
                  <polyline
                    points="-60,-105 15,-55 -15,-25 65,30"
                    fill="none"
                    stroke="#FEF08A"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="-35,-125 45,-70 20,-35 115,25"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>

                {/* Artist-Grade 8-Chip DDR5 RGB RAM Module */}
                <g transform="translate(20, 75)">
                  {/* Top RGB Diffuser Light Bar */}
                  <path
                    d="M -205 -86 L 205 -86 L 218 -68 L -218 -68 Z"
                    fill="url(#ddr5RgbBar)"
                    filter="url(#act4Glow)"
                  />

                  {/* Multi-Layer Emerald/Obsidian PCB Stick with Side Locking Notches */}
                  <path
                    d="M -220 -68 L 220 -68 L 220 -24 L 206 -24 L 206 -4 L 220 -4 L 220 58 L -220 58 L -220 -4 L -206 -4 L -206 -24 L -220 -24 Z"
                    fill="url(#ddr5Pcb)"
                    stroke="#34D399"
                    strokeWidth="3.5"
                  />

                  {/* Gold PCB Circuit Traces */}
                  <path
                    d="M -195 -52 L 195 -52 M -195 44 L 195 44"
                    stroke="#FDE047"
                    strokeWidth="1.5"
                    strokeDasharray="10 6"
                    opacity="0.65"
                  />

                  {/* 8 Detailed Black IC Memory Chips with Tiny Silver Pins */}
                  {Array.from({ length: 8 }, (_, idx) => -182 + idx * 52).map(
                    (chipX, cIdx) => {
                      const activeGlow = (globalFrame + cIdx * 3) % 10 < 5;
                      return (
                        <g key={cIdx} transform={`translate(${chipX}, -42)`}>
                          {/* Silver IC Leads on Left & Right */}
                          {[4, 16, 28, 40, 52, 64].map((py) => (
                            <React.Fragment key={py}>
                              <rect
                                x="-4"
                                y={py}
                                width="4"
                                height="3"
                                fill="#E2E8F0"
                              />
                              <rect
                                x="36"
                                y={py}
                                width="4"
                                height="3"
                                fill="#E2E8F0"
                              />
                            </React.Fragment>
                          ))}
                          <rect
                            x="0"
                            y="0"
                            width="36"
                            height="74"
                            rx="4"
                            fill="#090D16"
                            stroke={activeGlow ? "#38BDF8" : "#6EE7B7"}
                            strokeWidth="2"
                          />
                          <circle
                            cx="8"
                            cy="10"
                            r="2.5"
                            fill={activeGlow ? "#FEF08A" : "#475569"}
                          />
                        </g>
                      );
                    }
                  )}

                  {/* 24 Gold Contact Fingers Along Bottom Edge (with Key Notch) */}
                  {ramGoldFingers.map((fx, fIdx) => {
                    if (fIdx === 13) return null;
                    return (
                      <rect
                        key={fIdx}
                        x={fx}
                        y="58"
                        width="11"
                        height="22"
                        rx="2.5"
                        fill="url(#act4SamosaGold)"
                      />
                    );
                  })}
                </g>

                <text
                  x="20"
                  y="215"
                  textAnchor="middle"
                  fill="#34D399"
                  fontSize="32"
                  fontWeight="900"
                  letterSpacing="0.06em"
                >
                  DDR5 RAM = 500x FASTER!
                </text>
              </g>
            </g>
          )}

          {/* =================================================================
              BEAT 2 (1108..1235): CENTRAL REDIS CUBE + 4 ILLUSTRATED SATELLITES
             ================================================================= */}
          {isBeat2 && (
            <g
              transform={`scale(${interpolate(beat2Enter, [0, 1], [0.86, 1])})`}
              style={{ transformOrigin: "520px 380px" }}
              opacity={beat2Enter}
            >
              <ellipse
                cx="520"
                cy="370"
                rx="320"
                ry="225"
                fill="none"
                stroke="#334155"
                strokeWidth="3"
                strokeDasharray="14 10"
              />

              {[
                {
                  title: "AUTH SESSIONS",
                  cx: 195,
                  cy: 175,
                  color: "#38BDF8",
                  kind: "phoneLock",
                },
                {
                  title: "LEADERBOARDS",
                  cx: 845,
                  cy: 175,
                  color: "#FBBF24",
                  kind: "trophy",
                },
                {
                  title: "LIVE FEEDS",
                  cx: 195,
                  cy: 565,
                  color: "#34D399",
                  kind: "feed",
                },
                {
                  title: "RATE LIMITER",
                  cx: 845,
                  cy: 565,
                  color: "#A78BFA",
                  kind: "shield",
                },
              ].map((node, i) => {
                const bob = Math.sin(globalFrame * 0.14 + i * 1.5) * 8;
                return (
                  <g key={node.title}>
                    <line
                      x1="520"
                      y1="370"
                      x2={node.cx}
                      y2={node.cy + bob}
                      stroke={node.color}
                      strokeWidth="4.5"
                      strokeDasharray="14 8"
                      strokeDashoffset={-globalFrame * 4.5}
                    />
                    <g transform={`translate(${node.cx}, ${node.cy + bob})`}>
                      <circle
                        r="78"
                        fill="#0F172A"
                        stroke={node.color}
                        strokeWidth="4.5"
                        filter="url(#act4Glow)"
                      />
                      {node.kind === "phoneLock" && (
                        <g>
                          <rect
                            x="-24"
                            y="-38"
                            width="48"
                            height="76"
                            rx="9"
                            fill="#1E293B"
                            stroke="#38BDF8"
                            strokeWidth="3"
                          />
                          <path
                            d="M -10 -4 L -10 -14 A 10 10 0 0 1 10 -14 L 10 -4"
                            fill="none"
                            stroke="#FEF08A"
                            strokeWidth="3.5"
                          />
                          <rect
                            x="-15"
                            y="-4"
                            width="30"
                            height="24"
                            rx="5"
                            fill="#FBBF24"
                          />
                        </g>
                      )}
                      {node.kind === "trophy" && (
                        <g>
                          <path
                            d="M -26 -28 L 26 -28 L 18 8 A 18 18 0 0 1 -18 8 Z"
                            fill="url(#act4SamosaGold)"
                            stroke="#FEF08A"
                            strokeWidth="2"
                          />
                          <path
                            d="M -26 -20 Q -42 -20 -36 -2 Q -30 8 -18 4"
                            fill="none"
                            stroke="#FBBF24"
                            strokeWidth="4"
                          />
                          <path
                            d="M 26 -20 Q 42 -20 36 -2 Q 30 8 18 4"
                            fill="none"
                            stroke="#FBBF24"
                            strokeWidth="4"
                          />
                          <rect
                            x="-6"
                            y="14"
                            width="12"
                            height="16"
                            fill="#F59E0B"
                          />
                          <rect
                            x="-22"
                            y="28"
                            width="44"
                            height="9"
                            rx="4"
                            fill="#FEF08A"
                          />
                        </g>
                      )}
                      {node.kind === "feed" && (
                        <g>
                          <rect
                            x="-32"
                            y="-28"
                            width="64"
                            height="56"
                            rx="8"
                            fill="#064E3B"
                            stroke="#34D399"
                            strokeWidth="2.5"
                          />
                          <circle cx="-16" cy="-10" r="8" fill="#34D399" />
                          <rect
                            x="-2"
                            y="-15"
                            width="24"
                            height="6"
                            rx="3"
                            fill="#A7F3D0"
                          />
                          <rect
                            x="-22"
                            y="8"
                            width="44"
                            height="10"
                            rx="5"
                            fill="#10B981"
                          />
                        </g>
                      )}
                      {node.kind === "shield" && (
                        <g>
                          <path
                            d="M 0 -36 L 30 -20 L 30 6 C 30 26, 0 38, 0 38 C 0 38, -30 26, -30 6 L -30 -20 Z"
                            fill="#4C1D95"
                            stroke="#C4B5FD"
                            strokeWidth="3"
                          />
                          <path
                            d="M -12 2 L -3 12 L 15 -8"
                            fill="none"
                            stroke="#FEF08A"
                            strokeWidth="5"
                            strokeLinecap="round"
                          />
                        </g>
                      )}
                      <text
                        x="0"
                        y="112"
                        textAnchor="middle"
                        fill="#FFFFFF"
                        fontSize="23"
                        fontWeight="900"
                        letterSpacing="0.06em"
                      >
                        {node.title}
                      </text>
                    </g>
                  </g>
                );
              })}

              {/* Central 3D Redis Cube Fortress */}
              <g transform={`translate(520, ${370 + floatWave})`}>
                <circle
                  r="145"
                  fill="#EF4444"
                  opacity="0.22"
                  filter="url(#act4Glow)"
                />
                {renderBeveledRedisCube(1.1)}
              </g>
            </g>
          )}

          {/* =================================================================
              BEAT 3 (1235..1409): SPEAKER CHARACTER + REDIS CUBE + ROCKET SHIP
             ================================================================= */}
          {isBeat3 && (
            <g
              transform={`scale(${interpolate(beat3Enter, [0, 1], [0.88, 1])})`}
              style={{ transformOrigin: "520px 380px" }}
              opacity={beat3Enter}
            >
              <line
                x1="230"
                y1="360"
                x2="820"
                y2="360"
                stroke="#EF4444"
                strokeWidth="5"
                strokeDasharray="16 10"
                strokeDashoffset={-globalFrame * 4}
              />

              {/* LEFT: Detailed Speaker Character with Developer Laptop */}
              <g transform="translate(205, 420)">
                <SpeakerCharacter
                  x={0}
                  y={0}
                  scale={1.32}
                  frame={globalFrame}
                  holdingLaptop={true}
                />
                <text
                  x="15"
                  y="115"
                  textAnchor="middle"
                  fill="#38BDF8"
                  fontSize="28"
                  fontWeight="900"
                  letterSpacing="0.06em"
                >
                  YOUR SKILLSET
                </text>
              </g>

              {/* CENTER: 3D Isometric Redis Cube Uniting Character & Rocket */}
              <g transform={`translate(535, ${355 + floatWave})`}>
                <circle
                  r="130"
                  fill="#EF4444"
                  opacity="0.24"
                  filter="url(#act4Glow)"
                />
                {renderBeveledRedisCube(0.96)}
                <text
                  x="0"
                  y="180"
                  textAnchor="middle"
                  fill="#FCA5A5"
                  fontSize="28"
                  fontWeight="900"
                  letterSpacing="0.1em"
                >
                  REDIS POWERED
                </text>
              </g>

              {/* RIGHT: Detailed Multi-Stage Rocket Ship (YOUR APP) */}
              <g transform={`translate(835, ${340 - floatWave})`}>
                <circle
                  r="135"
                  fill="#F59E0B"
                  opacity="0.16"
                  filter="url(#act4Glow)"
                />
                {/* Animated Multi-Layer Exhaust Flame */}
                <polygon
                  points="-24,78 0,148 24,78"
                  fill="#EF4444"
                  filter="url(#act4Glow)"
                />
                <polygon points="-14,78 0,122 14,78" fill="#FEF08A" />
                {/* Side Booster Fins */}
                <polygon
                  points="-42,28 -78,78 -34,68"
                  fill="#DC2626"
                  stroke="#FCA5A5"
                  strokeWidth="2"
                />
                <polygon
                  points="42,28 78,78 34,68"
                  fill="#DC2626"
                  stroke="#FCA5A5"
                  strokeWidth="2"
                />
                {/* Rocket Body */}
                <path
                  d="M 0 -105 C 46 -45, 46 35, 36 78 L -36 78 C -46 35, -46 -45, 0 -105 Z"
                  fill="#F8FAFC"
                  stroke="#38BDF8"
                  strokeWidth="4"
                />
                <path
                  d="M 0 -105 C 22 -72, 30 -50, 32 -36 L -32 -36 C -30 -50, -22 -72, 0 -105 Z"
                  fill="#EF4444"
                />
                <circle
                  cx="0"
                  cy="0"
                  r="20"
                  fill="#0284C7"
                  stroke="#BAE6FD"
                  strokeWidth="4.5"
                />
                <circle cx="-6" cy="-6" r="5" fill="#E0F2FE" />

                <text
                  x="0"
                  y="195"
                  textAnchor="middle"
                  fill="#34D399"
                  fontSize="28"
                  fontWeight="900"
                  letterSpacing="0.06em"
                >
                  10x FAST APP
                </text>
              </g>
            </g>
          )}

          {/* =================================================================
              BEAT 4 (1409..1610): DETAILED "CODE BAITHAK" GOLGAPPA & SAMOSA STALL
              + SPEAKER CHARACTER + REDIS CUBE + EXACT FRAME 1485 FOLLOW ARROW!
             ================================================================= */}
          {isBeat4 && (
            <g
              transform={`scale(${interpolate(beat4Enter, [0, 1], [0.92, 1])})`}
              style={{ transformOrigin: "520px 420px" }}
              opacity={beat4Enter}
            >
              {/* Ground Shadow */}
              <ellipse
                cx="500"
                cy="685"
                rx="460"
                ry="26"
                fill="rgba(0,0,0,0.55)"
              />

              {/* LEFT-CENTER: DETAILED "CODE BAITHAK" GOLGAPPA & SAMOSA STALL */}
              <g transform="translate(45, 130) scale(0.92)">
                {/* Wooden Corner Pillars */}
                <rect
                  x="32"
                  y="125"
                  width="18"
                  height="350"
                  rx="4"
                  fill="url(#act4WoodCart)"
                  stroke="#F59E0B"
                  strokeWidth="2"
                />
                <rect
                  x="490"
                  y="125"
                  width="18"
                  height="350"
                  rx="4"
                  fill="url(#act4WoodCart)"
                  stroke="#F59E0B"
                  strokeWidth="2"
                />

                {/* Illuminated Top Signboard: CODE BAITHAK */}
                <g transform="translate(55, 0)">
                  <rect
                    x="0"
                    y="0"
                    width="430"
                    height="68"
                    rx="16"
                    fill="url(#act4SignboardGrad)"
                    stroke="#FACC15"
                    strokeWidth="4"
                  />
                  {[16, 414].map((cx) =>
                    [16, 52].map((cy) => (
                      <circle
                        key={`${cx}-${cy}`}
                        cx={cx}
                        cy={cy}
                        r="5"
                        fill="#FDE047"
                      />
                    ))
                  )}
                  <text
                    x="215"
                    y="45"
                    textAnchor="middle"
                    fill="#FEF08A"
                    fontSize="33"
                    fontWeight="900"
                    letterSpacing="4"
                  >
                    CODE BAITHAK
                  </text>
                </g>

                {/* Striped Royal Canopy Awning */}
                <path
                  d="M -10 135 L 38 64 L 502 64 L 550 135 Z"
                  fill="#DC2626"
                  stroke="#FDE047"
                  strokeWidth="3.5"
                />
                {[50, 135, 220, 305, 390, 475].map((sx, i) => (
                  <polygon
                    key={i}
                    points={`${sx},64 ${sx + 38},64 ${sx + 48},135 ${sx - 8},135`}
                    fill="#FEF08A"
                  />
                ))}

                {/* Marigold Garland Scallops */}
                {[35, 125, 215, 305, 395, 485].map((gx, i) => (
                  <path
                    key={i}
                    d={`M ${gx - 35} 135 Q ${gx} 165 ${gx + 35} 135`}
                    fill="none"
                    stroke={i % 2 === 0 ? "#F59E0B" : "#FDE047"}
                    strokeWidth="8"
                    strokeDasharray="8 4"
                    strokeLinecap="round"
                  />
                ))}

                {/* Hanging Warm Tungsten Bulbs */}
                {[75, 185, 270, 355, 465].map((bx, i) => (
                  <g key={i} transform={`translate(${bx}, 135)`}>
                    <line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="24"
                      stroke="#E2E8F0"
                      strokeWidth="2"
                    />
                    <circle
                      cx="0"
                      cy="32"
                      r="14"
                      fill="#F59E0B"
                      opacity={bulbPulse * 0.35}
                    />
                    <circle
                      cx="0"
                      cy="32"
                      r="8"
                      fill="#FEF08A"
                      opacity={bulbPulse}
                    />
                  </g>
                ))}

                {/* Brass Golgappa Matka with Red Cloth & Overflowing Golgappe */}
                <g transform="translate(55, 225)">
                  <ellipse
                    cx="75"
                    cy="84"
                    rx="68"
                    ry="52"
                    fill="url(#act4BrassMatka)"
                    stroke="#FEF08A"
                    strokeWidth="3"
                  />
                  <path
                    d="M 22 52 Q 75 72 128 52 L 118 32 Q 75 46 32 32 Z"
                    fill="#DC2626"
                    stroke="#FCA5A5"
                    strokeWidth="2"
                  />
                  <ellipse
                    cx="75"
                    cy="28"
                    rx="42"
                    ry="12"
                    fill="url(#act4BrassMatka)"
                    stroke="#FEF08A"
                    strokeWidth="2.5"
                  />
                  <DetailedGolgappa x={48} y={18} r={18} />
                  <DetailedGolgappa x={75} y={10} r={20} />
                  <DetailedGolgappa x={102} y={18} r={18} />
                  <DetailedGolgappa x={62} y={24} r={17} />
                  <DetailedGolgappa x={88} y={24} r={17} />
                </g>

                {/* Glass Samosa Display Case with Steaming Pyramid of Samose */}
                <g transform="translate(290, 210)">
                  <rect
                    x="0"
                    y="15"
                    width="195"
                    height="135"
                    rx="12"
                    fill="rgba(15, 23, 42, 0.6)"
                    stroke="#FDE047"
                    strokeWidth="3"
                  />
                  <rect
                    x="8"
                    y="128"
                    width="179"
                    height="16"
                    rx="6"
                    fill="url(#act4BrassMatka)"
                  />
                  <DetailedSamosa x={48} y={96} scale={0.62} rotate={-6} />
                  <DetailedSamosa x={98} y={96} scale={0.62} rotate={0} />
                  <DetailedSamosa x={148} y={96} scale={0.62} rotate={6} />
                  <DetailedSamosa x={72} y={56} scale={0.64} rotate={-4} />
                  <DetailedSamosa x={124} y={56} scale={0.64} rotate={4} />
                  <path
                    d={`M 72 25 Q ${64 + steamWave * 0.5} 4 75 -14`}
                    stroke="#FEF08A"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </g>

                {/* Carved Wooden Cart Body */}
                <rect
                  x="12"
                  y="355"
                  width="516"
                  height="152"
                  rx="20"
                  fill="url(#act4WoodCart)"
                  stroke="#F59E0B"
                  strokeWidth="4.5"
                />
                <rect
                  x="36"
                  y="375"
                  width="468"
                  height="112"
                  rx="14"
                  fill="#0F172A"
                  stroke="#FDE047"
                  strokeWidth="2.5"
                />
                <DetailedSamosa x={88} y={428} scale={0.55} rotate={-8} />
                <DetailedGolgappa x={450} y={432} r={24} />
                <text
                  x="270"
                  y="424"
                  textAnchor="middle"
                  fill="#FEF08A"
                  fontSize="28"
                  fontWeight="900"
                  letterSpacing="2.5"
                >
                  GOLGAPPE &amp; SAMOSE
                </text>
                <text
                  x="270"
                  y="460"
                  textAnchor="middle"
                  fill="#38BDF8"
                  fontSize="18"
                  fontWeight="800"
                  letterSpacing="3"
                >
                  CODE BAITHAK SPECIAL
                </text>

                {/* Ornate 8-Spoke Cart Wheels */}
                {[115, 425].map((wx, idx) => (
                  <g key={idx} transform={`translate(${wx}, 520)`}>
                    <circle
                      r="46"
                      fill="#0F172A"
                      stroke="#F59E0B"
                      strokeWidth="7"
                    />
                    {[0, 45, 90, 135].map((ang) => (
                      <line
                        key={ang}
                        x1="-42"
                        y1="0"
                        x2="42"
                        y2="0"
                        stroke="#D97706"
                        strokeWidth="4"
                        transform={`rotate(${ang})`}
                      />
                    ))}
                    <circle
                      r="13"
                      fill="url(#act4BrassMatka)"
                      stroke="#FEF08A"
                      strokeWidth="2.5"
                    />
                  </g>
                ))}
              </g>

              {/* Detailed Speaker Character Holding Steaming Samosa Platter */}
              <SpeakerCharacter
                x={635}
                y={495}
                scale={1.25}
                frame={globalFrame}
                holdingSamosaPlate={true}
              />

              {/* 3D Isometric Redis Cube Beside Character */}
              <g transform={`translate(885, ${485 + floatWave})`}>
                <circle
                  r="110"
                  fill="#EF4444"
                  opacity="0.22"
                  filter="url(#act4Glow)"
                />
                {renderBeveledRedisCube(0.82)}
                <text
                  x="0"
                  y="142"
                  textAnchor="middle"
                  fill="#FCA5A5"
                  fontSize="22"
                  fontWeight="900"
                  letterSpacing="0.08em"
                >
                  REDIS CACHE
                </text>
              </g>

              {/* =============================================================
                  EXACT FRAME 1485 SYNCED "FOLLOW NOW" ARROW & CALLOUT BADGE
                  Points directly toward the Top-Right <FollowCard />!
                 ============================================================= */}
              {globalFrame >= 1485 && (
                <g
                  opacity={followArrowOpacity}
                  transform={`translate(765, 165) scale(${interpolate(
                    followSync,
                    [0, 1],
                    [0.6, 1]
                  )})`}
                >
                  {/* Glowing Pill Badge */}
                  <rect
                    x="-155"
                    y="28"
                    width="245"
                    height="56"
                    rx="28"
                    fill="#064E3B"
                    stroke="#34D399"
                    strokeWidth="3.5"
                    filter="url(#act4Glow)"
                  />
                  <text
                    x="-32"
                    y="64"
                    textAnchor="middle"
                    fill="#FEF08A"
                    fontSize="24"
                    fontWeight="900"
                    letterSpacing="0.08em"
                  >
                    FOLLOW NOW
                  </text>

                  {/* Animated Curved Neon/Gold Pointer Arrow Aimed at Top-Right FollowCard */}
                  <g
                    transform={`translate(${arrowOsc}, ${-arrowOsc * 0.8})`}
                    filter="url(#act4Glow)"
                  >
                    <path
                      d="M 45 22 Q 95 -25 125 -95"
                      fill="none"
                      stroke="#FEF08A"
                      strokeWidth="9"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 92 -78 L 127 -98 L 136 -58"
                      fill="none"
                      stroke="#34D399"
                      strokeWidth="9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              )}
            </g>
          )}
        </svg>
      </div>
    </div>
  );
};

export default Act4RedisRamAndOutro;
