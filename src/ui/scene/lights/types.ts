import {
  DirectionalLightHelper,
  HemisphereLightHelper,
  PointLightHelper,
  SpotLightHelper,
} from "three";
import { RectAreaLightHelper } from "three/addons/helpers/RectAreaLightHelper.js";

export type helperType =
  | typeof DirectionalLightHelper
  | typeof HemisphereLightHelper
  | typeof PointLightHelper
  | typeof RectAreaLightHelper
  | typeof SpotLightHelper;

export type helperParams = {
  helper: helperType;
  size?: number;
};
