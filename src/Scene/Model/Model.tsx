import { useEffect, forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
// @ts-ignore
import { type GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    CL: THREE.SkinnedMesh;
    FA_EA_1: THREE.SkinnedMesh;
    FA_Skin_1: THREE.SkinnedMesh;
    GL_1: THREE.SkinnedMesh;
    HR_1: THREE.SkinnedMesh;
    PA_1: THREE.SkinnedMesh;
    SH_1: THREE.SkinnedMesh;
    Bip01: THREE.Bone;
    FA_Skin: THREE.Bone;
    CL_1: THREE.Bone;
    GL: THREE.Bone;
    SH: THREE.Bone;
    PA: THREE.Bone;
    FA_EA: THREE.Bone;
  };
  materials: {
    skin: THREE.MeshStandardMaterial;
  };
};

interface ModelProps {
  setAnimations: (animations: THREE.AnimationClip[]) => void;
}

export const Model = forwardRef<THREE.Group, ModelProps>(
  ({ setAnimations }, sceneRef) => {
    const { animations, scene } = useGLTF("/model.glb") as GLTFResult;

    useEffect(() => {
      setAnimations(animations);
    }, [animations]);

    const { position, rotation, scale } = useControls(
      "Model",
      {
        position: {
          value: [0, 0, 0],
          step: 1,
          label: "Position",
        },
        rotation: {
          value: [0, 0, 0],
          min: -Math.PI,
          max: Math.PI,
          step: 0.01,
          label: "Rotation",
        },
        scale: {
          value: [50, 50, 50],
          lock: true,
          label: "Scale",
        },
      },
      { collapsed: true, order: 99 }
    );

    return (
      <group
        ref={sceneRef}
        position={position}
        rotation={rotation}
        scale={scale}
      >
        <primitive object={scene} />
      </group>
    );
  }
);
