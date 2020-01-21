import React from "react";
import { connect } from "react-redux";

import Loader from "./Loader";
import { getWoeid, handleChange, getWeather } from "../actions";
import "./Weather.scss";

const Weather = props => {
  if (props.error) {
    return <div>{props.error.message}</div>;
  }

  const clickHandler = event => {
    event.preventDefault();
    if (props.woeid) {
      props.getWeather();
    }
  };
  const changeHandler = event => {
    console.log(event.target.value);
    console.log({ props });
    props.handleChange(event.target.value);
    if (event.target.value !== "") {
      props.getWoeid();
    }
  };

  return (
    <div className="weather">
      <h2 className="weather__header">current weather</h2>

      <form onSubmit={clickHandler} className="weather__form">
        <input
          list="locations"
          name="location"
          onChange={changeHandler}
          value={props.location}
          className="weather__input"
        />
        <datalist id="locations" className="weather__datalist">
          {props.woeid
            ? props.woeid.map(item => (
                <option key={item.woeid} value={item.title} />
              ))
            : ""}
        </datalist>
        <input
          type="submit"
          value="get it"
          className="weather__input--submit"
        />
      </form>

      {props.isLoading ? (
        <Loader />
      ) : (
        <div>
          {props.weather ? (
            <div className="weather__state">
              <img
                className="weather__icon"
                src={`https://www.metaweather.com/static/img/weather/${props.weather.consolidated_weather[0].weather_state_abbr}.svg`}
                alt={props.weather.consolidated_weather[0].weather_state_name}
              />
              <p className="weather__temperature">
                {parseInt(props.weather.consolidated_weather[0].the_temp)}°
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.weatherReducer.isLoading,
    error: state.woeidReducer.error,
    woeid: state.woeidReducer.woeid,
    weather: state.weatherReducer.weather,
    location: state.formChangeReducer.location
  };
};

export default connect(mapStateToProps, { getWoeid, handleChange, getWeather })(
  Weather
);
