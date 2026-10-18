import React from "react";

export const BlackFooterFade: React.FC<{ height?: number }> = ({
  height = 450,
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
          "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.75) 35%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)",
        pointerEvents: "none",
        zIndex: 30,
      }}
    />
  );
};
