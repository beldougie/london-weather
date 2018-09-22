import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setTemperatureScale } from '../actions/weather';

class TemperatureSelector extends Component {
  constructor(props) {
    super(props);
    this.state = { active: props.active };
    this.dispatch = props.dispatch;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
		return {
			...prevState,
			...nextProps
		} 
	}

  renderButton(scale) {
    const active = this.state.active === scale ? 'active' : '';
    return (
      <label className={`btn btn-info ${active}`} onClick={this.buildClickHandler(scale)}>
        <i className={`wi wi-${scale}`}></i>
      </label>
    );
  }

  buildClickHandler(scale) {
    return () => {
      this.dispatch(setTemperatureScale(scale));
    }
  }
  
  render() {
    return (
      <div className="btn-group btn-group">
        {this.renderButton('fahrenheit', this.state.active)}
        {this.renderButton('celsius', this.state.active)}
      </div>
    )
  }
}

export const mapStateToProps = state => {
  return {
    active: state.weather.tempScale
  }
}

export const mapDispatchToProps = dispatch => {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(TemperatureSelector);
