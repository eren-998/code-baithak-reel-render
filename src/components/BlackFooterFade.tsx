import React from "react";

export const BlackFooterFade: React.FC<{ height?: number }> = ({
  height = 840,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: height,
        background:
          "linear-gradient(to top, rgba(2,4,10,0.96) 0%, rgba(4,8,18,0.88) 38%, rgba(6,10,22,0.72) 68%, rgba(6,10,22,0.28) 88%, rgba(0,0,0,0) 100%)",
        pointerEvents: "none",
        zIndex: 20,
      }}
    />
  );
};
