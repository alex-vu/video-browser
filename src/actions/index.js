import { API_KEY } from "../apis/key";
import youtubeApi from "../apis/youtubeApi";
// import history from "../history";
import { FETCH_VIDEOS, FETCH_VIDEO } from "./types";

const activities = "snippet%2CcontentDetails";
// const channelId = "UC_x5XG1OV2P6uZZ5FSM9Ttw";
const channelId = "UC5nc_ZtjKW1htCVZVRxlQAQ";
const maxResults = 25;

export const fetchVideos = () => async dispatch => {
  const response = await youtubeApi.get(
    `/activities?part=${activities}&channelId=${channelId}&maxResults=${maxResults}&key=${API_KEY}`
  );

  dispatch({ type: FETCH_VIDEOS, payload: response.data });
};

// export const fetchVideo = () => async dispatch => {
//   const response = await youtubeApi.get
// };
