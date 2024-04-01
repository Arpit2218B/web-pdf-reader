export const initialState = {
  fileList: [],
  recentFiles: [],
  searchKey: "",
};

export const constants = {
  UPDATE_FILE_LIST: "UPDATE_FILE_LIST",
  UPDATE_RECENT_FILE_LIST: "UPDATE_RECENT_FILE_LIST",
  UPDATE_SEARCH_KEY: "UPDATE_SEARCH_KEY",
  UPDATE_FILE_VIEWER: "UPDATE_FILE_VIEWER",
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.UPDATE_FILE_LIST:
      return { ...state, fileList: action.data };
    case constants.UPDATE_SEARCH_KEY:
      return { ...state, searchKey: action.data };
    case constants.UPDATE_RECENT_FILE_LIST:
      const tempState = [...state.recentFiles];
      tempState.unshift(action.data);
      if(tempState.length > 3)
        tempState.pop();
      return { ...state, recentFiles: tempState};
    default:
      return state;
  }
};

export default reducer;