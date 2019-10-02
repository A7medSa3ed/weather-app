import React from "react";
const Weather = props => {
  return (
    <div className="info">
      {props.weather.temp && (
        <div>
          <p className="info_key">
            CITY: <span className="info_value">{props.weather.city}</span>
          </p>
          <p className="info_key">
            COUNTRY: <span className="info_value">{props.weather.country}</span>
          </p>
          <p className="info_key">
            TEMP: <span className="info_value">{props.weather.temp}</span>
          </p>
          <p className="info_key">
            HUMIDITY:
            <span className="info_value">{props.weather.humidity}</span>
          </p>
          <p className="info_key">
            DESCRIPTION:
            <span className="info_value">{props.weather.description}</span>
          </p>
        </div>
      )}
      {props.weather.error && (
        <p className="info_key"> {props.weather.error} </p>
      )}
    </div>
  );
};

export default Weather;
