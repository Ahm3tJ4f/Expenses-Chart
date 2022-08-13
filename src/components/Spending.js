import React, {Component} from 'react';
import Chart from './Chart'
import Stats from './Stats'

class Spending extends Component{

  constructor(props) {
    super(props);
  }

  render() {

    
    const amountOfSpend = 227.94;
    const percantageLastSpent = 2.4;

    return <section className='Spending'>
        <Chart value = {amountOfSpend}/>

        <div className = 'divider'></div>

        <div className='Spending__desc-box'>
          <Stats statsType = 'secondary' title = {'Total this month'} value = {`$${amountOfSpend}`} />
          <Stats statsType = 'tertiary' title = {'from last month'} value = {`+${percantageLastSpent}`}/>
        </div>
      </section>;

  }


}

export default Spending;