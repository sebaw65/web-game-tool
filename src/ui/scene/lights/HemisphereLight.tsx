import React, { useRef } from "react";
import { useControls } from "leva";
import { HemisphereLight as HemisphereLightType } from "three";
import { Helper } from "./Helper";
import { LightType } from "@/model/lightType";

export const HemisphereLight: React.FC = () => {
  const lightRef = useRef<HemisphereLightType>(null!);

  const { color, groundColor, intensity, position, helper } = useControls(
    "Hemisphere Light Options",
    {
      color: { value: "#fff", label: "Color" },
      groundColor: { value: "#000", label: "Ground Color" },
      intensity: { value: 2.5, step: 0.1, min: 0, label: "Intensity" },
      position: { value: [0, 0, 50], step: 1, label: "Position" },
      helper: { value: false, label: "Show helper" },
    },
    { order: 2, collapsed: true }
  );

  return (
    <>
      <hemisphereLight
        ref={lightRef}
        color={color}
        groundColor={groundColor}
        intensity={intensity}
        position={position}
      />
      {helper && <Helper light={lightRef} type={LightType.HEMISPHERE} />}
    </>
  );
};
