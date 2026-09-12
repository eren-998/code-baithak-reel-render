import { Composition } from "remotion";
import { PolishedReelVideo } from "./Composition";
import { TalkingHeadComposition } from "./TalkingHeadComposition";
import { TalkingHeadLightComposition } from "./TalkingHeadLightComposition";
import { APUComposition } from "./apu/APUComposition";

export const RemotionRoot = () => {
  return (
    <>
      {/* Polished Reel Composition */}
      <Composition
        id="ReelPolish"
        component={PolishedReelVideo}
        durationInFrames={1396}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* Aircraft APU Flowchart Explainer Video */}
      <Composition
        id="APUExplainer"
        component={APUComposition}
        durationInFrames={1385}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* Ultra-Fast 720p Mobile-Optimized Composition */}
      <Composition
        id="TalkingHeadLight"
        component={TalkingHeadLightComposition}
        durationInFrames={1017}
        fps={25}
        width={720}
        height={1280}
      />

      {/* 1440p Master Composition */}
      <Composition
        id="TalkingHead"
        component={TalkingHeadComposition}
        durationInFrames={1218}
        fps={30}
        width={1440}
        height={2560}
      />
    </>
  );
};
