import React from "react";
import { connect } from "react-redux";

import Loader from "./Loader";
import { getWoeid } from "../actions";
import "./Weather.scss";

const Weather = ({ isLoading, error, woeid, weather, getWoeid }) => {
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  const clickHandler = () => {
    console.log({ isLoading, error, woeid, weather });
    getWoeid();
    console.log({ isLoading, error, woeid, weather });
  };

  return (
    <div className="weather">
      <div>This is the weather app</div>
      <button onClick={clickHandler}>woeid</button>
    </div>
  );
};

const mapStateToProps = state => {
  console.log({ state });
  return {
    isLoading: state.isLoading,
    error: state.error,
    woeid: state.woeid,
    weather: state.weather
  };
};

export default connect(mapStateToProps, { getWoeid })(Weather);
