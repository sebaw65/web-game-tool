import { Lights } from "@/ui/scene/lights";
import { CameraControls } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import { AnimationClip } from "three";
import { CameraDebugControls } from "../debug/CameraDebugControls";
import { AnimationsDebugControls } from "../debug/AnimationsDebugControls";
import { Model } from "./Model";

export const SceneContent = () => {
  const [animations, setAnimations] = useState<AnimationClip[] | null>(null);

  const cameraControlsRef = useRef<CameraControls>(null);

  return (
    <>
      {/* Model loader */}
      <Suspense fallback={null}>
        <Model setAnimations={setAnimations} />
      </Suspense>
      {/* Camera components */}
      <CameraControls ref={cameraControlsRef} makeDefault />
      {cameraControlsRef.current && (
        <CameraDebugControls cameraControls={cameraControlsRef.current} />
      )}
      {/* Lights */}
      <Lights />
      {/* Animations */}
      {animations && <AnimationsDebugControls animations={animations} />}
    </>
  );
};
