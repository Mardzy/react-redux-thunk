import { combineReducers } from "redux";

import { episodesReducer as episodes } from "./episodes"
import { showInfoReducer as showInfo } from "./show"

export default combineReducers({
  episodes,
  showInfo
});
