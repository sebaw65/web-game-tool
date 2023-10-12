import { useHelper } from "@react-three/drei";
import React from "react";
import { SpotLightHelper } from "three";

interface HelperProps {
  light: React.MutableRefObject<THREE.Object3D>;
}

export const Helper: React.FC<HelperProps> = ({ light }) => {
  useHelper(light, SpotLightHelper, "black");

  return null;
};
