import {
  FETCH_SHOW_INFO_FAILED,
  FETCH_SHOW_INFO_PENDING,
  FETCH_SHOW_INFO_SUCCESS, PERSIST_REHYDRATE
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
export const showInfoReducer = (state = initialState, { type, payload } ) => {
  console.log("type: ", !!payload, type);
  switch (type) {
    case FETCH_SHOW_INFO_PENDING:
      return {
        loading: true,
        data: {},
        error: null
      };
    case FETCH_SHOW_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: null
      }
    case FETCH_SHOW_INFO_FAILED:
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
