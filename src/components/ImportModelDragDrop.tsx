import { useDropzone } from "react-dropzone";
import {} from "tailwindcss";

export const ImportModelDragDrop = () => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: 1,
    onDrop: async (files) => {
      console.log(files);
    },
  });

  return (
    <div className="p-14 w-full h-full">
      <div
        {...getRootProps({
          className:
            "flex w-full h-full items-center justify-center border-4 border-dashed rounded-4xl hover:cursor-pointer",
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
