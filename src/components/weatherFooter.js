import React from 'react';
import TemperatureSelector from '../containers/tempSelector';
import RefreshController from '../containers/refresh';

export default () => {
  return (
    <div className="card-footer d-flex justify-content-between">
      <TemperatureSelector />
      <RefreshController />
    </div>
  )
}
