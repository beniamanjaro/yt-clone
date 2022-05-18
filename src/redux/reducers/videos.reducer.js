import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  VIDEO_DETAILS_FAIL,
  VIDEO_DETAILS_REQUEST,
  VIDEO_DETAILS_SUCCESS,
  RELATED_VIDEOS_SUCCESS,
  RELATED_VIDEOS_REQUEST,
  RELATED_VIDEOS_FAIL,
} from "../actionTypes";

export const homeVideosReducer = (
  state = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory: "All",
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case HOME_VIDEOS_SUCCESS:
      return {
        ...state,
        videos:
          state.activeCategory === payload.category
            ? [...state.videos, ...payload.videos]
            : payload.videos,
        loading: false,
        nextPageToken: payload.nextPageToken,
        activeCategory: payload.category,
      };
    case HOME_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case HOME_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export const videoDetailsReducer = (
  state = {
    loading: true,
    video: null,
  },
  action
) => {
  const { payload, type } = action;
  switch (type) {
    case VIDEO_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case VIDEO_DETAILS_SUCCESS:
      return {
        ...state,
        video: payload,
        loading: false,
      };
    case VIDEO_DETAILS_FAIL:
      return {
        ...state,
        video: null,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const relatedVideosReducer = (
  state = { loading: false, videos: [] },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case RELATED_VIDEOS_REQUEST:
      return { ...state, loading: true };
    case RELATED_VIDEOS_SUCCESS:
      return { ...state, loading: false, videos: payload };
    case RELATED_VIDEOS_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
