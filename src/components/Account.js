import React, {Component} from 'react';
import Balance from './Balance'
import Spending from './Spending'
import '../style/main.scss'

class Account extends Component{

  constructor(props) {
    super(props);
  }

  render() {

    return <main className='Account'>
        <Balance />
        <Spending />
    </main>;

  }


}

export default Account;