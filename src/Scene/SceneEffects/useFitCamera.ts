import { type CameraControls } from "@react-three/drei";
import { useLayoutEffect } from "react";
import * as THREE from "three";

export const useFitCamera = (
  scene: THREE.Group,
  cameraControls: CameraControls
) => {
  const fitToMesh = () => {
    if (!scene) return;
    if (!cameraControls) return;

    void cameraControls.fitToSphere(scene, true);
  };

  useLayoutEffect(() => {
    fitToMesh();
  }, [cameraControls]);

  return { fitToMesh };
};
