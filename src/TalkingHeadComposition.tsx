import React from "react";
import { AbsoluteFill, Sequence, staticFile } from "remotion";
import { Video } from "@remotion/media";
import { Captions } from "./Captions";
import { LowerThird } from "./LowerThird";

export const TalkingHeadComposition: React.FC = () => {
  const fps = 30;

  return (
    <AbsoluteFill style={{
      backgroundColor: "#000000",
      translate: "-109.4px -386.4px"
    }}>
      {/* 
        Jump Cuts Sequence (Trimming silence & gaps):
        Segment 1: 0s to 9.34s (Frames 0 - 280)
        Segment 2: 10.22s to 32.40s (Frames 306 - 972) -> 665 frames
        Segment 3: 33.54s to 40.28s (Frames 1006 - 1208) -> 202 frames
        Segment 4: 41.08s to 43.46s (Frames 1232 - 1303) -> 71 frames
      */}
      {/* Segment 1 */}
      <Sequence from={0} durationInFrames={280}>
        <Video
          src={staticFile("video.mp4")}
          startFrom={0}
          endAt={280}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Sequence>
      {/* Segment 2 (silence from 9.34s to 10.22s cut out) */}
      <Sequence from={280} durationInFrames={665}>
        <Video
          src={staticFile("video.mp4")}
          startFrom={306}
          endAt={971}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Sequence>
      {/* Segment 3 (silence from 32.40s to 33.54s cut out) */}
      <Sequence from={945} durationInFrames={202}>
        <Video
          src={staticFile("video.mp4")}
          startFrom={1006}
          endAt={1208}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Sequence>
      {/* Segment 4 (silence from 40.28s to 41.08s cut out) */}
      <Sequence from={1147} durationInFrames={71}>
        <Video
          src={staticFile("video.mp4")}
          startFrom={1232}
          endAt={1303}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Sequence>
      {/* Animated Lower-Third Title Overlay */}
      <LowerThird />
      {/* Dynamic Word-by-Word Karaoke Captions */}
      <Captions />
    </AbsoluteFill>
  );
};
