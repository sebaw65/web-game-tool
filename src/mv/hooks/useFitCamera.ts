import { type CameraControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useCallback, useLayoutEffect } from "react";

export const useFitCamera = (cameraControls: CameraControls | null) => {
  const { scene } = useThree();

  const fitToMesh = useCallback(() => {
    if (!scene) {
      return;
    }

    if (!cameraControls) {
      return;
    }

    void cameraControls.fitToSphere(scene, true);
  }, [scene, cameraControls]);

  // useLayoutEffect tylko gdy oba są dostępne
  useLayoutEffect(() => {
    if (scene && cameraControls) {
      fitToMesh();
    }
  }, [scene, cameraControls, fitToMesh]);

  return { fitToMesh };
};
