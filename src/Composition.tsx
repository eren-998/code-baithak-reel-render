import React from "react";
import { OffthreadVideo, staticFile } from "remotion";
import { BlackFooterFade } from "./components/BlackFooterFade";
import { MinimalCaptions } from "./components/MinimalCaptions";
import captionsData from "../public/captions.json";

export const PolishedReelVideo: React.FC = () => {
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
      {/* Layer 1: Cleaned 1080x1920 Vertical Video */}
      <OffthreadVideo
        src={staticFile("video_input.mp4")}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1080,
          height: 1920,
          objectFit: "cover",
        }}
      />

      {/* Layer 2: Bottom Vignette for Caption Readability */}
      <BlackFooterFade height={450} />

      {/* Layer 3: Word-Level Synchronized Roman Hinglish Captions */}
      <MinimalCaptions captions={captionsData} />
    </div>
  );
};
