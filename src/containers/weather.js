import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash.isempty';
import { loadWeather } from '../actions/weather';
import WeatherHeader from '../components/weatherHeader';
import CurrentWeatherIcon from './currentIcon';

class WeatherContainer extends Component {
  constructor(props) {
		super(props)
    this.dispatch = props.dispatch;
    this.state = { ...props };
	}
	
	static getDerivedStateFromProps(nextProps, prevState) {
		// TODO this is too basic... make sure no mutation can occur
		return {
			...prevState,
			...nextProps
		} 
	}

  componentDidMount() {
    if (isEmpty(this.state.current)) {
			this.dispatch(loadWeather(this.state.city))
    }
  }

  render() {
    return (
			<div className="weather-panel">
				<div className="card text-left">
					<div className="card-header">Current Weather</div>
					<div className="card-body">
						<CurrentWeatherIcon />
						<WeatherHeader {...this.state.current.weather[0]} />
					</div>
				</div>
				<pre>{JSON.stringify(this.state, null, 2)}</pre>
			</div>
		)
  }
}

const mapStateToProps = state => {
  return {
		...state.weather,
		current: { ...state.weather.current }
  };
}

const mapDispatchToProps = dispatch => {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);
