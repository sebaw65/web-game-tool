import React, { useMemo } from "react";
import { useControls } from "leva";

interface LightProps {
  id: number;
}

export const Light: React.FC<LightProps> = ({ id }) => {
  const options = useMemo(() => {
    return {
      x: { value: 10, min: 0, max: 10, step: 0.01 },
      y: { value: 110, min: 0, max: 110, step: 0.01 },
      z: { value: 150, min: 0, max: 150, step: 0.01 },
    };
  }, []);

  const lightPosition = useControls(`Point light ${id}`, options);

  return (
    <pointLight
      intensity={100000}
      position={[lightPosition.x, lightPosition.y, lightPosition.z]}
    />
  );
};
