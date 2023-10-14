import { button, useControls } from "leva";
import React from "react";
import { CameraControls } from "@react-three/drei";
import { useFitCamera } from "../useFitCamera";

interface SceneEffectsProps {
  scene: React.RefObject<THREE.Group>;
  cameraControls: React.RefObject<CameraControls>;
}

export const SceneEffects: React.FC<SceneEffectsProps> = ({
  scene,
  cameraControls,
}) => {
  const { fitToMesh } = useFitCamera(scene, cameraControls);

  useControls({
    "Fit to mesh": button(() => void fitToMesh()),
  });

  return null;
};