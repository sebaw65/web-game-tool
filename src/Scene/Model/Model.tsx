import { useMemo, useRef, useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { Group } from "three";
import { type GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export const Model = () => {
  const sceneRef = useRef<Group | null>(null);

  const { nodes, materials, animations } = useGLTF(
    "/src/assets/char.glb"
  ) as GLTF;

  const { actions, names, mixer } = useAnimations(animations, sceneRef);

  const options = useMemo(() => {
    return {
      position: {
        x: { value: 0, min: -100, max: 100, step: 0.01 },
        y: { value: 0, min: -100, max: 100, step: 0.01 },
        z: { value: 0, min: -100, max: 100, step: 0.01 },
      },
      rotate: {
        x: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
        y: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
        z: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
      },
      scale: {
        x: { value: 50, min: 0.001, max: 100, step: 0.001 },
        y: { value: 50, min: 0.001, max: 100, step: 0.001 },
        z: { value: 50, min: 0.001, max: 100, step: 0.001 },
      },
    };
  }, []);

  const modelPosition = useControls("Model position", options.position);
  const modelRotation = useControls("Model rotation", options.rotate);
  const modelScale = useControls("Model scale", options.scale);
  const { animationName } = useControls("Animation", {
    animationName: { options: names },
  });

  useEffect(() => {
    console.log(animationName, names);
    mixer.stopAllAction();
    actions[`${animationName}`]?.play();
  }, [animationName, actions]);

  return (
    <group
      ref={sceneRef}
      position={[modelPosition.x, modelPosition.y, modelPosition.z]}
      rotation={[modelRotation.x, modelRotation.y, modelRotation.z]}
      scale={[modelScale.x, modelScale.y, modelScale.z]}
    >
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
