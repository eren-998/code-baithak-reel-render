import React from "react";
import { Audio, Sequence, staticFile, useCurrentFrame } from "remotion";
import { Scene1KineticType } from "./Scene1KineticType";
import { Scene2Geometry3D } from "./Scene2Geometry3D";
import { Scene3LiquidUI } from "./Scene3LiquidUI";
import { Scene4VectorMorph } from "./Scene4VectorMorph";
import { Scene5CyberHUD } from "./Scene5CyberHUD";
import { Scene6OutroBranding } from "./Scene6OutroBranding";
import { ShowreelHUD } from "./ShowreelHUD";

export const ShowreelMaster: React.FC = () => {
  const frame = useCurrentFrame();

  // Glitch cut flash detector at scene boundaries (every 75 frames)
  const isCutFrame = [74, 75, 149, 150, 224, 225, 299, 300, 374, 375].includes(frame);

  return (
    <div
      style={{
        position: "relative",
        width: 1920,
        height: 1080,
        backgroundColor: "#000000",
        overflow: "hidden",
      }}
    >
      {/* Background Synthesized 128 BPM Master Audio Track */}
      <Audio src={staticFile("showreel_audio.mp3")} volume={1.0} />

      {/* 6 Seamless Choreographed Showreel Scenes */}
      {/* Scene 1: Kinetic Typography & Identity Hook (0 - 75) */}
      <Sequence from={0} durationInFrames={75}>
        <Scene1KineticType />
      </Sequence>

      {/* Scene 2: 3D Spatial Geometry Matrix (75 - 150) */}
      <Sequence from={75} durationInFrames={75}>
        <Scene2Geometry3D />
      </Sequence>

      {/* Scene 3: Kinetic UI & Liquid Glass Choreography (150 - 225) */}
      <Sequence from={150} durationInFrames={75}>
        <Scene3LiquidUI />
      </Sequence>

      {/* Scene 4: Computational Vector Dynamics (225 - 300) */}
      <Sequence from={225} durationInFrames={75}>
        <Scene4VectorMorph />
      </Sequence>

      {/* Scene 5: Tactical Cyber HUD & Audio Reactive Spectrum (300 - 375) */}
      <Sequence from={300} durationInFrames={75}>
        <Scene5CyberHUD />
      </Sequence>

      {/* Scene 6: Climax Singularity & Outro Résumé Card (375 - 450) */}
      <Sequence from={375} durationInFrames={75}>
        <Scene6OutroBranding />
      </Sequence>

      {/* Global Inversion Glitch Flash on Hard Cuts */}
      {isCutFrame && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#FFFFFF",
            mixBlendMode: "difference",
            zIndex: 90,
            pointerEvents: "none",
          }}
        />
      )}

      {/* Global Persistent Broadcast-Grade Viewfinder HUD */}
      <ShowreelHUD />
    </div>
  );
};
