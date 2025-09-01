import { useState } from "react";
import { Scene } from "./Scene";
import { Leva } from "leva";
import { LoadFileDragDrop } from "./components/LoadFileDragDrop";

const App = () => {
  const [loadedModelUrl, setLoadedModelUrl] = useState<string | null>(null);

  const onFileLoad = (loadedModel: string) => {
    setLoadedModelUrl(loadedModel);
  };

  return (
    <div className="flex w-full h-screen overflow-hidden items-start justify-center">
      {loadedModelUrl ? (
        <Scene loadedFileUrl={loadedModelUrl} />
      ) : (
        <LoadFileDragDrop onModelLoad={onFileLoad} />
      )}
      <Leva />
    </div>
  );
};

export default App;
