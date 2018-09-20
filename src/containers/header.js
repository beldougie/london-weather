import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/App.css';
import sun from '../assets/img/sun.svg';

class Header extends Component {
	constructor(props = { city: '' }) {
		super(props);
		this.state = this.parseProps(props);
	}

	parseProps({ city = '' }) {
		const [cityName = '', region = ''] = city.split(',');
		return { cityName, region }
	}

	getTitle() {
		return `${this.state.cityName}${this.state.region ? `, ${this.state.region.toUpperCase()}` : ''}`;
	}
	
	render() {
		return (
			<header className="app-header">
				<img src={sun} className="app-logo" alt="logo" />
				<h1 className="app-title">{this.getTitle()}</h1>
			</header>
		);
	}
}

const mapStateToProps = state => {
	return {
		city: state.weather.city
	}
}

export default connect(mapStateToProps)(Header);
