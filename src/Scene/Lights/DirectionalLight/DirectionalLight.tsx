import React, { useRef } from "react";
import { useControls } from "leva";
import { Helper } from "./Helper";

export const DirectionalLight: React.FC = () => {
  const lightRef = useRef<THREE.DirectionalLight>(null!);

  const { position, color, helper, intensity } = useControls(
    "Directional Lights Options",
    {
      position: { value: [0, 0, 0], step: 1, label: "Position" },
      intensity: { value: 0, step: 0.1, min: 0, label: "Intensity" },
      color: { value: "#fff", label: "Color" },
      helper: { value: false, label: "Show helper" },
    },
    {
      order: 2,
      collapsed: true,
    }
  );

  return (
    <>
      <directionalLight
        ref={lightRef}
        position={position}
        color={color}
        intensity={intensity}
      />
      {helper && <Helper light={lightRef} />}
    </>
  );
};
