import * as types from "./types";

export function getWoeid() {
  return (dispatch, getState) => {
    dispatch({ type: types.GET_WOEID_BEGIN });
    fetch("https://weather.daveceddia.com/api/location/search/?query=san")
      .then(res => res.json())
      .then(json => {
        console.log({ json });
        dispatch({
          type: types.GET_WOEID_SUCCESS,
          woeid: json.data
        });
      })
      .catch(error => {
        dispatch({ type: types.GET_WOEID_ERROR, error });
      });
  };
}
