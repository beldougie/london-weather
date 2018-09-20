import * as WeatherActions from '../actions/weather';

const initialState = {
  city: 'London,uk',
  loading: false,
  current: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case WeatherActions.WEATHER_LOADING:
      return {
				loading: true,
				city: state.city,
        current: { ...state.current }
      };

    case WeatherActions.WEATHER_LOADED:
      return {
				loading: false,
				city: state.city,
        current: { ...action.payload }
      }

    default:
      return { ...state };
  }
}
