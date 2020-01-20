import * as types from "../actions/types";

export default function woeidReducer(state = types.INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_WOEID_BEGIN:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_WOEID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        woeid: action.woeid
      };
    case types.GET_WOEID_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
}
