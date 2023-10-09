import React from "react";
import { StyledCanvas } from "./styled";
import { OrbitControls, useFBX } from "@react-three/drei";

export const Scene = () => {
  const model = useFBX("/src/assets/char.fbx");

  console.log(model);
  return (
    <StyledCanvas camera={{ position: [10, 150, 200] }}>
      <OrbitControls />
      <pointLight intensity={100000} position={[10, 110, 150]} />

      <primitive object={model} rotation={[0, Math.PI, 0]} />
    </StyledCanvas>
  );
};
