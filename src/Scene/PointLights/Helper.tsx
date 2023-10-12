import { useHelper } from "@react-three/drei";
import React from "react";
import { PointLightHelper } from "three";

interface PointLightHelpersProps {
  pointLight: React.MutableRefObject<THREE.Object3D>;
}

export const Helper: React.FC<PointLightHelpersProps> = ({ pointLight }) => {
  const helpersSphereSize = 10;

  useHelper(pointLight, PointLightHelper, helpersSphereSize, "black");

  return null;
};
