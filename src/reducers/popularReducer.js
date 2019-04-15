import {
  FETCH_VIDEOS_BY_MOST_POPULAR,
  FETCH_VIDEO_BY_ID
} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_VIDEOS_BY_MOST_POPULAR:
      return action.payload;
    case FETCH_VIDEO_BY_ID:
      return action.payload;
    default:
      return state;
  }
};
