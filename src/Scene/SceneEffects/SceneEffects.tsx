import { button, useControls } from "leva";
import type React from "react";
import { type CameraControls } from "@react-three/drei";
import { useFitCamera } from "./useFitCamera";
import * as THREE from "three";

interface SceneEffectsProps {
  scene: THREE.Group;
  cameraControls: CameraControls;
}

export const SceneEffects: React.FC<SceneEffectsProps> = ({
  scene,
  cameraControls,
}) => {
  const { fitToMesh } = useFitCamera(scene, cameraControls);

  useControls({
    "Fit to mesh": button(() => {
      fitToMesh();
    }),
  });

  return null;
};
