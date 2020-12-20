import { tvMaze } from "../axios";

import {
  FETCH_EPISODE_LIST_FAILED,
  FETCH_EPISODE_LIST_PENDING,
  FETCH_EPISODE_LIST_SUCCESS
} from "../types";

/**
 * @type {{type: string}}
 */
export const fetchEpisodeListPending = {
  type: FETCH_EPISODE_LIST_PENDING
};

/**
 * @param payload
 * @return {{payload, type: string}}
 */
export const fetchEpisodeListSuccess = payload =>
  ({ type: FETCH_EPISODE_LIST_SUCCESS, payload })

/**
 * @param payload
 * @return {{payload, type: string}}
 */
export const fetchEpisodeListFailed = payload =>
  ({ type: FETCH_EPISODE_LIST_FAILED, payload })

/**
 * @return {function(*): Promise<void>}
 */
export const fetchEpisodeList = (id) =>
  async dispatch => {
    const path = `${id}/episodes`;
    try {
      dispatch(fetchEpisodeListPending)
      console.log("", );
      const { data } = await tvMaze.get(path);

      dispatch(fetchEpisodeListSuccess(data));
    }
    catch ({ message }) {
      dispatch(fetchEpisodeListFailed(message))
    }
  };
