import { FETCH_RELATED } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_RELATED:
      return action.payload;
    default:
      return state;
  }
};
