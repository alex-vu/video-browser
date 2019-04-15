import { FETCH_VIDEOS, FETCH_VIDEO_BY_ID } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_VIDEOS:
      return action.payload;
    case FETCH_VIDEO_BY_ID:
      return action.payload;
    default:
      return state;
  }
};
