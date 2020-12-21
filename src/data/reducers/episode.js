import {
  FETCH_EPISODE_FAILED,
  FETCH_EPISODE_PENDING,
  FETCH_EPISODE_SUCCESS
} from "../types";

/**
 * @type {{data: {}, loading: boolean, error: string|null}}
 */
const initialState = {
  loading: true,
  data: {},
  error: null
};

/**
 * @param {{data: {}, loading: boolean, error: (string|null)}} state
 * @param {{type: string, payload: {}}} action
 * @return {{data: {}, loading: boolean, error: {}}}
 */
export const episodeReducer = (state = initialState, { type, payload } ) => {
  switch (type) {
    case FETCH_EPISODE_PENDING:
      return {
        loading: true,
        data: {},
        error: null
      };
    case FETCH_EPISODE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: null
      }
    case FETCH_EPISODE_FAILED:
      return {
        ...state,
        loading: false,
        data: {},
        error: payload
      }
    default:
      return state;
  }
};
