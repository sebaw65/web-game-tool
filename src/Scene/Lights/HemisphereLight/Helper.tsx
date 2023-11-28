import type React from "react";
import { useHelper } from "@react-three/drei";
import { HemisphereLightHelper } from "three";

interface HelperProps {
  light: React.MutableRefObject<THREE.Object3D>;
}

export const Helper: React.FC<HelperProps> = ({ light }) => {
  const helpersSphereSize = 10;

  useHelper(light, HemisphereLightHelper, helpersSphereSize, "black");
  return null;
};
