import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const Scene2Geometry3D: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 16, stiffness: 180 },
  });

  // Rotation angles for 3D cubes
  const rotX = interpolate(frame, [0, 80], [25, 145]);
  const rotY = interpolate(frame, [0, 80], [-35, 215]);
  const rotZ = interpolate(frame, [0, 80], [10, -60]);

  // Secondary inner cube counter-rotation
  const innerRotX = -rotX * 1.5;
  const innerRotY = -rotY * 1.2;

  // Camera zoom push
  const cameraZ = interpolate(frame, [0, 60, 80], [-200, 50, 450]);

  // Cube dimensions
  const outerSize = 280;
  const halfOuter = outerSize / 2;
  const innerSize = 160;
  const halfInner = innerSize / 2;

  // Face definition helper
  const faces = [
    { transform: `rotateY(0deg) translateZ(${halfOuter}px)`, color: "rgba(0, 240, 255, 0.08)", border: "#00F0FF" },
    { transform: `rotateY(180deg) translateZ(${halfOuter}px)`, color: "rgba(189, 0, 255, 0.08)", border: "#BD00FF" },
    { transform: `rotateY(90deg) translateZ(${halfOuter}px)`, color: "rgba(0, 255, 157, 0.08)", border: "#00FF9D" },
    { transform: `rotateY(-90deg) translateZ(${halfOuter}px)`, color: "rgba(255, 229, 0, 0.08)", border: "#FFE500" },
    { transform: `rotateX(90deg) translateZ(${halfOuter}px)`, color: "rgba(255, 0, 127, 0.08)", border: "#FF007F" },
    { transform: `rotateX(-90deg) translateZ(${halfOuter}px)`, color: "rgba(0, 240, 255, 0.08)", border: "#00F0FF" },
  ];

  const innerFaces = [
    { transform: `rotateY(0deg) translateZ(${halfInner}px)`, border: "#FFE500" },
    { transform: `rotateY(180deg) translateZ(${halfInner}px)`, border: "#FFE500" },
    { transform: `rotateY(90deg) translateZ(${halfInner}px)`, border: "#00F0FF" },
    { transform: `rotateY(-90deg) translateZ(${halfInner}px)`, border: "#00F0FF" },
    { transform: `rotateX(90deg) translateZ(${halfInner}px)`, border: "#BD00FF" },
    { transform: `rotateX(-90deg) translateZ(${halfInner}px)`, border: "#BD00FF" },
  ];

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#06080F",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        perspective: 1200,
      }}
    >
      {/* Background Radial Glow */}
      <div
        style={{
          position: "absolute",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(189,0,255,0.2) 0%, rgba(0,240,255,0.08) 45%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Orbiting Concentric Rings */}
      {[540, 720, 920].map((ringSize, i) => {
        const ringRot = (frame * (i % 2 === 0 ? 0.8 : -0.6) + i * 45) % 360;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              width: ringSize,
              height: ringSize,
              borderRadius: "50%",
              border: `1px ${i === 1 ? "dashed" : "solid"} rgba(0, 240, 255, ${0.15 + i * 0.08})`,
              transform: `rotate(${ringRot}deg)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            {/* Orbiting Node Beacon */}
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: i === 0 ? "#FFE500" : i === 1 ? "#00F0FF" : "#FF007F",
                boxShadow: "0 0 16px currentColor",
                marginRight: -5,
              }}
            />
          </div>
        );
      })}

      {/* 3D Container */}
      <div
        style={{
          position: "relative",
          width: outerSize,
          height: outerSize,
          transformStyle: "preserve-3d",
          transform: `translateZ(${cameraZ}px) rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg) scale(${enterSpring})`,
        }}
      >
        {/* Outer 3D Cube Faces */}
        {faces.map((face, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              width: outerSize,
              height: outerSize,
              background: face.color,
              border: `2px solid ${face.border}`,
              boxShadow: `inset 0 0 25px ${face.border}33, 0 0 25px ${face.border}33`,
              transform: face.transform,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(4px)",
            }}
          >
            {/* Center Grid Motif */}
            <div
              style={{
                width: 60,
                height: 60,
                border: `1px dashed ${face.border}`,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ width: 8, height: 8, backgroundColor: face.border, borderRadius: "50%" }} />
            </div>
          </div>
        ))}

        {/* Inner Counter-Rotating Nested 3D Cube */}
        <div
          style={{
            position: "absolute",
            top: (outerSize - innerSize) / 2,
            left: (outerSize - innerSize) / 2,
            width: innerSize,
            height: innerSize,
            transformStyle: "preserve-3d",
            transform: `rotateX(${innerRotX}deg) rotateY(${innerRotY}deg)`,
          }}
        >
          {innerFaces.map((face, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                width: innerSize,
                height: innerSize,
                background: "rgba(255, 255, 255, 0.04)",
                border: `1.5px solid ${face.border}`,
                boxShadow: `0 0 15px ${face.border}`,
                transform: face.transform,
              }}
            />
          ))}
        </div>
      </div>

      {/* Futuristic Floating Telemetry Overlays */}
      <div
        style={{
          position: "absolute",
          top: "18%",
          left: "10%",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        <span style={{ fontSize: 13, color: "#00F0FF", letterSpacing: 3, fontWeight: 700 }}>
          [02] 3D ISOMETRIC ENGINE
        </span>
        <span style={{ fontSize: 28, color: "#FFFFFF", fontWeight: 900, letterSpacing: 2 }}>
          SPATIAL TOPOLOGY
        </span>
        <div style={{ display: "flex", gap: 12, marginTop: 4, fontSize: 12, color: "rgba(255,255,255,0.6)" }}>
          <span>ROT_X: {rotX.toFixed(1)}°</span>
          <span>ROT_Y: {rotY.toFixed(1)}°</span>
          <span>TENSOR: STABLE</span>
        </div>
      </div>

      {/* Floating Capability Badge on Right */}
      <div
        style={{
          position: "absolute",
          bottom: "22%",
          right: "10%",
          padding: "18px 28px",
          background: "rgba(10, 15, 28, 0.75)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(0, 240, 255, 0.3)",
          borderRadius: 16,
          boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#FFE500" }} />
          <span style={{ fontSize: 12, color: "#FFE500", letterSpacing: 2, fontWeight: 700, fontFamily: "monospace" }}>
            COMPUTATIONAL DYNAMICS
          </span>
        </div>
        <span style={{ fontSize: 18, color: "#FFFFFF", fontWeight: 800 }}>
          True 3D CSS Matrix Transform
        </span>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
          Nested gimbal orientation with zero raster artifacts
        </span>
      </div>
    </div>
  );
};
