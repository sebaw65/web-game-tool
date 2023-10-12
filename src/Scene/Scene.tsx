import React, { Suspense } from "react";
import { StyledCanvas } from "./styled";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Model";
import { Lights } from "./Lights";

export const Scene: React.FC = () => {
  return (
    <StyledCanvas camera={{ position: [10, 70, 200] }}>
      <OrbitControls />
      <Lights />

      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </StyledCanvas>
  );
};
