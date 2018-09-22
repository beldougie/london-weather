import React from 'react';
import TemperatureSelector from '../containers/tempSelector';
import RefreshController from '../containers/refresh';

export default () => {
  return (
    <div className="card-footer d-flex flex-column flex-sm-row justify-content-sm-between">
      <TemperatureSelector />
      <RefreshController />
    </div>
  )
}
