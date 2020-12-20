import { combineReducers } from "redux";

import { episodeListReducer as episodeList } from "./episodeList"
import { showInfoReducer as showInfo } from "./showInfo"

export default combineReducers({
  episodeList,
  showInfo
});
