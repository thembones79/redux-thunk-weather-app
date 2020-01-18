import React from "react";
import "./Weather.scss";

const Weather = ({ isLoading }) => {
  if (isLoading) {
    return <div>Loading...SPINNER</div>;
  }

  return (
    <div className="weather">
      <div>This is the weather app</div>
    </div>
  );
};

export default Weather;
