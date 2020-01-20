import * as types from "../actions/types";

export default function formChangeReducer(state = types.INITIAL_STATE, action) {
  switch (action.type) {
    case types.CHANGE_FORM_VALUE:
      return {
        ...state,
        location: action.location
      };

    default:
      return state;
  }
}
