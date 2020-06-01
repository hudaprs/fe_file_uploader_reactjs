import React, { useReducer } from "react";
import FileReducer from "./fileReducer";
import FileContext from "./fileContext";
import { GET_FILES, SET_LOADING, DELETE_FILE, UPLOAD_FILE } from "../types";
import axios from "axios";

const FileState = (props) => {
  const initialState = {
    files: [],
    loading: false
  };

  const [state, dispatch] = useReducer(FileReducer, initialState);

  const setLoading = () => {
    dispatch({ SET_LOADING });
  };

  const uploadFile = async (fileData) => {
    setLoading();
    try {
      const upload = await axios.post("/files/upload", fileData);
      const file = upload.data.results;

      dispatch({
        type: UPLOAD_FILE,
        payload: {
          ...file,
          _id: file.id,
          filename: file.filename
        }
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  const getFiles = async () => {
    setLoading();
    try {
      const files = await axios.get("/files");

      dispatch({ type: GET_FILES, payload: files.data.results });
    } catch (err) {
      console.error(err.response.data);
    }
  };

  const deleteFile = async (id) => {
    setLoading();
    try {
      await axios.delete(`/files/${id}`);

      dispatch({ type: DELETE_FILE, payload: id });
    } catch (err) {
      console.error(err.response.data);
    }
  };

  const { files, loading } = state;
  return (
    <FileContext.Provider
      value={{
        files,
        loading,
        setLoading,
        uploadFile,
        getFiles,
        deleteFile
      }}
    >
      {props.children}
    </FileContext.Provider>
  );
};

export default FileState;
