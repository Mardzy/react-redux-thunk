import { tvMaze } from "../axios";
import {
  FETCH_EPISODE_FAILED,
  FETCH_EPISODE_PENDING,
  FETCH_EPISODE_SUCCESS
} from "../types";

export const fetchEpisodePending = {
  type: FETCH_EPISODE_PENDING
}

export const fetchEpisodeSuccess = payload =>
  ({ type: FETCH_EPISODE_SUCCESS, payload })

export const fetchEpisodeFailed = payload =>
  ({ type: FETCH_EPISODE_FAILED, payload })

export const fetchEpisode = showId =>
  async dispatch => {
    dispatch(fetchEpisodePending);
    try {
      const { data } = await tvMaze.get(showId);

      dispatch(fetchEpisodeSuccess(data));
    } catch ({ message }) {
      dispatch(fetchEpisodeFailed(message));
    }
  };

