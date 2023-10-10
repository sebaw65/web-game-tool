import React from "react";
import { StyledCanvas } from "./styled";
import { OrbitControls } from "@react-three/drei";
import { Light } from "./Light";
import { Model } from "./Model";

export const Scene = () => {
  return (
    <StyledCanvas camera={{ position: [10, 70, 200] }}>
      <OrbitControls />
      <Light id={1} />

      <Model />
    </StyledCanvas>
  );
};
