import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { showInfoReducer as showInfo } from "../showInfo";
import { episodesReducer as episodes } from "../episodes"

const combinedReducers = combineReducers({
  episodes,
  showInfo
})


export const store = createStore(combinedReducers, applyMiddleware(thunk));
