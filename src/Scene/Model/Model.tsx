import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";

interface ModelProps {
  setAnimations: (animations: THREE.AnimationClip[]) => void;
  setScene: (scene: THREE.Group) => void;
  file: string;
}

export const Model: React.FC<ModelProps> = ({
  setAnimations,
  setScene,
  file,
}) => {
  console.log(typeof file);
  const { scene, animations } = useGLTF(file, true);

  useEffect(() => {
    if (!animations) return;

    setAnimations(animations);
  }, [setAnimations, animations]);

  useEffect(() => {
    if (!scene) return;

    setScene(scene);
  }, [setScene, scene]);

  const { position, rotation, scale } = useControls(
    "Model",
    {
      position: {
        value: [0, 0, 0],
        step: 1,
        label: "Position",
      },
      rotation: {
        value: [0, 0, 0],
        min: -Math.PI,
        max: Math.PI,
        step: 0.01,
        label: "Rotation",
      },
      scale: {
        value: [50, 50, 50],
        lock: true,
        label: "Scale",
      },
    },
    { collapsed: true, order: 99 }
  );

  return (
    <primitive
      object={scene}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
};
