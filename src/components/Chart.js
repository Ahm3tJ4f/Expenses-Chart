import React, {Component} from 'react';
import Record from './Record'

class Chart extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    let weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    const entries = weekDays.map( (entry, ) => {
      return <Record key = {Math.random()} entry = {entry} />
    })

    return <div className='Chart'>
        <h3 className='Chart__title'>Spending - Last 7 days</h3>
        <div className = 'Chart__canvas'>
          {entries}
        </div>
    </div>;
  }
}
export default Chart;