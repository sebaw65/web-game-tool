import { CameraControls } from "@react-three/drei";
import { useLayoutEffect } from "react";

export const useFitCamera = (
  scene: React.RefObject<THREE.Group>,
  cameraControls: React.RefObject<CameraControls>
) => {
  const fitToMesh = () => {
    if (!scene.current) return;
    if (!cameraControls.current) return;

    cameraControls.current.fitToSphere(scene.current, true);
  };

  useLayoutEffect(() => {
    fitToMesh();
  }, [cameraControls.current]);

  return { fitToMesh };
};
