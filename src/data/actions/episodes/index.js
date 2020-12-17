import { tvMaze } from "../../axios";
import { FETCH_EPISODES } from "../../types";

export const fetchEpisodes = (url) => async (dispatch) => {
  const response = await tvMaze.get(url);
  console.log("response: ", response);
  dispatch({ type: FETCH_EPISODES, payload: response });
};
