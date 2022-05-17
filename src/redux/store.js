import { createStore, applyMiddleware, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { authReducer } from "./reducers/auth.reducer";
import { channelDetailsReducer } from "./reducers/channel.reducer";
import { commentsReducer } from "./reducers/comments.reducer";
import {
  homeVideosReducer,
  videoDetailsReducer,
} from "./reducers/videos.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
  videoDetails: videoDetailsReducer,
  channelDetails: channelDetailsReducer,
  comments: commentsReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
