import React, { Component } from 'react';

class Stats extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={`Stats Stats__${this.props.statsType}`}>
      <span className='Stats__title'>{this.props.title}</span>
      <p className='Stats__price'>{this.props.value}</p>
    </div>;
  }
}

export default Stats;
