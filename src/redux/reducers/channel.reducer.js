import {
  CHANNEL_DETAILS_REQUEST,
  CHANNEL_DETAILS_SUCCESS,
  CHANNEL_DETAILS_FAIL,
} from "../actionTypes";

export const channelDetailsReducer = (
  state = {
    loading: true,
    channel: null,
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case CHANNEL_DETAILS_REQUEST:
      return { ...state, loading: true };
    case CHANNEL_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        channel: payload,
      };
    case CHANNEL_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        channel: null,
        error: payload,
      };
    default:
      return state;
  }
};
