import React from "react";
import { AbsoluteFill, staticFile, Solid } from "remotion";
import { Video } from "@remotion/media";
import { CaptionsLight } from "./CaptionsLight";
import { LowerThirdLight } from "./LowerThirdLight";

export const TalkingHeadLightComposition: React.FC = () => {
  return (
    <AbsoluteFill style={{
      backgroundColor: "#000000",
      translate: "139.5px -222.8px"
    }}>
      {/* Single pre-cut 720p H.264 video for 100% smooth, lag-free mobile playback */}
      <Video
        src={staticFile("video_fast.mp4")}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          translate: "-770px 351.7px"
        }}
        from={345} />
      {/* Lightweight Lower Third Banner */}
      <LowerThirdLight />
      {/* Beautiful Lightweight Karaoke Captions */}
      <CaptionsLight />
      <Solid width={720} height={1280} color="gray" style={{
        position: 'absolute',
        scale: 1.076
      }} />
    </AbsoluteFill>
  );
};
