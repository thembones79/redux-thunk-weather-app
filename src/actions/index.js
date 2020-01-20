import * as types from "./types";

export function getWoeid() {
  return (dispatch, getState) => {
    let x = getState();
    dispatch({ type: types.GET_WOEID_BEGIN });
    fetch(
      `https://weather.daveceddia.com/api/location/search/?query=${x.formChangeReducer.location}`
    )
      .then(res => res.json())
      .then(json => {
        console.log({ json });
        console.log({ getState: getState() });
        dispatch({
          type: types.GET_WOEID_SUCCESS,
          woeid: json
        });
      })
      .catch(error => {
        dispatch({ type: types.GET_WOEID_ERROR, error });
      });
  };
}

export function getWeather() {
  return (dispatch, getState) => {
    let x = getState();
    dispatch({ type: types.GET_WEATHER_BEGIN });
    fetch(
      `https://weather.daveceddia.com/api/location/${x.woeidReducer.woeid[0].woeid}`
    )
      .then(res => res.json())
      .then(json => {
        console.log({ json2: json });
        console.log({ getState2: getState() });
        dispatch({
          type: types.GET_WEATHER_SUCCESS,
          weather: json
        });
      })
      .catch(error => {
        dispatch({ type: types.GET_WEATHER_ERROR, error });
      });
  };
}

export const handleChange = event => {
  return {
    type: types.CHANGE_FORM_VALUE,
    location: event
  };
};
