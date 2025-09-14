import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import { addModel } from "../store/slices/modelsSlice";

export const LoadFileDragDrop = () => {
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
          <RenderFieldContent file={file} isDragActive={isDragActive} />
        </div>
      </div>
    </div>
  );
};

const RenderFieldContent: React.FC<{
  file: File | null;
  isDragActive: boolean;
}> = ({ file, isDragActive }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);

    dispatch(
      addModel({
        id: crypto.randomUUID(),
        name: file.name,
        src: objectUrl,
        position: [0, 0, 0],
        rotation: [0, 0, 0],
        scale: 1,
        isRendered: false,
        isVisible: false,
      })
    );
  }, [file]);

  if (isDragActive) {
    return <p>Drop the files here...</p>;
  }

  return <p>Drag 'n' drop files here, or click to select files</p>;
};
