import { API_KEY } from "./types";
import youtubeApi from "../apis/youtubeApi";
import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_VIDEOS_BY_CHANNEL_ID,
  FETCH_VIDEOS_BY_MOST_POPULAR,
  FETCH_VIDEO_BY_ID,
  FETCH_VIDEOS,
  FETCH_CHANNEL,
  FETCH_RELATED,
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

const getVideosByChannelId = {
  part: "snippet%2CcontentDetails",
  channelId: "UC5nc_ZtjKW1htCVZVRxlQAQ",
  maxResults: 10,
};

const getVideosByMostPopular = {
  part: "snippet%2CcontentDetails%2Cstatistics",
  chart: "mostPopular",
  regionCode: "US",
  maxResults: 10,
};

const getVideoById = {
  part: "snippet%2CcontentDetails%2Cstatistics",
};

const getVideos = {
  part: "snippet",
  maxResults: 10,
};

const getChannelById = {
  part: "snippet%2CcontentDetails%2Cstatistics",
};

export const fetchVideosByChannelId = () => async (dispatch) => {
  const { part, channelId, maxResults } = getVideosByChannelId;
  const response = await youtubeApi.get(
    `/activities?part=${part}&channelId=${channelId}&maxResults=${maxResults}&key=${API_KEY}`
  );

  dispatch({ type: FETCH_VIDEOS_BY_CHANNEL_ID, payload: response.data });
};

export const fetchVideosByMostPopular = () => async (dispatch) => {
  const { part, chart, regionCode, maxResults } = getVideosByMostPopular;
  const response = await youtubeApi.get(
    `/videos?part=${part}&chart=${chart}&regionCode=${regionCode}&maxResults=${maxResults}&key=${API_KEY}`
  );

  dispatch({ type: FETCH_VIDEOS_BY_MOST_POPULAR, payload: response.data });
};

export const fetchVideoById = (id) => async (dispatch) => {
  const { part } = getVideoById;
  const response = await youtubeApi.get(
    `/videos?part=${part}&id=${id}&key=${API_KEY}`
  );

  dispatch({ type: FETCH_VIDEO_BY_ID, payload: response.data });
};

export const fetchVideos = (formValues) => async (dispatch) => {
  const { part, maxResults } = getVideos;
  const response = await youtubeApi.get(
    `/search?part=${part}&maxResults=${maxResults}&q=${formValues.term}&key=${API_KEY}`
  );

  dispatch({ type: FETCH_VIDEOS, payload: response.data });
};

export const fetchChannel = (id) => async (dispatch) => {
  const { part } = getChannelById;
  const response = await youtubeApi.get(
    `/channels?part=${part}&id=${id}&key=${API_KEY}`
  );

  dispatch({ type: FETCH_CHANNEL, payload: response.data });
};

export const fetchRelated = (id) => async (dispatch) => {
  let maxResults = 10;
  const response = await youtubeApi.get(
    `/search?part=snippet&maxResults=${maxResults}&relatedToVideoId=${id}&type=video&key=${API_KEY}`
  );

  dispatch({ type: FETCH_RELATED, payload: response.data });
};
