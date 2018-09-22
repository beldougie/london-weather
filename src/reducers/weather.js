import * as WeatherActions from '../actions/weather';

const initialState = {
  city: 'London,uk',
  tempScale: 'celsius',
  current: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case WeatherActions.WEATHER_LOADED:
      return {
        city: state.city,
        tempScale: state.tempScale,
        current: { ...action.payload }
      }

    case WeatherActions.SET_TEMP_SCALE:
      return {
        ...state,
        tempScale: action.payload
      }

    default:
      return { ...state };
  }
}
