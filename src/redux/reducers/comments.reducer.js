import {
  COMMENTS_REQUEST,
  COMMENTS_SUCCESS,
  COMMENTS_FAIL,
} from "../actionTypes";

export const commentsReducer = (
  state = {
    loading: true,
    comments: null,
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case COMMENTS_REQUEST:
      return { ...state, loading: true };
    case COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: payload,
      };
    case COMMENTS_FAIL:
      return {
        ...state,
        loading: false,
        comments: null,
        error: payload,
      };
    default:
      return state;
  }
};
