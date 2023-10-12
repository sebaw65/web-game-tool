import React, { useRef, useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { Group } from "three";
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

export const Model: React.FC = () => {
  const sceneRef = useRef<Group | null>(null);

  const { nodes, materials, animations } = useGLTF(
    "/src/assets/char.glb"
  ) as GLTFResult;

  const { actions, names, mixer } = useAnimations(animations, sceneRef);

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

  const { animationName } = useControls(
    "Animations",
    {
      animationName: { options: names, label: "Avaible animations" },
    },
    { collapsed: true, order: 100 }
  );

  useEffect(() => {
    if (!animationName) return;

    mixer.stopAllAction();
    actions[animationName]!.fadeIn(0.6).play(); //cannot have a null value, because animationName is derived from the model's animationName names
  }, [animationName, actions]);

  return (
    <group ref={sceneRef} position={position} rotation={rotation} scale={scale}>
      <group name="Scene">
        <group name="Scene_Root" scale={0.01}>
          <skinnedMesh
            name="CL"
            geometry={nodes.CL.geometry}
            material={materials.skin}
            skeleton={nodes.CL.skeleton}
          />
          <skinnedMesh
            name="FA_EA_1"
            geometry={nodes.FA_EA_1.geometry}
            material={materials.skin}
            skeleton={nodes.FA_EA_1.skeleton}
          />
          <skinnedMesh
            name="FA_Skin_1"
            geometry={nodes.FA_Skin_1.geometry}
            material={materials.skin}
            skeleton={nodes.FA_Skin_1.skeleton}
          />
          <skinnedMesh
            name="GL_1"
            geometry={nodes.GL_1.geometry}
            material={materials.skin}
            skeleton={nodes.GL_1.skeleton}
          />
          <skinnedMesh
            name="HR_1"
            geometry={nodes.HR_1.geometry}
            material={materials.skin}
            skeleton={nodes.HR_1.skeleton}
          />
          <skinnedMesh
            name="PA_1"
            geometry={nodes.PA_1.geometry}
            material={materials.skin}
            skeleton={nodes.PA_1.skeleton}
          />
          <skinnedMesh
            name="SH_1"
            geometry={nodes.SH_1.geometry}
            material={materials.skin}
            skeleton={nodes.SH_1.skeleton}
          />
          <primitive object={nodes.Bip01} />
          <primitive object={nodes.FA_Skin} />
          <primitive object={nodes.CL_1} />
          <primitive object={nodes.GL} />
          <primitive object={nodes.SH} />
          <primitive object={nodes.PA} />
          <primitive object={nodes.FA_EA} />
        </group>
      </group>
    </group>
  );
};
