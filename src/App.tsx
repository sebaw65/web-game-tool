import { Leva } from "leva";
import { LoadFileDragDrop } from "./components/LoadFileDragDrop";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { Scene } from "@/ui/scene/Scene";

const App = () => {
  const models = useSelector((state: RootState) => state.models.models);

  return (
    <div className="flex w-full h-screen overflow-hidden items-start justify-center">
      {models.length ? <Scene /> : <LoadFileDragDrop />}
      <Leva />
    </div>
  );
};

export default App;
