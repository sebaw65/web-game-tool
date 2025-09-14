import { Canvas } from "@react-three/fiber";
import { SceneContent } from "./SceneContent";

export const Scene = () => {
  return (
    <Canvas className="w-full h-full border-2 ">
      <SceneContent />
    </Canvas>
  );
};
