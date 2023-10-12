import React, { useRef } from "react";
import { useControls, folder } from "leva";
import { Helper } from "./Helper";

interface PointLightsProps {
  enableSecound?: boolean;
}

export const PointLights: React.FC<PointLightsProps> = ({ enableSecound }) => {
  //! hacks
  const pointLight1Ref = useRef<THREE.PointLight>(null!);
  const pointLight2Ref = useRef<THREE.PointLight>(null!);

  const {
    intensivity_1,
    position_1,
    rotation_1,
    helper_1,
    intensivity_2,
    position_2,
    rotation_2,
    helper_2,
  } = useControls(
    "Point Lights",
    {
      first: folder({
        intensivity_1: { value: 5000, step: 10, label: "Intensivity" },
        position_1: {
          value: [30, 65, 50],
          step: 1,
          label: "position",
        },
        rotation_1: {
          value: [0, 0, 0],
          min: -Math.PI,
          max: Math.PI,
          step: 0.01,
          label: "rotation",
        },
        helper_1: { value: false, label: "Show helper" },
      }),
      secound: folder(
        {
          intensivity_2: { value: 5000, step: 10, label: "Intensivity" },
          position_2: {
            value: [-30, 65, 50],
            step: 1,
            label: "position",
          },
          rotation_2: {
            value: [0, 0, 0],
            min: -Math.PI,
            max: Math.PI,
            step: 0.01,
            label: "rotation",
          },
          helper_2: { value: false, label: "Show helper" },
        },
        { render: (get) => get("Point_2"), collapsed: true }
      ),
    },
    { render: (get) => get("Point_1") }
  );

  return (
    <>
      <pointLight
        ref={pointLight1Ref}
        intensity={intensivity_1}
        position={position_1}
        rotation={rotation_1}
      />
      {helper_1 && <Helper pointLight={pointLight1Ref} />}

      {enableSecound && (
        <>
          <pointLight
            ref={pointLight2Ref}
            intensity={intensivity_2}
            position={position_2}
            rotation={rotation_2}
          />
          {helper_2 && <Helper pointLight={pointLight2Ref} />}
        </>
      )}
    </>
  );
};
