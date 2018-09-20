import OWMService from '../services/OWMService';

export const LOAD_WEATHER = 'LOAD_WEATHER';
export const WEATHER_LOADING = 'WEATHER_LOADING';
export const WEATHER_LOADED = 'WEATHER_LOADED';

export const loadWeather = city => dispatch => {
  const svc = new OWMService(city);
	
	// tell the UI we're loading (in case of delay)
	dispatch({ type: WEATHER_LOADING });

	// call the OWM service and handle the response
	return svc.getCurrent()
    .then(results => {
      return dispatch({ type: WEATHER_LOADED, payload: results });
    })
    .catch(err => {
      return dispatch({ type: WEATHER_LOADED, payload: { error: err } });
    });
};
