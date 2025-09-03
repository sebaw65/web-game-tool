import type React from "react";
import { useHelper } from "@react-three/drei";
import { SpotLightHelper } from "three";
import * as THREE from "three";

interface HelperProps {
  light: React.MutableRefObject<THREE.Object3D>;
}

export const Helper: React.FC<HelperProps> = ({ light }) => {
  useHelper(light, SpotLightHelper, "black");

  return null;
};
