import React, { useEffect, useContext } from "react";
import FileItem from "./FileItem";
import FileContext from "../context/files/fileContext";

const Files = () => {
  const fileContext = useContext(FileContext);
  const { loading, getFiles, files } = fileContext;

  useEffect(() => {
    getFiles();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="content-container">
      {!loading && files.length !== 0
        ? files.map((file) => <FileItem key={file._id} file={file} />)
        : "No File Found"}
    </div>
  );
};

export default Files;
