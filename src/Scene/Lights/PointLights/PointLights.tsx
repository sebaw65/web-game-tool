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
    helper_1,
    intensivity_2,
    position_2,
    helper_2,
  } = useControls(
    "Point Lights options",
    {
      "First Light": folder({
        intensivity_1: { value: 0, step: 1, label: "Intensity" },
        position_1: {
          value: [0, 0, 0],
          step: 1,
          label: "Position",
        },
        helper_1: { value: false, label: "Show helper" },
      }),
      "Secound Light": folder(
        {
          intensivity_2: { value: 0, step: 1, label: "Intensivity" },
          position_2: {
            value: [0, 0, 0],
            step: 1,
            label: "position",
          },
          helper_2: { value: false, label: "Show helper" },
        },
        {
          collapsed: true,
          render: (get) => get("Light_options.Secound_Point_Light.pLight2"),
        }
      ),
    },
    {
      collapsed: true,
      order: 2,
    }
  );

  return (
    <>
      <pointLight
        ref={pointLight1Ref}
        intensity={intensivity_1}
        position={position_1}
      />
      {helper_1 && <Helper pointLight={pointLight1Ref} />}

      {enableSecound && (
        <>
          <pointLight
            ref={pointLight2Ref}
            intensity={intensivity_2}
            position={position_2}
          />
          {helper_2 && <Helper pointLight={pointLight2Ref} />}
        </>
      )}
    </>
  );
};
