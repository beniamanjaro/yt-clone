import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  VIDEO_DETAILS_FAIL,
  VIDEO_DETAILS_SUCCESS,
  VIDEO_DETAILS_REQUEST,
} from "../actionTypes";
import request from "../../api";

export const getMostPopularVideos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });
    const { data } = await request("/videos", {
      params: {
        part: "snippet, contentDetails, statistics",
        chart: "mostPopular",
        regionCode: "RO",
        maxResults: 10,
        pageToken: getState().homeVideos.nextPageToken,
      },
    });

    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: "All",
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};

export const getVideosByCategory = (keyword) => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });
    const { data } = await request("/search", {
      params: {
        part: "snippet",
        maxResults: 10,
        pageToken: getState().homeVideos.nextPageToken,
        q: keyword,
        type: "video",
      },
    });

    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: keyword,
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};

export const getVideoDetailsById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: VIDEO_DETAILS_REQUEST,
    });
    const { data } = await request("/videos", {
      params: {
        part: "snippet, statistics",
        id: id,
      },
    });

    dispatch({
      type: VIDEO_DETAILS_SUCCESS,
      payload: data.items[0],
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: VIDEO_DETAILS_FAIL,
      payload: error.message,
    });
  }
};
