import type React from "react";
import { useHelper } from "@react-three/drei";
import { RectAreaLightHelper } from "three/addons/helpers/RectAreaLightHelper.js";

interface HelperProps {
  light: React.MutableRefObject<THREE.Object3D>;
}

export const Helper: React.FC<HelperProps> = ({ light }) => {
  useHelper(light, RectAreaLightHelper, "black");

  return null;
};
