import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

const useCardEntrance = (startFrame: number) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = Math.max(0, frame - startFrame);
  const spr = spring({
    frame: localFrame,
    fps,
    config: { damping: 18, stiffness: 180 },
  });
  return {
    opacity: interpolate(spr, [0, 1], [0, 1]),
    translateY: interpolate(spr, [0, 1], [-12, 0]),
    scale: interpolate(spr, [0, 1], [0.97, 1]),
  };
};

/**
 * 1. White Hook Pill (0.00s - 2.62s | Frames 0 - 79)
 * Matches Ref_anlyze_vid.mp4 frame 0.5s: White rounded pill at top-third
 */
const HookPillOverlay: React.FC<{ startFrame: number }> = ({ startFrame }) => {
  const { opacity, translateY, scale } = useCardEntrance(startFrame);
  return (
    <div
      style={{
        position: "absolute",
        top: 165,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: 45,
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: 22,
          padding: "20px 38px",
          display: "inline-flex",
          alignItems: "center",
          gap: 16,
          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.28)",
        }}
      >
        <span
          style={{
            color: "#0A0A0A",
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 42,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          Python Syntax Changed ??
        </span>
        {/* Custom SVG Shocked/Alert Badge (Zero Generic Emojis) */}
        <svg width="46" height="46" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="22" fill="#FACC15" stroke="#0A0A0A" strokeWidth="3" />
          <ellipse cx="17" cy="19" rx="3.2" ry="4.5" fill="#0A0A0A" />
          <ellipse cx="31" cy="19" rx="3.2" ry="4.5" fill="#0A0A0A" />
          <ellipse cx="24" cy="33" rx="5.5" ry="6.5" fill="#0A0A0A" />
          <path d="M12 11C14 8.5 17.5 8 20 9.5" stroke="#0A0A0A" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M36 11C34 8.5 30.5 8 28 9.5" stroke="#0A0A0A" strokeWidth="2.8" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
};

/**
 * 2. Python Code Snippet Card (5.68s - 7.27s | Frames 170 - 218)
 * Matches Ref_anlyze_vid.mp4 frame 4.2s: Dark slate card with python / import math / # Usage / print(math.pi)
 */
const PythonSnippetCard: React.FC<{ startFrame: number }> = ({ startFrame }) => {
  const { opacity, translateY, scale } = useCardEntrance(startFrame);
  return (
    <div
      style={{
        position: "absolute",
        top: 115,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: 45,
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: 740,
          backgroundColor: "#23272E",
          borderRadius: 8,
          padding: "30px 42px 34px 42px",
          boxShadow: "0 16px 40px rgba(0, 0, 0, 0.45)",
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        <div
          style={{
            color: "#FFFFFF",
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 48,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          python
        </div>

        <div
          style={{
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            fontSize: 34,
            fontWeight: 500,
            lineHeight: 1.55,
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          <div>
            <span style={{ color: "#C678DD" }}>import</span>{" "}
            <span style={{ color: "#E5C07B" }}>math</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ color: "#7F848E", fontStyle: "italic" }}># Usage</span>
            <div>
              <span style={{ color: "#E6E6E6" }}>print(math.pi)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 3 & 5. Comparison Code Card (NORMAL IMPORT vs LAZY IMPORT)
 * Matches Ref_anlyze_vid.mp4 frames 7.5s and 16.0s
 */
const ImportComparisonCard: React.FC<{
  startFrame: number;
  title: string;
  codeText: string;
  codeColor: string;
  description: string;
}> = ({ startFrame, title, codeText, codeColor, description }) => {
  const { opacity, translateY, scale } = useCardEntrance(startFrame);
  return (
    <div
      style={{
        position: "absolute",
        top: 125,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: 45,
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: 980,
          backgroundColor: "#050505",
          borderRadius: 6,
          padding: "28px 34px 30px 34px",
          boxShadow: "0 18px 44px rgba(0, 0, 0, 0.5)",
          display: "flex",
          flexDirection: "column",
          gap: 22,
        }}
      >
        <div
          style={{
            color: "#FFFFFF",
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 38,
            fontWeight: 800,
            letterSpacing: "0.01em",
            textTransform: "uppercase",
          }}
        >
          {title}
        </div>

        <div
          style={{
            backgroundColor: "#171717",
            borderRadius: 16,
            padding: "24px 30px",
            border: "1px solid rgba(255, 255, 255, 0.07)",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <span
            style={{
              color: codeColor,
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              fontSize: 31,
              fontWeight: 600,
            }}
          >
            {codeText}
          </span>
          <span
            style={{
              color: "#D4D4D8",
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 28,
              fontWeight: 500,
            }}
          >
            {description}
          </span>
        </div>
      </div>
    </div>
  );
};

/**
 * 4 & 6. 50-Module Grid Card (NORMAL IMPORT 50/50 vs LAZY IMPORT 10/50)
 * Matches Ref_anlyze_vid.mp4 frames 11.2s and 19.8s
 */
const ModuleGridCard: React.FC<{
  startFrame: number;
  title: string;
  subtitle: string;
  counter: string;
  loadedCount: number;
  showLegend?: boolean;
}> = ({ startFrame, title, subtitle, counter, loadedCount, showLegend = false }) => {
  const { opacity, translateY, scale } = useCardEntrance(startFrame);
  const cells = Array.from({ length: 50 }, (_, idx) => idx < loadedCount);

  return (
    <div
      style={{
        position: "absolute",
        top: 125,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: 45,
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: 980,
          backgroundColor: "#0B0B0C",
          borderRadius: 6,
          padding: "22px 28px 24px 28px",
          boxShadow: "0 18px 44px rgba(0, 0, 0, 0.55)",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div
          style={{
            color: "#FFFFFF",
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 24,
            fontWeight: 800,
            letterSpacing: "0.02em",
            textTransform: "uppercase",
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "#FACC15",
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 21,
              fontWeight: 600,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
            }}
          >
            {subtitle}
          </span>
          <span
            style={{
              color: "#FACC15",
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 25,
              fontWeight: 800,
            }}
          >
            {counter}
          </span>
        </div>

        {/* 10 columns x 5 rows = 50 modules */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(10, 1fr)",
            gap: "6px",
            marginTop: 4,
          }}
        >
          {cells.map((isLoaded, i) => (
            <div
              key={i}
              style={{
                height: 22,
                borderRadius: 3,
                backgroundColor: isLoaded ? "#FACC15" : "#27272A",
              }}
            />
          ))}
        </div>

        {showLegend && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginTop: 6,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 3,
                  backgroundColor: "#FACC15",
                }}
              />
              <span
                style={{
                  color: "#D4D4D8",
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: 17,
                  fontWeight: 500,
                }}
              >
                Loaded
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 3,
                  backgroundColor: "#27272A",
                }}
              />
              <span
                style={{
                  color: "#A1A1AA",
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: 17,
                  fontWeight: 500,
                }}
              >
                Not loaded yet
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const PythonLazyImportOverlays: React.FC = () => {
  const frame = useCurrentFrame();

  // Card 1: 0.00s - 2.62s (Frames 0 - 79)
  if (frame >= 0 && frame < 79) {
    return <HookPillOverlay startFrame={0} />;
  }

  // Card 2: 5.68s - 7.27s (Frames 170 - 218) -> "Haan bhai, main import statement ki baat kar raha hoon"
  if (frame >= 170 && frame < 218) {
    return <PythonSnippetCard startFrame={170} />;
  }

  // Card 3: 7.28s - 9.79s (Frames 218 - 294) -> "Ab pehle kya hota tha, jab bhi aap import statement likhte the"
  if (frame >= 218 && frame < 294) {
    return (
      <ImportComparisonCard
        startFrame={218}
        title="NORMAL IMPORT"
        codeText="import json"
        codeColor="#F472B6"
        description="Module loads during import processing."
      />
    );
  }

  // Card 4: 9.80s - 12.94s (Frames 294 - 388) -> "toh aapke saare ke saare import statement load ho jaate the likhne ke time par hi"
  if (frame >= 294 && frame < 388) {
    return (
      <ModuleGridCard
        startFrame={294}
        title="NORMAL IMPORT"
        subtitle="50 MODULES LOADED"
        counter="50/50"
        loadedCount={50}
      />
    );
  }

  // Card 5: 13.96s - 16.56s (Frames 419 - 497) -> "import ke aage lazy likh sakte ho! Ab jisse hoga kya..."
  if (frame >= 419 && frame < 497) {
    return (
      <ImportComparisonCard
        startFrame={419}
        title="LAZY IMPORT"
        codeText="lazy import json"
        codeColor="#4ADE80"
        description="Module loading can be deferred until first use."
      />
    );
  }

  // Card 6: 16.56s - 22.90s (Frames 497 - 687) -> "jab bhi woh module use hoga, sirf usi time par aapka module load hoga. Ab isse aapka initial runtime... kaafi fast ho jayega"
  if (frame >= 497 && frame < 687) {
    return (
      <ModuleGridCard
        startFrame={497}
        title="LAZY IMPORT"
        subtitle="ONLY 10 LOADED SO FAR"
        counter="10/50"
        loadedCount={10}
        showLegend={true}
      />
    );
  }

  return null;
};
