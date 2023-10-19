import React, { useState, Suspense, useRef } from "react";
import { StyledCanvas } from "./styled";
import { CameraControls } from "@react-three/drei";
import { Model } from "./Model";
import { Lights } from "./Lights";
import { SceneEffects } from "./SceneEffects";
import { Animation } from "./Animations";

export const Scene: React.FC = () => {
  const [animations, setAnimations] = useState<THREE.AnimationClip[] | null>(
    null
  );
  const [scene, setScene] = useState<THREE.Group | null>(null);

  const cameraControlsRef = useRef<CameraControls>(null);

  return (
    <StyledCanvas>
      <CameraControls ref={cameraControlsRef} makeDefault />
      <Lights />
      <Suspense fallback={null}>
        <Model setAnimations={setAnimations} setScene={setScene} />
      </Suspense>

      {scene && cameraControlsRef.current && (
        <SceneEffects
          scene={scene}
          cameraControls={cameraControlsRef.current}
        />
      )}
      {animations && scene && (
        <Animation animations={animations} scene={scene} />
      )}
    </StyledCanvas>
  );
};
