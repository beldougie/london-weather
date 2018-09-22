import React from 'react';
import CurrentWeatherIcon from '../containers/currentIcon';

export default ({ main, description }) => {
	return (
    <div className="d-flex align-items-center card-header">
      <div>
        <CurrentWeatherIcon />
      </div>
      <div>
        <h5 className="card-title">{`${main} - ${description}`}</h5>
      </div>
    </div>
  )
}
