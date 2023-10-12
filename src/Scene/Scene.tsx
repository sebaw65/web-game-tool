import React, { Suspense } from "react";
import { StyledCanvas } from "./styled";
import { OrbitControls } from "@react-three/drei";
import { PointLights } from "./PointLights";
import { Model } from "./Model";
import { useControls } from "leva";

export const Scene: React.FC = () => {
  const { Point_2 } = useControls({
    Point_1: { value: true, label: "Point Light 1" },
    Point_2: {
      value: false,
      label: "Point Light 2",
      render: (get) => get("Point_1"),
    },
  });
  return (
    <StyledCanvas camera={{ position: [10, 70, 200] }}>
      <OrbitControls />
      <PointLights enableSecound={Point_2} />

      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </StyledCanvas>
  );
};
