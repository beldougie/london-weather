import React, { Component } from 'react';
import { connect } from 'react-redux';
import OwmIcon from '../components/owmIcon';

class CurrentWeatherIcon extends Component {
	constructor(props) {
		super(props);
		this.state = { ...props };
	}

	render() {
		return <OwmIcon {...this.state} classOverrides="current-weather float-left" />
	}
}

const mapStateToProps = state => {
	const { weather, sys } = state.weather.current;
	const { sunrise, sunset } = sys;
	
	return {
		id: weather[0].id,
		sunrise,
		sunset
	}
}

export default connect(mapStateToProps)(CurrentWeatherIcon);
