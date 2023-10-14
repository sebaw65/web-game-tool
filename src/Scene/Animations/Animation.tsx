import { useAnimations } from "@react-three/drei";
import { useControls } from "leva";
import React, { useEffect } from "react";

interface AnimationProps {
  animations: THREE.AnimationClip[];
  sceneRef: React.RefObject<THREE.Group>;
}

export const Animation: React.FC<AnimationProps> = ({
  animations,
  sceneRef,
}) => {
  if (!sceneRef) return;

  const { actions, names, mixer } = useAnimations(animations, sceneRef);

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
