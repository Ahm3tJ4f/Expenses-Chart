import React, {Component} from 'react';

class Logo extends Component{

  constructor(props) {
    super(props);
  }

  render() {

    return <div className='Logo'>
      <div className='Logo__Circle Logo__Circle_empty'></div>
      <div className='Logo__Circle Logo__Circle_filled'></div>
    </div>;

  }


}

export default Logo;