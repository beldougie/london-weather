import React, { Component } from 'react';
import moment from 'moment-timezone';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { tz: props.timezone };
    this.state.time = moment.tz(this.state.tz);
    setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    this.setState({ time: moment.tz(this.state.tz) });
  }

  render() {
    return <h4>{ this.state.time.format('HH:mm:ss z') }</h4>
  }
}

export default Clock;
