import OWMService from '../services/OWMService';
import moment from 'moment-timezone';

export const WEATHER_LOADED = 'WEATHER_LOADED';
export const SET_TEMP_SCALE = 'SET_TEMP_SCALE';

export const loadWeather = (city, scale='celsius') => dispatch => {
  const svc = new OWMService(city);
  const units = scale === 'celsius' ? 'metric' : 'imperial';

  // call the OWM service and handle the response
  return svc.getCurrent(units)
    .then(results => {
      return dispatch({ type: WEATHER_LOADED, payload: results });
    })
    .catch(err => {
      // while the HTTP error is handled here, this path isn't implemented in the UI
      return dispatch({ type: WEATHER_LOADED, payload: { error: err } });
    });
};

export const setTemperatureScale = scale => (dispatch, getState) => {
  const { city } = getState().weather;
  dispatch({ type: SET_TEMP_SCALE, payload: scale });
  return dispatch(loadWeather(city, scale));
}

export const refreshCurrent = () => (dispatch, getState) => {
  const { city, tempScale } = getState().weather;
  console.log('weather last refreshed at', moment().toISOString());
  return dispatch(loadWeather(city, tempScale));
}
