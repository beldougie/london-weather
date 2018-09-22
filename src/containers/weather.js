import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash.isempty';
import { loadWeather } from '../actions/weather';
import WeatherHeader from '../components/weatherHeader';
import WeatherDetail from '../components/weatherDetail';
import WeatherFooter from '../components/weatherFooter';

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
		if(isEmpty(this.state.current)) {
			return (<h1>LOADING!</h1>);
		}

    return (
			<div className="weather-panel">
				<div className="card text-left">
					<WeatherHeader {...this.state.current.weather[0]} />
					<div className="card-body">
            <WeatherDetail {...this.state.current.main} scale={this.state.tempScale} />
					</div>
          <WeatherFooter />
				</div>
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
