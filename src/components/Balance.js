import React, {Component} from 'react';
import Stats from './Stats'
import Logo from './Logo'

class Balance extends Component{

  constructor(props) {
    super(props);
  }

  render() {

    return <section className='Balance'>
        <Stats title = {'My balance'} value = {`$${921.48}`}/>
        <Logo />
    </section>;

  }


}

export default Balance;