import { useState } from "react";
import { Scene } from "./Scene";
import { Leva } from "leva";
import { ImportModelDragDrop } from "./components/ImportModelDragDrop";

const App = () => {
  const [model, setModel] = useState(null);

  const onFileLoad = (loadedModel) => {
    setModel(loadedModel);
  };

  return (
    <div className="flex w-full h-screen overflow-hidden items-start justify-center">
      {model ? <Scene /> : <ImportModelDragDrop />}
      <Leva />
    </div>
  );
};

export default App;
