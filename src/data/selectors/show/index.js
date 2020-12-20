import { createSelector } from "reselect";

import { store } from "../../store";

export const showIdSelector = () => {
  const { showInfo: { data: { id }} } = store.getState();

  return id;
}
