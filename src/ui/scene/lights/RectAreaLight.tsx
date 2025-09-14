import React, { useRef } from "react";
import { useControls } from "leva";
import { RectAreaLight as RectAreaLightType } from "three";
import { Helper } from "./Helper";
import { LightType } from "@/model/lightType";

export const RectAreaLight: React.FC = () => {
  const lightRef = useRef<RectAreaLightType>(null!);

  const { width, color, height, intensity, position, rotation, helper } =
    useControls(
      "Rect Area Light Options",
      {
        width: { value: 1, min: 0, step: 1, label: "Width" },
        height: { value: 1, min: 0, step: 1, label: "Height" },
        intensity: { value: 0, min: 0, step: 0.1, label: "Intensity" },
        color: { value: "#fff", label: "Color" },
        position: { value: [0, 0, 0], step: 1, label: "Position" },
        rotation: {
          value: [0, 0, 0],
          step: 0.01,
          min: -Math.PI,
          max: Math.PI,
          label: "Position",
        },
        helper: { value: false, label: "Show helper" },
      },
      { order: 2, collapsed: true }
    );

  return (
    <>
      <rectAreaLight
        ref={lightRef}
        width={width}
        height={height}
        intensity={intensity}
        color={color}
        position={position}
        rotation={rotation}
      />
      {helper && <Helper light={lightRef} type={LightType.RECT} />}
    </>
  );
};
