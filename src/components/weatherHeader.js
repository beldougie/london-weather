import React from 'react';
import CurrentWeatherIcon from '../containers/currentIcon';
import Clock from './clock';

export default ({ main, description }) => {
	return (
    <div className="d-flex flex-column flex-md-row text-left text-xs-center align-items-center justify-content-between card-header">
      <div>
        <CurrentWeatherIcon />
      </div>
      <div>
        <h3 className="card-title">{`${main} - ${description}`}</h3>
      </div>
      <div>
        <Clock timezone="Europe/London" />
      </div>
    </div>
  )
}
