import { useControls } from "leva";
import React from "react";

export const AmbientLight: React.FC = () => {
  const { color, intensity } = useControls(
    "Ambient Light Options",
    {
      color: { value: "#fff", label: "Color" },
      intensity: { value: 0, min: 0, step: 0.1, label: "Intensity" },
    },
    { order: 2, collapsed: true }
  );

  return <ambientLight color={color} intensity={intensity} />;
};
