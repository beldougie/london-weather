import React from 'react';

export default ({ temp, scale, pressure, humidity }) => {
  return (
    <div className="weather-details d-flex justify-content-center flex-md-row flex-column align-items-center">
      <div className="text-xs-center text-md-center col-xs-5 col-sm-6 col-md-4">
        <i className="wi wi-thermometer" title="Temperature"></i>
         {` ${temp}`}
         <sup><i className={`wi wi-${scale}`}></i></sup>
      </div>
      <div className="text-xs-center text-md-center col-xs-5 col-sm-6 col-md-4">
        <i className="wi wi-barometer" title="Air pressure"></i>
        {` ${pressure}`}
      </div>
      <div className="text-xs-center text-md-center col-xs-5 col-sm-6 col-md-4">
        <i className="wi wi-humidity" title="Humidity"></i>
         {` ${humidity}%`}
      </div>
    </div>
  );
}
  