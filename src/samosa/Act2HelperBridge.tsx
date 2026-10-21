import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export interface Act2HelperBridgeProps {
  startFrame?: number;
  durationInFrames?: number;
}

/**
 * Reusable Artist-Grade Detailed Golden Samosa SVG Group
 * Features 3D dual pastry facets, crimped crust edge, flaky blister spots, and highlight seam.
 */
const DetailedSamosa: React.FC<{
  x?: number;
  y?: number;
  scale?: number;
  rotate?: number;
}> = ({ x = 0, y = 0, scale = 1, rotate = 0 }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale}) rotate(${rotate})`}>
    {/* Drop shadow */}
    <ellipse cx="0" cy="20" rx="26" ry="7" fill="#000000" opacity="0.38" />
    {/* Back/Right Pastry Facet (Darker Roasted Gold) */}
    <path
      d="M 2 -24 L 26 15 Q 14 21 0 18 Z"
      fill="url(#samosaSideGrad)"
      stroke="#78350F"
      strokeWidth="1.2"
    />
    {/* Front/Left Main Pastry Facet (Rich Golden Crust) */}
    <path
      d="M 2 -24 L 4 18 Q -12 20 -24 14 Z"
      fill="url(#samosaFrontGrad)"
      stroke="#FEF08A"
      strokeWidth="1.4"
    />
    {/* Central Fold Seam Highlight */}
    <path
      d="M 2 -23 Q 1 -2 3 17"
      fill="none"
      stroke="#FEF9C3"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.8"
    />
    {/* Crimped Bottom Pastry Ribbon (Pleated Dough Edge) */}
    <path
      d="M -24 14 Q -18 21 -12 16 Q -6 22 0 17 Q 6 22 12 17 Q 19 22 26 15"
      fill="none"
      stroke="#D97706"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M -23 14 Q -18 19 -12 15 Q -6 20 0 16 Q 6 20 12 16 Q 19 20 25 14"
      fill="none"
      stroke="#FEF08A"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Flaky Fried Blister Texture & Coriander Flecks */}
    <circle cx="-8" cy="-2" r="2.2" fill="#B45309" opacity="0.65" />
    <circle cx="-13" cy="6" r="1.8" fill="#92400E" opacity="0.6" />
    <circle cx="-4" cy="8" r="2.5" fill="#B45309" opacity="0.55" />
    <circle cx="11" cy="4" r="2" fill="#78350F" opacity="0.65" />
    <circle cx="-6" cy="2" r="1.3" fill="#15803D" opacity="0.85" />
    <circle cx="8" cy="-1" r="1.2" fill="#16A34A" opacity="0.85" />
  </g>
);

export const Act2HelperBridge: React.FC<Act2HelperBridgeProps> = ({
  startFrame = 354,
}) => {
  const rawFrame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Support both global frame (354..598) and Sequence-scoped local frame (0..244)
  const frame = rawFrame < startFrame ? rawFrame + startFrame : rawFrame;
  const localFrame = Math.max(0, frame - 354);

  const isBeat2 = frame >= 500;

  // Beat 1 (354..500) smooth entrance & cross-fade exit
  const beat1Enter = spring({
    frame: localFrame,
    fps,
    config: { damping: 14, stiffness: 105 },
  });
  const beat1Opacity = interpolate(frame, [492, 506], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Beat 2 (500..598) smooth entrance
  const beat2Enter = spring({
    frame: Math.max(0, frame - 500),
    fps,
    config: { damping: 14, stiffness: 105 },
  });
  const beat2Opacity = interpolate(frame, [496, 510], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Continuous organic motion variables
  const steamWave1 = Math.sin(frame / 5.5) * 9;
  const steamWave2 = Math.cos(frame / 6.2) * 9;
  const bulbGlow = 0.72 + 0.28 * Math.sin(frame / 4);
  const helperBounce = Math.sin(frame / 4.5) * 4.5;
  const ownerStir = Math.sin(frame / 7) * 8;
  const clockHandAngle = (frame * 3.5) % 360;

  // Smooth Samosa Platter handoff trajectory from Chhotu (x=470, y=340) to Customer (x=210, y=350)
  const serveCycle = (localFrame % 48) / 48;
  const serveProgress = interpolate(serveCycle, [0, 0.78, 1], [0, 1, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const plateX = interpolate(serveProgress, [0, 1], [462, 224]);
  const plateY =
    interpolate(serveProgress, [0, 1], [348, 344]) -
    Math.sin(serveProgress * Math.PI) * 78;

  const badgeSpring = spring({
    frame: Math.max(0, localFrame - 14),
    fps,
    config: { damping: 12, stiffness: 135 },
  });

  return (
    <div
      style={{
        position: "relative",
        width: 1080,
        height: 960,
        overflow: "hidden",
        backgroundColor: "#0B0F19",
        fontFamily: "'Inter', 'Segoe UI', Roboto, sans-serif",
        color: "#F8FAFC",
        userSelect: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Shared Master SVG Defs: Multi-Stop Gradients, Lighting & Material Shaders */}
      <svg
        width={1080}
        height={960}
        viewBox="0 0 1080 960"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <defs>
          <radialGradient id="studioWarmBackdrop" cx="50%" cy="54%" r="56%">
            <stop
              offset="0%"
              stopColor={isBeat2 ? "#F59E0B" : "#10B981"}
              stopOpacity="0.22"
            />
            <stop offset="48%" stopColor="#D97706" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0B0F19" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="samosaFrontGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="45%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>

          <linearGradient id="samosaSideGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="60%" stopColor="#B45309" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>

          <linearGradient id="brassVesselGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEF9C3" />
            <stop offset="30%" stopColor="#FACC15" />
            <stop offset="70%" stopColor="#CA8A04" />
            <stop offset="100%" stopColor="#713F12" />
          </linearGradient>

          <linearGradient id="royalWoodGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9A3412" />
            <stop offset="45%" stopColor="#7C2D12" />
            <stop offset="100%" stopColor="#3B0764" />
          </linearGradient>

          <linearGradient id="carvedTeakGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#92400E" />
            <stop offset="50%" stopColor="#78350F" />
            <stop offset="100%" stopColor="#451A03" />
          </linearGradient>

          <linearGradient id="signboardGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E1B4B" />
            <stop offset="50%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#1E1B4B" />
          </linearGradient>

          <linearGradient id="skinToneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FED7AA" />
            <stop offset="65%" stopColor="#FDBA74" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>

          <linearGradient id="aviatorLensGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="55%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>

          <linearGradient id="emeraldKurtaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="50%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#065F46" />
          </linearGradient>

          <linearGradient id="customerJacketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>

          <linearGradient id="serverRackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="50%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
        </defs>

        <rect width="1080" height="960" fill="#0B0F19" />
        <rect width="1080" height="960" fill="url(#studioWarmBackdrop)" />
      </svg>

      {/* =====================================================================
          BEAT 1 (Frames 354..500): "SMART HELPER = FAST SERVE"
          Detailed CODE BAITHAK Stall + Speaker Owner + Chhotu + Customer
         ===================================================================== */}
      {beat1Opacity > 0.01 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            opacity: beat1Opacity,
            transform: `scale(${interpolate(beat1Enter, [0, 1], [0.92, 1])})`,
            zIndex: 10,
          }}
        >
          {/* Centered Title & Subtitle */}
          <div
            style={{
              fontSize: 44,
              fontWeight: 900,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              textAlign: "center",
              marginBottom: 8,
              textShadow: "0 4px 24px rgba(0,0,0,0.65)",
            }}
          >
            SMART HELPER = FAST SERVE
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#FBBF24",
              letterSpacing: "0.08em",
              marginBottom: 14,
            }}
          >
            CHHOTU SERVES GARAM SAMOSE AT CODE BAITHAK
          </div>

          {/* Large Artist-Grade 2D Illustration Canvas (940x680) */}
          <svg width={940} height={680} viewBox="0 0 940 680">
            {/* Ambient Stage Floor Shadow */}
            <ellipse
              cx="465"
              cy="618"
              rx="410"
              ry="28"
              fill="#000000"
              opacity="0.55"
            />

            {/* ===============================================================
                BACK RIGHT KITCHEN STATION: DETAILED SPEAKER CHARACTER (OWNER)
                With Signature Curved Cap, Aviator Sunglasses & Shaped Beard
               =============================================================== */}
            <g transform="translate(658, 125)" opacity="0.88">
              {/* Back Kitchen Ambient Aura */}
              <rect
                x="-12"
                y="18"
                width="258"
                height="340"
                rx="22"
                fill="#0F172A"
                stroke="#475569"
                strokeWidth="2.5"
              />
              <rect
                x="12"
                y="32"
                width="210"
                height="28"
                rx="8"
                fill="#1E293B"
              />
              <text
                x="117"
                y="51"
                textAnchor="middle"
                fill="#94A3B8"
                fontSize="12.5"
                fontWeight="800"
                letterSpacing="1.5"
              >
                BACK KITCHEN // SLOW PREP
              </text>

              {/* Detailed Speaker Character (Owner) Prepping Golgappe */}
              <g transform="translate(96, 178)">
                {/* Torso: Collared Shirt + Halwai Apron */}
                <path
                  d="M -46 38 Q -48 -10 0 -10 Q 48 -10 46 38 L 50 96 L -50 96 Z"
                  fill="#EA580C"
                  stroke="#FDBA74"
                  strokeWidth="2"
                />
                {/* Shirt Collar */}
                <polygon points="-18,-8 0,10 18,-8" fill="#1E293B" />
                {/* Front Work Apron with Neck Strap */}
                <path
                  d="M -28 8 L 28 8 L 34 94 L -34 94 Z"
                  fill="#FEF3C7"
                  stroke="#D97706"
                  strokeWidth="1.8"
                />
                <path
                  d="M -16 -8 L -22 8 M 16 -8 L 22 8"
                  stroke="#FEF3C7"
                  strokeWidth="3"
                />

                {/* Neck & Ears */}
                <rect x="-11" y="-22" width="22" height="16" rx="6" fill="url(#skinToneGrad)" />
                <circle cx="-33" cy="-42" r="7" fill="url(#skinToneGrad)" />
                <circle cx="33" cy="-42" r="7" fill="url(#skinToneGrad)" />

                {/* Head Contour */}
                <path
                  d="M -32 -48 C -32 -74, 32 -74, 32 -48 C 32 -20, 22 -8, 0 -8 C -22 -8, -32 -20, -32 -48 Z"
                  fill="url(#skinToneGrad)"
                  stroke="#9A3412"
                  strokeWidth="1.8"
                />

                {/* Shaped Full Beard, Sideburns & Mustache (Speaker Likeness) */}
                <path
                  d="M -31 -42 C -31 -18, -18 -6, 0 -6 C 18 -6, 31 -18, 31 -42 L 26 -42 C 25 -26, 15 -18, 0 -18 C -15 -18, -25 -26, -26 -42 Z"
                  fill="#1E293B"
                />
                {/* Mustache & Goatee Detail */}
                <path
                  d="M -18 -25 Q -9 -31 0 -25 Q 9 -31 18 -25 Q 12 -20 0 -22 Q -12 -20 -18 -25 Z"
                  fill="#0F172A"
                />
                {/* Warm Smile Line Under Mustache */}
                <path
                  d="M -9 -19 Q 0 -14 9 -19"
                  fill="none"
                  stroke="#FED7AA"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* Gold-Rimmed Aviator Sunglasses with Lens Glint */}
                <g transform="translate(0, -44)">
                  {/* Left Tear-Drop Aviator Lens */}
                  <path
                    d="M -27 -6 L -4 -6 C -2 -6, -2 6, -8 10 C -16 14, -26 10, -28 1 Z"
                    fill="url(#aviatorLensGrad)"
                    stroke="#FACC15"
                    strokeWidth="2.2"
                  />
                  {/* Right Tear-Drop Aviator Lens */}
                  <path
                    d="M 4 -6 L 27 -6 C 28 1, 16 14, 8 10 C 2 6, 2 -6, 4 -6 Z"
                    fill="url(#aviatorLensGrad)"
                    stroke="#FACC15"
                    strokeWidth="2.2"
                  />
                  {/* Double Gold Nose Bridge & Side Temples */}
                  <line x1="-5" y1="-5" x2="5" y2="-5" stroke="#FACC15" strokeWidth="2" />
                  <line x1="-4" y1="-2" x2="4" y2="-2" stroke="#FACC15" strokeWidth="1.5" />
                  <line x1="-27" y1="-4" x2="-32" y2="-2" stroke="#FACC15" strokeWidth="2" />
                  <line x1="27" y1="-4" x2="32" y2="-2" stroke="#FACC15" strokeWidth="2" />
                  {/* Crisp White Diagonal Lens Reflections */}
                  <line x1="-21" y1="-2" x2="-15" y2="6" stroke="#E0F2FE" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                  <line x1="10" y1="-2" x2="16" y2="6" stroke="#E0F2FE" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                </g>

                {/* Signature Curved Cap with Gold Visor Stitch */}
                <path
                  d="M -33 -54 C -32 -82, 32 -82, 33 -54 Z"
                  fill="#1E293B"
                  stroke="#475569"
                  strokeWidth="2"
                />
                <path
                  d="M -35 -54 Q 0 -64 35 -54 Q 20 -48 -35 -54 Z"
                  fill="#0F172A"
                  stroke="#F59E0B"
                  strokeWidth="2"
                />
                <circle cx="0" cy="-75" r="3.5" fill="#F59E0B" />

                {/* Articulated Arm Stirring Ladle in Golgappa Pani Pot */}
                <path
                  d={`M 28 18 Q 52 38 ${44 + ownerStir} 58`}
                  fill="none"
                  stroke="url(#skinToneGrad)"
                  strokeWidth="12"
                  strokeLinecap="round"
                />
                {/* Brass Ladle */}
                <line
                  x1={44 + ownerStir}
                  y1="58"
                  x2={32 + ownerStir * 0.6}
                  y2="88"
                  stroke="#FACC15"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </g>

              {/* Back Kitchen Stove, Brass Golgappa Pani Handi & Masala Bowl */}
              <rect
                x="14"
                y="265"
                width="206"
                height="68"
                rx="10"
                fill="#1E293B"
                stroke="#64748B"
                strokeWidth="2"
              />
              {/* Brass Handi Pot */}
              <ellipse
                cx="128"
                cy="255"
                rx="42"
                ry="22"
                fill="url(#brassVesselGrad)"
                stroke="#FEF08A"
                strokeWidth="2"
              />
              <ellipse cx="128" cy="242" rx="32" ry="10" fill="#065F46" />
              {/* Simmering Steam Over Back Stove */}
              <path
                d={`M 125 232 C ${118 + steamWave2} 210, ${138 - steamWave2} 192, 126 172`}
                fill="none"
                stroke="#94A3B8"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.6"
              />

              {/* Ornate Brass Clock Showing Slow Prep */}
              <g transform="translate(194, 118)">
                <circle
                  cx="0"
                  cy="0"
                  r="32"
                  fill="#0B0F19"
                  stroke="url(#brassVesselGrad)"
                  strokeWidth="5"
                />
                {/* Clock Tick Marks */}
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(
                  (deg) => (
                    <line
                      key={deg}
                      x1="0"
                      y1="-23"
                      x2="0"
                      y2="-27"
                      stroke="#FDE68A"
                      strokeWidth="2"
                      transform={`rotate(${deg})`}
                    />
                  )
                )}
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="-19"
                  stroke="#F87171"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  transform={`rotate(${clockHandAngle})`}
                />
                <line
                  x1="0"
                  y1="0"
                  x2="13"
                  y2="4"
                  stroke="#FEF08A"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="0" cy="0" r="4" fill="#F59E0B" />
              </g>

              <text
                x="117"
                y="310"
                textAnchor="middle"
                fill="#FCA5A5"
                fontSize="14"
                fontWeight="800"
                letterSpacing="1.2"
              >
                OWNER BUSY MAKING GOLGAPPE
              </text>
            </g>

            {/* ===============================================================
                CENTER FOREGROUND: ARTIST-GRADE "CODE BAITHAK" CHAAT STALL
               =============================================================== */}
            <g transform="translate(262, 108)">
              {/* Carved Wooden Corner Pillars with Brass Capitols */}
              <rect
                x="22"
                y="108"
                width="16"
                height="310"
                fill="url(#carvedTeakGrad)"
                stroke="#F59E0B"
                strokeWidth="1.5"
              />
              <rect
                x="358"
                y="108"
                width="16"
                height="310"
                fill="url(#carvedTeakGrad)"
                stroke="#F59E0B"
                strokeWidth="1.5"
              />
              <rect x="18" y="120" width="24" height="10" rx="3" fill="url(#brassVesselGrad)" />
              <rect x="354" y="120" width="24" height="10" rx="3" fill="url(#brassVesselGrad)" />

              {/* Multi-Striped Royal Canopy Awning */}
              <path
                d="M -12 114 L 26 48 L 370 48 L 408 114 Z"
                fill="#B91C1C"
                stroke="url(#brassVesselGrad)"
                strokeWidth="3.5"
              />
              {[0, 1, 2, 3, 4].map((idx) => (
                <polygon
                  key={idx}
                  points={`${46 + idx * 66},50 ${80 + idx * 66},50 ${
                    90 + idx * 70
                  },112 ${36 + idx * 70},112`}
                  fill={idx % 2 === 0 ? "#F59E0B" : "#FEF3C7"}
                />
              ))}

              {/* Scalloped Canopy Trim */}
              {[0, 1, 2, 3, 4, 5, 6, 7].map((idx) => (
                <path
                  key={idx}
                  d={`M ${-10 + idx * 52} 114 Q ${16 + idx * 52} 136 ${
                    42 + idx * 52
                  } 114`}
                  fill={idx % 2 === 0 ? "#EA580C" : "#FDE047"}
                  stroke="#78350F"
                  strokeWidth="2"
                />
              ))}

              {/* Hanging Marigold Garlands (Genda Phool Toran) */}
              {[0, 1, 2, 3].map((gIdx) => {
                const startX = 28 + gIdx * 85;
                return (
                  <g key={gIdx}>
                    <path
                      d={`M ${startX} 122 Q ${startX + 42} 154 ${
                        startX + 85
                      } 122`}
                      fill="none"
                      stroke="#15803D"
                      strokeWidth="3"
                    />
                    {[0.15, 0.35, 0.5, 0.65, 0.85].map((t, fIdx) => {
                      const fx = startX + t * 85;
                      const fy = 122 + Math.sin(t * Math.PI) * 20;
                      return (
                        <circle
                          key={fIdx}
                          cx={fx}
                          cy={fy}
                          r="6.5"
                          fill={fIdx % 2 === 0 ? "#F97316" : "#FACC15"}
                          stroke="#7C2D12"
                          strokeWidth="1"
                        />
                      );
                    })}
                  </g>
                );
              })}

              {/* Warm Hanging Festival Bulbs Along Canopy */}
              {[38, 118, 198, 278, 358].map((bx, i) => (
                <g key={i} transform={`translate(${bx}, 126)`}>
                  <circle
                    cx="0"
                    cy="18"
                    r="16"
                    fill="#F59E0B"
                    opacity={0.32 * bulbGlow}
                  />
                  <circle
                    cx="0"
                    cy="18"
                    r="6.5"
                    fill="#FEF9C3"
                    stroke="#F59E0B"
                    strokeWidth="1.5"
                  />
                </g>
              ))}

              {/* ILLUMINATED ORNATE SIGNBOARD: "CODE BAITHAK" */}
              <g transform="translate(24, -6)">
                <rect
                  x="0"
                  y="0"
                  width="348"
                  height="62"
                  rx="14"
                  fill="url(#signboardGrad)"
                  stroke="url(#brassVesselGrad)"
                  strokeWidth="4"
                />
                {/* Inner Filigree Gold Frame */}
                <rect
                  x="8"
                  y="7"
                  width="332"
                  height="48"
                  rx="9"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="1.2"
                  strokeDasharray="6 4"
                />
                {/* Corner Brass Rivets */}
                <circle cx="16" cy="15" r="3.5" fill="#FDE047" />
                <circle cx="332" cy="15" r="3.5" fill="#FDE047" />
                <circle cx="16" cy="47" r="3.5" fill="#FDE047" />
                <circle cx="332" cy="47" r="3.5" fill="#FDE047" />
                <text
                  x="174"
                  y="40"
                  textAnchor="middle"
                  fill="#FEF08A"
                  fontSize="30"
                  fontWeight="900"
                  letterSpacing="4"
                >
                  CODE BAITHAK
                </text>
              </g>

              {/* =============================================================
                  DETAILED CHHOTU HELPER CHARACTER AT FRONT COUNTER
                 ============================================================= */}
              <g transform={`translate(172, ${238 + helperBounce})`}>
                {/* Emerald Aura */}
                <circle cx="0" cy="8" r="74" fill="#10B981" opacity="0.18" />

                {/* Kurta Torso + Golden Trim Vest */}
                <path
                  d="M -46 36 Q -48 -10 0 -10 Q 48 -10 46 36 L 52 104 L -52 104 Z"
                  fill="url(#emeraldKurtaGrad)"
                  stroke="#A7F3D0"
                  strokeWidth="2.5"
                />
                {/* Mandarin Collar & Gold Buttons */}
                <path
                  d="M -16 -10 L 0 8 L 16 -10"
                  fill="none"
                  stroke="#FEF08A"
                  strokeWidth="3"
                />
                <circle cx="0" cy="18" r="3" fill="#FEF08A" />
                <circle cx="0" cy="32" r="3" fill="#FEF08A" />

                {/* Neck & Ears */}
                <rect x="-10" y="-22" width="20" height="15" rx="5" fill="url(#skinToneGrad)" />
                <circle cx="-31" cy="-42" r="6.5" fill="url(#skinToneGrad)" />
                <circle cx="31" cy="-42" r="6.5" fill="url(#skinToneGrad)" />

                {/* Head */}
                <circle
                  cx="0"
                  cy="-42"
                  r="30"
                  fill="url(#skinToneGrad)"
                  stroke="#9A3412"
                  strokeWidth="2"
                />

                {/* Layered Wavy Hair & Saffron Topi/Headband */}
                <path
                  d="M -30 -48 C -28 -76, 28 -76, 30 -48 C 22 -58, -22 -58, -30 -48 Z"
                  fill="#0F172A"
                />
                <path
                  d="M -31 -52 Q 0 -62 31 -52 L 29 -43 Q 0 -53 -29 -43 Z"
                  fill="#F59E0B"
                  stroke="#FEF08A"
                  strokeWidth="1.5"
                />

                {/* Expressive Eyebrows, Eyes with Catchlights & Big Smile */}
                <path
                  d="M -18 -50 Q -11 -55 -5 -50 M 5 -50 Q 11 -55 18 -50"
                  fill="none"
                  stroke="#0F172A"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="-11" cy="-42" r="4.2" fill="#0F172A" />
                <circle cx="11" cy="-42" r="4.2" fill="#0F172A" />
                <circle cx="-12.5" cy="-43.5" r="1.5" fill="#FFFFFF" />
                <circle cx="9.5" cy="-43.5" r="1.5" fill="#FFFFFF" />
                {/* Nose & Joyful Open Smile */}
                <path d="M 0 -40 L -3 -33 L 2 -33" fill="none" stroke="#9A3412" strokeWidth="2" strokeLinecap="round" />
                <path
                  d="M -13 -27 Q 0 -15 13 -27 Z"
                  fill="#FFFFFF"
                  stroke="#7C2D12"
                  strokeWidth="2"
                />

                {/* Articulated Serving Arm & Hand Extending Left */}
                <path
                  d="M -36 16 Q -72 2 -102 18"
                  fill="none"
                  stroke="url(#emeraldKurtaGrad)"
                  strokeWidth="16"
                  strokeLinecap="round"
                />
                <circle cx="-106" cy="19" r="9" fill="url(#skinToneGrad)" stroke="#9A3412" strokeWidth="1.5" />
              </g>

              {/* =============================================================
                  COUNTER DISPLAY: BRASS GOLGAPPA MATKA & GLASS SAMOSA CASE
                 ============================================================= */}
              {/* Left Counter: Brass Matka with Red Cloth & Stacked Golgappe */}
              <g transform="translate(26, 255)">
                <ellipse
                  cx="52"
                  cy="54"
                  rx="44"
                  ry="35"
                  fill="url(#brassVesselGrad)"
                  stroke="#FEF08A"
                  strokeWidth="2.2"
                />
                {/* Red Sacred Cloth Wrapped Around Matka Belly */}
                <path
                  d="M 10 48 Q 52 66 94 48 L 90 68 Q 52 84 14 68 Z"
                  fill="#DC2626"
                  stroke="#FCA5A5"
                  strokeWidth="1.2"
                />
                {/* Matka Neck */}
                <rect
                  x="28"
                  y="12"
                  width="48"
                  height="14"
                  rx="5"
                  fill="url(#brassVesselGrad)"
                  stroke="#FEF08A"
                  strokeWidth="2"
                />
                {/* Crispy Spherical Golgappe Piled on Matka Rim */}
                {[24, 40, 56, 72].map((gx, i) => (
                  <g key={i} transform={`translate(${gx}, 6)`}>
                    <circle cx="0" cy="0" r="9" fill="url(#samosaFrontGrad)" stroke="#FEF08A" strokeWidth="1.2" />
                    <ellipse cx="0" cy="-2" rx="4.5" ry="2.8" fill="#451A03" />
                  </g>
                ))}
              </g>

              {/* Right Counter: Illuminated Glass Showcase Stacked with Detailed Samose */}
              <g transform="translate(226, 212)">
                <rect
                  x="0"
                  y="0"
                  width="142"
                  height="122"
                  rx="12"
                  fill="rgba(15, 23, 42, 0.72)"
                  stroke="url(#brassVesselGrad)"
                  strokeWidth="3"
                />
                {/* Glass Reflection Slash */}
                <line x1="16" y1="14" x2="42" y2="106" stroke="#FFFFFF" strokeWidth="3" opacity="0.18" strokeLinecap="round" />
                {/* Middle Brass Shelf */}
                <line x1="6" y1="64" x2="136" y2="64" stroke="#F59E0B" strokeWidth="2.5" />

                {/* Top Shelf Detailed Samose */}
                <DetailedSamosa x={38} y={44} scale={0.78} rotate={-4} />
                <DetailedSamosa x={74} y={44} scale={0.78} rotate={3} />
                <DetailedSamosa x={108} y={44} scale={0.78} rotate={-2} />

                {/* Bottom Shelf Detailed Samose */}
                <DetailedSamosa x={36} y={100} scale={0.82} rotate={2} />
                <DetailedSamosa x={72} y={100} scale={0.82} rotate={-3} />
                <DetailedSamosa x={108} y={100} scale={0.82} rotate={4} />
              </g>

              {/* =============================================================
                  CARVED WOODEN CART BODY & MULTI-SPOKE BRASS WHEELS
                 ============================================================= */}
              <rect
                x="4"
                y="334"
                width="388"
                height="128"
                rx="16"
                fill="url(#royalWoodGrad)"
                stroke="url(#brassVesselGrad)"
                strokeWidth="4"
              />
              {/* Ornate Recessed Wooden Panels */}
              <rect
                x="22"
                y="350"
                width="352"
                height="96"
                rx="10"
                fill="#1E1B4B"
                stroke="#F59E0B"
                strokeWidth="2"
              />
              {/* Decorative Brass Diamonds */}
              <polygon points="48,398 58,388 68,398 58,408" fill="#FACC15" />
              <polygon points="328,398 338,388 348,398 338,408" fill="#FACC15" />

              <text
                x="198"
                y="392"
                textAnchor="middle"
                fill="#FEF08A"
                fontSize="21"
                fontWeight="900"
                letterSpacing="2.5"
              >
                GARAM SAMOSE &amp; GOLGAPPE
              </text>
              <text
                x="198"
                y="420"
                textAnchor="middle"
                fill="#34D399"
                fontSize="14"
                fontWeight="800"
                letterSpacing="1.5"
              >
                CHHOTU FRONT COUNTER // ZERO WAIT
              </text>

              {/* Multi-Spoke Royal Cart Wheels */}
              {[76, 320].map((wx, idx) => (
                <g key={idx} transform={`translate(${wx}, 472)`}>
                  <circle
                    cx="0"
                    cy="0"
                    r="42"
                    fill="#0F172A"
                    stroke="url(#brassVesselGrad)"
                    strokeWidth="7"
                  />
                  <circle
                    cx="0"
                    cy="0"
                    r="32"
                    fill="none"
                    stroke="#D97706"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                  />
                  {[0, 30, 60, 90, 120, 150].map((deg) => (
                    <line
                      key={deg}
                      x1="-35"
                      y1="0"
                      x2="35"
                      y2="0"
                      stroke="#F59E0B"
                      strokeWidth="3"
                      transform={`rotate(${deg})`}
                    />
                  ))}
                  <circle cx="0" cy="0" r="11" fill="url(#brassVesselGrad)" />
                  <circle cx="0" cy="0" r="4" fill="#451A03" />
                </g>
              ))}
            </g>

            {/* ===============================================================
                LEFT FOREGROUND: DETAILED CUSTOMER CHARACTER RECEIVING PLATE
               =============================================================== */}
            <g transform="translate(128, 368)">
              {/* Customer Jacket & Layered Shirt */}
              <path
                d="M -46 44 Q -48 -10 0 -10 Q 48 -10 46 44 L 52 178 L -52 178 Z"
                fill="url(#customerJacketGrad)"
                stroke="#7DD3FC"
                strokeWidth="2.5"
              />
              {/* Inner Cream Tee & Jacket Lapels */}
              <polygon points="-18,-8 0,32 18,-8" fill="#FEF3C7" />
              <path
                d="M -22 -8 L -8 34 M 22 -8 L 8 34"
                stroke="#1E3A8A"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Neck & Head */}
              <rect x="-10" y="-22" width="20" height="16" rx="5" fill="url(#skinToneGrad)" />
              <circle cx="-30" cy="-42" r="6.5" fill="url(#skinToneGrad)" />
              <circle cx="30" cy="-42" r="6.5" fill="url(#skinToneGrad)" />
              <circle
                cx="0"
                cy="-42"
                r="30"
                fill="url(#skinToneGrad)"
                stroke="#9A3412"
                strokeWidth="2"
              />

              {/* Styled Voluminous Hair */}
              <path
                d="M -31 -46 C -34 -78, 22 -84, 32 -52 C 26 -62, -16 -62, -31 -46 Z"
                fill="#0F172A"
              />
              {/* Eyebrows, Eyes & Happy Smile */}
              <path
                d="M -16 -50 Q -10 -54 -4 -50 M 6 -50 Q 12 -54 18 -50"
                fill="none"
                stroke="#0F172A"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <circle cx="-9" cy="-42" r="3.8" fill="#0F172A" />
              <circle cx="11" cy="-42" r="3.8" fill="#0F172A" />
              <circle cx="-10" cy="-43.5" r="1.4" fill="#FFFFFF" />
              <circle cx="10" cy="-43.5" r="1.4" fill="#FFFFFF" />
              <path
                d="M -10 -26 Q 2 -16 13 -26"
                fill="none"
                stroke="#7C2D12"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Articulated Reaching Arm & Open Hand */}
              <path
                d="M 32 22 Q 62 12 88 -4"
                fill="none"
                stroke="url(#customerJacketGrad)"
                strokeWidth="15"
                strokeLinecap="round"
              />
              <circle cx="94" cy="-7" r="9" fill="url(#skinToneGrad)" stroke="#9A3412" strokeWidth="1.5" />

              <rect
                x="-64"
                y="188"
                width="128"
                height="32"
                rx="16"
                fill="#0F172A"
                stroke="#38BDF8"
                strokeWidth="2"
              />
              <text
                x="0"
                y="209"
                textAnchor="middle"
                fill="#E0F2FE"
                fontSize="14"
                fontWeight="800"
                letterSpacing="1.5"
              >
                CUSTOMER
              </text>
            </g>

            {/* ===============================================================
                GOLDEN ARC TRAJECTORY + DETAILED STEAMING SAMOSA PLATTER
               =============================================================== */}
            <path
              d="M 462 348 Q 343 220 224 344"
              fill="none"
              stroke="#FACC15"
              strokeWidth="4"
              strokeDasharray="10 8"
              opacity="0.85"
            />

            {/* Flying Detailed Samosa Leaf Platter with Chutney Katoris & Steam */}
            <g transform={`translate(${plateX}, ${plateY})`}>
              {/* Golden Glow Halo */}
              <circle cx="0" cy="0" r="48" fill="#F59E0B" opacity="0.24" />
              {/* Brass Plate Rim & Banana Leaf Liner */}
              <ellipse
                cx="0"
                cy="18"
                rx="46"
                ry="16"
                fill="url(#brassVesselGrad)"
                stroke="#FEF08A"
                strokeWidth="2"
              />
              <ellipse cx="0" cy="17" rx="38" ry="12" fill="#065F46" />

              {/* Two Detailed Flaky Samose on the Platter */}
              <DetailedSamosa x={-10} y={2} scale={0.92} rotate={-8} />
              <DetailedSamosa x={14} y={5} scale={0.86} rotate={10} />

              {/* Red Tamarind & Green Mint Chutney Bowls */}
              <ellipse cx="-24" cy="18" rx="9" ry="4.5" fill="#DC2626" stroke="#FEF08A" strokeWidth="1" />
              <ellipse cx="24" cy="18" rx="9" ry="4.5" fill="#16A34A" stroke="#FEF08A" strokeWidth="1" />

              {/* Rising Waving Steam Curves */}
              <path
                d={`M -8 -24 C ${-16 + steamWave1 * 0.6} -42, ${
                  4 - steamWave1 * 0.6
                } -60, -6 -78`}
                fill="none"
                stroke="#FEF9C3"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.85"
              />
              <path
                d={`M 12 -20 C ${6 + steamWave2 * 0.6} -38, ${
                  22 - steamWave2 * 0.6
                } -56, 12 -72`}
                fill="none"
                stroke="#FEF9C3"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.7"
              />
            </g>

            {/* ===============================================================
                TOP EMERALD RIBBON BADGE: "INSTANT SERVE!"
               =============================================================== */}
            <g
              transform={`translate(335, 16) scale(${badgeSpring})`}
              style={{ transformOrigin: "130px 28px" }}
            >
              <rect
                x="0"
                y="0"
                width="260"
                height="54"
                rx="27"
                fill="url(#emeraldKurtaGrad)"
                stroke="#FEF08A"
                strokeWidth="3"
              />
              <text
                x="130"
                y="35"
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize="22"
                fontWeight="900"
                letterSpacing="2"
              >
                INSTANT SERVE!
              </text>
            </g>
          </svg>
        </div>
      )}

      {/* =====================================================================
          BEAT 2 (Frames 500..598): "SAME HAPPENS IN APPS!"
          Artist-Grade Visual Bridge: Detailed CODE BAITHAK Stall === App & Cache
         ===================================================================== */}
      {frame >= 496 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            opacity: beat2Opacity,
            transform: `scale(${interpolate(beat2Enter, [0, 1], [0.92, 1])})`,
            zIndex: 15,
          }}
        >
          {/* Centered Title & Subtitle */}
          <div
            style={{
              fontSize: 44,
              fontWeight: 900,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              textAlign: "center",
              marginBottom: 8,
              textShadow: "0 4px 24px rgba(0,0,0,0.65)",
            }}
          >
            SAME HAPPENS IN APPS!
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#FBBF24",
              letterSpacing: "0.08em",
              marginBottom: 18,
            }}
          >
            CODE BAITHAK HELPER = IN-MEMORY APP CACHE
          </div>

          {/* Artist-Grade Visual Bridge SVG (940x650) */}
          <svg width={940} height={650} viewBox="0 0 940 650">
            {/* ---------------------------------------------------------------
                LEFT MEDALLION: DETAILED MINI "CODE BAITHAK" STALL + CHHOTU
               --------------------------------------------------------------- */}
            <g transform="translate(48, 78)">
              {/* Outer Ornate Ring */}
              <circle
                cx="165"
                cy="210"
                r="162"
                fill="#0F172A"
                stroke="url(#brassVesselGrad)"
                strokeWidth="4.5"
              />
              <circle
                cx="165"
                cy="210"
                r="146"
                fill="#1E293B"
                stroke="#F59E0B"
                strokeWidth="1.5"
                strokeDasharray="8 6"
              />

              {/* Mini Illuminated "CODE BAITHAK" Signboard */}
              <rect
                x="55"
                y="74"
                width="220"
                height="38"
                rx="9"
                fill="url(#signboardGrad)"
                stroke="url(#brassVesselGrad)"
                strokeWidth="2.5"
              />
              <text
                x="165"
                y="99"
                textAnchor="middle"
                fill="#FEF08A"
                fontSize="18"
                fontWeight="900"
                letterSpacing="2.5"
              >
                CODE BAITHAK
              </text>

              {/* Striped Canopy & Marigold Garland */}
              <path
                d="M 38 144 L 62 112 L 268 112 L 292 144 Z"
                fill="#B91C1C"
                stroke="#FACC15"
                strokeWidth="2"
              />
              {[0, 1, 2, 3].map((i) => (
                <polygon
                  key={i}
                  points={`${74 + i * 48},114 ${96 + i * 48},114 ${
                    102 + i * 50
                  },142 ${68 + i * 50},142`}
                  fill={i % 2 === 0 ? "#F59E0B" : "#FEF3C7"}
                />
              ))}

              {/* Detailed Mini Chhotu + Hero Flaky Samosa */}
              <g transform="translate(118, 218)">
                <path
                  d="M -32 32 Q -34 -6 0 -6 Q 34 -6 32 32 L 36 58 L -36 58 Z"
                  fill="url(#emeraldKurtaGrad)"
                  stroke="#A7F3D0"
                  strokeWidth="2"
                />
                <circle cx="0" cy="-28" r="22" fill="url(#skinToneGrad)" stroke="#9A3412" strokeWidth="1.8" />
                <path d="M -22 -34 Q 0 -54 22 -34 Z" fill="#F59E0B" />
                <circle cx="-7" cy="-28" r="3" fill="#0F172A" />
                <circle cx="7" cy="-28" r="3" fill="#0F172A" />
                <path d="M -8 -18 Q 0 -10 8 -18" fill="none" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
              </g>

              {/* Hero Detailed Samosa on Brass Plate */}
              <g transform="translate(212, 222)">
                <ellipse cx="0" cy="22" rx="40" ry="12" fill="url(#brassVesselGrad)" />
                <DetailedSamosa x={0} y={4} scale={1.15} rotate={-4} />
              </g>

              {/* Carved Cart Base & Wheels */}
              <rect
                x="48"
                y="268"
                width="234"
                height="56"
                rx="12"
                fill="url(#royalWoodGrad)"
                stroke="url(#brassVesselGrad)"
                strokeWidth="3"
              />
              <text
                x="165"
                y="302"
                textAnchor="middle"
                fill="#FEF08A"
                fontSize="14"
                fontWeight="900"
                letterSpacing="2"
              >
                FRONT COUNTER HELPER
              </text>

              {/* Label Below Left Medallion */}
              <text
                x="165"
                y="422"
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize="26"
                fontWeight="900"
                letterSpacing="2"
              >
                CODE BAITHAK STALL
              </text>
              <text
                x="165"
                y="450"
                textAnchor="middle"
                fill="#FBBF24"
                fontSize="15"
                fontWeight="700"
                letterSpacing="1"
              >
                CHHOTU + GARAM SAMOSE
              </text>
            </g>

            {/* ---------------------------------------------------------------
                CENTER: GLOWING BRAIDED GOLDEN ENERGY BRIDGE + "=" EMBLEM
               --------------------------------------------------------------- */}
            <g>
              <path
                d="M 382 288 Q 470 215 558 288"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="5"
                strokeDasharray="12 10"
              />
              <path
                d="M 382 288 Q 470 361 558 288"
                fill="none"
                stroke="#10B981"
                strokeWidth="5"
                strokeDasharray="12 10"
              />

              {/* Animated Energy Pulses */}
              {[0, 1, 2].map((i) => {
                const t = (frame * 0.035 + i / 3) % 1;
                const px = interpolate(t, [0, 1], [382, 558]);
                const py = 288 - Math.sin(t * Math.PI) * 34;
                return (
                  <g key={i} transform={`translate(${px}, ${py})`}>
                    <circle cx="0" cy="0" r="13" fill="#FACC15" opacity="0.35" />
                    <circle cx="0" cy="0" r="6" fill="#FEF9C3" />
                  </g>
                );
              })}

              {/* Ornate Central Equals Medallion */}
              <circle
                cx="470"
                cy="288"
                r="44"
                fill="#0F172A"
                stroke="url(#brassVesselGrad)"
                strokeWidth="4.5"
              />
              <rect x="448" y="274" width="44" height="9" rx="4.5" fill="#FEF08A" />
              <rect x="448" y="293" width="44" height="9" rx="4.5" fill="#10B981" />
            </g>

            {/* ---------------------------------------------------------------
                RIGHT MEDALLION: 3D-SHADED SMARTPHONE + SERVER RACK + REDIS CACHE
               --------------------------------------------------------------- */}
            <g transform="translate(562, 78)">
              {/* Outer Ornate Emerald/Gold Ring */}
              <circle
                cx="165"
                cy="210"
                r="162"
                fill="#0F172A"
                stroke="#10B981"
                strokeWidth="4.5"
              />
              <circle
                cx="165"
                cy="210"
                r="146"
                fill="#1E293B"
                stroke="#34D399"
                strokeWidth="1.5"
                strokeDasharray="8 6"
              />

              {/* 3D Shaded Smartphone with App Feed & Instant Response Badge */}
              <g transform="translate(46, 96)">
                <rect
                  x="0"
                  y="0"
                  width="96"
                  height="186"
                  rx="18"
                  fill="url(#serverRackGrad)"
                  stroke="#38BDF8"
                  strokeWidth="3.5"
                />
                <rect x="8" y="18" width="80" height="146" rx="10" fill="#0B0F19" />
                {/* Speaker Notch */}
                <rect x="34" y="8" width="28" height="4" rx="2" fill="#475569" />
                {/* App UI Cards Inside Phone */}
                <rect x="16" y="30" width="64" height="36" rx="6" fill="#065F46" stroke="#10B981" strokeWidth="1.5" />
                <polygon points="48,36 38,50 47,50 43,62 57,46 48,46" fill="#FACC15" />
                <rect x="16" y="76" width="64" height="24" rx="5" fill="#1E293B" />
                <rect x="22" y="84" width="38" height="8" rx="4" fill="#38BDF8" />
                <rect x="16" y="108" width="64" height="24" rx="5" fill="#1E293B" />
                <rect x="22" y="116" width="46" height="8" rx="4" fill="#34D399" />
                <circle cx="48" cy="174" r="5" fill="#38BDF8" />
              </g>

              {/* High-Detail Multi-Blade Server Rack + Glowing Redis Cache Core */}
              <g transform="translate(158, 98)">
                {[0, 52, 104].map((ry, idx) => (
                  <g key={idx} transform={`translate(0, ${ry})`}>
                    <rect
                      x="0"
                      y="0"
                      width="118"
                      height="42"
                      rx="9"
                      fill="url(#serverRackGrad)"
                      stroke={idx === 0 ? "#10B981" : "#64748B"}
                      strokeWidth="2.5"
                    />
                    {/* Server Ventilation Slots */}
                    <line x1="52" y1="12" x2="104" y2="12" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
                    <line x1="52" y1="21" x2="104" y2="21" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
                    <line x1="52" y1="30" x2="90" y2="30" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
                    {/* Status LEDs */}
                    <circle cx="18" cy="21" r="5.5" fill="#10B981" />
                    <circle cx="34" cy="21" r="5.5" fill="#FACC15" />
                  </g>
                ))}

                {/* Glowing Fast Cache Core Pill */}
                <rect
                  x="0"
                  y="156"
                  width="118"
                  height="32"
                  rx="8"
                  fill="#065F46"
                  stroke="#34D399"
                  strokeWidth="2.5"
                />
                <text
                  x="59"
                  y="177"
                  textAnchor="middle"
                  fill="#FEF08A"
                  fontSize="13"
                  fontWeight="900"
                  letterSpacing="1.2"
                >
                  FAST CACHE
                </text>
              </g>

              {/* Label Below Right Medallion */}
              <text
                x="165"
                y="422"
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize="26"
                fontWeight="900"
                letterSpacing="2"
              >
                YOUR APP &amp; SERVER
              </text>
              <text
                x="165"
                y="450"
                textAnchor="middle"
                fill="#34D399"
                fontSize="15"
                fontWeight="700"
                letterSpacing="1"
              >
                INSTANT CACHE RESPONSE
              </text>
            </g>
          </svg>
        </div>
      )}
    </div>
  );
};

export default Act2HelperBridge;
