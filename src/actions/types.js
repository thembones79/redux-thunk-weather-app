export const INITIAL_STATE = {
  location: null,
  isLoading: false,
  error: null,
  woeid: null,
  weather: null
};

export const CHANGE_FORM_VALUE = "CHANGE_FORM_VALUE";
export const GET_WOEID_BEGIN = "GET_WOEID_BEGIN";
export const GET_WOEID_SUCCESS = "GET_WOEID_SUCCESS";
export const GET_WOEID_ERROR = "GET_WOEID_ERROR";
export const GET_WEATHER_BEGIN = "GET_WEATHER_BEGIN";
export const GET_WEATHER_SUCCESS = "GET_WEATHER_SUCCESS";
export const GET_WEATHER_ERROR = "GET_WEATHER_ERROR";
