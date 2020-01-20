import React from "react";
import { connect } from "react-redux";

import Loader from "./Loader";
import { getWoeid, handleChange, getWeather } from "../actions";
import "./Weather.scss";

const Weather = props => {
  console.log({ props1: props });
  /*
  if (props.isLoading) {
    return <Loader />;
  }
  */
  if (props.error) {
    return <div>{props.error.message}</div>;
  }

  const clickHandler = () => {
    console.log({ props2: props });
    props.getWoeid();
    console.log({ props3: props });
  };
  const handleChange2 = event => {
    props.handleChange(event.target.value);
    props.getWoeid();
  };

  return (
    <div className="weather">
      <div>
        This is the weather app
        <form>
          <input
            list="browsers"
            name="browser"
            onChange={handleChange2}
            value={props.location}
          />
          <datalist id="browsers">
            {props.woeid
              ? props.woeid.map(item => (
                  <option key={item.woeid} value={item.title} />
                ))
              : ""}
          </datalist>
          <input type="submit" />
        </form>
      </div>

      <button onClick={clickHandler}>woeid</button>
      <button onClick={props.getWeather}>weather</button>
      <ul></ul>
    </div>
  );
};

const mapStateToProps = state => {
  console.log({ state });
  console.log(state);
  return {
    isLoading: state.woeidReducer.isLoading,
    error: state.woeidReducer.error,
    woeid: state.woeidReducer.woeid,
    weather: state.weatherReducer.weather
  };
};

export default connect(mapStateToProps, { getWoeid, handleChange, getWeather })(
  Weather
);
