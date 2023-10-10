import React, { useMemo } from "react";
import { useFBX } from "@react-three/drei";
import { useControls } from "leva";

export const Model = () => {
  const model = useFBX("/src/assets/char.fbx");

  const options = useMemo(() => {
    return {
      position: {
        x: { value: 0, min: -100, max: 100, step: 0.01 },
        y: { value: -47, min: -100, max: 100, step: 0.01 },
        z: { value: 0, min: -100, max: 100, step: 0.01 },
      },
      rotate: {
        x: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
        y: { value: -Math.PI, min: -Math.PI, max: Math.PI, step: 0.01 },
        z: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
      },
    };
  }, []);

  const modelPosition = useControls("Model position", options.position);
  const modelRotation = useControls("Model rotation", options.rotate);

  return (
    <primitive
      object={model}
      position={[modelPosition.x, modelPosition.y, modelPosition.z]}
      rotation={[modelRotation.x, modelRotation.y, modelRotation.z]}
    />
  );
};
