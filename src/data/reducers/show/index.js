import {
  FETCH_SHOW_INFO_FAILED,
  FETCH_SHOW_INFO_PENDING,
  FETCH_SHOW_INFO_SUCCESS
} from "../../types";

/**
 *
 * @type {{data: {}, loading: boolean, error: string|null}}
 */
const initialState = {
  loading: false,
  data: {},
  error: null
}

/**
 *
 * @param {{data: {}, loading: boolean, error: (string|null)}} state
 * @param {{type: string}} action
 * @return {{data: [], loading: boolean, error}|{data: {}, loading: boolean, error: (string|null)}|{data, loading:
 *   boolean, error: null}}
 */
export const showInfoReducer = (state = initialState, action ) => {
  switch (action.type) {
    case FETCH_SHOW_INFO_PENDING:
      return {
        ...state,
        loading: true
      }
    case FETCH_SHOW_INFO_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null
      }
    case FETCH_SHOW_INFO_FAILED:
      return {
        loading: false,
        data: {},
        error: action.payload
      }
    default:
      return state;
  }
};
