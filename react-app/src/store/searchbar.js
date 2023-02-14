import { FULL_RESET } from "./full-reset";

const SET_VALUE = "searchbar/SET_VALUE";

export const setSearchbarValue = (value) => {
  return {
    type: SET_VALUE,
    value,
  };
};

const defaultState = {
  value: "",
};

const searchbarReducer = (state = defaultState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case FULL_RESET:
      return { ...defaultState };

    case SET_VALUE:
      newState.value = action.value || "";
      return newState;

    default:
      return state;
  }
};

export default searchbarReducer;

export function selectSearchbarValue(state) {
  return state.searchbar.value;
}
