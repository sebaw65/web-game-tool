import React, { useRef } from "react";
import { useControls, folder } from "leva";
import { Helper } from "./Helper";
import * as THREE from "three";

interface PointLightsProps {
  enableSecond?: boolean;
}

export const PointLights: React.FC<PointLightsProps> = ({
  enableSecond: enableSecond,
}) => {
  const pointLight1Ref = useRef<THREE.PointLight>(null!);
  const pointLight2Ref = useRef<THREE.PointLight>(null!);

  const {
    intensity_1,
    position_1,
    helper_1,
    intensity_2,
    position_2,
    helper_2,
  } = useControls(
    "Point Lights options",
    {
      "First Light": folder({
        intensity_1: { value: 0, step: 1, label: "Intensity" },
        position_1: {
          value: [0, 0, 0],
          step: 1,
          label: "Position",
        },
        helper_1: { value: false, label: "Show helper" },
      }),
      "Second Light": folder(
        {
          intensity_2: { value: 0, step: 1, label: "Intensity" },
          position_2: {
            value: [0, 0, 0],
            step: 1,
            label: "position",
          },
          helper_2: { value: false, label: "Show helper" },
        },
        {
          collapsed: true,
          render: (get) => get("Light_options.Second_Point_Light.pLight2"),
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
        intensity={intensity_1}
        position={position_1}
      />
      {helper_1 && <Helper light={pointLight1Ref} />}

      {enableSecond && (
        <>
          <pointLight
            ref={pointLight2Ref}
            intensity={intensity_2}
            position={position_2}
          />
          {helper_2 && <Helper light={pointLight2Ref} />}
        </>
      )}
    </>
  );
};
