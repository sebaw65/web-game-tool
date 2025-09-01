import { FC, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

export const LoadFileDragDrop: FC<{
  onModelLoad: (file: string) => void;
}> = ({ onModelLoad }) => {
  const [file, setFile] = useState<File | null>(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "model/gltf-binary": [".glb"],
      "model/gltf+json": [".gltf"],
      "model/obj": [".obj"],
      "model/stl": [".stl"],
      "application/x-fbx": [".fbx"],
      "model/vnd.collada+xml": [".dae"],
      "model/ply": [".ply"],
      "model/vrml": [".wrl"],
      "application/x-3ds": [".3ds"],
      "image/vnd.dwg": [".dwg"],
      "image/vnd.dxf": [".dxf"],
      "application/octet-stream": [".fbx", ".obj", ".stl", ".dwg", ".dxf"], // fallback
    },
    maxFiles: 1,
    onDrop: async (loadedFiles) => {
      const [loadedFile] = loadedFiles;

      setFile(loadedFile);
    },
    noClick: Boolean(file),
  });

  const discardSelectedFile = () => setFile(null);

  return (
    <div className="p-14 w-full h-full">
      <div
        {...getRootProps({
          className: `flex w-full h-full justify-center border-4 border-dashed rounded-4xl hover:cursor-pointer ${
            isDragActive ? "bg-green-100" : ""
          }`,
        })}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col w-full place-content-center text-center">
          <RenderFieldContent
            file={file}
            isDragActive={isDragActive}
            onLoad={onModelLoad}
            onDiscard={discardSelectedFile}
          />
        </div>
      </div>
    </div>
  );
};

const RenderFieldContent: React.FC<{
  file: File | null;
  isDragActive: boolean;
  onLoad: (file: string) => void;
  onDiscard: () => void;
}> = ({ file, isDragActive, onLoad, onDiscard }) => {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setUrl(objectUrl);

    // TODO Cleanup musi być po załadowaniu modelu
    // return () => {
    //   URL.revokeObjectURL(objectUrl);
    // };
  }, [file]);

  console.log(url);
  if (file && url) {
    return (
      <>
        <p className="text-xl text-center">
          Selected file <b>{file.name}</b>
        </p>
        <div className="flex justify-between mx-64">
          <button
            className="bg-red-500 px-6 py-2 rounded-xl text-lg text-white"
            onClick={onDiscard}
          >
            Discard
          </button>
          <button
            className="bg-blue-500 px-6 py-2 rounded-xl text-lg text-white"
            onClick={() => onLoad(url)}
          >
            Load
          </button>
        </div>
      </>
    );
  }

  if (isDragActive) {
    return <p>Drop the files here...</p>;
  }

  return <p>Drag 'n' drop files here, or click to select files</p>;
};
