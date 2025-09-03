import React, { useRef, useMemo } from "react";
import { Helper } from "./Helper";
import { useControls } from "leva";
import * as THREE from "three";

export const SpotLight: React.FC = () => {
  const lightRef = useRef<THREE.SpotLight>(null!);

  const { color, angle, decay, intensity, penumbra, position, helper } =
    useControls(
      "SpotLight Options",
      {
        color: { value: "#fff", label: "Color" },
        intensity: { value: 0, min: 0, max: 100, step: 1, label: "Intensity" },
        angle: {
          value: 0,
          min: 0,
          max: Math.PI / 2,
          step: 0.01,
          label: "Angle",
        },
        penumbra: { value: 0, min: 0, max: 1, step: 0.01, label: "Penumbra" },
        decay: { value: 0, label: "Decay" },
        position: { value: [0, 0, 0], step: 1, label: "Position" },
        helper: { value: false, label: "Show helper" },
      },
      { order: 2, collapsed: true }
    );

  /**
   * Calculate distance from spotlight position to point [0,0,0]
   */
  const distance = useMemo(() => {
    const [x, y, z] = position;
    const diagonal = Math.sqrt(x ** 2 + y ** 2 + z ** 2);

    return diagonal;
  }, [position]);

  return (
    <>
      <spotLight
        ref={lightRef}
        color={color}
        intensity={intensity}
        distance={distance}
        angle={angle}
        penumbra={penumbra}
        decay={decay}
        position={position}
      />
      {helper && <Helper light={lightRef} />}
    </>
  );
};
