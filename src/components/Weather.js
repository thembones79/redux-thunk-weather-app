import React from "react";
import Loader from "./Loader";
import "./Weather.scss";

const Weather = ({ isLoading = true }) => {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="weather">
      <div>This is the weather app</div>
    </div>
  );
};

export default Weather;
