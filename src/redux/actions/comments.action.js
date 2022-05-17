import {
  COMMENTS_REQUEST,
  COMMENTS_SUCCESS,
  COMMENTS_FAIL,
} from "../actionTypes";
import request from "../../api";

export const getCommentsByVideoId = (videoId) => async (dispatch) => {
  try {
    dispatch({
      type: COMMENTS_REQUEST,
    });
    const { data } = await request("/commentThreads", {
      params: {
        part: "snippet",
        videoId,
      },
    });

    dispatch({
      type: COMMENTS_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    dispatch({
      type: COMMENTS_FAIL,
      payload: error.message,
    });
  }
};
