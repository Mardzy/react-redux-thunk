import { FETCH_EPISODES_SUCCESS } from "../../types";

export const episodesReducer = (state = [], action ) => {
  switch (action.type) {
    case FETCH_EPISODES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
