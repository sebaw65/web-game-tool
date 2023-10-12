import { useHelper } from "@react-three/drei";
import React from "react";
import { PointLightHelper } from "three";

interface HelperProps {
  light: React.MutableRefObject<THREE.Object3D>;
}

export const Helper: React.FC<HelperProps> = ({ light }) => {
  const helpersSphereSize = 10;

  useHelper(light, PointLightHelper, helpersSphereSize, "black");

  return null;
};
