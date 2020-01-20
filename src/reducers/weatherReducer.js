import * as types from "../actions/types";

export default function weatherReducer(state = types.INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_WEATHER_BEGIN:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_WEATHER_SUCCESS:
      console.log({ reducerstate2: state });
      console.log({ reduceraction2: action });
      return {
        ...state,
        isLoading: false,
        weather: action.weather
      };
    case types.GET_WEATHER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
}
