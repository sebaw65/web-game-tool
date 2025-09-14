import type React from "react";
import { useHelper } from "@react-three/drei";
import { RectAreaLightHelper } from "three/addons/helpers/RectAreaLightHelper.js";
import {
  DirectionalLightHelper,
  HemisphereLightHelper,
  Object3D,
  PointLightHelper,
  SpotLightHelper,
} from "three";
import { helperParams } from "./types";
import { LightType } from "@/model/types/LightType";

const helpersSphereSize = 10;

const lightHelperType: Record<LightType, helperParams> = {
  [LightType.DIRECTIONAL]: {
    helper: DirectionalLightHelper,
    size: helpersSphereSize,
  },
  [LightType.HEMISPHERE]: {
    helper: HemisphereLightHelper,
    size: helpersSphereSize,
  },
  [LightType.POINT]: {
    helper: PointLightHelper,
    size: helpersSphereSize,
  },
  [LightType.RECT]: {
    helper: RectAreaLightHelper,
  },
  [LightType.SPOT]: {
    helper: SpotLightHelper,
  },
};

export interface HelperProps {
  light: React.RefObject<Object3D>;
  type: LightType;
}

export const Helper: React.FC<HelperProps> = ({ light, type }) => {
  const { helper, size } = lightHelperType[type];
  useHelper(light, helper, size ?? undefined, "black");

  return null;
};
