import OWMService from '../services/OWMService';
import moment from 'moment-timezone';

export const LOAD_WEATHER = 'LOAD_WEATHER';
export const WEATHER_LOADING = 'WEATHER_LOADING';
export const WEATHER_LOADED = 'WEATHER_LOADED';
export const SET_TEMP_SCALE = 'SET_TEMP_SCALE';

export const loadWeather = (city, scale='celsius') => dispatch => {
  
  // tell the UI we're loading (in case of delay)
  dispatch({ type: WEATHER_LOADING });
  
  const svc = new OWMService(city);
  const units = scale === 'celsius' ? 'metric' : 'imperial';

  // call the OWM service and handle the response
  return svc.getCurrent(units)
    .then(results => {
      return dispatch({ type: WEATHER_LOADED, payload: results });
    })
    .catch(err => {
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
