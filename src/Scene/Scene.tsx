import { useState, Suspense, useRef } from "react";
import { CameraControls } from "@react-three/drei";
import { Model } from "./Model";
import { Lights } from "./Lights";
import { SceneEffects } from "./SceneEffects";
import { Animation } from "./Animations";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

export const Scene: React.FC<{ loadedFileUrl: string }> = ({
  loadedFileUrl,
}) => {
  const [animations, setAnimations] = useState<THREE.AnimationClip[] | null>(
    null
  );
  const [scene, setScene] = useState<THREE.Group | null>(null);

  const cameraControlsRef = useRef<CameraControls>(null);

  return (
    <Canvas className="w-full h-full border-2 ">
      <CameraControls ref={cameraControlsRef} makeDefault />
      <Lights />
      <Suspense fallback={null}>
        <Model
          setAnimations={setAnimations}
          setScene={setScene}
          file={loadedFileUrl}
        />
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
    </Canvas>
  );
};
