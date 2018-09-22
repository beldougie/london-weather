import React from 'react';

export default ({ temp, scale, pressure, humidity }) => {
  return (
    <div className="weather-details d-flex justify-content-center flex-column flex-md-row align-items-center">
      <div className="text-left col-12 col-sm-6 col-md-4 d-md-flex flex-md-column text-md-center">
        <i className="wi wi-thermometer" title="Temperature"></i>
        <span>
          {` ${temp}`}
          <sup><i className={`wi wi-${scale}`}></i></sup>
        </span>
      </div>
      <div className="text-left col-12 col-sm-6 col-md-4 d-md-flex flex-md-column text-md-center">
        <i className="wi wi-barometer" title="Air pressure"></i>
        {` ${pressure}`}
      </div>
      <div className="text-left col-12 col-sm-6 col-md-4 d-md-flex flex-md-column text-md-center">
        <i className="wi wi-humidity" title="Humidity"></i>
         {` ${humidity}%`}
      </div>
    </div>
  );
}
  