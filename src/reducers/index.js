import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import channelReducer from "./channelReducer";
import popularReducer from "./popularReducer";
import searchReducer from "./searchReducer";
import relatedReducer from "./relatedReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  channelVideos: channelReducer,
  popularVideos: popularReducer,
  searchVideos: searchReducer,
  relatedVideos: relatedReducer
});
