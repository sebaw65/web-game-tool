import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { AnimationClip } from "three";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

interface ModelProps {
  setAnimations: (animations: AnimationClip[]) => void;
}

export const Model: React.FC<ModelProps> = ({ setAnimations }) => {
  const models = useSelector((state: RootState) => state.models.models);
  const { scene, animations } = useGLTF(models[0].src, true);

  console.log(animations);
  useEffect(() => {
    if (!animations) return;

    setAnimations(animations);
  }, [setAnimations, animations]);

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
