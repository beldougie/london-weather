import React, { Component } from 'react';
import { connect } from 'react-redux';
import { refreshCurrent } from '../actions/weather';

class RefreshControl extends Component {

  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.state = {
      refreshPeriod: 300,
      interval: null,
      periods: [
        [60, '1 min'],
        [300, '5 mins'],
        [3600, '1 hour'],
        [0, 'never']
      ]
    }
  }

  setInterval() {
    if(this.state.interval !== null) clearInterval(this.state.interval);
    if(this.state.refreshPeriod === 0) return this.setState({ interval: null });

    const interval = setInterval(() => this.dispatch(refreshCurrent()), this.state.refreshPeriod * 1000);
    this.setState({ interval });    
  }

  buildClickHandler(value) {
    return () => this.setState({ refreshPeriod: value }, () => this.setInterval());
  }

  renderButton(label, value, isActive) {
    const active = isActive ? 'active' : '';
    return (
      <button className={`btn btn-info ${active}`} onClick={this.buildClickHandler(value)} key={value}>
        {label}
      </button>
    );
  }

  render() {
    return (
      <div className="btn-group">
        {this.state.periods.map(([period, label]) => {
          return this.renderButton(label, period, period === this.state.refreshPeriod);
        })}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { dispatch };
}

export default connect(null, mapDispatchToProps)(RefreshControl);
