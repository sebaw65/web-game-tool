import { useState } from "react";
import { useDropzone } from "react-dropzone";

export const ImportModelDragDrop = () => {
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
  });

  console.log(file);

  return (
    <div className="p-14 w-full h-full">
      <div
        {...getRootProps({
          className: `flex w-full h-full items-center justify-center border-4 border-dashed rounded-4xl hover:cursor-pointer ${
            isDragActive ? "bg-green-100" : ""
          }`,
        })}
      >
        <input {...getInputProps()} />
        <p>
          {isDragActive
            ? "Drop the files here..."
            : "Drag 'n' drop files here, or click to select files"}
        </p>
      </div>
    </div>
  );
};
