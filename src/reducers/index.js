import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import channelReducer from "./channelReducer";
import popularReducer from "./popularReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  form: formReducer,
  channelVideos: channelReducer,
  popularVideos: popularReducer,
  searchVideos: searchReducer
});
