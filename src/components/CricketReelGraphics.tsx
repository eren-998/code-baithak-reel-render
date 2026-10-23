import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

/* =========================================================================
   REFINED COLOR PALETTE (COHESIVE WARM GOLD + EMERALD MINT + ALABASTER)
   - Ivory White:  #F8FAFC
   - Warm Gold:    #FBBF24 (Accent 1)
   - Deep Amber:   #F59E0B
   - Emerald Mint: #34D399 (Accent 2)
   - Soft Slate:   #94A3B8 (Sub-labels)
   ========================================================================= */

const PALETTE = {
  white: "#F8FAFC",
  gold: "#FBBF24",
  amber: "#F59E0B",
  mint: "#34D399",
  slate: "#CBD5E1",
};

interface WordSpec {
  text: string;
  color?: string;
}

/* Staggered word-by-word spring kinetic reveal */
const StaggeredHeadline: React.FC<{
  words: WordSpec[];
  localFrame: number;
  fps: number;
  fontSize?: number;
  delayFrames?: number;
}> = ({ words, localFrame, fps, fontSize = 68, delayFrames = 3 }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "baseline",
        columnGap: 18,
        rowGap: 6,
      }}
    >
      {words.map((w, idx) => {
        const wFrame = Math.max(0, localFrame - delayFrames - idx * 4);
        const spr = spring({
          frame: wFrame,
          fps,
          config: { damping: 14, stiffness: 180, mass: 0.85 },
        });
        const y = interpolate(spr, [0, 1], [28, 0]);
        const scale = interpolate(spr, [0, 1], [0.88, 1]);
        const opacity = interpolate(spr, [0, 1], [0, 1]);
        const isGold = w.color === PALETTE.gold;
        const isMint = w.color === PALETTE.mint;

        return (
          <span
            key={idx}
            style={{
              display: "inline-block",
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize,
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.04,
              color: w.color || PALETTE.white,
              opacity,
              transform: `translateY(${y}px) scale(${scale})`,
              textShadow: isGold
                ? "0 0 32px rgba(251, 191, 36, 0.38), 0 6px 20px rgba(0, 0, 0, 0.85)"
                : isMint
                ? "0 0 32px rgba(52, 211, 153, 0.38), 0 6px 20px rgba(0, 0, 0, 0.85)"
                : "0 6px 20px rgba(0, 0, 0, 0.85)",
            }}
          >
            {w.text}
          </span>
        );
      })}
    </div>
  );
};

/* Subtle pill tag above the headline */
const CategoryPill: React.FC<{
  label: string;
  accentColor: string;
  localFrame: number;
  fps: number;
}> = ({ label, accentColor, localFrame, fps }) => {
  const spr = spring({
    frame: localFrame,
    fps,
    config: { damping: 15, stiffness: 170 },
  });
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "7px 20px",
        borderRadius: 999,
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        border: `1px solid ${accentColor}44`,
        marginBottom: 18,
        opacity: spr,
        transform: `translateY(${interpolate(spr, [0, 1], [-12, 0])}px) scale(${interpolate(
          spr,
          [0, 1],
          [0.92, 1]
        )})`,
      }}
    >
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: accentColor,
          boxShadow: `0 0 10px ${accentColor}`,
        }}
      />
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 16,
          fontWeight: 800,
          letterSpacing: "2.8px",
          color: accentColor,
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
    </div>
  );
};

/* =========================================================================
   HANDCRAFTED VECTOR MOTION GRAPHICS (WARM GOLD & EMERALD MINT)
   ========================================================================= */

const Clock315Graphic: React.FC<{ localFrame: number; fps: number }> = ({
  localFrame,
  fps,
}) => {
  const spr = spring({
    frame: localFrame,
    fps,
    config: { damping: 13, stiffness: 150 },
  });
  const ringOffset = interpolate(spr, [0, 1], [220, 0]);
  const tilt = Math.sin(localFrame / 5) * 3;

  return (
    <svg
      width="84"
      height="84"
      viewBox="0 0 84 84"
      fill="none"
      style={{
        transform: `scale(${0.8 + spr * 0.2}) rotate(${tilt}deg)`,
        filter: "drop-shadow(0 8px 24px rgba(251, 191, 36, 0.28))",
        flexShrink: 0,
      }}
    >
      <circle
        cx="42"
        cy="42"
        r="34"
        fill="rgba(251, 191, 36, 0.07)"
        stroke="rgba(255, 255, 255, 0.14)"
        strokeWidth="2"
      />
      <circle
        cx="42"
        cy="42"
        r="34"
        stroke={PALETTE.gold}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="220"
        strokeDashoffset={ringOffset}
        transform="rotate(-90 42 42)"
      />
      <line x1="42" y1="14" x2="42" y2="19" stroke={PALETTE.white} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="70" y1="42" x2="65" y2="42" stroke={PALETTE.gold} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="42" y1="70" x2="42" y2="65" stroke={PALETTE.white} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="14" y1="42" x2="19" y2="42" stroke={PALETTE.white} strokeWidth="2.5" strokeLinecap="round" />
      {/* 3:15 hands */}
      <line x1="42" y1="42" x2="57" y2="42" stroke={PALETTE.white} strokeWidth="4" strokeLinecap="round" />
      <line x1="42" y1="42" x2="61" y2="47" stroke={PALETTE.gold} strokeWidth="2.8" strokeLinecap="round" />
      <circle cx="42" cy="42" r="4.5" fill={PALETTE.gold} />
    </svg>
  );
};

const LaptopWakeGraphic: React.FC<{ localFrame: number; fps: number }> = ({
  localFrame,
  fps,
}) => {
  const spr = spring({
    frame: localFrame,
    fps,
    config: { damping: 13, stiffness: 150 },
  });
  const lidScaleY = interpolate(spr, [0, 1], [0.3, 1]);

  return (
    <svg
      width="88"
      height="88"
      viewBox="0 0 88 88"
      fill="none"
      style={{
        transform: `scale(${0.85 + spr * 0.15})`,
        filter: "drop-shadow(0 8px 24px rgba(52, 211, 153, 0.28))",
        flexShrink: 0,
      }}
    >
      <g
        style={{
          transform: `scaleY(${lidScaleY})`,
          transformOrigin: "44px 60px",
        }}
      >
        <rect
          x="16"
          y="22"
          width="56"
          height="38"
          rx="6"
          fill="rgba(52, 211, 153, 0.08)"
          stroke={PALETTE.white}
          strokeWidth="3.2"
        />
        <path
          d="M 30 36 L 38 41 L 30 46"
          stroke={PALETTE.gold}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="43"
          y1="46"
          x2="56"
          y2="46"
          stroke={PALETTE.mint}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
      <path
        d="M 8 60 L 80 60 L 74 68 L 14 68 Z"
        fill="rgba(255,255,255,0.08)"
        stroke={PALETTE.mint}
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const CricketCrestGraphic: React.FC<{
  localFrame: number;
  fps: number;
}> = ({ localFrame, fps }) => {
  const spr = spring({
    frame: localFrame,
    fps,
    config: { damping: 12, stiffness: 155 },
  });
  const swing = interpolate(spr, [0, 1], [-22, 0]) + Math.sin(localFrame / 6) * 3;

  return (
    <svg
      width="94"
      height="94"
      viewBox="0 0 96 96"
      fill="none"
      style={{
        transform: `scale(${0.85 + spr * 0.15}) rotate(${swing}deg)`,
        filter: "drop-shadow(0 8px 26px rgba(251, 191, 36, 0.32))",
        flexShrink: 0,
      }}
    >
      <circle
        cx="48"
        cy="48"
        r="40"
        fill="rgba(251, 191, 36, 0.07)"
        stroke="rgba(251, 191, 36, 0.28)"
        strokeWidth="2"
      />
      <g transform="rotate(-30 48 48)">
        <rect x="44" y="10" width="8" height="22" rx="3" stroke={PALETTE.white} strokeWidth="2.8" />
        <path
          d="M 38 32 L 58 32 L 60 76 C 60 80, 36 80, 36 76 Z"
          fill="rgba(251, 191, 36, 0.16)"
          stroke={PALETTE.gold}
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <line x1="48" y1="36" x2="48" y2="72" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" />
      </g>
      <g transform="translate(65, 60)">
        <circle cx="0" cy="0" r="14" fill="rgba(52, 211, 153, 0.2)" stroke={PALETTE.mint} strokeWidth="3.2" />
        <path d="M -9 -9 L 9 9" stroke={PALETTE.white} strokeWidth="2" strokeDasharray="2.5 2.5" />
      </g>
    </svg>
  );
};

/* =========================================================================
   UPPER BLACK SPACE MOTION GRAPHICS & HOOKS (Y: 0px -> 656px)
   Clean, uncrowded editorial layout — zero top status bar, zero watermarks
   ========================================================================= */
export const UpperBlackSpaceGraphics: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const floatY = Math.sin(frame / 7) * 3;

  const getSceneWindow = (start: number, end: number) => {
    const local = frame - start;
    const enter = spring({
      frame: local,
      fps,
      config: { damping: 14, stiffness: 160 },
    });
    const exit = interpolate(frame, [end - 8, end], [1, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    return {
      local,
      enter,
      opacity: enter * exit,
    };
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 1080,
        height: 656,
        pointerEvents: "none",
        zIndex: 45,
        overflow: "hidden",
      }}
    >
      {/* Soft Ambient Radial Glow in Upper Black Space */}
      <div
        style={{
          position: "absolute",
          top: 90,
          left: 190,
          width: 700,
          height: 460,
          background:
            "radial-gradient(circle, rgba(251, 191, 36, 0.08) 0%, rgba(52, 211, 153, 0.04) 45%, rgba(0, 0, 0, 0) 75%)",
          filter: "blur(20px)",
        }}
      />

      {/* =================================================================
          SCENE 1 (Frames 0 - 45 | 0.00s - 1.50s)
          Spoken: "Bhai subah ke 3:15 ho rahe hain"
         ================================================================= */}
      {frame >= 0 && frame < 45 && (() => {
        const { local, opacity } = getSceneWindow(0, 45);
        const subSpr = spring({
          frame: Math.max(0, local - 10),
          fps,
          config: { damping: 15, stiffness: 150 },
        });

        return (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 64px",
              opacity,
              transform: `translateY(${floatY}px)`,
            }}
          >
            <CategoryPill
              label="03:15 AM • LATE NIGHT DISCOVERY"
              accentColor={PALETTE.gold}
              localFrame={local}
              fps={fps}
            />

            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <Clock315Graphic localFrame={local} fps={fps} />
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <StaggeredHeadline
                  localFrame={local}
                  fps={fps}
                  fontSize={74}
                  words={[
                    { text: "AWAKE" },
                    { text: "AT" },
                    { text: "3:15 AM", color: PALETTE.gold },
                  ]}
                />
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontStyle: "italic",
                    fontSize: 40,
                    fontWeight: 600,
                    color: PALETTE.slate,
                    marginTop: 8,
                    opacity: subSpr,
                    transform: `translateY(${interpolate(subSpr, [0, 1], [10, 0])}px)`,
                  }}
                >
                  Sleep Can Officially Wait Tonight.
                </span>
              </div>
            </div>
          </div>
        );
      })()}

      {/* =================================================================
          SCENE 2 (Frames 45 - 100 | 1.50s - 3.34s)
          Spoken: "Maine just abhi apna laptop khola hai"
         ================================================================= */}
      {frame >= 45 && frame < 100 && (() => {
        const { local, opacity } = getSceneWindow(45, 100);
        const subSpr = spring({
          frame: Math.max(0, local - 10),
          fps,
          config: { damping: 15, stiffness: 150 },
        });

        return (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 64px",
              opacity,
              transform: `translateY(${floatY}px)`,
            }}
          >
            <CategoryPill
              label="MIDNIGHT SESSION UNLOCKED"
              accentColor={PALETTE.mint}
              localFrame={local}
              fps={fps}
            />

            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <LaptopWakeGraphic localFrame={local} fps={fps} />
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <StaggeredHeadline
                  localFrame={local}
                  fps={fps}
                  fontSize={64}
                  words={[
                    { text: "JUST" },
                    { text: "OPENED" },
                    { text: "MY LAPTOP", color: PALETTE.mint },
                  ]}
                />
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontStyle: "italic",
                    fontSize: 40,
                    fontWeight: 600,
                    color: PALETTE.gold,
                    marginTop: 8,
                    opacity: subSpr,
                    transform: `translateY(${interpolate(subSpr, [0, 1], [10, 0])}px)`,
                  }}
                >
                  For One Specific Reason...
                </span>
              </div>
            </div>
          </div>
        );
      })()}

      {/* =================================================================
          SCENE 3 (Frames 100 - 232 | 3.34s - 7.72s)
          Spoken: "Kyunki bhai kisi ne EA Sports wali game, jo main bachpan
                   mein khelta tha, jo mera pyaar tha"
         ================================================================= */}
      {frame >= 100 && frame < 232 && (() => {
        const { local, opacity } = getSceneWindow(100, 232);
        const isBachpan = frame >= 170;
        const isPyaar = frame >= 204;

        const underlineProg = interpolate(local, [12, 42], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

        return (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 64px",
              opacity,
              transform: `translateY(${floatY}px)`,
            }}
          >
            <CategoryPill
              label={
                isPyaar
                  ? "FIRST LOVE OF EVERY 2000s KID"
                  : isBachpan
                  ? "CORE CHILDHOOD MEMORY"
                  : "THE LEGENDARY PC CLASSIC"
              }
              accentColor={isPyaar ? PALETTE.gold : PALETTE.mint}
              localFrame={local}
              fps={fps}
            />

            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <CricketCrestGraphic localFrame={local} fps={fps} />
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <StaggeredHeadline
                  localFrame={local}
                  fps={fps}
                  fontSize={68}
                  words={[
                    { text: "EA SPORTS" },
                    { text: "CRICKET", color: PALETTE.gold },
                  ]}
                />

                <div style={{ position: "relative", marginTop: 10 }}>
                  <span
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontStyle: "italic",
                      fontSize: 42,
                      fontWeight: 600,
                      color: isPyaar ? PALETTE.gold : PALETTE.slate,
                    }}
                  >
                    {isPyaar
                      ? "Bachpan Ka Pehla Pyaar."
                      : isBachpan
                      ? "Jo Hum Bachpan Mein Khelte The"
                      : "The Ultimate Childhood Classic"}
                  </span>

                  <svg
                    width="440"
                    height="14"
                    viewBox="0 0 440 14"
                    fill="none"
                    style={{ position: "absolute", bottom: -10, left: 0 }}
                  >
                    <path
                      d="M 4 9 Q 220 2, 434 10"
                      stroke={isPyaar ? PALETTE.gold : PALETTE.mint}
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeDasharray="440"
                      strokeDashoffset={440 * (1 - underlineProg)}
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* =================================================================
          SCENE 4 (Frames 232 - 359 | 7.72s - 11.96s)
          Spoken: "Usko browser pe daal diya, aur main bohot time se wait
                   kar raha tha ki bas mujhe ye game khelne ko mil jaaye"
         ================================================================= */}
      {frame >= 232 && frame < 359 && (() => {
        const { local, opacity } = getSceneWindow(232, 359);
        const isWaiting = frame >= 270;
        const lineProg = interpolate(local, [6, 38], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

        return (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 56px",
              opacity,
              transform: `translateY(${floatY}px)`,
            }}
          >
            <CategoryPill
              label="ZERO INSTALL • DIRECT WEB PORT"
              accentColor={PALETTE.mint}
              localFrame={local}
              fps={fps}
            />

            <StaggeredHeadline
              localFrame={local}
              fps={fps}
              fontSize={64}
              words={[
                { text: "NOW" },
                { text: "LIVE ON" },
                { text: "THE BROWSER", color: PALETTE.gold },
              ]}
            />

            {/* Clean 3-Node Vector Conduit */}
            <svg width="900" height="165" viewBox="0 0 900 165" fill="none" style={{ marginTop: 18 }}>
              <path
                d="M 180 82 L 720 82"
                stroke="rgba(255, 255, 255, 0.14)"
                strokeWidth="3"
                strokeDasharray="8 8"
              />
              <path
                d="M 180 82 L 720 82"
                stroke={PALETTE.mint}
                strokeWidth="3.5"
                strokeDasharray="540"
                strokeDashoffset={540 * (1 - lineProg)}
              />

              {/* Left Node */}
              <g transform="translate(115, 82)">
                <circle
                  r="58"
                  fill="rgba(251, 191, 36, 0.08)"
                  stroke={PALETTE.gold}
                  strokeWidth="2.8"
                />
                <text
                  x="0"
                  y="-4"
                  textAnchor="middle"
                  fill={PALETTE.gold}
                  fontFamily="Inter"
                  fontSize="16"
                  fontWeight="900"
                >
                  CRICKET 07
                </text>
                <text
                  x="0"
                  y="16"
                  textAnchor="middle"
                  fill={PALETTE.slate}
                  fontFamily="JetBrains Mono"
                  fontSize="11"
                  fontWeight="700"
                >
                  CLASSIC PC
                </text>
              </g>

              {/* Center Browser Pill */}
              <g transform="translate(450, 82)">
                <rect
                  x="-165"
                  y="-40"
                  width="330"
                  height="80"
                  rx="40"
                  fill="rgba(15, 23, 42, 0.85)"
                  stroke="rgba(255, 255, 255, 0.22)"
                  strokeWidth="2.5"
                />
                <circle cx="-132" cy="-5" r="6" fill={PALETTE.mint} />
                <text
                  x="6"
                  y="-1"
                  textAnchor="middle"
                  fill={PALETTE.white}
                  fontFamily="JetBrains Mono"
                  fontSize="19"
                  fontWeight="800"
                >
                  browser://play-now
                </text>
                <text
                  x="0"
                  y="22"
                  textAnchor="middle"
                  fill={PALETTE.gold}
                  fontFamily="JetBrains Mono"
                  fontSize="12"
                  fontWeight="800"
                >
                  {isWaiting ? "YEARS OF WAITING = OVER" : "NO DOWNLOAD REQUIRED"}
                </text>
              </g>

              {/* Right Node */}
              <g transform="translate(785, 82)">
                <circle
                  r="58"
                  fill="rgba(52, 211, 153, 0.08)"
                  stroke={PALETTE.mint}
                  strokeWidth="2.8"
                />
                <polygon points="-8,-16 18,-2 -8,12" fill={PALETTE.mint} />
                <text
                  x="0"
                  y="32"
                  textAnchor="middle"
                  fill={PALETTE.mint}
                  fontFamily="JetBrains Mono"
                  fontSize="11"
                  fontWeight="800"
                >
                  INSTANT PLAY
                </text>
              </g>
            </svg>
          </div>
        );
      })()}

      {/* =================================================================
          SCENE 5 (Frames 359 - 465 | 11.96s - 15.50s)
          Spoken: "To bhai ho sakta hai tum mein se kaafi logon ka sapna ho
                   is game ko dobara khelna. Mera to tha."
         ================================================================= */}
      {frame >= 359 && frame < 465 && (() => {
        const { local, opacity } = getSceneWindow(359, 465);
        const isMeraToTha = frame >= 448;
        const stampSpr = spring({
          frame: Math.max(0, frame - 448),
          fps,
          config: { damping: 12, stiffness: 190 },
        });

        return (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 64px",
              opacity,
              transform: `translateY(${floatY}px)`,
            }}
          >
            <CategoryPill
              label="CHILDHOOD BUCKET-LIST UNLOCKED"
              accentColor={PALETTE.gold}
              localFrame={local}
              fps={fps}
            />

            <StaggeredHeadline
              localFrame={local}
              fps={fps}
              fontSize={68}
              words={[
                { text: "PLAY IT" },
                { text: "ONE MORE TIME", color: PALETTE.gold },
              ]}
            />

            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontSize: 42,
                fontWeight: 600,
                color: PALETTE.slate,
                marginTop: 10,
              }}
            >
              Har 2000s Kid Ka Sapna...
            </span>

            {isMeraToTha && (
              <div
                style={{
                  marginTop: 20,
                  transform: `scale(${interpolate(stampSpr, [0, 1], [1.35, 1])})`,
                  opacity: stampSpr,
                  backgroundColor: "rgba(52, 211, 153, 0.12)",
                  border: `2px solid ${PALETTE.mint}`,
                  borderRadius: 999,
                  padding: "8px 28px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 22,
                  fontWeight: 900,
                  letterSpacing: "2.5px",
                  color: PALETTE.mint,
                  boxShadow: "0 0 24px rgba(52, 211, 153, 0.25)",
                }}
              >
                ✓ MERA TOH THA
              </div>
            )}
          </div>
        );
      })()}

      {/* =================================================================
          SCENE 6 (Frames 465 - 640 | 15.50s - 21.32s)
          Spoken: "Main 3 baje laptop khol ke pichle aadhe ghante se laga hoon,
                   aur main ye bhi soch raha tha ki agar tum mein se koi khelna
                   chahta hai to main use link share kar dunga"
         ================================================================= */}
      {frame >= 465 && frame < 640 && (() => {
        const { local, opacity } = getSceneWindow(465, 640);
        const isSharingOffer = frame >= 544;
        const offerLocal = Math.max(0, frame - 544);

        return (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 64px",
              opacity,
              transform: `translateY(${floatY}px)`,
            }}
          >
            {!isSharingOffer ? (
              <>
                <CategoryPill
                  label="03:00 AM ➔ 03:30 AM SESSION"
                  accentColor={PALETTE.mint}
                  localFrame={local}
                  fps={fps}
                />
                <StaggeredHeadline
                  localFrame={local}
                  fps={fps}
                  fontSize={68}
                  words={[
                    { text: "30 MINS" },
                    { text: "NON-STOP", color: PALETTE.gold },
                  ]}
                />
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontStyle: "italic",
                    fontSize: 42,
                    fontWeight: 600,
                    color: PALETTE.slate,
                    marginTop: 10,
                  }}
                >
                  3 Baje Se Laptop Pe Laga Hoon
                </span>
              </>
            ) : (
              <>
                <CategoryPill
                  label="DIRECT BROWSER LINK READY"
                  accentColor={PALETTE.gold}
                  localFrame={offerLocal}
                  fps={fps}
                />
                <StaggeredHeadline
                  localFrame={offerLocal}
                  fps={fps}
                  fontSize={68}
                  words={[
                    { text: "WANT THE" },
                    { text: "GAME LINK?", color: PALETTE.mint },
                  ]}
                />
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontStyle: "italic",
                    fontSize: 42,
                    fontWeight: 600,
                    color: PALETTE.slate,
                    marginTop: 10,
                  }}
                >
                  Play Directly On Your Browser
                </span>
              </>
            )}
          </div>
        );
      })()}

      {/* =================================================================
          SCENE 7 (Frames 640 - 767 | 21.32s - 25.57s)
          Spoken: "To is video mein comment kar dena CRICKET aur main tum
                   sabhi ke DM mein is game ka link bhej dunga"
         ================================================================= */}
      {frame >= 640 && (() => {
        const local = frame - 640;
        const spr = spring({
          frame: local,
          fps,
          config: { damping: 14, stiffness: 165 },
        });

        return (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 64px",
              opacity: spr,
              transform: `translateY(${floatY}px)`,
            }}
          >
            <CategoryPill
              label="INSTANT DM LINK DELIVERY"
              accentColor={PALETTE.mint}
              localFrame={local}
              fps={fps}
            />

            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <svg
                width="62"
                height="62"
                viewBox="0 0 64 64"
                fill="none"
                style={{
                  filter: "drop-shadow(0 6px 20px rgba(251, 191, 36, 0.3))",
                  flexShrink: 0,
                }}
              >
                <path
                  d="M 8 30 L 56 10 L 42 54 L 28 38 L 8 30 Z"
                  fill="rgba(251, 191, 36, 0.14)"
                  stroke={PALETTE.gold}
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M 56 10 L 28 38"
                  stroke={PALETTE.mint}
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>

              <StaggeredHeadline
                localFrame={local}
                fps={fps}
                fontSize={68}
                words={[
                  { text: "COMMENT" },
                  { text: "“CRICKET”", color: PALETTE.gold },
                ]}
              />
            </div>

            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontSize: 40,
                fontWeight: 600,
                color: PALETTE.slate,
                marginTop: 12,
              }}
            >
              Direct Game Link Seedha Tumhare DM Mein
            </span>
          </div>
        );
      })()}
    </div>
  );
};
