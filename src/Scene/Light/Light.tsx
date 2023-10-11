import React, { useMemo } from "react";
import { folder, useControls } from "leva";

export const Light: React.FC = () => {
  const options = useMemo(() => {
    return {
      x: { value: 10, min: 0, max: 10, step: 0.01 },
      y: { value: 110, min: 0, max: 110, step: 0.01 },
      z: { value: 150, min: 0, max: 150, step: 0.01 },
    };
  }, []);

  const { firstLightPosition, secoundLightPosition, pointLight_2 } =
    useControls("Lights", {
      pointLight_1: true,
      pointLight_2: false,
      pointLight: folder({
        firstLightPosition: {
          value: [10, 110, 150],
          step: 1,
          render: (get) => get("pointLight_1"),
        },
      }),
      secoundLightPosition: {
        value: [10, 110, 150],
        render: (get) => get("pointLight_2"),
      },
    });

  return (
    <>
      <pointLight intensity={100000} position={firstLightPosition} />
      {pointLight_2 && (
        <pointLight intensity={100000} position={secoundLightPosition} />
      )}
    </>
  );
};
