import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export interface Act1ChaatShopProps {
  startFrame?: number;
  durationInFrames?: number;
}

/**
 * Reusable Artist-Grade Detailed Samosa SVG Group
 * Includes flaky golden pastry layers, bottom crimp ridges, crust blisters, and highlight sheen.
 */
const DetailedSamosa: React.FC<{
  x: number;
  y: number;
  scale?: number;
  rotate?: number;
}> = ({ x, y, scale = 1, rotate = 0 }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale}) rotate(${rotate})`}>
    {/* Drop shadow */}
    <ellipse cx="0" cy="48" rx="46" ry="12" fill="rgba(0,0,0,0.45)" />
    {/* Back pastry fold */}
    <path
      d="M 0 -52 L 50 36 Q 0 54 -50 36 Z"
      fill="url(#samosaGold)"
      stroke="#FEF08A"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    {/* Left 3D shaded facet */}
    <path
      d="M 0 -52 L -6 42 Q -32 42 -50 36 Z"
      fill="url(#samosaShadow)"
      opacity="0.75"
    />
    {/* Right sunlit facet */}
    <path
      d="M 0 -52 L -6 42 Q 24 44 50 36 Z"
      fill="url(#samosaHighlight)"
      opacity="0.65"
    />
    {/* Center seam fold ridge */}
    <path
      d="M 0 -52 Q -4 -5 -6 42"
      stroke="#FEF9C3"
      strokeWidth="2"
      fill="none"
      opacity="0.75"
    />
    {/* Bottom braided pastry crimp (Gujiya/Samosa pleat) */}
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
    {/* Crispy fried blisters & coriander/masala flecks */}
    <circle cx="-18" cy="4" r="3.2" fill="#B45309" opacity="0.65" />
    <circle cx="-26" cy="20" r="2.4" fill="#92400E" opacity="0.6" />
    <circle cx="14" cy="-6" r="3.5" fill="#D97706" opacity="0.65" />
    <circle cx="22" cy="14" r="2.8" fill="#B45309" opacity="0.65" />
    <circle cx="8" cy="22" r="2.2" fill="#15803D" opacity="0.7" />
    <circle cx="-12" cy="-16" r="2" fill="#15803D" opacity="0.7" />
  </g>
);

/**
 * Reusable Artist-Grade Crispy Filled Golgappa (Pani Puri)
 */
const DetailedGolgappa: React.FC<{
  x: number;
  y: number;
  r?: number;
}> = ({ x, y, r = 34 }) => (
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
      fill="url(#puriShellGrad)"
      stroke="#FEF08A"
      strokeWidth="2.2"
    />
    {/* Specular rim highlight */}
    <path
      d={`M ${-r * 0.65} ${-r * 0.35} A ${r * 0.8} ${r * 0.8} 0 0 1 ${
        r * 0.65
      } ${-r * 0.35}`}
      fill="none"
      stroke="#FFFBEB"
      strokeWidth="2"
      opacity="0.5"
    />
    {/* Cracked hollow top opening */}
    <ellipse
      cx="0"
      cy={-r * 0.16}
      rx={r * 0.58}
      ry={r * 0.36}
      fill="#451A03"
      stroke="#FDE68A"
      strokeWidth="2"
    />
    {/* Spiced Mint Pani + Aloo Chana + Boondi inside */}
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
    <circle cx={-r * 0.06} cy={-r * 0.06} r={r * 0.07} fill="#DC2626" />
  </g>
);

/**
 * Artist-Grade Speaker Character ("Code Baithak Creator")
 * Features his signature curved cap, gold-rimmed aviator sunglasses, shaped beard & mustache,
 * leaf-patterned shirt + chef apron, and articulated arms.
 */
const CreatorCharacter: React.FC<{
  x: number;
  y: number;
  scale?: number;
  frame: number;
  isCooking?: boolean;
}> = ({ x, y, scale = 1, frame, isCooking = false }) => {
  const breathe = Math.sin(frame / 8) * 2.5;
  const stirArm = isCooking ? Math.sin(frame / 3) * 14 : Math.sin(frame / 10) * 4;

  return (
    <g transform={`translate(${x}, ${y + breathe}) scale(${scale})`}>
      {/* Neck */}
      <rect x="-14" y="-66" width="28" height="24" rx="10" fill="#D99B66" />

      {/* Torso — Leaf-patterned light shirt + Saffron/Cream Shop Apron */}
      <path
        d="M -62 28 L -54 -42 Q -52 -56 -28 -58 L 28 -58 Q 52 -56 54 -42 L 62 28 Z"
        fill="#E2E8F0"
        stroke="#94A3B8"
        strokeWidth="2.5"
      />
      {/* Subtle botanical leaf motifs on shirt sleeves */}
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
      <polygon points="-24,-58 -6,-36 -30,-42" fill="#CBD5E1" stroke="#64748B" strokeWidth="1.5" />
      <polygon points="24,-58 6,-36 30,-42" fill="#CBD5E1" stroke="#64748B" strokeWidth="1.5" />

      {/* Code Baithak Chef Apron */}
      <path
        d="M -36 -40 L 36 -40 L 42 28 L -42 28 Z"
        fill="url(#apronGrad)"
        stroke="#FDE047"
        strokeWidth="2"
      />
      <rect x="-24" y="-16" width="48" height="22" rx="6" fill="#7C2D12" opacity="0.85" />
      <text
        x="0"
        y="-1"
        textAnchor="middle"
        fill="#FEF08A"
        fontSize="11"
        fontWeight="900"
        letterSpacing="1"
      >
        CB CHEF
      </text>

      {/* Left & Right Articulated Arms */}
      <path
        d={`M -52 -42 Q -78 -10 ${-64 + stirArm * 0.4} 18`}
        stroke="#E2E8F0"
        strokeWidth="18"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx={-64 + stirArm * 0.4} cy="20" r="9" fill="#D99B66" />

      <path
        d={`M 52 -42 Q 82 -12 ${68 + stirArm} ${isCooking ? -6 : 18}`}
        stroke="#E2E8F0"
        strokeWidth="18"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx={68 + stirArm} cy={isCooking ? -6 : 20} r="9" fill="#D99B66" />
      {/* Steel Ladle (Karchi) in hand when cooking */}
      {isCooking && (
        <g transform={`translate(${68 + stirArm}, -6) rotate(-25)`}>
          <line x1="0" y1="0" x2="36" y2="-28" stroke="#E2E8F0" strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="42" cy="-32" rx="12" ry="7" fill="#94A3B8" stroke="#F8FAFC" strokeWidth="1.5" />
        </g>
      )}

      {/* Ears */}
      <ellipse cx="-38" cy="-102" rx="7" ry="12" fill="#D99B66" stroke="#B47B48" strokeWidth="1.5" />
      <ellipse cx="38" cy="-102" rx="7" ry="12" fill="#D99B66" stroke="#B47B48" strokeWidth="1.5" />

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

      {/* Signature Curved Olive/Khaki Baseball Cap (worn high like in video) */}
      <path
        d="M -38 -122 Q -36 -166 0 -166 Q 36 -166 38 -122 Z"
        fill="#57534E"
        stroke="#D6D3D1"
        strokeWidth="2"
      />
      {/* Curved Cap Visor Brim with inner dark-brown lining */}
      <path
        d="M -38 -120 Q 0 -146 38 -120 Q 34 -136 0 -138 Q -34 -136 -38 -120 Z"
        fill="#292524"
        stroke="#F59E0B"
        strokeWidth="2"
      />

      {/* Expressive Eyebrows */}
      <path d="M -26 -116 Q -15 -121 -6 -116" stroke="#111827" strokeWidth="3.2" fill="none" strokeLinecap="round" />
      <path d="M 6 -116 Q 15 -121 26 -116" stroke="#111827" strokeWidth="3.2" fill="none" strokeLinecap="round" />

      {/* Signature Gold-Rimmed Aviator Sunglasses */}
      <g transform="translate(0, -104)">
        {/* Left Tear-Drop Aviator Lens */}
        <path
          d="M -32 -6 L -6 -6 Q -4 10 -16 14 Q -30 14 -32 -6 Z"
          fill="url(#aviatorLens)"
          stroke="#FACC15"
          strokeWidth="2.5"
        />
        {/* Right Tear-Drop Aviator Lens */}
        <path
          d="M 6 -6 L 32 -6 Q 30 14 16 14 Q 4 10 6 -6 Z"
          fill="url(#aviatorLens)"
          stroke="#FACC15"
          strokeWidth="2.5"
        />
        {/* Double Gold Aviator Nose Bridge */}
        <line x1="-6" y1="-5" x2="6" y2="-5" stroke="#FACC15" strokeWidth="2.2" />
        <line x1="-5" y1="-1" x2="5" y2="-1" stroke="#FACC15" strokeWidth="1.8" />
        {/* Lens Specular Sheen */}
        <line x1="-26" y1="-2" x2="-18" y2="8" stroke="#FEF08A" strokeWidth="2" opacity="0.6" strokeLinecap="round" />
        <line x1="12" y1="-2" x2="20" y2="8" stroke="#FEF08A" strokeWidth="2" opacity="0.6" strokeLinecap="round" />
      </g>

      {/* Nose */}
      <path d="M 0 -104 L -3 -90 L 3 -88" stroke="#B47B48" strokeWidth="2.2" fill="none" strokeLinecap="round" />

      {/* Full Shaped Beard & Mustache */}
      <path
        d="M -35 -98 Q -34 -64 0 -60 Q 34 -64 35 -98 L 28 -96 Q 24 -74 0 -72 Q -24 -74 -28 -96 Z"
        fill="#111827"
      />
      {/* Mustache */}
      <path
        d="M -18 -82 Q 0 -90 18 -82 Q 12 -76 0 -80 Q -12 -76 -18 -82 Z"
        fill="#111827"
      />
      {/* Mouth */}
      <path
        d="M -9 -78 Q 0 -73 9 -78"
        stroke="#F8FAFC"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
    </g>
  );
};

export const Act1ChaatShop: React.FC<Act1ChaatShopProps> = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Beat 1: 0..88 (Hero Samosa & Golgappa Platter)
  const beat1Enter = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 110 },
  });
  const beat1Opacity = interpolate(frame, [78, 92], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Beat 2..4: 89..354 (Detailed Code Baithak Golgappa & Samosa Stall)
  const stallEnter = spring({
    frame: Math.max(0, frame - 86),
    fps,
    config: { damping: 15, stiffness: 110 },
  });
  const stallOpacity = interpolate(frame, [84, 96], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Beat 3: Customers arrive at frame 173
  const customerEnter = spring({
    frame: Math.max(0, frame - 173),
    fps,
    config: { damping: 14, stiffness: 120 },
  });
  const bubblePop = spring({
    frame: Math.max(0, frame - 190),
    fps,
    config: { damping: 12, stiffness: 150 },
  });
  const bubbleFadeOut = interpolate(frame, [285, 298], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Beat 4: Creator walks from Front Stall to Back Kitchen Stove at frame 289
  const goBack = spring({
    frame: Math.max(0, frame - 289),
    fps,
    config: { damping: 15, stiffness: 90 },
  });

  const steamWave1 = Math.sin(frame / 6) * 10;
  const steamWave2 = Math.sin(frame / 6 + 1.8) * 10;
  const steamWave3 = Math.sin(frame / 6 + 3.4) * 10;
  const bulbGlow = 0.78 + 0.22 * Math.sin(frame / 4);

  let mainTitle = "CRISPY GOLGAPPE & GARAM SAMOSE";
  let subTitle = "CHATORI JANTA SPECIAL";

  if (frame >= 289) {
    mainTitle = "MAKING GOLGAPPE IN BACK...";
    subTitle = "COUNTER LEFT UNATTENDED WHILE PREPPING!";
  } else if (frame >= 173) {
    mainTitle = '"BHAIYA! GOLGAPPE KHILA DO!"';
    subTitle = "YOU & DOST ARRIVE AT CODE BAITHAK STALL";
  } else if (frame >= 89) {
    mainTitle = "CODE BAITHAK CHAAT DARBAR";
    subTitle = "FRESH GOLGAPPE MATKA & GARAM SAMOSE";
  }

  const keeperX = interpolate(goBack, [0, 1], [540, 835]);
  const keeperY = interpolate(goBack, [0, 1], [420, 355]);
  const keeperScale = interpolate(goBack, [0, 1], [1.05, 0.88]);

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
      {/* Studio Lighting & Shared Artistic SVG Gradients */}
      <svg
        width={1080}
        height={960}
        viewBox="0 0 1080 960"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <defs>
          <radialGradient id="act1WarmGlow" cx="50%" cy="54%" r="58%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#EA580C" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0B0F19" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="samosaGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="45%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="samosaShadow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>
          <linearGradient id="samosaHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFBEB" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <linearGradient id="puriShellGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FEF3C7" />
            <stop offset="55%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#92400E" />
          </linearGradient>
          <linearGradient id="brassMatka" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="45%" stopColor="#F59E0B" />
            <stop offset="80%" stopColor="#B45309" />
            <stop offset="100%" stopColor="#451A03" />
          </linearGradient>
          <linearGradient id="plateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="50%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="woodCartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9A3412" />
            <stop offset="50%" stopColor="#7C2D12" />
            <stop offset="100%" stopColor="#431407" />
          </linearGradient>
          <linearGradient id="apronGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EA580C" />
            <stop offset="100%" stopColor="#9A3412" />
          </linearGradient>
          <linearGradient id="aviatorLens" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#451A03" />
            <stop offset="50%" stopColor="#78350F" />
            <stop offset="100%" stopColor="#1C1917" />
          </linearGradient>
          <linearGradient id="signboardGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E1B4B" />
            <stop offset="50%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#1E1B4B" />
          </linearGradient>
        </defs>
        <rect width="1080" height="960" fill="#0B0F19" />
        <rect width="1080" height="960" fill="url(#act1WarmGlow)" />
      </svg>

      {/* CLEAN BOLD HEADER */}
      <div
        style={{
          position: "absolute",
          top: 42,
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
            fontSize: 19,
            fontWeight: 800,
            color: frame >= 289 ? "#F87171" : "#FBBF24",
            letterSpacing: "0.1em",
          }}
        >
          {subTitle}
        </div>
      </div>

      {/* =====================================================================
          BEAT 1 (Frames 0..88): HERO SAMOSA & GOLGAPPE PLATTER
         ===================================================================== */}
      {beat1Opacity > 0.01 && (
        <div
          style={{
            position: "absolute",
            top: 170,
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            opacity: beat1Opacity,
            transform: `scale(${interpolate(beat1Enter, [0, 1], [0.85, 1])})`,
            zIndex: 10,
          }}
        >
          <svg width={900} height={660} viewBox="0 0 900 660">
            {/* Brass & Carved Platter */}
            <ellipse
              cx="450"
              cy="410"
              rx="375"
              ry="155"
              fill="#1E293B"
              stroke="#F59E0B"
              strokeWidth="5"
            />
            <ellipse
              cx="450"
              cy="410"
              rx="348"
              ry="136"
              fill="url(#plateGrad)"
              stroke="#FDE047"
              strokeWidth="2"
              strokeDasharray="12 8"
            />
            {/* Fresh Green Banana Leaf Liner */}
            <ellipse
              cx="450"
              cy="408"
              rx="312"
              ry="114"
              fill="#065F46"
              opacity="0.85"
            />
            <path
              d="M 155 408 Q 450 392 745 408"
              stroke="#34D399"
              strokeWidth="2.5"
              opacity="0.55"
              fill="none"
            />

            {/* LEFT: TRIO OF ARTIST-GRADE FLAKY GOLDEN SAMOSE + CHUTNEY BOWLS */}
            <DetailedSamosa x={245} y={325} scale={1.18} rotate={-10} />
            <DetailedSamosa x={345} y={318} scale={1.15} rotate={8} />
            <DetailedSamosa x={295} y={365} scale={1.32} rotate={-2} />

            {/* Red Imli & Green Pudina Chutney Katoris */}
            <g transform="translate(185, 425)">
              <ellipse
                cx="42"
                cy="24"
                rx="38"
                ry="18"
                fill="#334155"
                stroke="#FDE047"
                strokeWidth="2.2"
              />
              <ellipse cx="42" cy="21" rx="31" ry="13" fill="#DC2626" />
              <path d="M 26 19 Q 42 14 58 19" stroke="#FCA5A5" strokeWidth="2" fill="none" />

              <ellipse
                cx="128"
                cy="28"
                rx="38"
                ry="18"
                fill="#334155"
                stroke="#FDE047"
                strokeWidth="2.2"
              />
              <ellipse cx="128" cy="25" rx="31" ry="13" fill="#16A34A" />
              <path d="M 112 23 Q 128 18 144 23" stroke="#86EFAC" strokeWidth="2" fill="none" />
            </g>

            {/* RIGHT: RING OF 5 CRISPY GOLGAPPE AROUND CLAY MATKA OF SPICED PANI */}
            <g transform="translate(555, 315)">
              {/* Clay Kulhad / Matka of Teekha Pudina Pani */}
              <path
                d="M -38 -15 L 38 -15 L 28 66 Q 0 80 -28 66 Z"
                fill="#9A3412"
                stroke="#FDBA74"
                strokeWidth="2.5"
              />
              <ellipse
                cx="0"
                cy="-15"
                rx="38"
                ry="14"
                fill="#064E3B"
                stroke="#FDBA74"
                strokeWidth="2.5"
              />
              <ellipse cx="0" cy="-15" rx="32" ry="10" fill="#10B981" />
              <circle cx="-12" cy="-16" r="3.5" fill="#FDE047" />
              <circle cx="4" cy="-13" r="3.2" fill="#FDE047" />
              <circle cx="15" cy="-17" r="3.5" fill="#FDE047" />

              {/* 5 Detailed Filled Golgappe */}
              <DetailedGolgappa x={-82} y={24} r={34} />
              <DetailedGolgappa x={-52} y={88} r={36} />
              <DetailedGolgappa x={28} y={96} r={36} />
              <DetailedGolgappa x={92} y={64} r={35} />
              <DetailedGolgappa x={78} y={-2} r={33} />
            </g>

            {/* RISING STEAM CURLS */}
            <g
              stroke="#FEF08A"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              opacity="0.82"
            >
              <path
                d={`M 265 245 C ${255 + steamWave1} 190, ${
                  285 - steamWave1
                } 135, ${265 + steamWave1 * 0.6} 75`}
              />
              <path
                d={`M 325 228 C ${315 + steamWave2} 175, ${
                  345 - steamWave2
                } 120, ${325 + steamWave2 * 0.6} 62`}
                opacity="0.65"
              />
              <path
                d={`M 555 240 C ${545 + steamWave3} 185, ${
                  575 - steamWave3
                } 130, ${555 + steamWave3 * 0.6} 78`}
              />
            </g>
          </svg>
        </div>
      )}

      {/* =====================================================================
          BEATS 2..4 (Frames 89..354): ARTIST-GRADE "CODE BAITHAK" CHAAT STALL
         ===================================================================== */}
      {stallOpacity > 0.01 && (
        <div
          style={{
            position: "absolute",
            top: 155,
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            opacity: stallOpacity,
            transform: `scale(${interpolate(stallEnter, [0, 1], [0.9, 1])})`,
            zIndex: 12,
          }}
        >
          <svg width={1040} height={740} viewBox="0 0 1040 740">
            {/* Ground Shadow */}
            <ellipse
              cx="520"
              cy="655"
              rx="450"
              ry="28"
              fill="rgba(0,0,0,0.55)"
            />

            {/* BACK PREPARATION STOVE STATION (Appears on right when Creator walks back at frame 289) */}
            {frame >= 280 && (
              <g
                opacity={interpolate(frame, [285, 305], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                })}
                transform="translate(755, 290)"
              >
                {/* Back Prep Counter */}
                <rect
                  x="0"
                  y="145"
                  width="225"
                  height="145"
                  rx="16"
                  fill="url(#woodCartGrad)"
                  stroke="#F87171"
                  strokeWidth="3.5"
                />
                {/* Glowing Gas Burner + Brass Golgappa Pani Cauldron */}
                <ellipse cx="112" cy="142" rx="48" ry="12" fill="#EF4444" />
                <ellipse
                  cx="112"
                  cy="115"
                  rx="64"
                  ry="34"
                  fill="url(#brassMatka)"
                  stroke="#FEF08A"
                  strokeWidth="2.5"
                />
                <ellipse cx="112" cy="96" rx="48" ry="14" fill="#10B981" />
                {/* Steam rising from back stove */}
                <path
                  d={`M 95 80 Q ${85 + steamWave1} 45 100 15`}
                  stroke="#FEF08A"
                  strokeWidth="3.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d={`M 128 80 Q ${138 - steamWave2} 45 122 15`}
                  stroke="#FEF08A"
                  strokeWidth="3.5"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Ticking Analog Clock */}
                <g transform="translate(112, -15)">
                  <circle
                    cx="0"
                    cy="0"
                    r="34"
                    fill="#450A0A"
                    stroke="#F87171"
                    strokeWidth="3.5"
                  />
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="-20"
                    stroke="#FECACA"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    transform={`rotate(${(frame - 289) * 8})`}
                  />
                  <line
                    x1="0"
                    y1="0"
                    x2="15"
                    y2="0"
                    stroke="#F87171"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </g>
                <text
                  x="112"
                  y="205"
                  textAnchor="middle"
                  fill="#FECACA"
                  fontSize="19"
                  fontWeight="900"
                >
                  BACK KITCHEN
                </text>
                <text
                  x="112"
                  y="232"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="17"
                  fontWeight="800"
                >
                  MAKING GOLGAPPE...
                </text>
              </g>
            )}

            {/* SPEAKER / CREATOR CHARACTER (Cap, Gold Aviators, Beard, Apron) */}
            <CreatorCharacter
              x={keeperX}
              y={keeperY}
              scale={keeperScale}
              frame={frame}
              isCooking={frame >= 295}
            />

            {/* ===============================================================
                MAIN "CODE BAITHAK" CHAAT & SAMOSA STALL (RICH ARTISTIC DETAIL)
               =============================================================== */}
            <g transform="translate(260, 75)">
              {/* Carved Wooden Corner Pillars */}
              <rect
                x="32"
                y="125"
                width="18"
                height="350"
                rx="4"
                fill="url(#woodCartGrad)"
                stroke="#F59E0B"
                strokeWidth="2"
              />
              <rect
                x="490"
                y="125"
                width="18"
                height="350"
                rx="4"
                fill="url(#woodCartGrad)"
                stroke="#F59E0B"
                strokeWidth="2"
              />

              {/* TOP ILLUMINATED MARQUEE SIGNBOARD: "CODE BAITHAK" */}
              <g transform="translate(55, 0)">
                <rect
                  x="0"
                  y="0"
                  width="430"
                  height="68"
                  rx="16"
                  fill="url(#signboardGrad)"
                  stroke="#FACC15"
                  strokeWidth="4"
                />
                {/* Marquee Corner Studs */}
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

              {/* Striped Royal Canopy Awning with Scalloped Valance */}
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
              {/* Hanging Marigold Garland (Genda Phool Scallops) */}
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

              {/* Warm Hanging Tungsten Fairy Bulbs */}
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
                    opacity={bulbGlow * 0.35}
                  />
                  <circle
                    cx="0"
                    cy="32"
                    r="8"
                    fill="#FEF08A"
                    opacity={bulbGlow}
                  />
                </g>
              ))}

              {/* LEFT STATION: TRADITIONAL BRASS GOLGAPPA MATKA + PANI HANDIS */}
              <g transform="translate(55, 225)">
                {/* Brass Matka Body */}
                <ellipse
                  cx="75"
                  cy="84"
                  rx="68"
                  ry="52"
                  fill="url(#brassMatka)"
                  stroke="#FEF08A"
                  strokeWidth="3"
                />
                {/* Decorative Red Cloth ("Laal Kapda") wrapped around Matka neck */}
                <path
                  d="M 22 52 Q 75 72 128 52 L 118 32 Q 75 46 32 32 Z"
                  fill="#DC2626"
                  stroke="#FCA5A5"
                  strokeWidth="2"
                />
                {/* Matka Neck Rim */}
                <ellipse
                  cx="75"
                  cy="28"
                  rx="42"
                  ry="12"
                  fill="url(#brassMatka)"
                  stroke="#FEF08A"
                  strokeWidth="2.5"
                />
                {/* Crispy Golgappe Mound overflowing top of Matka */}
                <DetailedGolgappa x={48} y={18} r={18} />
                <DetailedGolgappa x={75} y={10} r={20} />
                <DetailedGolgappa x={102} y={18} r={18} />
                <DetailedGolgappa x={62} y={24} r={17} />
                <DetailedGolgappa x={88} y={24} r={17} />

                {/* Teekha & Meetha Pani Clay Handis beside Matka */}
                <g transform="translate(152, 68)">
                  <ellipse
                    cx="26"
                    cy="32"
                    rx="26"
                    ry="22"
                    fill="#065F46"
                    stroke="#34D399"
                    strokeWidth="2.5"
                  />
                  <ellipse cx="26" cy="18" rx="20" ry="8" fill="#10B981" />
                  <line
                    x1="26"
                    y1="18"
                    x2="40"
                    y2="-14"
                    stroke="#E2E8F0"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </g>
              </g>

              {/* RIGHT STATION: GLASS DISPLAY CASE & STEAMING PYRAMID OF DETAILED SAMOSE */}
              <g transform="translate(290, 210)">
                {/* Glass Display Box Frame */}
                <rect
                  x="0"
                  y="15"
                  width="195"
                  height="135"
                  rx="12"
                  fill="rgba(15, 23, 42, 0.55)"
                  stroke="#FDE047"
                  strokeWidth="3"
                />
                {/* Bottom Brass Warming Tray */}
                <rect
                  x="8"
                  y="128"
                  width="179"
                  height="16"
                  rx="6"
                  fill="url(#brassMatka)"
                />
                {/* 5 Detailed Flaky Golden Samose Stacked in Pyramid */}
                <DetailedSamosa x={48} y={96} scale={0.62} rotate={-6} />
                <DetailedSamosa x={98} y={96} scale={0.62} rotate={0} />
                <DetailedSamosa x={148} y={96} scale={0.62} rotate={6} />
                <DetailedSamosa x={72} y={56} scale={0.64} rotate={-4} />
                <DetailedSamosa x={124} y={56} scale={0.64} rotate={4} />

                {/* Waving Steam inside Samosa Showcase */}
                <path
                  d={`M 72 25 Q ${64 + steamWave1 * 0.5} 4 75 -14`}
                  stroke="#FEF08A"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.75"
                />
                <path
                  d={`M 124 25 Q ${132 - steamWave2 * 0.5} 4 120 -14`}
                  stroke="#FEF08A"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.75"
                />
              </g>

              {/* CARVED WOODEN CART BODY WITHROYAL INDIAN BRASS CORNERS */}
              <rect
                x="12"
                y="355"
                width="516"
                height="152"
                rx="20"
                fill="url(#woodCartGrad)"
                stroke="#F59E0B"
                strokeWidth="4.5"
              />
              {/* Inner Carved Sign Panel */}
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
              {/* Left & Right Samosa/Golgappa Medallions on Cart Front */}
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
                ★ CODE BAITHAK SPECIAL ★
              </text>

              {/* Ornate 8-Spoke Wooden Cart Wheels */}
              {[115, 425].map((wx, idx) => (
                <g key={idx} transform={`translate(${wx}, 520)`}>
                  <circle
                    cx="0"
                    cy="0"
                    r="46"
                    fill="#0F172A"
                    stroke="#F59E0B"
                    strokeWidth="7"
                  />
                  <circle
                    cx="0"
                    cy="0"
                    r="36"
                    fill="none"
                    stroke="#B45309"
                    strokeWidth="2"
                    strokeDasharray="6 6"
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
                    cx="0"
                    cy="0"
                    r="13"
                    fill="url(#brassMatka)"
                    stroke="#FEF08A"
                    strokeWidth="2.5"
                  />
                </g>
              ))}
            </g>

            {/* DETAILED CUSTOMERS (YOU & DOST) ARRIVING AT FRAME 173 */}
            {frame >= 170 && (
              <g
                transform={`translate(${interpolate(
                  customerEnter,
                  [0, 1],
                  [-280, 28]
                )}, 335)`}
              >
                {/* DOST (Left Customer — Detailed Hair, Jacket, Collar, Shoes) */}
                <g transform="translate(0, 35)">
                  <path
                    d="M 10 235 L 18 118 Q 20 98 54 98 Q 88 98 90 118 L 98 235 Z"
                    fill="#4F46E5"
                    stroke="#A5B4FC"
                    strokeWidth="3"
                  />
                  {/* Jacket Collar & Stripe */}
                  <polygon points="36,98 54,126 72,98" fill="#E0E7FF" />
                  <line x1="54" y1="126" x2="54" y2="235" stroke="#818CF8" strokeWidth="3" />
                  {/* Neck & Head */}
                  <rect x="44" y="80" width="20" height="22" rx="6" fill="#E0A36E" />
                  <circle
                    cx="54"
                    cy="58"
                    r="30"
                    fill="#E0A36E"
                    stroke="#FDE68A"
                    strokeWidth="2"
                  />
                  {/* Styled Hair */}
                  <path
                    d="M 24 52 Q 28 20 56 22 Q 84 22 84 52 Q 70 36 54 38 Q 36 36 24 52 Z"
                    fill="#1E293B"
                  />
                  {/* Eyes, Brows & Smile */}
                  <path d="M 38 48 Q 44 44 49 48" stroke="#1E293B" strokeWidth="2.5" fill="none" />
                  <path d="M 59 48 Q 64 44 70 48" stroke="#1E293B" strokeWidth="2.5" fill="none" />
                  <circle cx="44" cy="55" r="3.5" fill="#0F172A" />
                  <circle cx="64" cy="55" r="3.5" fill="#0F172A" />
                  <path
                    d="M 44 68 Q 54 77 64 68"
                    stroke="#0F172A"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <text
                    x="54"
                    y="265"
                    textAnchor="middle"
                    fill="#C7D2FE"
                    fontSize="18"
                    fontWeight="900"
                    letterSpacing="1.5"
                  >
                    DOST
                  </text>
                </g>

                {/* YOU (Right Customer — Detailed Hair, Emerald Jacket, Waving Arm) */}
                <g transform="translate(112, 12)">
                  <path
                    d="M 10 258 L 18 122 Q 22 100 58 100 Q 94 100 98 122 L 106 258 Z"
                    fill="#059669"
                    stroke="#6EE7B7"
                    strokeWidth="3"
                  />
                  {/* Hoodie/Collar V-Neck */}
                  <polygon points="38,100 58,132 78,100" fill="#D1FAE5" />
                  {/* Articulated Arm Waving at Bhaiya */}
                  <path
                    d="M 92 128 Q 128 115 148 88"
                    stroke="#059669"
                    strokeWidth="18"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <circle cx="150" cy="86" r="10" fill="#E0A36E" />
                  {/* Neck & Head */}
                  <rect x="48" y="82" width="20" height="22" rx="6" fill="#E0A36E" />
                  <circle
                    cx="58"
                    cy="58"
                    r="32"
                    fill="#E0A36E"
                    stroke="#FDE68A"
                    strokeWidth="2"
                  />
                  {/* Spiky/Quiff Hair */}
                  <path
                    d="M 26 52 Q 28 16 62 16 Q 92 18 90 52 Q 76 34 58 36 Q 40 34 26 52 Z"
                    fill="#0F172A"
                  />
                  {/* Expressive Face */}
                  <path d="M 42 46 Q 48 42 53 46" stroke="#0F172A" strokeWidth="2.8" fill="none" />
                  <path d="M 63 46 Q 68 42 74 46" stroke="#0F172A" strokeWidth="2.8" fill="none" />
                  <circle cx="47" cy="54" r="3.8" fill="#0F172A" />
                  <circle cx="69" cy="54" r="3.8" fill="#0F172A" />
                  <path
                    d="M 46 68 Q 58 78 70 68"
                    stroke="#0F172A"
                    strokeWidth="3.2"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <text
                    x="58"
                    y="288"
                    textAnchor="middle"
                    fill="#6EE7B7"
                    fontSize="18"
                    fontWeight="900"
                    letterSpacing="1.5"
                  >
                    YOU
                  </text>
                </g>

                {/* Clean Callout Bubble */}
                {frame >= 188 && bubbleFadeOut > 0.02 && (
                  <g
                    opacity={bubbleFadeOut}
                    transform={`translate(15, -95) scale(${interpolate(
                      bubblePop,
                      [0, 1],
                      [0.7, 1]
                    )})`}
                  >
                    <rect
                      x="0"
                      y="0"
                      width="345"
                      height="76"
                      rx="22"
                      fill="#0F172A"
                      stroke="#FDE047"
                      strokeWidth="3.5"
                    />
                    <polygon
                      points="145,76 168,76 154,98"
                      fill="#0F172A"
                      stroke="#FDE047"
                      strokeWidth="3.5"
                    />
                    <text
                      x="172"
                      y="47"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="24"
                      fontWeight="900"
                    >
                      &ldquo;Bhaiya! Golgappe do!&rdquo;
                    </text>
                  </g>
                )}
              </g>
            )}
          </svg>
        </div>
      )}
    </div>
  );
};

export default Act1ChaatShop;
