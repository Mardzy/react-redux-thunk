import { combineReducers } from "redux";

import { episodeReducer as episode } from "./episode"
import { episodeListReducer as episodeList } from "./episodeList"
import { showInfoReducer as showInfo } from "./showInfo"

export default combineReducers({
  episode,
  episodeList,
  showInfo
});
