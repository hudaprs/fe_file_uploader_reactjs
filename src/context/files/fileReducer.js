import { GET_FILES, SET_LOADING, DELETE_FILE, UPLOAD_FILE } from "../types";

export default (state, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case UPLOAD_FILE:
      return {
        ...state,
        loading: false,
        files: [...state.files, payload]
      };
    case GET_FILES:
      return {
        ...state,
        loading: false,
        files: payload
      };
    case DELETE_FILE:
      return {
        ...state,
        loading: false,
        files: state.files.filter((file) => file._id !== payload)
      };
    default:
      return state;
  }
};
