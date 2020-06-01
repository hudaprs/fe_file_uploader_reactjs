import React, { useState, useContext } from "react";
import Files from "./Files";
import FileContext from "../context/files/fileContext";

const Upload = () => {
  const [file, setFile] = useState(null);
  const fileContext = useContext(FileContext);

  const { loading, uploadFile } = fileContext;

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Check if file is blank
    if (!file) return alert("File cannot be blank");

    // Use form data for uploading file
    const formData = new FormData();
    formData.append("file", file, file.name);

    // Send request to server
    uploadFile(formData);
    alert("File Uploaded");
  };

  return (
    <div className="container">
      <h1 className="text-center l-heading">File Uploader</h1>
      <div className="content-container">
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="upload">Upload File</label>
            <input type="file" name="file" onChange={onFileChange} />
          </div>
          <button type="submit" className="btn">
            Upload
          </button>
        </form>

        <p>{loading && "Uploading"}</p>
      </div>

      <Files />
    </div>
  );
};

export default Upload;
