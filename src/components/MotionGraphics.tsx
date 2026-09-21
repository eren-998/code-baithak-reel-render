import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

/* =========================================================================
   OFFICIAL HIGH-RES VECTOR LOGOS & ICONS (PURE TRANSPARENCY)
   ========================================================================= */

// Official 4-Color Google "G" Logo
export const GoogleLogoSVG: React.FC<{ size?: number }> = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path
      fill="#EA4335"
      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
    />
    <path
      fill="#4285F4"
      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
    />
    <path
      fill="#FBBC05"
      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
    />
    <path
      fill="#34A853"
      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
    />
  </svg>
);

// Official OpenAI Swirl Logo
export const OpenAILogoSVG: React.FC<{ size?: number; color?: string }> = ({
  size = 40,
  color = "#10A37F",
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} filter="drop-shadow(0 0 12px rgba(16, 163, 127, 0.8))">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4945 4.4947zm-9.66-4.9904a4.4707 4.4707 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1401-2.5114zM2.3428 7.897a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.02 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3428 7.897zm16.5963 3.8558L13.1038 8.364l2.0199-1.1683a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.7948.7948 0 0 0-.4097-.6612zm2.0104-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1636a.0804.0804 0 0 1-.038-.0567V6.0748a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.4598a.7948.7948 0 0 0-.3927.6813l-.0048 6.7219zm1.1451-2.3135l3.2083-1.8519 3.2035 1.8519v3.704l-3.2035 1.852-3.2083-1.852z" />
  </svg>
);

// Anthropic Claude Sparkle SVG
export const ClaudeSparkleSVG: React.FC<{ size?: number }> = ({ size = 38 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#D97706" filter="drop-shadow(0 0 12px rgba(217, 119, 6, 0.8))">
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

// Meta Llama Infinity SVG
export const MetaInfinitySVG: React.FC<{ size?: number }> = ({ size = 38 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#0081FB" filter="drop-shadow(0 0 12px rgba(0, 129, 251, 0.8))">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.89 13.5c-1.35 0-2.43-.8-3.89-2.61-1.46 1.81-2.54 2.61-3.89 2.61-1.8 0-3.11-1.39-3.11-3.5 0-2.11 1.31-3.5 3.11-3.5 1.35 0 2.43.8 3.89 2.61 1.46-1.81 2.54-2.61 3.89-2.61 1.8 0 3.11 1.39 3.11 3.5 0 2.11-1.31 3.5-3.11 3.5z" />
  </svg>
);

/* =========================================================================
   SCENE 1: AI CONSULTANT & GOOGLE SEARCH (Frames 240 - 450 | ~8.0s - 15.0s)
   Dialogue: "Yesterday I met an AI consultant... Google karke aa"
   ZERO BACKGROUND CARD: Pure alpha floating vector graphics & cyber brain
   ========================================================================= */
export const AIConsultantCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const start = 240;
  const duration = 210;
  const local = frame - start;

  if (local < 0 || local > duration) return null;

  const spr = spring({ frame: local, fps, config: { damping: 12, stiffness: 140 } });
  const exit = interpolate(local, [duration - 14, duration], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const opacity = spr * exit;
  const translateY = interpolate(spr, [0, 1], [-40, 0]);
  const float = Math.sin(local * 0.1) * 6;
  const pulse = Math.sin(local * 0.2) * 0.2 + 0.8;
  const blink = Math.floor(local / 10) % 2 === 0;

  return (
    <div
      style={{
        position: "absolute",
        top: 140,
        left: 0,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 48,
        opacity,
        transform: `translateY(${translateY + float}px)`,
        pointerEvents: "none",
        background: "transparent",
      }}
    >
      {/* 1. Futuristic Cyber Neural Network Illustration */}
      <svg width="360" height="150" viewBox="0 0 360 150" fill="none">
        {/* Glowing Neural Synaptic Lines */}
        <line x1="60" y1="75" x2="130" y2="35" stroke="#00F0FF" strokeWidth="2" strokeDasharray="5 5" opacity={pulse} />
        <line x1="60" y1="75" x2="130" y2="115" stroke="#00F0FF" strokeWidth="2" strokeDasharray="5 5" opacity={pulse} />
        <line x1="130" y1="35" x2="230" y2="35" stroke="#FFE600" strokeWidth="2.5" />
        <line x1="130" y1="115" x2="230" y2="115" stroke="#FFE600" strokeWidth="2.5" />
        <line x1="130" y1="35" x2="230" y2="115" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
        <line x1="130" y1="115" x2="230" y2="35" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
        <line x1="230" y1="35" x2="300" y2="75" stroke="#00F0FF" strokeWidth="2" strokeDasharray="5 5" opacity={pulse} />
        <line x1="230" y1="115" x2="300" y2="75" stroke="#00F0FF" strokeWidth="2" strokeDasharray="5 5" opacity={pulse} />

        {/* Pulsing Synapse Nodes */}
        <circle cx="60" cy="75" r="10" fill="#00F0FF" filter="drop-shadow(0 0 12px #00F0FF)" />
        <circle cx="130" cy="35" r="8" fill="#FFE600" filter="drop-shadow(0 0 10px #FFE600)" />
        <circle cx="130" cy="115" r="8" fill="#FFE600" filter="drop-shadow(0 0 10px #FFE600)" />
        <circle cx="230" cy="35" r="8" fill="#FFE600" filter="drop-shadow(0 0 10px #FFE600)" />
        <circle cx="230" cy="115" r="8" fill="#FFE600" filter="drop-shadow(0 0 10px #FFE600)" />
        <circle cx="300" cy="75" r="12" fill="#00F0FF" filter="drop-shadow(0 0 16px #00F0FF)" />
        
        {/* Center Brain Pulse Ring */}
        <circle cx="180" cy="75" r="28" stroke="#00F0FF" strokeWidth="2" fill="none" opacity={pulse * 0.7} />
        <circle cx="180" cy="75" r="14" fill="#FFFFFF" filter="drop-shadow(0 0 14px #FFFFFF)" />
      </svg>

      {/* 2. Floating AI Consultant Kinetic Headline (NO BACKGROUND BOX) */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: -10,
        }}
      >
        <span
          style={{
            fontSize: 20,
            fontWeight: 900,
            color: "#00F0FF",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            textShadow: "0 2px 14px rgba(0,0,0,0.9), 0 0 25px rgba(0, 240, 255, 0.8)",
          }}
        >
          ⚡ DEEP TECH CONSULTANT ⚡
        </span>
        <span
          style={{
            fontSize: 40,
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: "-0.03em",
            textAlign: "center",
            textShadow: "0 6px 30px rgba(0,0,0,0.95), 0 0 40px rgba(0, 240, 255, 0.5)",
          }}
        >
          ENTERPRISE AI ARCHITECT
        </span>
      </div>

      {/* 3. Floating Interactive Google Search Bar (Minimalist Glass Tube) */}
      <div
        style={{
          marginTop: 18,
          display: "flex",
          alignItems: "center",
          gap: 12,
          maxWidth: 820,
          width: "90%",
          justifyContent: "center",
          background: "rgba(255, 255, 255, 0.12)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "2px solid rgba(255, 255, 255, 0.35)",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.7), 0 0 25px rgba(66, 133, 244, 0.35)",
          padding: "10px 24px",
          borderRadius: 50,
          boxSizing: "border-box",
        }}
      >
        <GoogleLogoSVG size={28} />
        <div style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF", display: "flex", alignItems: "center" }}>
          Google: <span style={{ color: "#FFE600", marginLeft: 6, fontWeight: 900 }}>"What is an AI Consultant?"</span>
          <span style={{ opacity: blink ? 1 : 0, color: "#00F0FF", marginLeft: 4, fontWeight: 900 }}>|</span>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   SCENE 2: BRING ANY PRODUCT ➔ AI INTEGRATED (Frames 780 - 1020 | ~26s - 34s)
   Dialogue: "Bring me ANY product in the world, I will integrate AI into it! WHAT?!"
   ZERO BACKGROUND CARD: Isometric product wireframe + laser connected AI models
   ========================================================================= */
export const AIIntegrationClaimCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const start = 780;
  const duration = 240;
  const local = frame - start;

  if (local < 0 || local > duration) return null;

  const spr = spring({ frame: local, fps, config: { damping: 12, stiffness: 140 } });
  const exit = interpolate(local, [duration - 14, duration], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const opacity = spr * exit;
  const translateY = interpolate(spr, [0, 1], [-40, 0]);
  const float = Math.sin(local * 0.12) * 5;

  // Kinetic WHAT?! Punch pop at frame 140 (~31s)
  const isWhat = local >= 135 && local <= 205;
  const whatSpring = spring({
    frame: local - 135,
    fps,
    config: { damping: 8, stiffness: 260 },
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 130,
        left: 0,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 48,
        opacity,
        transform: `translateY(${translateY + float}px)`,
        pointerEvents: "none",
        background: "transparent",
      }}
    >
      {/* Title with glowing gradient */}
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <div
          style={{
            fontSize: 22,
            fontWeight: 900,
            color: "#FFE600",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            textShadow: "0 2px 14px rgba(0,0,0,0.9), 0 0 25px rgba(255, 230, 0, 0.8)",
          }}
        >
          🔥 THE UNIVERSAL AI PROMISE 🔥
        </div>
        <div
          style={{
            fontSize: 38,
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: "-0.03em",
            textShadow: "0 6px 30px rgba(0,0,0,0.95), 0 0 35px rgba(255, 230, 0, 0.5)",
          }}
        >
          ANY PRODUCT ➔ AI SUPERCHARGED
        </div>
      </div>

      {/* Floating 3D Vector Isometric Pipeline (ZERO CARD) */}
      <svg width="680" height="150" viewBox="0 0 680 150" fill="none">
        {/* Left App Box Vector */}
        <rect x="40" y="35" width="130" height="80" rx="16" stroke="#FFFFFF" strokeWidth="3" fill="rgba(255,255,255,0.08)" filter="drop-shadow(0 0 15px rgba(255,255,255,0.4))" />
        <text x="75" y="70" fill="#94A3B8" fontSize="13" fontWeight="900" fontFamily="sans-serif">LEGACY</text>
        <text x="65" y="92" fill="#FFFFFF" fontSize="18" fontWeight="900" fontFamily="sans-serif">Any App</text>

        {/* Animated Laser Arrow 1 */}
        <line x1="185" y1="75" x2="265" y2="75" stroke="#FFE600" strokeWidth="4" strokeDasharray="6 6" filter="drop-shadow(0 0 10px #FFE600)" />
        <polygon points="275,75 260,67 260,83" fill="#FFE600" />

        {/* Center AI Engine Nucleus with Official Corporate Logos */}
        <circle cx="340" cy="75" r="48" stroke="#00F0FF" strokeWidth="3" fill="rgba(0, 240, 255, 0.12)" filter="drop-shadow(0 0 20px #00F0FF)" />
        
        {/* Right Supercharged Product Vector */}
        <rect x="510" y="35" width="130" height="80" rx="16" stroke="#30D158" strokeWidth="3.5" fill="rgba(48, 209, 88, 0.15)" filter="drop-shadow(0 0 20px #30D158)" />
        <text x="542" y="70" fill="#30D158" fontSize="13" fontWeight="900" fontFamily="sans-serif">OUTPUT</text>
        <text x="532" y="92" fill="#FFFFFF" fontSize="18" fontWeight="900" fontFamily="sans-serif">10X Smart</text>

        {/* Animated Laser Arrow 2 */}
        <line x1="400" y1="75" x2="495" y2="75" stroke="#30D158" strokeWidth="4" strokeDasharray="6 6" filter="drop-shadow(0 0 10px #30D158)" />
        <polygon points="505,75 490,67 490,83" fill="#30D158" />
      </svg>

      {/* Floating Corporate AI Logos inside center nucleus */}
      <div
        style={{
          position: "absolute",
          top: 88,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 14,
        }}
      >
        <OpenAILogoSVG size={36} />
        <ClaudeSparkleSVG size={34} />
        <MetaInfinitySVG size={34} />
      </div>

      {/* Giant Kinetic WHAT?! Punch Overlay */}
      {isWhat && (
        <div
          style={{
            marginTop: 40,
            transform: `scale(${interpolate(whatSpring, [0, 1], [0.5, 1.25])}) rotate(-5deg)`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 104,
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#FF3355",
              textShadow:
                "0 15px 50px rgba(0,0,0,0.98), 0 0 50px rgba(255, 51, 85, 0.95), 0 0 80px rgba(255, 51, 85, 0.7)",
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            WHAT?! 🤯
          </div>
        </div>
      )}
    </div>
  );
};

/* =========================================================================
   SCENE 3: DEVELOPER WHITEWASH WARNING (Frames 1080 - 1410 | ~36s - 47s)
   Dialogue: "developers whitewash ho jayenge... substitute... one day boom thank you so much"
   ZERO BACKGROUND CARD: Laser strike-through on code + hazard tape + boom shockwave
   ========================================================================= */
export const DevWhitewashAlertCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const start = 1080;
  const duration = 330;
  const local = frame - start;

  if (local < 0 || local > duration) return null;

  const spr = spring({ frame: local, fps, config: { damping: 11, stiffness: 150 } });
  const exit = interpolate(local, [duration - 14, duration], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const opacity = spr * exit;
  const translateY = interpolate(spr, [0, 1], [-40, 0]);
  const pulse = Math.sin(local * 0.25) * 0.2 + 0.8;

  // Boom blast animation at local >= 180 (~42s)
  const isBoom = local >= 160 && local <= 240;
  const boomSpr = spring({
    frame: local - 160,
    fps,
    config: { damping: 8, stiffness: 240 },
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 130,
        left: 0,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 48,
        opacity,
        transform: `translateY(${translateY}px)`,
        pointerEvents: "none",
        background: "transparent",
      }}
    >
      {/* 1. Floating Warning Siren Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 14,
        }}
      >
        <span style={{ fontSize: 32 }}>🚨</span>
        <span
          style={{
            fontSize: 24,
            fontWeight: 900,
            letterSpacing: "0.22em",
            color: "#FF3355",
            textTransform: "uppercase",
            textShadow: "0 2px 14px rgba(0,0,0,0.95), 0 0 30px rgba(255, 51, 85, 0.9)",
          }}
        >
          CRITICAL DEVELOPER REDUNDANCY
        </span>
        <span style={{ fontSize: 32 }}>🚨</span>
      </div>

      {/* 2. Massive Floating Headline */}
      <div
        style={{
          fontSize: 48,
          fontWeight: 900,
          color: "#FFFFFF",
          letterSpacing: "-0.03em",
          textAlign: "center",
          lineHeight: 1.1,
          textShadow: "0 6px 30px rgba(0,0,0,0.98), 0 0 45px rgba(255, 51, 85, 0.8)",
        }}
      >
        DEVELOPERS ARE GETTING WHITEWASHED
      </div>

      {/* 3. Code Strikethrough Vector Graphic */}
      <svg width="600" height="110" viewBox="0 0 600 110" fill="none">
        {/* Terminal frame without solid background */}
        <rect x="20" y="15" width="560" height="80" rx="20" stroke="rgba(255, 51, 85, 0.7)" strokeWidth="3" fill="none" filter="drop-shadow(0 0 18px rgba(255, 51, 85, 0.6))" />
        
        {/* Code text */}
        <text x="60" y="60" fill="#94A3B8" fontSize="24" fontWeight="800" fontFamily="monospace">
          &lt;TraditionalCrudCode /&gt;
        </text>
        <text x="440" y="60" fill="#FF3355" fontSize="24" fontWeight="900" fontFamily="monospace">
          DELETED
        </text>

        {/* Aggressive Red Laser Slash */}
        <line
          x1="40"
          y1="90"
          x2="560"
          y2="25"
          stroke="#FF3355"
          strokeWidth="6"
          strokeLinecap="round"
          filter="drop-shadow(0 0 16px #FF3355)"
        />
      </svg>

      {/* 4. One Day Boom Blast Overlay */}
      {isBoom && (
        <div
          style={{
            marginTop: 16,
            transform: `scale(${interpolate(boomSpr, [0, 1], [0.4, 1.2])})`,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span
            style={{
              fontSize: 44,
              fontWeight: 900,
              color: "#FFE600",
              textShadow: "0 10px 40px rgba(0,0,0,0.98), 0 0 40px rgba(255, 230, 0, 0.9)",
            }}
          >
            💥 "ONE DAY BOOM, THANK YOU SO MUCH!"
          </span>
        </div>
      )}
    </div>
  );
};

/* =========================================================================
   SCENE 4: THE LOGICAL SHIFT · AI BUILDERS NEEDED (Frames 1500 - 1950 | ~50s - 65s)
   Dialogue: "Logical move: unhe AI automation karne ke liye log chahiye chahiye jo ye kaam kar payen!"
   ZERO BACKGROUND CARD: Floating rocket stock graph + AI Agent engineer vector
   ========================================================================= */
export const LogicalShiftOpportunityCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const start = 1500;
  const duration = 450;
  const local = frame - start;

  if (local < 0 || local > duration) return null;

  const spr = spring({ frame: local, fps, config: { damping: 12, stiffness: 140 } });
  const exit = interpolate(local, [duration - 14, duration], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const opacity = spr * exit;
  const translateY = interpolate(spr, [0, 1], [-40, 0]);
  const float = Math.sin(local * 0.1) * 5;

  return (
    <div
      style={{
        position: "absolute",
        top: 130,
        left: 0,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 48,
        opacity,
        transform: `translateY(${translateY + float}px)`,
        pointerEvents: "none",
        background: "transparent",
      }}
    >
      {/* Top Opportunity Tag */}
      <div
        style={{
          fontSize: 22,
          fontWeight: 900,
          letterSpacing: "0.22em",
          color: "#30D158",
          textTransform: "uppercase",
          textShadow: "0 2px 14px rgba(0,0,0,0.95), 0 0 25px rgba(48, 209, 88, 0.9)",
          marginBottom: 8,
        }}
      >
        📈 THE LOGICAL SHIFT · THE GOLD RUSH 📈
      </div>

      {/* Main Headline */}
      <div
        style={{
          fontSize: 46,
          fontWeight: 900,
          color: "#FFFFFF",
          letterSpacing: "-0.03em",
          textAlign: "center",
          textShadow: "0 6px 30px rgba(0,0,0,0.98), 0 0 35px rgba(48, 209, 88, 0.5)",
        }}
      >
        COMPANIES NEED AI BUILDERS
      </div>

      {/* Upward Stock Market Trajectory Curve Vector Illustration */}
      <svg width="640" height="140" viewBox="0 0 640 140" fill="none">
        {/* Glow curve */}
        <path
          d="M30 110 Q180 100 320 60 T600 20"
          stroke="#30D158"
          strokeWidth="5"
          fill="none"
          filter="drop-shadow(0 0 16px #30D158)"
        />
        {/* Milestone Node 1 */}
        <circle cx="180" cy="95" r="8" fill="#FFE600" filter="drop-shadow(0 0 10px #FFE600)" />
        <text x="140" y="125" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="sans-serif">Tool Use</text>

        {/* Milestone Node 2 */}
        <circle cx="360" cy="55" r="9" fill="#00F0FF" filter="drop-shadow(0 0 12px #00F0FF)" />
        <text x="320" y="85" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="sans-serif">Agent Swarms</text>

        {/* Rocket Peak Node */}
        <circle cx="590" cy="22" r="12" fill="#30D158" filter="drop-shadow(0 0 18px #30D158)" />
        <text x="500" y="48" fill="#30D158" fontSize="18" fontWeight="900" fontFamily="sans-serif">+450% DEMAND</text>
      </svg>
    </div>
  );
};

/* =========================================================================
   SCENE 5: MARKET RELEVANT TECH STACK (Frames 2040 - 2400 | ~68s - 80s)
   Dialogue: "humne kuch parameters, skill set, technology discuss kiya... you will be there in the market"
   ZERO BACKGROUND CARD: 4 Floating Holographic Tech Badges
   ========================================================================= */
export const MarketRelevantTechStackCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const start = 2040;
  const duration = 360;
  const local = frame - start;

  if (local < 0 || local > duration) return null;

  const spr = spring({ frame: local, fps, config: { damping: 12, stiffness: 140 } });
  const exit = interpolate(local, [duration - 14, duration], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const opacity = spr * exit;
  const translateY = interpolate(spr, [0, 1], [-40, 0]);
  const float = Math.sin(local * 0.1) * 5;

  return (
    <div
      style={{
        position: "absolute",
        top: 130,
        left: 0,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 48,
        opacity,
        transform: `translateY(${translateY + float}px)`,
        pointerEvents: "none",
        background: "transparent",
      }}
    >
      <div
        style={{
          fontSize: 22,
          fontWeight: 900,
          letterSpacing: "0.22em",
          color: "#C084FC",
          textTransform: "uppercase",
          textShadow: "0 2px 14px rgba(0,0,0,0.95), 0 0 25px rgba(192, 132, 252, 0.9)",
          marginBottom: 8,
        }}
      >
        🛡️ FUTURE-PROOF SURVIVAL STACK 🛡️
      </div>

      <div
        style={{
          fontSize: 44,
          fontWeight: 900,
          color: "#FFFFFF",
          letterSpacing: "-0.03em",
          textShadow: "0 6px 30px rgba(0,0,0,0.98), 0 0 35px rgba(192, 132, 252, 0.6)",
          marginBottom: 20,
        }}
      >
        THE 2026 AI DEVELOPER STACK
      </div>

      {/* 4 Floating Holographic Pills (No background boxes, pure glass outline) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          width: 860,
        }}
      >
        <div
          style={{
            border: "2px solid #00F0FF",
            borderRadius: 24,
            padding: "14px 22px",
            background: "rgba(0, 240, 255, 0.08)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.8), 0 0 20px rgba(0, 240, 255, 0.3)",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 26 }}>🐍</span>
          <div>
            <div style={{ fontSize: 12, fontWeight: 800, color: "#00F0FF" }}>RUNTIME</div>
            <div style={{ fontSize: 20, fontWeight: 900, color: "#FFFFFF" }}>Python & TypeScript</div>
          </div>
        </div>

        <div
          style={{
            border: "2px solid #FFE600",
            borderRadius: 24,
            padding: "14px 22px",
            background: "rgba(255, 230, 0, 0.08)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.8), 0 0 20px rgba(255, 230, 0, 0.3)",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 26 }}>🧠</span>
          <div>
            <div style={{ fontSize: 12, fontWeight: 800, color: "#FFE600" }}>DECISION MAKING</div>
            <div style={{ fontSize: 20, fontWeight: 900, color: "#FFFFFF" }}>LangGraph & Agents</div>
          </div>
        </div>

        <div
          style={{
            border: "2px solid #C084FC",
            borderRadius: 24,
            padding: "14px 22px",
            background: "rgba(192, 132, 252, 0.08)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.8), 0 0 20px rgba(192, 132, 252, 0.3)",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 26 }}>🗄️</span>
          <div>
            <div style={{ fontSize: 12, fontWeight: 800, color: "#C084FC" }}>MEMORY</div>
            <div style={{ fontSize: 20, fontWeight: 900, color: "#FFFFFF" }}>Vector DBs & RAG</div>
          </div>
        </div>

        <div
          style={{
            border: "2px solid #30D158",
            borderRadius: 24,
            padding: "14px 22px",
            background: "rgba(48, 209, 88, 0.08)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.8), 0 0 20px rgba(48, 209, 88, 0.3)",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 26 }}>⚡</span>
          <div>
            <div style={{ fontSize: 12, fontWeight: 800, color: "#30D158" }}>ORCHESTRATION</div>
            <div style={{ fontSize: 20, fontWeight: 900, color: "#FFFFFF" }}>FastAPI & Webhooks</div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   SCENE 6: PART 2 A-TO-Z ROADMAP TEASER (Frames 2490 - 2760 | ~83s - 92s)
   Dialogue: "Part 2 of this video ke andar shortly saari cheezein from A to Z... to become AI developer"
   ZERO BACKGROUND CARD: Animated Roadmap Trail Vector
   ========================================================================= */
export const Part2RoadmapTeaserCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const start = 2490;
  const duration = 270;
  const local = frame - start;

  if (local < 0 || local > duration) return null;

  const spr = spring({ frame: local, fps, config: { damping: 12, stiffness: 140 } });
  const exit = interpolate(local, [duration - 14, duration], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const opacity = spr * exit;
  const translateY = interpolate(spr, [0, 1], [-40, 0]);

  return (
    <div
      style={{
        position: "absolute",
        top: 130,
        left: 0,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 48,
        opacity,
        transform: `translateY(${translateY}px)`,
        pointerEvents: "none",
        background: "transparent",
      }}
    >
      <div
        style={{
          fontSize: 24,
          fontWeight: 900,
          letterSpacing: "0.22em",
          color: "#00F0FF",
          textTransform: "uppercase",
          textShadow: "0 2px 14px rgba(0,0,0,0.95), 0 0 25px rgba(0, 240, 255, 0.9)",
          marginBottom: 8,
        }}
      >
        🚀 PART 2 DROPPING NEXT 🚀
      </div>

      <div
        style={{
          fontSize: 44,
          fontWeight: 900,
          color: "#FFFFFF",
          letterSpacing: "-0.03em",
          textShadow: "0 6px 30px rgba(0,0,0,0.98), 0 0 35px rgba(0, 240, 255, 0.5)",
          marginBottom: 16,
        }}
      >
        AI DEVELOPER MASTERCLASS (A TO Z)
      </div>

      {/* Floating 3-step timeline trail */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 720 }}>
        <div
          style={{
            border: "2px solid rgba(0, 240, 255, 0.7)",
            borderRadius: 20,
            padding: "10px 20px",
            background: "rgba(0, 240, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <span style={{ fontSize: 18, fontWeight: 900, color: "#00F0FF" }}>01</span>
          <span style={{ fontSize: 18, fontWeight: 800, color: "#FFFFFF" }}>LLM Foundations & Tool Calling</span>
        </div>
        <div
          style={{
            border: "2px solid rgba(255, 230, 0, 0.7)",
            borderRadius: 20,
            padding: "10px 20px",
            background: "rgba(255, 230, 0, 0.08)",
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <span style={{ fontSize: 18, fontWeight: 900, color: "#FFE600" }}>02</span>
          <span style={{ fontSize: 18, fontWeight: 800, color: "#FFFFFF" }}>Autonomous Multi-Agent Systems</span>
        </div>
        <div
          style={{
            border: "2px solid rgba(48, 209, 88, 0.7)",
            borderRadius: 20,
            padding: "10px 20px",
            background: "rgba(48, 209, 88, 0.08)",
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <span style={{ fontSize: 18, fontWeight: 900, color: "#30D158" }}>03</span>
          <span style={{ fontSize: 18, fontWeight: 800, color: "#FFFFFF" }}>Production Deployment & Revenue</span>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   SCENE 7: STAY AI RELEVANT OUTRO (Frames 2950 - 3230 | ~98s - 107.7s)
   Dialogue: "AI Relevant bano warna whitewash ho jaoge! Code Baithak ko follow kar lena hai"
   ZERO BACKGROUND CARD: Electric Cyber Badge
   ========================================================================= */
export const StayAIRelevantBanner: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const start = 2950;
  const local = frame - start;

  if (local < 0) return null;

  const spr = spring({ frame: local, fps, config: { damping: 12, stiffness: 140 } });
  const pulse = Math.sin(local * 0.2) * 0.15 + 0.85;

  return (
    <div
      style={{
        position: "absolute",
        top: 220,
        left: 0,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 48,
        opacity: spr,
        transform: `translateY(${interpolate(spr, [0, 1], [-30, 0])}px)`,
        pointerEvents: "none",
        background: "transparent",
      }}
    >
      <div
        style={{
          fontSize: 54,
          fontWeight: 900,
          color: "#FFE600",
          letterSpacing: "-0.03em",
          textAlign: "center",
          textShadow: `0 10px 40px rgba(0,0,0,0.98), 0 0 ${40 * pulse}px rgba(255, 230, 0, ${0.85 * pulse})`,
        }}
      >
        ⚡ BECOME AI RELEVANT ⚡
      </div>
      <div
        style={{
          fontSize: 24,
          fontWeight: 800,
          color: "#FFFFFF",
          marginTop: 6,
          textShadow: "0 4px 20px rgba(0,0,0,0.98)",
        }}
      >
        Warna Whitewash Ho Jaoge!
      </div>
    </div>
  );
};
