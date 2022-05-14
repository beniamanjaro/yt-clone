import {
  CHANNEL_DETAILS_REQUEST,
  CHANNEL_DETAILS_SUCCESS,
  CHANNEL_DETAILS_FAIL,
} from "../actionTypes";
import request from "../../api";

export const getChannelDetailsById = (channelId) => async (dispatch) => {
  try {
    dispatch({
      type: CHANNEL_DETAILS_REQUEST,
    });
    const { data } = await request("/channels", {
      params: {
        part: "snippet, statistics",
        id: channelId,
      },
    });

    dispatch({
      type: CHANNEL_DETAILS_SUCCESS,
      payload: data.items[0],
    });
  } catch (error) {
    dispatch({
      type: CHANNEL_DETAILS_FAIL,
      payload: error.message,
    });
  }
};
