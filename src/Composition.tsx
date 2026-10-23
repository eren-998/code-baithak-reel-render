import React from "react";
import {
  OffthreadVideo,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";
import { MinimalCaptions } from "./components/MinimalCaptions";
import { UpperBlackSpaceGraphics } from "./components/CricketReelGraphics";
import captionsData from "../public/captions.json";

export const PolishedReelVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Subtle camera punch-in/out cadence across edited cuts so jump cuts feel seamless
  const isZoomSegment =
    (frame >= 100 && frame < 230) ||
    (frame >= 359 && frame < 465) ||
    (frame >= 544 && frame < 640);

  const zoomSpr = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 120 },
  });

  const videoScale = isZoomSegment
    ? interpolate(zoomSpr, [0, 1], [1, 1.04])
    : 1.0;

  return (
    <div
      style={{
        position: "relative",
        width: 1080,
        height: 1920,
        backgroundColor: "#000000",
        overflow: "hidden",
      }}
    >
      {/* =================================================================
          1. CENTER 16:9 VIDEO STAGE (Y: 656px -> 1264px | 1080 x 608)
          100% Untouched Facecam — Zero Text Overlays Inside This Zone
         ================================================================= */}
      <div
        style={{
          position: "absolute",
          top: 656,
          left: 0,
          width: 1080,
          height: 608,
          overflow: "hidden",
          zIndex: 15,
          backgroundColor: "#000000",
        }}
      >
        <OffthreadVideo
          src={staticFile("video_input.mp4")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: `scale(${videoScale})`,
            transformOrigin: "center center",
          }}
        />

        {/* Seamless top & bottom cinema edge blend into pure black */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, #000000 0%, rgba(0,0,0,0) 7%, rgba(0,0,0,0) 93%, #000000 100%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* =================================================================
          2. UPPER BLACK SPACE MOTION GRAPHICS & HOOKS (Y: 0px -> 656px)
         ================================================================= */}
      <UpperBlackSpaceGraphics />

      {/* =================================================================
          3. SKILL REFERENCE MINIMAL CAPTIONS IN LOWER BLACK SPACE
         ================================================================= */}
      <MinimalCaptions captions={captionsData} />
    </div>
  );
};
