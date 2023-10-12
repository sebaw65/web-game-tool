import React from "react";
import { folder, useControls } from "leva";
import { PointLights } from "./PointLights";
import { AmbientLight } from "./AmbientLight";
import { DirectionalLight } from "./DirectionalLight";
import { HemisphereLight } from "./HemisphereLight";

export const Lights: React.FC = () => {
  const {
    Point_light,
    pLight2,
    Ambient_light,
    Directional_light,
    Hemisphere_light,
  } = useControls(
    "Light_options",
    {
      Point_light: { value: false, label: "Point Light" },
      Secound_Point_Light: folder({
        pLight2: {
          value: false,
          label: "On/Off",
          render: (get) => get("Light_options.Point_light"),
        },
      }),
      Ambient_light: { value: false, label: "Ambient Light" },
      Directional_light: { value: false, label: "Directional Light" },
      Hemisphere_light: { value: true, label: "Hemisphere Light" },
    },
    { order: 1 }
  );

  return (
    <>
      {Point_light && <PointLights enableSecound={pLight2} />}
      {Ambient_light && <AmbientLight />}
      {Directional_light && <DirectionalLight />}
      {Hemisphere_light && <HemisphereLight />}
      {/* RectAreaLight    */}
      {/* SpotLight     */}
    </>
  );
};
