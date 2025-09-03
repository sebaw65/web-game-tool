import type React from "react";
import { useEffect } from "react";
import { useAnimations } from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";

interface AnimationProps {
  animations: THREE.AnimationClip[];
  scene: THREE.Group;
}

export const Animation: React.FC<AnimationProps> = ({ animations, scene }) => {
  if (!scene) return;

  const { actions, names, mixer } = useAnimations(animations, scene);

  const { animationName } = useControls(
    "Animations",
    {
      animationName: { options: names, label: "Avaible animations" },
    },
    { collapsed: true, order: 100 }
  );

  useEffect(() => {
    if (!animationName) return;

    mixer.stopAllAction();
    actions[animationName]!.fadeIn(0.6).play(); //cannot have a null value, because animationName is derived from the model's animationName names
  }, [animationName, actions]);

  return null;
};
