import { FETCH_SHOW_INFO } from "../index";

export const showInfoReducer = (state = {}, action ) => {
  switch (action.type) {
    case FETCH_SHOW_INFO:
      return action.payload;
    default:
      return state;
  }
};
