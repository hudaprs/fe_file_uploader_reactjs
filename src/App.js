import React from "react";
import "./App.css";
import Upload from "./components/Upload";
import FileState from "./context/files/FileState";

const App = () => {
  return (
    <div>
      <FileState>
        <Upload />
      </FileState>
    </div>
  );
};

export default App;
