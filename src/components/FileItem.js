import React, { useContext } from "react";
import FileContext from "../context/files/fileContext";

const FileItem = ({ file }) => {
  const fileContext = useContext(FileContext);

  const { deleteFile } = fileContext;

  const onDelete = () => {
    deleteFile(file._id);
  };

  return (
    <div className="card">
      {file.contentType === "image/jpeg" ||
      file.contentType === "image/png" ||
      file.contentType === "image/jpg" ? (
        <img src={`/files/image/${file.filename}`} alt="" />
      ) : (
        <p>{file.filename}</p>
      )}
      <button type="button" className="btn btn-danger" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default FileItem;
