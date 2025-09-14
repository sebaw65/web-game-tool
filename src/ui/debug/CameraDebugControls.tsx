import { useFitCamera } from "@/mv/hooks/useFitCamera";
import { CameraControls } from "@react-three/drei";
import { button, useControls } from "leva";

interface DebugControlsProps {
  cameraControls: CameraControls | null;
}

export const CameraDebugControls: React.FC<DebugControlsProps> = ({
  cameraControls,
}) => {
  const { fitToMesh } = useFitCamera(cameraControls);

  useControls({
    "Fit to mesh": button(() => {
      console.log(cameraControls);
      if (cameraControls) {
        fitToMesh();
      } else {
        console.warn("Camera controls not ready yet");
      }
    }),
  });

  return null;
};
