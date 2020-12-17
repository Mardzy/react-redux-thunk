import { tvMaze } from "../../apis";

export const fetchEpisodes = (url) => async (dispatch) => {
  const response = await tvMaze.get(url);
  console.log("response: ", response);
  dispatch({ type: FETCH_EPISODES, payload: response });
};
