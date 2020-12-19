import { combineReducers } from "redux";

import { episodeListReducer as episodeList } from "./episodeList"
import { showInfoReducer as showInfo } from "./show"

export default combineReducers({
  episodeList,
  showInfo
});
