export const INITIAL_STATE = {
  isLoading: false,
  error: null,
  woeid: null,
  weather: null
};

export const GET_WOEID_BEGIN = "GET_WOEID_BEGIN";
export const GET_WOEID_SUCCESS = "GET_WOEID_SUCCESS";
export const GET_WOEID_ERROR = "GET_WOEID_ERROR";
export const GET_WEATHER_BEGIN = "GET_WEATHER_BEGIN";
export const GET_WEATHER_SUCCESS = "GET_WEATHER_SUCCESS";
export const GET_WEATHER_ERROR = "GET_WEATHER_ERROR";
