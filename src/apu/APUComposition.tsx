import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";

import { Scene1Intro } from "./Scene1Intro";
import { Scene2Architecture } from "./Scene2Architecture";
import { Scene3Thermodynamics } from "./Scene3Thermodynamics";
import { Scene4Distribution } from "./Scene4Distribution";
import { Scene5StartupSequence } from "./Scene5StartupSequence";
import { Scene6Summary } from "./Scene6Summary";
import { theme } from "./types";

export const APUComposition: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const progressPercent = Math.min(100, Math.max(0, (frame / durationInFrames) * 100));

  return (
    <AbsoluteFill style={{ backgroundColor: theme.bg }}>
      <TransitionSeries>
        {/* SCENE 1: Introduction & Location */}
        <TransitionSeries.Sequence durationInFrames={240}>
          <Scene1Intro />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 15 })}
        />

        {/* SCENE 2: System Flowchart Architecture */}
        <TransitionSeries.Sequence durationInFrames={240}>
          <Scene2Architecture />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: 15 })}
        />

        {/* SCENE 3: Thermodynamic Brayton Cycle */}
        <TransitionSeries.Sequence durationInFrames={240}>
          <Scene3Thermodynamics />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 15 })}
        />

        {/* SCENE 4: Dual Output Distribution */}
        <TransitionSeries.Sequence durationInFrames={240}>
          <Scene4Distribution />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: 15 })}
        />

        {/* SCENE 5: Cockpit Startup Sequence */}
        <TransitionSeries.Sequence durationInFrames={260}>
          <Scene5StartupSequence />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 15 })}
        />

        {/* SCENE 6: Specification & Summary Scorecard */}
        <TransitionSeries.Sequence durationInFrames={240}>
          <Scene6Summary />
        </TransitionSeries.Sequence>
      </TransitionSeries>

      {/* Global Top Edge Progress Bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: 3,
          width: `${progressPercent}%`,
          backgroundColor: theme.accentCyan,
          boxShadow: `0 0 10px ${theme.accentCyan}`,
          zIndex: 100,
        }}
      />
    </AbsoluteFill>
  );
};
