import React from 'react';

export default props => {
  return (
    <ul className="list-group text-center d-flex flex-row">
      <li className="list-group-item flex-fill"><strong><i className="wi wi-thermometer" title="Temperature"></i></strong> {props.temp}</li>
      <li className="list-group-item flex-fill"><strong><i className="wi wi-barometer" title="Air pressure"></i></strong> {props.pressure}</li>
      <li className="list-group-item flex-fill"><strong><i className="wi wi-humidity" title="Humidity"></i></strong> {props.humidity}%</li>
    </ul>
  );
}
  